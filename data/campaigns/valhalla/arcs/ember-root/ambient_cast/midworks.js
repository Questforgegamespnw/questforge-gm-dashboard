export const midworksAmbientCast = [
  {
    id: "ambient_emberroot_midworks_ironhand_crews",
    title: "Midworks Ironhand Crews",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_midworks"
    ],
    summary: "Engineers, rune readers, panel teams, and arguing specialists surrounded by diagnostics that disagree faster than they can explain.",
    names: [
      "Arvik",
      "Bessa",
      "Durn",
      "Elska",
      "Fjori",
      "Hann",
      "Marn",
      "Tovi"
    ],
    voices: [
      "Fast technical speech under panic.",
      "Corrects everyone, including other experts.",
      "Focused until interrupted by another impossible reading.",
      "Angry at bad assumptions more than danger."
    ],
    hookLines: [
      "That is not the failure point.",
      "Stop calling it a breach. It is a response.",
      "If you pull that lever, you move the problem downward.",
      "The numbers are honest. That is why everyone hates them."
    ],
    interactionSeeds: [
      "Two engineers demand opposite fixes with equal certainty.",
      "A panel flashes a warning that confirms Kaldra's fear.",
      "An Ironhand begs the party to protect a stabilizer node.",
      "Someone asks whether saving time is worth worsening Stability."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what the Midworks readings show.",
        response: "Intake is not the problem by itself. The breath is not leaving cleanly. Pressure is stacking where it should be cycling.",
        reveals: [
          "The system is breathing wrong.",
          "The problem is circulation, venting, and pressure displacement rather than a single breach."
        ],
        relatedThreads: [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_safe_deconstruction"
        ],
        tags: ["rumor-answer", "midworks", "ironhand", "city-breath"]
      },
      {
        prompt: "Ask what happens if another shutoff is triggered.",
        response: "One chamber lives. Another takes the breath. That is not repair. That is choosing where the rupture waits.",
        reveals: [
          "Emergency shutoffs are not true solutions.",
          "Local safety can worsen deeper Lower Works pressure."
        ],
        relatedThreads: [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_city_breathing_wrong"
        ],
        tags: ["rumor-answer", "shutoffs", "pressure", "lower-works"]
      }
    ],
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedThreads: [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_caste_pressure"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "midworks",
      "ironhand",
      "engineers"
    ],
    gmNotes: "Use when the room needs useful information wrapped in disagreement.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      }
    ],
    visibilityGate: "calm_center_investigation"
  }
];
