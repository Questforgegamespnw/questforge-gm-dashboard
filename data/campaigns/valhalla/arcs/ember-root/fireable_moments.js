export const fireableMoments = [
  {
    "id": "moment_emberroot_city_burns_who_do_you_go_for",
    "title": "The City Burns: Who Do You Go For?",
    "type": "opening pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_forge_city"
    ],
    "trigger": "At the opening Bifrost drop or any time players look for a clean overview.",
    "compact": "Do not ask what they do. Ask who they go for.",
    "spotlight": {
      "title": "The City Burns: Who Do You Go For?",
      "readAloud": [
        {
          "type": "narration",
          "text": "The Bifrost tears open above heat and smoke. Emberfall is already in motion: structures failing, voices shouting, fire spreading sideways through the city."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "There is no approach. There is only arrival. Who do you go for first?"
        }
      ],
      "gmPurpose": "Start with triage and prevent the scene from becoming a slow tactical survey.",
      "followUp": "Push immediately into a district, faction, or visible crisis."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot"
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "opening",
      "triage",
      "city-burns"
    ]
  },
  {
    "id": "moment_emberroot_high_forge_control_lie",
    "title": "High Forge: The Control Room Lie",
    "type": "pressure beat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_high_forge"
    ],
    "trigger": "When the party enters High Forge or asks whether leadership has the situation contained.",
    "compact": "The illusion of control cracks in front of them.",
    "spotlight": {
      "title": "High Forge: The Control Room Lie",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Forge Lord",
          "text": "The system holds."
        },
        {
          "type": "speech",
          "speaker": "Engineer",
          "text": "…not like this."
        },
        {
          "type": "speech",
          "speaker": "Guard",
          "text": "We’ve lost contact with the lower tiers!"
        }
      ],
      "gmPurpose": "Show command confidence breaking under live data.",
      "followUp": "Ask whether the party pushes Durgrim, follows the engineer, or goes to the lower tiers."
    },
    "relatedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_caste_pressure"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "high-forge",
      "control",
      "tri-voice"
    ]
  },
  {
    "id": "moment_emberroot_high_forge_hold_the_line",
    "title": "High Forge: Hold the Line",
    "type": "command pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_high_forge"
    ],
    "trigger": "When players hesitate in a command-space or leadership tries to override them.",
    "compact": "Forge Lord authority turns delay into pressure.",
    "spotlight": {
      "title": "High Forge: Hold the Line",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Forge Lord",
          "text": "Hold the line."
        },
        {
          "type": "speech",
          "speaker": "Durgrim",
          "text": "We do not abandon what sustains us."
        }
      ],
      "gmPurpose": "Make authority tempting but morally expensive.",
      "followUp": "Let players choose whether to obey, challenge, or redirect command."
    },
    "relatedActors": [
      "actor_durgrim_ashenvein"
    ],
    "relatedThreads": [
      "thread_emberroot_caste_existed_before_arrival"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "high-forge",
      "forge-lords",
      "authority"
    ]
  },
  {
    "id": "moment_emberroot_midworks_argument_at_node",
    "title": "Midworks: Argument at the Node",
    "type": "investigation pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_midworks"
    ],
    "trigger": "When the party investigates rune systems, control rooms, or contradictory failures.",
    "compact": "The engineers know enough to argue and not enough to agree.",
    "spotlight": {
      "title": "Midworks: Argument at the Node",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Engineer",
          "text": "That’s not the failure point!"
        },
        {
          "type": "speech",
          "speaker": "Another Engineer",
          "text": "Yes it is!"
        },
        {
          "type": "speech",
          "speaker": "Worker",
          "text": "While you argue—we’re burning!"
        }
      ],
      "gmPurpose": "Make investigation feel useful but time-costly.",
      "followUp": "Offer Thread A/System Failure or Thread C/Root Resonance as next routes."
    },
    "relatedActors": [
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_correct_interpretation_under_pressure",
      "thread_emberroot_core_is_not_enemy"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "midworks",
      "investigation",
      "engineers"
    ]
  },
  {
    "id": "moment_emberroot_midworks_kaldra_limit_truth",
    "title": "Kaldra: The System Has Limits",
    "type": "truth beat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_midworks"
    ],
    "trigger": "When players ask what is actually wrong or start treating symptoms as the whole problem.",
    "compact": "Kaldra gives clarity without comfort.",
    "spotlight": {
      "title": "Kaldra: The System Has Limits",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Kaldra",
          "text": "It was never meant to handle this."
        },
        {
          "type": "speech",
          "speaker": "Kaldra",
          "text": "You’re treating symptoms—not the problem."
        }
      ],
      "gmPurpose": "Move the party toward the Root/Core truth.",
      "followUp": "Increase Insight if the players connect this to amplification rather than corruption."
    },
    "relatedActors": [
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "midworks",
      "kaldra",
      "truth"
    ]
  },
  {
    "id": "moment_emberroot_lower_furnaces_are_you_going_to",
    "title": "Lower Furnaces: Are You Going To?",
    "type": "moral pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_lower_furnaces"
    ],
    "trigger": "When the party sees the worker cost or pauses over system-vs-people tradeoffs.",
    "compact": "The Ashbound make the moral question direct.",
    "spotlight": {
      "title": "Lower Furnaces: Are You Going To?",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Worker",
          "text": "We told them."
        },
        {
          "type": "speech",
          "speaker": "Another Worker",
          "text": "They didn’t listen."
        },
        {
          "type": "speech",
          "speaker": "Third Worker",
          "text": "Are you going to?"
        }
      ],
      "gmPurpose": "Put the party on the spot without a speech.",
      "followUp": "Let the response affect Bruni/Ashbound trust."
    },
    "relatedActors": [
      "actor_bruni_coalhand"
    ],
    "relatedThreads": [
      "thread_emberroot_caste_existed_before_arrival",
      "thread_emberroot_no_clean_victories"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "lower-furnaces",
      "ashbound",
      "workers"
    ]
  },
  {
    "id": "moment_emberroot_lower_furnaces_bruni_cost_lives_here",
    "title": "Bruni: This Is Where the Cost Lives",
    "type": "actor pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_lower_furnaces"
    ],
    "trigger": "When the party focuses on stabilizing systems while workers are visibly trapped or injured.",
    "compact": "Bruni challenges priorities.",
    "spotlight": {
      "title": "Bruni: This Is Where the Cost Lives",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Bruni",
          "text": "We told them it would break."
        },
        {
          "type": "speech",
          "speaker": "Bruni",
          "text": "How many more die before you stop?"
        }
      ],
      "gmPurpose": "Force the people-over-system philosophy into the live scene.",
      "followUp": "If the party saves civilians, Bruni trust rises; if they protect the system first, distrust rises."
    },
    "relatedActors": [
      "actor_bruni_coalhand"
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "bruni",
      "ashbound",
      "moral-pressure"
    ]
  },
  {
    "id": "moment_emberroot_chainways_this_path_wont_hold",
    "title": "Chainways: This Path Won’t Hold",
    "type": "traversal crisis",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_chainways"
    ],
    "trigger": "When movement matters, the route becomes unstable, or evacuation crosses vertical space.",
    "compact": "Every decision becomes physical.",
    "spotlight": {
      "title": "Chainways: This Path Won’t Hold",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Forge Lord",
          "text": "Hold the line!"
        },
        {
          "type": "speech",
          "speaker": "Engineer",
          "text": "This path won’t hold!"
        },
        {
          "type": "speech",
          "speaker": "Worker",
          "text": "Move or die!"
        }
      ],
      "gmPurpose": "Turn abstract tradeoffs into immediate route pressure.",
      "followUp": "Choose one: save the route, save the people on it, or abandon it before collapse."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot"
    ],
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "chainways",
      "traversal",
      "collapse"
    ]
  },
  {
    "id": "moment_emberroot_chainways_valkyrie_cannot_catch_all",
    "title": "Valkyries: We Cannot Catch Them All",
    "type": "extraction strain",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_chainways"
    ],
    "trigger": "When extraction pressure becomes visible or too many civilians/NPCs are in danger at once.",
    "compact": "The rescue logic visibly cannot cover everyone.",
    "spotlight": {
      "title": "Valkyries: We Cannot Catch Them All",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Thora",
          "text": "Pick one—I can’t carry all of them!"
        },
        {
          "type": "speech",
          "speaker": "Kara",
          "text": "…something’s wrong beyond this."
        }
      ],
      "gmPurpose": "Foreshadow Valhalla system strain through action, not exposition.",
      "followUp": "Let the party decide who gets priority and who is left exposed."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot"
    ],
    "relatedThreads": [
      "thread_emberroot_valkyrie_strain"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "valkyries",
      "extraction",
      "system-failure"
    ]
  },
  {
    "id": "moment_emberroot_core_furnace_not_the_bomb",
    "title": "Core Furnace: Not the Bomb",
    "type": "truth reveal",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_core_furnace"
    ],
    "trigger": "When players first correctly read the Core or ask whether it is the source of the crisis.",
    "compact": "The Core is not attacking. It is holding back collapse.",
    "spotlight": {
      "title": "Core Furnace: Not the Bomb",
      "readAloud": [
        {
          "type": "narration",
          "text": "The Core pulses. The chamber answers. The heat does not move like hatred; it moves like pressure searching for somewhere to go."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "The Core is not the bomb. The Core is the thing holding the bomb."
        }
      ],
      "gmPurpose": "Reframe the final location from boss arena to containment crisis.",
      "followUp": "Reward correct interpretation with Insight or clearer stabilization options."
    },
    "relatedActors": [
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_core_furnace_truth",
      "thread_emberroot_core_is_not_enemy"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "core-furnace",
      "truth",
      "insight"
    ]
  },
  {
    "id": "moment_emberroot_core_furnace_break_the_chains",
    "title": "Break the Chains",
    "type": "timer escalation",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_core_furnace"
    ],
    "trigger": "During Forge Below when giants arrive, players stabilize, or the party hesitates.",
    "compact": "Skarth’s strike team targets the constraints, not the party.",
    "spotlight": {
      "title": "Break the Chains",
      "readAloud": [
        {
          "type": "narration",
          "text": "A regulator pillar fractures. One chain screams under the shift in pressure."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "They are not trying to kill you. They are trying to free it."
        }
      ],
      "gmPurpose": "Make the enemy objective legible and create a timer.",
      "followUp": "Advance the Giant Interference Timer unless the party commits to stopping them."
    },
    "relatedActors": [
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler"
    ],
    "relatedThreads": [
      "thread_emberroot_giants_want_release"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "core-furnace",
      "giants",
      "timer"
    ]
  },
  {
    "id": "moment_emberroot_skarth_you_fear_what_you_built",
    "title": "Skarth: You Fear What You Built",
    "type": "ideological pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_core_furnace"
    ],
    "trigger": "When players cling to full containment or treat release as obviously evil.",
    "compact": "Skarth becomes a perspective, not just a threat.",
    "spotlight": {
      "title": "Skarth: You Fear What You Built",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "You fear what you built."
        },
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "You are wasting potential."
        }
      ],
      "gmPurpose": "Put transformation-vs-control into a memorable voice.",
      "followUp": "If players show sympathy and have High Insight, keep the Join Skarth branch available."
    },
    "relatedActors": [
      "actor_skarth_firebrand"
    ],
    "relatedThreads": [
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_skarth_mirror"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "skarth",
      "release",
      "ideology"
    ]
  },
  {
    "id": "moment_emberroot_choice_you_understand_cost",
    "title": "The Choice: You Understand the Cost",
    "type": "decision beat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    "trigger": "When The Choice / Molten Council starts, especially if Insight is high.",
    "compact": "Four options become clear, but none become clean.",
    "spotlight": {
      "title": "The Choice: You Understand the Cost",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Engineer",
          "text": "You know what this will cost."
        },
        {
          "type": "speech",
          "speaker": "Worker",
          "text": "Then don’t choose them."
        },
        {
          "type": "speech",
          "speaker": "Forge Lord",
          "text": "Choose the city."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "You understand what each of these will cost."
        }
      ],
      "gmPurpose": "Force the decision while making earned Insight matter.",
      "followUp": "Offer Reinforce, Shutdown, Collapse, Release, and rare Join Skarth if earned."
    },
    "relatedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_correct_interpretation_under_pressure"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "choice",
      "council",
      "decision"
    ]
  },
  {
    "id": "moment_emberroot_unsavable_pick_one",
    "title": "The Unsavable: Pick One",
    "type": "forced-loss beat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "trigger": "Immediately after The Choice, once multiple crises are visible.",
    "compact": "Make the impossible decision fast.",
    "spotlight": {
      "title": "The Unsavable: Pick One",
      "readAloud": [
        {
          "type": "narration",
          "text": "It all happens at once."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "Pick one."
        },
        {
          "type": "speech",
          "speaker": "GM",
          "text": "You saved who you could. But not all of them."
        }
      ],
      "gmPurpose": "Prevent overplanning and preserve the forced-loss shape.",
      "followUp": "Resolve one crisis, or two if High Insight. Everything else fails offscreen or onscreen."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "forced-loss",
      "crisis"
    ]
  },
  {
    "id": "moment_emberroot_hot_exfil_now_or_never",
    "title": "Hot Exfil: Now or Never",
    "type": "escape beat",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_chainways",
      "location_emberfall_forge_city"
    ],
    "trigger": "During Hot Exfil when the party needs a hard extraction window.",
    "compact": "Extraction is active, not automatic.",
    "spotlight": {
      "title": "Hot Exfil: Now or Never",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Valkyrie",
          "text": "I need space to land!"
        },
        {
          "type": "speech",
          "speaker": "Valkyrie",
          "text": "Now—or never."
        }
      ],
      "gmPurpose": "Make the ending physical and urgent.",
      "followUp": "Run 2–4 rounds max, using unresolved crises as persistent hazards."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot"
    ],
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_valkyrie_strain"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "hot-exfil",
      "escape",
      "valkyrie"
    ]
  }
];
