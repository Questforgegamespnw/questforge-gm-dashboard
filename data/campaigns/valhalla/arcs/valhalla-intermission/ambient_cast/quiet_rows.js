export const quietRowsAmbientCast = [
  {
    id: "ambient_valhalla_quiet_rows_absent_names",
    title: "Quiet Rows Keepers and Absent Names",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_quiet_rows"],

    summary: "Soft-footed caretakers, grieving warriors, and half-remembered names lingering where Valhalla stores absence instead of triumph.",

    names: [
      "Astrid",
      "Einar",
      "Freydis",
      "Gorm",
      "Hanne",
      "Leif",
      "Marta",
      "Runolf"
    ],

    voices: [
      "Low and careful, as if volume would wake the wrong memory.",
      "Grief made practical through ritual upkeep.",
      "Confused certainty: they know someone is missing but not who.",
      "Warm enough to help, frightened enough to stop before saying too much."
    ],

    hookLines: [
      "There was a cup here yesterday. No one remembers whose.",
      "Names do not vanish all at once. They thin.",
      "Sven comes here when he thinks no one notices.",
      "Some chairs stay empty. Some pretend they were never built.",
      "If you remember a name, say it before the room forgets you knew it."
    ],

    interactionSeeds: [
      "Asks a player to repeat a name before it fades from their mind.",
      "Shows a chair with fresh wear but no owner anyone can name.",
      "Finds a scratched mark that matches a party memory.",
      "Warns that the Mead-Hall has started singing around certain absences.",
      "Offers a ritual for keeping a missing soul anchored in story."
    ],

    relatedActors: ["actor_sven", "actor_heimdall"],
    relatedThreads: ["thread_returned_incomplete", "thread_names_changing_quiet_rows"],
    relatedLocations: ["location_valhalla_mead_hall", "location_valhalla_heimdalls_threshold"],
    tags: ["ambient", "quiet-rows", "absence", "memory", "return-cycle", "soft-horror"],
    gmNotes: "Use this cast when the players ask who is tending the missing, who remembers them, or what absence looks like in Valhalla."
  }
];
