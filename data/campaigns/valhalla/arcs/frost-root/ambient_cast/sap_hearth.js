export const sapHearthAmbient = [
  {
    id: "ambient_sap_hearth_revelers",
    name: "Sap-Hearth Revelers",
    type: "hall crowd",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    locationIds: [
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    role: "Warmth, social decompression, morale, and the contrast between celebration and dread.",
    useWhen: "Use in the Sap-Hearth before or after the battle when the hall needs to feel alive without becoming safe in a false way.",

    presentation: {
      collectiveVibe: "Loud by habit, quiet underneath.",
      visualTexture: [
        "People raising cups because that is what they know how to do after surviving.",
        "Old songs starting strong and losing voices midway through.",
        "A table cleared for wounded, then covered with cups again because no one knows what else to do."
      ],
      audibleTexture: [
        "Forced laughter near the fire.",
        "A drinking song held together by fewer voices than it needs.",
        "The slow drip of sap beneath the noise."
      ]
    },

    sampleLines: [
      "Drink. You held the line—you drink.",
      "We've seen raids. That was not a raid.",
      "Someone start the old song. I don't care which one.",
      "Why is the basin so quiet?"
    ],

    tags: ["ambient", "sap-hearth", "revelers", "decompression", "morale", "act-1"]
  }
];
