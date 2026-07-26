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
    rumorAnswers: [
      {
        prompt: "Ask what they heard in the walls.",
        response: "Crying, maybe. Breathing, maybe. We were told pipes complain when they work hard.",
        reveals: [
          "Ashbound workers knew something in the system sounded alive.",
          "Official explanations normalized suffering as machinery."
        ],
        relatedThreads: [
          "thread_emberroot_fire_is_people",
          "thread_emberroot_city_breathing_wrong"
        ],
        tags: ["rumor-answer", "ashbound", "living-fire", "lived-truth"]
      },
      {
        prompt: "Ask how to move people out.",
        response: "Not through the lifts. Through the cuts, crawlways, old ash drains, and the routes they stopped putting on maps.",
        reveals: [
          "Ashbound survival routes can bypass official infrastructure.",
          "The people dismissed by the city hold the practical evacuation map."
        ],
        relatedThreads: [
          "thread_emberroot_controlled_withdrawal_paths",
          "thread_emberroot_forge_lord_legitimacy_collapse"
        ],
        tags: ["rumor-answer", "escape-routes", "ashbound", "evacuation"]
      }
    ],
    relatedActors: [
      "actor_bruni_coalhand",
      "actor_ashbound_defender"
    ],
    relatedFactions: [
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_control_vs_survival",
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
