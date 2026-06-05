export const references = [
  {
    id: "reference_valhalla_return_loop",
    label: "Valhalla Return Loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    category: "procedure",
    summary: "Intermission hub procedure: Bifrost arrival, Heimdall acknowledgment, immediate reactions, hub choice, NPC interaction, and next mission selection.",
    details: [
      "Use Bifrost as recap and sensory reset.",
      "Use Heimdall as continuity anchor.",
      "Let player-selected hub locations determine emotional pacing.",
      "Use ambient cast and local actors to answer: who is nearby, what do they say, and how do I make this room feel alive?",
      "Do not overexplain omens. Let changed ritual, changed room behavior, and changed NPC delivery carry the warning."
    ],

    reference: "arcs/valhalla-intermission/library/references/valhalla_return_loop.md",
    tags: [
      "active",
      "valhalla",
      "intermission",
      "procedure",
      "return-loop",
      "hub-flow"
    ],
    gmNotes: "This belongs in the intermission arc because it describes the Valhalla hub/free-roam loop, not the campaign-wide deployment system."
  },

  {
    id: "reference_valhalla_hub_failure_textures",
    label: "Valhalla Hub Failure Textures",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    category: "reminder",
    summary: "Each Valhalla intermission location should fail in a different emotional language so the hub feels varied, alive, and specifically wrong.",
    details: [
      "Bifrost Platform: return becomes unstable.",
      "Heimdall’s Threshold: certainty becomes silence.",
      "Mead-Hall: warmth becomes hollow.",
      "Golden Fields: natural order becomes contaminated.",
      "Forge-Lanes: creation becomes weaponized.",
      "Quiet Rows: memory becomes unreliable.",
      "Valkyrie Aerie: duty becomes moral fracture."
    ],

    reference: "arcs/valhalla-intermission/library/references/valhalla_hub_failure_textures.md",
    tags: [
      "active",
      "valhalla",
      "intermission",
      "hub",
      "failure-textures"
    ],
    gmNotes: "Do not make every location ominous in the same way. Each hub space should reveal a different kind of system strain."
  },

  {
    id: "reference_ember_root_aftermath_textures",
    label: "Ember-Root Aftermath Textures",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    category: "reminder",
    summary: "Use after Ember-Root to show that Valhalla remains structurally the same hub, but now carries heat, ash, fatigue, and soul-retrieval strain from the mission fallout.",
    details: [
      "Do not clone the intermission layer. The return loop remains the same; only the hub state changes.",
      "Bifrost Platform: heat lingers longer than it should, and the return feels less clean.",
      "Heimdall’s Threshold: Heimdall watches what followed the party home, not just the party.",
      "Valkyrie Aerie: riders launch and return at emergency scale; show motion before explanation.",
      "Mead-Hall: warmth still works, but smoke, ash, or tired silence can sit under the feast.",
      "Golden Fields: soil may be warm to the touch; ash can drift through gold light without immediate explanation.",
      "Forge-Lanes: sealed projects, old craft, and heat-response should feel more alert after Ember-Root.",
      "Quiet Rows: the cost of extraction and missed souls should feel closer, quieter, and harder to dismiss.",
      "Sven offers decompression without pretending the cost was small.",
      "Thora and Kara should carry visible exhaustion, unsaid judgment, or changed respect depending on the party's Ember-Root choices.",
      "Use these as texture, not exposition. Let players infer the shape of the consequence."
    ],

    reference: "arcs/valhalla-intermission/library/references/ember_root_aftermath_textures.md",
    relatedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_mead_hall",
      "location_valhalla_golden_fields",
      "location_valhalla_forge_lanes",
      "location_valhalla_quiet_rows"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_yggdrasil_root_sickness",
      "thread_valkyrie_disagreement"
    ],

    tags: [
      "active",
      "valhalla",
      "intermission",
      "ember-root",
      "aftermath",
      "hub-texture",
      "fallout"
    ],
    gmNotes: "This is the reusable aftermath overlay for post-Ember-Root hub play. Keep it concise and adjustable."
  }

];
