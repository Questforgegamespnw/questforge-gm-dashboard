import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "../current_loadout.js";

import { arcConfig } from "./arcs/harthrun-investigation/arc_config.js";
import { actors } from "./arcs/harthrun-investigation/actors.js";
import { ambientCast } from "./arcs/harthrun-investigation/ambient_cast.js";
import { factions } from "./arcs/harthrun-investigation/factions.js";
import { fireableMoments } from "./arcs/harthrun-investigation/fireable_moments.js";
import { locations } from "./arcs/harthrun-investigation/locations.js";
import { references } from "./arcs/harthrun-investigation/references.js";
import { scenes } from "./arcs/harthrun-investigation/scenes.js";
import { tables } from "./arcs/harthrun-investigation/tables.js";
import { threads } from "./arcs/harthrun-investigation/threads.js";
import { trackers } from "./arcs/harthrun-investigation/trackers.js";

const harthrunInvestigationArc = {
  config: arcConfig,
  actors,
  ambientCast,
  factions,
  fireableMoments,
  locations,
  references,
  scenes,
  tables,
  threads,
  trackers
};

const arcRegistry = {
  [harthrunInvestigationArc.config.id]: harthrunInvestigationArc
};

export const availableArcs = Object.values(arcRegistry).map((arc) => ({
  id: arc.config.id,
  slug: arc.config.slug,
  label: arc.config.label ?? arc.config.title ?? arc.config.name ?? arc.config.id,
  name: arc.config.name ?? arc.config.title ?? arc.config.label ?? arc.config.id,
  status: arc.config.status ?? "available",
  summary: arc.config.summary ?? ""
}));

function normalizeArcId(arcId) {
  if (arcRegistry[arcId]) return arcId;

  const matchedArc = Object.values(arcRegistry).find((arc) => (
    arc.config.slug === arcId ||
    arc.config.name === arcId ||
    arc.config.title === arcId ||
    arc.config.label === arcId
  ));

  return matchedArc?.config.id ?? harthrunInvestigationArc.config.id;
}

function ids(items = []) {
  return items.map((item) => item.id).filter(Boolean);
}

function currentLoadoutMatchesArc(arc) {
  return (
    currentLoadout.campaignId === campaignConfig.id &&
    (
      currentLoadout.arcId === arc.config.id ||
      currentLoadout.arcId === arc.config.slug
    )
  );
}

function buildInspectionLoadout(arc) {
  return {
    ...currentLoadout,
    campaignId: campaignConfig.id,
    modeId: campaignConfig.modeId,
    arcId: arc.config.id,
    activeActors: ids(arc.actors),
    activeLocations: ids(arc.locations),
    activeAmbientCast: ids(arc.ambientCast),
    activeFactions: ids(arc.factions),
    activeThreads: ids(arc.threads),
    activeTrackers: ids(arc.trackers),
    activeScenes: ids(arc.scenes),
    activeFireableMoments: ids(arc.fireableMoments),
    activeTables: ids(arc.tables),
    activeReferences: ids(arc.references)
  };
}

function getEffectiveLoadout(arc) {
  if (currentLoadoutMatchesArc(arc)) {
    return {
      activeAmbientCast: [],
      activeFireableMoments: [],
      ...currentLoadout,
      campaignId: campaignConfig.id,
      modeId: campaignConfig.modeId,
      arcId: arc.config.id
    };
  }

  return buildInspectionLoadout(arc);
}

export function getCampaignDataForArc(arcId = currentLoadout.arcId) {
  const resolvedArcId = normalizeArcId(arcId);
  const arc = arcRegistry[resolvedArcId] ?? harthrunInvestigationArc;

  return {
    config: campaignConfig,
    activeArc: arc.config,
    availableArcs,
    currentLoadout: getEffectiveLoadout(arc),
    actors: [...arc.actors],
    locations: [...arc.locations],
    ambientCast: [...arc.ambientCast],
    fireableMoments: [...arc.fireableMoments],
    factions: [...arc.factions],
    threads: [...arc.threads],
    trackers: [...arc.trackers],
    scenes: [...arc.scenes],
    tables: [...arc.tables],
    references: [...arc.references]
  };
}

export const campaignData = getCampaignDataForArc(currentLoadout.arcId);
