// ============================================================
// DecodeLabs Logic Engine — engine.js
// White-Box AI · IPO Model · O(1) Dictionary Lookup
// ============================================================

// ── Phase 1: Knowledge Base (Hash Map) ──────────────────────
const KNOWLEDGE_BASE = {
  // Greetings
  "hello": "Hello! I am the DecodeLabs Logic Engine — a deterministic, White-Box AI. Every response I give is 100% traceable through the IPO pipeline. How can I assist you today?",
  "hi": "Hi there! I operate on pure rule-based logic — no guessing, no hallucinations. Ask me anything about deterministic AI architecture.",
  "hey": "Hey! Ready to explore deterministic AI? Ask me about the IPO model, White-Box AI, or intent matching.",
  "good morning": "Good morning! The Logic Engine is fully operational. Zero hallucination risk confirmed. How can I help?",
  "good afternoon": "Good afternoon! The Logic Engine is running at full capacity. What would you like to know?",
  "good evening": "Good evening! All systems nominal. Ask me about rule-based architecture or AI guardrails.",

  // About the system
  "what are you": "I am the DecodeLabs Logic Engine — a rules-based, deterministic chatbot built from the DecodeLabs Industrial Training Kit (Batch 2026). I use a Hash Map for O(1) intent matching and the IPO (Input-Process-Output) pipeline to ensure every decision is fully traceable.",
  "who are you": "I am the Logic Engine — a White-Box AI system. Unlike probabilistic LLMs, every output I produce is a direct, traceable consequence of a specific input and a hard-coded logic gate.",
  "what is your purpose": "My purpose is to demonstrate deterministic AI architecture — the foundational skeleton that every professional AI engineer must master before working with probabilistic systems like LLMs.",
  "how do you work": "I follow the IPO model: (1) INPUT — your message is sanitized via .lower().strip(), (2) PROCESS — your cleaned input is matched against my Dictionary knowledge base in O(1) time, (3) OUTPUT — the matched response is returned, or a fallback is issued.",

  // White-Box AI
  "what is white-box ai": "White-Box AI is an architectural methodology where every decision is fully transparent and traceable. The flow is: Input → Logic → Output. There are zero hidden computations. This is the primary mandate for high-stakes regulated environments like Finance and Healthcare where 'Zero Hallucination Risk' is a binary requirement, not an aspiration.",
  "white-box ai": "White-Box AI ensures total transparency through absolute traceability. Unlike Black-Box systems (like neural networks), every rule is explicit, auditable, and explainable. This is critical for regulatory compliance.",
  "black-box ai": "Black-Box AI refers to systems like neural networks where internal decision processes are opaque. They produce probabilistic, approximate outputs with hallucination risk. White-Box AI is the opposite — 100% deterministic and explainable.",
  "what is black-box ai": "Black-Box AI systems operate on hidden weights and probabilistic logic. Outputs are predicted/approximate, and there is inherent hallucination risk. White-Box AI eliminates this by using explicit, hard-coded logic gates.",

  // IPO Model
  "what is the ipo model": "The IPO (Input-Process-Output) model is the foundational blueprint for transparent AI. It is a linear pipeline where: (1) INPUT — raw data is ingested and sanitized, (2) PROCESS — the Logic Skeleton performs intent matching and state management, (3) OUTPUT — a response is generated. This linear flow ensures every system response is a direct, traceable consequence of a specific input.",
  "ipo model": "IPO stands for Input-Process-Output. It's the architectural blueprint used in this engine. Input normalizes raw data, Process matches intent using a Hash Map at O(1), and Output generates the final response with fallback logic.",
  "explain the ipo model": "The IPO Model has 3 stages: INPUT (sanitize and normalize raw user data), PROCESS (run the Logic Skeleton — intent matching via Dictionary lookup), OUTPUT (generate the response or trigger the fallback). This linear flow enforces system integrity and full traceability.",

  // Sanitization
  "what is input sanitization": "Input Sanitization is Phase 1 of the IPO model. Raw user input is inherently noisy. The Sanitization Protocol mandates programmatic refinement: clean_input = raw_input.lower().strip(). This eliminates case sensitivity and whitespace irregularities that would otherwise require exponentially more logic gates.",
  "input sanitization": "Sanitization uses .lower() and .strip() to transform raw input into a high-integrity format. Example: '   HeLLo   ' → 'hello'. This ensures the logic engine operates on clean, predictable signals.",
  "what is normalization": "Normalization is the process of converting raw input into a standardized format. By applying .lower().strip(), inputs like 'HELLO', 'Hello', '  hello  ' all resolve to the single key 'hello', enabling efficient dictionary lookup.",

  // Intent Matching
  "what is intent matching": "Intent Matching is the core of Phase 2 (Process) in the IPO model. It is the mechanism by which user input is mapped to a known response. This engine uses Dictionary-based Hash Maps for O(1) constant-time lookup, as opposed to the anti-pattern If-Elif Ladder which runs at O(n) linear time.",
  "intent matching": "Intent Matching maps sanitized user input to a response in the Knowledge Base. This engine uses dictionary.get(key, fallback) — a single atomic operation that handles both matching and fallback simultaneously.",

  // Hash Maps / Dictionaries
  "what is a hash map": "A Hash Map (Dictionary in Python) stores key-value pairs and enables O(1) constant-time lookup. Regardless of whether the knowledge base has 10 or 10,000 rules, lookup remains near-instant (~0ms). This is the architecturally superior alternative to the If-Elif Ladder anti-pattern.",
  "what is a dictionary": "In this context, a Dictionary is the data structure powering the knowledge base. Each key is a user intent, each value is the corresponding response. Using dict.get(key, fallback) allows intent matching and fallback handling in a single atomic operation.",
  "o(1)": "O(1) means constant time — the operation takes the same amount of time regardless of input size. Dictionary lookups are O(1). Whether the knowledge base has 10 or 10,000 rules, the response is returned near-instantly.",
  "what is o(1)": "O(1) is Big-O notation for constant time complexity. Hash Map lookups execute in O(1). Compare this to an If-Elif Ladder which is O(n) — it checks every rule sequentially, causing severe performance degradation at scale (500ms lag at ~1,000 rules, 5+ seconds at 10,000 rules).",

  // Anti-patterns
  "what is the if-elif anti-pattern": "The If-Elif Ladder is classified as 'UNSTABLE' for production environments. It suffers from O(n) linear complexity — the system must sequentially check every rule. At ~1,000 rules it hits a 500ms lag threshold. At 10,000 rules it can exceed 5 seconds, rendering the AI unresponsive. The professional solution is the Dictionary (Hash Map) with O(1) lookup.",
  "if-elif ladder": "The If-Elif Ladder anti-pattern is a sequential rule-checking structure with O(n) complexity. It causes cascading failures in deep logic stacks and high technical debt. Avoid it. Use a Dictionary with .get() instead.",
  "what is technical debt": "Technical debt is the cost of shortcuts taken during development that create problems later. The If-Elif Ladder accumulates massive technical debt — every new rule makes the system slower and harder to maintain.",

  // Fallback Logic
  "what is fallback logic": "Fallback Logic is the Fallback Mandate of Phase 3 (Output). When no rule matches the user input, the system must not crash — it must return a predefined default response. In Python: response = knowledge_base.get(user_input, 'I am sorry, I do not understand.'). This handles unknown inputs in a single atomic operation.",
  "fallback mechanism": "The fallback mechanism ensures system stability. Using dict.get(key, default), if a key is not found in the knowledge base, the default fallback response is returned automatically. No explicit error handling needed.",

  // AI Guardrails
  "what are ai guardrails": "AI Guardrails are rule-based filters applied to probabilistic LLMs to make them production-safe. They reside in frameworks like NVIDIA NeMo and Llama Guard and perform: (1) Filtering — removing unsafe content, (2) Redaction — stripping sensitive data, (3) Blocking — preventing non-compliant outputs. They form the 'Deterministic Filter' in a Hybrid Architecture.",
  "ai guardrails": "In a Hybrid Architecture, when a user poses a question: (1) The system first checks for a Rule Match → Instant Response. (2) If no rule matches → request passes to the LLM for flexible generation. This ensures both reliability (deterministic) and capability (generative).",
  "nvidia nemo": "NVIDIA NeMo is a framework that implements AI guardrails — rule-based filters that sit in front of LLMs to filter unsafe content, redact sensitive data, and block non-compliant outputs.",
  "llama guard": "Llama Guard is Meta's safety filter framework. It uses rule-based guardrails to evaluate both user inputs and LLM outputs for policy compliance — a real-world application of deterministic logic layered over probabilistic AI.",

  // Hallucination
  "what is a hallucination": "In AI, a hallucination occurs when a probabilistic model generates confident but factually incorrect information. It is the primary risk of Black-Box systems. White-Box (deterministic) AI eliminates hallucination risk entirely by using only hard-coded, explicit logic gates — no approximation, no guessing.",
  "hallucination": "AI hallucination = a model generating false but confident responses. This is a fundamental risk of probabilistic systems. Rule-based systems like this Logic Engine have zero hallucination risk because every response is an exact, hard-coded output.",
  "zero hallucination": "Zero Hallucination Risk is achieved by using 100% deterministic, hard-coded logic. This is a binary requirement in regulated sectors like Finance and Healthcare — not an optional feature.",

  // Dual-System Framework
  "what is system 1 ai": "System 1 AI is 'The Artist' — probabilistic systems like LLMs that use weights, summation, and thresholds to produce predicted/approximate outputs. They excel at semantic flexibility but carry hallucination and unpredictability risks.",
  "what is system 2 ai": "System 2 AI is 'The Engineer' — deterministic systems that use structural logic and hard-coded gates to produce defined/exact outputs. The primary risk is rigidity/lack of nuance. This engine is a System 2 implementation.",
  "dual system framework": "The Dual-System Framework categorizes AI into: System 1 (The Artist — probabilistic, approximate, flexible but prone to hallucination) and System 2 (The Engineer — deterministic, exact, traceable but rigid). Professional architectures combine both via Hybrid Architecture.",

  // DecodeLabs / Project Info
  "what is decodelabs": "DecodeLabs is the organization behind this Industrial Training Kit (Batch 2026). The program trains engineers to build deterministic AI skeletons before progressing to probabilistic systems like LLMs.",
  "what is this project": "This is Project 1 of the DecodeLabs curriculum — building a 'Digital Loop' that simulates basic human interaction through pure programmatic decision-making. It demonstrates the Logic Skeleton Checklist: Input Loop, Sanitization, Knowledge Base, Fallback, and Exit Strategy.",
  "what is the logic skeleton": "The Logic Skeleton Checklist for Project 1: (1) Input Loop — while True cycle, (2) Sanitization Module — .lower().strip(), (3) Knowledge Base — Dictionary with 5+ key-value pairs, (4) Fallback Mechanism — .get() with default response, (5) Exit Strategy — 'exit' keyword terminates the loop.",

  // Help / Topics
  "help": "I can answer questions on these topics:\n• White-Box vs Black-Box AI\n• The IPO Model (Input-Process-Output)\n• Input Sanitization & Normalization\n• Intent Matching & Hash Maps\n• If-Elif Anti-Pattern vs O(1) Dictionaries\n• Fallback Logic & the .get() Method\n• AI Guardrails (NeMo, Llama Guard)\n• Hallucination & Zero-Hallucination Design\n• Dual-System Framework (System 1 vs 2)\n• Hybrid Architecture\n• DecodeLabs & the Logic Skeleton\n\nType any of these topics or ask a question!",
  "what can you do": "I am a rules-based Logic Engine. I can explain deterministic AI architecture, the IPO model, intent matching, hash maps, AI guardrails, hallucination risks, and the DecodeLabs curriculum. Type 'help' for the full topic list.",
  "what topics can you help with": "Topics I cover: White-Box AI, IPO Model, Input Sanitization, Intent Matching, Hash Maps / O(1) lookup, If-Elif Anti-Pattern, Fallback Logic, AI Guardrails, Hallucination, Dual-System Framework, Hybrid Architecture, and DecodeLabs Project 1. Type 'help' for details.",

  // Hybrid Architecture
  "what is hybrid architecture": "Hybrid Architecture combines System 2 (deterministic rules) with System 1 (LLM). Flow: User Input → Rule Check → (Match) → Instant Deterministic Response OR (No Match) → LLM processes the query. This gives both speed/reliability from rules and flexibility/creativity from the LLM.",
  "hybrid architecture": "In a Hybrid AI system, rule-based guardrails act as the deterministic filter. Known intents are handled instantly by exact-match rules. Unknown intents fall through to the LLM. This is how production AI like ChatGPT with content filters works.",

  // Compliments / Social
  "thank you": "You're welcome! This interaction has been fully logged in the IPO trace. Every response is 100% deterministic — no guessing involved.",
  "thanks": "Happy to help! Remember: deterministic logic is the foundation every AI engineer must master first.",
  "that's great": "Thank you! The Logic Engine performs at constant O(1) speed regardless of knowledge base size. That's the power of Hash Maps.",
  "impressive": "Thank you! This is a demonstration of White-Box AI — total transparency, zero hallucination, full traceability.",
  "goodbye": "Goodbye! Remember — the Logic Skeleton is the prerequisite for all professional AI development. Type 'exit' to formally terminate the session.",
  "bye": "Farewell! The session remains open until you type 'exit'. Come back anytime to explore deterministic AI.",
};

