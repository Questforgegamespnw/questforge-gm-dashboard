export const fireableMoments = [
    {
        id: "moment_outer_field_drag_marks",
        title: "Drag Marks in the Snow",
        type: "investigation",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_outer_field"],

        trigger: "If players inspect tracks, bodies, crates, or the snow before engaging.",
        compact: "The snow is not covering the tracks correctly.",

        spotlight: {
            title: "The Ground Was Already Wrong",
            readAloud: [
                {
                    type: "narration",
                    text: "The snow should have buried these marks."
                },
                {
                    type: "narration",
                    text: "It has not."
                },
                {
                    type: "narration",
                    text: "Drag lines cut through the field in clean, deliberate paths."
                },
                {
                    type: "narration",
                    text: "The bodies were not dropped here. They were placed."
                }
            ],
            gmPurpose: "Show that the party interrupted a process, not a random ambush.",
            followUp: "Point toward the triangle pattern or the gate beyond the ridge."
        },

        relatedActors: ["actor_draugr_unfinished_dead"],
        relatedThreads: [
            "thread_draugr_are_unfinished_dead",
            "thread_siege_as_distraction",
    
        ],
        reference: "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",
        tags: ["act-1", "investigation", "drop-zone", "draugr", "process"]
    },

    {
        id: "moment_jarl_line_anchor",
        title: "Jarl Anchors the Line",
        type: "battlefield-dialogue",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_gate_palisade"],

        trigger: "If the gate is cracking, defenders are wavering, or the party needs the mortal stakes centered.",
        compact: "Jarl Eirik plants his shield and refuses to move.",

        spotlight: {
            title: "The Wall That Walks",
            readAloud: [
                {
                    type: "narration",
                    text: "The Jarl plants his shield so hard the frozen mud cracks around it."
                },
                {
                    type: "narration",
                    text: "The line bends around him, but it does not break."
                },
                {
                    type: "speech",
                    speaker: "Jarl Eirik",
                    text: "We don't win this—we survive it!"
                }
            ],
            gmPurpose: "Reinforce Eirik as the mortal line anchor, not the Gate Captain.",
            followUp: "Let players choose whether to reinforce him, save civilians, disable nodes, or strike the Skald."
        },

        relatedActors: ["actor_jarl_eirik_skjoldrson"],
        relatedThreads: [
            "thread_siege_as_distraction",
            "thread_uneasy_success"
        ],
        reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",
        tags: ["act-1", "battlefield", "jarl", "line-anchor", "gate"]
    },

    {
        id: "moment_brinhild_lane_hold",
        title: "Brinhild Holds a Lane",
        type: "ally-spotlight",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_gate_palisade"],

        trigger: "If players need to see Valkyrie scale without her solving the encounter.",
        compact: "Brinhild takes the hit, plants her shield, and buys a lane.",

        spotlight: {
            title: "Storm in Human Shape",
            readAloud: [
                {
                    type: "narration",
                    text: "Brinhild takes the impact on her shield and skids backward three full steps."
                },
                {
                    type: "narration",
                    text: "Then she stops."
                },
                {
                    type: "narration",
                    text: "Not because the force is gone."
                },
                {
                    type: "narration",
                    text: "Because she refuses to give it another inch."
                }
            ],
            gmPurpose: "Show elite support while preserving player agency.",
            followUp: "Use the opened lane to invite a player decision."
        },

        relatedActors: ["actor_brinhild_field_captain"],
        relatedThreads: [
            "thread_siege_as_distraction",
            "thread_uneasy_success"
        ],
        reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",
        tags: ["act-1", "battlefield", "brinhild", "valkyrie", "support"]
    },

    {
        id: "moment_torvald_sap_flow",
        title: "Torvald Checks the Sap",
        type: "dialogue",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_sap_hearth"],

        trigger: "If players ask about mead, sap, supplies, the hall, or why Torvald seems tense.",
        compact: "Torvald checks the basin twice. “Used to flow faster.”",

        spotlight: {
            title: "Torvald Sap Clue",
            readAloud: [
                {
                    type: "narration",
                    text: "Torvald's usual volume drops for the first time."
                },
                {
                    type: "narration",
                    text: "He looks toward the basin where the golden sap gathers."
                },
                {
                    type: "speech",
                    speaker: "Torvald",
                    text: "Used to flow faster."
                },
                {
                    type: "narration",
                    text: "A beat."
                },
                {
                    type: "speech",
                    speaker: "Torvald",
                    text: "Still gives enough. For now."
                }
            ],
            gmPurpose: "Seed sap weakening without explaining the Root.",
            followUp: "Can point toward Yrsa or the Root Shrine."
        },

        relatedActors: ["actor_torvald_brewmaster"],
        relatedThreads: [
            "thread_sap_flow_weakening",
            "thread_root_rewritten"
        ],
        reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",
        tags: ["act-1", "dialogue", "torvald", "sap-flow", "clue"]
    },

    {
        id: "moment_yrsa_you_came_down_wrong",
        title: "Yrsa Names the Wrongness",
        type: "dialogue",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_sap_hearth"],

        trigger: "If players speak with Yrsa, ask what she sensed, or mention death/Valhalla/the drop.",
        compact: "Yrsa says the party came down wrong.",

        spotlight: {
            title: "You Came Down Wrong",
            readAloud: [
                {
                    type: "narration",
                    text: "Yrsa turns her veiled face toward you before you finish speaking."
                },
                {
                    type: "speech",
                    speaker: "Yrsa",
                    text: "You came down wrong..."
                },
                {
                    type: "narration",
                    text: "Her resin-stained fingers tighten."
                },
                {
                    type: "speech",
                    speaker: "Yrsa",
                    text: "Not like the others."
                }
            ],
            gmPurpose: "Foreshadow the party as system anomalies without explaining the campaign truth.",
            followUp: "She can point them toward the Root Shrine, but should not solve it."
        },

        relatedActors: ["actor_yrsa_root_seer"],
        relatedThreads: [
            "thread_sap_flow_weakening",
            "thread_uneasy_success"
        ],
        reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",
        tags: ["act-1", "dialogue", "yrsa", "foreshadow", "anomaly"]
    },

    {
        id: "moment_root_shrine_already_done",
        title: "The Ritual Already Finished",
        type: "realization",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: ["location_skjoldyrs_hollow_root_shrine"],

        trigger: "When players inspect the shrine and expect an active fight, ritual, or corruption source.",
        compact: "The shrine was not breached. It was allowed.",

        spotlight: {
            title: "Too Late",
            readAloud: [
                {
                    type: "narration",
                    text: "There are no fresh tracks."
                },
                {
                    type: "narration",
                    text: "No broken threshold."
                },
                {
                    type: "narration",
                    text: "No bodies piled around the shrine."
                },
                {
                    type: "narration",
                    text: "The runes are not forming."
                },
                {
                    type: "narration",
                    text: "They are complete."
                }
            ],
            gmPurpose: "Land the Act 1 inversion: the siege was distraction/containment, and the process already finished.",
            followUp: "Offer study, stabilize, or partial cleansing options. Do not create a boss fight here."
        },

        relatedActors: ["actor_yrsa_root_seer"],
        relatedThreads: [
            "thread_root_rewritten",
            "thread_siege_as_distraction",
            "thread_frost_root_reacting_not_corrupted"
        ],
        reference: "arcs/frost-root/library/act_1/locations/root_shrine_too_late.md",
        tags: ["act-1", "realization", "root-shrine", "too-late"]
    },

    {
        id: "moment_torvald_blackened_sap_line",
        title: "Torvald Shuts Off the Line",
        type: "aftermath-reveal",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: [
            "location_skjoldyrs_hollow_sap_hearth_cellar"
        ],

        trigger: "After the victory celebration begins, if Torvald disappears to fetch drinks and does not return.",

        compact: "Torvald finds blackened sap entering one of the drink lines and shuts the whole system down before it reaches the hall.",

        spotlight: {
            title: "The Drink Line Goes Black",
            readAloud: [
                {
                    type: "narration",
                    text: "Torvald is below the hall, half inside a nest of copper lines and old keg fittings, cursing like the equipment personally insulted his ancestors."
                },
                {
                    type: "narration",
                    text: "One of the glass bulbs in the tapline is no longer amber."
                },
                {
                    type: "narration",
                    text: "It drips black."
                },
                {
                    type: "speech",
                    speaker: "Torvald",
                    text: "No. No, no, no—shut the line. Shut the whole damned line."
                },
                {
                    type: "narration",
                    text: "With one hard turn, the cellar answers in a chain of knocks and hisses. Above you, the hall's drink taps go quiet."
                }
            ],
            gmPurpose: "Ground the post-victory dread in a practical failure instead of vague prophecy. The Sap-Hearth is still warm, but the system feeding it is wrong.",
            followUp: "Torvald is trying to determine whether the contamination is local to the tapworks, the sap line, or the Root itself. This can point players toward Yrsa or the Root Shrine."
        },

        relatedActors: [
            "actor_torvald_brewmaster",
            "actor_yrsa_root_seer"
        ],

        relatedThreads: [
            "thread_sap_flow_weakening",
            "thread_uneasy_success"
        ],

        relatedReferences: [
            "reference_frostroot_root_truths_and_language"
        ],

        tags: [
            "act-1",
            "sap-hearth",
            "cellar",
            "blackened-sap",
            "torvald",
            "aftermath",
            "clue"
        ],

        gmNotes: "This is a grounded 'something is still wrong' marker. Torvald is not being mystical; he is a brewer noticing a system failure before anyone drinks it."
    },

];