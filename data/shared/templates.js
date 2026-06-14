export const availabilityTemplate = {
  trackerId: "tracker_unique_id",
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

  // narrative = normally resolved through fiction
  // mixed = may enter formal mechanics but remains scene-facing
  // mechanical = expected to require formal subsystem resolution
  resolutionMode: "narrative / mixed / mechanical",

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

  postChoiceEvolution: [
    {
      choiceId: "choice_unique_id",
      condition: "",
      currentState: "",
      attitude: "",
      locationShift: "",
      dialogue: [],
      relatedThreads: [],
      tags: []
    }
  ],

  relationships: [],
  relatedThreads: [],
  relatedLocations: [],
  relatedScenes: [],

 
  // Optional conflict-facing profile.
  //
  // Use this only when the actor may enter mechanically resolved conflict,
  // cannot be removed through narrative handling alone, or needs enough
  // structure to remain consistent during a set-piece.
  //
  // This is not a universal stat block. Keep only the fields required by the
  // campaign's ruleset. D&D-style fields are included as the current default
  // example because Valhalla provides the most developed mechanical content.
  //
  // Other modes may replace quickStats with their own mechanical vocabulary
  // while preserving the surrounding generic structure:
  // role, handling, traits, actions, reactions, rules, and tableUse.
  

  battlefieldProfile: {
    role: "",
    handling: "",

    quickStats: {
      // D&D-style default example.
      ac: null,
      hp: null,
      speed: "",
      attack: "",
      damage: "",
      saveDc: null,
      defenses: [],
      resistances: [],
      immunities: [],

      // Mothership-style alternative.
      // combat: null,
      // instinct: null,
      // wounds: null,
      // armor: null,
      // damage: "",
      // saves: {
      //   sanity: null,
      //   fear: null,
      //   body: null
      // }

      // Questforge / narrative-mechanical alternative.
      // threat: null,
      // resilience: null,
      // harm: null,
      // pressure: null,
      // special: []
    },

    traits: [
      {
        name: "",
        effect: ""
      }
    ],

    actions: [
      {
        name: "",
        frequency: "",
        attack: "",
        damage: "",
        effect: ""
      }
    ],

    reactions: [
      {
        name: "",
        trigger: "",
        effect: "",
        tableUse: ""
      }
    ],

    signatureAction: {
      name: "",
      frequency: "",
      effect: ""
    },

    phaseChanges: [
      {
        trigger: "",
        effect: "",
        tableUse: ""
      }
    ],

    rules: [],
    barks: [],
    visualAnchor: "",
    tableUse: ""
  },
   
   reference: "",
  tags: [],
  gmNotes: ""
};

