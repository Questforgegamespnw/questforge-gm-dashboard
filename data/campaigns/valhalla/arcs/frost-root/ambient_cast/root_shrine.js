export const rootShrineAmbient = [
  {
    id: "ambient_root_tenders",
    name: "Root-Tenders and Shrine Keepers",
    type: "ritual caretaker group",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    locationIds: [
      "location_skjoldyrs_hollow_root_shrine",
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    role: "Local ritual knowledge, root behavior texture, and shrine wrongness support.",
    useWhen: "Use when the party investigates the Root Shrine, sap flow, old runes, or local spiritual practice.",

    presentation: {
      collectiveVibe: "Careful, reverent, and deeply unsettled.",
      visualTexture: [
        "Resin-stained hands.",
        "Bone charms tied with root fiber.",
        "People avoiding direct steps across old rune-lines."
      ],
      audibleTexture: [
        "Whispered corrections to old prayers.",
        "The scrape of a knife clearing frost from carved marks.",
        "Long pauses before anyone answers a question about the shrine."
      ]
    },

    sampleLines: [
      "That mark is old. That one is not.",
      "We do not carve over living root.",
      "The shrine was not broken open.",
      "It feels like the old signs are holding something they do not understand."
    ],

    tags: ["ambient", "root-tenders", "shrine-keepers", "root", "ritual", "act-1"]
  }
];
