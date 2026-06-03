export const state = {
  currentTab: "cockpit",
  searchTerm: "",

  selectedItem: null,
  selectedLocationId: null,
  spotlightMomentId: null,

  // Runtime-only session overlay.
  // This intentionally does not write to current_loadout.js or localStorage.
  sessionPins: {
    pinnedItemIds: []
  }
};

export function clearSelectedItem() {
  state.selectedItem = null;
  state.spotlightMomentId = null;
}
export function setTab(tab) {
  state.currentTab = tab;
}

export function setSearch(searchTerm) {
  state.searchTerm = searchTerm;
}

export function setSelectedItem(item) {
  state.selectedItem = item;
}

export function setSelectedLocation(locationId) {
  state.selectedLocationId = locationId;
}

export function setSpotlightMoment(momentId) {
  state.spotlightMomentId = momentId;
}

export function isPinned(itemOrId) {
  const id = typeof itemOrId === "string" ? itemOrId : itemOrId?.id;
  return Boolean(id && state.sessionPins.pinnedItemIds.includes(id));
}

export function pinItem(itemOrId) {
  const id = typeof itemOrId === "string" ? itemOrId : itemOrId?.id;

  if (!id || isPinned(id)) return;

  state.sessionPins.pinnedItemIds = [
    ...state.sessionPins.pinnedItemIds,
    id
  ];
}

export function unpinItem(itemOrId) {
  const id = typeof itemOrId === "string" ? itemOrId : itemOrId?.id;

  if (!id) return;

  state.sessionPins.pinnedItemIds = state.sessionPins.pinnedItemIds.filter(
    (pinnedId) => pinnedId !== id
  );
}

export function togglePinnedItem(itemOrId) {
  if (isPinned(itemOrId)) {
    unpinItem(itemOrId);
    return;
  }

  pinItem(itemOrId);
}

export function clearPins() {
  state.sessionPins.pinnedItemIds = [];
}

export function clearSelection() {
  state.selectedItem = null;
  state.selectedLocationId = null;
  state.spotlightMomentId = null;
}