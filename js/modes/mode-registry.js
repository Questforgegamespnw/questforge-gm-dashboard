import { questforgeDefaultMode } from "./questforge-default.mode.js";
import { valhallaMode } from "./valhalla.mode.js";
import { mothershipMode } from "./mothership.mode.js";
import { erasureProtocolMode } from "./erasure-protocol.mode.js";

export const modes = [
  questforgeDefaultMode,
  valhallaMode,
  mothershipMode,
  erasureProtocolMode
];

export function getModeById(modeId) {
  return modes.find((mode) => mode.id === modeId) ?? questforgeDefaultMode;
}
