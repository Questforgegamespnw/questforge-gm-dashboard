export const skjoldyrsHollowAmbient = [
  {
    id: "ambient_skjoldyr_civilians",
    name: "Skjoldyr Civilians",
    type: "civilian group",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    locationIds: [
      "location_skjoldyrs_hollow",
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    role: "Human stakes and settlement texture.",
    useWhen: "Use when the party needs to feel who they are protecting, or when the aftermath needs faces instead of abstract casualties.",

    presentation: {
      collectiveVibe: "Hard people trying not to show fear.",
      visualTexture: [
        "Wool cloaks pulled tight over smoke-stained faces.",
        "Children being moved by older siblings instead of parents.",
        "People clutching tools, buckets, knives, and household charms."
      ],
      audibleTexture: [
        "Names being called through smoke.",
        "Someone praying under their breath while pretending not to.",
        "The dull quiet after a scream cuts off."
      ]
    },

    sampleLines: [
      "Where do we go?",
      "My brother was at the wall.",
      "They came from the snow. Not the road—the snow.",
      "Is it over? Tell me it's over."
    ],

    tags: ["ambient", "civilians", "settlement", "stakes", "act-1"]
  }
];
