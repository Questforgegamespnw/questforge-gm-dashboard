export const state = {
  currentTab: "cockpit",
  searchTerm: "",

  selectedItem: null,
  selectedLocationId: null,
  spotlightMomentId: null
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

export function clearSelection() {
  state.selectedItem = null;
  state.selectedLocationId = null;
  state.spotlightMomentId = null;
}