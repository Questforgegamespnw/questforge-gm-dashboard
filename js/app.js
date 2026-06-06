// -----------------------------------------------------------------------------
// Imports and campaign bootstrap
// -----------------------------------------------------------------------------

import {
  campaignData as initialCampaignData,
  availableArcs,
  getCampaignDataForArc
} from "../data/campaigns/valhalla/index.js";
import { getModeById } from "./modes/mode-registry.js";
import { getActiveData, searchData } from "./core/data-loader.js";
import {
  renderCards,
  renderRailList,
  renderDetail,
  renderSelectableDetail,
  renderPressurePanel,
  renderFireablesPanel,
  renderMomentSpotlight
} from "./core/renderers.js";
import {
  state,
  setTab,
  setSearch,
  setSelectedItem,
  setSelectedLocation,
  setSelectedArc,
  setSelectedVisibilityGate,
  clearSelectedItem,
  clearSelection,
  isPinned,
  togglePinnedItem
} from "./core/state.js";

// -----------------------------------------------------------------------------
// Runtime campaign context
// -----------------------------------------------------------------------------

let campaignData = initialCampaignData;
let mode = getModeById(campaignData.config.modeId);
let activeData = getActiveData(campaignData);

// -----------------------------------------------------------------------------
// Generic lookup helpers
// -----------------------------------------------------------------------------

function getItemById(collection = [], id) {
  return collection.find((item) => item.id === id) ?? null;
}

function uniqueById(items = []) {
  const seen = new Set();
  const output = [];

  for (const item of items) {
    if (!item?.id || seen.has(item.id)) continue;
    seen.add(item.id);
    output.push(item);
  }

  return output;
}

function getTabLabel(tab) {
  if (mode.tabLabels?.[tab]) return mode.tabLabels[tab];
  if (tab === "ambientCast") return "Ambient Cast";
  return tab;
}

// -----------------------------------------------------------------------------
// Selected location and availability helpers
// -----------------------------------------------------------------------------

function getSelectedLocation() {
  if (!state.selectedLocationId) return null;
  return getItemById(campaignData.locations, state.selectedLocationId);
}

function isVisibleStatus(item) {
  return !item.status || item.status === "available" || item.status === "active";
}

function getTrackerValue(trackerId) {
  const tracker = activeData.trackers.find((tracker) => tracker.id === trackerId);
  return tracker?.value ?? 0;
}

function passesAvailabilityGate(item) {
  const availability = item.availability;

  if (!availability?.trackerId) return true;

  const trackerValue = getTrackerValue(availability.trackerId);
  const minValue = availability.minValue ?? Number.NEGATIVE_INFINITY;
  const maxValue = availability.maxValue ?? Number.POSITIVE_INFINITY;

  return trackerValue >= minValue && trackerValue <= maxValue;
}

function normalizeVisibilityGates(item) {
  const gates = item.visibilityGates ?? item.visibilityGate ?? item.actGate ?? [];
  const gateArray = Array.isArray(gates) ? gates : [gates];

  return gateArray
    .map((gate) => {
      if (!gate) return null;
      if (typeof gate === "string") return { id: gate, label: formatGateLabel(gate) };
      if (typeof gate === "object" && gate.id) {
        return {
          id: gate.id,
          label: gate.label ?? gate.name ?? formatGateLabel(gate.id)
        };
      }
      return null;
    })
    .filter(Boolean);
}