// ── Session State ────────────────────────────────────────────
let sessionActive = true;
let totalQueries = 0;
let matchedQueries = 0;

// ── Phase 1: Sanitization Module ────────────────────────────
function sanitize(rawInput) {
  return rawInput.toLowerCase().trim();
}

// ── Phase 2: Intent Matching (O(1) Hash Map Lookup) ─────────
function matchIntent(cleanInput) {
  const startTime = performance.now();
  const response = KNOWLEDGE_BASE[cleanInput];
  const latency = (performance.now() - startTime).toFixed(3);

  if (response !== undefined) {
    return { response, matchType: "EXACT_HIT", keyHit: cleanInput, latency };
  }

  // Keyword scan fallback (partial match)
  for (const key of Object.keys(KNOWLEDGE_BASE)) {
    if (cleanInput.includes(key) || key.includes(cleanInput)) {
      const kwLatency = (performance.now() - startTime).toFixed(3);
      return { response: KNOWLEDGE_BASE[key], matchType: "KEYWORD_MATCH", keyHit: key, latency: kwLatency };
    }
  }

  const fallbackLatency = (performance.now() - startTime).toFixed(3);
  return {
    response: "I'm sorry, I don't have a rule for that yet. My knowledge base covers: White-Box AI, the IPO Model, Hash Maps, Hallucination, AI Guardrails, and more. Type 'help' to see all available topics.",
    matchType: "FALLBACK",
    keyHit: "NONE",
    latency: fallbackLatency
  };
}

