export const encounterActors = [
  {
    "id": "actor_magma_reaver",
    "name": "Magma Reaver",
    "role": "Fire giant frontline disruptor / structural breaker",
    "group": "Fire Giants",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_chainways",
    "currentState": "Structural Collapse crisis / Chainway fights",
    "sticky": false,
    "presentation": {
      "vibe": "Brutal route-breaker that turns terrain into crisis.",
      "physicality": "A huge fire-wreathed breaker with slag-cracked armor and hands built for tearing route supports apart.",
      "voice": "Break the system open.",
      "sceneImpact": "Turns terrain into an active crisis and makes routes fail while the party watches.",
      "visualAnchor": "Molten fists driving into a chainway support."
    },
    "motivation": {
      "wants": "Open routes, crack supports, and make containment failure spread physically.",
      "fears": "Being stalled long enough for stabilization to take hold.",
      "leverage": "Can destroy infrastructure faster than ordinary enemies can kill people."
    },
    "knowledge": {
      "knows": [
        "Which supports and housings matter.",
        "The giants are targeting systems, not random victims."
      ],
      "secrets": [
        "Its target priority reveals the fire giant plan."
      ]
    },
    "quickLines": [
      "Break the system open."
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "reference": "library/encounters/magma_reaver.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "structural-breaker"
    ],
    "gmNotes": "Use as: Structural Collapse crisis / Chainway fights / Breaking routes",
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "quote": "Break the system open.",
    "quickStats": {
      "ac": 17,
      "hp": "~110",
      "speed": "30 ft"
    },
    "traits": [
      "Magma Body",
      "Shatter Ground"
    ],
    "actions": [
      "Multiattack: 2 slam attacks, ~14–16 damage each"
    ],
    "use": [
      "Structural Collapse crisis",
      "Chainway fights",
      "Breaking routes"
    ]
  },
  {
    "id": "actor_cinder_channeler",
    "name": "Cinder Channeler",
    "role": "Fire giant hazard amplifier / Core synergy",
    "group": "Fire Giants",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_core_furnace",
    "currentState": "Core Flare crisis / Lava breach escalation",
    "sticky": false,
    "presentation": {
      "vibe": "A support threat that turns environmental danger up.",
      "physicality": "A heat-shimmering channeler whose gestures pull flare, lava, and pressure into sharper patterns.",
      "voice": "Amplify the chaos.",
      "sceneImpact": "Raises environmental danger and makes the room feel like the enemy is playing the system itself.",
      "visualAnchor": "Hands lifted as lava-light answers in pulses."
    },
    "motivation": {
      "wants": "Amplify surges and make the Core harder to stabilize.",
      "fears": "Losing access to active heat and pressure sources.",
      "leverage": "Can turn existing hazards into immediate crisis spikes."
    },
    "knowledge": {
      "knows": [
        "The Core answers pressure.",
        "Hazards can be amplified faster than they can be solved."
      ],
      "secrets": [
        "Its magic points toward release doctrine rather than battlefield victory."
      ]
    },
    "quickLines": [
      "Amplify the chaos."
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_core_furnace_truth"
    ],
    "reference": "library/encounters/cinder_channeler.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "hazard-amplifier"
    ],
    "gmNotes": "Use as: Core Flare crisis / Lava breach escalation / Forge Below synergy",
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "quote": "Amplify the chaos.",
    "quickStats": {
      "ac": 15,
      "hp": "~90"
    },
    "traits": [
      "Amplify Surge"
    ],
    "actions": [
      "Lava Lash",
      "Surge Pulse"
    ],
    "use": [
      "Core Flare crisis",
      "Lava breach escalation",
      "Forge Below synergy"
    ]
  },
  {
    "id": "actor_ember_guard",
    "name": "Ember Guard",
    "role": "Fire giant area denial / protector",
    "group": "Fire Giants",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_core_furnace",
    "currentState": "Enemy Push crisis / Blocking escape routes",
    "sticky": false,
    "presentation": {
      "vibe": "Shielded advance that blocks choices and protects the release effort.",
      "physicality": "A shielded wall of ember-metal and heat haze, advancing with brutal patience rather than speed.",
      "voice": "Hold the advance.",
      "sceneImpact": "Blocks exits, protects release agents, and forces the party to spend actions on positioning.",
      "visualAnchor": "A glowing shield line cutting off the only stable path."
    },
    "motivation": {
      "wants": "Protect release work and deny the party clean access.",
      "fears": "Being bypassed or pulled away from the objective.",
      "leverage": "Can turn movement into a costly choice."
    },
    "knowledge": {
      "knows": [
        "How to hold routes while other giants break constraints."
      ],
      "secrets": [
        "It is usually guarding a more important objective than itself."
      ]
    },
    "quickLines": [
      "Hold the advance."
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "reference": "library/encounters/ember_guard.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "area-denial"
    ],
    "gmNotes": "Use as: Enemy Push crisis / Blocking escape routes",
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "quote": "Hold the advance.",
    "quickStats": {
      "ac": 18,
      "hp": "~130"
    },
    "traits": [
      "Molten Guard"
    ],
    "actions": [
      "Shield Slam"
    ],
    "use": [
      "Enemy Push crisis",
      "Blocking escape routes"
    ]
  },
  {
    "id": "actor_forge_guard",
    "name": "Forge Guard",
    "role": "Dwarven crowd control / authority enforcement",
    "group": "Forge Lords",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_high_forge",
    "currentState": "High Forge conflict / Blocking evacuation",
    "sticky": false,
    "presentation": {
      "vibe": "Order maintained by force even when order becomes the problem.",
      "physicality": "Disciplined dwarf guard in heat-darkened armor, using formation and command voice to make panic obey.",
      "voice": "Maintain order.",
      "sceneImpact": "Makes authority an obstacle and turns evacuation into a political problem.",
      "visualAnchor": "A shield held across a route civilians need."
    },
    "motivation": {
      "wants": "Keep command routes secure and preserve order.",
      "fears": "Crowd panic becoming open revolt.",
      "leverage": "Authority, chokepoints, and disciplined bodies in narrow spaces."
    },
    "knowledge": {
      "knows": [
        "Which routes command wants held.",
        "Which lower-tier evacuations are being delayed."
      ],
      "secrets": [
        "Some orders protect status as much as survival."
      ]
    },
    "quickLines": [
      "Maintain order."
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_caste_pressure",
      "thread_emberroot_no_clean_victories"
    ],
    "reference": "library/encounters/forge_guard.md",
    "tags": [
      "valhalla",
      "ember-root",
      "dwarf",
      "forge-lord",
      "obstacle",
      "authority"
    ],
    "gmNotes": "Use as: High Forge conflict / Blocking evacuation",
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "quote": "Maintain order.",
    "quickStats": {
      "ac": 17,
      "hp": "~60"
    },
    "traits": [
      "Formation Defense"
    ],
    "actions": [
      "Warhammer"
    ],
    "use": [
      "High Forge conflict",
      "Blocking evacuation"
    ]
  },
  {
    "id": "actor_ironhand_engineer",
    "name": "Ironhand Engineer",
    "role": "Dwarven support / hazard interaction",
    "group": "Ironhand Guilds",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_midworks",
    "currentState": "Midworks encounters / System events",
    "sticky": false,
    "presentation": {
      "vibe": "Useful technical pressure that can save or worsen the system.",
      "physicality": "Tool harness, burn marks, chalked rune notes, and the distracted posture of someone doing math while people shout.",
      "voice": "That is not the failure point.",
      "sceneImpact": "Adds technical options, bad assumptions, and emergency overrides to a crisis scene.",
      "visualAnchor": "A shaking hand over an override lever while warnings disagree around them."
    },
    "motivation": {
      "wants": "Stabilize the immediate failure before politics or panic wastes the remaining margin.",
      "fears": "Being forced into the wrong override by command pressure.",
      "leverage": "Can explain or interact with systems under fire."
    },
    "knowledge": {
      "knows": [
        "Local systems and override points.",
        "Which failures are symptoms rather than sources."
      ],
      "secrets": [
        "A wrong emergency override can worsen the cascade."
      ]
    },
    "quickLines": [
      "That is not the failure point!",
      "The readings do not agree!",
      "Give me ten seconds and a clear panel!"
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_correct_interpretation_under_pressure",
      "thread_emberroot_caste_pressure"
    ],
    "reference": "library/encounters/ironhand_engineer.md",
    "tags": [
      "valhalla",
      "ember-root",
      "dwarf",
      "ironhand",
      "engineer",
      "support",
      "obstacle"
    ],
    "gmNotes": "Use as: Midworks encounters / System events",
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "quickStats": {
      "ac": 14,
      "hp": "~50"
    },
    "traits": [
      "Emergency Override"
    ],
    "actions": [
      "Stabilize or worsen system, 1/encounter"
    ],
    "use": [
      "Midworks encounters",
      "System events"
    ]
  },
  {
    "id": "actor_ashbound_defender",
    "name": "Ashbound Defender",
    "role": "Civilian protector / emotional combat",
    "group": "Ashbound",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_lower_furnaces",
    "currentState": "Lower Furnaces / Civilian crises",
    "sticky": false,
    "presentation": {
      "vibe": "A desperate defender protecting people, not a villain.",
      "physicality": "Ash-streaked defender with improvised armor, burned hands, and a stance built around shielding someone behind them.",
      "voice": "Protect our own.",
      "sceneImpact": "Makes combat morally complicated by defending civilians against everyone, including rescuers who look like command.",
      "visualAnchor": "A worker with a cracked shield between the party and frightened families."
    },
    "motivation": {
      "wants": "Protect lower-tier people first, regardless of command priorities.",
      "fears": "Being ordered back into sacrifice or seeing civilians abandoned for the system.",
      "leverage": "Local trust, bodies in the way, and moral clarity."
    },
    "knowledge": {
      "knows": [
        "Where people are trapped in the lower furnaces.",
        "Which orders the Ashbound no longer trust."
      ],
      "secrets": [
        "May resist rescue if it looks like command control."
      ]
    },
    "quickLines": [
      "Protect our own."
    ],
    "answerMoments": [],
    "relationships": [],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure"
    ],
    "reference": "library/encounters/ashbound_defender.md",
    "tags": [
      "valhalla",
      "ember-root",
      "dwarf",
      "ashbound",
      "protector",
      "obstacle"
    ],
    "gmNotes": "Use as: Lower Furnaces / Civilian crises",
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "quote": "Protect our own.",
    "quickStats": {
      "ac": 13,
      "hp": "~55"
    },
    "traits": [
      "Desperation Strike"
    ],
    "actions": [
      "Bonus damage when protecting others"
    ],
    "use": [
      "Lower Furnaces",
      "Civilian crises"
    ]
  }
];
