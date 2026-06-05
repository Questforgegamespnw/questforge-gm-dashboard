export const coreFurnaceAmbientCast = [
  {
    id: "ambient_emberroot_core_furnace_regulator_crews",
    title: "Core Furnace Regulator Crews",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_core_furnace"
    ],
    summary: "Last-ditch regulator crews, panicked engineers, ash-suited workers, and enemy pressure around a containment engine everyone has misunderstood.",
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
      "It is holding something back.",
      "The Core is reacting to us.",
      "If the giants break that chain, Stability drops.",
      "We are not inside the weapon. We are inside the lock."
    ],
    interactionSeeds: [
      "A regulator team needs protection for one more cycle.",
      "A worker recognizes that the Core is saving them and starts crying.",
      "A giant strike team targets the supports instead of the party.",
      "A console offers a stabilizing choice that costs evacuation time."
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
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_giants_want_release",
      "thread_emberroot_core_furnace_truth"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "core-furnace",
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
