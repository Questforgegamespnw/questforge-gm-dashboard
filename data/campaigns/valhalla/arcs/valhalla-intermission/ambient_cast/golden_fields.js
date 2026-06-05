export const goldenFieldsAmbientCast = [
  {
    id: "ambient_valhalla_golden_fields_fieldhands",
    title: "Golden Fields Fieldhands",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    locationIds: ["location_valhalla_golden_fields"],

    summary: "Harvest workers, fieldkeepers, and quiet dead who know the grain is changing before anyone important has said it aloud.",

    names: [
      "Asta",
      "Bodil",
      "Eirik",
      "Frida",
      "Halvar",
      "Linnea",
      "Maren",
      "Oddrun"
    ],

    voices: [
      "Soft-spoken and practical, with dirt under the nails and worry under the words.",
      "Speaks in crop signs, weather shifts, and old field sayings.",
      "Nervous laughter whenever anyone mentions harvest totals.",
      "Patient, grounded, and too tired to pretend nothing is wrong."
    ],

    hookLines: [
      "The wheat bent wrong this morning.",
      "Gold should not flake like ash.",
      "Eira says listen before you cut. So we listened. We did not like what we heard.",
      "The crows will not land here anymore.",
      "A field does not lie. People do."
    ],

    interactionSeeds: [
      "Hands a player a brittle stalk that crumbles too easily.",
      "Asks if the party saw black roots anywhere beyond the Fields.",
      "Quietly points out a patch where the grain grows in a spiral pattern.",
      "Worries that telling the Valkyries will bring command instead of help.",
      "Invites the party to stand still and listen to the crop."
    ],

    relatedActors: ["actor_eira_goldwind"],
    relatedThreads: ["thread_yggdrasil_root_sickness"],
    relatedLocations: ["location_valhalla_golden_fields"],
    tags: ["ambient", "fieldhands", "golden-fields", "harvest", "yggdrasil", "quiet-dread"],
    gmNotes: "Use this cast to make system failure feel agricultural, local, and bodily before it becomes cosmic."
  }
];
