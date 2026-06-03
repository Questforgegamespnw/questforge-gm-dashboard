// -----------------------------------------------------------------------------
// Generic display value helpers
// -----------------------------------------------------------------------------

export function getTitle(item) {
  return item.name || item.title || item.label || item.id || "Untitled";
}

export function getMeta(item) {
  return [
    item.role,
    item.type,
    item.category,
    item.status,
    item.priority
  ].filter(Boolean).join(" / ");
}

export function getSummary(item) {
  return item.presentation?.vibe
    || item.summary
    || item.currentState
    || item.pressure
    || item.label
    || item.gmNotes
    || "";
}

// -----------------------------------------------------------------------------
// Generic field renderers
// -----------------------------------------------------------------------------

export function renderDetailField(label, value) {
  if (!value) return "";
  return `<div class="detail-field"><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value)}</div>`;
}

export function renderListField(label, values) {
  if (!values?.length) return "";
  return `
    <div class="detail-field">
      <strong>${escapeHtml(label)}:</strong>
      <ul>
        ${values.map((value) => `<li>${escapeHtml(String(value))}</li>`).join("")}
      </ul>
    </div>
  `;
}

export function renderTags(tags = []) {
  if (!tags?.length) return "";
  return `
    <div class="tag-row">
      ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
    </div>
  `;
}



export function renderSpokenLinesBlock(label, lines = [], { blockClass = "", lineClass = "" } = {}) {
  if (!lines?.length) return "";

  const blockClasses = [
    "detail-field",
    "read-aloud-block",
    "actor-lines-block",
    blockClass
  ].filter(Boolean).join(" ");

  const lineClasses = [
    "read-aloud-line",
    "read-aloud-speech",
    lineClass
  ].filter(Boolean).join(" ");

  return `
    <div class="${escapeHtml(blockClasses)}">
      <strong>${escapeHtml(label)}:</strong>
      ${lines.map((line) => `
        <p class="${escapeHtml(lineClasses)}">
          ${escapeHtml(String(line))}
        </p>
      `).join("")}
    </div>
  `;
}

export function renderTrackerEffects(effects) {
  if (!effects?.length) return "";
  return `
    <div class="detail-field">
      <strong>Effects:</strong>
      <ul>
        ${effects.map((effect) => `<li>${escapeHtml(effect.range)} — ${escapeHtml(effect.label)}: ${escapeHtml(effect.note)}</li>`).join("")}
      </ul>
    </div>
  `;
}

export function renderTableEntries(entries) {
  if (!entries?.length) return "";
  return `
    <div class="detail-field">
      <strong>Entries:</strong>
      <ol>
        ${entries.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}
      </ol>
    </div>
  `;
}

export function renderEscalation(escalation) {
  if (!escalation) return "";
  return `
    <div class="detail-field">
      <strong>Escalation:</strong>
      <ul>
        ${Object.entries(escalation).map(([key, value]) => `<li>${escapeHtml(key)}: ${escapeHtml(value)}</li>`).join("")}
      </ul>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// Safety helpers
// -----------------------------------------------------------------------------

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
