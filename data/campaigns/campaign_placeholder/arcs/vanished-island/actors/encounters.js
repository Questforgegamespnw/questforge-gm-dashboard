export const encounterActors = [
    {
        id: "actor_reef_raider",
        name: "Reef Raider",
        role: "Merfolk boarding skirmisher",
        group: "Merfolk",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "available",

        currentLocation: "location_island_shore",
        currentState: "Boarding the expedition ship during the flare crisis",
        sticky: false,

        presentation: {
            vibe: "Fast, wet, and difficult to pin down.",
            physicality:
                "A lean amphibious humanoid with hooked blades, slick scales, and rope or netting wound around its limbs.",
            voice:
                "Clicks, sharp calls, and short phrases exchanged between attackers.",
            sceneImpact:
                "Climbs aboard, isolates sailors, and retreats into the water when pressured.",
            visualAnchor:
                "A scaled hand hooking over the rail as seawater pours from its body."
        },

        motivation: {
            wants:
                "Disable the ship, overwhelm its crew, and prevent it from leaving the island waters.",
            fears:
                "Being trapped on deck away from the water.",
            leverage:
                "Can move between the sea and the ship more easily than the defenders."
        },

        knowledge: {
            knows: [
                "The waters surrounding the island.",
                "Where to damage or climb the vessel.",
                "The attack began much earlier from the sailors' perspective."
            ],
            secrets: [
                "The raiders may be trying to stop escape rather than simply slaughter the crew."
            ]
        },

        quickLines: [
            "Back to the deep!",
            "Break the mast!",
            "Do not let it leave!"
        ],

        answerMoments: [],
        relationships: [],
        relatedThreads: [
            "thread_ship_under_attack",
            "thread_time_dilation",
            "thread_missing_ships"
        ],

        tags: [
            "campaign-placeholder",
            "vanished-island",
            "merfolk",
            "enemy",
            "boarder",
            "skirmisher"
        ],

        gmNotes:
            "Use 3 raiders for a light fight or 4 for a more demanding opening. Raiders retreat or dive overboard when badly hurt.",

        quote: "Do not let it leave!",

        quickStats: {
            ac: 13,
            hp: "16",
            speed: "30 ft, swim 40 ft"
        },

        traits: [
            "Amphibious",
            "Sea Escape: Does not provoke opportunity attacks when diving from the ship into the water",
            "Pack Pressure: Once per turn, deals +2 damage to a target adjacent to another raider"
        ],

        actions: [
            "Hooked Spear: +4 to hit, 1d6 + 2 piercing",
            "Net: Ranged attack against one creature within 15 ft; restrained on hit, escape DC 10"
        ],

        use: [
            "Opening ship defense",
            "Boarding action",
            "Dragging sailors toward the rail"
        ]
    },

    {
        id: "actor_tidecaller",
        name: "Tidecaller",
        role: "Merfolk support caster / battlefield controller",
        group: "Merfolk",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "available",

        currentLocation: "location_island_shore",
        currentState: "Directing the attack from the water",
        sticky: false,

        presentation: {
            vibe:
                "A distant coordinator who controls water and movement rather than dealing heavy damage.",
            physicality:
                "A broader scaled figure hung with shells, carved bone, and strands of wet cord.",
            voice:
                "Low chants beneath the crashing surf.",
            sceneImpact:
                "Knocks people off balance, protects retreating raiders, and turns the ship's edge into a hazard.",
            visualAnchor:
                "A raised shell staff as seawater curls over the railing."
        },

        motivation: {
            wants:
                "Force the ship to remain at the island and recover any captured or wounded raiders.",
            fears:
                "The boarding party being stranded and killed.",
            leverage:
                "Can influence water and footing without boarding the ship."
        },

        knowledge: {
            knows: [
                "The raiders' immediate objective.",
                "That the island and the water do not experience time equally.",
                "At least part of what happened to previous ships."
            ],
            secrets: [
                "May retreat and negotiate if the party proves difficult to overwhelm."
            ]
        },

        quickLines: [
            "The water keeps what enters.",
            "You cannot take this vessel beyond the veil.",
            "Leave the ship."
        ],

        answerMoments: [],
        relationships: [],
        relatedThreads: [
            "thread_ship_under_attack",
            "thread_time_dilation",
            "thread_missing_ships",
            "thread_island_distortion"
        ],

        tags: [
            "campaign-placeholder",
            "vanished-island",
            "merfolk",
            "enemy",
            "support",
            "controller"
        ],

        gmNotes:
            "Optional escalation. Add only if the party is handling the raiders easily, or use as a visible commander who retreats before being fully engaged.",

        quote: "The water keeps what enters.",

        quickStats: {
            ac: 12,
            hp: "24",
            speed: "20 ft, swim 40 ft"
        },

        traits: [
            "Amphibious",
            "Water Cover: While mostly submerged, gains half cover against attacks from the ship"
        ],

        actions: [
            "Shell Staff: +3 to hit, 1d6 + 1 bludgeoning",
            "Surging Water: One creature within 30 ft makes a DC 12 Strength save or is pushed 10 ft and knocked prone",
            "Binding Current, Recharge 5–6: A 10-foot area becomes difficult terrain until the start of the Tidecaller's next turn"
        ],

        use: [
            "Escalating the ship defense",
            "Controlling the deck",
            "Providing a possible speaking enemy"
        ]
    },

    {
        id: "actor_expedition_sailor",
        name: "Expedition Sailor",
        role: "Allied ship defender",
        group: "Expedition Sailors",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "available",

        currentLocation: "location_island_shore",
        currentState: "Exhausted after defending the ship for what felt like hours",
        sticky: false,

        presentation: {
            vibe:
                "Ordinary sailors holding together under an impossible attack.",
            physicality:
                "Salt-soaked clothing, improvised weapons, bloodied hands, and the posture of people running out of strength.",
            voice:
                "Shouted warnings, panicked names, and desperate orders across the deck.",
            sceneImpact:
                "Makes the fight a rescue instead of a clean battlefield.",
            visualAnchor:
                "A sailor bracing a splintered oar against a scaled boarder."
        },

        motivation: {
            wants:
                "Keep the ship afloat, protect the other sailors, and survive until the party returns.",
            fears:
                "Being dragged overboard or abandoned on the island.",
            leverage:
                "Knows the ship, its ropes, and its weak points."
        },

        knowledge: {
            knows: [
                "The attack has lasted much longer than the party expects.",
                "Where the raiders first boarded.",
                "Which parts of the ship have been damaged."
            ],
            secrets: [
                "One or more sailors may have seen signs of another missing vessel during the attack."
            ]
        },

        quickLines: [
            "Where have you been?",
            "They've been coming for hours!",
            "Keep them off the rigging!",
            "Someone help the bow!",
            "Don't let them take another!"
        ],

        answerMoments: [],
        relationships: [],
        relatedThreads: [
            "thread_ship_under_attack",
            "thread_time_dilation",
            "thread_missing_ships"
        ],

        tags: [
            "campaign-placeholder",
            "vanished-island",
            "sailor",
            "ally",
            "crew",
            "civilian-combatant"
        ],

        gmNotes:
            "There are five sailors total. Track them as individuals narratively, but use one shared profile. At the start of the scene, two may be injured and only three actively fighting.",

        quickStats: {
            ac: 11,
            hp: "8 each",
            speed: "30 ft"
        },

        traits: [
            "Shipwise: Advantage on checks involving ropes, sails, balance, or movement aboard the ship",
            "Hold Together: A sailor adjacent to another conscious sailor gains +1 AC"
        ],

        actions: [
            "Improvised Weapon: +2 to hit, 1d4 bludgeoning or piercing",
            "Help: Grants advantage to an adjacent ally",
            "Cut Loose: Frees a netted or restrained adjacent creature with a DC 10 check"
        ],

        use: [
            "Allied defenders",
            "Rescue objectives",
            "Demonstrating the time-dilation reveal",
            "Providing ship-condition information"
        ]
    }
];