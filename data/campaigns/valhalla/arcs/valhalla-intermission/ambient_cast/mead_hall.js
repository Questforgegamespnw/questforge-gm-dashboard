export const meadHallAmbientCast = [
  {
    id: "ambient_valhalla_mead_hall_einherjar",
    title: "Mead-Hall Einherjar",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_mead_hall"],

    summary: "Battle-tested warriors drinking, boasting, grieving, arm wrestling, and trying not to think too hard about what is changing.",

    names: [
      "Hroald",
      "Kettil",
      "Yrsa",
      "Brand",
      "Solveig",
      "Torben",
      "Ragna",
      "Ulfar",
      "Inga",
      "Skardi"
    ],

    voices: [
      "Old-soldier dry humor and a grin that has survived too many deaths.",
      "Boisterous and competitive until the talk turns to failed returns.",
      "Too cheerful, clearly covering fear with volume and mead.",
      "Quietly respectful of anyone who returned wounded.",
      "Laughs first, asks the real question second."
    ],

    hookLines: [
      "Arm wrestle? Unless you need both arms for dying later.",
      "I know that look. First death? Third? They blur eventually.",
      "Sven waters the mead when he’s worried. Don’t tell him I noticed.",
      "Someone came back yesterday asking for a wife no one remembers.",
      "You lot smell like outside trouble.",
      "Drink while the cup remembers your hand. That matters more than people think."
    ],

    interactionSeeds: [
      "Challenges a player to arm wrestling, then respects them more if they lose with style.",
      "Asks whether death hurt this time, pretending it is casual table talk.",
      "Mistakes a player for someone who died long ago and then becomes embarrassed.",
      "Quietly warns that the Quiet Rows have had fewer songs lately.",
      "Offers a toast to someone who has not returned.",
      "Starts a loud song that dies out when a missing name comes up."
    ],

    relatedActors: ["actor_sven"],
    relatedThreads: ["thread_returned_incomplete"],
    relatedLocations: ["location_valhalla_quiet_rows"],
    tags: ["ambient", "einherjar", "mead-hall", "decompression", "room-life"],
    gmNotes: "Use this cast when the players look past Sven and ask who else is drinking, grieving, competing, or watching the returned." 
  }
];
