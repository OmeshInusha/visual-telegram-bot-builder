
var currentBotName = "";

if (!Blockly.Python) { console.error("Blockly.Python is missing!"); }
Blockly.Python.INDENT = '    ';

// Override finish using Blockly.Python to add imports and DB setup
// Override finish using Blockly.Python to add imports and DB setup
// Override finish using Blockly.Python to add imports and DB setup
Blockly.Python.finish = function (code) {
  var dbName = currentBotName ? currentBotName.replace(/[^a-zA-Z0-9_]/g, '') + '_data.db' : 'bot_data.db';

  // 1. Recover User's Custom Code from Editor
  var existingCustomCode = "";
  if (editor) {
    var currentContent = editor.getValue();
    // Regex to capture content between markers
    var match = currentContent.match(/# \[START_CUSTOM_CODE\]([\s\S]*?)# \[END_CUSTOM_CODE\]/);
    if (match && match[1]) {
      existingCustomCode = match[1];
      // Remove leading/trailing newlines to prevent expansion
      existingCustomCode = existingCustomCode.replace(/^\n+|\n+$/g, '');
    }
  }

  // Default placeholder if empty
  if (!existingCustomCode) {
    existingCustomCode = "\n# Write your persistent Python functions here.\n# They will be preserved when you generate blocks.\ndef my_custom_function():\n    print('Hello World')\n";
  }

  // 2. Helper imports
  var imports = `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, InlineQueryResultArticle, InputTextMessageContent, ChatPermissions
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler, MessageHandler, filters, CallbackQueryHandler, InlineQueryHandler, ChatJoinRequestHandler
import logging
import sqlite3
import requests
import json
import time
import asyncio
import os
import random
import datetime
import uuid
import re

DB_NAME = '${dbName}'

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT)''')
    conn.commit()
    conn.close()

def db_set(key, value):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT OR REPLACE INTO kv_store (key, value) VALUES (?, ?)", (str(key), str(value)))
    conn.commit()
    conn.close()

def db_get(key):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT value FROM kv_store WHERE key=?", (str(key),))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None

def safe_json_parse(json_str, key):
    try: data = json.loads(json_str); return data.get(key)
    except: return None

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
`;

  var definitions = [];
  var dynamicImports = [];

  for (var name in Blockly.Python.definitions_) {
    var def = Blockly.Python.definitions_[name];
    if (def.trim().startsWith('import ') || def.trim().startsWith('from ')) {
      dynamicImports.push(def);
    } else {
      definitions.push(def);
    }
  }

  // --- Indentation Fix for Floating Handlers ---
  var lines = code.split('\n');
  var newLines = [];
  var handlersToMove = [];
  var pollingLineIndex = -1;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.startsWith("application.add_handler(")) {
      handlersToMove.push("    " + line);
    } else {
      if (line.trim().startsWith("application.run_polling()")) {
        pollingLineIndex = newLines.length;
      }
      newLines.push(line);
    }
  }
  if (pollingLineIndex !== -1 && handlersToMove.length > 0) {
    newLines.splice(pollingLineIndex, 0, ...handlersToMove);
  } else if (handlersToMove.length > 0) {
    newLines.push(...handlersToMove.map(l => l.trim()));
  }
  code = newLines.join('\n');
  // ---------------------------------------------

  // Construct the Final File
  // Order: 
  // 1. Static Imports
  // 2. Dynamic Imports (from blocks)
  // 3. Helper Functions (Definitions)
  // 4. Custom User Code (can now use helpers)
  // 5. Main Logic

  return imports +
    '\n' + dynamicImports.join('\n') +
    '\n\n# =========================================\n' +
    '# Helper Functions (Auto-Generated)\n' +
    definitions.join('\n\n') +
    '\n\n# =========================================\n' +
    '# [START_CUSTOM_CODE]\n' +
    existingCustomCode +
    '\n# [END_CUSTOM_CODE]\n' +
    '# =========================================\n\n' +
    code;
};

// Load Toolbox from global definition
const toolbox = TOOLBOX_CONFIG;

// Editor State
let editor;
let isManualMode = false;
let isAutoSyncEnabled = true; // New Flag
let isUpdatingCode = false; // Flag to prevent triggering manual mode during auto-sync
let autoGenTimer = null;
var workspace = null;

