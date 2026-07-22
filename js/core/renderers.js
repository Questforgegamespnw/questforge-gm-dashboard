import {
  escapeHtml,
  getMeta,
  getTitle,
  renderDetailField,
  renderEscalation,
  renderListField,
  renderSpokenLinesBlock,
  renderTableEntries,
  renderTags,
  renderTrackerEffects
} from "./renderers.helpers.js";

export {
  renderCards,
  renderRailList
} from "./renderers.cards.js";

// -----------------------------------------------------------------------------
// Table-facing delivery block helpers
// -----------------------------------------------------------------------------

function renderEstablishingShot(establishingShot, approachBeat) {
  if (!establishingShot && !approachBeat) return "";

  return `
    <div class="detail-field location-description-block establishing-shot-block">
      <strong>Establishing Shot:</strong>
      ${establishingShot ? `<p>${escapeHtml(establishingShot)}</p>` : ""}
      ${approachBeat ? `<p class="approach-beat">${escapeHtml(approachBeat)}</p>` : ""}
    </div>
  `;
}

function renderSensoryBlock(values) {
  if (!values?.length) return "";

  return `
    <div class="detail-field location-description-block sensory-block">
      <strong>Sensory:</strong>
      <ul>
        ${values.map((value) => `<li>${escapeHtml(String(value))}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderAnswerMoments(answerMoments = []) {
  if (!answerMoments.length) return "";

  return `
    <div class="detail-field answer-moments-block">
      <strong>Answer Moments:</strong>
      ${answerMoments.map((moment) => `
        <div class="scripted-moment-card">
          ${moment.question ? `
            <div class="scripted-moment-cue">
              <strong>Question:</strong> ${escapeHtml(moment.question)}
            </div>
          ` : ""}

          ${moment.tableLine ? `
            <p class="read-aloud-line read-aloud-speech">
              ${escapeHtml(moment.tableLine)}
            </p>
          ` : ""}

          ${moment.answer ? `
            <div class="scripted-moment-purpose">
              <strong>Answer:</strong> ${escapeHtml(moment.answer)}
            </div>
          ` : ""}

          ${renderListField("Reveals", moment.reveals)}

          ${moment.gatedBy?.skills?.length || moment.gatedBy?.minTier ? `
            <div class="scripted-moment-cue">
              <strong>Gate:</strong>
              ${escapeHtml([
    moment.gatedBy?.skills?.join(", "),
    moment.gatedBy?.minTier
  ].filter(Boolean).join(" / "))}
            </div>
          ` : ""}

          ${renderListField("Related Threads", moment.relatedThreads)}
        </div>
      `).join("")}
    </div>
  `;
}

function renderRumorAnswers(rumorAnswers = []) {
  if (!rumorAnswers.length) return "";

  return `
    <div class="detail-field rumor-answers-block">
      <strong>Rumor Answers:</strong>
      ${rumorAnswers.map((rumor) => `
        <div class="scripted-moment-card">
          ${rumor.prompt ? `
            <div class="scripted-moment-cue">
              <strong>Prompt:</strong> ${escapeHtml(rumor.prompt)}
            </div>
          ` : ""}

          ${rumor.response ? `
            <p class="read-aloud-line read-aloud-speech">
              ${escapeHtml(rumor.response)}
            </p>
          ` : ""}

          ${renderListField("Reveals", rumor.reveals)}
          ${renderListField("Related Threads", rumor.relatedThreads)}
        </div>
      `).join("")}
    </div>
  `;
}

function renderOutcomeShift(outcomeShift) {
  if (!outcomeShift) return "";

  const hasContent = Boolean(
    outcomeShift.question ||
    outcomeShift.levers?.length ||
    outcomeShift.consequences?.length
  );

  if (!hasContent) return "";

  return `
    <div class="detail-field outcome-shift-block">
      <strong>Meaningful Change:</strong>
      ${outcomeShift.question ? `<p>${escapeHtml(outcomeShift.question)}</p>` : ""}
      ${renderListField("Player Levers", outcomeShift.levers)}
      ${renderListField("Consequences", outcomeShift.consequences)}
    </div>
  `;
}

function renderSkillGates(skillGates = []) {
  if (!skillGates.length) return "";

  return `
    <div class="detail-field skill-gates-block">
      <strong>Skill Gates:</strong>
      ${skillGates.map((gate) => `
        <div class="scripted-moment-card">
          ${gate.skills?.length || gate.tier ? `
            <div class="scripted-moment-cue">
              <strong>Gate:</strong>
              ${escapeHtml([
    gate.skills?.join(", "),
    gate.tier
  ].filter(Boolean).join(" / "))}
            </div>
          ` : ""}

          ${renderDetailField("Visible", gate.visible)}
          ${renderDetailField("Reveal", gate.reveal)}
          ${renderDetailField("Consequence", gate.consequence)}
        </div>
      `).join("")}
    </div>
  `;
}

// -----------------------------------------------------------------------------
// Main detail panel renderer
// -----------------------------------------------------------------------------

export function renderDetail(container, item) {
  if (!item) {
    container.innerHTML = `<p>Select a card to view details.</p>`;
    return;
  }

  container.innerHTML = `
    <h3>${escapeHtml(getTitle(item))}</h3>
    <div class="meta">${escapeHtml(getMeta(item))}</div>

    ${renderSceneRunBlock(item)}
    ${renderSpokenLinesBlock("Hook Lines", item.hookLines, {
      blockClass: "ambient-cast-delivery-block",
      lineClass: "ambient-cast-hook-line"
    })}
    ${item.hookLines?.length ? renderListField("Voices", item.voices) : ""}
    ${item.hookLines?.length ? renderListField("Interaction Seeds", item.interactionSeeds) : ""}

    ${renderAnswerMoments(item.answerMoments)}
    ${renderRumorAnswers(item.rumorAnswers)}
    ${renderOutcomeShift(item.outcomeShift)}
    ${renderSkillGates(item.skillGates)}

    ${renderDetailField("Current State", item.currentState)}
    ${renderDetailField("Vibe", item.presentation?.vibe)}
    ${renderDetailField("Physicality", item.presentation?.physicality)}
    ${renderDetailField("Voice", item.presentation?.voice)}
    ${renderSpokenLinesBlock("Quick Lines", item.quickLines, { lineClass: "actor-quick-line" })}
    ${renderDetailField("Scene Impact", item.presentation?.sceneImpact)}
    ${renderDetailField("Visual Anchor", item.presentation?.visualAnchor)}
    ${renderEstablishingShot(item.presentation?.establishingShot, item.presentation?.approachBeat)}
    ${renderSensoryBlock(item.presentation?.sensory)}

    ${renderDetailField("Function", item.function)}
    ${renderDetailField("Pressure", item.pressure)}
    ${renderListField("Opportunities", item.opportunities)}
    ${renderListField("Dangers", item.dangers)}

    ${renderDetailField("Wants", item.motivation?.wants)}
    ${renderDetailField("Fears", item.motivation?.fears)}
    ${renderDetailField("Leverage", item.motivation?.leverage)}
    ${renderListField("Knows", item.knowledge?.knows)}
    ${renderListField("Secrets", item.knowledge?.secrets)}
    

    ${renderDetailField("Trigger", item.trigger)}
    ${renderDetailField("Summary", item.summary)}
    ${renderListField("Names", item.names)}
    ${renderListField("Related Actors", item.relatedActors)}
    ${renderListField("Related Threads", item.relatedThreads)}
    ${renderListField("Related Locations", item.relatedLocations)}
    ${renderDetailField("Player Facing", item.playerFacing)}
    ${renderDetailField("GM Truth", item.gmTruth)}
    ${renderListField("Clues", item.clues)}
    ${renderListField("Outcomes", item.outcomes)}
    ${renderListField("Up Next", item.forwardPath?.upNext)}
    ${renderDetailField("Run Note", item.runNote)}

    ${renderTrackerEffects(item.effects)}
    ${renderDetailField("Die", item.die)}
    ${renderTableEntries(item.entries)}
    ${renderEscalation(item.escalation)}
    
    ${renderListField("Key Rules", item.details)}
    ${renderDetailField("Reference", item.reference)}
    ${renderDetailField("GM Notes", item.gmNotes)}
    ${renderTags(item.tags)}
  `;
}

// -----------------------------------------------------------------------------
// Scene delivery helpers
// -----------------------------------------------------------------------------

function renderSceneRunBlock(item) {
  const scriptedMoments = item.forwardPath?.scriptedMoments ?? [];

  if (!item.playerFacing && !scriptedMoments.length) return "";

  return `
    <div class="detail-field read-aloud-block scene-run-block">
      <strong>At Table:</strong>

      ${item.playerFacing ? `
        <p class="read-aloud-line read-aloud-narration">
          ${escapeHtml(item.playerFacing)}
        </p>
      ` : ""}

      ${scriptedMoments.map((moment) => {
    const speaker = formatSpeakerLabel(moment.speaker);

    return `
          <div class="scripted-moment-card">
            <p class="read-aloud-line read-aloud-speech">
              ${speaker ? `<span class="read-aloud-speaker">${escapeHtml(speaker)}:</span>` : ""}
              ${escapeHtml(moment.line ?? "")}
            </p>

            ${moment.timing ? `
              <div class="scripted-moment-cue">
                <strong>Cue:</strong> ${escapeHtml(moment.timing)}
              </div>
            ` : ""}

            ${moment.purpose ? `
              <div class="scripted-moment-purpose">
                <strong>Purpose:</strong> ${escapeHtml(moment.purpose)}
              </div>
            ` : ""}
          </div>
        `;
  }).join("")}
    </div>
  `;
}

function formatSpeakerLabel(speaker = "") {
  if (!speaker) return "";

  return String(speaker)
    .replace(/^actor_/, "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

// -----------------------------------------------------------------------------
// Detail panel action wrapper
// -----------------------------------------------------------------------------

export function renderSelectableDetail(
  container,
  item,
  { onCollapse, onTogglePin, isPinned } = {}
) {
  renderDetail(container, item);

  if (!item) return;

  const controlWrap = document.createElement("div");
  controlWrap.className = "detail-action-row";

  if (onTogglePin) {
    const pinButton = document.createElement("button");
    pinButton.className = "pin-toggle-button";
    pinButton.type = "button";
    pinButton.textContent = isPinned?.(item) ? "Unpin from Cockpit" : "Pin to Cockpit";

    pinButton.addEventListener("click", (event) => {
      event.stopPropagation();
      onTogglePin(item);
    });

    controlWrap.appendChild(pinButton);
  }

  const collapseButton = document.createElement("button");
  collapseButton.className = "detail-collapse-button";
  collapseButton.type = "button";
  collapseButton.textContent = "Collapse";

  collapseButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (onCollapse) onCollapse();
  });

  controlWrap.appendChild(collapseButton);
  container.prepend(controlWrap);
}

// -----------------------------------------------------------------------------
// Right-rail panel renderers
// -----------------------------------------------------------------------------

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

export function renderFireablesPanel(
  container,
  scenes = [],
  moments = [],
  tables = [],
  { onSceneSelect, onMomentSelect, onTableSelect } = {}
) {
  if (!container) return;

  if (!scenes.length && !moments.length && !tables.length) {
    container.innerHTML = `<p class="empty-state">No location-specific scenes, moments, or tables loaded.</p>`;
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
              ${escapeHtml(getTitle(moment))}
              ${moment.compact ? `<br><small>${escapeHtml(moment.compact)}</small>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    `
    : "";

  const tableHtml = tables.length
    ? `
      <div class="detail-field">
        <strong>Tables</strong>
        <div class="rail-list">
          ${tables.map((table) => `
            <button class="rail-item fireable-table" type="button" data-id="${escapeHtml(table.id)}">
              ${escapeHtml(getTitle(table))}
              ${table.die ? `<br><small>${escapeHtml(table.die)}</small>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    `
    : "";

  container.innerHTML = sceneHtml + momentHtml + tableHtml;

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

  container.querySelectorAll(".fireable-table").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const table = tables.find((item) => item.id === button.dataset.id);
      if (table && onTableSelect) onTableSelect(table);
    });
  });
}

