import { campaignData } from "../data/campaigns/valhalla/index.js";
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
  clearSelectedItem,
  clearSelection
} from "./core/state.js";


function getItemById(collection, id) {
  return collection.find((item) => item.id === id) ?? null;
}

function getSelectedLocation() {
  if (!state.selectedLocationId) return null;
  return getItemById(campaignData.locations, state.selectedLocationId);
}

function getActorsForLocation(location) {
  if (!location) return activeData.actors;

  const actorIds = new Set(location.actorsPresent ?? []);

  return campaignData.actors.filter((actor) => {
    return actor.currentLocation === location.id || actorIds.has(actor.id);
  });
}

function getThreadsForLocation(location) {
  if (!location) return activeData.threads;

  const threadIds = new Set(location.relatedThreads ?? []);

  return campaignData.threads.filter((thread) => {
    return threadIds.has(thread.id) || thread.relatedLocations?.includes(location.id);
  });
}

function getScenesForLocation(location) {
  if (!location) return activeData.scenes;

  const sceneIds = new Set(location.availableScenes ?? []);

  return campaignData.scenes.filter((scene) => {
    return sceneIds.has(scene.id) || scene.involvedLocations?.includes(location.id);
  });
}

function getChildLocations(parentLocation) {
  if (!parentLocation) return [];

  return campaignData.locations.filter((location) => {
    return location.parentLocation === parentLocation.id;
  });
}


const mode = getModeById(campaignData.config.modeId);
const activeData = getActiveData(campaignData);

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
  resetButton: document.querySelector("#reset-filters"),
  mainPanelTitle: document.querySelector("#main-panel-title"),
  mainPanelSubtitle: document.querySelector("#main-panel-subtitle")
};

elements.title.textContent = campaignData.config.campaignName;
elements.subtitle.textContent = campaignData.config.subtitle;
elements.actorsLabel.textContent = mode.navLabels.actors;
elements.locationsLabel.textContent = mode.navLabels.locations;
elements.pressureLabel.textContent = `${mode.navLabels.threads} / ${mode.navLabels.trackers}`;

function getTabItems(tab) {
  if (tab === "cockpit") {
    return [
      ...activeData.actors,
      ...activeData.locations,
      ...activeData.scenes,
      ...activeData.threads,
      ...activeData.trackers
    ];
  }

  if (tab === "actors") {
    return campaignData.actors;
  }

  if (tab === "locations") {
    return campaignData.locations;
  }

  if (tab === "threads") {
    return [
      ...campaignData.threads,
      ...campaignData.trackers
    ];
  }

  if (tab === "session") {
    return [
      ...activeData.scenes,
      ...activeData.tables
    ];
  }

  if (tab === "references") {
    return [
      ...activeData.references,
      ...activeData.tables
    ];
  }

  return activeData[tab] ?? [];
}

function collapseSelectedDetail() {
  clearSelectedItem();
  renderDetail(elements.centerDetailPanel, null);
  render();
}

function renderSelectedDetail(item) {
  renderSelectableDetail(elements.centerDetailPanel, item, {
    onCollapse: collapseSelectedDetail
  });
}

function handleSelect(item) {
  const isSameSelectedItem = state.selectedItem?.id === item?.id;

  if (isSameSelectedItem) {
    clearSelectedItem();
    renderSelectedDetail(null);
    render();
    return;
  }

  setSelectedItem(item);

  if (item?.id?.startsWith("location_")) {
    setSelectedLocation(item.id);
  }

  render();
  renderSelectedDetail(item);
}

function handleMomentSelect(moment) {
  setSelectedItem(moment);

  renderMomentSpotlight(elements.centerDetailPanel, moment, {
    onCollapse: collapseSelectedDetail
  });
}


function render() {
  const tab = state.currentTab;
  const tabItems = getTabItems(tab);
  const visibleItems = searchData(tabItems, state.searchTerm);

  elements.mainPanelTitle.textContent = mode.tabLabels[tab] ?? tab;
  elements.mainPanelSubtitle.textContent = mode.tabSubtitles[tab] ?? "Active dashboard material.";

  renderCards(elements.cardGrid, visibleItems, {
    mode,
    onSelect: handleSelect
  });

  const selectedLocation = getSelectedLocation();
  const locationActors = getActorsForLocation(selectedLocation);

  const displayedLocations =
    selectedLocation?.locationRole === "parent"
      ? getChildLocations(selectedLocation)
      : activeData.locations;

  renderRailList("#active-actors", locationActors, {
    onSelect: handleSelect
  });

  renderRailList("#active-locations", displayedLocations, {
    onSelect: handleSelect
  });

  const locationThreads = getThreadsForLocation(selectedLocation);
  const locationScenes = getScenesForLocation(selectedLocation);
  const locationMoments = selectedLocation?.fireableMoments ?? [];

  renderFireablesPanel(elements.fireablesPanel, locationScenes, locationMoments, {
    onSceneSelect: handleSelect,
    onMomentSelect: handleMomentSelect
  });

  renderPressurePanel(elements.pressurePanel, locationThreads, activeData.trackers);
  
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
  renderSelectedDetail(null);

  elements.searchInput.value = "";
  elements.viewFilter.value = "cockpit";

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === "cockpit");
  });

  render();
});

elements.centerDetailPanel.addEventListener("click", () => {
  if (!state.selectedItem) return;
  collapseSelectedDetail();
});

render();
