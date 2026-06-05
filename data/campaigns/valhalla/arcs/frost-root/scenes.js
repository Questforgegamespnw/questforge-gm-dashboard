export const scenes = [
  {
    id: "scene_frostroot_bifrost_drop",
    title: "Bifrost Drop — First Impact",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "transition",
    priority: "high",

    trigger: "Immediately after the Valhalla briefing. No downtime.",
    summary: "The Bifrost throws the party directly into snow, impact, and the first signs that the battlefield was already wrong before they arrived.",

    playerFacing: "Light tears open above you. You are pulled—not falling—delivered. Snow erupts outward. And for the first time since death, you hear war.",
    gmTruth: "The party arrives after the process has already begun. This is not the start of the enemy plan; it is the players interrupting it.",

    involvedLocations: [
      "location_skjoldyrs_hollow_outer_field"
    ],

    relatedMoments: [
      "moment_bifrost_first_impact"
    ],

    outcomes: [
      "The party lands outside Skjoldyr's Hollow.",
      "The outskirts skirmish begins immediately.",
      "The players understand there is no safe onboarding buffer."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_outskirts_drop_skirmish"
      ],
      branches: [],
      scriptedMoments: []
    },

    pressure: "No safety buffer. Drop, snow, impact, war.",
    runNote: "Keep this fast. This is the runway into Act 1, not a standalone prologue scene.",

    tags: [
      "act-1",
      "frost-root",
      "bifrost",
      "drop",
      "transition",
      "active"
    ]
  },

  {
    id: "scene_frostroot_outskirts_drop_skirmish",
    title: "Outskirts — The Interrupted Work",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "combat / investigation",
    priority: "high",

    trigger: "Immediately after Bifrost impact outside Skjoldyr's Hollow.",
    summary: "The party interrupts draugr placing bodies, marks, and rune structure in the snow. This is the first proof that the enemy was performing a process, not simply attacking.",

    playerFacing: "The snow is not untouched. Drag lines, broken crates, and bodies placed too deliberately cut through the field.",
    gmTruth: "The draugr are unfinished dead being directed into a task. They do not treat the party as the priority until the party disrupts the work.",

    involvedActors: [
      "actor_draugr_unfinished_dead",
      "actor_skald_frozen_tongue"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_outer_field"
    ],

    relatedThreads: [
      "thread_draugr_are_unfinished_dead",
      "thread_siege_as_distraction"
    ],

    relatedMoments: [
      "moment_outer_field_drag_marks",
      "moment_draugr_continue_the_work",
      "moment_ritual_node_being_formed",
      "moment_draugr_turn_when_disrupted",
      "moment_skald_first_chant_hint"
    ],

    clues: [
      "Draugr continue their task before engaging.",
      "Bodies and markings form a deliberate pattern.",
      "The markings imply a process already underway.",
      "The larger battle is audible beyond the ridge."
    ],

    outcomes: [
      "The players can disrupt or study the pattern.",
      "The draugr eventually turn to engage.",
      "The party moves toward the ridge and sees the full siege."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_ridge_reveal_battlefield_opens"
      ],
      branches: [],
      scriptedMoments: []
    },

    pressure: "Wrong before dangerous. The field is not an ambush; it is interrupted work.",
    runNote: "Let the players notice the draugr behavior before combat fully snaps into place.",

    tags: [
      "act-1",
      "frost-root",
      "outskirts",
      "drop-zone",
      "draugr",
      "process",
      "active"
    ]
  },

  {
    id: "scene_frostroot_ridge_reveal_battlefield_opens",
    title: "Ridge Reveal — The Battlefield Opens",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "reveal / transition",
    priority: "high",

    trigger: "After the outskirts skirmish resolves or the party pushes toward the sound of battle.",
    summary: "The party crests the ridge and sees the full siege of Skjoldyr's Hollow. The scale changes from local skirmish to settlement-wide crisis.",

    playerFacing: "The ridge breaks—and below you—war.",
    gmTruth: "This reframes the session. The outskirts were not the main attack. They were a sign of the larger pattern around the town.",

    involvedLocations: [
      "location_skjoldyrs_hollow_outer_field",
      "location_skjoldyrs_hollow_gate_palisade"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_draugr_are_unfinished_dead"
    ],

    relatedTrackers: [
      "tracker_gate_state",
      "tracker_civilian_state"
    ],

    relatedMoments: [
      "moment_ridge_reveal_gate_state",
      "moment_town_under_siege_first_look",
      "moment_defenders_already_losing"
    ],

    clues: [
      "The gate is under heavy pressure.",
      "Defenders are brave and organized, but outmatched.",
      "The attack has multiple pressure lanes.",
      "The battle has a center forming around the crossroads."
    ],

    outcomes: [
      "Set the initial Gate State.",
      "Set the initial Civilian State.",
      "The players choose how to enter the siege."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_siege_of_skjoldyrs_hollow"
      ],
      branches: [
        {
          condition: "Fast outskirts resolution",
          nextScene: "scene_frostroot_siege_of_skjoldyrs_hollow",
          note: "Gate begins stronger; defenders have more time."
        },
        {
          condition: "Moderate outskirts resolution",
          nextScene: "scene_frostroot_siege_of_skjoldyrs_hollow",
          note: "Gate is cracking; defenders are strained."
        },
        {
          condition: "Slow outskirts resolution",
          nextScene: "scene_frostroot_siege_of_skjoldyrs_hollow",
          note: "Gate is breached or partially breached."
        }
      ],
      scriptedMoments: []
    },

    pressure: "They arrived late, but not too late.",
    runNote: "Use this scene to set the initial battlefield state before the siege becomes active.",

    tags: [
      "act-1",
      "frost-root",
      "ridge",
      "reveal",
      "gate",
      "siege",
      "active"
    ]
  },

  {
    id: "scene_frostroot_siege_of_skjoldyrs_hollow",
    title: "Siege of Skjoldyr's Hollow",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "system crisis / combat",
    priority: "high",

    trigger: "After the ridge reveal, when the party enters the battlefield or chooses a pressure lane.",
    summary: "The full battlefield breathes as one living scene: gate pressure, defender collapse, rune nodes, Skald duels, Runecaller control, Rift opening, and heroic recovery all fire inside this scene.",

    playerFacing: "Skjoldyr's Hollow burns. The gate shudders under repeated impact. Defenders hold formation around splintering timber. Beneath the snow, blue light pulses in places it should not be.",
    gmTruth: "The siege is real, but it is also cover, containment, and timing. The Runecaller is directing the battlefield while the deeper Root process has already moved ahead.",

    involvedActors: [
      "actor_brinhild_field_captain",
      "actor_jarl_eirik_skjoldrson",
      "actor_frostwake_gate_captain",
      "actor_frostroot_gate_defender_cluster",
      "actor_draugr_unfinished_dead",
      "actor_frostbound_brute",
      "actor_skald_frozen_tongue",
      "actor_runecaller_the_director",
      "object_frostroot_rune_node",
      "object_frostroot_rift_core"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_draugr_are_unfinished_dead",
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

    relatedMoments: [
      "moment_jarl_line_anchor",
      "moment_brinhild_lane_hold",
      "moment_defender_cluster_breaks",
      "moment_defender_cluster_rallies",
      "moment_gate_unjammed_after_player_success",
      "moment_cinematic_defender_death",
      "moment_wounded_defender_dragged_clear",

      "moment_rune_node_activates",
      "moment_node_field_expands",
      "moment_node_destroyed_or_suppressed",
      "moment_big_node_created",

      "moment_skald_duel_triggers",
      "moment_skald_counter_chant_success",
      "moment_bard_wins_resonance_clash",
      "moment_skald_chant_breaks",

      "moment_runecaller_enters",
      "moment_runecaller_commands_dead",
      "moment_runecaller_pulse_corruption",
      "moment_runecaller_legendary_reaction_drops_objective_runner",

      "moment_rift_core_opens",
      "moment_rift_spawns_reinforcements",
      "moment_close_the_wound_attempt",
      "moment_rift_folds",

      "moment_eirik_takes_the_opening",
      "moment_eirik_spat_back_from_rift"
    ],

    clues: [
      "Brutes prioritize structure and pressure points.",
      "Skalds make the battlefield move in rhythm.",
      "Nodes alter movement, cold, and area control.",
      "The dead become more coordinated when the Runecaller appears.",
      "The Rift is a pressure wound, not the root cause."
    ],

    outcomes: [
      "The party can hold the gate, save civilians, destroy nodes, duel Skalds, expose the Runecaller, and close the Rift.",
      "Defenders react to player success by opening lanes, unjamming the gate, or rallying.",
      "The battle ends in real victory, but not clean understanding."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_post_siege_state_branch"
      ],
      branches: [
        {
          condition: "Gate held, civilians protected, Rift folded cleanly",
          nextScene: "scene_frostroot_post_siege_state_branch",
          note: "Town state trends Held."
        },
        {
          condition: "Gate damaged, losses taken, Rift folded under strain",
          nextScene: "scene_frostroot_post_siege_state_branch",
          note: "Town state trends Strained."
        },
        {
          condition: "Gate breached, heavy civilian loss, Rift aftermath unstable",
          nextScene: "scene_frostroot_post_siege_state_branch",
          note: "Town state trends Fractured."
        }
      ],
      scriptedMoments: []
    },

    pressure: "The party cannot answer every lane at once. Let their choices visibly reshape both enemy and allied behavior.",
    runNote: "Do not split this into phase scenes. Use fireable moments to escalate: nodes, Skald duel, Runecaller entrance, Rift opening, heroic recovery.",

    tags: [
      "act-1",
      "frost-root",
      "siege",
      "battlefield",
      "system-crisis",
      "runecaller",
      "rift",
      "active"
    ]
  },

  {
    id: "scene_frostroot_post_siege_state_branch",
    title: "Post-Siege State Branch",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "fallout / consequence",
    priority: "high",

    trigger: "Immediately after the Rift folds, the Runecaller is defeated/disconnected, or the battlefield stabilizes.",
    summary: "Translate the battlefield result into the town's emotional and physical state: Held, Strained, or Fractured.",

    playerFacing: "The battle is over. The dead no longer move. The fire still burns. The snow finally falls the way it should. For a few breaths, no one knows whether to cheer.",
    gmTruth: "The party won the visible fight. The deeper wrongness remains and should begin leaking through the aftermath.",

    involvedActors: [
      "actor_brinhild_field_captain",
      "actor_jarl_eirik_skjoldrson",
      "actor_yrsa_root_seer",
      "actor_torvald_brewmaster",
      "actor_frostwake_gate_captain"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads",
      "location_skjoldyrs_hollow"
    ],

    relatedThreads: [
      "thread_uneasy_success",
      "thread_siege_as_distraction",
      "thread_sap_flow_weakening"
    ],

    relatedTrackers: [
      "tracker_gate_state",
      "tracker_civilian_state",
      "tracker_rift_state"
    ],

    relatedMoments: [
      "moment_town_state_held",
      "moment_town_state_strained",
      "moment_town_state_fractured",
      "moment_yrsa_vague_and_ominous",
      "moment_wounded_defender_aftermath_testimony"
    ],

    clues: [
      "A node flickers once after it should be dead.",
      "Yrsa reacts to the aftermath before she explains anything.",
      "Survivors describe attacks that did not behave like raids.",
      "The town is grateful, but the relief does not fully settle."
    ],

    outcomes: [
      "Town state is established.",
      "The players receive public victory.",
      "Uneasy clues begin pointing toward the Sap-Hearth and Root Shrine."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_sap_hearth_revelry"
      ],
      branches: [
        {
          condition: "Held",
          nextScene: "scene_frostroot_sap_hearth_revelry",
          note: "The town can celebrate loudly, making the later wrongness sharper."
        },
        {
          condition: "Strained",
          nextScene: "scene_frostroot_sap_hearth_revelry",
          note: "Revelry is present but wounded; losses remain visible."
        },
        {
          condition: "Fractured",
          nextScene: "scene_frostroot_sap_hearth_revelry",
          note: "The hall becomes shelter and triage more than celebration."
        }
      ],
      scriptedMoments: []
    },

    pressure: "Victory first. Then unease. Do not steal the win too early.",
    runNote: "Let players enjoy being legends before introducing the next symptom.",

    tags: [
      "act-1",
      "frost-root",
      "post-siege",
      "aftermath",
      "town-state",
      "active"
    ]
  },

  {
    id: "scene_frostroot_sap_hearth_revelry",
    title: "Sap-Hearth Revelry",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "social / decompression",
    priority: "high",

    trigger: "After the town state is established and the defenders bring the party into the hall.",
    summary: "The players get the high-victory beat: warmth, drinks, jokes, recognition, saga energy, and mortal gratitude before the next clue surfaces.",

    playerFacing: "Warm light spills across stone, timber, and wounded faces. Someone starts laughing before anyone is sure they are allowed to. Then another voice joins. Then the hall remembers how to breathe.",
    gmTruth: "The Sap-Hearth is the town's emotional center, but it is also connected to the Root system. The comfort is real; the wrongness beneath it is also real.",

    involvedActors: [
      "actor_jarl_eirik_skjoldrson",
      "actor_brinhild_field_captain",
      "actor_torvald_brewmaster",
      "actor_yrsa_root_seer"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_sap_hearth"
    ],

    relatedThreads: [
      "thread_uneasy_success",
      "thread_sap_flow_weakening"
    ],

    relatedMoments: [
      "moment_sap_hearth_first_drinks",
      "moment_eirik_party_mode",
      "moment_brinhild_restoration_sobers_revelry",
      "moment_torvald_disappears_for_drinks",
      "moment_torvald_sap_flow",
      "moment_yrsa_you_came_down_wrong"
    ],

    clues: [
      "Torvald worries about the sap even during celebration.",
      "Yrsa remains vague, watchful, and unsettled.",
      "Eirik can revel hard but snaps back to command instantly when needed.",
      "The hall's warmth depends on a system below it."
    ],

    outcomes: [
      "Players receive social victory and recognition.",
      "Torvald disappears to check the drink lines.",
      "The first practical sign of post-battle wrongness emerges."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_sap_hearth_cellar_blackened_line"
      ],
      branches: [
        {
          condition: "Players notice Torvald's absence",
          nextScene: "scene_frostroot_sap_hearth_cellar_blackened_line",
          note: "They follow him into the cellar."
        },
        {
          condition: "Players stay in revelry",
          nextScene: "scene_frostroot_sap_hearth_cellar_blackened_line",
          note: "The taps stop, Torvald shouts below, or someone realizes the drinks have halted."
        }
      ],
      scriptedMoments: []
    },

    pressure: "Let the win breathe. The dread lands harder after laughter.",
    runNote: "This scene should feel genuinely warm. Do not make the hall fake-safe; make it real-safe with one wrong system underneath.",

    tags: [
      "act-1",
      "frost-root",
      "sap-hearth",
      "revelry",
      "social",
      "victory",
      "active"
    ]
  },

  {
    id: "scene_frostroot_sap_hearth_cellar_blackened_line",
    title: "Sap-Hearth Cellar — The Blackened Line",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "clue / investigation",
    priority: "high",

    trigger: "Torvald disappears to fetch drinks and does not return, or the hall's taps unexpectedly stop.",
    summary: "The party follows Torvald below the hall and finds him shutting off the tapworks after blackened sap begins entering one of the drink lines.",

    playerFacing: "The celebration above dulls with each step down, replaced by dripping lines, hissing valves, and Torvald's voice cursing somewhere in the dark.",
    gmTruth: "The wrongness is not only battlefield residue. It has reached the Sap-Hearth's root-fed system.",

    involvedActors: [
      "actor_torvald_brewmaster"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_sap_hearth_cellar"
    ],

    relatedThreads: [
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    relatedMoments: [
      "moment_torvald_blackened_sap_line",
      "moment_torvald_shuts_off_tapworks",
      "moment_trace_black_sap_to_root"
    ],

    clues: [
      "Blackened sap appears in one line.",
      "Torvald catches it before it reaches the hall.",
      "The issue may be local, line-based, or rooted deeper.",
      "This is a practical system failure, not a prophecy."
    ],

    outcomes: [
      "Torvald shuts off the affected line or the full tapworks.",
      "The party understands something remains wrong after victory.",
      "The clue points toward Yrsa and the Root Shrine."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_regroup_with_yrsa"
      ],
      branches: [],
      scriptedMoments: [
        {
          timing: "Black sap reveal",
          speaker: "actor_torvald_brewmaster",
          line: "No. No, no, no—shut the line. Shut the whole damned line.",
          purpose: "Make the dread practical, immediate, and grounded."
        }
      ]
    },

    pressure: "The celebration does not end because of an omen. It ends because the brewer found poison in the system.",
    runNote: "Torvald should be concrete and technical here. He is not interpreting the cosmos; he is reading a failed line.",

    tags: [
      "act-1",
      "frost-root",
      "sap-hearth",
      "cellar",
      "blackened-sap",
      "clue",
      "active"
    ]
  },

  {
    id: "scene_frostroot_regroup_with_yrsa",
    title: "Regroup With Yrsa — The Wrongness Has a Source",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "realization / transition",
    priority: "high",

    trigger: "After the blackened sap line is discovered or the party asks Yrsa what the sap failure means.",
    summary: "The party connects Torvald's practical failure with Yrsa's ominous read of the Root, then moves toward the shrine.",

    playerFacing: "Yrsa does not look surprised when she sees the blackened sap. That is worse than surprise.",
    gmTruth: "Yrsa does not fully understand the mechanism, but she knows the symptom belongs to the Root and not merely the hall's tapworks.",

    involvedActors: [
      "actor_yrsa_root_seer",
      "actor_torvald_brewmaster",
      "actor_jarl_eirik_skjoldrson",
      "actor_brinhild_field_captain"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_sap_hearth",
      "location_skjoldyrs_hollow_sap_hearth_cellar",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    relatedThreads: [
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    relatedMoments: [
      "moment_yrsa_reads_blackened_sap",
      "moment_yrsa_names_wrongness_without_explaining",
      "moment_path_to_shrine_too_clean"
    ],

    clues: [
      "The blackened sap is a symptom, not the whole problem.",
      "Yrsa suspects the shrine before she has proof.",
      "Eirik and Brinhild can sober instantly when the town is threatened.",
      "The path to the shrine is too clean."
    ],

    outcomes: [
      "The party leaves the revelry behind.",
      "Yrsa leads or points them toward the Root Shrine.",
      "The mood shifts from celebration to investigation."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_root_shrine_too_late"
      ],
      branches: [],
      scriptedMoments: [
        {
          timing: "Command snap",
          speaker: "actor_jarl_eirik_skjoldrson",
          line: "Brinhild. Sober up. We have more work to do.",
          purpose: "Show the shift from revelry back to responsibility."
        }
      ]
    },

    pressure: "The victory is still real, but it is no longer the whole truth.",
    runNote: "This is a mode shift. Let the room sober up around the new information.",

    tags: [
      "act-1",
      "frost-root",
      "yrsa",
      "regroup",
      "root-shrine",
      "transition",
      "active"
    ]
  },

  {
    id: "scene_frostroot_root_shrine_too_late",
    title: "Root Shrine — Too Late",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "reveal / investigation",
    priority: "high",

    trigger: "The party follows the sap clue, Yrsa's concern, or post-siege wrongness to the Root Shrine.",
    summary: "The shrine is not under attack. The process is already completed or redirected. The party realizes the siege was not the whole operation.",

    playerFacing: "The path to the shrine is untouched. No tracks. No struggle. No sign that anything fought its way here. That alone should stop you.",
    gmTruth: "The siege was containment, distraction, and timing. The Root was not simply damaged; it was taught or redirected.",

    involvedActors: [
      "actor_yrsa_root_seer"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow_root_shrine"
    ],

    relatedThreads: [
      "thread_siege_as_distraction",
      "thread_sap_flow_weakening",
      "thread_uneasy_success"
    ],

    relatedReferences: [
      "reference_root_shrine_response_options",
      "reference_frostroot_root_truths_and_language"
    ],

    relatedMoments: [
      "moment_root_shrine_already_done",
      "moment_illusion_drops_bodies_at_root",
      "moment_root_impact_bodies_revealed",
      "moment_players_help_yrsa_stabilize_node",
      "moment_root_pattern_recognition_reward",
      "moment_root_shifts_beneath_surface"
    ],

    clues: [
      "No battle reached the shrine.",
      "New marks are complete, not forming.",
      "Old runes stabilize; new marks redirect.",
      "The illusion of a clean shrine drops to reveal bodies that impacted the Root.",
      "The Root appears whole, then shifts beneath the surface."
    ],

    outcomes: [
      "Players may cleanse, stabilize, study, or contain symptoms.",
      "They cannot fully undo what already happened.",
      "Root Pattern Recognition reward is possible.",
      "The Act 2 bridge becomes visible."
    ],

    forwardPath: {
      upNext: [
        "scene_frostroot_valkyrie_extraction"
      ],
      branches: [
        {
          condition: "Cleanse",
          nextScene: "scene_frostroot_valkyrie_extraction",
          note: "Partial symptom relief; the deeper change resists simple removal."
        },
        {
          condition: "Stabilize",
          nextScene: "scene_frostroot_valkyrie_extraction",
          note: "Suppresses immediate aftershocks and protects the town for now."
        },
        {
          condition: "Study",
          nextScene: "scene_frostroot_valkyrie_extraction",
          note: "Players gain future advantage reading Root/node patterns."
        }
      ],
      scriptedMoments: [
        {
          timing: "Investigation payoff",
          speaker: "GM",
          line: "This was not an attempt to break the Root. It was an attempt to teach it something new.",
          purpose: "Land the Act 1 inversion."
        }
      ]
    },

    pressure: "Do not give them something to fight. Give them something to realize.",
    runNote: "Use the body reveal carefully. It should feel like the illusion of safety falling away, not a cheap gore button.",

    tags: [
      "act-1",
      "frost-root",
      "root-shrine",
      "too-late",
      "reveal",
      "act-2-bridge",
      "active"
    ]
  },

  {
    id: "scene_frostroot_valkyrie_extraction",
    title: "Valkyrie Extraction — Victory With Unease",
    session: "Act 1 — The Frost Root",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    type: "extraction / fallout",
    priority: "high",

    trigger: "After the Root Shrine reveal and any stabilization attempt resolves.",
    summary: "The party regroups with the Valkyries, leaves Skjoldyr's Hollow, and carries a real victory back into a larger mystery.",

    playerFacing: "The Bifrost light returns, but it does not feel like arrival this time. It feels like being pulled away before the place has finished speaking.",
    gmTruth: "Act 1 ends with victory intact, but the players now know the system is larger, stranger, and less stable than the briefing implied.",

    involvedActors: [
      "actor_brinhild_field_captain",
      "actor_jarl_eirik_skjoldrson",
      "actor_yrsa_root_seer"
    ],

    involvedLocations: [
      "location_skjoldyrs_hollow",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    relatedThreads: [
      "thread_uneasy_success",
      "thread_sap_flow_weakening"
    ],

    relatedReferences: [
      "reference_frostroot_ragnarok_outcome_rubric",
      "reference_frostroot_root_truths_and_language"
    ],

    relatedMoments: [
      "moment_brinhild_after_action_report",
      "moment_eirik_meadhall_return_or_farewell",
      "moment_yrsa_final_warning",
      "moment_valkyries_arrive_for_extract",
      "moment_bifrost_extract_with_unease"
    ],

    clues: [
      "The town survives, but the Root has changed.",
      "The Valkyries understand more is wrong than a local undead attack.",
      "The party's victory matters, but does not close the question.",
      "The next arc pressure is now seeded."
    ],

    outcomes: [
      "Set Frostroot Act 1 outcome using the Ragnarok outcome rubric.",
      "Carry forward Root Pattern Recognition or equivalent reward if earned.",
      "Bridge toward Emberroot / Act 2 pressure."
    ],

    forwardPath: {
      upNext: [],
      branches: [
        {
          condition: "Held outcome",
          nextScene: "Act 2 bridge",
          note: "Ragnarok pressure remains lower; the party has strong credibility."
        },
        {
          condition: "Strained outcome",
          nextScene: "Act 2 bridge",
          note: "Ragnarok pressure increases moderately; victory came with visible cost."
        },
        {
          condition: "Fractured outcome",
          nextScene: "Act 2 bridge",
          note: "Ragnarok pressure increases sharply; the party leaves with unresolved damage."
        }
      ],
      scriptedMoments: []
    },

    pressure: "End with the win intact and the mystery larger.",
    runNote: "Do not undercut the players' success. Let the dread be implication, not punishment.",

    tags: [
      "act-1",
      "frost-root",
      "extraction",
      "valkyries",
      "uneasy-success",
      "act-2-bridge",
      "active"
    ]
  }
];

