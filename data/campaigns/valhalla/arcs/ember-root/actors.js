export const actors = [
  {
    "id": "actor_durgrim_ashenvein",
    "name": "Durgrim Ashenvein",
    "role": "Ruler of Emberfall / Forge Lord representative",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Controlled authority hardening into rigid desperation.",
    "quote": "The System Must Hold.",
    "identity": [
      "Ruler of Emberfall",
      "Embodiment of endurance ideology"
    ],
    "crisisPhilosophy": "We survive by holding.",
    "wants": "Maintain the system and preserve Emberfall's command structure.",
    "fears": "That collapse means total failure and loss of legitimacy.",
    "stateBehavior": {
      "stabilized": "Calm authority",
      "mixed": "Defensive",
      "unstable": "Desperate, rigid"
    },
    "dialogue": {
      "base": "The forge has endured worse.",
      "pressure": "We do not abandon what sustains us!",
      "breaking": "If it falls—we fall with it!"
    },
    "playerResponse": [
      {
        "behavior": "Stabilize system",
        "reaction": "Gains respect"
      },
      {
        "behavior": "Save civilians",
        "reaction": "Sees as weakness"
      },
      {
        "behavior": "Destroy system",
        "reaction": "Opposes strongly"
      }
    ],
    "postChoiceEvolution": {
      "reinforce": "Vindicated",
      "shutdown": "Bitter respect",
      "collapse": "Resentful",
      "release": "Sees as betrayal"
    },
    "reference": "library/actors/durgrim_ashenvein.md",
    "tags": [
      "valhalla",
      "ember-root",
      "forge-lord",
      "control",
      "npc"
    ]
  },
  {
    "id": "actor_kaldra_steelmind",
    "name": "Kaldra Steelmind",
    "role": "System architect / Ironhand truth bearer",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Technical clarity under unbearable pressure.",
    "quote": "It’s Not Failing—It’s Overloaded.",
    "identity": [
      "System architect",
      "Truth bearer"
    ],
    "crisisPhilosophy": "The system has limits. We exceeded them.",
    "wants": "Mitigate the disaster by understanding and respecting system limits.",
    "fears": "Panic, denial, or politics destroying the last stabilizing options.",
    "stateBehavior": {
      "stabilized": "Focused, clear",
      "mixed": "Frustrated",
      "unstable": "Urgent, sharp"
    },
    "dialogue": {
      "base": "It was never meant to handle this.",
      "pressure": "You’re treating symptoms—not the problem!",
      "breaking": "We are out of margin!"
    },
    "playerResponse": [
      {
        "behavior": "Investigates deeply",
        "reaction": "Trusts"
      },
      {
        "behavior": "Stabilizes Core",
        "reaction": "Aligns strongly"
      },
      {
        "behavior": "Attacks blindly",
        "reaction": "Frustrated"
      }
    ],
    "postChoiceEvolution": {
      "shutdown": "Strong ally",
      "reinforce": "Concerned",
      "collapse": "Accepts necessity",
      "release": "Opposes"
    },
    "reference": "library/actors/kaldra_steelmind.md",
    "tags": [
      "valhalla",
      "ember-root",
      "ironhand",
      "engineer",
      "truth-bearer",
      "npc"
    ]
  },
  {
    "id": "actor_bruni_coalhand",
    "name": "Bruni Coalhand",
    "role": "Ashbound worker leader / moral anchor",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Controlled anger becoming survival revolt.",
    "quote": "We Pay the Price.",
    "identity": [
      "Worker leader",
      "Moral anchor"
    ],
    "crisisPhilosophy": "People matter more than systems.",
    "wants": "Save the people who have been sacrificed to keep the system running.",
    "fears": "The party choosing the machine over the people trapped inside it.",
    "stateBehavior": {
      "stabilized": "Controlled anger",
      "mixed": "Agitated",
      "unstable": "Explosive"
    },
    "dialogue": {
      "base": "We told them it would break.",
      "pressure": "How many more die before you stop?!",
      "breaking": "Then let it burn!"
    },
    "playerResponse": [
      {
        "behavior": "Save civilians",
        "reaction": "Trust"
      },
      {
        "behavior": "Protect system",
        "reaction": "Distrust"
      },
      {
        "behavior": "Delay action",
        "reaction": "Anger"
      }
    ],
    "postChoiceEvolution": {
      "collapse": "Loyal ally",
      "shutdown": "Cautious respect",
      "reinforce": "Hostile",
      "release": "Furious"
    },
    "reference": "library/actors/bruni_coalhand.md",
    "tags": [
      "valhalla",
      "ember-root",
      "ashbound",
      "worker",
      "moral-anchor",
      "npc"
    ]
  },
  {
    "id": "actor_skarth_firebrand",
    "name": "Skarth Firebrand",
    "role": "Fire giant liaison / ideological antagonist",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Calm, persuasive, catastrophic freedom.",
    "quote": "Power Should Not Be Contained.",
    "identity": [
      "Fire giant liaison",
      "Chaos opportunist"
    ],
    "crisisPhilosophy": "This is evolution—not failure.",
    "wants": "Force the system into full release.",
    "fears": "The party stabilizing the system before it can become what he believes it is meant to be.",
    "stateBehavior": {
      "stabilized": "Patient",
      "mixed": "Persuasive",
      "unstable": "Aggressive"
    },
    "dialogue": {
      "base": "You fear what you built.",
      "pressure": "You are wasting potential.",
      "breaking": "Then let it burn free!"
    },
    "playerResponse": [
      {
        "behavior": "Seek control",
        "reaction": "Manipulates"
      },
      {
        "behavior": "Seek power",
        "reaction": "Encourages"
      },
      {
        "behavior": "Reject him",
        "reaction": "Opposes"
      }
    ],
    "postChoiceEvolution": {
      "release": "Major ally",
      "reinforce": "Opponent",
      "shutdown": "Watches",
      "collapse": "Opportunist"
    },
    "escalationPath": [
      "Observer",
      "Influencer",
      "Agent of Release",
      "Boss Escalation / optional"
    ],
    "reference": "library/actors/skarth_firebrand.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "skarth",
      "release",
      "npc"
    ]
  },
  {
    "id": "actor_thora_kara_emberroot",
    "name": "Thora / Kara",
    "role": "Valkyrie extraction pressure / system-wide failure foreshadowing",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Soul-guides realizing they cannot catch everyone.",
    "quote": "We Cannot Catch Them All.",
    "identity": [
      "Soul-guides",
      "First sign of system-wide failure"
    ],
    "crisisPhilosophy": "We save who we can.",
    "stateBehavior": {
      "thora": {
        "stabilized": "Controlled",
        "mixed": "Strained",
        "unstable": "Snapping"
      },
      "kara": {
        "stabilized": "Observant",
        "mixed": "Uneasy",
        "unstable": "Disturbed"
      }
    },
    "dialogue": {
      "thora": "Pick one—I can’t carry all of them!",
      "kara": "…something’s wrong beyond this."
    },
    "playerResponse": [
      {
        "behavior": "Save people",
        "reaction": "Align"
      },
      {
        "behavior": "Delay",
        "reaction": "Strain increases"
      },
      {
        "behavior": "Choose system",
        "reaction": "Quiet judgment"
      }
    ],
    "postChoiceEvolution": {
      "highCasualties": "Strain visible",
      "stabilizedSystem": "Relief",
      "collapse": "Overload",
      "release": "Disturbance"
    },
    "reference": "library/actors/thora_kara_valkyrie_strain.md",
    "tags": [
      "valhalla",
      "ember-root",
      "valkyries",
      "thora",
      "kara",
      "extraction",
      "npc"
    ]
  },
  {
    "id": "actor_magma_reaver",
    "name": "Magma Reaver",
    "role": "Fire giant frontline disruptor / structural breaker",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Brutal route-breaker that turns terrain into crisis.",
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
    ],
    "reference": "library/encounters/magma_reaver.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "structural-breaker"
    ]
  },
  {
    "id": "actor_cinder_channeler",
    "name": "Cinder Channeler",
    "role": "Fire giant hazard amplifier / Core synergy",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "A support threat that turns environmental danger up.",
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
    ],
    "reference": "library/encounters/cinder_channeler.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "hazard-amplifier"
    ]
  },
  {
    "id": "actor_ember_guard",
    "name": "Ember Guard",
    "role": "Fire giant area denial / protector",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Shielded advance that blocks choices and protects the release effort.",
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
    ],
    "reference": "library/encounters/ember_guard.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "enemy",
      "area-denial"
    ]
  },
  {
    "id": "actor_forge_guard",
    "name": "Forge Guard",
    "role": "Dwarven crowd control / authority enforcement",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Order maintained by force even when order becomes the problem.",
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
    ],
    "reference": "library/encounters/forge_guard.md",
    "tags": [
      "valhalla",
      "ember-root",
      "dwarf",
      "forge-lord",
      "obstacle",
      "authority"
    ]
  },
  {
    "id": "actor_ironhand_engineer",
    "name": "Ironhand Engineer",
    "role": "Dwarven support / hazard interaction",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Useful technical pressure that can save or worsen the system.",
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
    ]
  },
  {
    "id": "actor_ashbound_defender",
    "name": "Ashbound Defender",
    "role": "Civilian protector / emotional combat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "A desperate defender protecting people, not a villain.",
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
    ],
    "reference": "library/encounters/ashbound_defender.md",
    "tags": [
      "valhalla",
      "ember-root",
      "dwarf",
      "ashbound",
      "protector",
      "obstacle"
    ]
  }
];