// ── Phase 3: Response Engine ─────────────────────────────────
function processInput(rawInput) {
  if (!sessionActive) return null;

  // ─ Animate IPO Steps ─
  animateIPO();

  // ─ Phase 1: Input Sanitization ─
  const cleanInput = sanitize(rawInput);

  // ─ Exit Strategy ─
  if (cleanInput === "exit" || cleanInput === "quit" || cleanInput === "quit()") {
    return { response: null, matchType: "EXIT", keyHit: "exit", latency: "0.000", cleanInput };
  }

  // ─ Phase 2: Process / Intent Match ─
  totalQueries++;
  const { response, matchType, keyHit, latency } = matchIntent(cleanInput);
  if (matchType !== "FALLBACK") matchedQueries++;

  // ─ Update Trace ─
  updateTrace(cleanInput, matchType, keyHit, latency);
  updateStats();

  return { response, matchType, keyHit, latency, cleanInput };
}

// ── DOM Helpers ──────────────────────────────────────────────
function scrollToBottom() {
  const c = document.getElementById("messages-container");
  c.scrollTo({ top: c.scrollHeight, behavior: "smooth" });
}

function animateIPO() {
  ["ipo-input", "ipo-process", "ipo-output"].forEach((id, i) => {
    setTimeout(() => {
      document.querySelectorAll(".ipo-step").forEach(el => el.classList.remove("active"));
      document.getElementById(id)?.classList.add("active");
    }, i * 300);
  });
  setTimeout(() => {
    document.querySelectorAll(".ipo-step").forEach(el => el.classList.remove("active"));
  }, 1200);
}