function formatGateLabel(gateId = "") {
  return String(gateId)
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getVisibilityGateOptions() {
  const optionsById = new Map();

  getSearchableCampaignItems().forEach((item) => {
    normalizeVisibilityGates(item).forEach((gate) => {
      if (!optionsById.has(gate.id)) optionsById.set(gate.id, gate);
    });
  });

  return [...optionsById.values()];
}

function setDefaultVisibilityGate() {
  const options = getVisibilityGateOptions();
  setSelectedVisibilityGate(options[0]?.id ?? null);
}

function itemMatchesVisibilityGate(item) {
  const gateId = state.selectedVisibilityGate;
  if (!gateId) return true;

  const gates = normalizeVisibilityGates(item);
  if (!gates.length) return true;

  return gates.some((gate) => gate.id === gateId);
}

function passesLiveGates(item) {
  return isVisibleStatus(item) && passesAvailabilityGate(item) && itemMatchesVisibilityGate(item);
}

function filterByVisibilityGate(items = []) {
  return items.filter((item) => itemMatchesVisibilityGate(item));
}

// -----------------------------------------------------------------------------
// Location-aware content helpers
// -----------------------------------------------------------------------------

function getActorsForLocation(location) {
  if (!location) return uniqueById([...filterByVisibilityGate(activeData.actors), ...getPinnedActors()]);

  const actorIds = new Set(location.actorsPresent ?? []);
  const locationActors = campaignData.actors.filter((actor) => {
    return (actor.currentLocation === location.id || actorIds.has(actor.id)) && itemMatchesVisibilityGate(actor);
  });

  return uniqueById([...locationActors, ...getPinnedActors()]);
}

function getAmbientCastForLocation(location) {
  const pinnedAmbientCast = getPinnedAmbientCast();

  if (!location) return uniqueById([...filterByVisibilityGate(activeData.ambientCast ?? []), ...pinnedAmbientCast]);

  const locationAmbientCast = (campaignData.ambientCast ?? []).filter((cast) => {
    return (
      cast.locationIds?.includes(location.id) &&
      passesLiveGates(cast)
    );
  });

  return uniqueById([...locationAmbientCast, ...pinnedAmbientCast]);
}

function getThreadsForLocation(location) {
  const threads = campaignData.threads.filter((thread) => {
    return passesLiveGates(thread);
  });

  if (!location) return uniqueById([...filterByVisibilityGate(activeData.threads), ...getPinnedThreads()]);

  const threadIds = new Set(location.relatedThreads ?? []);

  const locationThreads = threads.filter((thread) => {
    return threadIds.has(thread.id) || thread.relatedLocations?.includes(location.id);
  });

  return uniqueById([...locationThreads, ...getPinnedThreads()]);
}

function getScenesForLocation(location) {
  const scenes = campaignData.scenes.filter((scene) => {
    return passesLiveGates(scene);
  });

  if (!location) return uniqueById([...filterByVisibilityGate(activeData.scenes), ...getPinnedScenes()]);

  const sceneIds = new Set(location.availableScenes ?? []);

  const locationScenes = scenes.filter((scene) => {
    return sceneIds.has(scene.id) || scene.involvedLocations?.includes(location.id);
  });

  return uniqueById([...locationScenes, ...getPinnedScenes()]);
}

function getTablesForLocation(location) {
  if (!location) return uniqueById([...filterByVisibilityGate(activeData.tables), ...getPinnedTables()]);

  const locationTables = campaignData.tables.filter((table) => {
    const locationMatch =
      table.relatedLocation === location.id ||
      table.relatedLocations?.includes(location.id);

    return (
      locationMatch &&
      passesLiveGates(table)
    );
  });

  return uniqueById([...locationTables, ...getPinnedTables()]);
}

function getMomentsForLocation(location) {
  if (!location) return uniqueById([...filterByVisibilityGate(activeData.fireableMoments), ...getPinnedMoments()]);

  const locationMoments = (campaignData.fireableMoments ?? []).filter((moment) => {
    const locationMatch = moment.locationIds?.includes(location.id);

    return (
      locationMatch &&
      passesLiveGates(moment)
    );
  });

  return uniqueById([...locationMoments, ...getPinnedMoments()]);
}

function getChildLocations(parentLocation) {
  if (!parentLocation) return [];

  return campaignData.locations.filter((location) => {
    return location.parentLocation === parentLocation.id && itemMatchesVisibilityGate(location);
  });
}

// -----------------------------------------------------------------------------
// DOM references and static labels
// -----------------------------------------------------------------------------

const elements = {
  title: document.querySelector("#campaign-title"),
  subtitle: document.querySelector("#campaign-subtitle"),
  actorsLabel: document.querySelector("#actors-label"),
  locationsLabel: document.querySelector("#locations-label"),
  pressureLabel: document.querySelector("#pressure-label"),
  fireablesPanel: document.querySelector("#fireables-panel"),
  cardGrid: document.querySelector("#card-grid"),
  centerDetailPanel: document.querySelector("#center-detail-panel"),
  pressurePanel: document.querySelector("#pressure-panel"),
  searchInput: document.querySelector("#search-input"),
  viewFilter: document.querySelector("#view-filter"),
  arcSelect: document.querySelector("#arc-select"),
  visibilityGateSelect: document.querySelector("#visibility-gate-select"),
  resetButton: document.querySelector("#reset-filters"),
  mobileLeftToggle: document.querySelector("#mobile-left-toggle"),
  mobileRightToggle: document.querySelector("#mobile-right-toggle"),
  mainPanelTitle: document.querySelector("#main-panel-title"),
  mainPanelSubtitle: document.querySelector("#main-panel-subtitle")
};

function applyStaticLabels() {
  elements.title.textContent = campaignData.config.campaignName;

  const arcLabel = campaignData.activeArc?.label ?? campaignData.activeArc?.name ?? "";
  elements.subtitle.textContent = arcLabel
    ? `${campaignData.config.subtitle} · ${arcLabel}`
    : campaignData.config.subtitle;

  elements.actorsLabel.textContent = mode.navLabels.actors;
  elements.locationsLabel.textContent = mode.navLabels.locations;
  elements.pressureLabel.textContent = `${mode.navLabels.threads} / ${mode.navLabels.trackers}`;
}

function populateArcSelector() {
  if (!elements.arcSelect) return;

  elements.arcSelect.innerHTML = availableArcs.map((arc) => `
    <option value="${arc.id}">${arc.label}</option>
  `).join("");

  elements.arcSelect.value = campaignData.activeArc?.id ?? availableArcs[0]?.id ?? "";
}

function populateVisibilityGateSelector() {
  if (!elements.visibilityGateSelect) return;

  const options = getVisibilityGateOptions();

  if (!options.length) {
    elements.visibilityGateSelect.innerHTML = `<option value="">All Beats</option>`;
    elements.visibilityGateSelect.value = "";
    elements.visibilityGateSelect.hidden = true;
    return;
  }

  elements.visibilityGateSelect.hidden = false;
  elements.visibilityGateSelect.innerHTML = options.map((gate) => `
    <option value="${gate.id}">${gate.label}</option>
  `).join("");

  const selectedStillExists = options.some((gate) => gate.id === state.selectedVisibilityGate);
  if (!selectedStillExists) setSelectedVisibilityGate(options[0].id);

  elements.visibilityGateSelect.value = state.selectedVisibilityGate ?? options[0].id;
}

// -----------------------------------------------------------------------------
// Search and runtime pin helpers
// -----------------------------------------------------------------------------

function getSearchableCampaignItems() {
  return [
    ...campaignData.actors,
    ...campaignData.locations,
    ...(campaignData.ambientCast ?? []),
    ...campaignData.scenes,
    ...(campaignData.fireableMoments ?? []),
    ...campaignData.threads,
    ...campaignData.trackers,
    ...campaignData.tables,
    ...campaignData.references
  ];
}

function getPinnedItems() {
  const itemById = new Map(
    getSearchableCampaignItems().map((item) => [item.id, item])
  );

  return state.sessionPins.pinnedItemIds
    .map((id) => itemById.get(id))
    .filter(Boolean);
}

function getPinnedItemsFrom(collection = []) {
  const collectionIds = new Set(collection.map((item) => item.id));
  return getPinnedItems().filter((item) => collectionIds.has(item.id));
}

function getPinnedActors() {
  return getPinnedItemsFrom(campaignData.actors);
}

function getPinnedLocations() {
  return getPinnedItemsFrom(campaignData.locations);
}

function getPinnedAmbientCast() {
  return getPinnedItemsFrom(campaignData.ambientCast ?? []);
}

function getPinnedThreads() {
  return getPinnedItemsFrom(campaignData.threads);
}

function getPinnedTrackers() {
  return getPinnedItemsFrom(campaignData.trackers);
}

function getPinnedScenes() {
  return getPinnedItemsFrom(campaignData.scenes);
}

function getPinnedTables() {
  return getPinnedItemsFrom(campaignData.tables);
}

function getPinnedMoments() {
  return getPinnedItemsFrom(campaignData.fireableMoments ?? []);
}

// -----------------------------------------------------------------------------
// Tab content helpers
// -----------------------------------------------------------------------------

function getCockpitItems() {
  return uniqueById([
    ...filterByVisibilityGate(activeData.actors),
    ...filterByVisibilityGate(activeData.locations),
    ...filterByVisibilityGate(activeData.ambientCast ?? []),
    ...filterByVisibilityGate(activeData.scenes),
    ...filterByVisibilityGate(activeData.threads),
    ...activeData.trackers,
    ...getPinnedItems()
  ]);
}

function getTabItems(tab) {
  const hasSearch = state.searchTerm.trim().length > 0;

  if (hasSearch) {
    return getSearchableCampaignItems();
  }

  if (tab === "cockpit") {
    return getCockpitItems();
  }

  if (tab === "actors") {
    return campaignData.actors;
  }

  if (tab === "locations") {
    return campaignData.locations;
  }

  if (tab === "ambientCast") {
    return campaignData.ambientCast ?? [];
  }

  if (tab === "threads") {
    return [
      ...campaignData.threads,
      ...campaignData.trackers
    ];
  }

  if (tab === "references") {
    return [
      ...campaignData.references,
      ...campaignData.tables
    ];
  }

  return campaignData[tab] ?? activeData[tab] ?? [];
}

// -----------------------------------------------------------------------------
// Selection and action handlers
// -----------------------------------------------------------------------------

function closeMobileDrawers() {
  document.body.classList.remove("mobile-left-open", "mobile-right-open");
}

function scrollDetailIntoView() {
  elements.centerDetailPanel?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function collapseSelectedDetail() {
  clearSelectedItem();
  renderDetail(elements.centerDetailPanel, null);
  render();
}

function renderSelectedDetail(item) {
  renderSelectableDetail(elements.centerDetailPanel, item, {
    onCollapse: collapseSelectedDetail,
    onTogglePin: handleTogglePin,
    isPinned
  });
}

function handleTogglePin(item) {
  togglePinnedItem(item);
  render();
  renderSelectedDetail(item);
}

function handleSelect(item) {
  const isSameSelectedItem = state.selectedItem?.id === item?.id;

  if (isSameSelectedItem) {
    clearSelectedItem();
    renderSelectedDetail(null);
    render();
    closeMobileDrawers();
    return;
  }

  setSelectedItem(item);

  if (item?.id?.startsWith("location_")) {
    setSelectedLocation(item.id);
  }

  render();
  renderSelectedDetail(item);
  closeMobileDrawers();
  scrollDetailIntoView();
}

function handleMomentSelect(moment) {
  setSelectedItem(moment);

  renderMomentSpotlight(elements.centerDetailPanel, moment, {
    onCollapse: collapseSelectedDetail
  });

  closeMobileDrawers();
  scrollDetailIntoView();
}

function refreshCampaignContext(arcId) {
  campaignData = getCampaignDataForArc(arcId);
  mode = getModeById(campaignData.config.modeId);
  activeData = getActiveData(campaignData);
  applyStaticLabels();
}

function handleArcChange(arcId) {
  setSelectedArc(arcId);
  setSearch("");
  setTab("cockpit");
  clearSelection();
  refreshCampaignContext(arcId);
  setDefaultVisibilityGate();
  populateVisibilityGateSelector();

  elements.searchInput.value = "";
  elements.viewFilter.value = "cockpit";
  if (elements.visibilityGateSelect) elements.visibilityGateSelect.value = state.selectedVisibilityGate ?? "";
  if (elements.arcSelect) elements.arcSelect.value = campaignData.activeArc?.id ?? arcId;
  

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === "cockpit");
  });

  renderSelectedDetail(null);
  render();
}

