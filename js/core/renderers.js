export function renderCards(container, items, { mode, onSelect }) {
  container.innerHTML = "";

  if (!items?.length) {
    container.innerHTML = `<p class="empty-state">No matching items.</p>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    const title = getTitle(item);
    const meta = getMeta(item);
    const summary = getSummary(item);

    card.innerHTML = `
      <h3>${escapeHtml(title)}</h3>
      <div class="meta">${escapeHtml(meta)}</div>
      <p>${escapeHtml(summary)}</p>
      ${renderTags(item.tags)}
    `;

    card.addEventListener("click", () => onSelect(item));
    container.appendChild(card);
  });
}

export function renderRailList(selector, items, { onSelect }) {
  const container = document.querySelector(selector);
  container.innerHTML = "";

  if (!items?.length) {
    container.innerHTML = `<p class="empty-state">None active.</p>`;
    return;
  }

  items.forEach((item) => {
    const railItem = document.createElement("div");
    railItem.className = "rail-item";
    railItem.textContent = getTitle(item);
    railItem.addEventListener("click", () => onSelect(item));
    container.appendChild(railItem);
  });
}

export function renderDetail(container, item) {
  if (!item) {
    container.innerHTML = `<p>Select a card to view details.</p>`;
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(getTitle(item))}</h3>
    <div class="meta">${escapeHtml(getMeta(item))}</div>

    ${renderDetailField("Current State", item.currentState)}
    ${renderDetailField("Vibe", item.presentation?.vibe)}
    ${renderDetailField("Physicality", item.presentation?.physicality)}
    ${renderDetailField("Voice", item.presentation?.voice)}
    ${renderDetailField("Scene Impact", item.presentation?.sceneImpact)}
    ${renderDetailField("Visual Anchor", item.presentation?.visualAnchor)}
    ${renderDetailField("Establishing Shot", item.presentation?.establishingShot)}
    ${renderListField("Sensory", item.presentation?.sensory)}

    ${renderDetailField("Function", item.function)}
    ${renderDetailField("Pressure", item.pressure)}
    ${renderListField("Opportunities", item.opportunities)}
    ${renderListField("Dangers", item.dangers)}

    ${renderDetailField("Wants", item.motivation?.wants)}
    ${renderDetailField("Fears", item.motivation?.fears)}
    ${renderDetailField("Leverage", item.motivation?.leverage)}
    ${renderListField("Knows", item.knowledge?.knows)}
    ${renderListField("Secrets", item.knowledge?.secrets)}
    ${renderListField("Quick Lines", item.quickLines)}

    ${renderDetailField("Trigger", item.trigger)}
    ${renderDetailField("Summary", item.summary)}
    ${renderDetailField("Player Facing", item.playerFacing)}
    ${renderDetailField("GM Truth", item.gmTruth)}
    ${renderListField("Clues", item.clues)}
    ${renderListField("Outcomes", item.outcomes)}
    ${renderListField("Up Next", item.forwardPath?.upNext)}
    ${renderScriptedMoments(item.forwardPath?.scriptedMoments)}
    ${renderDetailField("Run Note", item.runNote)}

    ${renderTrackerEffects(item.effects)}
    ${renderTableEntries(item.entries)}
    ${renderEscalation(item.escalation)}

    ${renderDetailField("Reference", item.reference)}
    ${renderDetailField("GM Notes", item.gmNotes)}
    ${renderTags(item.tags)}
  `;
}

export function renderSelectableDetail(container, item, { onCollapse } = {}) {
  renderDetail(container, item);

  if (!item) return;

  const collapseButton = document.createElement("button");
  collapseButton.className = "detail-collapse-button";
  collapseButton.type = "button";
  collapseButton.textContent = "Collapse";

  collapseButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (onCollapse) onCollapse();
  });

  container.prepend(collapseButton);
}

export function renderPressurePanel(container, threads = [], trackers = []) {
  const threadHtml = threads.map((thread) => `
    <div class="detail-field">
      <strong>${escapeHtml(thread.title)}</strong><br>
      ${escapeHtml(thread.currentState || thread.summary || "")}
    </div>
  `).join("");

  const trackerHtml = trackers.map((tracker) => `
    <div class="detail-field">
      <strong>${escapeHtml(tracker.name)}:</strong>
      ${escapeHtml(String(tracker.value))}/${escapeHtml(String(tracker.max))}
      <br>${escapeHtml(tracker.label || tracker.summary || "")}
    </div>
  `).join("");

  container.innerHTML = threadHtml + trackerHtml || `<p>No active pressure loaded.</p>`;
}