function updateTrace(cleanInput, matchType, keyHit, latency) {
  document.getElementById("trace-sanitize-val").textContent = `"${cleanInput}"`;
  document.getElementById("trace-match-val").textContent = matchType;
  document.getElementById("trace-match-val").style.color =
    matchType === "EXACT_HIT" ? "var(--green)" :
    matchType === "KEYWORD_MATCH" ? "var(--accent)" : "var(--amber)";
  document.getElementById("trace-key-val").textContent = keyHit;
  document.getElementById("trace-latency-val").textContent = `${latency}ms`;
  document.getElementById("last-trace").innerHTML = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    Last: ${matchType} · ${latency}ms`;
}

function updateStats() {
  document.getElementById("session-count").textContent = totalQueries;
  const rate = totalQueries > 0 ? Math.round((matchedQueries / totalQueries) * 100) + "%" : "—";
  document.getElementById("match-rate").textContent = rate;
}

function addMessage(role, text, tag) {
  const container = document.getElementById("messages-container");
  const tagMap = {
    "EXACT_HIT": { cls: "tag-hit", label: "EXACT HIT" },
    "KEYWORD_MATCH": { cls: "tag-keyword", label: "KEYWORD" },
    "FALLBACK": { cls: "tag-fallback", label: "FALLBACK" },
    "EXIT": { cls: "tag-exit", label: "EXIT" },
    "welcome": { cls: "tag-welcome", label: "SYSTEM" },
  };
  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const div = document.createElement("div");
  div.className = `message ${role}`;

  const avatarLabel = role === "bot" ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>` : "U";

  const tagInfo = tagMap[tag] || null;
  const tagHTML = tagInfo ? `<span class="msg-tag ${tagInfo.cls}">${tagInfo.label}</span>` : "";

  const formattedText = text.replace(/\n/g, "<br>");

  div.innerHTML = `
    <div class="msg-avatar">${avatarLabel}</div>
    <div class="msg-body">
      <div class="msg-bubble">${formattedText}</div>
      <div class="msg-meta">${tagHTML}<span>${now}</span></div>
    </div>`;

  container.appendChild(div);
  scrollToBottom();
}