// Load Custom Blocks dynamically
async function loadCustomBlocks() {
  try {
    const response = await fetch('/custom-blocks');
    const data = await response.json();

    // --- Auto-Generated Blocks Injection (Categorized) ---
    const autoCats = {}; // { "Sending": [blocks...], ... }

    if (Blockly.Blocks) {
      Object.keys(Blockly.Blocks).forEach(key => {
        if (key.startsWith('auto_')) {
          const def = Blockly.Blocks[key];
          const catName = def.auto_category || "Misc (API)";

          if (!autoCats[catName]) autoCats[catName] = [];
          autoCats[catName].push({ kind: "block", type: key });
        }
      });
    }

    // Add Separator
    if (Object.keys(autoCats).length > 0) {
      toolbox.contents.push({ kind: "sep" });

      // Sort Categories Alphabetically
      const sortedCatNames = Object.keys(autoCats).sort();

      sortedCatNames.forEach(catName => {
        const blocks = autoCats[catName];
        // Sort blocks inside category
        blocks.sort((a, b) => a.type.localeCompare(b.type));

        // Check if exists
        let existingCat = toolbox.contents.find(c => c.name === catName);
        if (existingCat) {
          existingCat.contents = blocks;
        } else {
          toolbox.contents.push({
            kind: "category",
            name: catName,
            colour: (catName.includes('Send') ? "160" : "210"),
            contents: blocks
          });
        }
      });
    }
    // ---------------------------------------

    let blocksByCategory = {};

    data.blocks.forEach(blockData => {
      // 1. Register Block Definition
      var jsonDef = {
        "type": blockData.type,
        "message0": blockData.message0,
        "args0": blockData.args0 || [],
        "colour": blockData.colour || 230,
        "tooltip": blockData.tooltip || "Custom Block",
        "inputsInline": blockData.inputsInline,
        "helpUrl": ""
      };

      if (blockData.output && blockData.output !== 'none') {
        jsonDef.output = blockData.output === 'Any' ? null : blockData.output;
      } else {
        if (blockData.previousStatement !== undefined) jsonDef.previousStatement = null;
        if (blockData.nextStatement !== undefined) jsonDef.nextStatement = null;
        // Fallback for old blocks
        if (!blockData.output && !blockData.previousStatement && !blockData.nextStatement) {
          jsonDef.previousStatement = null;
          jsonDef.nextStatement = null;
        }
      }

      Blockly.Blocks[blockData.type] = {
        init: function () {
          this.jsonInit(jsonDef);
        }
      };

      // 2. Register Python Generator
      Blockly.Python[blockData.type] = function (block) {
        let code = blockData.python;

        // --- Handle Imports ---
        if (blockData.imports) {
          let imports = Array.isArray(blockData.imports) ? blockData.imports : [blockData.imports];
          imports.forEach(imp => {
            Blockly.Python.definitions_['import_' + imp.replace(/\s+/g, '_')] = imp;
          });
        }

        // --- Handle Helper Functions ---
        if (blockData.methods) {
          let methods = blockData.methods;
          // If string (single method), wrap key? No, assume object { "name": "def..." } or array of strings if they contain def
          // Let's assume object for safety: { "my_helper": "def my_helper(): ..." }
          if (typeof methods === 'object' && !Array.isArray(methods)) {
            Object.keys(methods).forEach(key => {
              Blockly.Python.definitions_[key] = methods[key];
            });
          }
        }

        // --- Variable Substitution ---
        if (blockData.args0) {
          blockData.args0.forEach(arg => {
            let val = "";
            if (arg.type === 'input_value') {
              val = Blockly.Python.valueToCode(block, arg.name, Blockly.Python.ORDER_ATOMIC) || "None";
            } else if (arg.type.startsWith('field_')) {
              val = block.getFieldValue(arg.name);
            } else if (arg.type === 'input_statement') {
              val = Blockly.Python.statementToCode(block, arg.name);
            }
            code = code.split("{" + arg.name + "}").join(val);
          });
        }

        if (blockData.output && blockData.output !== 'none') {
          return [code, Blockly.Python.ORDER_ATOMIC];
        }
        return code + "\n";
      };

      // 3. Organize by Category
      let cat = blockData.category || "My Custom Blocks";
      if (!blocksByCategory[cat]) blocksByCategory[cat] = [];
      blocksByCategory[cat].push({ kind: "block", type: blockData.type });

      console.log("Registered Custom Block:", blockData.type, "in", cat);
    });

    // 4. Update Toolbox
    for (const [catName, blocks] of Object.entries(blocksByCategory)) {
      // Try to find existing category
      let category = toolbox.contents.find(c => c.name === catName);
      if (category) {
        // Append to existing
        category.contents.push(...blocks);
      } else {
        // Create new
        toolbox.contents.push({ kind: "sep" });
        toolbox.contents.push({
          kind: "category",
          name: catName,
          colour: "0",
          contents: blocks
        });
      }
    }

  } catch (e) {
    console.error("Failed to load custom blocks:", e);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  console.log("Initializing App...");

  // URL Params Check for Welcome Page actions
  const urlParams = new URLSearchParams(window.location.search);
  const loadName = urlParams.get('load');
  const isNew = urlParams.get('new');

  if (loadName) {
    // Hide modal immediately because we are loading a project
    const modal = document.getElementById('botModal');
    if (modal) modal.style.display = 'none'; // Force hide

    // Delay slightly to ensure blockly loaded
    setTimeout(() => loadProject(loadName, true), 500);
  } else if (isNew) {
    // Ensure modal is visible
    // (It is by default in HTML, but just in case)
  }



  // 1. Initialize Monaco Editor
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' } });

  require(['vs/editor/editor.main'], function () {
    const container = document.getElementById('monaco-container');
    if (container) {
      editor = monaco.editor.create(container, {
        value: "# Generate code from blocks...",
        language: 'python',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 13,
        fontFamily: "'Fira Code', 'Consolas', monospace"
      });

      // Hybrid Editing Logic
      editor.onDidChangeModelContent((e) => {
        if (isUpdatingCode) return; // Ignore changes from Block Generator

        // If user types manually:
        if (!isManualMode) {
          // We check if it's a significant change? 
          // For now, any manual edit triggers manual mode to protect user code.
          isManualMode = true;
          updateSyncUI(false);
        }
      });

      // Initial Layout
      setTimeout(() => editor.layout(), 100);
      window.addEventListener('resize', () => editor.layout());
    }
  });

  // 2. Initialize Blockly
  loadCustomBlocks().then(() => {
    const blocklyDiv = document.getElementById('blocklyDiv');
    if (blocklyDiv) {
      workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox,
        scrollbars: true,
        trashcan: true,
        grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
        zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 }
      });

      // Auto-Gen Listener
      workspace.addChangeListener((event) => {
        if (event.type === Blockly.Events.UI || event.type === Blockly.Events.FINISHED_LOADING) return;
        if (isManualMode) return;
        if (!isAutoSyncEnabled) return; // Check Auto-Sync Flag

        clearTimeout(autoGenTimer);
        // Debounce slightly longer to smooth out UI updates
        autoGenTimer = setTimeout(() => generateCode(true), 600);
      });

      // Initialize versions
      loadVersions();

      // Resize Handler
      window.addEventListener('resize', () => Blockly.svgResize(workspace), false);

      // --- Toolbox Search Implementation ---
      // We insert a search box into the Blockly Toolbox DIV
      // --- Toolbox Search Implementation (Floating) ---
      // --- Toolbox Search Implementation (Embedded) ---
      setTimeout(() => {
        const toolboxDiv = document.getElementsByClassName('blocklyToolboxDiv')[0];
        if (toolboxDiv) {
          const searchContainer = document.createElement('div');
          searchContainer.id = "toolboxSearchContainer";
          searchContainer.style.width = '100%';
          searchContainer.style.background = '#1f2937';
          searchContainer.style.borderBottom = '1px solid #374151';
          searchContainer.style.padding = '8px';
          searchContainer.style.boxSizing = 'border-box';

          searchContainer.innerHTML = `
                 <input type="text" id="toolboxSearch" placeholder="Search blocks..." 
                             style="width: 100%; background: #374151; border: 1px solid #4b5563; padding: 6px; 
                                    color: white; border-radius: 4px; font-size: 12px; outline: none;">
              `;

          // Insert at top of toolbox
          toolboxDiv.insertBefore(searchContainer, toolboxDiv.firstChild);

          const searchInput = document.getElementById('toolboxSearch');
          let originalToolboxDef = JSON.parse(JSON.stringify(toolbox));

          searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();

            if (!term) {
              workspace.updateToolbox(originalToolboxDef);
              return;
            }

            let newDef = { kind: "categoryToolbox", contents: [] };

            originalToolboxDef.contents.forEach(cat => {
              if (cat.kind === 'sep') return;
              // Include both custom and standard categories
              // if (cat.custom) return; // Allow filtering vars/funcs if name matches? No, they don't have static contents.

              if (cat.contents) {
                const matchingBlocks = cat.contents.filter(blk => {
                  return blk.type.toLowerCase().includes(term);
                });

                if (matchingBlocks.length > 0) {
                  newDef.contents.push({
                    ...cat,
                    contents: matchingBlocks,
                    expanded: "true"
                  });
                }
              }
            });

            workspace.updateToolbox(newDef);
          });
        }
      }, 1000);

    }
  });
});

