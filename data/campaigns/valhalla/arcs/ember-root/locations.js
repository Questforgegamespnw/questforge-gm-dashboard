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
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_control_vs_survival",
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
      establishingShot: "A massive vertical forge-city burns beneath the party: chains, heat haze, falling sparks, shouted orders, and a city-body trying to keep breathing through systems that no longer agree.",
      approachBeat: "The Bifrost spits you into heat and shouting; a nearby span bucks under fleeing feet while wings cut through smoke below.",
      vibe: "A vertical industrial city breathing wrong under impossible pressure.",
      sensory: [
        "Heat is constant and comes from every direction.",
        "Movement is vertical: elevators, chains, gantries, drops, and bridges all fighting gravity.",
        "Every district feels connected enough that one failure can drag another down with it.",
        "The city pulses in uneven intervals, like something vast has lost its rhythm."
      ]
    },
    function: "Parent camera for the whole Act 2 field: arrival, citywide collapse, faction pressure, city-breath truth, and final escape consequences.",
    pressure: "Players think the city is under attack. Reality: the city is breathing wrong because its survival system is morally and structurally overloaded.",
    opportunities: [
      "Use this parent location when the table needs the whole city in view rather than one district.",
      "Select a child district when the party chooses where to put their hands next.",
      "Let citywide symptoms echo whatever the party has learned locally."
    ],
    dangers: [
      "Broad city links can make every crisis feel active at once; move to a child location when a specific scene starts.",
      "The citywide truth should be visible but not over-explained before the party earns it.",
      "Do not let the city become generic chaos; every failure should point toward breath, pressure, routes, authority, or containment."
    ],
    skillGates: [
      {
        id: "gate_forge_city_breath_pattern",
        skills: ["perception", "insight", "survival"],
        tier: "basic",
        visible: "The city does not shake randomly. Its failures pulse in waves across districts.",
        reveal: "The disasters are connected through a shared pressure rhythm, like a body losing breath coordination.",
        consequence: "The party can start treating the city as one linked system instead of separate crises.",
        tags: ["city-breath", "system-truth", "pressure"]
      },
      {
        id: "gate_forge_city_social_layering",
        skills: ["history", "society", "insight"],
        tier: "basic",
        visible: "Higher routes are guarded and reinforced. Lower routes are crowded, improvised, and already failing.",
        reveal: "The city’s physical structure mirrors its caste order: safety, authority, and evacuation capacity flow downward last.",
        consequence: "The party can identify that survival choices are also political choices.",
        tags: ["caste", "authority", "evacuation"]
      }
    ],
    reference: "library/locations/emberfall_forge_city.md",
    tags: [
      "valhalla",
      "ember-root",
      "emberfall",
      "forge-city",
      "hub",
      "city-breath",
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
      "scene_emberroot_confrontation_crown_preservation_revealed",
      "scene_emberroot_giant_coordination_break_right_lines",
      "scene_emberroot_giant_coordination_break_right_lines"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_consent_transition"
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
        "The lower-city noise reaches this place as a dull, embarrassing tremor.",
        "Every map here is official, clean, and missing the routes people actually use to survive."
      ]
    },
    function: "Command, refuge, managed panic, Council pressure, legitimacy collapse, and caste arguments made visible.",
    pressure: "Everyone here is trying very hard not to admit that practical survival is slipping away from formal authority.",
    opportunities: [
      "Put Durgrim, Kaldra, and Bruni in visible disagreement instead of delivering a clean briefing.",
      "Use this location to show how command language hides personhood and delays evacuation.",
      "Let the High Forge become less useful as Ashbound routes, Ironhand diagnosis, and giant deconstruction become necessary."
    ],
    dangers: [
      "Authority tries to turn crisis response into obedience.",
      "If the party accepts the command frame too easily, worker costs become easier to ignore.",
      "Forge Lord language can make a true danger sound like a reason to preserve the old order unchanged."
    ],
    skillGates: [
      {
        id: "gate_high_forge_command_language",
        skills: ["insight", "society", "history"],
        tier: "basic",
        visible: "Command staff keep using terms like capacity, non-civic flame, authorized routes, and acceptable loss.",
        reveal: "Forge Lord authority depends on classification: who counts as a citizen, what counts as life, and which routes count as real.",
        consequence: "The party can challenge command language directly or bypass it with practical survival authority.",
        tags: ["forge-lords", "classification", "personhood-denial"]
      },
      {
        id: "gate_high_forge_maps_missing_routes",
        skills: ["investigation", "survival", "society"],
        tier: "trained",
        visible: "Official evacuation maps are clean but incomplete around lower maintenance paths and ash drains.",
        reveal: "The High Forge does not understand the survival network beneath it.",
        consequence: "The party can seek Ashbound guidance instead of relying on official routes.",
        tags: ["ashbound", "hidden-routes", "evacuation"]
      }
    ],
    reference: "library/locations/high_forge.md",
    tags: [
      "valhalla",
      "ember-root",
      "high-forge",
      "council",
      "control",
      "authority-collapse",
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
      "scene_emberroot_split_politics_and_lungs",
      "scene_emberroot_core_furnace_descent"
    ],
    relatedThreads: [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_root_heat_siphon",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_control_vs_survival"
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
      establishingShot: "The Midworks turn Emberfall from fortress into body-machine: rune panels, pipe ribs, inspection gantries, pressure lungs, and sealed channels all flashing contradictory warnings.",
      approachBeat: "A pipe vents hard enough to shove heat across the walkway while two engineers point at different glowing readings and demand opposite fixes.",
      vibe: "Truth leaking through technical failure.",
      sensory: [
        "Sparks and flickering rune arrays stutter out of rhythm.",
        "Pipes vent heat unpredictably through safety seams.",
        "Diagnostics contradict one another often enough that trained engineers start arguing in public.",
        "Some gauges climb when nearby vents open, as if one chamber’s relief is another chamber’s burden."
      ]
    },
    function: "System Failure investigation, breath diagnosis, pressure displacement clues, root overflow hints, and the technical route toward controlled withdrawal.",
    pressure: "Useful information is wrapped in disagreement, and every local fix risks pushing harm somewhere else.",
    opportunities: [
      "Reward players who ask what the readings mean instead of who caused the attack.",
      "Let technical success clarify the shape of the failure without solving the whole arc.",
      "Use Kaldra or Ironhand crews to translate panic into playable sequence: vent, redirect, cool, evacuate, release, then seal."
    ],
    dangers: [
      "Misread evidence can make the Lower Works or Root look like the enemy.",
      "Engineers may keep trying to fix visible symptoms instead of naming the deeper moral system.",
      "A technically correct seal may worsen pressure below."
    ],
    skillGates: [
      {
        id: "gate_midworks_breath_coordination",
        skills: ["engineering", "investigation", "smithing", "tools"],
        tier: "basic",
        visible: "Readings disagree: intake is high, venting lags, and pressure spikes after emergency seals.",
        reveal: "The city is not failing in one place. It is losing breath coordination.",
        consequence: "The party can stop looking for one culprit and start sequencing pressure relief.",
        tags: ["city-breath", "diagnosis", "pressure"]
      },
      {
        id: "gate_midworks_shutoff_displacement",
        skills: ["engineering", "arcana", "investigation"],
        tier: "trained",
        visible: "Every emergency shutoff improves one local panel while worsening a deeper line.",
        reveal: "Sealing does not remove danger; it transfers breath and heat somewhere less visible.",
        consequence: "The party can avoid fixes that save command areas by overloading lower chambers.",
        tags: ["shutoffs", "caste", "lower-works"]
      },
      {
        id: "gate_midworks_root_overflow",
        skills: ["arcana", "nature", "religion", "engineering"],
        tier: "high",
        visible: "Some pressure spikes vanish into root-adjacent channels that are not part of normal city design.",
        reveal: "The World Tree root is absorbing overflow. It is burdened, not causing the crisis.",
        consequence: "The party can correct false blame and understand the mythic cost of delay.",
        tags: ["world-tree", "root-siphon", "mythic-cost"]
      }
    ],
    reference: "library/locations/midworks.md",
    tags: [
      "valhalla",
      "ember-root",
      "midworks",
      "investigation",
      "systems",
      "city-breath",
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
    type: "district / labor core / buried survival layer",
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
      "scene_emberroot_split_politics_and_lungs",
      "scene_emberroot_s05_unsavable"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_root_heat_siphon",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse"
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
      establishingShot: "The Lower Furnaces are packed with labor platforms, heat-blasted shelters, soot-black channels, old ash drains, and people who have been living beside the truth longer than anyone above wanted to admit.",
      approachBeat: "A worker reaches through the smoke for help as a furnace gate screams against its brackets and the floor pulses under your boots like something below is trying to breathe.",
      vibe: "The human cost that was visible the whole time.",
      sensory: [
        "Low visibility and thick smoke turn every shout into a direction marker.",
        "Extreme heat sits low and heavy, like a hand over the mouth.",
        "Subtle pulses move up from below before machinery reacts.",
        "People know routes by touch, scar, and habit rather than official signs."
      ]
    },
    function: "Root resonance, civilian crises, Ashbound routes, worker trust, lived fire truth, and moral pressure made physical.",
    pressure: "The truth was always audible here; the upper city just learned not to listen.",
    opportunities: [
      "Let workers reveal what formal command reports hid or dismissed.",
      "Use Bruni and the Ashbound to make survival a legitimate political argument.",
      "Let hidden routes become real evacuation capacity if the party trusts lower-city knowledge."
    ],
    dangers: [
      "Saving infrastructure can feel like abandoning people here.",
      "If the party treats this as background suffering, later losses should feel earned.",
      "The lower city may distrust any plan that sounds like sealing, holding, or waiting."
    ],
    skillGates: [
      {
        id: "gate_lower_furnaces_living_walls",
        skills: ["perception", "insight", "arcana", "nature"],
        tier: "basic",
        visible: "The heat in the walls does not only surge; it recoils, pauses, and answers some sounds differently than others.",
        reveal: "The fire behaves like living response, not simple fuel or hazard.",
        consequence: "The party can begin questioning official descriptions of bound fire.",
        tags: ["living-fire", "emberlings", "partial-reveal"]
      },
      {
        id: "gate_lower_furnaces_hidden_routes",
        skills: ["survival", "investigation", "society"],
        tier: "basic",
        visible: "Workers move toward crawlways, ash drains, and maintenance cuts that do not appear on official maps.",
        reveal: "Ashbound survival routes can bypass blocked lifts and command checkpoints.",
        consequence: "The party can convert local trust into evacuation options.",
        tags: ["ashbound", "hidden-routes", "evacuation"]
      },
      {
        id: "gate_lower_furnaces_root_burden",
        skills: ["nature", "religion", "arcana"],
        tier: "trained",
        visible: "The deepest pulses feel less like corruption and more like heat being pulled somewhere it does not belong.",
        reveal: "The root is absorbing overflow. It is being used as an emergency lung.",
        consequence: "The party can distinguish root burden from root blame.",
        tags: ["world-tree", "root-siphon", "mythic-cost"]
      }
    ],
    reference: "library/locations/lower_furnaces.md",
    tags: [
      "valhalla",
      "ember-root",
      "lower-furnaces",
      "workers",
      "root-resonance",
      "ashbound",
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
    type: "district / traversal network / evacuation spine",
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
      "scene_emberroot_giant_coordination_break_right_lines",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_control_vs_survival"
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
      establishingShot: "The Chainways hang across Emberfall in suspended routes, swaying platforms, lift chains, evacuation spans, and open drops where every belief becomes a question of who can move.",
      approachBeat: "The platform under you sways before anyone speaks; someone on the next span slips, and every chain above answers at once.",
      vibe: "Every decision becomes physical.",
      sensory: [
        "Hanging chains groan hard enough to drown out orders.",
        "Open vertical space makes every stumble feel consequential.",
        "Lava far below throws moving light up through the bridge grates.",
        "Crowds, guards, workers, giants, and Valkyries all need the same impossible space."
      ]
    },
    function: "Arrival branches, route pressure, structural collapse, controlled deconstruction, evacuation, Valkyrie strain, and Hot Exfil.",
    pressure: "If this fails, choices become physically unavailable.",
    opportunities: [
      "Use the Chainways when you need a decision to become movement, risk, separation, or route loss.",
      "Let saved routes become visible advantages during Hot Exfil.",
      "Let giant force break blocked stone into routes if the party has made release and evacuation credible."
    ],
    dangers: [
      "Every unresolved crisis can become a blocked path here.",
      "Valkyrie rescue logic strains when too many falling people need catching at once.",
      "Command priority, cargo, and hierarchy can choke evacuation unless the party intervenes."
    ],
    skillGates: [
      {
        id: "gate_chainways_load_priority",
        skills: ["perception", "survival", "leadership"],
        tier: "basic",
        visible: "The main spans can carry more people if cargo, engines, and command escorts are cut loose.",
        reveal: "Evacuation capacity is being consumed by hierarchy and property.",
        consequence: "The party can create immediate movement capacity by choosing people over things.",
        tags: ["evacuation", "movement", "control-vs-survival"]
      },
      {
        id: "gate_chainways_giant_demolition_path",
        skills: ["insight", "engineering", "giant-lore"],
        tier: "trained",
        visible: "Some giant strikes are not aimed at people or bridges, but at locked supports and blocked stone.",
        reveal: "Giant force could open terrifying routes if coordinated instead of merely opposed.",
        consequence: "The party can convert a containment break into controlled deconstruction.",
        tags: ["fire-giants", "safe-deconstruction", "routes"]
      }
    ],
    reference: "library/locations/chainways.md",
    tags: [
      "valhalla",
      "ember-root",
      "chainways",
      "traversal",
      "evacuation",
      "safe-deconstruction",
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
    name: "The Lower Works / Core Furnace",
    type: "major location / breathing life-support chamber / final descent",
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
      "scene_emberroot_lower_works_controlled_decommission",
      "scene_emberroot_giant_coordination_break_right_lines",
      "scene_emberroot_confrontation_crown_preservation_revealed",
      "scene_emberroot_giant_coordination_break_right_lines",
      "scene_emberroot_giant_coordination_break_right_lines",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    relatedThreads: [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_stolen_emberlings",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition",
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
      establishingShot: "The Lower Works are less a room than a breathing containment cathedral: chains, regulators, pressure vents, cage-locks, and living heat moving through channels that were never merely machinery.",
      approachBeat: "The first breath-cycle rolls through your ribs before you reach the platform; every chain tightens, every vent stutters, and the fire below reacts like it heard you arrive.",
      vibe: "A life-support lung built from captivity.",
      sensory: [
        "Heat arrives in pulses instead of waves.",
        "Chains strain with a sound almost like breath.",
        "Pressure vents exhale late, then drag heat backward through the wrong channels.",
        "The fire recoils from some commands and leans toward others.",
        "Every stabilizing mechanism looks uncomfortably like a restraint."
      ]
    },
    function: "Forge Below, city-breath truth, emberling reveal, Skarth pressure, controlled deconstruction, Council choice, and consequence severity.",
    pressure: "This place keeps Emberfall alive by making bound fire breathe for it.",
    opportunities: [
      "Use chamber reactions to show that the system responds to treatment, pressure, speech, and release attempts.",
      "Let High Insight turn the chamber from boss arena into containment/life-support crisis.",
      "Make Kaldra, Skarth, and Bruni all partially right here.",
      "Let controlled withdrawal become physically imaginable: vent, redirect, cool, evacuate, release, then seal."
    ],
    dangers: [
      "If the party treats this place as the villain, their solutions may worsen the city’s breath state.",
      "If the party preserves it unchanged, they preserve the atrocity.",
      "If the party breaks the wrong housing too quickly, civilians die before liberation has meaning.",
      "Skarth’s argument becomes more persuasive the more the party understands what containment costs."
    ],
    skillGates: [
      {
        id: "gate_lower_works_life_support_lung",
        skills: ["engineering", "arcana", "investigation"],
        tier: "basic",
        visible: "The chamber intakes, compresses, vents, and redirects heat in repeating breath-cycles.",
        reveal: "This is not a single Core switch. It is a thermal life-support lung for the city.",
        consequence: "The party understands abrupt shutdown as mass-death risk, not clean justice.",
        tags: ["city-breath", "life-support", "lower-works"]
      },
      {
        id: "gate_lower_works_living_fire_response",
        skills: ["arcana", "nature", "religion", "insight"],
        tier: "trained",
        visible: "The fire recoils from restraints, gathers near giant speech, and resists some commands like a frightened living thing.",
        reveal: "The bound fire is alive and responsive. Official language describing it as fuel or unstable matter is false.",
        consequence: "The party can confront personhood denial before Skarth names the full emberling truth.",
        tags: ["living-fire", "personhood", "fire-is-people"]
      },
      {
        id: "gate_lower_works_emberlings_truth",
        skills: ["giant-lore", "religion", "arcana", "nature"],
        tier: "high",
        visible: "The bound fire does not behave like adult giants or ordinary elementals. It behaves like unfinished, arrested becoming.",
        reveal: "The bound fires are emberlings: immature fire-giant lifeforms captured before personhood could fully form.",
        consequence: "The moral frame changes from exploitation to prevented personhood.",
        tags: ["emberlings", "major-reveal", "fire-giants"]
      },
      {
        id: "gate_lower_works_controlled_withdrawal",
        skills: ["engineering", "leadership", "insight", "persuasion"],
        tier: "trained",
        visible: "Some housings can be vented before they are broken; some routes can clear before pressure reverses.",
        reveal: "Destruction can become controlled deconstruction if Ironhand sequencing, Ashbound evacuation, Giant force, and Valkyrie extraction align.",
        consequence: "The party can pursue controlled withdrawal instead of reinforcement or reckless release.",
        tags: ["safe-deconstruction", "controlled-withdrawal", "consent-transition"]
      }
    ],
    reference: "library/locations/core_furnace.md",
    tags: [
      "valhalla",
      "ember-root",
      "lower-works",
      "core-furnace",
      "forge-below",
      "city-breath",
      "emberlings",
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