function showTyping() {
  const container = document.getElementById("messages-container");
  const div = document.createElement("div");
  div.className = "message bot";
  div.id = "typing-indicator";
  div.innerHTML = `
    <div class="msg-avatar"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg></div>
    <div class="msg-body"><div class="msg-bubble typing-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`;
  container.appendChild(div);
  scrollToBottom();
}

function removeTyping() {
  document.getElementById("typing-indicator")?.remove();
}

function handleSend() {
  if (!sessionActive) return;
  const input = document.getElementById("user-input");
  const raw = input.value.trim();
  if (!raw) return;

  addMessage("user", raw, null);
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();
    const result = processInput(raw);
    if (!result) return;

    if (result.matchType === "EXIT") {
      addMessage("bot", "Kill command received. Terminating the active loop... Session ended gracefully. All state has been cleared.", "EXIT");
      setTimeout(() => endSession(), 800);
    } else {
      addMessage("bot", result.response, result.matchType);
    }
  }, 400);
}

function endSession() {
  sessionActive = false;
  document.getElementById("user-input").disabled = true;
  document.getElementById("send-btn").disabled = true;
  document.getElementById("session-overlay").classList.remove("hidden");

  const rate = totalQueries > 0 ? Math.round((matchedQueries / totalQueries) * 100) + "%" : "0%";
  document.getElementById("session-final-stats").innerHTML = `
    <div class="stat"><span class="stat-num">${totalQueries}</span><span class="stat-lbl">Queries</span></div>
    <div class="stat"><span class="stat-num">${matchedQueries}</span><span class="stat-lbl">Matched</span></div>
    <div class="stat"><span class="stat-num">${rate}</span><span class="stat-lbl">Hit Rate</span></div>`;
}

function restartSession() {
  sessionActive = true;
  totalQueries = 0;
  matchedQueries = 0;
  document.getElementById("messages-container").innerHTML = "";
  document.getElementById("user-input").disabled = false;
  document.getElementById("send-btn").disabled = false;
  document.getElementById("session-overlay").classList.add("hidden");
  updateStats();
  showWelcome();
}

function clearChat() {
  document.getElementById("messages-container").innerHTML = "";
  showWelcome();
}

function injectSuggestion(text) {
  document.getElementById("user-input").value = text;
  handleSend();
}

function showWelcome() {
  const container = document.getElementById("messages-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="welcome-card">
      <h2>⚡ DecodeLabs Logic Engine — Online</h2>
      <p>I am a <strong>deterministic, White-Box AI</strong> chatbot built on the <strong>IPO (Input-Process-Output)</strong> model. Every response is 100% traceable — no hallucinations, no hidden computations.</p>
      <div class="welcome-pills">
        <span class="welcome-pill">White-Box AI</span>
        <span class="welcome-pill">IPO Model</span>
        <span class="welcome-pill">O(1) Hash Map</span>
        <span class="welcome-pill">Zero Hallucination</span>
        <span class="welcome-pill">AI Guardrails</span>
        <span class="welcome-pill">DecodeLabs 2026</span>
      </div>
    </div>`;
  container.appendChild(div);

  addMessage("bot", "Hello! I am the Logic Engine. Ask me about White-Box AI, the IPO model, intent matching, AI guardrails, or any topic from the DecodeLabs curriculum. Type 'help' for a full topic list, or type 'exit' to end the session.", "welcome");
}

// ── Key Bindings ─────────────────────────────────────────────
document.getElementById("user-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("kb-count").textContent = Object.keys(KNOWLEDGE_BASE).length;
  showWelcome();
});