// --- Search Re-Injection Fix ---
// If we updateToolbox, we lose the search bar if it's inside blocklyToolboxDiv?
// Yes. We should probably position it overlaying or outside.
// Let's modify the index.html to have a sidebar header for toolbox.

// ==========================================
// GLOBAL HELPER FUNCTIONS
// ==========================================

function toggleAutoSync() {
  const cb = document.getElementById('autoSyncToggle');
  isAutoSyncEnabled = cb ? cb.checked : true;
  if (isAutoSyncEnabled && !isManualMode) {
    generateCode(true);
  }
}

function updateSyncUI(isSynced) {
  const statusEl = document.getElementById('sync-status');
  const resumeBtn = document.getElementById('resume-sync-btn');

  if (statusEl && resumeBtn) {
    if (isSynced) {
      // In Auto/Synced mode, hide the warning label
      statusEl.classList.add('hidden');
      resumeBtn.classList.add('hidden');
    } else {
      // In Manual mode, show the warning
      statusEl.textContent = "Manual Mode";
      statusEl.classList.remove('hidden');
      resumeBtn.classList.remove('hidden');
    }
  }
}

function resumeSync() {
  const confirmResume = confirm("This will overwrite your manual code edits with the block generated code. Continue?");
  if (confirmResume) {
    isManualMode = false;
    updateSyncUI(true);
    generateCode(true);
  }
}

