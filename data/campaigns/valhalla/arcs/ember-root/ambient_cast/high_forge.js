export const highForgeAmbientCast = [
  {
    id: "ambient_emberroot_high_forge_command_staff",
    title: "High Forge Command Staff",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_high_forge"
    ],
    summary: "Forge Lord aides, command guards, and administrative voices trying to turn a disaster into an orderly command problem.",
    names: [
      "Agnar",
      "Belda",
      "Dori",
      "Frann",
      "Grimholt",
      "Kelda",
      "Orri",
      "Vestra"
    ],
    voices: [
      "Controlled and clipped.",
      "Refuses to call panic panic.",
      "Speaks in authorizations, thresholds, and acceptable loss.",
      "Polite in the way locked doors are polite."
    ],
    hookLines: [
      "This sector remains under command authority.",
      "Do not mistake noise for collapse.",
      "The lower tiers always exaggerate heat.",
      "If evacuation begins without order, more die."
    ],
    interactionSeeds: [
      "Blocks an evacuation route until given a proper order.",
      "Asks the party to confirm Durgrim's authority.",
      "Tries to reclassify casualties as production disruption.",
      "Quietly admits the reports from below are worse than announced."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what command knows about the lower reports.",
        response: "The lower reports are unverified, emotionally contaminated, and not useful for command sequencing.",
        reveals: [
          "Forge Lord staff are dismissing lived lower-tier reports as unreliable.",
          "The old order filters truth by caste and authority."
        ],
        relatedThreads: [
          "thread_emberroot_forge_lord_legitimacy_collapse",
          "thread_emberroot_caste_layers_and_survival_authority"
        ],
        tags: ["rumor-answer", "forge-lords", "caste", "command"]
      },
      {
        prompt: "Ask who has authority to order evacuation.",
        response: "Authority remains with the Forge Lords until the city is formally declared unrecoverable. Which it has not been.",
        reveals: [
          "Command legitimacy depends on refusing to name collapse.",
          "Official evacuation may lag behind practical survival needs."
        ],
        relatedThreads: [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_forge_lord_legitimacy_collapse"
        ],
        tags: ["rumor-answer", "authority", "evacuation", "forge-lords"]
      }
    ],
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_forge_guard"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords"
    ],
    relatedThreads: [
      "thread_emberroot_caste_pressure"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "high-forge",
      "forge-lords",
      "command"
    ],
    gmNotes: "Use to make control feel organized, believable, and morally expensive.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  }
];