export const ambientCastTemplate = {
  id: "ambient_unique_id",
  title: "Ambient Cast Group",
  type: "crowd / workers / witnesses / guards / refugees / locals",
  role: "",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "available",
  currentState: "",

  locationIds: [],

  // Optional. Omit if baseline-visible.
  availability: {
    trackerId: "",
    minValue: 0,
    maxValue: 10
  },

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

  reference: "",
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
  adjacentLocations: [],
  relatedThreads: [],
  factionsPresent: [],
  actorsPresent: [],
  keyActors: [],
  ambientCastPresent: [],

  availableScenes: [],
  availableFireableMoments: [],
  availableTables: [],

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

  
  // Optional mechanically active location profile.
  //
  // Use this when the location itself meaningfully shapes conflict, pursuit,
  // survival, evacuation, system repair, or another structured challenge.
  //
  // The surrounding fields are system-agnostic. Keep only the mode-specific
  // notes that help the GM run this place at the table.
  encounterProfile: {
    scale: "",
    objective: "",
    failureState: "",

    terrain: [],
    hazards: [],

    zones: [
      {
        id: "zone_unique_id",
        label: "",
        function: "",
        pressure: "",
        specialRule: ""
      }
    ],

    activeElements: [
      {
        id: "element_unique_id",
        label: "",
        state: "",
        effect: "",
        interaction: ""
      }
    ],

    reinforcements: [
      {
        trigger: "",
        arrival: "",
        effect: ""
      }
    ],

    specialRules: [],

    // D&D-style optional examples.
    // initiativeNotes: "",
    // difficultTerrain: [],
    // cover: [],
    // environmentalDamage: "",
    // lairActions: []

    // Mothership-style optional examples.
    // panicTriggers: [],
    // woundRisks: [],
    // oxygenState: "",
    // environmentalExposure: "",
    // escapeRoutes: []

    // Questforge / narrative-mechanical optional examples.
    // pressureClock: "",
    // consequenceFronts: [],
    // availableInterventions: [],
    // sacrificePoints: [],
    // resolutionThreshold: "",

    tableUse: ""
  },



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

  // Optional phase or state filter used by campaign-specific cockpit logic.
  visibilityGate: "",

  trigger: "",
  summary: "",
  playerFacing: "",
  gmTruth: "",

  involvedActors: [],
  involvedLocations: [],
  involvedFactions: [],

  relatedThreads: [],
  relatedTrackers: [],
  relatedReferences: [],

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
    branches: [
      {
        id: "branch_unique_id",
        label: "",
        condition: "",
        effect: "",
        softPoint: ""
      }
    ],
    scriptedMoments: [
      {
        timing: "",
        speaker: "",
        line: "",
        purpose: ""
      }
    ]
  },

  
  // Optional structured-resolution guidance.
  //
  // Use this when the scene crosses from ordinary narrative play into combat,
  // pursuit, evacuation, system stabilization, hacking, survival, or another
  // rules-facing challenge.
  //
  // This block should explain how to run the scene, not reproduce an entire
  // ruleset or full encounter document.
  encounterHandling: {
    objective: "",
    failureState: "",
    startingState: "",

    startingPositions: [],

    activeHazards: [
      {
        id: "hazard_unique_id",
        label: "",
        trigger: "",
        effect: "",
        response: ""
      }
    ],

    objectives: [
      {
        id: "objective_unique_id",
        label: "",
        condition: "",
        successEffect: "",
        failureEffect: ""
      }
    ],

    reinforcements: [
      {
        trigger: "",
        arrival: "",
        effect: ""
      }
    ],

    escalation: [
      {
        trigger: "",
        change: "",
        tableUse: ""
      }
    ],

    specialRules: [],

    // D&D-style optional examples.
    // roundsOrClock: "6 rounds",
    // initiativeNotes: "",
    // encounterDifficulty: "",
    // victoryConditions: [],
    // defeatConditions: []

    // Mothership-style optional examples.
    // turnsOrClock: "",
    // panicTriggers: [],
    // woundRisks: [],
    // environmentalChecks: [],
    // retreatConditions: []

    // Questforge / narrative-mechanical optional examples.
    // pressureClock: "",
    // consequenceFronts: [],
    // interventionOptions: [],
    // tradeoffs: [],
    // resolutionThreshold: "",

    resolutionNotes: ""
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

  visibilityGate: "",
  trigger: "",
  compact: "",

  spotlight: {
    title: "",
    readAloud: [
      {
        type: "narration",
        text: ""
      },
      {
        type: "speech",
        speaker: "",
        text: ""
      }
    ],
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
  relatedLocations: [],
  relatedScenes: [],
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
  nextPressure: "",

  relatedActors: [],
  relatedLocations: [],
  relatedFactions: [],
  relatedScenes: [],
  relatedTrackers: [],
  relatedReferences: [],

  signals: [],
  consequences: [],

  tags: [],
  gmNotes: ""
};

export const trackerTemplate = {
  id: "tracker_unique_id",
  name: "Tracker Name",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",
  type: "meter",

  value: 0,
  min: 0,
  max: 10,

  label: "",
  summary: "",

  effects: [
    {
      range: "0-2",
      label: "",
      note: ""
    },
    {
      range: "3-5",
      label: "",
      note: ""
    },
    {
      range: "6-8",
      label: "",
      note: ""
    },
    {
      range: "9-10",
      label: "",
      note: ""
    }
  ],

  relatedThreads: [],
  relatedScenes: [],
  relatedReferences: [],

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

  category: "gm-reminder / rule / lore / procedure / doctrine / table-note",
  summary: "",
  quickUse: "",

  details: [],
  rules: [],
  procedure: [
    {
      step: 1,
      instruction: ""
    }
  ],
  examples: [],
  exceptions: [],

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
  relatedScenes: [],
  relatedTrackers: [],
  relatedTables: [],

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

  motto: "",
  belief: "",
  truth: "",
  publicFace: "",
  privateTruth: "",

  goals: [],
  resources: [],
  tensions: [],
  genericLines: [],
  inPlayUse: "",

  relatedActors: [],
  relatedLocations: [],
  relatedThreads: [],
  relatedScenes: [],

  reference: "",
  tags: [],
  gmNotes: ""
};

export const tableTemplate = {
  id: "table_unique_id",
  name: "Table Name",
  die: "1d6",
  modeId: "",
  campaignId: "",
  arcId: "",
  status: "active",

  category: "event / rumor / omen / complication / encounter",
  summary: "",

  relatedLocation: "",
  relatedLocations: [],

  // Optional. Omit if baseline-visible.
  availability: {
    trackerId: "",
    minValue: 0,
    maxValue: 10
  },

  entries: [
    {
      roll: "1",
      result: "",
      gmNote: ""
    }
  ],

  reference: "",
  tags: [],
  gmNotes: ""
};