function copyCode() {
  if (!editor) return;
  const code = editor.getValue();
  navigator.clipboard.writeText(code);

  const btn = document.querySelector('.draggable-header button');
  if (btn) {
    const originalColor = btn.style.color;
    btn.style.color = '#4ade80';
    setTimeout(() => { btn.style.color = originalColor; }, 1000);
  }
}

function generateCode(updateEditor = false) {
  if (Blockly.Python && workspace) {
    Blockly.Python.definitions_ = {};
    var code = Blockly.Python.workspaceToCode(workspace);

    if (updateEditor && editor) {
      isUpdatingCode = true;
      editor.setValue(code);
      isUpdatingCode = false;
    }
    return code;
  }
  return "";
}

// App Logic
function confirmBotName() {
  var name = document.getElementById('botNameInput').value.trim();
  if (!name) { document.getElementById('nameError').classList.remove('hidden'); return; }
  setCurrentBot(name);
  document.getElementById('botModal').classList.add('hidden');
  fetch(`/load?name=${encodeURIComponent(name)}`).then(r => r.json()).then(data => {
    if (data.status === 'success') {
      if (data.xml) {
        try {
          var xml = Blockly.utils.xml.textToDom(data.xml);
          Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
        } catch (e) { console.error("Error loading XML", e); }
      } else {
        // Empty XML
        workspace.clear();
      }
    } else {
      // New bot (not found on server)
      workspace.clear();
    }
  }).catch(() => {
    // Network error or other - clear to be safe
    workspace.clear();
  });
}

function setCurrentBot(name) {
  currentBotName = name;
  document.getElementById('current-bot-display').textContent = "Active: " + name;
  document.getElementById('filename-display').textContent = name + "_bot.py";
}

function changeBot() {
  document.getElementById('botModal').classList.remove('hidden');
  document.getElementById('botNameInput').value = "";
  document.getElementById('botNameInput').focus();
}

function runBot() {
  // Get code from CodeMirror
  const code = editor.getValue();

  if (!code || code.trim().startsWith("# Select")) {
    alert("Please generate code first!");
    return;
  }
  runBotWithCode(code);
}

