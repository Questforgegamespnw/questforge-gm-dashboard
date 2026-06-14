import {
  validStatuses,
  validResolutionModes,
  validReadAloudTypes
} from "./vocabularies.js";

export const requiredFields = {
  actors: [
    "id",
    "name",
    "role",
    "modeId",
    "campaignId",
    "status",
    "tags"
  ],

  ambientCast: [
    "id",
    "title",
    "type",
    "modeId",
    "campaignId",
    "status",
    "locationIds",
    "tags"
  ],

  locations: [
    "id",
    "name",
    "type",
    "modeId",
    "campaignId",
    "status",
    "tags"
  ],

  factions: [
    "id",
    "name",
    "type",
    "modeId",
    "campaignId",
    "status",
    "tags"
  ],

  threads: [
    "id",
    "title",
    "type",
    "modeId",
    "campaignId",
    "status",
    "tags"
  ],

  trackers: [
    "id",
    "name",
    "type",
    "modeId",
    "campaignId",
    "status",
    "value",
    "min",
    "max",
    "tags"
  ],

  scenes: [
    "id",
    "title",
    "type",
    "modeId",
    "campaignId",
    "status",
    "priority",
    "tags"
  ],

  fireableMoments: [
    "id",
    "title",
    "type",
    "modeId",
    "campaignId",
    "status",
    "locationIds",
    "trigger",
    "compact",
    "spotlight",
    "tags"
  ],

  tables: [
    "id",
    "name",
    "die",
    "category",
    "modeId",
    "campaignId",
    "status",
    "entries",
    "tags"
  ],

  references: [
    "id",
    "label",
    "category",
    "modeId",
    "campaignId",
    "status",
    "summary",
    "tags"
  ]
};

export const idPrefixes = {
  actors: "actor_",
  ambientCast: "ambient_",
  locations: "location_",
  factions: "faction_",
  threads: "thread_",
  trackers: "tracker_",
  scenes: "scene_",
  fireableMoments: "moment_",
  tables: "table_",
  references: "reference_"
};

export const schemaVocabularies = {
  statuses: validStatuses,
  resolutionModes: validResolutionModes,
  readAloudTypes: validReadAloudTypes
};
