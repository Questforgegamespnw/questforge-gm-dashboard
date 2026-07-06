export const arcFireableMoments = [
  {
    id: "moment_window_knock",
    title: "Knock at the Wrong Window",
    type: "omen",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_lantern_house", "location_keeper_hall"],
    trigger: "Fire when the party pauses outside or during early questioning inside the hall.",
    compact: "A window knocks from the outside, three stories up.",
    spotlight: {
      title: "Knock at the Wrong Window",
      readAloud: [
        {
          type: "narration",
          text: "Three sharp knocks sound above you. Not from the door. From a dark window near the lantern room, far above the steps."
        },
        {
          type: "narration",
          text: "Everyone outside looks up. Mira closes her eyes like she was waiting for exactly this."
        }
      ],
      gmPurpose: "Show that the house is active before anyone enters the tower.",
      followUp: "Ask who looks up, who watches Mira, and who watches the crowd."
    },
    relatedActors: ["actor_mira_vale"],
    relatedThreads: ["thread_light_that_answers"],
    relatedLocations: ["location_lantern_house", "location_lantern_room"],
    tags: ["available", "omen", "location-linked", "foreshadow"]
  },
  {
    id: "moment_lamp_flare",
    title: "The Lamp Flares Blue",
    type: "warning",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_lantern_room", "location_keeper_hall"],
    availability: {
      trackerId: "tracker_fog_pressure",
      minValue: 2,
      maxValue: 6
    },
    trigger: "Fire when someone says a true name, lies near the ledger, or touches Mira's key.",
    compact: "The beacon turns blue and reacts to a name.",
    spotlight: {
      title: "The Lamp Flares Blue",
      readAloud: [
        {
          type: "narration",
          text: "The lantern flame snaps from gold to blue. Every wet footprint in the room darkens at once."
        },
        {
          type: "speech",
          speaker: "The Light",
          text: "Again."
        }
      ],
      gmPurpose: "Teach the name/voice rule through a clear supernatural response.",
      followUp: "Consider increasing Fog Pressure if the party keeps feeding it names."
    },
    relatedActors: ["actor_mira_vale"],
    relatedThreads: ["thread_light_that_answers"],
    relatedLocations: ["location_lantern_room"],
    tags: ["available", "warning", "tracker-gated", "hidden-truth"]
  },
  {
    id: "moment_ledger_turns",
    title: "The Ledger Turns Itself",
    type: "clue",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_keeper_hall"],
    trigger: "Fire when the players search the hall, ask about records, or stall on what to inspect next.",
    compact: "The ledger opens to tomorrow's tide.",
    spotlight: {
      title: "The Ledger Turns Itself",
      readAloud: [
        {
          type: "narration",
          text: "The ledger pages lift in a wind no one feels. They stop on a date that has not happened yet."
        },
        {
          type: "narration",
          text: "One line is already written. The ink is wet."
        }
      ],
      gmPurpose: "Point players toward the name-coordinate mystery.",
      followUp: "Reveal one missing name, one future date, or one council seal."
    },
    relatedActors: ["actor_kettlewick", "actor_mira_vale"],
    relatedThreads: ["thread_missing_lamplighter"],
    relatedLocations: ["location_keeper_hall"],
    tags: ["available", "clue", "investigation", "location-linked"]
  },
  {
    id: "moment_kettlewick_blocks_stairs",
    title: "Kettlewick Blocks the Stairs",
    type: "navigation",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_keeper_hall"],
    trigger: "Fire when the party tries to go upstairs too quickly or when you want to signal that the cellar matters.",
    compact: "The cat refuses the tower and points toward the cellar.",
    spotlight: {
      title: "Kettlewick Blocks the Stairs",
      readAloud: [
        {
          type: "narration",
          text: "Kettlewick plants himself on the first stair and hisses upward. Then he turns, pads to the cellar door, and scratches once."
        }
      ],
      gmPurpose: "Give a nonverbal clue that there is another route or missing context below.",
      followUp: "Let players choose whether to respect the warning or push toward the lantern room anyway."
    },
    relatedActors: ["actor_kettlewick"],
    relatedThreads: ["thread_missing_lamplighter"],
    relatedLocations: ["location_keeper_hall", "location_tide_cellar"],
    tags: ["available", "navigation", "clue", "location-linked"]
  },
  {
    id: "moment_voice_in_glass",
    title: "Voice in the Glass",
    type: "reveal",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_lantern_room"],
    availability: {
      trackerId: "tracker_fog_pressure",
      minValue: 3,
      maxValue: 6
    },
    trigger: "Fire when someone touches the lens, says the lamplighter's name, or asks what the lamp wants.",
    compact: "The missing lamplighter warns them from inside the lens.",
    spotlight: {
      title: "Voice in the Glass",
      readAloud: [
        {
          type: "speech",
          speaker: "Missing Lamplighter",
          text: "I made it bright enough to find the lost. Then it started finding the living."
        }
      ],
      gmPurpose: "Reveal that the missing lamplighter is partly bound into the lamp without fully solving the choice.",
      followUp: "Ask what the party does with the lens now that it can answer."
    },
    relatedActors: ["actor_mira_vale"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    relatedLocations: ["location_lantern_room"],
    tags: ["available", "reveal", "tracker-gated", "hidden-truth"]
  },
  {
    id: "moment_cellar_knock",
    title: "Knock Beneath the Water",
    type: "clue",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    locationIds: ["location_tide_cellar"],
    trigger: "Fire when the party enters or investigates the flooded cellar.",
    compact: "Something knocks from under the flooded floor.",
    spotlight: {
      title: "Knock Beneath the Water",
      readAloud: [
        {
          type: "narration",
          text: "The black water stills. Then something knocks from beneath the submerged floorboards: once, twice, three times. A signal. Or an answer."
        }
      ],
      gmPurpose: "Confirm that the cellar is connected to the missing lamplighter and the wrong-side tide.",
      followUp: "Offer a risky way to open the lower passage or recover the council courier's satchel."
    },
    relatedActors: ["actor_kettlewick"],
    relatedThreads: ["thread_missing_lamplighter"],
    relatedLocations: ["location_tide_cellar"],
    tags: ["available", "clue", "investigation", "location-linked"]
  }
];
