export const chainwaysAmbientCast = [
  {
    id: "ambient_emberroot_chainways_cross_traffic",
    title: "Chainways Cross-Traffic",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_chainways"
    ],
    summary: "Mixed evacuees, guards, rope crews, wounded engineers, and panicked traffic suspended over drops where every choice becomes movement.",
    names: [
      "Bann",
      "Edda",
      "Garrik",
      "Inni",
      "Kol",
      "Magna",
      "Sindri",
      "Thane"
    ],
    voices: [
      "Shouting over machinery and distance.",
      "Urgent directional speech.",
      "Trying to turn fear into instructions.",
      "Every sentence competes with the sound of failing metal."
    ],
    hookLines: [
      "This path will not hold!",
      "One at a time means some do not make it.",
      "Cut the chain or clear the bridge—choose!",
      "Do not look down unless you can fly."
    ],
    interactionSeeds: [
      "A bridge starts failing while both ends are crowded.",
      "A rope crew asks whether to save cargo, children, or a wounded engineer first.",
      "A Forge Guard tries to hold traffic for command priority.",
      "A Valkyrie needs landing space the crowd cannot give."
    ],
    relatedActors: [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "chainways",
      "evacuation",
      "movement"
    ],
    gmNotes: "Use when the room needs immediate physical stakes and hard routing decisions.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  }
];
