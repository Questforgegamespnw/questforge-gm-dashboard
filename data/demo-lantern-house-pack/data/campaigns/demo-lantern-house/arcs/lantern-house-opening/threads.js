export const arcThreads = [
  {
    id: "thread_missing_lamplighter",
    title: "The Missing Lamplighter",
    type: "investigation-thread",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    summary: "The last lamplighter vanished during the first night of impossible fog, leaving contradictory tracks, altered records, and a voice in the glass.",
    currentState: "Everyone agrees he is gone. No one agrees which direction he went.",
    pressure: "The longer the party waits, the more the house repeats his habits without him.",
    nextPressure: "His name may appear in the ledger beside a future date.",
    relatedActors: ["actor_mira_vale", "actor_captain_orren"],
    relatedLocations: ["location_keeper_hall", "location_tide_cellar", "location_lantern_room"],
    relatedFactions: ["faction_tidewatch_council"],
    relatedScenes: ["scene_arrival_at_lantern_house", "scene_ledger_of_lost_names"],
    relatedTrackers: ["tracker_fog_pressure"],
    signals: [
      "Wet footprints climb stairs that no one used.",
      "The ledger opens to blank pages that become less blank under lamplight.",
      "Villagers hear the missing lamplighter calling ships by name."
    ],
    consequences: [
      "If ignored, the missing lamplighter's voice becomes the lamp's default lure.",
      "If understood, the party can bargain with or release what remains of him.",
      "If exposed publicly, the Tidewatch Council loses control of the room."
    ],
    tags: ["active", "investigation", "hidden-truth", "clue", "missing-person"]
  },
  {
    id: "thread_light_that_answers",
    title: "The Light That Answers",
    type: "supernatural-pressure-thread",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    availability: {
      trackerId: "tracker_fog_pressure",
      minValue: 1,
      maxValue: 6
    },
    summary: "The beacon is no longer passive. It reacts to names, lies, blood, and directions, suggesting the light has become a door or mouth.",
    currentState: "The lamp still guides, but now it also chooses, repeats, and calls.",
    pressure: "Every attempt to use the light risks teaching it more about the living.",
    nextPressure: "At higher fog pressure, the lamp may answer a question with a voice the party trusts.",
    relatedActors: ["actor_mira_vale", "actor_kettlewick"],
    relatedLocations: ["location_lantern_room", "location_tide_cellar"],
    relatedScenes: ["scene_lantern_room_choice"],
    relatedTrackers: ["tracker_fog_pressure"],
    signals: [
      "The lamp flares blue when someone speaks a true name.",
      "Lies spoken in the house echo back in a different voice.",
      "The beam points inland when it should sweep the harbor."
    ],
    consequences: [
      "Feeding the lamp stabilizes the beacon but deepens its awareness.",
      "Dimming the lamp weakens the fog but may strand the missing.",
      "Redirecting the beam can reveal what is approaching from the wrong side of the sea."
    ],
    tags: ["active", "tracker-gated", "omen", "hidden-truth", "supernatural"]
  }
];
