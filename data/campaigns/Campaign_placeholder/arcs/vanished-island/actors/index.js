import { primaryActors } from "./primary.js";
import { supportingActors } from "./supporting.js";
import { encounterActors } from "./encounters.js";

export const actors = [
  ...primaryActors,
  ...supportingActors,
  ...encounterActors
];