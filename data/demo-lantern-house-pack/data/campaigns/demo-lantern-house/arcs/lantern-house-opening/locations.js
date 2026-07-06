export const arcLocations = [
  {
    id: "location_lantern_house",
    name: "The Lantern House",
    type: "coastal beacon / haunted civic site",
    region: "Stormbreak Coast",
    locationRole: "parent",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentState: "The old beacon burns through unnatural fog, but the light no longer points only to shore.",
    presentation: {
      establishingShot: "The Lantern House rises from the cliff like a black nail hammered into the storm. Its beacon turns behind rain-streaked glass, gold at first glance, then briefly blue when thunder rolls over the sea.",
      approachBeat: "Villagers cluster below the steps and fall quiet as you approach. No one is looking at the door. They are all watching the light.",
      vibe: "Salt, dread, civic duty, and the feeling of being expected by a place.",
      sensory: [
        "Rain hits the stone hard enough to mist back upward.",
        "The beacon hums through your teeth when it turns seaward.",
        "Every window reflects the lamp even when facing the wrong direction."
      ]
    },
    function: "Parent hub for the demo investigation. Selecting it should surface nearby people, pressure, and child locations.",
    pressure: "The light is still saving ships, but it may also be choosing who gets lost.",
    opportunities: [
      "Question villagers before they scatter.",
      "Enter through the keeper's hall.",
      "Inspect impossible tide marks on the cliff road."
    ],
    dangers: [
      "Fog thickens whenever the lamp turns blue.",
      "The house repeats true names spoken near the threshold.",
      "Council agents may arrive if the party delays."
    ],
    connectedLocations: ["location_keeper_hall"],
    adjacentLocations: ["location_keeper_hall"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    factionsPresent: ["faction_tidewatch_council"],
    actorsPresent: ["actor_captain_orren"],
    ambientCastPresent: ["ambient_stormbound_villagers"],
    availableScenes: ["scene_arrival_at_lantern_house"],
    availableFireableMoments: ["moment_window_knock"],
    availableTables: ["table_lantern_house_omens"],
    eventTable: "table_lantern_house_omens",
    reference: "library/lantern_house_overview.md",
    tags: ["active", "location-linked", "mystery", "storm", "parent"]
  },
  {
    id: "location_keeper_hall",
    name: "Keeper's Hall",
    type: "entry hall / service room / witness space",
    region: "Lantern House",
    locationRole: "child",
    parentLocation: "location_lantern_house",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentState: "Crowded with wet coats, old ledgers, extinguished handlamps, and people pretending they are not listening to the walls.",
    presentation: {
      establishingShot: "The hall smells of oil, wet wool, and old brass. Hooks line the wall in neat rows, but one raincoat hangs from the ceiling beam as if dropped from above.",
      approachBeat: "Mira stands beside the ledger table with both hands flat on the wood. Kettlewick sits on the stairs behind her, blocking the way up like a tiny judge.",
      vibe: "A practical room being slowly invaded by the impossible.",
      sensory: [
        "Water runs under the door even when no one opens it.",
        "The ledger pages lift and settle without wind.",
        "A bell rings once somewhere upstairs whenever someone lies."
      ]
    },
    function: "Social investigation space and safe-ish staging point before the tower climb.",
    pressure: "Every answer makes the lamp more interested.",
    opportunities: [
      "Question Mira and the villagers.",
      "Search the old ledger for missing names.",
      "Follow Kettlewick toward a hidden service panel."
    ],
    dangers: [
      "Speaking the missing lamplighter's full name causes the lamp to flare.",
      "The crowd may panic if the house speaks clearly.",
      "A council seal on the ledger has been recently broken."
    ],
    connectedLocations: ["location_lantern_house", "location_lantern_room", "location_tide_cellar"],
    adjacentLocations: ["location_lantern_room", "location_tide_cellar"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    factionsPresent: ["faction_tidewatch_council"],
    actorsPresent: ["actor_mira_vale", "actor_kettlewick"],
    ambientCastPresent: ["ambient_stormbound_villagers", "ambient_lantern_house_echoes"],
    availableScenes: ["scene_ledger_of_lost_names"],
    availableFireableMoments: ["moment_ledger_turns", "moment_kettlewick_blocks_stairs"],
    availableTables: ["table_lantern_house_omens"],
    reference: "library/keeper_hall.md",
    tags: ["active", "location-linked", "investigation", "social", "child"]
  },
  {
    id: "location_lantern_room",
    name: "Lantern Room",
    type: "tower top / supernatural decision point",
    region: "Lantern House",
    locationRole: "child",
    parentLocation: "location_lantern_house",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentState: "The great lens turns without visible mechanism, and something inside the glass is learning how to answer.",
    presentation: {
      establishingShot: "The lantern room is all glass, brass, and stormlight. The great lens turns in silence, throwing a slow blade of gold across the sea. Then the beam passes through you, and for one heartbeat the room is underwater-blue.",
      approachBeat: "The stairs end at a door swollen tight by damp. On the other side, someone gently trims a wick that should be too large for human hands.",
      vibe: "Sacred machine, haunted lighthouse, choice under pressure.",
      sensory: [
        "The glass is warm where it should be cold.",
        "The storm outside goes silent whenever the beam points inland.",
        "The lamp oil smells faintly of blood and lavender."
      ]
    },
    function: "Primary choice location. The players decide whether to dim, redirect, feed, or break the light.",
    pressure: "The lamp can guide the missing home, but it may open the way for everything it has ever named.",
    opportunities: [
      "Speak to the voice in the glass.",
      "Redirect the beam away from the reef.",
      "Use Mira's key to open the service housing."
    ],
    dangers: [
      "Breaking the lens may strand the missing forever.",
      "Feeding the lamp strengthens the thing answering inside it.",
      "Every true name spoken here becomes easier for the light to find again."
    ],
    connectedLocations: ["location_keeper_hall", "location_tide_cellar"],
    adjacentLocations: ["location_keeper_hall"],
    relatedThreads: ["thread_light_that_answers"],
    actorsPresent: ["actor_mira_vale"],
    ambientCastPresent: ["ambient_lantern_house_echoes"],
    availableScenes: ["scene_lantern_room_choice"],
    availableFireableMoments: ["moment_lamp_flare", "moment_voice_in_glass"],
    availableTables: ["table_lantern_house_omens"],
    reference: "library/lantern_room.md",
    tags: ["active", "location-linked", "hidden-truth", "choice", "child"]
  },
  {
    id: "location_tide_cellar",
    name: "Tide Cellar",
    type: "flooded lower room / secret route",
    region: "Lantern House",
    locationRole: "child",
    parentLocation: "location_lantern_house",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    currentState: "Half-flooded and knocking from below, though the cellar floor should sit above the cliff face.",
    presentation: {
      establishingShot: "The cellar steps vanish into black water after the sixth stair. Ropes, rusted hooks, and sealed oil casks drift gently in a current that has no place to go.",
      approachBeat: "Kettlewick refuses the stairs. His wet pawprints continue downward without him.",
      vibe: "Secret route, drowned memory, and the underside of civic denial.",
      sensory: [
        "Cold water laps in a rhythm unlike the surf outside.",
        "Something wooden bumps the underside of the floorboards from below.",
        "The lantern beam briefly shines upward through cracks in the stone."
      ]
    },
    function: "Optional discovery route to the missing lamplighter's last passage and a pressure valve for the mystery.",
    pressure: "The house has a lower door, and the tide has been using it.",
    opportunities: [
      "Find the council courier's dropped satchel.",
      "Discover a submerged service tunnel.",
      "Hear the missing lamplighter more clearly below the waterline."
    ],
    dangers: [
      "Water rises when the lamp turns inland.",
      "A spoken name can pull a reflection out of the water.",
      "The cellar door may open into the wrong night."
    ],
    connectedLocations: ["location_keeper_hall", "location_lantern_room"],
    adjacentLocations: ["location_keeper_hall"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    actorsPresent: ["actor_kettlewick"],
    ambientCastPresent: ["ambient_lantern_house_echoes"],
    availableScenes: ["scene_ledger_of_lost_names"],
    availableFireableMoments: ["moment_cellar_knock"],
    availableTables: ["table_lantern_house_omens"],
    reference: "library/tide_cellar.md",
    tags: ["available", "location-linked", "investigation", "hidden-truth", "child"]
  }
];
