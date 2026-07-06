export const arcReferences = [
  {
    id: "reference_demo_how_to_run",
    label: "How to Run This Demo",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    category: "procedure",
    summary: "A compact GM reminder for demonstrating the moving-camera cockpit model with The Lantern House.",
    quickUse: "Select a location, watch nearby actors/ambient cast update, fire a moment, then pin a clue or scene to show the cockpit loop.",
    details: [
      "Start at The Lantern House parent location.",
      "Select Keeper's Hall to show local actors, ambient cast, scenes, and moments.",
      "Use the ledger or Kettlewick moments when players need a clue.",
      "Use Fog Pressure to gate stronger supernatural content.",
      "End with the Lantern Room Choice rather than a single correct solution."
    ],
    procedure: [
      {
        step: 1,
        instruction: "Select `location_lantern_house` and introduce the storm, crowd, and beacon."
      },
      {
        step: 2,
        instruction: "Select local actors or ambient cast when players question people."
      },
      {
        step: 3,
        instruction: "Fire a moment from Can Fire Here when attention lags or the house needs to push back."
      },
      {
        step: 4,
        instruction: "Move to the Lantern Room when the party has enough clues to make an informed choice."
      }
    ],
    reference: "library/demo_how_to_run.md",
    relatedActors: ["actor_mira_vale", "actor_captain_orren", "actor_kettlewick"],
    relatedLocations: ["location_lantern_house", "location_keeper_hall", "location_lantern_room"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    relatedTrackers: ["tracker_fog_pressure"],
    relatedTables: ["table_lantern_house_omens"],
    tags: ["active", "procedure", "gm-reminder", "doctrine", "public-safe-demo"]
  },
  {
    id: "reference_lantern_house_secret",
    label: "Lantern House Secret",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    category: "lore",
    summary: "The beacon was changed from a guide into a name-seeking light after the missing lamplighter tried to call lost sailors home through the fog.",
    quickUse: "The light can save the missing, but it locates people by names, lies, blood, and memory. It is helpful, hungry, and not fully in control of itself.",
    details: [
      "The missing lamplighter is not dead in a normal sense; part of him is bound into the lamp's answering behavior.",
      "The ledger is a coordinate index. Names written or spoken near the lamp become easier for the light to find.",
      "The Tidewatch Council delayed the truth because closing the harbor would expose negligence and cause economic panic.",
      "The party's final choice should trade between safety, rescue, truth, and containment."
    ],
    reference: "library/lantern_house_secret.md",
    relatedActors: ["actor_mira_vale", "actor_captain_orren", "actor_kettlewick"],
    relatedLocations: ["location_lantern_room", "location_tide_cellar"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    relatedTrackers: ["tracker_fog_pressure"],
    tags: ["active", "lore", "hidden-truth", "gm-reminder", "public-safe-demo"]
  }
];
