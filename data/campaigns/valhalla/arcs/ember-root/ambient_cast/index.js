import { cityWideAmbientCast } from "./city_wide.js";
import { highForgeAmbientCast } from "./high_forge.js";
import { midworksAmbientCast } from "./midworks.js";
import { lowerFurnacesAmbientCast } from "./lower_furnaces.js";
import { chainwaysAmbientCast } from "./chainways.js";
import { coreFurnaceAmbientCast } from "./core_furnace.js";

export const ambientCast = [
  ...cityWideAmbientCast,
  ...highForgeAmbientCast,
  ...midworksAmbientCast,
  ...lowerFurnacesAmbientCast,
  ...chainwaysAmbientCast,
  ...coreFurnaceAmbientCast
];
