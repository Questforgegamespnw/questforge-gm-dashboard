import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "../current_loadout.js";

import { actors as globalActors } from "./global/actors/index.js";
import { locations as globalLocations } from "./global/locations.js";
import { factions as globalFactions } from "./global/factions.js";
import { threads as globalThreads } from "./global/threads.js";
import { trackers as globalTrackers } from "./global/trackers.js";
import { scenes as globalScenes } from "./global/scenes.js";
import { tables as globalTables } from "./global/tables.js";
import { references as globalReferences } from "./global/references.js";
import { fireableMoments as globalFireableMoments } from "./global/fireable_moments.js";
import { ambientCast as globalAmbientCast } from "./global/ambient_cast/index.js";

import { valhallaIntermissionArc } from "./arcs/valhalla-intermission/index.js";
import { emberRootArc } from "./arcs/ember-root/index.js";

const arcRegistry = {
  [valhallaIntermissionArc.config.id]: valhallaIntermissionArc,
  [emberRootArc.config.id]: emberRootArc
};

export const availableArcs = Object.values(arcRegistry).map((arc) => ({
  id: arc.config.id,
  slug: arc.config.slug,
  label: arc.config.label ?? arc.config.name ?? arc.config.id,
  name: arc.config.name ?? arc.config.label ?? arc.config.id,
  status: arc.config.status ?? "available",
  summary: arc.config.summary ?? ""
}));

function normalizeArcId(arcId) {
  if (arcRegistry[arcId]) return arcId;

  const matchedArc = Object.values(arcRegistry).find((arc) => {
    return arc.config.slug === arcId || arc.config.name === arcId || arc.config.label === arcId;
  });

  return matchedArc?.config.id ?? valhallaIntermissionArc.config.id;
}

function ids(items = []) {
  return items.map((item) => item.id).filter(Boolean);
}

function currentLoadoutMatchesArc(arc) {
  return (
    currentLoadout.arcId === arc.config.id ||
    currentLoadout.arcId === arc.config.slug
  );
}

function buildInspectionLoadout(arc) {
  return {
    ...currentLoadout,
    arcId: arc.config.id,

    // Runtime arc switching is currently an inspection/run bridge.
    // If current_loadout.js does not explicitly target this arc, use the arc
    // package itself as the starting cockpit context.
    activeActors: ids(arc.actors),
    activeLocations: ids(arc.locations),
    activeAmbientCast: ids(arc.ambientCast),
    activeFactions: ids(arc.factions),
    activeThreads: ids([...globalThreads, ...arc.threads]),
    activeTrackers: ids([...globalTrackers, ...arc.trackers]),
    activeScenes: ids(arc.scenes),
    activeFireableMoments: ids(arc.fireableMoments),
    activeTables: ids(arc.tables),
    activeReferences: ids([...globalReferences, ...arc.references])
  };
}

function getEffectiveLoadout(arc) {
  if (currentLoadoutMatchesArc(arc)) {
    return {
      activeAmbientCast: [],
      activeFireableMoments: [],
      ...currentLoadout,
      arcId: arc.config.id
    };
  }

  return buildInspectionLoadout(arc);
}

export function getCampaignDataForArc(arcId = currentLoadout.arcId) {
  const resolvedArcId = normalizeArcId(arcId);
  const arc = arcRegistry[resolvedArcId] ?? valhallaIntermissionArc;

  return {
    config: campaignConfig,
    activeArc: arc.config,
    availableArcs,
    currentLoadout: getEffectiveLoadout(arc),

    actors: [...globalActors, ...arc.actors],
    locations: [...globalLocations, ...arc.locations],
    ambientCast: [...globalAmbientCast, ...arc.ambientCast],
    fireableMoments: [...globalFireableMoments, ...arc.fireableMoments],
    factions: [...globalFactions, ...arc.factions],
    threads: [...globalThreads, ...arc.threads],
    trackers: [...globalTrackers, ...arc.trackers],
    scenes: [...globalScenes, ...arc.scenes],
    tables: [...globalTables, ...arc.tables],
    references: [...globalReferences, ...arc.references]
  };
}

export const campaignData = getCampaignDataForArc(currentLoadout.arcId);
