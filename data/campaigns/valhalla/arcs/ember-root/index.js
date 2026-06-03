import { arcConfig } from "./arc_config.js";
import { actors } from "./actors/index.js";
import { ambientCast } from "./ambient_cast/index.js";
import { factions } from "./factions.js";
import { fireableMoments } from "./fireable_moments.js";
import { locations } from "./locations.js";
import { references } from "./references.js";
import { scenes } from "./scenes.js";
import { tables } from "./tables.js";
import { threads } from "./threads.js";
import { trackers } from "./trackers.js";

export const emberRootArc = {
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
