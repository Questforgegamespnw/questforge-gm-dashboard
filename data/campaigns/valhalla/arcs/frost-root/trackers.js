export const trackers = [
  {
    id: "tracker_gate_state",
    name: "Gate State",
    type: "state",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    value: 1,
    min: 0,
    max: 2,
    label: "Set after Phase 0",
    summary: "Gate state after the drop determines how hard the siege opens.",
    effects: [
      { range: "0", label: "Intact", note: "Defenders organized; fewer enemies inside town; Brinhild holds a strong position." },
      { range: "1", label: "Cracking", note: "One breach lane opens; civilians in danger; brute pressure increases." },
      { range: "2", label: "Breached", note: "Enemies inside town; civilians high risk; battlefield splits into two fronts." }
    ],
    tags: ["act-1", "gate", "siege", "active"]
  },
  {
    id: "tracker_active_nodes",
    name: "Active Nodes",
    type: "clock",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    summary: "Tracks how many Frostroot Rune Nodes remain active as battlefield hazard / solution targets.",
    status: "active",
    value: 3,
    min: 0,
    max: 3,
    label: "Three active at siege start",
    summary: "Tracks how many local rewrite / wrongness nodes remain active on the battlefield.",
    effects: [
      { range: "3", label: "Full Field Control", note: "All three nodes are active; cold fields, movement lock, and Runecaller pulse options are strongest." },
      { range: "2", label: "Pressure Reduced", note: "Players are taking control but cannot be everywhere." },
      { range: "1", label: "Last Node", note: "Runecaller may use Pulse to force a momentum swing." },
      { range: "0", label: "Unraveled", note: "Snow and movement begin behaving more normally." }
    ],
    tags: ["act-1", "nodes", "battlefield", "active"]
  },
  {
    id: "tracker_rift_state",
    name: "Rift State",
    type: "state",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    value: 0,
    min: 0,
    max: 2,
    label: "Not open",
    summary: "Tracks the Phase 3 reality wound.",
    effects: [
      { range: "0", label: "Not Open", note: "Rift has not appeared." },
      { range: "1", label: "Open", note: "Rift Core is active; enemy spawn pressure, reality distortion, and closure challenge are live." },
      { range: "2", label: "Folded", note: "Spawns stop, nodes destabilize, and undead weaken." }
    ],
    tags: ["act-1", "rift", "phase-3", "active"]
  },
  {
    id: "tracker_rift_closure_progress",
    name: "Rift Closure Progress",
    type: "clock",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    value: 0,
    min: 0,
    max: 3,
    label: "Close the Wound",
    summary: "Adjacent characters can make DC 20 Arcana, Religion, or Performance checks. Three successes fold the Rift.",
    effects: [
      { range: "0", label: "Open", note: "The Rift is fully resisting closure." },
      { range: "1", label: "Weakening", note: "Spawn pressure or aura can soften narratively." },
      { range: "2", label: "Folding", note: "The wound is visibly remembering it should not be open." },
      { range: "3", label: "Folded", note: "The Rift folds closed; spawn pressure stops and the battlefield begins settling." }
    ],
    tags: ["act-1", "rift", "skill-challenge", "active"]
  },
  {
    id: "tracker_civilian_state",
    name: "Civilian State",
    type: "state",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    value: 1,
    min: 0,
    max: 2,
    label: "Threatened",
    summary: "Tracks civilian stakes during the siege without simulating every individual.",
    effects: [
      { range: "0", label: "Stable", note: "Most civilians are behind lines or protected." },
      { range: "1", label: "Threatened", note: "Players must choose between objectives and rescue." },
      { range: "2", label: "Heavy Losses", note: "Ragnarok and trust consequences should move." }
    ],
    tags: ["act-1", "civilians", "stakes", "active"]
  },
  
];
