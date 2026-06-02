export const factions = [
  {
    id: "faction_einherjar",
    name: "Einherjar",
    type: "warrior host",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    publicFace: "Glorious warriors returned to feast, fight, and prepare.",
    trueNature: "A community sustained by a return cycle that may be weakening.",
    vibe: "Boisterous courage over deep uncertainty.",

    wants: "Keep believing the cycle still works.",
    fears: "That death is becoming permanent or incomplete.",
    methods: "Feasting, boasting, training, and communal ritual.",

    resources: ["Warriors", "Legends", "Memory", "Morale"],
    relationships: [],

    notice: {
      score: 0,
      label: "familiar",
      note: "The party is known but still being measured."
    },

    tags: ["active", "valhalla", "warriors", "social"],
    gmNotes: ""
  },

  {
    id: "faction_valkyries",
    name: "Valkyries",
    type: "retrieval order / mission authority",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    publicFace: "Disciplined choosers and carriers of the worthy fallen.",
    trueNature: "Overworked retrieval agents seeing failures they cannot fully explain.",
    vibe: "Awe-inspiring duty under quiet fracture.",

    wants: "Keep retrievals functioning and missions moving.",
    fears: "That they will have to choose who not to save.",
    methods: "Briefings, sorties, extraction, disciplined command.",

    resources: ["Winged mounts", "Mission authority", "Retrieval knowledge"],
    relationships: [],

    notice: {
      score: 0,
      label: "watching",
      note: "Individual Valkyries may diverge sharply."
    },

    tags: ["active", "valhalla", "mission", "retrieval"],
    gmNotes: ""
  }
];
