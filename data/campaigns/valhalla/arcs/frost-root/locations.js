export const locations = [
  {
    id: "location_astral_stairway",
    name: "The Astral Stairway / The Way",
    type: "astral staging space",
    region: "Between afterlives",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    currentState: "Gray, formless, direction without landmarks; identity suppressed to protect souls.",
    presentation: {
      establishingShot: "No sky. No ground. Only direction. Shades drift as unfinished silhouettes while names and faces slip away.",
      vibe: "Disorientation without full panic.",
      sensory: ["Thoughts are difficult to hold.", "Forms are shadowy and incomplete.", "There is movement, but no clear walking or falling."]
    },
    function: "Scene 0 opening space for death, dissolution, and afterlife sorting.",
    pressure: "Conscious identity attracts predators, so the system suppresses clarity.",
    opportunities: ["Let players describe heroic deaths before memory collapses.", "Introduce multiple afterlife shepherds."],
    dangers: ["Over-explaining turns disorientation into confusion."],
    actorsPresent: ["actor_baldur_shepherd_of_the_dead"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: ["scene-0", "afterlife", "astral", "soul-routing"]
  },
  {
    id: "location_valhalla_mead_introduction",
    name: "Valhalla Mead Introduction",
    type: "hub threshold",
    region: "Valhalla",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    currentState: "The first safe-feeling point after the Way, where the party receives Yggdrasilmaed and becomes whole.",
    presentation: {
      establishingShot: "Color returns violently: sky, structure, weight. The world does not fade in; it asserts itself.",
      vibe: "Relief, awe, and the first lie of safety.",
      sensory: ["Mead burns, then settles.", "Bodies remember themselves.", "Names, faces, and purpose return."]
    },
    function: "Restores corporeal identity and introduces the Yggdrasilmaed resource.",
    pressure: "The safety feels complete because Act 1 needs that assumption before later acts break it.",
    actorsPresent: ["actor_sven_keeper_of_the_mead"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: ["scene-0", "valhalla", "mead", "rebirth"]
  },
  {
    id: "location_valhalla_valkyrie_aerie",
    name: "Valkyrie Aerie",
    type: "briefing / deployment space",
    region: "Valhalla",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    currentState: "Aerial drills and first mission briefing before deployment.",
    presentation: {
      establishingShot: "Mounted Valkyries cut through the sky in organized drills before Svinhild lands and turns spectacle into orders.",
      vibe: "Prepared, martial, confident.",
      sensory: ["Wingbeats and command calls.", "Metal, wind, and height.", "A sense of a war machine that has worked for ages."]
    },
    function: "Establishes the Einherjar strike system and operational secrecy.",
    pressure: "The party learns they are needed, but not that the system assigning them is failing.",
    actorsPresent: ["actor_svinhild_valkyrie_commander"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: ["scene-0", "valhalla", "briefing", "deployment"]
  },
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
      vibe: "Stable, but incorrectly so.",
      sensory: ["Pitch-dark timber and iron bands under frost.", "Pine, iron, smoke, and something ancient.", "Snow gathers in spirals that look almost deliberate."]
    },
    function: "Parent overview for the Act 1 settlement cluster, social anchor, battlefield frame, and Root threshold.",
    pressure: "The living unknowingly guard a path between realms while the Root beneath them is being rewritten locally.",
    opportunities: ["Earn trust through defense.", "Learn the town through gate, Sap-Hearth, Root Shrine, and civilians.", "Let players choose where post-siege investigation goes first."],
    dangers: ["Treating this as a normal town under normal undead attack flattens the Act 1 inversion."],
    connectedLocations: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_sap_hearth", "location_skjoldyrs_hollow_root_shrine", "location_skjoldyrs_hollow_outer_field"],
    keyActors: ["actor_jarl_eirik_skjoldrson", "actor_yrsa_root_seer", "actor_torvald_brewmaster", "actor_brinhild_field_captain"],
    reference: "arcs/frost-root/library/act_1/locations/skjoldyrs_hollow.md",
    tags: ["act-1", "frost-root", "skjoldyrs-hollow", "settlement", "root-threshold", "active"]
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
      vibe: "Wrong before dangerous.",
      sensory: ["Snow that does not cover tracks correctly.", "A low crunch in the distance.", "Blue light beneath the snow at triangular points."]
    },
    function: "Phase 0 Drop Skirmish and first proof that the players are interrupting a process.",
    pressure: "Draugr initially ignore players and continue building / marking / placing bodies.",
    opportunities: ["High-perception reveal of the triangle pattern.", "Rogue spotlight through investigation and positioning.", "Choose when to interrupt."],
    dangers: ["Making it a random ambush instead of a process."],
    connectedLocations: ["location_skjoldyrs_hollow_gate_palisade"],
    actorsPresent: ["actor_draugr_unfinished_dead", "actor_skald_frozen_tongue"],
    reference: "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",
    relatedThreads: [
      "thread_draugr_are_unfinished_dead",
      "thread_siege_as_distraction",
      "thread_players_interrupted_a_process"
    ],

    availableScenes: [
      "scene_act1_phase_0_drop_skirmish",
      "scene_act1_ridge_reveal"
    ],

    fireableMoments: [
      {
        id: "moment_outer_field_drag_marks",
        title: "Drag Marks in the Snow",
        type: "investigation",
        trigger: "If players inspect tracks, bodies, crates, or the snow before engaging.",
        compact: "The snow is not covering the tracks correctly.",
        spotlight: {
          title: "The Ground Was Already Wrong",
          readAloud: [
            "The snow should have buried these marks.",
            "It has not.",
            "Drag lines cut through the field in clean, deliberate paths.",
            "The bodies were not dropped here. They were placed."
          ],
          gmPurpose: "Show that the party interrupted a process, not a random ambush.",
          followUp: "Point toward the triangle pattern or the gate beyond the ridge."
        },
        tags: ["investigation", "drop-zone", "draugr", "process"]
      }
    ],
    tags: ["act-1", "drop-zone", "outer-field", "phase-0", "active"]
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
      vibe: "A line breaking slowly under impossible pressure.",
      sensory: ["Horn calls, splintering timber, blue-low braziers.", "Frost spreading faster than weather allows.", "The dull rhythm of brutes striking the gate."]
    },
    function: "Primary siege location for Phase 1 and the Runecaller control turn.",
    pressure: "Hold the gate, protect civilians, disable nodes, stop Skald rhythm, and prepare for something worse.",
    opportunities: ["Fortify the gate.", "Save defenders or civilians.", "Choose whether to hold the wall, breach, or field."],
    dangers: ["Gate pressure should not become a simple kill-all encounter."],
    actorsPresent: ["actor_jarl_eirik_skjoldrson", "actor_brinhild_field_captain", "actor_frostwake_gate_captain", "actor_frostbound_brute", "actor_draugr_unfinished_dead"],
    eventTable: "table_gate_status_options",
    reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",
    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_draugr_are_unfinished_dead",
      "thread_rift_is_symptom",
      "thread_runecaller_directs_battle"
    ],

    availableScenes: [
      "scene_act1_phase_1_siege",
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_phase_3_rift_opens",
      "scene_act1_phase_4_heroic_recovery"
    ],

    fireableMoments: [
      {
        id: "moment_jarl_line_anchor",
        title: "Jarl Anchors the Line",
        type: "battlefield-dialogue",
        trigger: "If the gate is cracking, defenders are wavering, or the party needs the mortal stakes centered.",
        speaker: "actor_jarl_eirik_skjoldrson",
        compact: "Jarl Eirik plants his shield and refuses to move.",
        spotlight: {
          title: "The Wall That Walks",
          readAloud: [
            "The Jarl plants his shield so hard the frozen mud cracks around it.",
            "The line bends around him, but it does not break.",
            "“We don't win this—we survive it!”"
          ],
          gmPurpose: "Reinforce Eirik as the mortal line anchor, not the Gate Captain.",
          followUp: "Let players choose whether to reinforce him, save civilians, disable nodes, or strike the Skald."
        },
        tags: ["battlefield", "jarl", "line-anchor", "gate"]
      },
      {
        id: "moment_brinhild_lane_hold",
        title: "Brinhild Holds a Lane",
        type: "ally-spotlight",
        trigger: "If players need to see Valkyrie scale without her solving the encounter.",
        speaker: "actor_brinhild_field_captain",
        compact: "Brinhild takes the hit, plants her shield, and buys a lane.",
        spotlight: {
          title: "Storm in Human Shape",
          readAloud: [
            "Brinhild takes the impact on her shield and skids backward three full steps.",
            "Then she stops.",
            "Not because the force is gone.",
            "Because she refuses to give it another inch."
          ],
          gmPurpose: "Show elite support while preserving player agency.",
          followUp: "Use the opened lane to invite a player decision."
        },
        tags: ["battlefield", "brinhild", "valkyrie", "support"]
      }
    ],
    tags: ["act-1", "gate", "palisade", "siege", "phase-1", "active"]
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
      vibe: "Safe, warm, and slightly unsettled.",
      sensory: ["Firelight against cold stone.", "Slow amber-gold sap drip.", "Smoke, strong ale, and ancient resin."]
    },
    function: "Social heart of the town, post-siege decompression point, and sap-flow clue source.",
    pressure: "The heart of the town does not beat; it seeps, and the seep is changing.",
    opportunities: ["Torvald clue delivery.", "Yrsa root insight.", "Mead / sap as emotional and practical stake."],
    dangers: ["Overturning the safe warmth too quickly; this should be comfort with one wrong note."],
    actorsPresent: ["actor_torvald_brewmaster", "actor_yrsa_root_seer", "actor_jarl_eirik_skjoldrson"],
    reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",
    relatedThreads: [
      "thread_sap_flow_weakening",
      "thread_root_rewritten",
      "thread_death_not_resolving"
    ],

    availableScenes: [
      "scene_act1_post_siege_aftermath",
      "scene_act1_sap_hearth_decompression",
      "scene_act1_root_shrine_hook"
    ],

    fireableMoments: [
      {
        id: "moment_torvald_sap_flow",
        title: "Torvald Checks the Sap",
        type: "dialogue",
        trigger: "If players ask about mead, sap, supplies, the hall, or why Torvald seems tense.",
        speaker: "actor_torvald_brewmaster",
        compact: "Torvald checks the basin twice. “Used to flow faster.”",
        spotlight: {
          title: "Torvald Sap Clue",
          readAloud: [
            "Torvald's usual volume drops for the first time.",
            "He looks toward the basin where the golden sap gathers.",
            "“Used to flow faster.”",
            "A beat.",
            "“Still gives enough. For now.”"
          ],
          gmPurpose: "Seed sap weakening without explaining the Root.",
          followUp: "Can point toward Yrsa or the Root Shrine."
        },
        tags: ["dialogue", "torvald", "sap-flow", "clue"]
      },
      {
        id: "moment_yrsa_you_came_down_wrong",
        title: "Yrsa Names the Wrongness",
        type: "dialogue",
        trigger: "If players speak with Yrsa, ask what she sensed, or mention death/Valhalla/the drop.",
        speaker: "actor_yrsa_root_seer",
        compact: "Yrsa says the party came down wrong.",
        spotlight: {
          title: "You Came Down Wrong",
          readAloud: [
            "Yrsa turns her veiled face toward you before you finish speaking.",
            "“You came down wrong...”",
            "Her resin-stained fingers tighten.",
            "“Not like the others.”"
          ],
          gmPurpose: "Foreshadow the party as system anomalies without explaining the campaign truth.",
          followUp: "She can point them toward the Root Shrine, but should not solve it."
        },
        tags: ["dialogue", "yrsa", "foreshadow", "anomaly"]
      }
    ],
    tags: ["act-1", "sap-hearth", "mead-hall", "root", "social", "active"]
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
      vibe: "Too late, too clean, too intentional.",
      sensory: ["Air too still around the open shrine.", "Gold light threaded with unstable shifting tones.", "Old geometric runes beside newer jagged marks that are already complete."]
    },
    function: "Act 1 realization pivot: the siege was containment/distraction, and the Root was taught or redirected.",
    pressure: "Do not give them something to fight here. Give them something to realize.",
    opportunities: ["Study the pattern.", "Stabilize aftershocks.", "Gain Root Pattern Recognition for future node interactions."],
    dangers: ["Calling it simply corrupted or failed undermines the inversion."],
    connectedLocations: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_sap_hearth"],
    reference: "arcs/frost-root/library/act_1/locations/root_shrine_too_late.md",
    relatedThreads: [
      "thread_root_rewritten",
      "thread_siege_as_distraction",
      "thread_rift_is_symptom",
      "thread_death_not_resolving"
    ],

    availableScenes: [
      "scene_act1_root_shrine_too_late",
      "scene_act1_root_pattern_recognition"
    ],

    fireableMoments: [
      {
        id: "moment_root_shrine_already_done",
        title: "The Ritual Already Finished",
        type: "realization",
        trigger: "When players inspect the shrine and expect an active fight, ritual, or corruption source.",
        compact: "The shrine was not breached. It was allowed.",
        spotlight: {
          title: "Too Late",
          readAloud: [
            "There are no fresh tracks.",
            "No broken threshold.",
            "No bodies piled around the shrine.",
            "The runes are not forming.",
            "They are complete."
          ],
          gmPurpose: "Land the Act 1 inversion: the siege was distraction/containment, and the process already finished.",
          followUp: "Offer study, stabilize, or partial cleansing options. Do not create a boss fight here."
        },
        tags: ["realization", "root-shrine", "too-late", "act-1"]
      }
    ],
    tags: ["act-1", "root-shrine", "realization", "too-late", "active"]
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
      vibe: "The moment chaos gets directed.",
      sensory: ["Wind dying all at once.", "Light leaking upward from ground fractures.", "Snow lifting instead of falling."]
    },
    function: "Phase 2 Runecaller placement and Phase 3 Rift pressure site.",
    pressure: "The battlefield stops belonging to the defenders and begins answering to the Runecaller.",
    actorsPresent: ["actor_runecaller_the_director"],
    reference: "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md",
    tags: ["act-1", "crossroads", "runecaller", "rift", "phase-2", "phase-3"]
  }
];
