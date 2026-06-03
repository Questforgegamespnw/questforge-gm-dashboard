import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "./current_loadout.js";

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

import { actors as arcActors } from "./arcs/valhalla-intermission/actors/index.js";
import { locations as arcLocations } from "./arcs/valhalla-intermission/locations.js";
import { factions as arcFactions } from "./arcs/valhalla-intermission/factions.js";
import { threads as arcThreads } from "./arcs/valhalla-intermission/threads.js";
import { trackers as arcTrackers } from "./arcs/valhalla-intermission/trackers.js";
import { scenes as arcScenes } from "./arcs/valhalla-intermission/scenes.js";
import { tables as arcTables } from "./arcs/valhalla-intermission/tables.js";
import { references as arcReferences } from "./arcs/valhalla-intermission/references.js";
import { fireableMoments as arcFireableMoments } from "./arcs/valhalla-intermission/fireable_moments.js";
import { ambientCast as arcAmbientCast } from "./arcs/valhalla-intermission/ambient_cast/index.js";

export const campaignData = {
  config: campaignConfig,
  currentLoadout,

  actors: [...globalActors, ...arcActors],
  locations: [...globalLocations, ...arcLocations],
  ambientCast: [...globalAmbientCast, ...arcAmbientCast],
  fireableMoments: [...globalFireableMoments, ...arcFireableMoments],
  factions: [...globalFactions, ...arcFactions],
  threads: [...globalThreads, ...arcThreads],
  trackers: [...globalTrackers, ...arcTrackers],
  scenes: [...globalScenes, ...arcScenes],
  tables: [...globalTables, ...arcTables],
  references: [...globalReferences, ...arcReferences]
};