export function renderFireablesPanel(container, scenes = [], moments = [], { onSceneSelect, onMomentSelect } = {}) {
  if (!container) return;

  if (!scenes.length && !moments.length) {
    container.innerHTML = `<p class="empty-state">No location-specific scenes or moments loaded.</p>`;
    return;
  }

  const sceneHtml = scenes.length
    ? `
      <div class="detail-field">
        <strong>Scenes</strong>
        <div class="rail-list">
          ${scenes.map((scene) => `
            <button class="rail-item fireable-scene" type="button" data-id="${escapeHtml(scene.id)}">
              ${escapeHtml(getTitle(scene))}
            </button>
          `).join("")}
        </div>
      </div>
    `
    : "";

  const momentHtml = moments.length
    ? `
      <div class="detail-field">
        <strong>Moments</strong>
        <div class="rail-list">
          ${moments.map((moment) => `
            <button class="rail-item fireable-moment" type="button" data-id="${escapeHtml(moment.id)}">
              ${escapeHtml(moment.title)}
              ${moment.compact ? `<br><small>${escapeHtml(moment.compact)}</small>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    `
    : "";

  container.innerHTML = sceneHtml + momentHtml;

  container.querySelectorAll(".fireable-scene").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const scene = scenes.find((item) => item.id === button.dataset.id);
      if (scene && onSceneSelect) onSceneSelect(scene);
    });
  });

  container.querySelectorAll(".fireable-moment").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const moment = moments.find((item) => item.id === button.dataset.id);
      if (moment && onMomentSelect) onMomentSelect(moment);
    });
  });
}

export function renderMomentSpotlight(container, moment, { onCollapse } = {}) {
  if (!container || !moment) return;

  const readAloud = moment.spotlight?.readAloud ?? [];

  container.innerHTML = `
    <button class="detail-collapse-button" type="button">Collapse</button>

    <h3>${escapeHtml(moment.spotlight?.title ?? moment.title)}</h3>
    <div class="meta">${escapeHtml(moment.type ?? "moment")}</div>

    ${renderDetailField("Trigger", moment.trigger)}
    ${renderDetailField("Compact", moment.compact)}

    ${readAloud.length ? `
      <div class="detail-field">
        <strong>Read Aloud:</strong>
        ${readAloud.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>
    ` : ""}

    ${renderDetailField("GM Purpose", moment.spotlight?.gmPurpose)}
    ${renderDetailField("Follow-Up", moment.spotlight?.followUp)}
    ${renderTags(moment.tags)}
  `;

  const collapseButton = container.querySelector(".detail-collapse-button");

  if (collapseButton && onCollapse) {
    collapseButton.addEventListener("click", (event) => {
      event.stopPropagation();
      onCollapse();
    });
  }
}

function getTitle(item) {
  return item.name || item.title || item.label || item.id || "Untitled";
}

function getMeta(item) {
  return [
    item.role,
    item.type,
    item.category,
    item.status,
    item.priority
  ].filter(Boolean).join(" / ");
}

function getSummary(item) {
  return item.presentation?.vibe
    || item.summary
    || item.currentState
    || item.pressure
    || item.label
    || item.gmNotes
    || "";
}

function renderDetailField(label, value) {
  if (!value) return "";
  return `<div class="detail-field"><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value)}</div>`;
}

function renderListField(label, values) {
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

function renderScriptedMoments(moments) {
  if (!moments?.length) return "";
  return `
    <div class="detail-field">
      <strong>Scripted Moments:</strong>
      <ul>
        ${moments.map((moment) => `
          <li>
            ${escapeHtml(moment.timing || "When appropriate")} —
            ${escapeHtml(moment.speaker || "Unknown")}: 
            ${escapeHtml(moment.line || "")}
            ${moment.purpose ? `<br><em>${escapeHtml(moment.purpose)}</em>` : ""}
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

function renderTrackerEffects(effects) {
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

function renderTableEntries(entries) {
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

function renderEscalation(escalation) {
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

function renderTags(tags = []) {
  if (!tags?.length) return "";
  return `
    <div class="tag-row">
      ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
    </div>
  `;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
