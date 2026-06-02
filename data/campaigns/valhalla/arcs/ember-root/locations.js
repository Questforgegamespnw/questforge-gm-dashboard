export const locations = [
  {
    "id": "location_emberfall_forge_city",
    "name": "Emberfall Forge-City",
    "type": "Act 2 primary hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "A massive vertical industrial city failing under pressure.",
    "truth": "Players think the city is under attack. Reality: the city is breaking itself.",
    "purpose": [
      "Social conflict hub",
      "Dynamic investigation threads",
      "Transition between combat/social/system/moral pressure"
    ],
    "features": [
      "Heat is constant",
      "Movement is vertical",
      "Infrastructure is interconnected"
    ],
    "districts": [
      "The High Forge",
      "The Midworks",
      "The Lower Furnaces",
      "The Chainways",
      "The Core Furnace"
    ],
    "environmentSystems": [
      "Heat Pressure",
      "Lava Flow Shift",
      "Structural Instability"
    ],
    "reference": "library/locations/emberfall_forge_city.md",
    "tags": [
      "valhalla",
      "ember-root",
      "emberfall",
      "forge-city",
      "hub",
      "location"
    ]
  },
  {
    "id": "location_emberfall_high_forge",
    "name": "The High Forge",
    "type": "district / command heart",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "The illusion of control, clean enough to lie.",
    "quote": "Control is maintained... until it isn’t.",
    "overview": "Administrative and command heart of Emberfall.",
    "playableLayout": [
      "Council Chamber",
      "Command Walkways",
      "Reinforcement Stations"
    ],
    "dominantFactions": [
      "faction_emberroot_forge_lords"
    ],
    "secondaryFactions": [
      "faction_emberroot_ironhand_guilds"
    ],
    "injectionDialogue": [
      "Forge Lord: “The system holds.”",
      "Engineer: “…not like this.”",
      "Guard: “We’ve lost contact with the lower tiers!”"
    ],
    "reference": "library/locations/high_forge.md",
    "tags": [
      "valhalla",
      "ember-root",
      "high-forge",
      "council",
      "control",
      "location"
    ]
  },
  {
    "id": "location_emberfall_midworks",
    "name": "The Midworks",
    "type": "district / operational heart",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Truth leaking through technical failure.",
    "quote": "This is where the system starts to show strain.",
    "overview": "Operational heart of Emberfall with rune systems, control mechanisms, and maintenance infrastructure.",
    "playableLayout": [
      "Control Rooms",
      "Maintenance Corridors",
      "Overload Nodes"
    ],
    "dominantFactions": [
      "faction_emberroot_ironhand_guilds"
    ],
    "secondaryFactions": [
      "faction_emberroot_ashbound"
    ],
    "injectionDialogue": [
      "Engineer: “That’s not the failure point!”",
      "Another Engineer: “Yes it is!”",
      "Worker: “While you argue—we’re burning!”"
    ],
    "reference": "library/locations/midworks.md",
    "tags": [
      "valhalla",
      "ember-root",
      "midworks",
      "investigation",
      "systems",
      "location"
    ]
  },
  {
    "id": "location_emberfall_lower_furnaces",
    "name": "The Lower Furnaces",
    "type": "district / labor core",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "The human cost that was visible the whole time.",
    "quote": "This is where the cost lives.",
    "overview": "Labor core of Emberfall, closest to heat source and Root resonance.",
    "playableLayout": [
      "Furnace Pits",
      "Worker Quarters",
      "Resonance Tunnels"
    ],
    "dominantFactions": [
      "faction_emberroot_ashbound"
    ],
    "secondaryFactions": [
      "faction_emberroot_ironhand_guilds"
    ],
    "injectionDialogue": [
      "Worker: “We told them.”",
      "Another: “They didn’t listen.”",
      "Third, to players: “Are you going to?”"
    ],
    "reference": "library/locations/lower_furnaces.md",
    "tags": [
      "valhalla",
      "ember-root",
      "lower-furnaces",
      "workers",
      "root-resonance",
      "location"
    ]
  },
  {
    "id": "location_emberfall_chainways",
    "name": "The Chainways",
    "type": "district / traversal network",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Every decision becomes physical.",
    "quote": "Everything connects. Everything can fail.",
    "overview": "Connective tissue of Emberfall; critical for movement, evacuation, and crisis escalation.",
    "playableLayout": [
      "Main Chain Bridges",
      "Secondary Paths",
      "Vertical Drops"
    ],
    "dominantFactions": [
      "mixed"
    ],
    "secondaryFactions": [],
    "injectionDialogue": [
      "Forge Lord: “Hold the line!”",
      "Engineer: “This path won’t hold!”",
      "Worker: “Move or die!”"
    ],
    "reference": "library/locations/chainways.md",
    "tags": [
      "valhalla",
      "ember-root",
      "chainways",
      "traversal",
      "evacuation",
      "location"
    ]
  },
  {
    "id": "location_emberfall_core_furnace",
    "name": "The Core Furnace",
    "type": "major location / final descent engine",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Sacred containment engine mistaken for the threat.",
    "quote": "We were never melting. Only containing.",
    "truth": "The Core is not the bomb. The Core is the thing holding the bomb.",
    "overview": "Ancient central containment site deep beneath Emberfall.",
    "playableLayout": [
      "Entry Platform",
      "Regulator Zones",
      "Mid-Chain Platforms",
      "Core Proximity Zone"
    ],
    "environmentSystems": [
      "Heat Intensity",
      "Pressure Bursts",
      "System Surges"
    ],
    "locationStates": [
      "Stabilized",
      "Mixed",
      "Unstable"
    ],
    "connectionsToSystems": [
      "Investigation impact",
      "Council impact",
      "Unsavable impact",
      "Hot Exfil impact"
    ],
    "reference": "library/locations/core_furnace.md",
    "tags": [
      "valhalla",
      "ember-root",
      "core-furnace",
      "forge-below",
      "core",
      "containment",
      "location"
    ]
  }
];
