export const locations = [
  {
    id: "location_emberfall_forge_city",
    name: "Emberfall Forge-City",
    type: "Act 2 primary hub / parent location",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "parent",
    connectedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    adjacentLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    availableScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    actorsPresent: [
      "actor_thora_kara_emberroot"
    ],
    keyActors: [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    factionsPresent: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    presentation: {
      establishingShot: "A massive vertical forge-city burns beneath the party, all chains, heat haze, falling sparks, and shouting voices layered over a system already failing under its own pressure.",
      approachBeat: "The Bifrost spits you into heat and shouting; a nearby span bucks under fleeing feet while wings cut through smoke below.",
      vibe: "A massive vertical industrial city failing under pressure.",
      sensory: [
        "Heat is constant and comes from every direction.",
        "Movement is vertical: elevators, chains, gantries, drops, and bridges all fighting gravity.",
        "Every district feels connected enough that one failure can drag another down with it."
      ]
    },
    function: "Parent camera for the whole Act 2 field: arrival, citywide collapse, caste pressure, and final escape consequences.",
    pressure: "Players think the city is under attack. Reality: the city is breaking itself.",
    opportunities: [
      "Use this parent location when the table needs the whole city in view rather than one district.",
      "Select a child district when the party chooses where to put their hands next."
    ],
    dangers: [
      "Broad city links can make every crisis feel active at once; move to a child location when a specific scene starts.",
      "The citywide truth should be visible but not over-explained before the party earns it."
    ],
    reference: "library/locations/emberfall_forge_city.md",
    tags: [
      "valhalla",
      "ember-root",
      "emberfall",
      "forge-city",
      "hub",
      "location"
    ],
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "location_emberfall_high_forge",
    name: "The High Forge",
    type: "district / command heart",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "child",
    parentLocation: "location_emberfall_forge_city",
    connectedLocations: [
      "location_emberfall_midworks",
      "location_emberfall_chainways"
    ],
    adjacentLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_midworks",
      "location_emberfall_chainways"
    ],
    availableScenes: [
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure",
      "thread_emberroot_skarth_philosophical_alignment_path"
    ],
    actorsPresent: [
      "actor_durgrim_ashenvein",
      "actor_forge_guard",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    factionsPresent: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    presentation: {
      establishingShot: "The High Forge is clean compared to the lower city: command balconies, reinforced channels, polished black stone, and guards holding formations that are already starting to thin.",
      approachBeat: "A guard tries to wave you behind a command line while refugees press forward and Durgrim, Kaldra, and Bruni talk over one another.",
      vibe: "The illusion of control, clean enough to lie.",
      sensory: [
        "Controlled lava channels glow beneath carved grates.",
        "Officials speak in clipped orders while refugees watch for signs of panic.",
        "The lower-city noise reaches this place as a dull, embarrassing tremor."
      ]
    },
    function: "Command, refuge, managed panic, Council pressure, and caste arguments made visible.",
    pressure: "Everyone here is trying very hard not to admit they are losing control.",
    opportunities: [
      "Put Durgrim, Kaldra, and Bruni in visible disagreement instead of delivering a clean briefing.",
      "Use this location to launch or interpret the branch investigation paths."
    ],
    dangers: [
      "Authority tries to turn crisis response into obedience.",
      "If the party accepts the command frame too easily, worker costs become easier to ignore."
    ],
    reference: "library/locations/high_forge.md",
    tags: [
      "valhalla",
      "ember-root",
      "high-forge",
      "council",
      "control",
      "location"
    ],
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "location_emberfall_midworks",
    name: "The Midworks",
    type: "district / operational heart",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "child",
    parentLocation: "location_emberfall_forge_city",
    connectedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    adjacentLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    availableScenes: [
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_realization_shift",
      "scene_emberroot_core_furnace_descent"
    ],
    relatedThreads: [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_caste_pressure"
    ],
    actorsPresent: [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    factionsPresent: [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    presentation: {
      establishingShot: "The Midworks turn Emberfall from fortress into machine: rune panels, pipe ribs, inspection gantries, and sealed channels all flashing contradictory warnings.",
      approachBeat: "A pipe vents hard enough to shove heat across the walkway while two engineers point at different glowing readings and demand opposite fixes.",
      vibe: "Truth leaking through technical failure.",
      sensory: [
        "Sparks and flickering rune arrays stutter out of rhythm.",
        "Pipes vent heat unpredictably through safety seams.",
        "Diagnostics contradict one another often enough that trained engineers start arguing in public."
      ]
    },
    function: "System Failure investigation, overload clues, mechanical disagreement, and the technical route toward Core truth.",
    pressure: "Useful information is wrapped in disagreement.",
    opportunities: [
      "Reward players who ask what the readings mean instead of who caused the attack.",
      "Let technical success clarify the shape of the failure without solving the whole arc."
    ],
    dangers: [
      "Misread evidence can make the Core or Root look like the enemy.",
      "Engineers may keep trying to fix the visible symptom instead of naming the deeper overload."
    ],
    reference: "library/locations/midworks.md",
    tags: [
      "valhalla",
      "ember-root",
      "midworks",
      "investigation",
      "systems",
      "location"
    ],
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "location_emberfall_lower_furnaces",
    name: "The Lower Furnaces",
    type: "district / labor core",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "child",
    parentLocation: "location_emberfall_forge_city",
    connectedLocations: [
      "location_emberfall_midworks",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    adjacentLocations: [
      "location_emberfall_midworks",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    availableScenes: [
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_realization_shift",
      "scene_emberroot_s05_unsavable"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_caste_pressure"
    ],
    actorsPresent: [
      "actor_bruni_coalhand",
      "actor_ashbound_defender"
    ],
    factionsPresent: [
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    presentation: {
      establishingShot: "The Lower Furnaces are packed with labor platforms, heat-blasted shelters, soot-black channels, and people who have been living beside the failure longer than anyone above wanted to admit.",
      approachBeat: "A worker reaches through the smoke for help as a furnace gate screams against its brackets and the floor pulses under your boots.",
      vibe: "The human cost that was visible the whole time.",
      sensory: [
        "Low visibility and thick smoke turn every shout into a direction marker.",
        "Extreme heat sits low and heavy, like a hand over the mouth.",
        "Subtle pulses move up from below before machinery reacts."
      ]
    },
    function: "Root Resonance investigation, civilian crises, worker trust, and moral pressure made physical.",
    pressure: "The truth was always visible here; the upper city just learned not to look down.",
    opportunities: [
      "Let workers reveal what formal command reports hid or dismissed.",
      "Use Bruni and the Ashbound to make survival a legitimate political argument."
    ],
    dangers: [
      "Saving infrastructure can feel like abandoning people here.",
      "If the party treats this as background suffering, later losses should feel earned."
    ],
    reference: "library/locations/lower_furnaces.md",
    tags: [
      "valhalla",
      "ember-root",
      "lower-furnaces",
      "workers",
      "root-resonance",
      "location"
    ],
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "location_emberfall_chainways",
    name: "The Chainways",
    type: "district / traversal network",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "child",
    parentLocation: "location_emberfall_forge_city",
    connectedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    adjacentLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    availableScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_arrival_stop_forge_overlord",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_giants_want_release"
    ],
    actorsPresent: [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver",
      "actor_forge_guard"
    ],
    factionsPresent: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    presentation: {
      establishingShot: "The Chainways hang across Emberfall in suspended routes, swaying platforms, lift chains, evacuation spans, and open drops where the city becomes a map of what can fail next.",
      approachBeat: "The platform under you sways before anyone speaks; someone on the next span slips, and every chain above answers at once.",
      vibe: "Every decision becomes physical.",
      sensory: [
        "Hanging chains groan hard enough to drown out orders.",
        "Open vertical space makes every stumble feel consequential.",
        "Lava far below throws moving light up through the bridge grates."
      ]
    },
    function: "Arrival branches, route pressure, structural collapse, Giant Interference, evacuation, and Hot Exfil.",
    pressure: "If this fails, choices become physically unavailable.",
    opportunities: [
      "Use the Chainways when you need a decision to become movement, risk, separation, or route loss.",
      "Let saved routes become visible advantages during Hot Exfil."
    ],
    dangers: [
      "Every unresolved crisis can become a blocked path here.",
      "Valkyrie rescue logic strains when too many falling people need catching at once."
    ],
    reference: "library/locations/chainways.md",
    tags: [
      "valhalla",
      "ember-root",
      "chainways",
      "traversal",
      "evacuation",
      "location"
    ],
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "location_emberfall_core_furnace",
    name: "The Core Furnace",
    type: "major location / final descent engine",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationRole: "child",
    parentLocation: "location_emberfall_forge_city",
    connectedLocations: [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    adjacentLocations: [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    availableScenes: [
      "scene_emberroot_s03_forge_below_living_core",
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    relatedThreads: [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_no_clean_victories"
    ],
    actorsPresent: [
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    factionsPresent: [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    presentation: {
      establishingShot: "The Core Furnace is less a room than a containment cathedral: chains, regulators, pressure vents, and a living heat below them all, reacting to every mistake made above.",
      approachBeat: "The first Core pulse rolls through your ribs before you reach the platform, and every chain in the chamber tightens like it heard you arrive.",
      vibe: "Sacred containment engine mistaken for the threat.",
      sensory: [
        "Heat arrives in pulses instead of waves.",
        "Chains strain with a sound almost like breath.",
        "System surges move through the chamber before anyone speaks."
      ]
    },
    function: "Forge Below, Core truth, Skarth pressure, Council choice, release variant, and consequence severity.",
    pressure: "The Core is not the bomb. The Core is the thing holding the bomb.",
    opportunities: [
      "Use Core reactions to show that the Core responds to treatment, pressure, and release attempts rather than attacking at random.",
      "Let High Insight turn the chamber from boss arena into containment crisis."
    ],
    dangers: [
      "If the party treats the Core as the villain, their solutions may worsen the system.",
      "Skarth's argument becomes more persuasive the more the party understands what containment costs."
    ],
    reference: "library/locations/core_furnace.md",
    tags: [
      "valhalla",
      "ember-root",
      "core-furnace",
      "forge-below",
      "core",
      "containment",
      "location"
    ],
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "calm_center_investigation"
  }
];
