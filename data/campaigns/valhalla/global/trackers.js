export const trackers = [
  {
    id: "tracker_ragnarok_meter",
    name: "Ragnarok Meter",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    type: "meter",
    value: 2,
    min: 0,
    max: 10,

    label: "Stable, with subtle wrongness.",
    summary: "Measures how visibly Valhalla’s systems are beginning to fail as reality moves toward Ragnarok.",
    effects: [
      {
        range: "0-3",
        label: "Stable / Something Is Wrong",
        note: "Valhalla still works. Small inconsistencies, minor undead signs, NPC unease, and hub-zone strain are dismissible."
      },
      {
        range: "4-6",
        label: "Strain / The World Is Slipping",
        note: "NPC behavior shifts, planar bleed appears, travel grows dangerous, and hub zones show subtle failure."
      },
      {
        range: "7-9",
        label: "Fracture / Collapse Is Imminent",
        note: "The system visibly compensates. Reality instability, active gods, locked choices, and uncertain safety enter play."
      },
      {
        range: "10",
        label: "Break / Ragnarok",
        note: "Return, memory, retrieval, and safety can no longer be trusted. Realms collide and campaign endgame begins."
      }
    ],

    tags: [
      "active",
      "valhalla",
      "tracker",
      "ragnarok",
      "ragnarok-meter",
      "system-failure",
      "world-state",
      "escalation"
    ],
    gmNotes: "Escalate selectively. Do not make every zone ominous at once; use current_loadout.js and this tracker to mark danger."
  }
];
