export const availabilityTemplate = {
  trackerId: "tracker_ragnarok_meter",
  minValue: 0,
  maxValue: 10
};

export const actorTemplate = {
  id: "actor_unique_id",
  name: "Actor Name",
  role: "Role, title, or function",
  group: "Faction, community, crew, house, company, etc.",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",
  currentLocation: "",
  currentState: "",
  sticky: false,

  presentation: {
    vibe: "",
    physicality: "",
    voice: "",
    sceneImpact: "",
    visualAnchor: ""
  },

  motivation: {
    wants: "",
    fears: "",
    leverage: ""
  },

  knowledge: {
    knows: [],
    secrets: []
  },

  quickLines: [],

  answerMoments: [
    {
      id: "answer_actor_topic",
      question: "",
      answer: "",
      tableLine: "",
      reveals: [],
      gatedBy: {
        skills: [],
        minTier: ""
      },
      relatedThreads: [],
      tags: []
    }
  ],

  relationships: [],
  relatedThreads: [],
  reference: "",
  tags: [],
  gmNotes: ""
};

export const ambientCastTemplate = {
  id: "ambient_unique_id",
  title: "Ambient Cast Group",
  type: "crowd / workers / witnesses / guards / refugees / locals",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "available",

  locationIds: [],

  summary: "",
  names: [],
  voices: [],
  hookLines: [],
  interactionSeeds: [],

  rumorAnswers: [
    {
      prompt: "",
      response: "",
      reveals: [],
      relatedThreads: [],
      tags: []
    }
  ],

  relatedActors: [],
  relatedThreads: [],
  relatedLocations: [],

  tags: [],
  gmNotes: ""
};

export const locationTemplate = {
  id: "location_unique_id",
  name: "Location Name",
  type: "settlement / district / room / wilderness / route / node",
  region: "",
  locationRole: "child",
  parentLocation: "",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",
  currentState: "",

  escalation: {
    stable: "",
    strain: "",
    fracture: "",
    break: ""
  },

  presentation: {
    establishingShot: "",
    approachBeat: "",
    vibe: "",
    sensory: []
  },

  function: "",
  pressure: "",
  opportunities: [],
  dangers: [],

  connectedLocations: [],
  relatedThreads: [],
  factionsPresent: [],
  actorsPresent: [],
  keyActors: [],

  availableScenes: [],

  skillGates: [
    {
      id: "gate_location_topic",
      skills: [],
      tier: "",
      visible: "",
      reveal: "",
      consequence: "",
      tags: []
    }
  ],

  eventTable: "",
  reference: "",
  tags: [],
  gmNotes: ""
};

export const sceneTemplate = {
  id: "scene_unique_id",
  title: "Scene / Beat Title",
  session: "",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "available",
  type: "",
  priority: "medium",

  // Optional. Omit if always safe to show.
  availability: {
    trackerId: "",
    minValue: 0,
    maxValue: 10
  },

  trigger: "",
  summary: "",
  playerFacing: "",
  gmTruth: "",

  involvedActors: [],
  involvedLocations: [],
  involvedFactions: [],

  clues: [],
  outcomes: [],

  outcomeShift: {
    question: "",
    levers: [],
    consequences: []
  },

  skillGates: [
    {
      id: "gate_scene_topic",
      skills: [],
      tier: "",
      visible: "",
      reveal: "",
      consequence: "",
      tags: []
    }
  ],

  forwardPath: {
    upNext: [],
    branches: [],
    scriptedMoments: []
  },

  pressure: "",
  runNote: "",
  tags: [],
  gmNotes: ""
};

export const fireableMomentTemplate = {
  id: "moment_unique_id",
  title: "Moment Title",
  type: "omen / clue / warning / decompression / navigation",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "available",

  locationIds: [],

  // Optional. Omit if always safe to show.
  availability: {
    trackerId: "",
    minValue: 0,
    maxValue: 10
  },

  trigger: "",
  compact: "",

  spotlight: {
    title: "",
    readAloud: [],
    gmPurpose: "",
    followUp: ""
  },
  skillGates: [
    {
      id: "gate_moment_topic",
      skills: [],
      tier: "",
      visible: "",
      reveal: "",
      consequence: "",
      tags: []
    }
  ],
  relatedActors: [],
  relatedThreads: [],
  reference: "",
  tags: [],
  gmNotes: ""
};

export const threadTemplate = {
  id: "thread_unique_id",
  title: "Thread / Omen / Pressure Title",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",
  type: "thread",

  // Optional. Omit if baseline-visible.
  availability: {
    trackerId: "",
    minValue: 0,
    maxValue: 10
  },

  summary: "",
  currentState: "",
  pressure: "",

  relatedActors: [],
  relatedLocations: [],
  relatedFactions: [],
  relatedScenes: [],

  signals: [],
  consequences: [],

  tags: [],
  gmNotes: ""
};

export const trackerTemplate = {
  id: "tracker_unique_id",
  title: "Tracker Name",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",
  type: "meter",

  value: 0,
  min: 0,
  max: 10,

  summary: "",
  tiers: [
    {
      range: "1-3",
      label: "Subtle wrongness",
      effect: ""
    },
    {
      range: "4-6",
      label: "Planar bleed",
      effect: ""
    },
    {
      range: "7-9",
      label: "Reality fracture",
      effect: ""
    },
    {
      range: "10",
      label: "Ragnarok",
      effect: ""
    }
  ],

  tags: [],
  gmNotes: ""
};

export const referenceTemplate = {
  id: "reference_unique_id",
  label: "Reference / Lore / Rule Name",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",

  category: "gm-reminder / rule / lore / procedure / table-note",
  summary: "",
  details: [],
  skillGates: [
    {
      id: "gate_reference_topic",
      skills: [],
      tier: "",
      visible: "",
      reveal: "",
      consequence: "",
      tags: []
    }
  ],
  reference: "",
  relatedActors: [],
  relatedLocations: [],
  relatedThreads: [],

  tags: [],
  gmNotes: ""
};

export const factionTemplate = {
  id: "faction_unique_id",
  name: "Faction Name",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",

  type: "faction / guild / house / corporation / community",
  summary: "",
  currentState: "",
  pressure: "",

  publicFace: "",
  privateTruth: "",

  goals: [],
  resources: [],
  tensions: [],

  relatedActors: [],
  relatedLocations: [],
  relatedThreads: [],

  tags: [],
  gmNotes: ""
};

export const tableTemplate = {
  id: "table_unique_id",
  title: "Table Name",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",

  category: "event / rumor / omen / complication / encounter",
  summary: "",

  entries: [
    {
      roll: "1",
      result: "",
      gmNote: ""
    }
  ],

  tags: [],
  gmNotes: ""
};