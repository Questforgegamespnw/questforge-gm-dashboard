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
  }
];
