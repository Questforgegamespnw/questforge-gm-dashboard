export const supportingActors = [
  /// MARRIS VALE ///
  {
    id: "actor_marris_vale",
    name: "Marris Vale",
    role: "Acting boatswain / exhausted crew leader",
    group: "Expedition Sailors",
    modeId: "campaign_placeholder",
    campaignId: "campaign_placeholder",
    arcId: "vanished_island",
    status: "available",
    currentLocation: "location_island_shore",
    currentState:
      "Holding the remaining sailors together after what felt like hours of fighting.",
    sticky: true,

    presentation: {
      vibe: "Ragged authority held together by obligation.",
      physicality:
        "Weather-beaten, broad-shouldered, and soaked through, with one sleeve torn open and a bloodied rope wrapped around one hand.",
      voice: "Short orders delivered through exhaustion.",
      sceneImpact:
        "Provides immediate battlefield context and keeps the frightened crew functional.",
      visualAnchor:
        "Braced beside the mainmast with a boarding hook held like a spear."
    },

    motivation: {
      wants:
        "Keep the ship afloat and bring every surviving sailor home.",
      fears:
        "That the party has no way to lead them back through the island's magic.",
      leverage:
        "The crew still listens when Marris gives an order."
    },

    knowledge: {
      knows: [
        "The attack has lasted far longer than the party expects.",
        "The merfolk repeatedly targeted the anchor line and rudder.",
        "The crew launched more than one signal before the party returned."
      ],
      secrets: [
        "Marris is no longer certain the ship can safely leave under its own power."
      ]
    },

    quickLines: [
      "Where in all the drowned hells have you been?",
      "They keep going for the rudder!",
      "Count heads first. Questions after."
    ],

    answerMoments: [
      {
        id: "answer_marris_how_long",
        question: "How long have you been fighting?",
        answer:
          "Marris insists the attack has continued for several hours, despite the party experiencing far less time inland.",
        tableLine:
          "Hours. We have been holding this deck for bloody hours.",
        reveals: [
          "Time on the water passed differently from time on the island.",
          "The crew attempted to signal the party repeatedly.",
          "The sailors are nearly exhausted."
        ],
        relatedThreads: [
          "thread_time_dilation",
          "thread_ship_under_attack"
        ],
        tags: ["answerable", "time-dilation", "crew", "immediate-truth"]
      }
    ],

    relationships: [
      {
        target: "actor_tessa_quill",
        label: "relies on",
        note:
          "Trusts Tessa to keep the ship functional while Marris manages the crew."
      },
      {
        target: "actor_bram_noll",
        label: "protective of",
        note:
          "Knows Bram is hurt worse than he admits."
      }
    ],

    relatedThreads: [
      "thread_ship_under_attack",
      "thread_time_dilation",
      "thread_missing_ships"
    ],

    tags: [
      "campaign-placeholder",
      "vanished-island",
      "sailor",
      "crew-leader",
      "npc"
    ],

    gmNotes:
      "Use Marris as the crew's immediate spokesperson and the clearest delivery point for the time-dilation reveal.",

    quote: "Count heads first. Questions after."
  },

  /// TESSA QUILL ///
  {
    id: "actor_tessa_quill",
    name: "Tessa Quill",
    role: "Shipwright's mate / emergency repair hand",
    group: "Expedition Sailors",
    modeId: "campaign_placeholder",
    campaignId: "campaign_placeholder",
    arcId: "vanished_island",
    status: "available",
    currentLocation: "location_island_shore",
    currentState:
      "Trying to stop water entering through damage near the stern.",
    sticky: false,

    presentation: {
      vibe: "Practical competence running on fumes.",
      physicality:
        "Small, wiry, and grease-streaked, with wet hair plastered across her face and a hammer tucked into her belt.",
      voice: "Fast, blunt, and mechanically specific.",
      sceneImpact:
        "Turns the ship itself into an active rescue objective.",
      visualAnchor:
        "Kneeling in seawater beside a cracked stern board, hammering cloth and pitch into the gap."
    },

    motivation: {
      wants:
        "Keep the vessel seaworthy long enough to escape.",
      fears:
        "That the rudder or lower hull will fail before repairs can be completed.",
      leverage:
        "Understands which damage is cosmetic and which damage will sink the ship."
    },

    knowledge: {
      knows: [
        "The merfolk were deliberately damaging steering and anchor components.",
        "The hull is taking water near the stern.",
        "The ship can still move if the immediate damage is contained."
      ],
      secrets: [
        "A complete repair may require materials from one of the missing ships."
      ]
    },

    quickLines: [
      "Fight them or help me patch this—pick one!",
      "The hull is holding. The rudder is not.",
      "That crack gets any wider and we swim home."
    ],

    answerMoments: [
      {
        id: "answer_tessa_can_the_ship_sail",
        question: "Can the ship still sail?",
        answer:
          "The hull can survive for now, but the damaged rudder and anchor gear make departure dangerous.",
        tableLine:
          "Float? Yes. Steer? Ask me again when no one is stabbing at us.",
        reveals: [
          "The ship has suffered meaningful but repairable damage.",
          "The attackers were targeting mobility rather than causing random destruction.",
          "Leaving immediately may not be possible."
        ],
        relatedThreads: [
          "thread_ship_under_attack",
          "thread_missing_ships"
        ],
        tags: ["answerable", "ship-damage", "repair", "merfolk-objective"]
      }
    ],

    relationships: [
      {
        target: "actor_marris_vale",
        label: "trusts",
        note:
          "Believes Marris will buy her the time needed to save the ship."
      },
      {
        target: "actor_pell_sedge",
        label: "frustrated with",
        note:
          "Keeps shouting for Pell to bring the correct tools."
      }
    ],

    relatedThreads: [
      "thread_ship_under_attack",
      "thread_missing_ships"
    ],

    tags: [
      "campaign-placeholder",
      "vanished-island",
      "sailor",
      "repair",
      "npc"
    ],

    gmNotes:
      "Use Tessa to communicate ship condition and provide noncombat tasks during the boarding fight.",

    quote: "The hull is holding. The rudder is not."
  },

  /// BRAM NOLL ///
  {
    id: "actor_bram_noll",
    name: "Bram Noll",
    role: "Deckhand / wounded defender",
    group: "Expedition Sailors",
    modeId: "campaign_placeholder",
    campaignId: "campaign_placeholder",
    arcId: "vanished_island",
    status: "injured",
    currentLocation: "location_island_shore",
    currentState:
      "Bleeding heavily but refusing to leave the deck while another sailor remains unaccounted for.",
    sticky: false,

    presentation: {
      vibe: "Stubborn courage without enough strength left to support it.",
      physicality:
        "Young, lanky, and pale beneath a layer of seawater, with a crude bandage tied tightly around his thigh.",
      voice: "Breathless defiance interrupted by pain.",
      sceneImpact:
        "Creates a visible rescue priority and makes the sailors' losses personal.",
      visualAnchor:
        "Dragging himself upright against the rail with a broken oar in both hands."
    },

    motivation: {
      wants:
        "Find the missing sailor and prove he can still help.",
      fears:
        "Being ordered below while someone else is taken.",
      leverage:
        "Saw one of the merfolk drag someone over the side."
    },

    knowledge: {
      knows: [
        "At least one sailor went overboard during the attack.",
        "The merfolk tried to capture crew members alive.",
        "Something large moved beneath the ship during the fighting."
      ],
      secrets: [
        "Bram briefly saw what looked like the mast of another vessel beyond the reef."
      ]
    },

    quickLines: [
      "I'm not finished yet.",
      "They took someone over the side.",
      "There was another mast out there—I swear it."
    ],

    answerMoments: [
      {
        id: "answer_bram_what_did_you_see",
        question: "What did you see in the water?",
        answer:
          "Bram saw a sailor dragged overboard and glimpsed what may have been another ship beyond the reef.",
        tableLine:
          "One of ours went under—and farther out, I saw a mast where no mast should be.",
        reveals: [
          "The attackers may be taking prisoners.",
          "Another missing vessel may be nearby.",
          "The waters conceal more than the current boarding party."
        ],
        relatedThreads: [
          "thread_ship_under_attack",
          "thread_missing_ships"
        ],
        tags: ["answerable", "missing-sailor", "missing-ships", "witness"]
      }
    ],

    relationships: [
      {
        target: "actor_marris_vale",
        label: "seeks approval from",
        note:
          "Does not want Marris to see him as a liability."
      },
      {
        target: "actor_nella_voss",
        label: "worried about",
        note:
          "Believes Nella is the sailor who was pulled overboard."
      }
    ],

    relatedThreads: [
      "thread_ship_under_attack",
      "thread_missing_ships"
    ],

    tags: [
      "campaign-placeholder",
      "vanished-island",
      "sailor",
      "injured",
      "witness",
      "npc"
    ],

    gmNotes:
      "Use Bram as the most obvious immediate medical need and as the first clue that a missing ship may be nearby.",

    quote: "They took someone over the side."
  },

  /// PELL SEDGE ///
  {
    id: "actor_pell_sedge",
    name: "Pell Sedge",
    role: "Cabin hand / frightened utility sailor",
    group: "Expedition Sailors",
    modeId: "campaign_placeholder",
    campaignId: "campaign_placeholder",
    arcId: "vanished_island",
    status: "available",
    currentLocation: "location_island_shore",
    currentState:
      "Running tools, cutting nets, and trying not to panic.",
    sticky: false,

    presentation: {
      vibe: "Terrified, useful, and one bad moment from freezing.",
      physicality:
        "Barefoot, narrow-faced, and dressed in an oversized salt-stiff coat with several tools shoved through its belt.",
      voice: "Rapid questions and repeated confirmations.",
      sceneImpact:
        "Shows how frightening the attack is to an ordinary, inexperienced sailor.",
      visualAnchor:
        "Clutching an axe meant for rope while staring at the water beside the hull."
    },

    motivation: {
      wants:
        "Do exactly what someone competent tells him and survive.",
      fears:
        "Anything reaching up from beneath the ship.",
      leverage:
        "Has been moving between the deck and lower hold and knows where everyone was last seen."
    },

    knowledge: {
      knows: [
        "The first attack came from beneath the ship.",
        "The crew heard scraping against the hull before seeing any attackers.",
        "Supplies in the lower hold have shifted or been disturbed."
      ],
      secrets: [
        "Pell heard knocking from outside the hull after the fighting began."
      ]
    },

    quickLines: [
      "Tell me where you need me!",
      "Something was under us before they climbed aboard.",
      "That knocking wasn't the hull settling."
    ],

    answerMoments: [
      {
        id: "answer_pell_how_did_it_start",
        question: "How did the attack begin?",
        answer:
          "The crew first heard scraping and knocking beneath the hull before the merfolk boarded.",
        tableLine:
          "We heard them underneath us first. Scraping. Then three knocks against the hull.",
        reveals: [
          "The attack was coordinated.",
          "Something may still be beneath or attached to the vessel.",
          "The merfolk may have attempted communication or signaling."
        ],
        relatedThreads: [
          "thread_ship_under_attack"
        ],
        tags: ["answerable", "attack", "underwater", "clue"]
      }
    ],

    relationships: [
      {
        target: "actor_tessa_quill",
        label: "takes orders from",
        note:
          "Tessa's certainty gives Pell something concrete to focus on."
      },
      {
        target: "actor_old_cobb",
        label: "looks to for reassurance",
        note:
          "Assumes Cobb has survived worse, whether or not that is true."
      }
    ],

    relatedThreads: [
      "thread_ship_under_attack",
      "thread_missing_ships"
    ],

    tags: [
      "campaign-placeholder",
      "vanished-island",
      "sailor",
      "crew",
      "nervous",
      "npc"
    ],

    gmNotes:
      "Use Pell to deliver strange sensory details and perform small support actions wherever the party directs him.",

    quote: "That knocking wasn't the hull settling."
  },

  /// OLD COBB ///
  {
    id: "actor_old_cobb",
    name: "Old Cobb",
    role: "Veteran sailor / superstitious lookout",
    group: "Expedition Sailors",
    modeId: "campaign_placeholder",
    campaignId: "campaign_placeholder",
    arcId: "vanished_island",
    status: "available",
    currentLocation: "location_island_shore",
    currentState:
      "Watching the water rather than the boarders, convinced the real danger has not surfaced yet.",
    sticky: false,

    presentation: {
      vibe: "Salt-bitten experience sharpened into grim superstition.",
      physicality:
        "Bent with age but rope-strong, wearing a patched wool cap and a coat that seems older than half the crew.",
      voice: "Low, dry, and certain in ways that make nervous people listen.",
      sceneImpact:
        "Points attention beyond the immediate fight and toward the wider mystery.",
      visualAnchor:
        "Standing at the rail with a lantern held over black water, ignoring the chaos behind him."
    },

    motivation: {
      wants:
        "Get the surviving crew away from the island before whatever lives below notices them fully.",
      fears:
        "That the merfolk attack is only a warning or distraction.",
      leverage:
        "Decades at sea have taught him which impossible sights should not be dismissed."
    },

    knowledge: {
      knows: [
        "The stars and tides no longer match the time the crew believes has passed.",
        "The water around the island behaves unlike any normal current.",
        "The merfolk repeatedly looked toward something farther offshore."
      ],
      secrets: [
        "Cobb has heard old harbor stories about ships returning years after they vanished."
      ]
    },

    quickLines: [
      "These waters have forgotten the moon.",
      "The fishfolk keep looking past us.",
      "This is not the first ship the island has kept."
    ],

    answerMoments: [
      {
        id: "answer_cobb_what_is_wrong_with_time",
        question: "How do you know something is wrong with time?",
        answer:
          "The stars, tide, and length of darkness do not agree with one another.",
        tableLine:
          "The tide says evening. The stars say midnight. My bones say neither.",
        reveals: [
          "The temporal distortion has observable physical effects.",
          "The crew experienced enough time to notice changes in sky and tide.",
          "The island's influence may affect more than human perception."
        ],
        relatedThreads: [
          "thread_time_dilation",
          "thread_island_distortion"
        ],
        tags: ["answerable", "time-dilation", "navigation", "old-sailor"]
      }
    ],

    relationships: [
      {
        target: "actor_pell_sedge",
        label: "steadies",
        note:
          "Keeps Pell moving by treating every frightening event as manageable."
      },
      {
        target: "actor_marris_vale",
        label: "respects",
        note:
          "Supports Marris publicly but privately believes the ship should be abandoned."
      }
    ],

    relatedThreads: [
      "thread_time_dilation",
      "thread_island_distortion",
      "thread_missing_ships"
    ],

    tags: [
      "campaign-placeholder",
      "vanished-island",
      "sailor",
      "veteran",
      "superstitious",
      "npc"
    ],

    gmNotes:
      "Use Cobb to validate supernatural clues without providing definitive explanations.",

    quote: "These waters have forgotten the moon."
  }
];

