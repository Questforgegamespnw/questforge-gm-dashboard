export const locations = [
  {
    id: "location_skjoldyrs_hollow",
    name: "Skjoldyr's Hollow",
    type: "frontier settlement / cosmic pressure valve",
    region: "Frost Root access point",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "parent",

    currentState: "Under siege, outwardly a border settlement, secretly guarding a threshold it does not understand.",

    escalation: {
      stable: "A hard settlement in a natural depression, inward-leaning and watchful.",
      strain: "Snow spirals wrong, sap flow weakens, and defenders describe attacks that do not behave like raids.",
      fracture: "Gate pressure, nodes, undead inside the line, and post-battle symptoms that do not resolve.",
      break: "The settlement becomes a full realm-breach pressure site if left unsupported."
    },

    presentation: {
      establishingShot: "A settlement built in a hollow, dark timber walls bowed inward as if the land itself leans toward the root below.",
      approachBeat: "From above or at the ridge line, the settlement reads like a shield tucked into the land. Up close, the shape feels less defensive and more like a lid pressed over something breathing beneath it.",
      vibe: "Stable, but incorrectly so.",
      sensory: [
        "Pitch-dark timber and iron bands under frost.",
        "Pine, iron, smoke, and something ancient.",
        "Snow gathers in spirals that look almost deliberate."
      ]
    },

    function: "Parent overview for the Act 1 settlement cluster, social anchor, battlefield frame, and Root threshold.",

    connectedLocations: [
      "location_skjoldyrs_hollow_outer_field",
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_sap_hearth",
      "location_skjoldyrs_hollow_root_shrine",
      "location_skjoldyrs_hollow_crossroads"
    ],

    keyActors: [
      "actor_jarl_eirik_skjoldrson",
      "actor_yrsa_root_seer",
      "actor_torvald_brewmaster",
      "actor_brinhild_field_captain"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    reference: "arcs/frost-root/library/act_1/locations/skjoldyrs_hollow.md",

    tags: [
      "act-1",
      "frost-root",
      "skjoldyrs-hollow",
      "settlement",
      "root-threshold",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_outer_field",
    name: "Skjoldyr's Hollow Outer Field / Drop Zone",
    type: "battlefield approach",
    region: "Skjoldyr's Hollow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow",

    currentState: "The Bifrost drop site outside the town, already marked by drag lines and corpse placement.",

    presentation: {
      establishingShot: "Snow erupts around the party's impact crater. The ground is not untouched: drag marks, broken crates, and bodies placed too deliberately.",
      approachBeat: "Before the party can orient, the field refuses to behave like a battlefield. The dead keep working, the snow preserves old decisions, and the ridge beyond carries the sound of a larger fight.",
      vibe: "Wrong before dangerous.",
      sensory: [
        "Snow that does not cover tracks correctly.",
        "A low crunch in the distance.",
        "Blue light beneath the snow at triangular points."
      ]
    },

    function: "Phase 0 Drop Skirmish and first proof that the players are interrupting a process.",

    connectedLocations: [
      "location_skjoldyrs_hollow_gate_palisade"
    ],

    actorsPresent: [
      "actor_draugr_unfinished_dead",
      "actor_skald_frozen_tongue"
    ],

    relatedThreads: [
      "thread_draugr_are_unfinished_dead",
      "thread_siege_as_distraction"
    ],

    availableScenes: [
      "scene_act1_phase_0_drop_skirmish",
      "scene_act1_ridge_reveal"
    ],

    reference: "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",

    tags: [
      "act-1",
      "drop-zone",
      "outer-field",
      "phase-0",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_gate_palisade",
    name: "The Gate & Palisade of Skjoldyr's Hollow",
    type: "defensive choke point / siege line",
    region: "Skjoldyr's Hollow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow",

    currentState: "Under direct siege pressure; gate state may be intact, cracking, or breached.",

    escalation: {
      stable: "A massive timber-and-iron gate built to endure, not welcome.",
      strain: "Frost clings to hinges against the wind; impact marks show repeated assaults.",
      fracture: "Partial breach lanes open and civilians become battlefield pressure.",
      break: "Gate collapses and the fight splits into two fronts."
    },

    presentation: {
      establishingShot: "The ridge breaks and below you: war. The gate shudders under impact while defenders are already losing without routing.",
      approachBeat: "The closer the party gets, the less the gate looks like a wall and the more it looks like a choice: hold the line, save the scattered, break the rhythm, or chase the thing directing it.",
      vibe: "A line breaking slowly under impossible pressure.",
      sensory: [
        "Horn calls, splintering timber, blue-low braziers.",
        "Frost spreading faster than weather allows.",
        "The dull rhythm of brutes striking the gate."
      ]
    },

    function: "Primary siege location for Phase 1 and the Runecaller control turn.",

    connectedLocations: [
      "location_skjoldyrs_hollow_outer_field",
      "location_skjoldyrs_hollow_crossroads",
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    actorsPresent: [
      "actor_jarl_eirik_skjoldrson",
      "actor_brinhild_field_captain",
      "actor_frostwake_gate_captain",
      "actor_frostroot_gate_defender_cluster",
      "actor_frostbound_brute",
      "actor_draugr_unfinished_dead"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_draugr_are_unfinished_dead",
      "thread_runecaller_directs_battle",
      "thread_uneasy_success"
    ],

    availableScenes: [
      "scene_act1_phase_1_siege",
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_phase_3_rift_opens",
      "scene_act1_phase_4_heroic_recovery"
    ],

    reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",

    tags: [
      "act-1",
      "gate",
      "palisade",
      "siege",
      "phase-1",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_sap_hearth",
    name: "The Sap-Hearth",
    type: "mead hall / root tap chamber",
    region: "Skjoldyr's Hollow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow",

    currentState: "Warm, crowded, quiet after the battle; sap flow is slower and subtly altered.",

    escalation: {
      stable: "Warm golden light, sacred brewing, and communal shelter around the root fragment.",
      strain: "Sap is less potent and flow slows enough for Torvald to hide worry.",
      fracture: "Sap discolors, overheats, or behaves inconsistently.",
      break: "Sap becomes harmful or unusable, collapsing morale and divine supply confidence."
    },

    presentation: {
      establishingShot: "Warm light spills from a hall built around a living root fragment, golden sap dripping into a carved basin.",
      approachBeat: "After the battlefield, the warmth feels almost wrong. People lower their voices around the root basin, not because they are calm, but because everyone can hear the sap dripping too slowly.",
      vibe: "Safe, warm, and slightly unsettled.",
      sensory: [
        "Firelight against cold stone.",
        "Slow amber-gold sap drip.",
        "Smoke, strong ale, and ancient resin."
      ]
    },

    function: "Social heart of the town, post-siege decompression point, and sap-flow clue source.",

    connectedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    actorsPresent: [
      "actor_torvald_brewmaster",
      "actor_yrsa_root_seer",
      "actor_jarl_eirik_skjoldrson"
    ],

    relatedThreads: [
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    availableScenes: [
      "scene_act1_post_siege_aftermath"
    ],

    reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",

    tags: [
      "act-1",
      "sap-hearth",
      "mead-hall",
      "root",
      "social",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_sap_hearth_cellar",
    name: "Sap-Hearth Cellar / Tapworks",
    type: "cellar / sap-line maintenance chamber",
    region: "Skjoldyr's Hollow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow_sap_hearth",

    currentState: "The hidden working level beneath the Sap-Hearth, where root-sap infusions feed the hall's kegs and serving lines.",

    presentation: {
      establishingShot: "Below the warmth and revelry of the hall, narrow cellar steps descend into pipework, keg racks, root-fed taps, and amber-stained stone.",
      approachBeat: "The celebration above dulls with each step down, replaced by dripping lines, hissing valves, and Torvald's voice cursing somewhere in the dark.",
      vibe: "Practical, cramped, and suddenly alarming.",
      sensory: [
        "Warm copper pipework sweating in the cold cellar air.",
        "Kegs marked by batch-runes and old knife scratches.",
        "Amber sap in glass inspection bulbs, one line darkening toward black.",
        "The smell of resin, ale, wet stone, and something burnt-metal underneath."
      ]
    },

    function: "Hidden service layer for the Sap-Hearth and grounded reveal site for blackened sap contamination after the victory celebration.",

    connectedLocations: [
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    actorsPresent: [
      "actor_torvald_brewmaster"
    ],

    relatedThreads: [
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    availableScenes: [
      "scene_act1_post_siege_aftermath"
    ],

    relatedMoments: [
      "moment_torvald_sap_flow"
    ],

    reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",

    tags: [
      "act-1",
      "sap-hearth",
      "cellar",
      "tapworks",
      "sap-flow",
      "blackened-sap",
      "aftermath",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_root_shrine",
    name: "The Root Shrine",
    type: "root anchor / investigation site",
    region: "Skjoldyr's Hollow outskirts",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow",

    currentState: "Too quiet. The process is already completed or redirected before the party arrives.",

    escalation: {
      stable: "Ancient runic stabilization circle around a massive exposed root.",
      strain: "Gold light flickers, old runes crack, and new jagged marks are complete rather than forming.",
      fracture: "Aftershock pulses distort sound, movement, and light.",
      break: "The Root's learned behavior alters future nodes and realm pressure."
    },

    presentation: {
      establishingShot: "The path is untouched. No tracks, no struggle, no sign anything fought its way here. The shrine stands open, not broken—allowed.",
      approachBeat: "The path gives the players no resistance. No ambush. No bodies. No tracks. Each missing sign makes the shrine feel less safe, because nothing here looks interrupted.",
      vibe: "Too late, too clean, too intentional.",
      sensory: [
        "Air too still around the open shrine.",
        "Gold light threaded with unstable shifting tones.",
        "Old geometric runes beside newer jagged marks that are already complete."
      ]
    },

    function: "Act 1 realization pivot: the siege was containment/distraction, and the Root was taught or redirected.",

    connectedLocations: [
      "location_skjoldyrs_hollow",
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    actorsPresent: [
      "actor_yrsa_root_seer"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    availableScenes: [
      "scene_act1_root_shrine_too_late"
    ],

    relatedReferences: [
      "reference_root_shrine_response_options",
      "reference_frostroot_root_truths_and_language"
    ],

    reference: "arcs/frost-root/library/act_1/locations/root_shrine_too_late.md",

    tags: [
      "act-1",
      "root-shrine",
      "realization",
      "too-late",
      "active"
    ]
  },

  {
    id: "location_skjoldyrs_hollow_crossroads",
    name: "Skjoldyr's Hollow Crossroads / Rift Scar",
    type: "battlefield center / reality wound site",
    region: "Skjoldyr's Hollow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    locationRole: "child",
    parentLocation: "location_skjoldyrs_hollow",

    currentState: "The best Runecaller entry point and Rift placement site during the siege.",

    presentation: {
      establishingShot: "A road intersection inside or just beyond the gate where battlefield movement collapses into one terrible center.",
      approachBeat: "Every route through the fight seems to bend toward this point. Defenders, dead, snow, and sound all begin moving as if the battlefield has found a center.",
      vibe: "The moment chaos gets directed.",
      sensory: [
        "Wind dying all at once.",
        "Light leaking upward from ground fractures.",
        "Snow lifting instead of falling."
      ]
    },

    function: "Phase 2 Runecaller placement and Phase 3 Rift pressure site.",

    connectedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    actorsPresent: [
      "actor_runecaller_the_director",
      "object_frostroot_rune_node",
      "object_frostroot_rift_core"
    ],

    relatedThreads: [
      "thread_runecaller_directs_battle",
      "thread_draugr_are_unfinished_dead",
      "thread_uneasy_success"
    ],

    availableScenes: [
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_phase_3_rift_opens",
      "scene_act1_phase_4_heroic_recovery"
    ],

    reference: "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md",

    tags: [
      "act-1",
      "crossroads",
      "runecaller",
      "rift",
      "phase-2",
      "phase-3"
    ]
  }
];