function runBotWithCode(code) {
  fetch('/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: code, name: currentBotName || 'bot' })
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert("Bot Started! Check the new console window for logs.");
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Failed to start bot.");
    });
}

function stopBot() {
  fetch('/stop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: currentBotName || 'bot' })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Failed to stop bot.");
    });
}

// ==========================================
// VERSION CONTROL & EXPORT LOGIC
// ==========================================

function toggleVersionsPanel() {
  const panel = document.getElementById('versionsPanel');
  const isHidden = panel.classList.contains('translate-x-full');

  if (isHidden) {
    panel.classList.remove('translate-x-full');
    loadVersions();
  } else {
    panel.classList.add('translate-x-full');
  }
}

function exportProject() {
  if (!workspace) return;
  try {
    const xmlDom = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToText(xmlDom);
    const json = {
      name: currentBotName || 'my_bot',
      timestamp: new Date().toISOString(),
      xml: xmlText,
      version: "2.0"
    };

    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (currentBotName || 'bot') + '_project.bot';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (e) {
    alert("Failed to export project: " + e.message);
  }
}

function exportBotZip() {
  // Get code from CodeMirror
  const code = editor.getValue();

  if (!code || code.trim().startsWith("# Select")) {
    alert("Please generate or write some code first!");
    return;
  }

  const botName = currentBotName || 'bot';

  fetch('/export-zip', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: code, name: botName })
  })
    .then(response => {
      if (response.ok) {
        return response.blob();
      } else {
        return response.json().then(data => { throw new Error(data.message || 'Export failed'); });
      }
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = botName + "_package.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Failed to export bot package: " + error.message);
    });
}

function importProject(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const content = e.target.result;
      // Support both old XML and new JSON .bot files
      if (content.trim().startsWith('<')) {
        // XML format
        const xml = Blockly.utils.xml.textToDom(content);
        Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
      } else {
        // JSON format
        const data = JSON.parse(content);
        if (data.xml) {
          const xml = Blockly.utils.xml.textToDom(data.xml);
          Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
          if (data.name) setCurrentBot(data.name);
        }
      }
      alert("Project loaded successfully!");
    } catch (err) {
      alert("Error loading project: " + err.message);
    }
  };
  reader.readAsText(file);
  // Reset inputs
  input.value = '';
}

function saveProject(createSnapshot = false) {
  // 1. Existing Server Save
  if (!currentBotName) {
    alert("No active bot to save. Please create or load one.");
    return;
  }

  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  var code = editor.getValue(); // Get Manual or Auto Code

  fetch('/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: currentBotName, xml: xml_text, code: code })
  })
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success') {
        if (createSnapshot) {
          createLocalSnapshot(currentBotName, xml_text);
          alert("Project Saved & Version Created!");
          if (!document.getElementById('versionsPanel').classList.contains('translate-x-full')) {
            loadVersions();
          }
        } else {
          // subtle notification
          alert("Project Saved.");
        }
      } else {
        alert("Save Failed: " + data.message);
      }
    });
}

// Local Version History Logic (using localStorage)
function createLocalSnapshot(botName, xmlContent) {
  const key = `bot_history_${botName}`;
  let history = JSON.parse(localStorage.getItem(key) || '[]');

  const snapshot = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    xml: xmlContent
  };

  // Keep last 20 versions
  history.unshift(snapshot);
  if (history.length > 20) history.pop();

  localStorage.setItem(key, JSON.stringify(history));
}

