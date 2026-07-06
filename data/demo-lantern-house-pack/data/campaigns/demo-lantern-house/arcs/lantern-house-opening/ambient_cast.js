export const arcAmbientCast = [
  {
    id: "ambient_stormbound_villagers",
    title: "Stormbound Villagers",
    type: "witnesses / locals / anxious crowd",
    role: "Room-life outside the house and in the lower hall",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    currentState: "Gathered in wet cloaks, waiting for the light to either save them or condemn them.",
    locationIds: ["location_lantern_house", "location_keeper_hall"],
    summary: "Frightened locals, dockhands, fishers, and families of missing sailors who can provide rumor, pressure, and human stakes.",
    names: ["Toma Reed", "Elsbet Harrow", "Nell of the Net-Yard", "Old Vey"],
    voices: [
      "Short fearful sentences that trail off when thunder hits.",
      "Rumors delivered as certainty, then immediately contradicted by another villager.",
      "Polite to outsiders until the lamp flashes."
    ],
    hookLines: [
      "My brother said the light blinked his name. Lamps don't know names.",
      "The fog came in from the road first. Explain that to me.",
      "If Captain Orren says the harbor is closed, why are council boats still moving?"
    ],
    interactionSeeds: [
      "A villager tries to press a wet charm into a player's hand.",
      "Someone recognizes a party member from a dream they had during the fog.",
      "Two witnesses argue over whether the missing lamplighter walked into the sea or up the tower stairs."
    ],
    relatedActors: ["actor_captain_orren"],
    relatedThreads: ["thread_missing_lamplighter"],
    relatedLocations: ["location_lantern_house", "location_keeper_hall"],
    tags: ["ambient-cast", "location-linked", "social", "rumor-answer", "storm"]
  },
  {
    id: "ambient_lantern_house_echoes",
    title: "Lantern House Echoes",
    type: "haunting / environmental voices / memory residue",
    role: "Supernatural room texture inside the old house",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    currentState: "Repeating fragments of old warnings, ship calls, and conversations that have not happened yet.",
    locationIds: ["location_keeper_hall", "location_lantern_room", "location_tide_cellar"],
    availability: {
      trackerId: "tracker_fog_pressure",
      minValue: 2,
      maxValue: 6
    },
    summary: "The house is not sentient exactly, but the light has taught it to remember in the wrong direction.",
    names: ["The Voice Below", "The Stairwell Whisper", "The Glass Hum"],
    voices: [
      "Half-heard phrases in the rhythm of surf.",
      "A familiar voice repeating something the speaker has not said yet.",
      "Old nautical calls distorted into lullaby cadence."
    ],
    hookLines: [
      "Someone below you whispers: trim the wick, close the door, do not answer twice.",
      "From the lantern room, your own voice says one word: wait.",
      "The walls creak in the shape of a sentence. Mira goes pale before anyone can ask why."
    ],
    interactionSeeds: [
      "An echo answers a question with a clue, but uses the wrong character's voice.",
      "A room repeats the last lie spoken inside it.",
      "A stairwell briefly sounds like a crowded dock at noon."
    ],
    relatedActors: ["actor_mira_vale", "actor_kettlewick"],
    relatedThreads: ["thread_light_that_answers"],
    relatedLocations: ["location_lantern_room", "location_tide_cellar"],
    tags: ["ambient-cast", "location-linked", "hidden-truth", "omen", "tracker-gated"]
  }
];
