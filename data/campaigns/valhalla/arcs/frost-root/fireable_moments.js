export const fireableMoments = [
  
  {
    id: "moment_ritual_node_being_formed",
    title: "Ritual Node Being Formed",
    type: "node / clue",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_outer_field", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When the players notice blue geometry, corpse placement, or runic triangulation.",
    compact: "A rune node is being assembled out of bodies, marks, and cold geometry.",
    spotlight: {
      title: "Blue Geometry Under Snow",
      readAloud: [
        { type: "narration", text: "Blue light crawls beneath the snow in three thin lines." },
        { type: "narration", text: "Where the lines meet, frost rises upward instead of settling down." }
      ],
      gmPurpose: "Introduce nodes as battlefield objects before they become active hazards.",
      followUp: "Players can disrupt, study, destroy, or ignore the forming node."
    },
    relatedActors: ["object_frostroot_rune_node"],
    relatedThreads: ["thread_siege_as_distraction", "thread_runecaller_directs_battle"],
    tags: ["act-1", "node", "ritual", "clue", "battlefield-object"],
    gmNotes: "Nodes should feel constructed or taught into place, not naturally occurring."
  },
  {
    id: "moment_draugr_turn_when_disrupted",
    title: "Draugr Turn When Disrupted",
    type: "combat-trigger",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_outer_field"],
    trigger: "When the players break the pattern, damage a node, attack a worker, or otherwise interrupt the process.",
    compact: "The dead stop working and become a threat.",
    spotlight: {
      title: "The Work Notices You",
      readAloud: [
        { type: "narration", text: "The moment the pattern breaks, every draugr in the field stops moving." },
        { type: "narration", text: "Then, all at once, they turn." }
      ],
      gmPurpose: "Convert eerie process into immediate combat pressure.",
      followUp: "Run the skirmish. The larger siege remains audible beyond the ridge."
    },
    relatedActors: ["actor_draugr_unfinished_dead", "actor_skald_frozen_tongue"],
    relatedThreads: ["thread_draugr_are_unfinished_dead", "thread_siege_as_distraction"],
    tags: ["act-1", "outer-field", "combat", "trigger", "draugr"],
    gmNotes: "This is the clean initiative snap if the table needs one."
  },
  {
    id: "moment_skald_first_chant_hint",
    title: "Skald Chant Hint",
    type: "foreshadow / magic-pressure",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_outer_field", "location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When a caster, bard, or high-perception character listens for why the dead move in rhythm.",
    compact: "A frozen chant is keeping the dead coordinated.",
    spotlight: {
      title: "A Song With No Breath",
      readAloud: [
        { type: "narration", text: "Under the clash of battle, there is a rhythm with no drum and a voice with no breath." }
      ],
      gmPurpose: "Foreshadow the Skald duel lane before it becomes explicit.",
      followUp: "A bard, caster, or perceptive character can later contest the rhythm."
    },
    relatedActors: ["actor_skald_frozen_tongue"],
    relatedThreads: ["thread_draugr_are_unfinished_dead", "thread_runecaller_directs_battle"],
    tags: ["act-1", "skald", "bard", "foreshadow", "chant", "unlock-candidate"],
    gmNotes: "This is a soft setup for later skill-off moments."
  },
  {
    id: "moment_defenders_already_losing",
    title: "Defenders Already Losing",
    type: "battlefield-reveal",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade"],
    trigger: "At the ridge reveal or first look at the gate.",
    compact: "The defenders are brave and organized, but outmatched.",
    spotlight: {
      title: "Brave Is Not Enough",
      readAloud: [
        { type: "narration", text: "The defenders are not breaking because they are cowards. They are breaking because the thing hitting them is too much." }
      ],
      gmPurpose: "Clarify that mortal defenders are competent, not helpless scenery.",
      followUp: "Let player intervention preserve or redirect defender clusters."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster", "actor_frostbound_brute"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "gate", "defenders", "battlefield", "reveal"],
    gmNotes: "This supports the defender cluster doctrine."
  },
  {
    id: "moment_jarl_line_anchor",
    title: "Jarl Eirik Holds the Line",
    type: "ally-beat / battlefield-support",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When the gate line needs a mortal command anchor or the players need to understand who Eirik is.",
    compact: "Eirik anchors the breach until the party creates a better opening.",
    spotlight: {
      title: "The Jarl at the Breach",
      readAloud: [
        { type: "speech", speaker: "Eirik", text: "Stand your ground! We don't fall here!" },
        { type: "narration", text: "One-armed and one-eyed, he puts his body where the gate is failing." }
      ],
      gmPurpose: "Show Eirik as responsibility first, fury second.",
      followUp: "If the party creates an opening, use the scene scripted moment where Eirik charges."
    },
    relatedActors: ["actor_jarl_eirik_skjoldrson"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "jarl", "gate", "ally", "battlefield"],
    gmNotes: "Eirik is a wall until someone else gives him permission to become the avalanche."
  },
  {
    id: "moment_brinhild_lane_hold",
    title: "Brinhild Holds a Lane",
    type: "ally-beat / battlefield-support",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When one pressure lane needs to be stabilized without solving the whole fight for the players.",
    compact: "Brinhild can hold one lane, not the whole battlefield.",
    spotlight: {
      title: "A Lane Holds",
      readAloud: [
        { type: "speech", speaker: "Brinhild", text: "You hold here. I will make them regret there." }
      ],
      gmPurpose: "Let Brinhild buy a beat while keeping the player choices central.",
      followUp: "Use her to stabilize one pressure point, then return the decision to the party."
    },
    relatedActors: ["actor_brinhild_field_captain"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "brinhild", "ally", "lane", "battlefield"],
    gmNotes: "She creates openings, not solutions."
  },
  {
    id: "moment_defender_cluster_breaks",
    title: "Defender Cluster Breaks",
    type: "battlefield-consequence",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When brute pressure, draugr numbers, or failed player intervention overwhelms a defender cluster.",
    compact: "A mortal cluster buckles and becomes rescue/aftermath pressure.",
    spotlight: {
      title: "The Line Buckles",
      readAloud: [
        { type: "narration", text: "The shield knot holds for one impact. It holds for the second. On the third, the sound changes." }
      ],
      gmPurpose: "Show battlefield cost without spending player HP.",
      followUp: "Offer rescue, reinforcement, or a hard choice about another lane."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster", "actor_frostbound_brute"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "defenders", "gate", "consequence", "battlefield"],
    gmNotes: "Use when the battlefield needs visible stakes."
  },
  {
    id: "moment_defender_cluster_rallies",
    title: "Defender Cluster Rallies",
    type: "battlefield-response",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When the players create a meaningful advantage near the gate or save defenders from collapse.",
    compact: "The defenders see the opening and act.",
    spotlight: {
      title: "The Mortals Move",
      readAloud: [
        { type: "speech", speaker: "Gate Defenders", text: "They're pulling off the gate—move! Open it!" }
      ],
      gmPurpose: "Show allied forces reacting to player success.",
      followUp: "Defenders can unjam a gate, open a lane, cover civilians, or buy one beat."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "defenders", "rally", "gate", "player-impact"],
    gmNotes: "This is a good response to nova damage, objective success, or a brave rescue."
  },
  {
    id: "moment_gate_unjammed_after_player_success",
    title: "Gate Unjammed After Player Success",
    type: "ally-response / battlefield-shift",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When player actions pull enemy pressure away from the gate or create room for defenders to act.",
    compact: "The defenders unjam the gate and rejoin the fight.",
    spotlight: {
      title: "Open the Damn Gate",
      readAloud: [
        { type: "speech", speaker: "Gate Defenders", text: "Quick—unjam it! They're giving us room!" },
        { type: "narration", text: "Axes bite into frozen hinges and bent braces. The gate groans, then moves." }
      ],
      gmPurpose: "Make allied behavior change visibly because the players changed the battlefield.",
      followUp: "Open a lane, change gate state, or bring Eirik/defenders into the next beat."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster", "actor_jarl_eirik_skjoldrson"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "gate", "defenders", "player-impact", "battlefield-shift"],
    gmNotes: "Great when a caster nova or objective play forces enemy redeployment."
  },
  {
    id: "moment_cinematic_defender_death",
    title: "Cinematic Defender Death",
    type: "battlefield-texture / consequence",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When the battle needs a visible cost, especially after players choose another pressure lane.",
    compact: "A defender dies buying one more breath for the line.",
    spotlight: {
      title: "One More Breath",
      readAloud: [
        { type: "narration", text: "A defender plants their shield under a brute's arm and holds just long enough for someone else to crawl away." },
        { type: "narration", text: "Then the shield folds." }
      ],
      gmPurpose: "Give the battle consequence without making the defenders faceless fodder.",
      followUp: "Let the death open a rescue, vengeance, or rally beat."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "defenders", "death", "battlefield", "texture"],
    gmNotes: "Use sparingly. These should matter."
  },
  {
    id: "moment_wounded_defender_dragged_clear",
    title: "Wounded Defender Dragged Clear",
    type: "rescue-pressure / battlefield-texture",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When a defender cluster breaks but the table needs a rescue opportunity instead of pure loss.",
    compact: "A wounded defender can be saved if someone acts now.",
    spotlight: {
      title: "Not Dead Yet",
      readAloud: [
        { type: "narration", text: "Someone under the broken shields is still moving." },
        { type: "speech", speaker: "Wounded Defender", text: "Don't—don't leave the gate for me." }
      ],
      gmPurpose: "Create a rescue pressure lane and make the defenders human.",
      followUp: "Success can improve civilian/defender aftermath without requiring a full side quest."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "defender", "rescue", "gate", "battlefield"],
    gmNotes: "Useful when the paladin/support character needs a heroic non-damage action."
  },
    {
        id: "moment_outer_field_pattern_stares_back",
        title: "The Pattern Stares Back",
        type: "high-perception-reveal",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        locationIds: [
            "location_skjoldyrs_hollow_outer_field"
        ],

        trigger: "When a player studies the outskirts markings, succeeds on a high Perception/Investigation check, or pauses to understand what the draugr are doing before disrupting them.",

        compact: "The body-dragging pattern resolves into a ritual triangle, and the player senses the pattern noticing them.",

        spotlight: {
            title: "High Perception Reveal — The Pattern Notices You",
            readAloud: [
                {
                    type: "narration",
                    text: "The pattern reveals itself to you."
                },
                {
                    type: "narration",
                    text: "The draugr are not attacking at random. They are building something."
                },
                {
                    type: "narration",
                    text: "The markings in the snow form a rough triangle, each point glowing faintly beneath the surface."
                },
                {
                    type: "narration",
                    text: "Then you notice the bodies they drag are being placed precisely along those lines."
                },
                {
                    type: "narration",
                    text: "This is not a siege."
                },
                {
                    type: "narration",
                    text: "This is a ritual."
                },
                {
                    type: "narration",
                    text: "As you focus, something in the pattern focuses back."
                },
                {
                    type: "narration",
                    text: "Not eyes. Not awareness. Just the sense that you have been noticed."
                }
            ],
            gmPurpose: "Reward careful observation before combat fully engages. This reveals that the outskirts are part of a ritual process, not a random undead attack.",
            followUp: "The draugr do not necessarily turn immediately unless the party disrupts the work, but the pattern's attention should make the players feel the ritual is live."
        },

        relatedActors: [
            "actor_draugr_unfinished_dead",
            "actor_skald_frozen_tongue",
            "object_frostroot_rune_node"
        ],

        relatedThreads: [
            "thread_draugr_are_unfinished_dead",
            "thread_siege_as_distraction",
            "thread_uneasy_success"
        ],

        relatedReferences: [
            "reference_frostroot_battlefield_setup",
            "reference_frostroot_root_truths_and_language"
        ],

        tags: [
            "act-1",
            "frost-root",
            "outer-field",
            "perception",
            "ritual",
            "draugr",
            "rune-node",
            "clue",
            "active"
        ],

        gmNotes: "Use before the draugr fully engage if the players observe carefully. This is the first moment where the battlefield feels like a system noticing them, not merely enemies seeing them."
    },

  {
    id: "moment_rune_node_activates",
    title: "Rune Node Activates",
    type: "hazard / node",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When a node finishes forming or the Runecaller pulses the field.",
    compact: "A node turns on and creates cold movement pressure.",
    spotlight: {
      title: "The Node Wakes",
      readAloud: [
        { type: "narration", text: "The blue mark brightens. Snow lifts off the ground in a perfect ring." }
      ],
      gmPurpose: "Turn a battlefield object into active area-control pressure.",
      followUp: "Use node stats from encounters.js: AC 13, HP 60, expanding cold field."
    },
    relatedActors: ["object_frostroot_rune_node"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_siege_as_distraction"],
    tags: ["act-1", "node", "hazard", "battlefield-object", "cold"],
    gmNotes: "Nodes are durable enough to reward focused damage, not incidental AoE."
  },
  {
    id: "moment_node_field_expands",
    title: "Node Field Expands",
    type: "hazard / escalation",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "At the end of a round while an active node remains unresolved.",
    compact: "The cold field grows 10 feet and threatens movement.",
    spotlight: {
      title: "Cold Takes Ground",
      readAloud: [
        { type: "narration", text: "The ring does not explode. It expands, patient and certain, taking ten more feet of battlefield away." }
      ],
      gmPurpose: "Make node pressure spatial and time-based.",
      followUp: "Call for the relevant save when characters enter or are caught by the field."
    },
    relatedActors: ["object_frostroot_rune_node"],
    relatedThreads: ["thread_runecaller_directs_battle"],
    tags: ["act-1", "node", "hazard", "movement", "escalation"],
    gmNotes: "Use as the node clock without needing a separate tracker unless desired."
  },
  {
    id: "moment_node_destroyed_or_suppressed",
    title: "Node Destroyed or Suppressed",
    type: "battlefield-success",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When players destroy, suppress, counterspell, or otherwise neutralize a node.",
    compact: "A node drops and the battlefield reacts.",
    spotlight: {
      title: "The Geometry Breaks",
      readAloud: [
        { type: "narration", text: "The blue lines snap inward and vanish under the snow like a breath sucked through teeth." }
      ],
      gmPurpose: "Reward objective play and let enemies/allies react to the changed state.",
      followUp: "Reduce active nodes, open movement, rally defenders, or force enemies to redirect toward the players."
    },
    relatedActors: ["object_frostroot_rune_node", "actor_runecaller_the_director"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_uneasy_success"],
    tags: ["act-1", "node", "success", "player-impact", "battlefield-shift"],
    gmNotes: "Live-play note: high-level nova should delete/swing one pressure object, not the whole scene."
  },
  {
    id: "moment_skald_duel_triggers",
    title: "Skald Duel Triggers",
    type: "skill-challenge / magic-pressure",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When a bard, caster, or performer tries to counter the Skald rhythm or cancel battlefield magic.",
    compact: "The bard and Skald enter a tug-of-war over battlefield rhythm.",
    spotlight: {
      title: "Song Against Song",
      readAloud: [
        { type: "narration", text: "The Skald's chant freezes in the air. For a moment, the whole battlefield seems to wait for the next note." }
      ],
      gmPurpose: "Open a non-damage pressure lane for bard/caster spotlight.",
      followUp: "Run opposed checks, staged successes, or spell-countering exchanges as appropriate."
    },
    relatedActors: ["actor_skald_frozen_tongue"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_draugr_are_unfinished_dead"],
    tags: ["act-1", "skald", "bard", "skill-challenge", "magic"],
    gmNotes: "The goal is dramatic contest, not hard shutdown of the bard."
  },
  {
    id: "moment_skald_counter_chant_success",
    title: "Skald Counter-Chant Success",
    type: "skill-challenge / enemy-success",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When the Skald wins an exchange or partially counters a spell/song.",
    compact: "The Skald steals a beat back from the party.",
    spotlight: {
      title: "The Frozen Tongue Answers",
      readAloud: [
        { type: "narration", text: "Your note lands. The Skald's answer lands under it, colder, older, and wrong." }
      ],
      gmPurpose: "Keep the duel tense and reciprocal.",
      followUp: "Delay a spell effect, strengthen a node pulse, or let undead reposition."
    },
    relatedActors: ["actor_skald_frozen_tongue"],
    relatedThreads: ["thread_runecaller_directs_battle"],
    tags: ["act-1", "skald", "bard", "counter", "magic"],
    gmNotes: "Use as tug-of-war, not punishment."
  },
  {
    id: "moment_bard_wins_resonance_clash",
    title: "Bard Wins Resonance Clash",
    type: "skill-challenge / player-success",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When the bard/caster wins the exchange against a Skald or node rhythm.",
    compact: "The party breaks the enemy rhythm for a beat.",
    spotlight: {
      title: "Your Note Holds",
      readAloud: [
        { type: "narration", text: "For one breath, the enemy rhythm loses count." }
      ],
      gmPurpose: "Reward performance/countermagic as a real tactical lane.",
      followUp: "Suppress a Skald effect, buy advantage, or open a node/Rift closure action."
    },
    relatedActors: ["actor_skald_frozen_tongue", "object_frostroot_rune_node"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_uneasy_success"],
    tags: ["act-1", "bard", "skald", "success", "magic"],
    gmNotes: "This preserves the live-play bard duel feel."
  },
  {
    id: "moment_skald_chant_breaks",
    title: "Skald Chant Breaks",
    type: "battlefield-success / magic-pressure",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_crossroads"],
    trigger: "When enough player pressure breaks a Skald's chant or battlefield rhythm.",
    compact: "The dead lose coordination for a beat.",
    spotlight: {
      title: "The Rhythm Fails",
      readAloud: [
        { type: "narration", text: "The chant cracks. The draugr do not stop—but for the first time, they hesitate like individuals." }
      ],
      gmPurpose: "Show that breaking rhythm changes the battlefield without ending it.",
      followUp: "Delay undead, reduce node pressure, or give defenders/players an opening."
    },
    relatedActors: ["actor_skald_frozen_tongue", "actor_draugr_unfinished_dead"],
    relatedThreads: ["thread_draugr_are_unfinished_dead", "thread_runecaller_directs_battle"],
    tags: ["act-1", "skald", "draugr", "rhythm", "success"],
    gmNotes: "Good bridge between bard/caster success and physical battlefield effect."
  },
  {
    id: "moment_runecaller_commands_dead",
    title: "Runecaller Commands the Dead",
    type: "boss-pressure / legendary-action",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads", "location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When the Runecaller spends pressure to make undead move or attack outside the expected rhythm.",
    compact: "Undead immediately move or attack under direct control.",
    spotlight: {
      title: "The Dead Receive an Order",
      readAloud: [
        { type: "narration", text: "The Runecaller lifts one hand. The dead obey before the gesture finishes." }
      ],
      gmPurpose: "Show the dead are being directed, not merely aggressive.",
      followUp: "Move undead, pressure an objective runner, or punish an exposed lane."
    },
    relatedActors: ["actor_runecaller_the_director", "actor_draugr_unfinished_dead"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_draugr_are_unfinished_dead"],
    tags: ["act-1", "runecaller", "legendary-action", "draugr", "boss"],
    gmNotes: "Use to shift attention without adding a whole new phase."
  },
  {
    id: "moment_runecaller_pulse_corruption",
    title: "Runecaller Pulse Corruption",
    type: "boss-pressure / node-escalation",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads", "location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When the Runecaller spends a higher-pressure beat to activate a node or worsen the field.",
    compact: "A node activates or the battlefield shifts worse.",
    spotlight: {
      title: "The Field Pulses Back",
      readAloud: [
        { type: "narration", text: "The Runecaller's rune flares. Across the battlefield, another mark answers." }
      ],
      gmPurpose: "Escalate the scene through existing battlefield objects instead of new bookkeeping.",
      followUp: "Activate a node, expand a field, or spike Rift pressure."
    },
    relatedActors: ["actor_runecaller_the_director", "object_frostroot_rune_node"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_siege_as_distraction"],
    tags: ["act-1", "runecaller", "node", "pulse", "boss"],
    gmNotes: "This replaces phase hopping with a fireable pressure spike."
  },
  {
    id: "moment_runecaller_legendary_reaction_drops_objective_runner",
    title: "Runecaller Drops the Objective Runner",
    type: "boss-reaction / consequence",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads", "location_skjoldyrs_hollow_gate_palisade"],
    trigger: "When a rogue/mobile PC blitzes toward a final node, core, or major objective under Runecaller pressure.",
    compact: "The objective run succeeds in drawing the boss's direct answer.",
    spotlight: {
      title: "The Director Notices",
      readAloud: [
        { type: "narration", text: "You reach the mark before the battlefield can stop you." },
        { type: "narration", text: "Then the Runecaller stops looking at the battlefield and looks directly at you." }
      ],
      gmPurpose: "Create the high-risk objective-runner beat without invalidating the character's heroism.",
      followUp: "Drop/incapacitate, isolate, or force a rescue moment if the table has earned that level of pressure."
    },
    relatedActors: ["actor_runecaller_the_director", "object_frostroot_rune_node", "object_frostroot_rift_core"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_uneasy_success"],
    tags: ["act-1", "runecaller", "reaction", "rogue", "objective", "rescue"],
    gmNotes: "Use sparingly and only when it creates a good rescue/pivot, not a cheap gotcha."
  },
  {
    id: "moment_rift_spawns_reinforcements",
    title: "Rift Spawns Reinforcements",
    type: "rift-pressure / spawn",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads"],
    trigger: "At the round/beat cadence while the Rift Core remains open.",
    compact: "The Rift adds more undead pressure until closed or held back.",
    spotlight: {
      title: "More Dead Come Through",
      readAloud: [
        { type: "narration", text: "The Rift opens wider for less than a second. That is enough." }
      ],
      gmPurpose: "Force closure/containment priorities without turning the battle into a kill-all loop.",
      followUp: "Spawn draugr, increase pressure, or let an ally like Eirik hold the breach if earned."
    },
    relatedActors: ["object_frostroot_rift_core", "actor_draugr_unfinished_dead"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_siege_as_distraction"],
    tags: ["act-1", "rift", "reinforcements", "spawn", "pressure"],
    gmNotes: "This is why someone may need to hold the portal while others solve the boss/core."
  },
  {
    id: "moment_close_the_wound_attempt",
    title: "Close the Wound Attempt",
    type: "objective / ritual-action",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads"],
    trigger: "When players attempt to close, damage, suppress, perform against, or stabilize the Rift Core.",
    compact: "The party can attack, counter, perform, or stabilize the Rift pressure.",
    spotlight: {
      title: "Hands on the Wound",
      readAloud: [
        { type: "narration", text: "This close, the Rift does not look like a doorway. It looks like a wound being held open by instructions." }
      ],
      gmPurpose: "Keep the Rift as a solution target, not just a monster dispenser.",
      followUp: "Use Rift Core stats/progress, skill-offs, ritual action, or coordinated damage as appropriate."
    },
    relatedActors: ["object_frostroot_rift_core", "actor_skald_frozen_tongue", "actor_runecaller_the_director"],
    relatedThreads: ["thread_runecaller_directs_battle", "thread_uneasy_success"],
    tags: ["act-1", "rift", "objective", "ritual", "closure"],
    gmNotes: "The bard duel can absolutely help shut the portal."
  },
  {
    id: "moment_eirik_spat_back_from_rift",
    title: "Eirik Spat Back From the Rift",
    type: "ally-payoff / saga-beat",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_crossroads", "location_skjoldyrs_hollow_gate_palisade"],
    trigger: "If Eirik enters the Rift, holds off respawning reinforcements, or survives an impossible pressure stunt.",
    compact: "The portal spits Eirik back alive, laughing, covered in draugr wreckage.",
    spotlight: {
      title: "The Rift Gives Him Back",
      readAloud: [
        { type: "narration", text: "The Rift folds. For one terrible second, you think it took him with it." },
        { type: "narration", text: "Then something slams back into the snow, covered in draugr wreckage and laughing hard enough to scare the wounded." },
        { type: "speech", speaker: "Eirik", text: "Someone better have kept my cup full." }
      ],
      gmPurpose: "Canonize earned live-play myth without stealing the party's victory.",
      followUp: "Send him to the meadhall and let the party own the story they helped create."
    },
    relatedActors: ["actor_jarl_eirik_skjoldrson"],
    relatedThreads: ["thread_uneasy_success"],
    tags: ["act-1", "eirik", "rift", "saga", "payoff"],
    gmNotes: "Use only if earned. This turns him into table-beloved saga material."
  },
  {
    id: "moment_wounded_defender_aftermath_testimony",
    title: "Wounded Defender Testimony",
    type: "aftermath / clue",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_gate_palisade", "location_skjoldyrs_hollow_sap_hearth"],
    trigger: "After the siege, when the party asks survivors what happened or checks wounded defenders.",
    compact: "Survivors describe attacks that behaved like timing, not rage.",
    spotlight: {
      title: "It Was Waiting for Something",
      readAloud: [
        { type: "speech", speaker: "Wounded Defender", text: "They could have rushed us. They didn't. They kept hitting the same places, same rhythm. Like they were waiting for a door to open." }
      ],
      gmPurpose: "Turn combat behavior into a clue for the deeper operation.",
      followUp: "Point toward Yrsa, the Sap-Hearth, or Root Shrine investigation."
    },
    relatedActors: ["actor_frostroot_gate_defender_cluster"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "aftermath", "defender", "testimony", "clue"],
    gmNotes: "Good if players missed some battlefield patterning in combat."
  },
  {
    id: "moment_torvald_sap_flow",
    title: "Torvald Notices the Sap Flow",
    type: "social-clue / sap-flow",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_sap_hearth"],
    trigger: "During revelry or after someone asks about the mead, sap, or hall systems.",
    compact: "Torvald is trying not to worry about the sap dripping too slowly.",
    spotlight: {
      title: "The Drip Is Wrong",
      readAloud: [
        { type: "speech", speaker: "Torvald", text: "It's not dry. Don't start that rumor. It's just... slower than it should be." }
      ],
      gmPurpose: "Seed the Sap-Hearth system issue before the blackened line reveal.",
      followUp: "Let Torvald disappear to check the tapworks."
    },
    relatedActors: ["actor_torvald_brewmaster", "actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    reference: "arcs/frost-root/library/act_1/locations/sap_hearth.md",
    tags: ["act-1", "sap-hearth", "torvald", "sap-flow", "clue"],
    gmNotes: "Torvald should be practical, not mystical."
  },
  {
    id: "moment_yrsa_you_came_down_wrong",
    title: "Yrsa: You Came Down Wrong",
    type: "ominous-social / clue",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_sap_hearth", "location_skjoldyrs_hollow"],
    trigger: "When Yrsa speaks to the party after the battle, especially if they ask why things feel wrong.",
    compact: "Yrsa frames the party's arrival as misaligned, not merely late.",
    spotlight: {
      title: "You Came Down Wrong",
      readAloud: [
        { type: "speech", speaker: "Yrsa", text: "You came down wrong." },
        { type: "speech", speaker: "Yrsa", text: "Not bad. Not false. Wrong." }
      ],
      gmPurpose: "Make Yrsa ominous without explaining the Root truth too early.",
      followUp: "Let practical evidence from Torvald or the shrine clarify the feeling later."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    tags: ["act-1", "yrsa", "ominous", "sap-hearth", "clue"],
    gmNotes: "Yrsa can be vague because Torvald provides the concrete clue."
  },
  {
    id: "moment_torvald_blackened_sap_line",
    title: "Torvald Shuts Off the Line",
    type: "aftermath-reveal",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_sap_hearth_cellar"],
    trigger: "After the victory celebration begins, if Torvald disappears to fetch drinks and does not return.",
    compact: "Torvald finds blackened sap entering one drink line and shuts down the tapworks.",
    spotlight: {
      title: "The Drink Line Goes Black",
      readAloud: [
        { type: "narration", text: "Torvald is below the hall, half inside a nest of copper lines and old keg fittings, cursing like the equipment personally insulted his ancestors." },
        { type: "narration", text: "One of the glass bulbs in the tapline is no longer amber." },
        { type: "narration", text: "It drips black." },
        { type: "speech", speaker: "Torvald", text: "No. No, no, no—shut the line. Shut the whole damned line." }
      ],
      gmPurpose: "Ground the post-victory dread in a practical failure instead of vague prophecy.",
      followUp: "Torvald tries to determine whether the contamination is local to the tapworks, the sap line, or the Root itself."
    },
    relatedActors: ["actor_torvald_brewmaster", "actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "sap-hearth", "cellar", "blackened-sap", "torvald", "aftermath", "clue"],
    gmNotes: "This is the concrete 'something is still wrong' marker."
  },
  {
    id: "moment_trace_black_sap_to_root",
    title: "Trace the Black Sap Toward the Root",
    type: "investigation / transition",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_sap_hearth_cellar"],
    trigger: "When players inspect the tapworks, valves, source line, or blackened sap.",
    compact: "The problem traces deeper than the tapworks.",
    spotlight: {
      title: "Not the Keg",
      readAloud: [
        { type: "narration", text: "The keg is clean. The copper is clean. The valve is not." },
        { type: "narration", text: "Whatever touched the line came from below the hall, not from the drink." }
      ],
      gmPurpose: "Move the party from practical failure toward Root investigation.",
      followUp: "Bring in Yrsa or direct attention toward the Root Shrine."
    },
    relatedActors: ["actor_torvald_brewmaster", "actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    tags: ["act-1", "sap-hearth", "cellar", "investigation", "root"],
    gmNotes: "Avoid over-explaining. This is source tracing, not root truth reveal."
  },
  {
    id: "moment_yrsa_reads_blackened_sap",
    title: "Yrsa Reads the Blackened Sap",
    type: "omen / interpretation",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_sap_hearth", "location_skjoldyrs_hollow_sap_hearth_cellar"],
    trigger: "When Yrsa sees or is told about the blackened sap.",
    compact: "Yrsa recognizes the symptom belongs to the Root, not the brewery.",
    spotlight: {
      title: "Worse Than Surprise",
      readAloud: [
        { type: "narration", text: "Yrsa does not look surprised. That is worse." },
        { type: "speech", speaker: "Yrsa", text: "This did not begin in the line." }
      ],
      gmPurpose: "Bridge Torvald's practical clue into Root investigation.",
      followUp: "Move toward the shrine or have Eirik snap the room back to duty."
    },
    relatedActors: ["actor_yrsa_root_seer", "actor_torvald_brewmaster"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    tags: ["act-1", "yrsa", "blackened-sap", "root", "transition"],
    gmNotes: "Yrsa should be certain of direction, not mechanism."
  },
  {
    id: "moment_path_to_shrine_too_clean",
    title: "Path to the Shrine Is Too Clean",
    type: "transition-clue / dread",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine", "location_skjoldyrs_hollow"],
    trigger: "As the party approaches the Root Shrine after the Sap-Hearth clue.",
    compact: "No tracks, no struggle, no resistance; that is the problem.",
    spotlight: {
      title: "No One Came This Way",
      readAloud: [
        { type: "narration", text: "The path gives you no resistance. No ambush. No bodies. No tracks." },
        { type: "narration", text: "Each missing sign makes the shrine feel less safe." }
      ],
      gmPurpose: "Prime the 'too late' realization before the shrine reveal.",
      followUp: "Let the shrine show completion rather than active assault."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    tags: ["act-1", "root-shrine", "transition", "too-clean", "dread"],
    gmNotes: "Absence is the clue."
  },
  {
    id: "moment_root_shrine_already_done",
    title: "Root Shrine — Already Done",
    type: "reveal / investigation",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine"],
    trigger: "When the party first studies the Root Shrine.",
    compact: "The marks are complete. The party is late to the real operation.",
    spotlight: {
      title: "Too Late, Too Clean",
      readAloud: [
        { type: "narration", text: "The shrine has not been broken open. It has been used." },
        { type: "narration", text: "The new marks are not forming. They are finished." }
      ],
      gmPurpose: "Land that the siege was not the whole operation.",
      followUp: "Let players investigate, stabilize, study, or contain symptoms."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_siege_as_distraction", "thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "root-shrine", "too-late", "reveal", "root"],
    gmNotes: "Do not call it corrupted. Preserve the 'taught/redirected' language."
  },
  {
    id: "moment_illusion_drops_bodies_at_root",
    title: "Illusion Drops — Bodies at the Root",
    type: "reveal / horror",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine"],
    trigger: "When investigation, stabilization, or Yrsa's intervention drops the clean-shrine illusion.",
    compact: "The clean shrine view fails and reveals the bodies that impacted the Root.",
    spotlight: {
      title: "The Clean Shrine Was a Lie",
      readAloud: [
        { type: "narration", text: "The shrine flickers. Not like magic ending. Like your eyes finally stop agreeing with the wrong version." },
        { type: "narration", text: "Bodies appear around the exposed Root where there had been untouched ground a breath ago." }
      ],
      gmPurpose: "Reveal the hidden cost and method without turning the scene into a fight.",
      followUp: "Let players choose cleanse, stabilize, study, or contain."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_siege_as_distraction", "thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "root-shrine", "illusion", "bodies", "reveal"],
    gmNotes: "Use carefully. It should feel like the illusion of safety falling away."
  },
  {
    id: "moment_players_help_yrsa_stabilize_node",
    title: "Players Help Yrsa Stabilize the Node",
    type: "ritual-support / stabilization",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine"],
    trigger: "When players choose to stabilize, contain, or assist Yrsa after the shrine reveal.",
    compact: "The party can help Yrsa quiet the immediate aftershock.",
    spotlight: {
      title: "Hold It Steady",
      readAloud: [
        { type: "speech", speaker: "Yrsa", text: "Do not pull it out. Hold it still." },
        { type: "narration", text: "The Root does not fight you. That might be the worst part. It adjusts." }
      ],
      gmPurpose: "Give the players a meaningful non-combat containment action.",
      followUp: "Reward stabilization with reduced fallout and possible future Root Pattern Recognition."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_root_shrine_response_options", "reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "root-shrine", "yrsa", "stabilize", "ritual"],
    gmNotes: "This should feel like containment, not cure."
  },
  {
    id: "moment_root_pattern_recognition_reward",
    title: "Root Pattern Recognition Reward",
    type: "reward / future-leverage",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine"],
    trigger: "When the players study the shrine carefully, help stabilize it, or connect battlefield nodes to the Root pattern.",
    compact: "The party gains future leverage reading Root/node patterns.",
    spotlight: {
      title: "You Have Seen the Shape Before",
      readAloud: [
        { type: "narration", text: "The marks are not familiar, exactly. But the mistake is." }
      ],
      gmPurpose: "Give investigation/stabilization a forward-facing reward.",
      followUp: "Grant advantage, reduced difficulty, or faster recognition on future Root/node interactions."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_root_shrine_response_options"],
    tags: ["act-1", "root-shrine", "reward", "pattern", "future-leverage"],
    gmNotes: "This is a good way to make curiosity mechanically/socially matter later."
  },
  {
    id: "moment_root_shifts_beneath_surface",
    title: "Root Shifts Beneath the Surface",
    type: "stinger / root-response",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine"],
    trigger: "At the end of shrine interaction, especially after stabilization or study.",
    compact: "The Root is not dead. It is adjusting.",
    spotlight: {
      title: "The Root Adjusts",
      readAloud: [
        { type: "narration", text: "Deep under the shrine, something vast shifts—not toward you, not away from you. Around you." }
      ],
      gmPurpose: "End the shrine scene with living-system dread instead of evil/corruption language.",
      followUp: "Move to extraction with the mystery widened."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "root", "stinger", "adjusting", "dread"],
    gmNotes: "Avoid 'the Root attacks.' It reacts/adjusts."
  },
  {
    id: "moment_brinhild_after_action_report",
    title: "Brinhild After-Action Report",
    type: "extraction / debrief",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_root_shrine"],
    trigger: "During extraction or immediate post-shrine regroup with Valkyries.",
    compact: "Brinhild recognizes victory and flags the unresolved pattern.",
    spotlight: {
      title: "Victory, Not Closure",
      readAloud: [
        { type: "speech", speaker: "Brinhild", text: "You held the town. That matters. But this was not only an attack." }
      ],
      gmPurpose: "Validate the win while preserving the arc bridge.",
      followUp: "Use the outcome rubric after this beat."
    },
    relatedActors: ["actor_brinhild_field_captain"],
    relatedThreads: ["thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_ragnarok_outcome_rubric"],
    tags: ["act-1", "brinhild", "extraction", "debrief", "uneasy-success"],
    gmNotes: "She should not sound dismissive of the party's success."
  },
  {
    id: "moment_eirik_meadhall_return_or_farewell",
    title: "Eirik Meadhall Return / Farewell",
    type: "payoff / social",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_sap_hearth"],
    trigger: "After Eirik survives, returns from the Rift, or sends the party off.",
    compact: "Eirik turns survival into saga energy and then back into duty.",
    spotlight: {
      title: "Cup Ready",
      readAloud: [
        { type: "speech", speaker: "Eirik", text: "If you come back through this hollow, you drink here first. That's law now." }
      ],
      gmPurpose: "Lock Eirik as table-beloved without overstaying the bit.",
      followUp: "Let him return to town duties or the meadhall."
    },
    relatedActors: ["actor_jarl_eirik_skjoldrson"],
    relatedThreads: ["thread_uneasy_success"],
    tags: ["act-1", "eirik", "payoff", "meadhall", "farewell"],
    gmNotes: "Strong and crazy, serious when needed."
  },
  {
    id: "moment_yrsa_final_warning",
    title: "Yrsa Final Warning",
    type: "extraction / omen",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow_root_shrine", "location_skjoldyrs_hollow"],
    trigger: "Before the party leaves Skjoldyr's Hollow.",
    compact: "Yrsa warns that the Root learned something; victory remains incomplete.",
    spotlight: {
      title: "What Was Taught Remains",
      readAloud: [
        { type: "speech", speaker: "Yrsa", text: "You stopped the hand. You did not erase the lesson." }
      ],
      gmPurpose: "Give the final dread line without explaining Layer 3.",
      followUp: "Move to extraction and outcome rubric."
    },
    relatedActors: ["actor_yrsa_root_seer"],
    relatedThreads: ["thread_sap_flow_weakening", "thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_root_truths_and_language"],
    tags: ["act-1", "yrsa", "warning", "root", "extraction"],
    gmNotes: "Keep it ominous but not exposition-heavy."
  },
  {
    id: "moment_valkyries_arrive_for_extract",
    title: "Valkyries Arrive for Extract",
    type: "extraction / transition",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_root_shrine"],
    trigger: "When the party is ready to leave after the shrine reveal.",
    compact: "The extraction arrives, but the mood is no longer clean triumph.",
    spotlight: {
      title: "Wings Through Snowlight",
      readAloud: [
        { type: "narration", text: "The Valkyries descend through the cold light above the hollow. No one in town cheers this time. They watch quietly, as if sound might disturb what still sleeps below." }
      ],
      gmPurpose: "Shift from local aftermath back toward campaign scale.",
      followUp: "Run final lines, then Bifrost extraction."
    },
    relatedActors: ["actor_brinhild_field_captain"],
    relatedThreads: ["thread_uneasy_success"],
    tags: ["act-1", "valkyries", "extraction", "transition"],
    gmNotes: "This can be quiet. The party already had the loud victory."
  },
  {
    id: "moment_bifrost_extract_with_unease",
    title: "Bifrost Extract With Unease",
    type: "extraction / closing-image",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    locationIds: ["location_skjoldyrs_hollow", "location_skjoldyrs_hollow_root_shrine"],
    trigger: "Final closing beat of Act 1 extraction.",
    compact: "The party leaves with victory intact and the mystery larger.",
    spotlight: {
      title: "Pulled Away Too Soon",
      readAloud: [
        { type: "narration", text: "The Bifrost takes you upward. Skjoldyr's Hollow remains below: alive, smoking, grateful, and not yet safe." }
      ],
      gmPurpose: "Close Act 1 on the intended tone: high victory slinking back into unknown dread.",
      followUp: "Apply the Frostroot Ragnarok outcome rubric and bridge toward Act 2."
    },
    relatedThreads: ["thread_uneasy_success"],
    relatedReferences: ["reference_frostroot_ragnarok_outcome_rubric"],
    tags: ["act-1", "bifrost", "extraction", "closing", "uneasy-success"],
    gmNotes: "Do not punish the win. Let implication carry the dread."
  }
];
