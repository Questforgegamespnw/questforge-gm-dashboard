export const lowerFurnacesAmbientCast = [
  {
    id: "ambient_emberroot_lower_furnaces_ashbound_workers",
    title: "Lower Furnaces Ashbound Workers",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_lower_furnaces"
    ],
    summary: "Workers, families, maintenance crews, and exhausted protectors who have been living next to the cost long before heroes arrived.",
    names: [
      "Anja",
      "Brakk",
      "Cindra",
      "Halla",
      "Joren",
      "Nessa",
      "Osk",
      "Vigga"
    ],
    voices: [
      "Raw, direct, and done asking permission.",
      "Fear turned into practical motion.",
      "Protective before polite.",
      "Anger that gets sharper when someone says 'system'."
    ],
    hookLines: [
      "We told them it would break.",
      "No more holding lines with our bodies.",
      "You want to save the city? Start with the people under it.",
      "They called us capacity."
    ],
    interactionSeeds: [
      "A worker shoves a child into the party's arms and keeps moving.",
      "A defender mistakes the party for command and nearly attacks.",
      "Someone knows a maintenance crawlway around a blocked route.",
      "A group refuses evacuation unless trapped elders are moved first."
    ],
    relatedActors: [
      "actor_bruni_coalhand",
      "actor_ashbound_defender"
    ],
    relatedFactions: [
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_caste_existed_before_arrival",
      "thread_emberroot_no_clean_victories"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "lower-furnaces",
      "ashbound",
      "workers"
    ],
    gmNotes: "Use to keep the moral center embodied and immediate.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  }
];
