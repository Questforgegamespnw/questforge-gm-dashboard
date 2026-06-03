export const heimdallsThresholdAmbientCast = [
  {
    id: "ambient_valhalla_heimdalls_threshold_waiting_dead",
    title: "Threshold Waiters",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_heimdalls_threshold"],

    summary: "Returned warriors, messengers, and silent attendants waiting near the Bifrost edge where everyone knows better than to interrupt Heimdall too quickly.",

    names: [
      "Arni",
      "Bera",
      "Geir",
      "Hakon",
      "Kelda",
      "Njal",
      "Rikke",
      "Sten"
    ],

    voices: [
      "Hushed, because the threshold teaches people to lower their voices.",
      "Formal and careful, as if careless words might become true.",
      "Freshly returned and trying to confirm they are whole.",
      "Wary of Heimdall's silence and what it may mean."
    ],

    hookLines: [
      "He has not moved in an hour.",
      "When he says nothing, listen harder.",
      "I counted seven arrivals. I remember eight names.",
      "Do not stand too close to the edge unless you want to know whether it sees you back.",
      "The light hesitated. I saw it. I swear I saw it."
    ],

    interactionSeeds: [
      "Asks the party whether they remember leaving or only arriving.",
      "Offers a shaken report about a Bifrost shimmer arriving late.",
      "Insists one person in line was present a moment ago and now never existed.",
      "Falls silent the instant Heimdall opens his eyes.",
      "Directs the party toward Sven if they look unsteady after return."
    ],

    relatedActors: ["actor_heimdall", "actor_sven"],
    relatedThreads: ["thread_returned_incomplete"],
    relatedLocations: ["location_valhalla_mead_hall", "location_valhalla_quiet_rows"],
    tags: ["ambient", "threshold", "bifrost", "return-cycle", "silence", "system-warning"],
    gmNotes: "Use this cast to make Heimdall's threshold feel populated without diluting Heimdall's authority."
  }
];
