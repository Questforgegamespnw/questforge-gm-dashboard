import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "./current_loadout.js";
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

export const campaignData = { config: campaignConfig, currentLoadout, actors, ambientCast, factions, fireableMoments, locations, references, scenes, tables, threads, trackers };