// -----------------------------------------------------------------------------
// Main render cycle
// -----------------------------------------------------------------------------

function render() {
  const tab = state.currentTab;
  const tabItems = getTabItems(tab);
  const visibleItems = searchData(tabItems, state.searchTerm);

  elements.mainPanelTitle.textContent = getTabLabel(tab);
  elements.mainPanelSubtitle.textContent = mode.tabSubtitles?.[tab] ?? "Active dashboard material.";

  renderCards(elements.cardGrid, visibleItems, {
    mode,
    onSelect: handleSelect,
    isPinned
  });

  const selectedLocation = getSelectedLocation();
  const locationActors = getActorsForLocation(selectedLocation);
  const locationAmbientCast = getAmbientCastForLocation(selectedLocation);

  const displayedLocations = uniqueById([
    ...(selectedLocation?.locationRole === "parent"
      ? getChildLocations(selectedLocation)
      : filterByVisibilityGate(activeData.locations)),
    ...getPinnedLocations()
  ]);

  renderRailList("#active-actors", locationActors, {
    onSelect: handleSelect,
    isPinned
  });

  renderRailList("#ambient-cast-list", locationAmbientCast, {
    onSelect: handleSelect,
    isPinned
  });

  renderRailList("#active-locations", displayedLocations, {
    onSelect: handleSelect,
    isPinned
  });

  renderRailList("#pinned-items", getPinnedItems(), {
    onSelect: handleSelect,
    isPinned
  });

  const locationThreads = getThreadsForLocation(selectedLocation);
  const locationScenes = getScenesForLocation(selectedLocation);
  const locationMoments = getMomentsForLocation(selectedLocation);
  const locationTables = getTablesForLocation(selectedLocation);

  renderFireablesPanel(elements.fireablesPanel, locationScenes, locationMoments, locationTables, {
    onSceneSelect: handleSelect,
    onMomentSelect: handleMomentSelect,
    onTableSelect: handleSelect
  });

  renderPressurePanel(
    elements.pressurePanel,
    locationThreads,
    uniqueById([...activeData.trackers, ...getPinnedTrackers()])
  );
}

