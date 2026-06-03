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

export const arcConfig = {
  id: "arc_valhalla_intermission",
  slug: "valhalla-intermission",
  name: "Valhalla Intermission",
  label: "Valhalla Intermission",
  modeId: "valhalla",
  campaignId: "valhalla",
  status: "active",
  summary: "Valhalla hub, return-loop, social pressure, and between-mission table flow.",
  tags: ["valhalla", "intermission", "hub"]
};

export const valhallaIntermissionArc = {
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
