export const valkyrieAerieAmbientCast = [
  {
    id: "ambient_valhalla_valkyrie_aerie_wings",
    title: "Valkyrie Aerie Wings",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_valkyrie_aerie"],

    summary: "Messengers, armorers, scouts, wounded retrievers, and mission aides moving through command air that is becoming too tense to call orderly.",

    names: [
      "Alva",
      "Brynja",
      "Dagrun",
      "Eydis",
      "Hervor",
      "Liv",
      "Sigrun",
      "Vanja"
    ],

    voices: [
      "Clipped mission shorthand from someone already thinking three steps ahead.",
      "Bright confidence with fatigue showing around the edges.",
      "Professional calm that breaks for one sentence, then seals again.",
      "Competitive wing-jokes masking command anxiety."
    ],

    hookLines: [
      "Report goes to Svinhild. Complaints go to the wind.",
      "Ryndis marked another route unreachable this morning.",
      "Thora left before clearance. Again.",
      "Eldri has been quiet since the last retrieval.",
      "Kara was here. Then she was not. That is usually bad."
    ],

    interactionSeeds: [
      "Asks the party for a clean mission summary before Svinhild arrives.",
      "Shares a rumor that a retrieval team came back with one extra shadow.",
      "Offers tactical advice, then admits the route data may be stale.",
      "Tries to reassure the party with doctrine that sounds less certain than intended.",
      "Points toward whichever Valkyrie best matches the players' question."
    ],

    relatedActors: [
      "actor_svinhild",
      "actor_ryndis_ironwing",
      "actor_eldri_softsky",
      "actor_thora_stormcall",
      "actor_kara_veilfeather",
      "actor_sylva_emberwing"
    ],
    relatedThreads: ["thread_dark_valkyrie_foreshadow"],
    relatedLocations: ["location_valhalla_valkyrie_aerie"],
    tags: ["ambient", "valkyries", "aerie", "mission-pressure", "command", "retrieval"],
    gmNotes: "Use this cast to make the Aerie feel active even when the named Valkyries are not currently in focus."
  }
];
