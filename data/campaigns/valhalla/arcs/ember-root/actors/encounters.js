export const encounterActors = [
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
    ],
    "presentation": {
      "vibe": "Brutal route-breaker that turns terrain into crisis.",
      "voice": "Break the system open."
    },
    "quickLines": [
      "Break the system open."
    ],
    "currentState": "Structural Collapse crisis / Chainway fights"
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
    ],
    "presentation": {
      "vibe": "A support threat that turns environmental danger up.",
      "voice": "Amplify the chaos."
    },
    "quickLines": [
      "Amplify the chaos."
    ],
    "currentState": "Core Flare crisis / Lava breach escalation"
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
    ],
    "presentation": {
      "vibe": "Shielded advance that blocks choices and protects the release effort.",
      "voice": "Hold the advance."
    },
    "quickLines": [
      "Hold the advance."
    ],
    "currentState": "Enemy Push crisis / Blocking escape routes"
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
    ],
    "presentation": {
      "vibe": "Order maintained by force even when order becomes the problem.",
      "voice": "Maintain order."
    },
    "quickLines": [
      "Maintain order."
    ],
    "currentState": "High Forge conflict / Blocking evacuation"
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
    ],
    "presentation": {
      "vibe": "Useful technical pressure that can save or worsen the system."
    },
    "currentState": "Midworks encounters / System events"
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
    ],
    "presentation": {
      "vibe": "A desperate defender protecting people, not a villain.",
      "voice": "Protect our own."
    },
    "quickLines": [
      "Protect our own."
    ],
    "currentState": "Lower Furnaces / Civilian crises"
  }
];