function loadVersions() {
  const list = document.getElementById('versionsList');
  list.innerHTML = '';

  if (!currentBotName) return;
  const key = `bot_history_${currentBotName}`;
  const history = JSON.parse(localStorage.getItem(key) || '[]');

  if (history.length === 0) {
    list.innerHTML = '<p class="text-gray-500 text-sm text-center italic mt-4">No snapshots found.</p>';
    return;
  }

  history.forEach((ver, index) => {
    const item = document.createElement('div');
    item.className = 'bg-gray-700 p-3 rounded flex flex-col gap-2 border border-gray-600';
    item.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-gray-300">v${history.length - index}</span>
                <span class="text-[10px] text-gray-400">${ver.date}</span>
            </div>
            <div class="flex gap-2">
                 <button onclick="restoreVersion(${ver.id})" class="flex-1 bg-blue-900 hover:bg-blue-800 text-blue-200 text-xs py-1 rounded">Restore</button>
                 <button onclick="deleteVersion(${ver.id})" class="text-red-400 hover:text-red-300 text-xs px-2">✕</button>
            </div>
        `;
    list.appendChild(item);
  });
}

function restoreVersion(id) {
  if (!confirm("Restore this version? Unsaved changes will be lost.")) return;

  const key = `bot_history_${currentBotName}`;
  const history = JSON.parse(localStorage.getItem(key) || '[]');
  const ver = history.find(v => v.id === id);
  if (ver) {
    const xml = Blockly.utils.xml.textToDom(ver.xml);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
    alert("Restored to version from " + ver.date);
  }
}

function deleteVersion(id) {
  if (!confirm("Delete this snapshot?")) return;
  const key = `bot_history_${currentBotName}`;
  let history = JSON.parse(localStorage.getItem(key) || '[]');
  history = history.filter(v => v.id !== id);
  localStorage.setItem(key, JSON.stringify(history));
  loadVersions();
}

// ==========================================
// TUTORIAL WIDGET LOGIC
// ==========================================

var currentTutorialStep = 0;
const tutorialSteps = [
  { title: "1. The Basics", text: "Welcome! To build a bot, you connect logic 'Blocks' together. Start by creating a Bot Setup." },
  { title: "2. Adding Commands", text: "Drag an 'On Command' block from the 'Events' category. Set the command to 'start'." },
  { title: "3. Replying", text: "Inside the command block, add a 'Reply Text' block from 'Actions'. Type 'Hello World!'." },
  { title: "4. Run It!", text: "Click the green 'Run Bot' button in the top right corner checking the log window for success." },
  { title: "5. Explore!", text: "Try adding Buttons, Media, or Logic blocks. The possibilities are endless! Have fun!" }
];

function startTutorial() {
  currentTutorialStep = 0;
  document.getElementById('tutorialWidget').classList.remove('hidden');
  updateTutorialUI();
}

function closeTutorial() {
  document.getElementById('tutorialWidget').classList.add('hidden');
}

function nextTutorialStep() {
  if (currentTutorialStep < tutorialSteps.length - 1) {
    currentTutorialStep++;
    updateTutorialUI();
  } else {
    closeTutorial();
    alert("Tutorial Completed! Happy Coding!");
  }
}

function updateTutorialUI() {
  const step = tutorialSteps[currentTutorialStep];
  document.getElementById('tutorialTitle').textContent = step.title;
  document.getElementById('tutorialText').textContent = step.text;
  document.getElementById('tutorialProgress').textContent = (currentTutorialStep + 1) + "/" + tutorialSteps.length;
}

// ==========================================
// PROJECTS MENU LOGIC
// ==========================================

function toggleProjectsPanel() {
  const panel = document.getElementById('projectsPanel');
  const isHidden = panel.classList.contains('-translate-x-full');

  if (isHidden) {
    panel.classList.remove('-translate-x-full');
    loadProjects();
  } else {
    panel.classList.add('-translate-x-full');
  }
}

function loadProjects() {
  const list = document.getElementById('projectsList');
  list.innerHTML = '<p class="text-gray-500 text-sm text-center italic mt-4">Loading...</p>';

  fetch('/projects')
    .then(response => response.json())
    .then(data => {
      const projects = data.projects;
      list.innerHTML = '';

      if (!projects || projects.length === 0) {
        list.innerHTML = '<p class="text-gray-500 text-sm text-center italic mt-4">No projects found.</p>';
        return;
      }

      projects.forEach(projName => {
        const item = document.createElement('div');
        item.className = 'bg-gray-700 p-3 rounded flex items-center justify-between border border-gray-600 hover:border-blue-500 transition cursor-pointer group';
        item.onclick = () => loadProject(projName);

        const isActive = (currentBotName === projName);
        const activeClass = isActive ? 'text-blue-400 font-bold' : 'text-gray-200';

        item.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-gray-600 flex items-center justify-center text-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition">
                            🤖
                        </div>
                        <span class="${activeClass}">${projName}</span>
                    </div>
                    <div class="opacity-0 group-hover:opacity-100 transition text-xs text-gray-400">Load ➞</div>
                `;
        list.appendChild(item);
      });
    })
    .catch(err => {
      console.error(err);
      list.innerHTML = '<p class="text-red-400 text-sm text-center mt-4">Failed to load projects.</p>';
    });
}

