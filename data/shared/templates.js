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
  relationships: [],
  tags: [],
  gmNotes: ""
};

export const locationTemplate = {
  id: "location_unique_id",
  name: "Location Name",
  type: "settlement / district / room / wilderness / route / node",
  region: "",
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
    vibe: "",
    sensory: []
  },
  function: "",
  pressure: "",
  opportunities: [],
  dangers: [],
  connectedLocations: [],
  factionsPresent: [],
  actorsPresent: [],
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
  trigger: "",
  summary: "",
  playerFacing: "",
  gmTruth: "",
  involvedActors: [],
  involvedLocations: [],
  involvedFactions: [],
  clues: [],
  outcomes: [],
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
