export const tables = [
  {
    id: "table_gate_status_options",
    name: "Gate Status Options",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    die: "choice",
    category: "state",
    relatedLocation: "location_skjoldyrs_hollow_gate_palisade",
    entries: [
      "Intact: defenders organized, fewer enemies inside town, Brinhild holds strong position.",
      "Cracking: one breach lane opens, civilians in danger, brute pressure increases.",
      "Breached: enemies inside town, civilians high risk, battlefield splits into two fronts."
    ],
    tags: ["act-1", "gate", "siege"]
  },
  {
    id: "table_post_siege_foreshadow_drops",
    name: "Post-Siege Foreshadow Drops",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    die: "choose 1-2",
    category: "foreshadow",
    entries: [
      "A body twitches once, then stops.",
      "A rune still glows faintly after the node is gone.",
      "Sap smells metallic or overheated.",
      "Snow does not settle right near the Rift scar.",
      "Someone misremembers a battle detail that should be obvious.",
      "The wind stops for a single breath, then resumes."
    ],
    tags: ["act-1", "post-siege", "foreshadow"]
  }
];