function loadProject(name, suppressConfirm = false) {
  if (!suppressConfirm && currentBotName && currentBotName !== name) {
    if (!confirm("Switch to project '" + name + "'? Unsaved changes to current bot will be lost.")) return;
  }

  setCurrentBot(name);
  const projectsPanel = document.getElementById('projectsPanel');
  if (projectsPanel && !projectsPanel.classList.contains('-translate-x-full')) {
    toggleProjectsPanel();
  }

  fetch(`/load?name=${encodeURIComponent(name)}`)
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success' && data.xml) {
        try {
          var xml = Blockly.utils.xml.textToDom(data.xml);
          Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
          isManualMode = false;

          // Manually update sync UI since the internal function is scoped
          const statusEl = document.getElementById('sync-status');
          const resumeBtn = document.getElementById('resume-sync-btn');
          if (statusEl) {
            statusEl.textContent = "Auto-Sync";
            statusEl.className = "text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-green-900 text-green-400 border border-green-700";
          }
          if (resumeBtn) resumeBtn.classList.add('hidden');

        } catch (e) { console.error("Error loading XML", e); }
      }
    })
    .catch(e => alert("Error loading project: " + e));
}

// ==========================================
// LIBRARY MANAGER LOGIC
// ==========================================

function openLibraryManager() {
  document.getElementById('libModal').classList.remove('hidden');
  document.getElementById('libInput').focus();
  loadLibraries();
}

function closeLibraryManager() {
  document.getElementById('libModal').classList.add('hidden');
}

function loadLibraries() {
  const list = document.getElementById('libList');
  list.innerHTML = '<p class="text-gray-500 text-xs text-center mt-4">Fetching installed packages...</p>';

  fetch('/libraries')
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success') {
        const pkgs = data.packages;
        if (!pkgs || pkgs.length === 0) {
          list.innerHTML = '<p class="text-gray-500 text-xs text-center mt-4">No packages found.</p>';
          return;
        }

        list.innerHTML = '';
        // Render list table style
        const table = document.createElement('table');
        table.className = "w-full text-left text-xs text-gray-300";
        table.innerHTML = `<thead class="border-b border-gray-700"><tr><th class="py-1">Package</th><th class="py-1">Version</th><th class="py-1 text-right">Action</th></tr></thead><tbody class="divide-y divide-gray-800"></tbody>`;

        const tbody = table.querySelector('tbody');
        pkgs.forEach(p => {
          const row = document.createElement('tr');
          row.className = "hover:bg-gray-800";
          row.innerHTML = `
                        <td class="py-2 text-green-400 font-mono">${p.name}</td>
                        <td class="py-2 text-gray-500">${p.version}</td>
                        <td class="py-2 text-right">
                            <button onclick="uninstallLibrary('${p.name}')" class="text-red-400 hover:text-red-300 font-bold px-2">✕</button>
                        </td>
                    `;
          tbody.appendChild(row);
        });

        list.appendChild(table);

      } else {
        list.innerHTML = `<p class="text-red-400 text-xs text-center mt-4">${data.message}</p>`;
      }
    })
    .catch(e => {
      list.innerHTML = `<p class="text-red-400 text-xs text-center mt-4">Connection Error: ${e}</p>`;
    });
}

function installLibrary() {
  const name = document.getElementById('libInput').value.trim();
  if (!name) return;

  const btn = event.currentTarget;
  const oldText = btn.textContent;
  btn.textContent = " Installing...";
  btn.disabled = true;
  btn.className = "bg-gray-600 text-gray-300 px-4 py-2 rounded text-xs font-bold transition cursor-wait";

  fetch('/install-library', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name })
  })
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success') {
        document.getElementById('libInput').value = '';
        loadLibraries();
      } else {
        alert("Error: " + data.message);
      }
    })
    .finally(() => {
      btn.textContent = oldText;
      btn.disabled = false;
      btn.className = "bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded text-xs font-bold transition";
    });
}

function uninstallLibrary(name) {
  if (!confirm(`Are you sure you want to uninstall '${name}'?`)) return;

  // Visual feedback (optimistic UI update or just wait)
  const list = document.getElementById('libList');
  // We'll just reload after call

  fetch('/uninstall-library', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name })
  })
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success') {
        loadLibraries();
      } else {
        alert("Error: " + data.message);
      }
    });
}