// -----------------------------------------------------------------------------
// Event bindings
// -----------------------------------------------------------------------------

if (elements.mobileLeftToggle) {
  elements.mobileLeftToggle.addEventListener("click", () => {
    document.body.classList.toggle("mobile-left-open");
    document.body.classList.remove("mobile-right-open");
  });
}

if (elements.mobileRightToggle) {
  elements.mobileRightToggle.addEventListener("click", () => {
    document.body.classList.toggle("mobile-right-open");
    document.body.classList.remove("mobile-left-open");
  });
}

if (elements.arcSelect) {
  elements.arcSelect.addEventListener("change", (event) => {
    handleArcChange(event.target.value);
  });
}

if (elements.visibilityGateSelect) {
  elements.visibilityGateSelect.addEventListener("change", (event) => {
    setSelectedVisibilityGate(event.target.value || null);
    render();
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    setTab(button.dataset.tab);
    elements.viewFilter.value = button.dataset.tab;
    render();
  });
});

elements.viewFilter.addEventListener("change", (event) => {
  setTab(event.target.value);
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === event.target.value);
  });
  render();
});

elements.searchInput.addEventListener("input", (event) => {
  setSearch(event.target.value);
  render();
});

elements.resetButton.addEventListener("click", () => {
  setSearch("");
  setTab("cockpit");
  clearSelection();
  setDefaultVisibilityGate();
  populateVisibilityGateSelector();
  renderSelectedDetail(null);

  elements.searchInput.value = "";
  elements.viewFilter.value = "cockpit";
  if (elements.visibilityGateSelect) elements.visibilityGateSelect.value = state.selectedVisibilityGate ?? "";

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === "cockpit");
  });

  render();
});


// -----------------------------------------------------------------------------
// Initial render
// -----------------------------------------------------------------------------

setSelectedArc(campaignData.activeArc?.id ?? availableArcs[0]?.id ?? null);
setDefaultVisibilityGate();
populateArcSelector();
populateVisibilityGateSelector();
applyStaticLabels();
render();
