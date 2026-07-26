export const coreFurnaceAmbientCast = [
  {
    id: "ambient_emberroot_core_furnace_regulator_crews",
    title: "Lower Works Regulator Crews",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_core_furnace"
    ],
    summary: "Last-ditch regulator crews, panicked engineers, ash-suited workers, and giant pressure inside a breathing thermal life-support system everyone has misunderstood.",
    names: [
      "Akrin",
      "Beldi",
      "Dag",
      "Estri",
      "Grun",
      "Hetha",
      "Molli",
      "Rask"
    ],
    voices: [
      "Half-prayer, half-procedure.",
      "Technical speech breaking into awe.",
      "Whispered because the Core feels too large to interrupt.",
      "Terrified of being right."
    ],
    hookLines: [
      "The chamber is breathing.",
      "It is reacting to us.",
      "If that housing breaks wrong, the breath comes back upward.",
      "We are not inside the weapon. We are inside the lung."
    ],
    interactionSeeds: [
      "A regulator team needs protection for one more breath-cycle.",
      "A worker realizes the system is both saving the city and imprisoning something inside it.",
      "A giant strike team targets containment supports instead of the party.",
      "A console offers a stabilizing choice that costs evacuation time or delays release."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what the chamber is doing.",
        response: "It is taking pressure in, forcing heat through bound channels, and trying to exhale through vents that no longer answer in time.",
        reveals: [
          "The Lower Works are a breathing thermal ecosystem.",
          "The crisis is circulation and pressure coordination, not a simple reactor failure."
        ],
        relatedThreads: [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_city_breath_life_support"
        ],
        tags: ["rumor-answer", "lower-works", "city-breath", "technical-truth"]
      },
      {
        prompt: "Ask what is inside the conduits.",
        response: "The crews do not all agree. Some say bound thermal sparks. Some say living fire. One ash-suited worker says it flinched when they spoke.",
        reveals: [
          "The ambient truth is uncertain but points toward personhood.",
          "Not every worker knows the emberling truth, but many have seen evidence that official language is false."
        ],
        relatedThreads: [
          "thread_emberroot_fire_is_people",
          "thread_emberroot_stolen_emberlings"
        ],
        tags: ["rumor-answer", "emberlings", "living-fire", "partial-reveal"]
      },
      {
        prompt: "Ask whether stabilization is still possible.",
        response: "Possible, yes. Clean, no. Every cycle we buy must go somewhere: into evacuation, venting, or another lie.",
        reveals: [
          "Stabilization is valuable only if it enables transition.",
          "Preserving the system unchanged is different from buying time to withdraw safely."
        ],
        relatedThreads: [
          "thread_emberroot_safe_deconstruction",
          "thread_emberroot_consent_transition"
        ],
        tags: ["rumor-answer", "stabilization", "controlled-withdrawal"]
      }
    ],
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    relatedThreads: [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_fire_is_people"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "lower-works",
      "city-breath", 
      "forge-below",
      "containment"
    ],
    gmNotes: "Use when the arc truth needs to become audible in the room.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "forge_below_choice"
  }
];
