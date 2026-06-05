export const fireableMoments = [
  
  {
    id: "moment_prologue_death_and_dissolution",
    title: "PROLOGUE STARTER — Death & Dissolution",
    type: "prologue-starter",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_astral_stairway"],

    trigger: "Use as the first scene of a fresh Valhalla campaign, or as a prologue recap before the first Act 1 drop.",
    compact: "Players describe legendary deaths, then awaken as suppressed shades in the Astral Stairway.",

    spotlight: {
      title: "Prologue Starter: You Are Not Gone",
      readAloud: [
        {
          type: "narration",
          text: "You are not gone."
        },
        {
          type: "narration",
          text: "You are not yet anything."
        },
        {
          type: "narration",
          text: "Names dissolve, forms blur, and others drift around you."
        }
      ],
      gmPurpose: "Open the campaign through death, identity loss, and afterlife routing without over-explaining the cosmology.",
      followUp: "Let each player anchor one death image if needed, then fire the Baldur / Shepherds moment."
    },

    relatedActors: [],
    relatedThreads: ["thread_chosen_vs_assigned"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "starter-scene",
      "campaign-launch",
      "death",
      "astral-stairway",
      "soul-routing"
    ],

    gmNotes: "Identity suppression protects souls from astral predators that feed on conscious identity. Make them feel disoriented, not confused. Do not linger too long."
  },

  {
    id: "moment_prologue_shepherds_and_baldur",
    title: "PROLOGUE — Shepherds of the Dead",
    type: "prologue-reveal",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_astral_stairway"],

    trigger: "After players acclimate to the Way and understand they are among many dead souls.",
    compact: "Multiple shepherds call souls toward different afterlives. Baldur routes the party to Valhalla.",

    spotlight: {
      title: "Baldur: Gold or Orange Tickets",
      readAloud: [
        {
          type: "narration",
          text: "Figures call to the dead. Paths diverge. Some souls move toward warmth, others toward shadow, others toward doors you cannot understand."
        },
        {
          type: "speech",
          speaker: "Baldur",
          text: "Those with gold or orange tickets—come with me."
        },
        {
          type: "speech",
          speaker: "Baldur",
          text: "This way."
        }
      ],
      gmPurpose: "Make the afterlife feel sorted, calm, and slightly strange while seeding multi-pantheon routing and later 'on loan' reveals.",
      followUp: "Guide the party toward Valhalla. If they try to deviate, the paths gently correct."
    },

    relatedActors: ["actor_baldur_shepherd_of_the_dead"],
    relatedThreads: ["thread_chosen_vs_assigned", "thread_loki_balder_misdirection"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "afterlife",
      "baldur",
      "sorting",
      "campaign-launch"
    ],

    gmNotes: "The party is being directed, not freely choosing. No matter what, they reach Valhalla."
  },

  {
    id: "moment_prologue_astral_bridge_to_valhalla",
    title: "PROLOGUE — The Bridge to Valhalla",
    type: "prologue-transition",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_astral_stairway"],

    trigger: "After Baldur begins leading the party from the Astral Stairway toward Valhalla.",
    compact: "The party sees the astral sea and the things beyond the path before Valhalla's boundary rises ahead.",

    spotlight: {
      title: "The Safe Path Across the Sea",
      readAloud: [
        {
          type: "narration",
          text: "The path beneath you narrows into something like a bridge, though it was not built by hands."
        },
        {
          type: "narration",
          text: "For one moment, the gray opens."
        },
        {
          type: "narration",
          text: "Below and around you stretches an impossible sea: depth without water, stars without sky, shapes moving beneath the surface of thought."
        },
        {
          type: "narration",
          text: "Something vast turns far below. Not toward you. Not yet."
        },
        {
          type: "speech",
          speaker: "Baldur",
          text: "Eyes forward."
        },
        {
          type: "narration",
          text: "Ahead, gold gathers in the distance. Walls, towers, banners, impossible height. A boundary bright enough to make the dark around it feel kept out."
        },
        {
          type: "narration",
          text: "Valhalla does not appear like a destination. It appears like a claim."
        }
      ],
      gmPurpose: "Show the danger outside the routed afterlife path, establish Baldur as a competent guide, and make Valhalla feel like a protected divine domain before the party enters it.",
      followUp: "Move directly into the Yggdrasilmaed restoration moment with Sven."
    },

    relatedActors: ["actor_baldur_shepherd_of_the_dead"],
    relatedThreads: [
      "thread_chosen_vs_assigned",
      "thread_loki_balder_misdirection"
    ],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "astral-stairway",
      "astral-sea",
      "valhalla",
      "domain-boundary",
      "baldur",
      "campaign-launch"
    ],

    gmNotes: "Keep this brief and awe-forward. Do not turn the astral sea into an encounter. The monsters are scale, warning, and cosmology texture. Baldur redirects attention quickly because conscious identity is dangerous here."
  },

  {
    id: "moment_prologue_gates_of_valhalla",
    title: "PROLOGUE — The Gates of Valhalla",
    type: "prologue-threshold",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_astral_stairway"],

    trigger: "After the party crosses the astral bridge and before Sven gives them Yggdrasilmaed.",
    compact: "Valhalla's gates rise ahead: not welcoming, exactly, but absolute.",

    spotlight: {
      title: "The Boundary of the Hall",
      readAloud: [
        {
          type: "narration",
          text: "The bridge ends where gold and iron begin."
        },
        {
          type: "narration",
          text: "Before you rise gates taller than any fortress wall you knew in life, carved with wars, oaths, feasts, deaths, and names too old to read."
        },
        {
          type: "narration",
          text: "Beyond them, you hear it: voices, horns, steel, laughter, song. A thousand endings refusing to stay ended."
        },
        {
          type: "narration",
          text: "The dark behind you does not cross the threshold."
        },
        {
          type: "speech",
          speaker: "Baldur",
          text: "In you go."
        }
      ],
      gmPurpose: "Give Valhalla a clear domain-boundary image before the party enters the safer, warmer Sven/Yggdrasilmaed beat.",
      followUp: "Move immediately into Sven's restoration moment. Do not open the full hub yet."
    },

    relatedActors: ["actor_baldur_shepherd_of_the_dead"],
    relatedThreads: [
      "thread_chosen_vs_assigned",
      "thread_loki_balder_misdirection"
    ],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "valhalla",
      "threshold",
      "gates",
      "domain-boundary",
      "baldur",
      "campaign-launch"
    ],

    gmNotes: "Keep this as a threshold image, not a full Valhalla tour. The gates should feel protective, immense, and absolute. Then hand the emotional landing to Sven."
  },

  {
    id: "moment_prologue_yggdrasilmaed_restoration",
    title: "PROLOGUE — Rebirth with Sven",
    type: "prologue-restoration",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_valhalla_mead_hall"],

    trigger: "After the party reaches Valhalla from the Astral Stairway.",
    compact: "Sven gives the party Yggdrasilmaed. Bodies, names, and purpose return.",

    spotlight: {
      title: "Sven: Drink, Then Ask Questions",
      readAloud: [
        {
          type: "narration",
          text: "Color returns violently: sky, structure, weight."
        },
        {
          type: "narration",
          text: "The world does not fade in. It asserts itself."
        },
        {
          type: "narration",
          text: "The drink burns, then settles. Your body remembers itself. Names. Faces. Purpose."
        },
        {
          type: "speech",
          speaker: "Sven",
          text: "Drink. Then ask questions."
        }
      ],
      gmPurpose: "Restore identity, introduce Yggdrasilmaed, and make Valhalla feel safe and functional before later failures matter.",
      followUp: "Give the Yggdrasilmaed resource, answer only immediate orientation questions, then move to Svinhild's first briefing."
    },

    relatedActors: ["actor_sven_keeper_of_the_mead"],
    relatedThreads: ["thread_chosen_vs_assigned", "thread_sap_flow_weakening"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "valhalla",
      "sven",
      "mead",
      "rebirth",
      "yggdrasilmaed",
      "campaign-launch"
    ],

    gmNotes: "Yggdrasilmaed starter rule: each player begins with 4 uses. Per use: heal 50% HP OR restore spell slots/abilities as pseudo-long-rest without healing. Let warmth land, but do not fully explain the system."
  },

  {
    id: "moment_prologue_svinhild_first_mission_briefing",
    title: "PROLOGUE — First Einherjar Briefing",
    type: "prologue-briefing",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",

    locationIds: ["location_valhalla_aerie"],

    trigger: "After the party becomes whole and before the first Bifrost deployment.",
    compact: "Svinhild defines the strike loop: deploy, assess, neutralize, extract. Do not reveal what you are.",

    spotlight: {
      title: "Svinhild: Deploy. Assess. Neutralize. Withdraw.",
      readAloud: [
        {
          type: "narration",
          text: "Mounted Valkyries cut through the sky in organized drills before one of them descends and turns spectacle into orders."
        },
        {
          type: "speech",
          speaker: "Svinhild",
          text: "You are here for a reason."
        },
        {
          type: "speech",
          speaker: "Svinhild",
          text: "Deploy. Assess. Neutralize. Withdraw."
        },
        {
          type: "speech",
          speaker: "Svinhild",
          text: "You do not reveal what you are."
        },
        {
          type: "speech",
          speaker: "Heimdall",
          text: "You will be seen."
        }
      ],
      gmPurpose: "Establish the Einherjar strike system, secrecy rule, and first mission frame without exposing the deeper system failure.",
      followUp: "Immediately fire the Bifrost drop into Frostroot."
    },

    relatedActors: ["actor_svinhild_valkyrie_commander"],
    relatedThreads: ["thread_chosen_vs_assigned", "thread_system_correcting_anomaly"],
    reference: "arcs/frost-root/library/prologue/prologue_astral_stairway_first_descent.md",
    tags: [
      "prologue",
      "scene-0",
      "valhalla",
      "briefing",
      "einherjar",
      "mission-loop",
      "bifrost",
      "campaign-launch",
      "frost-root-runway"
    ],

    gmNotes: "The party believes they were chosen. Hidden truth: they were assigned to a failing system. Reveal enough to run the loop, not enough to reveal system truth."
  },

  {
    id: "moment_valhalla_hub_choose_direction",
    title: "Choose Where to Go",
    type: "navigation",
    trigger: "When players finish the return beat and need table-facing options.",
    compact: "Valhalla opens around them: Mead-Hall, Forge-Lanes, Golden Fields, Quiet Rows, Training Grounds, or the Valkyrie Aerie.",
    spotlight: {
      title: "Choose Where to Go",
      readAloud: [
        {
          type: "narration",
          text: "Valhalla does not close around you."
        },
        {
          type: "narration",
          text: "It opens."
        },
        {
          type: "narration",
          text: "Warmth and music roll from the Mead-Hall. Forgefire glows in the distance. Golden fields ripple under impossible sunlight. Above, the Valkyrie Aerie waits in the wind."
        }
      ],
      gmPurpose: "Hand agency back to the players and let them choose emotional pacing.",
      followUp: "Click the chosen child location."
    },
    tags: [
      "valhalla",
      "hub",
      "choice",
      "navigation"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_hub"
    ]
  },
  {
    id: "moment_bifrost_clean_return",
    title: "Clean Return",
    type: "return",
    trigger: "Use when the return should feel functional and reassuring.",
    compact: "Heat fades into warmth. The system still catches them.",
    spotlight: {
      title: "Clean Return",
      readAloud: [
        {
          type: "narration",
          text: "Rainbow fire tears away from your skin."
        },
        {
          type: "narration",
          text: "The platform catches you with impossible force."
        },
        {
          type: "narration",
          text: "Then the heat becomes warmth, and Valhalla is there again."
        }
      ],
      gmPurpose: "Establish the baseline so later deviations matter.",
      followUp: "Move to Heimdall or immediate hub reactions."
    },
    tags: [
      "valhalla",
      "bifrost",
      "return",
      "baseline"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_bifrost_platform"
    ]
  },
  {
    id: "moment_bifrost_lingering_mission_sensation",
    title: "Lingering Mission Sensation",
    type: "omen",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when something from the previous mission should follow them home.",
    compact: "A sound, smell, or injury from the mission lingers one breath too long.",
    spotlight: {
      title: "Lingering Mission Sensation",
      readAloud: [
        {
          type: "narration",
          text: "The battle should be gone."
        },
        {
          type: "narration",
          text: "For one breath, it is not."
        },
        {
          type: "narration",
          text: "You still smell the place you left behind. Then Valhalla’s warmth pushes in and the sensation vanishes."
        }
      ],
      gmPurpose: "Signal return-system strain without stopping the hub loop.",
      followUp: "Ask one player what detail lingered for them."
    },
    tags: [
      "valhalla",
      "bifrost",
      "return",
      "omen",
      "system-strain"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_bifrost_platform"
    ]
  },
  {
    id: "moment_bifrost_one_heartbeat_late",
    title: "One Heartbeat Late",
    type: "system-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when the return should feel slightly delayed or misaligned.",
    compact: "One of them arrives a heartbeat after the others.",
    spotlight: {
      title: "One Heartbeat Late",
      readAloud: [
        {
          type: "narration",
          text: "The party strikes the platform in a crash of light."
        },
        {
          type: "narration",
          text: "For one heartbeat, one space is empty."
        },
        {
          type: "narration",
          text: "Then the last streak of color lands too hard, too late, and the warmth catches up."
        }
      ],
      gmPurpose: "Create a visible but non-catastrophic return anomaly.",
      followUp: "Let Heimdall notice without explaining."
    },
    tags: [
      "valhalla",
      "bifrost",
      "return",
      "misalignment"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_bifrost_platform"
    ]
  },
  {
    id: "moment_heimdall_you_return",
    title: "You Return",
    type: "acknowledgment",
    trigger: "Use as the normal Heimdall baseline after arrival.",
    compact: "Heimdall gives the minimum possible confirmation: “You return.”",
    spotlight: {
      title: "You Return",
      readAloud: [
        {
          type: "narration",
          text: "Heimdall’s gaze moves across you once."
        },
        {
          type: "narration",
          text: "His sword remains planted before him."
        },
        {
          type: "speech",
          speaker: "Heimdall",
          text: "You return."
        }
      ],
      gmPurpose: "Confirm that the system registered the party’s return.",
      followUp: "Move quickly unless players press him."
    },
    tags: [
      "valhalla",
      "heimdall",
      "threshold",
      "baseline"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_heimdalls_threshold"
    ]
  },
  {
    id: "moment_heimdall_you_were_seen",
    title: "You Were Seen",
    type: "foreshadow",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when the mission exposed the party to something watching across systems.",
    compact: "Heimdall says only: “You were seen.”",
    spotlight: {
      title: "You Were Seen",
      readAloud: [
        {
          type: "narration",
          text: "Heimdall does not look past you."
        },
        {
          type: "narration",
          text: "He looks through the path you used to return."
        },
        {
          type: "speech",
          speaker: "Heimdall",
          text: "You were seen."
        }
      ],
      gmPurpose: "Seed external attention without naming the watcher.",
      followUp: "Answer follow-up questions with short, final statements."
    },
    tags: [
      "valhalla",
      "heimdall",
      "foreshadow",
      "watcher"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_heimdalls_threshold"
    ]
  },
  {
    id: "moment_heimdall_says_nothing",
    title: "Heimdall Says Nothing",
    type: "omen",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use only when you want the table to understand something is very wrong.",
    compact: "Heimdall watches them return. He does not speak.",
    spotlight: {
      title: "Heimdall Says Nothing",
      readAloud: [
        {
          type: "narration",
          text: "Heimdall is waiting."
        },
        {
          type: "narration",
          text: "His sword is planted before him."
        },
        {
          type: "narration",
          text: "His gaze moves across each of you once."
        },
        {
          type: "narration",
          text: "He says nothing."
        }
      ],
      gmPurpose: "Escalate through absence. Do not explain the silence.",
      followUp: "Let players ask questions; answer minimally."
    },
    tags: [
      "valhalla",
      "heimdall",
      "silence",
      "omen",
      "high-escalation"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_heimdalls_threshold"
    ]
  },
  {
    id: "moment_sven_sit_drink",
    title: "Sven: Sit. Drink.",
    type: "decompression",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1
    },
    trigger: "Use when the table needs warmth after danger.",
    compact: "Sven makes room, puts a drink down, and refuses to let heroics replace breathing.",
    spotlight: {
      title: "Sven: Sit. Drink.",
      readAloud: [
        {
          type: "narration",
          text: "Sven is already clearing space before you reach the table."
        },
        {
          type: "narration",
          text: "A tankard lands in front of you."
        },
        {
          type: "speech",
          speaker: "Sven",
          text: "Sit. Drink. You’re still here—that matters."
        }
      ],
      gmPurpose: "Give the party permission to decompress and talk in-character.",
      followUp: "Ask who accepts the drink and who does not."
    },
    tags: [
      "valhalla",
      "mead-hall",
      "sven",
      "decompression"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_mead_hall"
    ]
  },
  {
    id: "moment_mead_tastes_wrong",
    title: "The Mead Tastes Wrong",
    type: "system-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when you want subtle return-cycle strain in a warm scene.",
    compact: "The mead restores, but the taste lands slightly wrong.",
    spotlight: {
      title: "The Mead Tastes Wrong",
      readAloud: [
        {
          type: "narration",
          text: "The mead is warm."
        },
        {
          type: "narration",
          text: "It does what it always does: steadies the hands, fills the chest, reminds the body it is alive."
        },
        {
          type: "narration",
          text: "But the aftertaste is thinner than you remember."
        }
      ],
      gmPurpose: "Make the Yggdrasilmaed/return loop feel slightly less reliable.",
      followUp: "Sven notices if players react."
    },
    tags: [
      "valhalla",
      "mead-hall",
      "yggdrasilmaed",
      "system-strain"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_mead_hall"
    ]
  },
  {
    id: "moment_warrior_remembers_wrong_death",
    title: "Warrior Remembers the Wrong Death",
    type: "memory-drift",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when Einherjar memory weirdness should surface socially.",
    compact: "A warrior cheerfully remembers fighting beside a PC in a battle that never happened.",
    spotlight: {
      title: "Warrior Remembers the Wrong Death",
      readAloud: [
        {
          type: "narration",
          text: "An Einherjar slams a hand on the table beside you."
        },
        {
          type: "speech",
          speaker: "Einherjar",
          text: "There you are! I knew I remembered that shield-work. We died well at the Black Ford, you and I."
        },
        {
          type: "narration",
          text: "No one at the table seems to think the statement is strange."
        }
      ],
      gmPurpose: "Foreshadow memory drift while keeping the Mead-Hall lively.",
      followUp: "Let the player decide whether to correct them."
    },
    tags: [
      "valhalla",
      "mead-hall",
      "memory",
      "einherjar",
      "foreshadow"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_mead_hall"
    ]
  },
  {
    id: "moment_hall_goes_silent",
    title: "The Hall Goes Silent",
    type: "omen",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use sparingly when you want the Mead-Hall to feel less eternal.",
    compact: "For one breath, the whole hall stops.",
    spotlight: {
      title: "The Hall Goes Silent",
      readAloud: [
        {
          type: "narration",
          text: "The laughter cuts out."
        },
        {
          type: "narration",
          text: "No cup hits wood. No boot scrapes floor. No fire pops in the hearth."
        },
        {
          type: "narration",
          text: "Then the hall roars back to life like nothing happened."
        }
      ],
      gmPurpose: "Turn warmth hollow for one controlled beat.",
      followUp: "Do not explain it immediately."
    },
    tags: [
      "valhalla",
      "mead-hall",
      "silence",
      "omen",
      "high-escalation"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_mead_hall"
    ]
  },
  {
    id: "moment_eira_gold_is_thinner",
    title: "Eira: The Gold Is Thinner",
    type: "clue",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when players speak with Eira or inspect the crops.",
    compact: "Eira names the problem in harvest language, not prophecy.",
    spotlight: {
      title: "Eira: The Gold Is Thinner",
      readAloud: [
        {
          type: "narration",
          text: "Eira kneels and lets the wheat run through her fingers."
        },
        {
          type: "speech",
          speaker: "Eira",
          text: "The gold is thinner this season."
        },
        {
          type: "narration",
          text: "She says it softly, like naming it too loudly might make it worse."
        }
      ],
      gmPurpose: "Deliver root sickness through grounded, agricultural imagery.",
      followUp: "Point toward the idea that Valhalla’s sustenance is linked to deeper system health."
    },
    tags: [
      "valhalla",
      "golden-fields",
      "eira",
      "yggdrasil",
      "clue"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_golden_fields"
    ]
  },
  {
    id: "moment_fields_wind_reverses",
    title: "The Wind Reverses",
    type: "system-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use as a quiet environmental wrongness beat.",
    compact: "The field wind stops and resumes from the wrong direction.",
    spotlight: {
      title: "The Wind Reverses",
      readAloud: [
        {
          type: "narration",
          text: "The wheat moves in one long golden wave."
        },
        {
          type: "narration",
          text: "Then the wind stops."
        },
        {
          type: "narration",
          text: "When it returns, every stalk bends the other way at once."
        }
      ],
      gmPurpose: "Show natural order becoming too system-like or corrected.",
      followUp: "Let perceptive players connect it to Yggdrasil/root pressure."
    },
    tags: [
      "valhalla",
      "golden-fields",
      "wind",
      "omen"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_golden_fields"
    ]
  },
  {
    id: "moment_wheat_blackens_then_recovers",
    title: "Wheat Blackens, Then Recovers",
    type: "corruption-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use when the players need a visible but brief corruption sign.",
    compact: "A patch of wheat blackens for one breath, then returns to gold.",
    spotlight: {
      title: "Wheat Blackens, Then Recovers",
      readAloud: [
        {
          type: "narration",
          text: "A dark ripple passes through the wheat."
        },
        {
          type: "narration",
          text: "For one breath, the field is not gold but black-veined and brittle."
        },
        {
          type: "narration",
          text: "Then the color returns, too quickly, like the world corrected itself."
        }
      ],
      gmPurpose: "Make root sickness visible without making it fully understood.",
      followUp: "Eira may pretend she did not see it unless pressed."
    },
    tags: [
      "valhalla",
      "golden-fields",
      "corruption",
      "yggdrasil",
      "foreshadow"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_golden_fields"
    ]
  },
  {
    id: "moment_brokk_you_are_one_of_those",
    title: "Brokk: You’re One of Those",
    type: "recognition",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1
    },
    trigger: "Use when a Corewright or old-tech-linked PC draws Brokk’s attention.",
    compact: "Brokk recognizes the shape of old dangerous craft.",
    spotlight: {
      title: "Brokk: You’re One of Those",
      readAloud: [
        {
          type: "narration",
          text: "Brokk stops mid-strike."
        },
        {
          type: "narration",
          text: "The hammer hangs above the anvil for a breath longer than it should."
        },
        {
          type: "speech",
          speaker: "Brokk",
          text: "Ah. You’re one of those."
        }
      ],
      gmPurpose: "Make the Forge recognize a PC’s deeper origin or old-war resonance.",
      followUp: "Follow with a practical warning, not a lore dump."
    },
    tags: [
      "valhalla",
      "forge-lanes",
      "brokk",
      "corewright",
      "recognition"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_forge_lanes"
    ]
  },
  {
    id: "moment_forge_sealed_door_hums",
    title: "The Sealed Door Hums",
    type: "hook",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when players linger near old projects or ask what is forbidden.",
    compact: "A sealed forge door reacts before anyone touches it.",
    spotlight: {
      title: "The Sealed Door Hums",
      readAloud: [
        {
          type: "narration",
          text: "Behind a rune-bound door, something hums."
        },
        {
          type: "narration",
          text: "The sound is low enough to feel in your teeth."
        },
        {
          type: "narration",
          text: "Brokk does not look at the door."
        },
        {
          type: "speech",
          speaker: "Dwarf artisan",
          text: "No."
        }
      ],
      gmPurpose: "Seed sealed-project danger and ancient war-tech pressure.",
      followUp: "Players can press Brokk, but he should resist easy answers."
    },
    tags: [
      "valhalla",
      "forge-lanes",
      "sealed-project",
      "ancient-war-tech"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_forge_lanes"
    ]
  },
  {
    id: "moment_weapon_reacts_before_touch",
    title: "Weapon Reacts Before Touch",
    type: "system-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use when the Forge should feel alive and dangerous.",
    compact: "A weapon shifts, rings, or warms before a player reaches it.",
    spotlight: {
      title: "Weapon Reacts Before Touch",
      readAloud: [
        {
          type: "narration",
          text: "The weapon moves before your hand reaches it."
        },
        {
          type: "narration",
          text: "Not much. Just enough for metal to whisper against stone."
        },
        {
          type: "narration",
          text: "The nearest smith goes very still."
        }
      ],
      gmPurpose: "Show creation becoming responsive, predictive, or unstable.",
      followUp: "Offer upgrade temptation with moral weight."
    },
    tags: [
      "valhalla",
      "forge-lanes",
      "weapon",
      "system-strain"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_forge_lanes"
    ]
  },
  {
    id: "moment_upgrade_or_permission",
    title: "Upgrade or Permission",
    type: "choice",
    trigger: "Use when a player asks for an upgrade that has real consequences.",
    compact: "Brokk makes the moral cost of craft explicit.",
    spotlight: {
      title: "Upgrade or Permission",
      readAloud: [
        {
          type: "narration",
          text: "Brokk looks at the work, then at you."
        },
        {
          type: "speech",
          speaker: "Brokk",
          text: "Can I make it stronger? Yes."
        },
        {
          type: "narration",
          text: "He sets the tool down."
        },
        {
          type: "speech",
          speaker: "Brokk",
          text: "That was never the question."
        }
      ],
      gmPurpose: "Frame upgrades as choices, not shopping.",
      followUp: "Ask what they are willing to risk or awaken."
    },
    tags: [
      "valhalla",
      "forge-lanes",
      "upgrade",
      "brokk",
      "choice"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_forge_lanes"
    ]
  },
  {
    id: "moment_quiet_rows_name_flickers",
    title: "A Name Flickers",
    type: "memory-tell",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use as the lightest Quiet Rows warning.",
    compact: "A carved name changes shape for a moment, then settles.",
    spotlight: {
      title: "A Name Flickers",
      readAloud: [
        {
          type: "narration",
          text: "One carved name catches your eye."
        },
        {
          type: "narration",
          text: "The letters do not move exactly. They almost remember a different shape."
        },
        {
          type: "narration",
          text: "Then the carving is still again."
        }
      ],
      gmPurpose: "Show memory-anchor strain without escalating to full failure.",
      followUp: "Let players inspect or ask Sven/Eldri."
    },
    tags: [
      "valhalla",
      "quiet-rows",
      "memory",
      "name",
      "foreshadow"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_quiet_rows"
    ]
  },
  {
    id: "moment_sven_not_everyone_comes_back_clean",
    title: "Sven: Not Everyone Comes Back Clean",
    type: "truth-softener",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when players ask Sven about return, memory, or the Quiet Rows.",
    compact: "Sven gives the soft version of a hard truth.",
    spotlight: {
      title: "Sven: Not Everyone Comes Back Clean",
      readAloud: [
        {
          type: "narration",
          text: "Sven’s usual warmth does not leave him, but it lowers."
        },
        {
          type: "speech",
          speaker: "Sven",
          text: "Not everyone comes back clean."
        },
        {
          type: "narration",
          text: "He looks toward the names."
        },
        {
          type: "speech",
          speaker: "Sven",
          text: "Most do. That used to be enough."
        }
      ],
      gmPurpose: "Give players a human way into mortality drift.",
      followUp: "Do not reveal the full system chain yet."
    },
    tags: [
      "valhalla",
      "quiet-rows",
      "sven",
      "return-cycle",
      "mortality-drift"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_quiet_rows"
    ]
  },
  {
    id: "moment_quiet_rows_name_disappears",
    title: "A Name Disappears",
    type: "high-escalation",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use only when you are ready for a major memory/soul failure tell.",
    compact: "A name disappears while observed.",
    spotlight: {
      title: "A Name Disappears",
      readAloud: [
        {
          type: "narration",
          text: "A name near the end of the row begins to pale."
        },
        {
          type: "narration",
          text: "The grooves soften. The wood smooths."
        },
        {
          type: "narration",
          text: "A space remains where someone was supposed to be remembered."
        }
      ],
      gmPurpose: "Make soul-anchor failure undeniable.",
      followUp: "Follow with silence, grief, or urgent Valkyrie pressure."
    },
    tags: [
      "valhalla",
      "quiet-rows",
      "memory",
      "soul-failure",
      "high-escalation"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_quiet_rows"
    ]
  },
  {
    id: "moment_svinhild_report",
    title: "Svinhild: Debrief Report",
    type: "briefing",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1
    },
    trigger: "Use when the party enters the Aerie after a mission or seeks orders.",
    compact: "Svinhild turns uncertainty into assignment.",
    spotlight: {
      title: "Svinhild: Report",
      readAloud: [
        {
          type: "narration",
          text: "Svinhild does not ask whether you are ready."
        },
        {
          type: "narration",
          text: "She looks you over once, counting damage and delay."
        },
        {
          type: "speech",
          speaker: "Svinhild",
          text: "Report."
        }
      ],
      gmPurpose: "Start mission pressure cleanly and give the party a tactical frame.",
      followUp: "Let players summarize what mattered."
    },
    tags: [
      "valhalla",
      "aerie",
      "svinhild",
      "briefing"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ]
  },
  {
    id: "moment_ryndis_dont_die_where_i_cant_reach_you",
    title: "Ryndis: Don’t Die Where I Can’t Reach You",
    type: "warning",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when retrieval strain needs a blunt practical voice.",
    compact: "Ryndis gives survival advice that implies failed retrieval zones.",
    spotlight: {
      title: "Ryndis: Don’t Die Where I Can’t Reach You",
      readAloud: [
        {
          type: "narration",
          text: "Ryndis checks the edge of a damaged wing harness without looking up."
        },
        {
          type: "speech",
          speaker: "Ryndis",
          text: "Don’t die where I can’t reach you."
        },
        {
          type: "narration",
          text: "A beat."
        },
        {
          type: "speech",
          speaker: "Ryndis",
          text: "That used to be a joke."
        }
      ],
      gmPurpose: "Make retrieval failure practical instead of abstract.",
      followUp: "Point toward unstable zones without overexplaining."
    },
    tags: [
      "valhalla",
      "aerie",
      "ryndis",
      "retrieval-failure",
      "warning"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ]
  },
  {
    id: "moment_thora_pushes_risk",
    title: "Thora Pushes Risk",
    type: "pressure",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use when the table needs momentum or reckless urgency.",
    compact: "Thora wants to move before caution wins.",
    spotlight: {
      title: "Thora Pushes Risk",
      readAloud: [
        {
          type: "narration",
          text: "Thora is already half-turned toward the launch platforms."
        },
        {
          type: "speech",
          speaker: "Thora",
          text: "We can debate after we arrive."
        },
        {
          type: "narration",
          text: "Stormlight crawls along her spear."
        }
      ],
      gmPurpose: "Push speed, risk, and Valkyrie disagreement.",
      followUp: "Let Svinhild or Ryndis push back if needed."
    },
    tags: [
      "valhalla",
      "aerie",
      "thora",
      "risk",
      "momentum"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ]
  },
  {
    id: "moment_kara_you_changed",
    title: "Kara: You Changed",
    type: "cryptic-truth",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use sparingly when the party’s return or identity should feel watched.",
    compact: "Kara says the thing no one else wants to say plainly.",
    spotlight: {
      title: "Kara: You Changed",
      readAloud: [
        {
          type: "narration",
          text: "Kara stands at the edge of the platform, quiet enough to be missed."
        },
        {
          type: "narration",
          text: "Her eyes do not move across the group. They stop on one of you."
        },
        {
          type: "speech",
          speaker: "Kara",
          text: "You changed."
        }
      ],
      gmPurpose: "Seed identity/return instability through a cryptic actor.",
      followUp: "Do not let Kara explain fully yet."
    },
    tags: [
      "valhalla",
      "aerie",
      "kara",
      "identity",
      "foreshadow"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ]
  },
  {
    id: "moment_sylva_everyone_can_be_brought_back",
    title: "Sylva: Everyone Can Be Brought Back",
    type: "fragile-faith",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use before a retrieval failure to show what belief still looks like.",
    compact: "Sylva states the noble lie with complete sincerity.",
    spotlight: {
      title: "Sylva: Everyone Can Be Brought Back",
      readAloud: [
        {
          type: "narration",
          text: "Sylva’s answer comes immediately, bright and certain."
        },
        {
          type: "speech",
          speaker: "Sylva",
          text: "Everyone can be brought back."
        },
        {
          type: "narration",
          text: "For a moment, she looks like she has never needed that to be false."
        }
      ],
      gmPurpose: "Show the hopeful face of the system before it breaks.",
      followUp: "Use later failure to make this line hurt."
    },
    tags: [
      "valhalla",
      "aerie",
      "sylva",
      "system-believer",
      "foreshadow"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ]
  },
  {
    id: "moment_training_drill_repeats_too_perfectly",
    title: "The Drill Repeats Too Perfectly",
    type: "function-drift",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use when the Training Grounds should show Valhalla becoming too systematized.",
    compact: "A training sequence repeats with impossible precision.",
    spotlight: {
      title: "The Drill Repeats Too Perfectly",
      readAloud: [
        {
          type: "narration",
          text: "A line of warriors completes a drill in perfect rhythm."
        },
        {
          type: "narration",
          text: "Then they do it again."
        },
        {
          type: "narration",
          text: "Same breath. Same angle. Same shouted count."
        }
      ],
      gmPurpose: "Show readiness turning into automation.",
      followUp: "Let players interrupt or observe the pattern."
    },
    tags: [
      "valhalla",
      "training-grounds",
      "function-drift",
      "readiness"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_training_grounds"
    ]
  },
  {
    id: "moment_training_warrior_predicts_a_blow",
    title: "Warrior Predicts a Blow",
    type: "omen",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7
    },
    trigger: "Use during sparring or informal challenge.",
    compact: "An Einherjar reacts before the attack begins.",
    spotlight: {
      title: "Warrior Predicts a Blow",
      readAloud: [
        {
          type: "narration",
          text: "The warrior moves before the blow is thrown."
        },
        {
          type: "narration",
          text: "Not quickly. Early."
        },
        {
          type: "narration",
          text: "For a moment, everyone nearby keeps training as if nothing strange happened."
        }
      ],
      gmPurpose: "Hint at timing/continuity weirdness through martial practice.",
      followUp: "Tie back to Heimdall or system prediction if players investigate."
    },
    tags: [
      "valhalla",
      "training-grounds",
      "continuity",
      "omen"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    locationIds: [
      "location_valhalla_training_grounds"
    ]
  },

  {
    id: "moment_bifrost_ember_root_heat_lingers",
    title: "Ember-Root: Heat Lingers",
    type: "aftermath",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use after Ember-Root when the party returns through the Bifrost.",
    compact: "The Bifrost gives them back, but Ember-Root heat clings for one breath too long.",
    spotlight: {
      title: "Heat Lingers",
      readAloud: [
        {
          type: "narration",
          text: "The Bifrost gives you back to Valhalla in a crash of color and force."
        },
        {
          type: "narration",
          text: "The heat should vanish."
        },
        {
          type: "narration",
          text: "For one breath, it does not. Ember-Root warmth clings under your armor, in your lungs, behind your teeth."
        },
        {
          type: "narration",
          text: "Then Valhalla’s cold air finally reaches you."
        }
      ],
      gmPurpose: "Show that Ember-Root followed the party home through the return system.",
      followUp: "Let Heimdall, the Aerie, or the players themselves notice the delay."
    },
    locationIds: [
      "location_valhalla_bifrost_platform"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed"
    ],
    tags: [
      "valhalla",
      "bifrost",
      "ember-root",
      "aftermath",
      "heat",
      "system-strain"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    gmNotes: "Use as the Ember-Root-specific version of lingering mission sensation."
  },

  {
    id: "moment_golden_fields_ember_ash_on_wind",
    title: "Ember-Root: Ash on the Wind",
    type: "aftermath",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use after Ember-Root when the party visits or passes near the Golden Fields.",
    compact: "Gold wheat still ripples, but ash drifts through it now.",
    spotlight: {
      title: "Ash on the Wind",
      readAloud: [
        {
          type: "narration",
          text: "The fields are still gold."
        },
        {
          type: "narration",
          text: "The wheat still moves in soft waves under impossible light."
        },
        {
          type: "narration",
          text: "Then a dark fleck of ash drifts through the air and lands among the stalks."
        },
        {
          type: "narration",
          text: "No one in the field stops working."
        }
      ],
      gmPurpose: "Show Ember-Root fallout entering Valhalla’s living systems without explaining it outright.",
      followUp: "Let the players choose whether to ask Eira, inspect the soil, or keep moving."
    },
    locationIds: [
      "location_valhalla_golden_fields"
    ],
    relatedThreads: [
      "thread_yggdrasil_root_sickness",
      "thread_valhalla_system_failure_chain"
    ],
    tags: [
      "valhalla",
      "golden-fields",
      "ember-root",
      "aftermath",
      "ash",
      "yggdrasil"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    gmNotes: "Keep this quiet. The image should do the work."
  },

  {
    id: "moment_mead_hall_ember_smoke_aftertaste",
    title: "Ember-Root: Smoke Aftertaste",
    type: "aftermath",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use after Ember-Root when the party drinks, eats, or tries to decompress in the Mead-Hall.",
    compact: "The Mead-Hall is warm, but the mead carries a faint smoke aftertaste.",
    spotlight: {
      title: "Smoke Aftertaste",
      readAloud: [
        {
          type: "narration",
          text: "The Mead-Hall receives you the way it always does: heat, noise, food, and the press of living bodies."
        },
        {
          type: "narration",
          text: "A drink finds your hand before anyone asks if you want one."
        },
        {
          type: "narration",
          text: "The first swallow is warm."
        },
        {
          type: "narration",
          text: "The second tastes faintly of smoke."
        }
      ],
      gmPurpose: "Let comfort remain real while showing that Ember-Root has stained the recovery rhythm.",
      followUp: "Sven may notice their reaction, but he should not explain it unless asked."
    },
    locationIds: [
      "location_valhalla_mead_hall"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete"
    ],
    tags: [
      "valhalla",
      "mead-hall",
      "ember-root",
      "aftermath",
      "smoke",
      "decompression"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    gmNotes: "This should echo but not replace the existing mead-tastes-wrong moment."
  },

  {
    id: "moment_quiet_rows_ember_scored_name",
    title: "Ember-Root: Ember-Scored Name",
    type: "aftermath",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use after Ember-Root when the party visits the Quiet Rows or follows the emotional weight of loss.",
    compact: "One carved name looks faintly scorched, as if heat touched the wood from inside.",
    spotlight: {
      title: "Ember-Scored Name",
      readAloud: [
        {
          type: "narration",
          text: "The Quiet Rows do not raise their voice."
        },
        {
          type: "narration",
          text: "The names wait in candlelight, carved clean into warm wood."
        },
        {
          type: "narration",
          text: "One of them is darker than the others."
        },
        {
          type: "narration",
          text: "Not burned away. Not gone. Just faintly ember-scored, as if the heat came from inside the grain."
        }
      ],
      gmPurpose: "Tie Ember-Root fallout to memory, souls, and the return-cycle cost.",
      followUp: "Let the players decide whether this is a name they know, almost know, or fear recognizing."
    },
    locationIds: [
      "location_valhalla_quiet_rows"
    ],
    relatedThreads: [
      "thread_names_changing_quiet_rows",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed"
    ],
    tags: [
      "valhalla",
      "quiet-rows",
      "ember-root",
      "aftermath",
      "memory",
      "soul-failure"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    gmNotes: "Use only when the table has room for quiet aftermath. Do not explain the mechanism immediately."
  },

  {
    id: "moment_aerie_empty_horse_returns",
    title: "Ember-Root: Empty Horse Returns",
    type: "aftermath",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4
    },
    trigger: "Use after Ember-Root when the party remains in or returns to the Valkyrie Aerie.",
    compact: "A Valkyrie horse returns without its rider, exhausted and trembling.",
    spotlight: {
      title: "Empty Horse Returns",
      readAloud: [
        {
          type: "narration",
          text: "A shadow crosses the platform."
        },
        {
          type: "narration",
          text: "A Valkyrie horse drops from the sky, wings beating hard and uneven."
        },
        {
          type: "narration",
          text: "It lands without a rider."
        },
        {
          type: "narration",
          text: "For one breath, every Valkyrie close enough to see it goes still."
        },
        {
          type: "narration",
          text: "Then the Aerie moves again."
        }
      ],
      gmPurpose: "Show Valkyrie strain and retrieval danger through action instead of exposition.",
      followUp: "Svinhild may give orders immediately; Kara or Thora may react if present."
    },
    locationIds: [
      "location_valhalla_valkyrie_aerie"
    ],
    relatedActors: [
      "actor_svinhild",
      "actor_thora_stormcall",
      "actor_kara_veilfeather"
    ],
    relatedThreads: [
      "thread_valkyrie_disagreement",
      "thread_return_is_not_guaranteed",
      "thread_returned_incomplete"
    ],
    tags: [
      "valhalla",
      "valkyrie-aerie",
      "ember-root",
      "aftermath",
      "valkyrie-strain",
      "retrieval"
    ],
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    gmNotes: "This is a strong beat. Use sparingly; it implies serious retrieval stress."
  }
];
