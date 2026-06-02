// Placeholder for future schema validation helpers.
// Sprint 1 does not require validation. Keep this generic.

export const requiredFields = {
  actors: ["id", "name", "role", "modeId", "campaignId", "status", "tags"],
  locations: ["id", "name", "type", "modeId", "campaignId", "status", "tags"],
  scenes: ["id", "title", "type", "modeId", "campaignId", "status", "priority", "tags"],
  threads: ["id", "title", "type", "modeId", "campaignId", "status", "tags"],
  trackers: ["id", "name", "type", "modeId", "campaignId", "status", "value", "min", "max", "tags"]
};
