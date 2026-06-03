import {
  escapeHtml,
  getMeta,
  getSummary,
  getTitle,
  renderTags
} from "./renderers.helpers.js";

// -----------------------------------------------------------------------------
// Card and rail renderers
// -----------------------------------------------------------------------------

export function renderCards(container, items, { mode, onSelect, isPinned } = {}) {
  container.innerHTML = "";

  if (!items?.length) {
    container.innerHTML = `<p class="empty-state">No matching items.</p>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = isPinned?.(item) ? "card is-pinned" : "card";

    const title = getTitle(item);
    const meta = getMeta(item);
    const summary = getSummary(item);

    card.innerHTML = `
      <h3>${escapeHtml(title)}${isPinned?.(item) ? ` <span class="pin-badge">Pinned</span>` : ""}</h3>
      <div class="meta">${escapeHtml(meta)}</div>
      <p>${escapeHtml(summary)}</p>
      ${renderTags(item.tags)}
    `;

    card.addEventListener("click", () => onSelect(item));
    container.appendChild(card);
  });
}

export function renderRailList(selector, items, { onSelect, isPinned } = {}) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = "";

  if (!items?.length) {
    container.innerHTML = `<p class="empty-state">None active.</p>`;
    return;
  }

  items.forEach((item) => {
    const railItem = document.createElement("div");
    railItem.className = isPinned?.(item) ? "rail-item is-pinned" : "rail-item";
    railItem.textContent = getTitle(item);
    railItem.addEventListener("click", () => onSelect(item));
    container.appendChild(railItem);
  });
}
