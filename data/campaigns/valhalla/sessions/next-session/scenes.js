export const scenes = [
  {
    id: "scene_valhalla_smiling_through_it_return_grounding",
    title: "Smiling Through It — Return Grounding",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "intro",
    priority: "high",

    trigger: "Start of this Valhalla visit cycle after Act 1, while Ragnarök pressure is still low.",
    summary: "Re-establish Valhalla as home before introducing any wrongness. The contrast is the point.",

    playerFacing: "The golden halls rise before you as they always have — vast, bright, alive with sound. Laughter echoes. Steel rings in the distance. The familiar pulse of Valhalla welcomes you home. And for a moment, everything feels exactly as it should.",
    gmTruth: "This visit cycle is about hairline fractures. Every issue should have a plausible explanation, even if that explanation is wrong.",

    involvedActors: [
      "actor_heimdall",
      "actor_sven",
      "actor_svinhild",
      "actor_eldri_softsky"
    ],
    involvedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    involvedFactions: [
      "faction_einherjar",
      "faction_valkyries"
    ],

    clues: [
      "Nothing should seem obviously dangerous yet.",
      "The hub still feels safe and familiar.",
      "The players should be allowed to relax before noticing inconsistencies."
    ],

    outcomes: [
      "Players reconnect with familiar NPCs.",
      "Valhalla feels like home again.",
      "Later subtle wrongness has contrast."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_great_hall_memory_drift",
        "scene_valhalla_training_grounds_function_drift",
        "scene_valhalla_arrival_threshold_soul_stutter"
      ],
      branches: [
        {
          condition: "Players go directly to the Great Hall / Mead-Hall",
          nextScene: "scene_valhalla_great_hall_memory_drift",
          note: "Use social and memory drift first."
        },
        {
          condition: "Players seek training, sparring, or martial purpose",
          nextScene: "scene_valhalla_training_grounds_function_drift",
          note: "Use role and function drift first."
        },
        {
          condition: "Players stay near the Bifrost, Heimdall, or Valkyrie work",
          nextScene: "scene_valhalla_arrival_threshold_soul_stutter",
          note: "Use soul/system drift first."
        }
      ],
      scriptedMoments: []
    },

    pressure: "Everything feels safe because the fracture has only just started.",
    runNote: "Let players greet NPCs, reconnect, and relax. Do not rush the wrongness.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "low-ragnarok",
      "intro",
      "grounding"
    ],
    gmNotes: "Session feel: Something is off, but it is probably fine."
  },

  {
    id: "scene_valhalla_great_hall_memory_drift",
    title: "Great Hall — Social / Memory Drift",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "social",
    priority: "high",

    trigger: "Players enter, linger in, or meaningfully interact with the Mead-Hall / Great Hall during this visit.",
    summary: "Introduce subtle social inconsistencies that everyone smooths over as normal.",

    playerFacing: "Long tables stretch across the hall, filled with warriors mid-feast. Familiar faces laugh, argue, celebrate, and welcome you back as if everything is exactly as it should be.",
    gmTruth: "The Mead-Hall is showing early memory drift. No one is alarmed yet because every inconsistency can still be rationalized.",

    involvedActors: [
      "actor_sven",
      "actor_svinhild"
    ],
    involvedLocations: [
      "location_valhalla_mead_hall"
    ],
    involvedFactions: [
      "faction_einherjar"
    ],

    clues: [
      "An NPC misremembers a shared event that did not happen.",
      "An NPC repeats a greeting or greeting cadence.",
      "A warrior repeats a toast later with slightly different wording.",
      "A familiar face references a feast, hunt, or gathering the players never attended."
    ],

    outcomes: [
      "Players notice people are slightly off but acting normal.",
      "NPCs laugh off or socially smooth over inconsistencies.",
      "The Great Hall remains warm, safe, and familiar on the surface."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_cross_region_pattern",
        "scene_valhalla_choose_hub_location",
        "scene_valhalla_training_grounds_function_drift",
        "scene_valhalla_arrival_threshold_soul_stutter"
      ],
      branches: [
        {
          condition: "Players question an inconsistency",
          nextScene: "scene_valhalla_cross_region_pattern",
          note: "Do not confirm danger yet. Let the pattern become noticeable only if they connect it."
        },
        {
          condition: "Players accept the social smoothing",
          nextScene: "scene_valhalla_choose_hub_location",
          note: "Let the visit continue and seed another stress type later."
        }
      ],
      scriptedMoments: [
        {
          timing: "During casual Great Hall conversation",
          speaker: "einherjar_npc",
          line: "Good to see you again — after the feast.",
          purpose: "Introduce a harmless-sounding memory error. There was no feast."
        },
        {
          timing: "If questioned",
          speaker: "einherjar_npc",
          line: "Hah — must’ve been someone else.",
          purpose: "Show that everyone rationalizes the drift."
        }
      ]
    },

    pressure: "Social memory has begun to drift, but the culture keeps smiling through it.",
    runNote: "Use 2–3 micro stresses. No panic. No urgency. Everyone normalizes it.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "mead-hall",
      "memory-drift",
      "social"
    ],
    gmNotes: "Player takeaway: People are slightly off, but acting normal."
  },

  {
    id: "scene_valhalla_training_grounds_function_drift",
    title: "Training Grounds — Role / Function Drift",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "downtime",
    priority: "medium",

    trigger: "Players visit a training space, observe warriors, spar, test themselves, or ask how Valhalla's martial routines are functioning.",
    summary: "Show that Valhalla’s purpose-machine is still operating, but not quite consistently.",

    playerFacing: "The clash of steel echoes across the training grounds. Warriors spar, train, reset, and test themselves as they always have.",
    gmTruth: "Role and function drift are beginning. Warriors still perform their roles, but timing, repetition, and identity of skill have subtle errors.",

    involvedActors: [],
    involvedLocations: [
      "location_valhalla_training_grounds"
    ],
    involvedFactions: [
      "faction_einherjar"
    ],

    clues: [
      "A strike lands and the reaction comes a beat late.",
      "A warrior performs a move, resets, and performs it again exactly the same way.",
      "A known warrior suddenly uses a different fighting style but insists they always fought that way.",
      "If players spar, timing feels slightly desynced with no mechanical penalty."
    ],

    outcomes: [
      "Players see that things still work, but not consistently.",
      "Valhalla’s martial purpose feels slightly misaligned.",
      "This becomes the second pattern point if the Great Hall drift has already occurred."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_cross_region_pattern",
        "scene_valhalla_arrival_threshold_soul_stutter",
        "scene_valhalla_choose_hub_location"
      ],
      branches: [
        {
          condition: "Players connect this with memory drift",
          nextScene: "scene_valhalla_cross_region_pattern",
          note: "Reward their pattern recognition."
        },
        {
          condition: "Players spar or test the effect",
          nextScene: "scene_valhalla_training_grounds_function_drift",
          note: "Describe desynced timing narratively only. Do not add mechanics unless desired."
        }
      ],
      scriptedMoments: [
        {
          timing: "When a known warrior shows skill dissonance",
          speaker: "einherjar_npc",
          line: "Always fought like this.",
          purpose: "Make the correction socially impossible without making it hostile."
        }
      ]
    },

    pressure: "Purpose still functions, but repetition and timing are drifting.",
    runNote: "Use 2–3 micro stresses. Keep it weird, not threatening.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "training-grounds",
      "function-drift",
      "role-drift"
    ],
    gmNotes: "Player takeaway: Things are working, but not consistently."
  },

  {
    id: "scene_valhalla_arrival_threshold_soul_stutter",
    title: "Arrival Threshold — Soul / System Drift",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "foreshadow",
    priority: "high",

    trigger: "Players pass near the Bifrost, Heimdall’s Threshold, Valkyrie retrieval work, or soul-arrival activity during this visit.",
    summary: "Show the first visible soul/system drift, with Eldri as the soft emotional focus.",

    playerFacing: "At the threshold, the air feels quieter. Valkyries move with purpose, guiding the fallen to their place.",
    gmTruth: "This is the most important stress type in the visit. The system itself is beginning to stutter.",

    involvedActors: [
      "actor_heimdall",
      "actor_eldri_softsky",
      "actor_svinhild"
    ],
    involvedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_valkyrie_aerie"
    ],
    involvedFactions: [
      "faction_valkyries"
    ],

    clues: [
      "A warrior appears just slightly delayed, like the moment did not resolve cleanly.",
      "Eldri reaches toward a soul, hesitates, then continues.",
      "A soul looks at Eldri but does not immediately move, then follows.",
      "Eldri says things have been slower lately, then downplays it."
    ],

    outcomes: [
      "Players realize the wrongness may involve the system itself.",
      "Eldri becomes the soft concern anchor for this visit cycle.",
      "The pattern can now connect social, functional, and soul/system drift."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_cross_region_pattern",
        "scene_valhalla_eldri_private_concern",
        "scene_valhalla_smiling_through_it_ending"
      ],
      branches: [
        {
          condition: "Players ask Eldri directly",
          nextScene: "scene_valhalla_eldri_private_concern",
          note: "Let her deflect in public, then approach privately later."
        },
        {
          condition: "Players ignore it",
          nextScene: "scene_valhalla_smiling_through_it_ending",
          note: "Let the unsettling tone linger without confirmation."
        }
      ],
      scriptedMoments: [
        {
          timing: "When Eldri reaches for a soul",
          speaker: "actor_eldri_softsky",
          line: "Just… a moment.",
          purpose: "Show hesitation without admitting alarm."
        },
        {
          timing: "If pressed gently",
          speaker: "actor_eldri_softsky",
          line: "It’s been… slower, lately. Nothing serious. …Probably.",
          purpose: "Seed concern while keeping low-Ragnarök tone."
        }
      ]
    },

    pressure: "Soul arrival is beginning to stutter, but everyone still has plausible explanations.",
    runNote: "This is the most important region. Keep Eldri concerned, not panicked.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "arrival-threshold",
      "soul-stutter",
      "system-drift",
      "eldri"
    ],
    gmNotes: "Player takeaway: Something is off with the system itself."
  },

  {
    id: "scene_valhalla_cross_region_pattern",
    title: "Cross-Region Pattern Recognition",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "reveal",
    priority: "medium",

    trigger: "Players compare notes, call out similarities, or notice at least two stress types across different regions.",
    summary: "Reward players for noticing that the separate oddities have the same underlying feel.",

    playerFacing: "The details are small on their own: a repeated toast, a delayed reaction, a soul that did not move when called. But placed together, they feel similar somehow.",
    gmTruth: "The same system strain is showing through social memory, martial role, and soul-arrival function.",

    involvedActors: [],
    involvedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_training_grounds",
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_valkyrie_aerie"
    ],
    involvedFactions: [
      "faction_einherjar",
      "faction_valkyries"
    ],

    clues: [
      "Social drift, function drift, and soul drift all feel rhythmically similar.",
      "No one else seems willing to name the pattern.",
      "The issues remain small enough to dismiss."
    ],

    outcomes: [
      "Players feel rewarded for noticing.",
      "Eldri private moment becomes strongly justified.",
      "The visit’s tone shifts from oddities to pattern."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_eldri_private_concern",
        "scene_valhalla_smiling_through_it_ending"
      ],
      branches: [
        {
          condition: "Players seek Eldri or mention her hesitation",
          nextScene: "scene_valhalla_eldri_private_concern",
          note: "Let Eldri approach them privately or be found away from others."
        },
        {
          condition: "Players keep the realization to themselves",
          nextScene: "scene_valhalla_smiling_through_it_ending",
          note: "End on the unsettling thought that they may be the only ones noticing."
        }
      ],
      scriptedMoments: []
    },

    pressure: "The fractures are subtle but everywhere.",
    runNote: "Do not overexplain. Say enough to confirm the players are not imagining it.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "pattern",
      "reveal",
      "low-ragnarok"
    ],
    gmNotes: "Reward with: These all feel similar somehow."
  },

  {
    id: "scene_valhalla_eldri_private_concern",
    title: "Eldri Private Concern",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "social",
    priority: "high",

    trigger: "After players notice the pattern, ask Eldri about the hesitation, or show they are paying attention to soul-arrival drift.",
    summary: "Let Eldri quietly confirm concern without triggering panic or full exposition.",

    playerFacing: "Away from the others, Eldri approaches with the same gentleness she uses for the newly fallen, but this time her relief is aimed at you.",
    gmTruth: "Eldri is concerned and still hopeful. She wants confirmation that she is not the only one seeing the problem.",

    involvedActors: [
      "actor_eldri_softsky"
    ],
    involvedLocations: [
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_bifrost_platform"
    ],
    involvedFactions: [
      "faction_valkyries"
    ],

    clues: [
      "Eldri has noticed the slowing and hesitation.",
      "She believes it has not spread far yet.",
      "She is relieved if the party confirms they have seen it too."
    ],

    outcomes: [
      "Eldri becomes a soft ally in recognizing the first cracks.",
      "Players learn this is not isolated to one place.",
      "The concern remains low-volume and deniable."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_smiling_through_it_ending",
        "scene_valhalla_mission_selection"
      ],
      branches: [
        {
          condition: "Players confirm they noticed",
          nextScene: "scene_valhalla_smiling_through_it_ending",
          note: "Eldri is relieved but not alarmist."
        },
        {
          condition: "Players push for hard answers",
          nextScene: "scene_valhalla_smiling_through_it_ending",
          note: "Eldri should not have the full explanation yet."
        }
      ],
      scriptedMoments: [
        {
          timing: "When Eldri has the party away from others",
          speaker: "actor_eldri_softsky",
          line: "You’ve seen it, haven’t you?",
          purpose: "Confirm the pattern softly."
        },
        {
          timing: "If the players confirm",
          speaker: "actor_eldri_softsky",
          line: "…Good.",
          purpose: "Show relief."
        },
        {
          timing: "After confirmation",
          speaker: "actor_eldri_softsky",
          line: "It’s not just here. …But it hasn’t spread far.",
          purpose: "Escalate concern without raising panic."
        }
      ]
    },

    pressure: "Someone inside the system is worried, but not ready to call it danger.",
    runNote: "Eldri should be concerned, hopeful, and careful. Not panicked.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "eldri",
      "private-scene",
      "soft-concern"
    ],
    gmNotes: "This is the emotional hook of the visit cycle."
  },

  {
    id: "scene_valhalla_smiling_through_it_ending",
    title: "Smiling Through It — Ending Beat",
    session: "session_next",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    type: "fallout",
    priority: "high",

    trigger: "End of this Valhalla visit cycle, after players have seen enough subtle wrongness or after Eldri's private concern scene.",
    summary: "End with Valhalla continuing normally, but no longer feeling fully trustworthy.",

    playerFacing: "The hall continues as it always has. Laughter. Movement. Life. But now, you cannot quite see it the same way.",
    gmTruth: "This is the intended final feeling: something is definitely off, it is subtle but everywhere, and no one else seems worried enough.",

    involvedActors: [
      "actor_eldri_softsky",
      "actor_sven",
      "actor_heimdall"
    ],
    involvedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_valkyrie_aerie"
    ],
    involvedFactions: [
      "faction_einherjar",
      "faction_valkyries"
    ],

    clues: [
      "Everything continues as normal.",
      "The pattern is now visible to the players.",
      "No one is ready to say the system is failing."
    ],

    outcomes: [
      "Players leave thinking something is definitely off.",
      "The hub remains familiar but suspect.",
      "Eldri is established as an early concern anchor.",
      "Low-Ragnarök tone is preserved."
    ],

    forwardPath: {
      upNext: [
        "scene_valhalla_mission_selection"
      ],
      branches: [
        {
          condition: "Players escalate publicly",
          nextScene: "scene_valhalla_mission_selection",
          note: "NPCs should downplay, rationalize, or redirect toward action."
        },
        {
          condition: "Players keep concern private",
          nextScene: "scene_valhalla_mission_selection",
          note: "Carry the doubt forward as personal knowledge."
        }
      ],
      scriptedMoments: [
        {
          timing: "Final line option from an NPC or internal narration",
          speaker: "npc_or_internal",
          line: "It’s probably nothing.",
          purpose: "Make the reassurance unsettling."
        }
      ]
    },

    pressure: "The unsettling part is that everyone can still plausibly pretend this is normal.",
    runNote: "End with doubt, not fear. The players should wonder if they are the only ones noticing.",
    tags: [
      "active",
      "session-current",
      "valhalla",
      "smiling-through-it",
      "ending",
      "low-ragnarok",
      "continuity"
    ],
    gmNotes: "Final session feel: Something is definitely off. It is subtle but everywhere. No one else seems worried."
  }
];
