import { meadHallAmbientCast } from "./mead_hall.js";
import { goldenFieldsAmbientCast } from "./golden_fields.js";
import { forgeLanesAmbientCast } from "./forge_lanes.js";
import { valkyrieAerieAmbientCast } from "./valkyrie_aerie.js";
import { heimdallsThresholdAmbientCast } from "./heimdalls_threshold.js";
import { quietRowsAmbientCast } from "./quiet_rows.js";

export const ambientCast = [
  ...meadHallAmbientCast,
  ...goldenFieldsAmbientCast,
  ...forgeLanesAmbientCast,
  ...valkyrieAerieAmbientCast,
  ...heimdallsThresholdAmbientCast,
  ...quietRowsAmbientCast
];
