export const forgeLanesAmbientCast = [
  {
    id: "ambient_valhalla_forge_lanes_smiths",
    title: "Forge-Lanes Smiths",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_forge_lanes"],

    summary: "Apprentices, journeymen, coal-haulers, rune-cutters, and old smiths who can tell dangerous work by the sound it makes cooling.",

    names: [
      "Dagny",
      "Ivar",
      "Runa",
      "Sindri",
      "Tove",
      "Viggo",
      "Hilda",
      "Koll"
    ],

    voices: [
      "Blunt craft talk, more comfortable judging metal than judging motives.",
      "Dry humor under hammer noise.",
      "Suspicious of old designs and anyone excited by them.",
      "Respectful toward competence, impatient with spectacle."
    ],

    hookLines: [
      "That edge has history. Bad history.",
      "If Brokk stops hammering to look at something, step back.",
      "Strong is easy. Safe is the part people skip.",
      "We sealed that pattern for a reason.",
      "Hear that? Metal remembers who hurt it."
    ],

    interactionSeeds: [
      "Offers to identify a weapon mark or old craft signature.",
      "Warns a player not to touch a cooling rune-plate.",
      "Challenges whether the party wants an upgrade or absolution.",
      "Mentions sealed Corewright work in a lowered voice.",
      "Lets a player help pump bellows, then asks what they are really trying to build."
    ],

    relatedActors: ["actor_brokk_ironvein"],
    relatedThreads: ["thread_corewright_old_war_tech"],
    relatedLocations: ["location_valhalla_forge_lanes"],
    tags: ["ambient", "smiths", "forge-lanes", "craft", "corewright", "old-war-tech"],
    gmNotes: "Use this cast when the room needs heat, work rhythm, and moral weight around making dangerous things useful."
  }
];
