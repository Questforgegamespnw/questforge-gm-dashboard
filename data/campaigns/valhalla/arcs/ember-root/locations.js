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
    ],
    "locationRole": "parent",
    "connectedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "adjacentLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "availableScenes": [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_arrival_stop_forge_overlord",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    "relatedThreads": [
      "thread_emberroot_arrival_forced_triage",
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure",
      "thread_emberroot_valkyrie_strain"
    ],
    "actorsPresent": [
      "actor_thora_kara_emberroot"
    ],
    "keyActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    "presentation": {
      "establishingShot": "Players think the city is under attack. Reality: the city is breaking itself.",
      "approachBeat": "There is no approach. There is only arrival.",
      "vibe": "A massive vertical industrial city failing under pressure.",
      "sensory": [
        "Heat is constant",
        "Movement is vertical",
        "Infrastructure is interconnected"
      ]
    },
    "function": "Social conflict hub / Dynamic investigation threads / Transition between combat/social/system/moral pressure",
    "pressure": "Players think the city is under attack. Reality: the city is breaking itself.",
    "factionsPresent": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "arrival_hot_zone"
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
      "Reinforcement Stations",
      "Refuge gathering point"
    ],
    "dominantFactions": [
      "faction_emberroot_forge_lords"
    ],
    "secondaryFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
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
    ],
    "locationRole": "child",
    "parentLocation": "location_emberfall_forge_city",
    "connectedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_chainways"
    ],
    "adjacentLocations": [
      "location_emberfall_forge_city",
      "location_emberfall_midworks",
      "location_emberfall_chainways"
    ],
    "availableScenes": [
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch"
    ],
    "relatedThreads": [
      "thread_emberroot_caste_pressure",
      "thread_emberroot_caste_existed_before_arrival",
      "thread_emberroot_correct_interpretation_under_pressure",
      "thread_emberroot_no_clean_victories"
    ],
    "actorsPresent": [
      "actor_durgrim_ashenvein",
      "actor_forge_guard",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    "presentation": {
      "establishingShot": "Administrative and command heart of Emberfall.",
      "approachBeat": "Control is maintained... until it isn’t.",
      "vibe": "The illusion of control, clean enough to lie.",
      "sensory": [
        "Clean stone compared to the lower city.",
        "Controlled lava channels.",
        "Guards and structured movement."
      ]
    },
    "function": "Command, refuge, managed panic, and Council pressure.",
    "pressure": "Everyone is trying very hard not to admit they are losing control.",
    "factionsPresent": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
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
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "arrival_hot_zone"
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
    ],
    "locationRole": "child",
    "parentLocation": "location_emberfall_forge_city",
    "connectedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "adjacentLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "availableScenes": [
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_realization_shift",
      "scene_emberroot_core_furnace_descent"
    ],
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_correct_interpretation_under_pressure",
      "thread_emberroot_caste_pressure"
    ],
    "actorsPresent": [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    "presentation": {
      "establishingShot": "Operational heart of Emberfall with rune systems, control mechanisms, and maintenance infrastructure.",
      "approachBeat": "This is where the system starts to show strain.",
      "vibe": "Truth leaking through technical failure.",
      "sensory": [
        "Sparks and flickering rune arrays.",
        "Pipes venting heat unpredictably.",
        "Diagnostics contradicting one another."
      ]
    },
    "function": "Thread A, overload clues, system failures, and stabilization choices.",
    "pressure": "Useful information wrapped in disagreement.",
    "factionsPresent": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
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
    "visibilityGate": "arrival_hot_zone"
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
    ],
    "locationRole": "child",
    "parentLocation": "location_emberfall_forge_city",
    "connectedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "adjacentLocations": [
      "location_emberfall_midworks",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "availableScenes": [
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_realization_shift",
      "scene_emberroot_core_furnace_descent",
      "scene_emberroot_s05_unsavable"
    ],
    "relatedThreads": [
      "thread_emberroot_caste_existed_before_arrival",
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_core_is_not_enemy"
    ],
    "actorsPresent": [
      "actor_bruni_coalhand",
      "actor_ashbound_defender"
    ],
    "presentation": {
      "establishingShot": "Labor core of Emberfall, closest to heat source and Root resonance.",
      "approachBeat": "This is where the cost lives.",
      "vibe": "The human cost that was visible the whole time.",
      "sensory": [
        "Low visibility and thick smoke.",
        "Extreme heat and constant noise.",
        "Subtle pulses from below."
      ]
    },
    "function": "Thread C, civilian crises, worker trust, and moral pressure.",
    "pressure": "The truth was always visible here.",
    "factionsPresent": [
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
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
    "visibilityGate": "arrival_hot_zone"
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
    ],
    "locationRole": "child",
    "parentLocation": "location_emberfall_forge_city",
    "connectedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "adjacentLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "availableScenes": [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_arrival_stop_forge_overlord",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_realization_shift",
      "scene_emberroot_core_furnace_descent",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    "relatedThreads": [
      "thread_emberroot_arrival_forced_triage",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_giants_want_release"
    ],
    "actorsPresent": [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver",
      "actor_forge_guard"
    ],
    "presentation": {
      "establishingShot": "Connective tissue of Emberfall; critical for movement, evacuation, and crisis escalation.",
      "approachBeat": "Everything connects. Everything can fail.",
      "vibe": "Every decision becomes physical.",
      "sensory": [
        "Hanging chains and swaying platforms.",
        "Open vertical space.",
        "Lava far below."
      ]
    },
    "function": "Arrival branches, route pressure, structural collapse, Thread B, Hot Exfil.",
    "pressure": "If this fails, choices become physically unavailable.",
    "factionsPresent": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
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
    "visibilityGate": "arrival_hot_zone"
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
    ],
    "locationRole": "child",
    "parentLocation": "location_emberfall_forge_city",
    "connectedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "adjacentLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "availableScenes": [
      "scene_emberroot_s03_forge_below_living_core",
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_core_furnace_truth",
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_transformation_over_control"
    ],
    "actorsPresent": [
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    "presentation": {
      "establishingShot": "Ancient central containment site deep beneath Emberfall.",
      "approachBeat": "We were never melting. Only containing.",
      "vibe": "Sacred containment engine mistaken for the threat.",
      "sensory": [
        "Heat Intensity",
        "Pressure Bursts",
        "System Surges"
      ]
    },
    "function": "Forge Below, Core truth, Skarth pressure, Choice consequences.",
    "pressure": "The Core is not the bomb. The Core is the thing holding the bomb.",
    "factionsPresent": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
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
    "visibilityGate": "calm_center_investigation"
  }
];
