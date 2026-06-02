export const tables = [
  {
    id: "table_mead_hall_events",
    name: "Mead-Hall Events",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    die: "1d12",
    category: "event",
    relatedLocation: "location_valhalla_mead_hall",
    entries: [
      "A group of Einherjar insists the party reenact their last battle — badly and loudly.",
      "Someone challenges the strongest PC to an arm-wrestling match using a table that definitely breaks.",
      "A tankard refills endlessly, but the drink tastes slightly different each time.",
      "Sven loudly claims your party fights like poets, then refuses to elaborate.",
      "Two warriors argue over who died more heroically and demand the party judge.",
      "A bard attempts to compose a song about the party and gets every detail wrong.",
      "A Valkyrie lands mid-feast and steals someone’s drink without breaking eye contact.",
      "A goat wanders through the hall and no one questions it.",
      "A warrior swears they fought alongside one of the PCs before, even if impossible.",
      "Someone hands the party a weapon and says, 'You dropped this.' It is not theirs.",
      "The hall erupts into a synchronized drinking chant that the party is expected to join.",
      "For a brief moment, the hall goes completely silent — then resumes like nothing happened."
    ],
    tags: ["active", "valhalla", "mead-hall", "event-table"],
    gmNotes: "Use for decompression, social chaos, or early weirdness."
  },

  {
    id: "table_golden_fields_events",
    name: "Golden Fields Events",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    die: "1d8",
    category: "event",
    relatedLocation: "location_valhalla_golden_fields",
    entries: [
      "A farmer asks for help harvesting wheat that grows faster than it can be cut.",
      "The wind stops entirely for ten seconds, then resumes in a different direction.",
      "A scarecrow turns its head slightly when no one is looking.",
      "A worker hums a tune the bard recognizes but does not remember learning.",
      "A patch of wheat grows black for a moment, then returns to gold.",
      "A child who should not exist here runs through the fields laughing, then vanishes.",
      "A farmer casually mentions the harvest has been lighter this cycle.",
      "The ground pulses faintly underfoot like a heartbeat."
    ],
    tags: ["active", "valhalla", "golden-fields", "event-table"],
    gmNotes: "Use when the Fields need quiet unease or grounded warning signs."
  },

  {
    id: "table_forge_lanes_events",
    name: "Forge-Lanes Events",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    die: "1d8",
    category: "event",
    relatedLocation: "location_valhalla_forge_lanes",
    entries: [
      "A hammer strikes without anyone holding it.",
      "A dwarf artisan stares at the Corewright PC and says: 'Ah. You’re one of those.'",
      "A weapon screams faintly when quenched.",
      "A smith asks the party to test a weapon that is far too powerful for comfort.",
      "Sparks briefly form the shape of a dragon mid-air.",
      "A forge burns cold blue instead of orange.",
      "Someone offers to improve a player’s weapon, then refuses to explain how.",
      "A sealed door hums faintly when approached."
    ],
    tags: ["active", "valhalla", "forge-lanes", "event-table"],
    gmNotes: "Use for upgrade scenes, Corewright unease, and ancient war-tech pressure."
  },

  {
    id: "table_quiet_rows_events",
    name: "Quiet Rows Events",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    die: "1d6",
    category: "event",
    relatedLocation: "location_valhalla_quiet_rows",
    entries: [
      "A name disappears from a carving while the party watches.",
      "A voice whispers a PC’s name, but no one is there.",
      "A set of armor shifts slightly on its own.",
      "A candle refuses to go out no matter what.",
      "A newly carved name looks familiar.",
      "The room feels warmer than usual."
    ],
    tags: ["active", "valhalla", "quiet-rows", "event-table"],
    gmNotes: "Use sparingly. Quiet Rows events should slow the room down."
  }
];
