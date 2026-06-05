export const gatePalisadeAmbient = [
  {
    id: "ambient_gate_defenders",
    name: "Gate Defenders",
    type: "defender group",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    locationIds: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads"
    ],

    role: "Battlefield line texture, including archers, shield-bearers, spear militia, and tired local fighters.",
    useWhen: "Use during the siege whenever the line needs to feel manned, pressured, or partially collapsing.",

    presentation: {
      collectiveVibe: "Disciplined enough to hold, exhausted enough to break.",
      visualTexture: [
        "Shields packed too tightly near the gate.",
        "Archers firing from bad angles because there are no good ones left.",
        "Militia rotating wounded fighters out and terrified neighbors in."
      ],
      audibleTexture: [
        "Shield rims hammering together.",
        "A captain counting impacts under his breath.",
        "Someone yelling for more arrows, then for more bodies."
      ]
    },

    sampleLines: [
      "Brace!",
      "Left side's folding!",
      "Don't chase them—hold the gate!",
      "They're not climbing. They're waiting for something."
    ],

    tags: ["ambient", "defenders", "gate", "siege", "battlefield", "act-1"]
  },

  {
    id: "ambient_wounded_defenders",
    name: "Wounded Defenders",
    type: "aftermath group",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    locationIds: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_sap_hearth",
      "location_skjoldyrs_hollow_crossroads"
    ],

    role: "Aftermath testimony, emotional cost, and clue delivery through injured witnesses.",
    useWhen: "Use after the siege, during triage, or when the party asks what happened before they arrived.",

    presentation: {
      collectiveVibe: "Alive, grateful, and unable to make sense of what they survived.",
      visualTexture: [
        "Bandages already soaking through.",
        "A defender refusing to lie down until someone takes their spear.",
        "Burn marks and frostbite on the same body."
      ],
      audibleTexture: [
        "Pained breathing under the louder work of triage.",
        "Someone laughing once, then stopping.",
        "A wounded fighter repeating the same detail because it will not fit in their head."
      ]
    },

    sampleLines: [
      "They stepped over me. Didn't even finish me.",
      "The dead were listening to something.",
      "I saw the snow lift before the ground split.",
      "We won, didn't we? Why doesn't it feel like it?"
    ],

    tags: ["ambient", "wounded", "aftermath", "defenders", "clues", "act-1"]
  }
];
