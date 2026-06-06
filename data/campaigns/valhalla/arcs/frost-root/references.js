export const references = [
  {
    id: "reference_frost_root_act1_running_principles",
    label: "Act 1 Running Principles",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "procedure",
    summary: "Act 1 is a controlled success story with a stability illusion underneath.",
    details: [
      "Players should feel powerful, effective, and needed.",
      "The system is already breaking, but never explain Layer 3 in Act 1.",
      "Speak from player perception or observed weirdness; let hidden truth show only through consequences.",
      "End with victory plus unease, not closure.",
      "Mortal defenders are brave and competent, but outmatched by supernatural battlefield control."
    ],
    tags: ["act-1", "running-rule", "gm"]
  },

  {
    id: "reference_frostroot_battlefield_setup",
    label: "Frostroot Battlefield Setup",
    type: "battlefield-reference",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "gm-procedure",

    summary: "Run Skjoldyr's Hollow as one connected battlefield: outskirts ritual site, ridge handoff, gate siege, rune-node triangle, and Rift/Runecaller escalation.",

    pressure: "The party cannot solve every lane at once; their speed through the outskirts determines how desperate the siege is when they crest the ridge.",

    details: [
      "The outskirts battle determines the opening state of the siege. Fast resolution gives the town a stronger start; delay means the gate is already close to breaking.",
      "The battlefield has three major camera layers: Outer Field / Drop Zone, Gate & Palisade, and Crossroads / Rift Scar.",
      "The rune nodes form a rough triangle outside the gates, spaced about 60 feet from each other.",
      "Each active node should be guarded by a meaningful threat group: roughly 5 draugr, 1 brute, and 1 skald.",
      "Depending on handoff state, 2 brutes may already be hammering the gate when the party arrives.",
      "Draugr archers or ranged dead can pressure defenders on the wall while brutes and node groups force the party to choose priorities.",
      "For Theater of the Mind, name the lane before resolving action: outskirts, gate, civilians/defenders, node, Skald/rhythm, Runecaller, or Rift.",
      "For a battlegrid, put the town/gate on the left side of the map, nodes outside the gate in a triangle, and the Crossroads/Rift Scar as the late-scene center.",
      "Allied defenders react to player success. They can unjam the gate, screen civilians, drag wounded clear, provide cover, or rally when the party creates an opening.",
      "Do not let allied NPCs solve the encounter. Let them prove mortal courage matters because the players made action possible."
    ],

    battlefieldHandoffStates: [
      {
        id: "handoff_early",
        label: "Early Arrival",
        condition: "The party disrupts the outskirts ritual quickly.",
        battlefieldState: "Clustered defenders are still outside the gate, screening fleeing civilians and trying to get them behind the walls.",
        gateState: "Gate still open, closing, or only lightly strained.",
        civilianState: "Some civilians are still exposed but reachable.",
        tableUse: "Open with momentum and visible rescue options. Defenders are not winning, but the party arrives before the line fully folds."
      },
      {
        id: "handoff_mid",
        label: "Mid Arrival",
        condition: "The party resolves the outskirts fight at a normal pace.",
        battlefieldState: "Most defenders outside are dead, dying, or surrounded. The gate is closed, and defenders are barricading behind it while forming a second line.",
        gateState: "Gate shut and under active pressure.",
        civilianState: "Most civilians are inside, but wounded and stragglers remain at risk.",
        tableUse: "Open with the sense that the party arrived just after the first outside line collapsed."
      },
      {
        id: "handoff_late",
        label: "Late Arrival",
        condition: "The party delays, over-investigates, or struggles in the outskirts.",
        battlefieldState: "The brutes have been hammering the gate for too long. The palisade is buckling and about to give.",
        gateState: "Gate will break within 1–2 rounds unless the party meaningfully diverts pressure.",
        civilianState: "Civilians are mostly behind the walls, but a breach will turn them into immediate battlefield pressure.",
        tableUse: "Open hot. The first meaningful choice is whether to save the gate, strike the nodes, or interrupt the enemy rhythm."
      }
    ],

    battlefieldApproach: {
      outskirtsDropZone: {
        summary: "The Bifrost drop lands the party in a snow-churned outer field before the full siege opens up.",
        layout: [
          "The main enemy cluster is roughly 30 feet away on slightly higher obscured ground behind a snowbank.",
          "The cluster consists of about 8 draugr dragging bodies and one Skald performing the ritual to establish another node.",
          "Sprawled carts, traveler gear, and broken debris litter the snow between the party and the enemy work site.",
          "Players can approach the snowbank and peer over it without immediately drawing attention.",
          "Beyond the field, a larger hill rises toward town; cresting that hill triggers the ridge reveal into the siege."
        ],
        tableUse: [
          "Let players observe before initiative if they approach carefully.",
          "Use the elevation mismatch and snowbank as cover, stealth texture, and visual obstruction.",
          "This should feel like a wrong process being interrupted, not a random patrol."
        ]
      },

      ridgeReveal: {
        summary: "The ridge converts the camera from local skirmish to settlement-wide crisis.",
        layout: [
          "From the crest, the party sees the gate, defender lines, brutes, node glow, and the wider shape of the assault.",
          "Use the outskirts handoff state to decide whether the defenders are still screening outside, falling back behind the gate, or already near breach.",
          "This is where the GM sets initial Gate State and Civilian State."
        ],
        tableUse: [
          "Do not make the ridge reveal generic. Let the timing of the outskirts fight visibly change what they see.",
          "This is the handoff point into the single breathing siege scene."
        ]
      }
    },

    siegeLayout: {
      summary: "The siege is one connected battlefield with the town to the left, a wide gate fight in front, and rune nodes arranged outside the walls.",
      layout: [
        "The town and defenders sit to the left side of the battlefield frame.",
        "The wider gate area is the main visible combat zone where defenders, brutes, and draugr pressure the palisade.",
        "Outside the gate, rune nodes are spaced in a rough triangle pattern, about 60 feet apart.",
        "Each node is guarded by a substantial threat grouping: at least 5 draugr, 1 brute, and 1 skald.",
        "Depending on handoff state, 2 brutes may already be committed directly to hammering the gate.",
        "Draugr archers or ranged dead fire at defenders on the wall while other undead reinforce node and gate pressure.",
        "The Crossroads / Rift Scar becomes the visual center once the Runecaller enters."
      ],
      tableUse: [
        "The party should feel like every choice leaves another lane under pressure.",
        "Nodes should feel like meaningful objectives, not minor props.",
        "The gate lane should remain urgent even if the party pivots toward nodes, Skalds, or the Runecaller.",
        "If players dramatically change the battlefield state, allied defenders should visibly change behavior too."
      ]
    },

    placementGuidance: {
      theaterOfTheMind: [
        "Treat the fight as pressure lanes: outskirts, gate, civilians/defenders, node, Skald/rhythm, Runecaller, and Rift.",
        "Name the lane before resolving a player action.",
        "If the party arrived early, describe defenders still outside screening evacuees.",
        "If the party arrived mid, describe defenders falling back behind a closed gate.",
        "If the party arrived late, describe the gate already buckling under brute pressure.",
        "Keep asking what pressure is ignored while the party solves the current lane.",
        "Use defender clusters as consequence markers and support actions, not initiative clutter.",
        "When players succeed hard, change battlefield behavior immediately."
      ],
      battlegrid: [
        "Place the town and gate line on the left side of the map.",
        "Place the wide gate combat area directly in front of the palisade.",
        "Place 3 rune nodes outside the gate in a rough triangle, each about 60 feet apart.",
        "Assign each node a guard package: about 5 draugr, 1 brute, and 1 skald.",
        "For late arrival, place 2 additional brutes already on gate-breaking duty.",
        "Place draugr archers or ranged dead in support positions firing toward wall defenders.",
        "Place scattered carts, traveler gear, broken supplies, and snowbanks as cover and movement texture.",
        "Reserve the Crossroads / Rift Scar as the visual center once the Runecaller appears."
      ]
    },

    enemyBehavior: [
      "Draugr at the outskirts continue dragging bodies and supporting the ritual until disrupted.",
      "Draugr at the siege can pressure defenders, guard nodes, fire on walls, or reinforce exposed lanes.",
      "Brutes begin on structural pressure, especially the gate, but divert toward players who threaten nodes, the Rift, or Runecaller control.",
      "Skalds support node formation, rhythm pressure, spell interference, and caster/Bard duels.",
      "The Runecaller should enter after the party has changed the battlefield state, reframing the fight from undead assault to directed control.",
      "The Rift Core should feel like a major solution target, requiring sustained focus, ritual closure, or multi-character commitment."
    ],

    alliedBehavior: [
      "Defender clusters are brave and competent, but outmatched by supernatural pressure.",
      "If players create an opening, defenders can unjam the gate, open lanes, screen civilians, provide cover, drag wounded clear, or rally a broken position.",
      "Jarl Eirik defaults to holding command, but may become a spearhead if the party creates an impossible opening.",
      "Brinhild can stabilize a lane, but should not chase objectives or solve the whole fight.",
      "Allied action should prove the town is alive without stealing the party's victory."
    ],

    livePlayTuning: [
      "Node durability should survive incidental damage but reward focused pressure or nova play.",
      "A high-level nova deleting or heavily damaging one objective is desirable if it forces enemy adaptation and resource tradeoffs.",
      "If a nova deletes the entire phase, the object HP is too low.",
      "If a nova does nothing meaningful, the object HP is too high.",
      "In live play, the attackers diverting resources toward a major caster threat made the battlefield feel reactive and successful."
    ],

    quickSetup: [
      "Outskirts: 8 draugr, 1 Skald, ritual/body-dragging process, snowbank cover, carts and traveler debris.",
      "Ridge: determine early/mid/late handoff based on party speed.",
      "Gate: defenders, civilians, brutes, ranged draugr, gate tracker.",
      "Nodes: 3-node triangle, about 60 feet apart, each guarded by 5 draugr, 1 brute, 1 skald.",
      "Late pressure: 2 brutes already hammering the gate.",
      "Runecaller: enters after the party meaningfully changes the battlefield.",
      "Rift: becomes the late-scene center and major solution target."
    ],

    relatedScenes: [
      "scene_frostroot_outskirts_drop_skirmish",
      "scene_frostroot_ridge_reveal_battlefield_opens",
      "scene_frostroot_siege_of_skjoldyrs_hollow"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_outer_field",
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads"
    ],

    relatedActors: [
      "actor_jarl_eirik_skjoldrson",
      "actor_brinhild_field_captain",
      "actor_frostwake_gate_captain",
      "actor_frostroot_gate_defender_cluster",
      "actor_draugr_unfinished_dead",
      "actor_frostbound_brute",
      "actor_skald_frozen_tongue",
      "actor_runecaller_the_director",
      "object_frostroot_rune_node",
      "object_frostroot_rift_core"
    ],

    relatedThreads: [
      "thread_draugr_are_unfinished_dead",
      "thread_siege_as_distraction",
      "thread_runecaller_directs_battle",
      "thread_uneasy_success"
    ],

    relatedTrackers: [
      "tracker_gate_state",
      "tracker_active_nodes",
      "tracker_rift_state",
      "tracker_rift_closure_progress",
      "tracker_civilian_state"
    ],

    tags: [
      "act-1",
      "frost-root",
      "battlefield",
      "siege",
      "outskirts",
      "theater-of-the-mind",
      "battlegrid",
      "gm-procedure",
      "reference"
    ],

    gmNotes: "This reference exists to keep the siege scene lean. Put setup geometry, ToTM handling, battlegrid translation, handoff states, and allied/enemy behavior doctrine here instead of bloating the scene card."
  },

  {
    id: "reference_root_shrine_response_options",
    label: "Root Shrine Response Options",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "procedure",
    summary: "After the Too Late reveal, give agency without undoing the completed process.",
    details: [
      "Cleanse: hard skill challenge; partial success at best; feels like it resists.",
      "Stabilize: suppresses instability temporarily but does not undo change.",
      "Study: learn more and gain future advantage.",
      "Reward option: Root Pattern Recognition: advantage on future node/root checks or bonus vs node interactions.",
      "Do not provide a fight here unless future prep explicitly changes course."
    ],
    tags: ["act-1", "root-shrine", "reveal", "procedure"]
  },

  {
    id: "reference_frostroot_ragnarok_outcome_rubric",
    title: "Frostroot Act 1 — Ragnarok Outcome Rubric",
    type: "arc-outcome",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",

    summary: "Use at the end of Act 1 to decide how Frostroot changes the global Ragnarok Meter.",

    guidance: [
      {
        result: "Held",
        globalRagnarokValue: 2,
        note: "Full success: gate stabilized, civilians mostly safe, Rift closed, and the Root Shrine truth is understood or contained."
      },
      {
        result: "Strained",
        globalRagnarokValue: 3,
        note: "Partial success: the village survives, but losses, unresolved symptoms, damaged nodes, or unstable Rift aftermath remain visible."
      },
      {
        result: "Fractured",
        globalRagnarokValue: 4,
        note: "Failure state: gate collapse, heavy civilian losses, unstable Rift aftermath, or the Root change spreads without meaningful understanding."
      }
    ],

    gmNotes: "Do not tick this during play unless useful. Use active trackers like Gate State, Active Nodes, Rift State, Rift Closure Progress, and Civilian State to inform the final outcome."
  },

  {
    id: "reference_frostroot_root_truths_and_language",
    title: "Frostroot Root Truths & Language Guardrails",
    type: "truth-reference",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",

    summary: "The Frost Root is reacting to pressure and system strain. It is not simply corrupted, evil, dying, or hostile.",

    useThisLanguage: [
      "disturbed",
      "pulled wrong",
      "redirected",
      "written into",
      "reacting",
      "adjusting",
      "taught something new"
    ],

    avoidThisLanguage: [
      "corrupted",
      "evil",
      "dead",
      "possessed",
      "broken beyond repair",
      "the Root is attacking"
    ],

    coreTruths: [
      "Yggdrasil is not simply breaking; parts of the system are correcting, compensating, or reacting under strain.",
      "The Frost Root functions like a stabilizer / failsafe under pressure.",
      "The Root Shrine reveal should imply the Root was taught or redirected, not merely damaged.",
      "NPCs may misunderstand the symptom, but GM-facing truth should preserve the distinction."
    ],

    tableUse: "Use this reference when writing Yrsa, Torvald, Root Shrine clues, node behavior, and post-siege language."
  }
];
