import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "./current_loadout.js";

import { globalActors } from "./global/actors.js";
import { globalAmbientCast } from "./global/ambient_cast.js";
import { globalLocations } from "./global/locations.js";
import { globalFactions } from "./global/factions.js";
import { globalThreads } from "./global/threads.js";
import { globalTrackers } from "./global/trackers.js";
import { globalScenes } from "./global/scenes.js";
import { globalFireableMoments } from "./global/fireable_moments.js";
import { globalTables } from "./global/tables.js";
import { globalReferences } from "./global/references.js";

import { arcActors } from "./arcs/lantern-house-opening/actors.js";
import { arcAmbientCast } from "./arcs/lantern-house-opening/ambient_cast.js";
import { arcLocations } from "./arcs/lantern-house-opening/locations.js";
import { arcFactions } from "./arcs/lantern-house-opening/factions.js";
import { arcThreads } from "./arcs/lantern-house-opening/threads.js";
import { arcTrackers } from "./arcs/lantern-house-opening/trackers.js";
import { arcScenes } from "./arcs/lantern-house-opening/scenes.js";
import { arcFireableMoments } from "./arcs/lantern-house-opening/fireable_moments.js";
import { arcTables } from "./arcs/lantern-house-opening/tables.js";
import { arcReferences } from "./arcs/lantern-house-opening/references.js";

const lanternHouseArc = {
  id: "arc_lantern_house_opening",
  slug: "lantern-house-opening",
  label: "Lantern House Opening",
  name: "Lantern House Opening"
};

export const availableArcs = [lanternHouseArc];

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

function buildCampaignData(activeArc = lanternHouseArc) {
  return {
    config: campaignConfig,
    activeArc,
    currentLoadout: {
      ...currentLoadout,
      arcId: activeArc.id
    },

    actors: uniqueById([...globalActors, ...arcActors]),
    ambientCast: uniqueById([...globalAmbientCast, ...arcAmbientCast]),
    locations: uniqueById([...globalLocations, ...arcLocations]),
    factions: uniqueById([...globalFactions, ...arcFactions]),
    threads: uniqueById([...globalThreads, ...arcThreads]),
    trackers: uniqueById([...globalTrackers, ...arcTrackers]),
    scenes: uniqueById([...globalScenes, ...arcScenes]),
    fireableMoments: uniqueById([...globalFireableMoments, ...arcFireableMoments]),
    tables: uniqueById([...globalTables, ...arcTables]),
    references: uniqueById([...globalReferences, ...arcReferences]),
    assets: []
  };
}

export function getCampaignDataForArc(arcId = campaignConfig.defaultArcId) {
  const activeArc = availableArcs.find((arc) => arc.id === arcId) ?? lanternHouseArc;
  return buildCampaignData(activeArc);
}

export const campaignData = getCampaignDataForArc(campaignConfig.defaultArcId);
