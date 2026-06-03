import { uniqueById } from "./utils.js";

export function getActiveData(campaignData) {
  const loadout = campaignData.currentLoadout;

  return {
    actors: filterByIds(campaignData.actors, loadout.activeActors),
    locations: filterByIds(campaignData.locations, loadout.activeLocations),
    ambientCast: filterByIds(campaignData.ambientCast ?? [], loadout.activeAmbientCast ?? []),
    factions: filterByIds(campaignData.factions, loadout.activeFactions),
    scenes: filterByIds(campaignData.scenes, loadout.activeScenes),
    threads: filterByIds(campaignData.threads, loadout.activeThreads),
    trackers: filterByIds(campaignData.trackers, loadout.activeTrackers),
    tables: filterByIds(campaignData.tables, loadout.activeTables),
    references: filterByIds(campaignData.references, loadout.activeReferences)
  };
}

export function mergeCampaignLayers(globalItems = [], arcItems = [], sessionItems = []) {
  return uniqueById([...globalItems, ...arcItems, ...sessionItems]);
}

export function searchData(items, searchTerm = "") {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return items;

  return items.filter((item) => searchableText(item).includes(query));
}

function filterByIds(items = [], ids = []) {
  if (!ids?.length) return [];

  const idSet = new Set(ids);
  return items.filter((item) => idSet.has(item.id));
}

function searchableText(item) {
  return [
    item.id,
    item.name,
    item.title,
    item.label,
    item.role,
    item.type,
    item.status,
    item.currentState,
    item.summary,
    item.pressure,
    item.names?.join(" "),
    item.voices?.join(" "),
    item.hookLines?.join(" "),
    item.interactionSeeds?.join(" "),
    item.gmNotes,
    item.presentation?.vibe,
    item.presentation?.physicality,
    item.presentation?.voice,
    item.presentation?.sceneImpact,
    item.presentation?.establishingShot,
    item.motivation?.wants,
    item.motivation?.fears,
    item.knowledge?.knows?.join(" "),
    item.knowledge?.secrets?.join(" "),
    item.clues?.join(" "),
    item.outcomes?.join(" "),
    item.tags?.join(" ")
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
