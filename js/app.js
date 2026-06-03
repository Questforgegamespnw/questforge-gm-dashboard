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

const mode = getModeById(campaignData.config.modeId);
const activeData = getActiveData(campaignData);

function getItemById(collection, id) {
  return collection.find((item) => item.id === id) ?? null;
}

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

function getActorsForLocation(location) {
  if (!location) return activeData.actors;

  const actorIds = new Set(location.actorsPresent ?? []);

  return campaignData.actors.filter((actor) => {
    return actor.currentLocation === location.id || actorIds.has(actor.id);
  });
}

function getThreadsForLocation(location) {
  const threads = campaignData.threads.filter((thread) => {
    return isVisibleStatus(thread) && passesAvailabilityGate(thread);
  });

  if (!location) return threads;

  const threadIds = new Set(location.relatedThreads ?? []);

  return threads.filter((thread) => {
    return threadIds.has(thread.id) || thread.relatedLocations?.includes(location.id);
  });
}

function getScenesForLocation(location) {
  const scenes = campaignData.scenes.filter((scene) => {
    return isVisibleStatus(scene) && passesAvailabilityGate(scene);
  });

  if (!location) return scenes;

  const sceneIds = new Set(location.availableScenes ?? []);

  return scenes.filter((scene) => {
    return sceneIds.has(scene.id);
  });
}

function getTablesForLocation(location) {
  if (!location) return [];

  return campaignData.tables.filter((table) => {
    const locationMatch =
      table.relatedLocation === location.id ||
      table.relatedLocations?.includes(location.id);

    return (
      locationMatch &&
      isVisibleStatus(table) &&
      passesAvailabilityGate(table)
    );
  });
}

function getMomentsForLocation(location) {
  if (!location) return [];

  return (campaignData.fireableMoments ?? []).filter((moment) => {
    const locationMatch = moment.locationIds?.includes(location.id);

    return (
      locationMatch &&
      isVisibleStatus(moment) &&
      passesAvailabilityGate(moment)
    );
  });
}

function getChildLocations(parentLocation) {
  if (!parentLocation) return [];

  return campaignData.locations.filter((location) => {
    return location.parentLocation === parentLocation.id;
  });
}

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

function getSearchableCampaignItems() {
  return [
    ...campaignData.actors,
    ...campaignData.locations,
    ...campaignData.scenes,
    ...(campaignData.fireableMoments ?? []),
    ...campaignData.threads,
    ...campaignData.trackers,
    ...campaignData.tables,
    ...campaignData.references
  ];
}

function getTabItems(tab) {
  const hasSearch = state.searchTerm.trim().length > 0;

  if (hasSearch) {
    return getSearchableCampaignItems();
  }

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

  if (tab === "references") {
    return [
      ...campaignData.references,
      ...campaignData.tables
    ];
  }

  return campaignData[tab] ?? activeData[tab] ?? [];
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
  const locationMoments = getMomentsForLocation(selectedLocation);
  const locationTables = getTablesForLocation(selectedLocation);

  renderFireablesPanel(elements.fireablesPanel, locationScenes, locationMoments, locationTables, {
    onSceneSelect: handleSelect,
    onMomentSelect: handleMomentSelect,
    onTableSelect: handleSelect
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
