export const arcActors = [
  {
    id: "actor_mira_vale",
    name: "Mira Vale",
    role: "Last keeper of the Lantern House",
    group: "Tidewatch Council",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentLocation: "location_keeper_hall",
    currentState: "Trying to keep the old lamp lit without admitting that it has begun answering people by name.",
    sticky: true,
    presentation: {
      vibe: "Tired, practical, and terrified of being believed too late.",
      physicality: "Salt-stiff coat, burned fingertips, hair tied back with a red signal cord.",
      voice: "Low and steady until someone mentions the missing lamplighter.",
      sceneImpact: "Grounds the supernatural premise in human responsibility.",
      visualAnchor: "A brass lamp key worn around her neck like a holy symbol."
    },
    motivation: {
      wants: "Keep the light burning until the storm breaks.",
      fears: "That the lamp is not guiding ships anymore; it is calling something home.",
      leverage: "She knows every service stair, crawlspace, and emergency shutter in the house."
    },
    knowledge: {
      knows: [
        "The previous lamplighter vanished during the first night of unnatural fog.",
        "The lamp flares when someone speaks a true name near it.",
        "The Tidewatch Council ordered the house sealed, but someone has been entering after midnight."
      ],
      secrets: [
        "Mira heard the missing lamplighter speak from inside the lantern glass.",
        "She has been feeding the lamp oil mixed with her own blood to keep it awake."
      ]
    },
    quickLines: [
      "Do not shout in this house. The glass remembers voices.",
      "If the light turns blue, stop speaking names.",
      "I did not ask you here because I understand it. I asked because I do not."
    ],
    relationships: [
      "Orren thinks Mira is hiding evidence.",
      "Kettlewick follows Mira but refuses to enter the lantern room."
    ],
    relatedThreads: [
      "thread_missing_lamplighter",
      "thread_light_that_answers"
    ],
    relatedLocations: [
      "location_keeper_hall",
      "location_lantern_room"
    ],
    reference: "library/mira_vale.md",
    tags: ["active", "primary-actor", "social", "hidden-truth", "lantern-house"]
  },
  {
    id: "actor_captain_orren",
    name: "Captain Orren Pike",
    role: "Harbor captain and reluctant investigator",
    group: "Tidewatch Council",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentLocation: "location_lantern_house",
    currentState: "Holding the line between scared villagers outside and impossible evidence inside.",
    presentation: {
      vibe: "Blunt authority under strain.",
      physicality: "Broad shoulders, wet beard, signal whistle clenched between his teeth when thinking.",
      voice: "Command voice that drops into a whisper whenever the lamp flickers.",
      sceneImpact: "Pushes practical urgency and prevents the party from treating the house as a harmless curiosity.",
      visualAnchor: "A soaked harbor map with three impossible ship routes marked in charcoal."
    },
    motivation: {
      wants: "Find the missing lamplighter and stop more ships from vanishing.",
      fears: "That the council ignored the first signs because closing the harbor would ruin them.",
      leverage: "Can authorize access to sealed rooms and compel local witnesses to speak."
    },
    knowledge: {
      knows: [
        "Three ships followed the light and grounded on different sides of the same reef.",
        "The fog moves against the wind.",
        "A council courier came to the house the night before the lamplighter vanished."
      ],
      secrets: [
        "Orren falsified one tide report to avoid panic.",
        "He suspects the council knows more than it admits."
      ]
    },
    quickLines: [
      "I have seen storms lie. I have never seen light lie.",
      "You want the truth? Good. Try not to drown in it.",
      "No one leaves alone while the fog is thick. That is not advice."
    ],
    relationships: [
      "Protective of the villagers but furious at their rumors.",
      "Distrusts Mira because she stayed after the first disappearance."
    ],
    relatedThreads: ["thread_missing_lamplighter"],
    relatedLocations: ["location_lantern_house", "location_tide_cellar"],
    tags: ["active", "supporting-actor", "investigation", "faction-pressure", "harbor"]
  },
  {
    id: "actor_kettlewick",
    name: "Kettlewick",
    role: "Old house cat with impossible timing",
    group: "Lantern House",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    currentLocation: "location_keeper_hall",
    currentState: "Appearing wherever the next useful clue is, then pretending that was not intentional.",
    presentation: {
      vibe: "Suspicious, ancient, and deeply unimpressed.",
      physicality: "One-eyed black cat with salt-gray whiskers and paws that leave wet prints even on dry wood.",
      voice: "Does not speak. Communicates through staring, knocking things off shelves, and refusing thresholds.",
      sceneImpact: "A soft supernatural pointer that can guide stuck players without becoming exposition.",
      visualAnchor: "A tiny brass bell that only rings when no one is touching it."
    },
    motivation: {
      wants: "Keep the house from opening the wrong door.",
      fears: "The blue light in the lantern room.",
      leverage: "Can reveal hidden passages, fresh footprints, and places where the house is lying."
    },
    knowledge: {
      knows: [
        "The tide cellar door opens from both sides, but only when the lamp is lit.",
        "The missing lamplighter is not fully gone.",
        "The lantern room threshold is unsafe when the glass hums."
      ],
      secrets: []
    },
    quickLines: [
      "Kettlewick stares at the door, then at you, then very deliberately walks away from it.",
      "The cat knocks the old ledger open to a page that should have been blank.",
      "For the first time all night, the bell on Kettlewick's collar rings. He is sitting perfectly still."
    ],
    relationships: [
      "Trusts Mira more than anyone else.",
      "Hisses at Orren's harbor map."
    ],
    relatedThreads: ["thread_light_that_answers"],
    relatedLocations: ["location_keeper_hall", "location_tide_cellar"],
    tags: ["active", "supporting-actor", "clue", "omen", "lantern-house"]
  }
];
