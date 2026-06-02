export const threads = [
{
    id: "thread_valhalla_system_failure_chain",
    title: "Valhalla System Failure Chain",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "mystery",
    summary: "Root corruption destabilizes souls, overworks Valkyries, causes retrieval failures, degrades the Quiet Rows, and destabilizes Valhalla.",
    currentState: "The symptoms are visible, but the full chain should not be explained too early.",
    nextPressure: "Show one link in the chain at a time through the hub zone players visit.",
    relatedActors: ["actor_heimdall", "actor_svinhild", "actor_sven"],
    relatedLocations: [
      "location_valhalla_golden_fields",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_quiet_rows",
      "location_valhalla_mead_hall"
    ],
    relatedFactions: ["faction_valkyries", "faction_einherjar"],
    relatedScenes: [
      "scene_valhalla_retrieval_failure_incident",
      "scene_valhalla_quiet_rows_foreshadowing"
    ],
    tags: ["active", "valhalla", "system-failure", "hidden-truth", "yggdrasil"],
    gmNotes: "Do not reveal the whole system chain too early."
  },

  {
    id: "thread_returned_incomplete",
    title: "Returned Incomplete",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "omen",
    summary: "Some souls may not be returning cleanly from death or mission fallout.",
    currentState: "The party has not yet seen the full failure, only strange return signs.",
    nextPressure: "Let Bifrost or Quiet Rows reveal a small inconsistency.",
    relatedActors: ["actor_heimdall", "actor_sven"],
    relatedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_quiet_rows"
    ],
    relatedFactions: ["faction_einherjar"],
    relatedScenes: ["scene_valhalla_bifrost_return"],
    tags: ["active", "valhalla", "return", "hidden-truth"],
    gmNotes: ""
  },

  {
    id: "thread_yggdrasil_root_sickness",
    title: "Yggdrasil Root Sickness",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "mystery",
    summary: "Root corruption may be destabilizing Valhalla’s systems.",
    currentState: "The symptoms are visible before the cause is understood.",
    nextPressure: "Fields, Forge-Lanes, and Valkyrie retrievals can each reveal a different symptom.",
    relatedActors: [],
    relatedLocations: [
      "location_valhalla_golden_fields",
      "location_valhalla_forge_lanes",
      "location_valhalla_valkyrie_aerie"
    ],
    relatedFactions: [],
    relatedScenes: [
      "scene_valhalla_golden_fields_warning",
      "scene_valhalla_forge_lanes_recognition"
    ],
    tags: ["active", "valhalla", "yggdrasil", "mystery"],
    gmNotes: "Do not reveal the whole chain too early."
  },

  {
    id: "thread_valkyrie_disagreement",
    title: "Valkyrie Disagreement",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "relationship",
    summary: "The Valkyries are beginning to disagree about retrieval, worthiness, and impossible choices.",
    currentState: "For now the fracture is mostly hidden behind discipline.",
    nextPressure: "A short argument, refusal, or clipped briefing can reveal strain.",
    relatedActors: ["actor_svinhild"],
    relatedLocations: ["location_valhalla_valkyrie_aerie"],
    relatedFactions: ["faction_valkyries"],
    relatedScenes: ["scene_valhalla_valkyrie_aerie_briefing"],
    tags: ["active", "valhalla", "valkyrie", "relationship-pressure"],
    gmNotes: ""
  },

  {
    id: "thread_heimdall_knows_more",
    title: "Heimdall Knows More Than He Says",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "promise",
    summary: "Heimdall’s changed speech is a system signal.",
    currentState: "He is still speaking, but less than expected.",
    nextPressure: "If escalation rises, let silence replace explanation.",
    relatedActors: ["actor_heimdall"],
    relatedLocations: ["location_valhalla_heimdalls_threshold"],
    relatedFactions: [],
    relatedScenes: ["scene_valhalla_heimdall_acknowledgment"],
    tags: ["active", "valhalla", "heimdall", "foreshadow"],
    gmNotes: ""
  },

  {
    id: "thread_names_changing_quiet_rows",
    title: "Names Changing in the Quiet Rows",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "omen",
    summary: "Names in the Quiet Rows may flicker, change, or disappear as soul anchors weaken.",
    currentState: "The threat is subtle and should be used sparingly.",
    nextPressure: "A name looks familiar, appears unfinished, or disappears while observed.",
    relatedActors: ["actor_sven"],
    relatedLocations: ["location_valhalla_quiet_rows"],
    relatedFactions: [],
    relatedScenes: ["scene_valhalla_quiet_rows_foreshadowing"],
    tags: ["active", "valhalla", "quiet-rows", "memory", "omen"],
    gmNotes: "Quiet Rows scenes should feel sacred, not noisy."
  },

  {
    id: "thread_dark_valkyrie_foreshadow",
    title: "Dark Valkyrie Foreshadow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    type: "threat",
    summary: "A Valkyrie who has seen too many failed returns may begin deciding who is worth saving.",
    currentState: "This is only foreshadow for now.",
    nextPressure: "A Valkyrie lingers, watches the party, or asks whether death hurt longer than it should have.",
    relatedActors: ["actor_svinhild"],
    relatedLocations: ["location_valhalla_valkyrie_aerie"],
    relatedFactions: ["faction_valkyries"],
    relatedScenes: [
      "scene_valhalla_valkyrie_aerie_briefing",
      "scene_valhalla_retrieval_failure_incident"
    ],
    tags: ["active", "valhalla", "dark-valkyrie", "foreshadow", "threat"],
    gmNotes: "This should grow from moral fracture, not simple corruption."
  },

{
    "id": "thread_borrowed_souls",
    "title": "Borrowed Souls",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "type": "identity / afterlife",
    "summary": "The party may not belong to Valhalla; they are borrowed from aligned domains.",
    "currentState": "Valhalla has deployed them as champions, but their true destinations may still exist elsewhere.",
    "nextPressure": "A divine agent, Hel, Loki, or personal vision can question whether Valhalla has a right to keep using them.",
    "relatedActors": [
      "actor_heimdall",
      "actor_svinhild",
      "actor_odin"
    ],
    "relatedLocations": [
      "location_valhalla_heimdalls_threshold"
    ],
    "relatedFactions": [
      "faction_valkyries"
    ],
    "relatedScenes": [],
    "tags": [
      "valhalla",
      "multi-pantheon",
      "afterlife",
      "identity"
    ],
    "gmNotes": "Ask each player what their original afterlife would have been like."
  },
  {
    "id": "thread_return_is_not_guaranteed",
    "title": "Return Is Not Guaranteed",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "type": "threat / consequence",
    "summary": "Deployment and extraction are degrading as the resurrection/return cycle destabilizes.",
    "currentState": "Extraction still works, but signs of delay, strain, and wrong return are accumulating.",
    "nextPressure": "Trigger a delayed return, Valkyrie strain, Heimdall anomaly line, or First Return Failure Event.",
    "relatedActors": [
      "actor_heimdall",
      "actor_sven",
      "actor_svinhild",
      "actor_eldri_softsky"
    ],
    "relatedLocations": [
      "location_valhalla_bifrost_platform",
      "location_valhalla_quiet_rows"
    ],
    "relatedFactions": [
      "faction_valkyries"
    ],
    "relatedScenes": [],
    "tags": [
      "valhalla",
      "mortality-drift",
      "extraction",
      "quiet-rows",
      "return-cycle"
    ],
    "gmNotes": "Tension test: does this make them question whether they will come back?"
  }
];
