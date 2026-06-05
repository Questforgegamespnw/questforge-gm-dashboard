// actors/index.js

import { primaryActors } from "./primary.js";
import { supportingActors } from "./supporting.js";
import { encounterActors } from "./encounters.js";

export { primaryActors } from "./primary.js";
export { supportingActors } from "./supporting.js";
export { encounterActors } from "./encounters.js";

export const actors = [
  ...primaryActors,
  ...supportingActors,
  ...encounterActors
];