// -----------------------------------------------------------------------------
// Moment spotlight renderer
// -----------------------------------------------------------------------------

export function renderMomentSpotlight(container, moment, { onCollapse } = {}) {
  if (!container || !moment) return;

  const readAloud = moment.spotlight?.readAloud ?? [];

  container.innerHTML = `
    <button class="detail-collapse-button" type="button">Collapse</button>

    <h3>${escapeHtml(moment.spotlight?.title ?? moment.title)}</h3>
    <div class="meta">${escapeHtml(moment.type ?? "moment")}</div>

    ${renderReadAloud(readAloud)}

    ${renderDetailField("Compact", moment.compact)}
    ${renderDetailField("Trigger", moment.trigger)}
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


// -----------------------------------------------------------------------------
// Read-aloud helpers
// -----------------------------------------------------------------------------

function renderReadAloud(readAloud = []) {
  if (!readAloud.length) return "";

  return `
    <div class="detail-field read-aloud-block">
      <strong>Read Aloud:</strong>
      ${readAloud.map((line) => {
        if (typeof line === "string") {
          return `<p class="read-aloud-line read-aloud-narration">${escapeHtml(line)}</p>`;
        }

        const type = line.type ?? "narration";
        const speaker = line.speaker ? `${escapeHtml(line.speaker)}: ` : "";

        return `
          <p class="read-aloud-line read-aloud-${escapeHtml(type)}">
            ${speaker ? `<span class="read-aloud-speaker">${speaker}</span>` : ""}
            ${escapeHtml(line.text ?? "")}
          </p>
        `;
      }).join("")}
    </div>
  `;
}
