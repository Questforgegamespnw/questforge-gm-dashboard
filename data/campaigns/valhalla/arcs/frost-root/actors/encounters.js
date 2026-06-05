export const encounterActors = [
    {
        id: "actor_draugr_unfinished_dead",
        name: "Draugr — The Unfinished Dead",
        role: "Objective-driven pressure unit",
        group: "Unresolved Dead",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        currentLocation: "location_skjoldyrs_hollow_outer_field",
        currentState: "Continuing tasks around nodes, bodies, and pressure sites unless interrupted.",

        sticky: false,

        presentation: {
            vibe: "Purpose without malice.",
            physicality: "They do not charge or rage. They continue.",
            sceneImpact: "Makes the fight feel like the party interrupted a process, not an ambush.",
            visualAnchor: "Dull blue eyes and bodies moving as if still following instructions."
        },

        quote: "They do not stop. They do not decide. They continue.",

        quickLines: [
            "They are not attacking. They are building something.",
            "They do not stop. They do not decide. They continue.",
            "The dead keep working until violence interrupts the task."
        ],

        quickStats: {
            ac: 16,
            hp: "65",
            attack: "+7",
            damage: "1d8+3",
            speed: "30 ft"
        },

        traits: [
            "Objective Driven: Draugr prioritize bodies, markings, nodes, and pressure sites unless directly interrupted.",
            "Unfinished Dead: They are unresolved dead / failed processing, not ordinary undead villains.",
            "Relentless Advance: They do not panic, posture, or retreat in a mortal way."
        ],

        actions: [
            "Cold weapon strike: +7 to hit, 1d8+3 damage.",
            "Continue the Work: If ignored for a beat, advance corpse placement, rune patterning, node pressure, or battlefield positioning.",
            "Redirected Violence: If interrupted, the draugr turns its task into attack pressure."
        ],

        use: [
            "Phase 0 Drop Skirmish",
            "Gate pressure bodies",
            "Rift-spawned pressure",
            "Proof that the party interrupted a process"
        ],

        relatedThreads: [
            "thread_draugr_are_unfinished_dead",
            "thread_siege_as_distraction",
            "thread_players_interrupted_a_process"
        ],

        reference: "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",

        tags: [
            "act-1",
            "frost-root",
            "hostile",
            "draugr",
            "unfinished-dead",
            "objective",
            "encounter-actor"
        ],

        gmNotes: "Do not run them as hungry undead. Their horror is procedural: they continue the work until the players force them to become a fight."
    },

    {
        id: "actor_frostbound_brute",
        name: "Frostbound Brute",
        role: "Structure breaker / threat anchor",
        group: "Unresolved Dead",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        currentLocation: "location_skjoldyrs_hollow_gate_palisade",
        currentState: "Breaking gates, walls, and positions.",

        sticky: false,

        presentation: {
            vibe: "Force made into a battlefield problem.",
            physicality: "It does not adjust or react. It continues the motion until something breaks.",
            sceneImpact: "Turns the gate into an urgent clock.",
            visualAnchor: "A huge winter-grown weapon dragged through the snow."
        },

        quote: "Every swing lands like a falling tree.",

        quickLines: [
            "The draugr part around it—not in fear, but recognition.",
            "Every swing lands like a falling tree.",
            "It does not look for weakness. It creates one."
        ],

        quickStats: {
            ac: 15,
            hp: "125",
            attack: "+11",
            damage: "2d8+1d6 cold",
            speed: "30 ft"
        },

        traits: [
            "Structure Breaker: Its attacks should threaten gates, walls, defender clusters, and battlefield positions.",
            "Siege Weight: One clean hit can badly damage a defender cluster; two can break it.",
            "No Tactical Ego: It does not duel unless blocked. It keeps breaking the objective."
        ],

        actions: [
            "Crushing strike: +11 to hit, 2d8+1d6 cold damage.",
            "Break Position: Damage a gate, barricade, shield cluster, or lane anchor.",
            "Knockdown Pressure: On a heavy impact beat, knock a mortal defender, cluster, or exposed target prone/back unless stabilized."
        ],

        use: [
            "Gate pressure clock",
            "Defender cluster breaker",
            "Proof of mortal mismatch",
            "Physical reason the party must intervene"
        ],

        relatedThreads: [
            "thread_siege_as_distraction",
            "thread_runecaller_directs_battle"
        ],

        reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",

        tags: [
            "act-1",
            "frost-root",
            "hostile",
            "brute",
            "siege",
            "structure-breaker",
            "encounter-actor"
        ],

        gmNotes: "Use the Brute to attack the battlefield, not just HP. Its best job is making a lane, gate, or defender cluster visibly fail."
    },

    {
        id: "actor_skald_frozen_tongue",
        name: "Skald of the Frozen Tongue",
        role: "Anti-caster / rhythm disruptor / Bard spotlight rival",
        group: "Unresolved Dead",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        currentLocation: "location_skjoldyrs_hollow_outer_field",
        currentState: "Chanting beneath the battle noise and disrupting magical rhythm.",

        sticky: false,

        presentation: {
            vibe: "The voice inside the noise.",
            physicality: "It stands still in battle, mouth moving in a rhythm that does not belong to breath.",
            sceneImpact: "Creates a duel inside the battle, especially for the Bard.",
            visualAnchor: "A silent shape whose song moves the dead."
        },

        quote: "Your magic is not yours alone.",

        quickLines: [
            "Your magic is not yours alone.",
            "The chant stops mid-syllable—not cut off, just ended.",
            "For one beat, every action on the field feels half a step late."
        ],

        quickStats: {
            ac: 14,
            hp: "~70",
            attack: "+6",
            damage: "low",
            speed: "30 ft"
        },

        traits: [
            "Frozen Voice Aura: Makes nearby actions feel delayed, mistimed, or harder to coordinate.",
            "Counter-Chant: Can interfere with one obvious spell, song, command, or magical rhythm beat.",
            "Resonance Clash: Bard / performance / sound-based counters should work especially well against it.",
            "Spotlight, Not Shutdown: Its disruption should create drama, not remove a caster from play."
        ],

        actions: [
            "Counter-Chant: Once per round, pressure or complicate a spell, bardic feature, command, or coordinated action.",
            "Move the Dead: Make nearby draugr act with eerie timing or reposition as if following rhythm.",
            "Frozen Voice Pulse: Create a brief battlefield hesitation, opening a pressure beat unless countered."
        ],

        use: [
            "Bard spotlight",
            "Anti-caster pressure",
            "Explaining coordinated draugr movement",
            "Turning noise into battlefield control"
        ],

        relatedThreads: [
            "thread_draugr_are_unfinished_dead",
            "thread_runecaller_directs_battle"
        ],

        reference: "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",

        tags: [
            "act-1",
            "frost-root",
            "hostile",
            "skald",
            "anti-caster",
            "bard-spotlight",
            "rhythm-disruptor",
            "encounter-actor"
        ],

        gmNotes: "Counter pressure should feel dramatic, not oppressive. Bard contest is spotlight, not shutdown."
    },

    {
        id: "actor_runecaller_the_director",
        name: "Runecaller — The Director",
        role: "Battlefield controller / boss presence",
        group: "Root Interference",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        currentLocation: "location_skjoldyrs_hollow_crossroads",
        currentState: "Directing the battle and protecting the process.",

        sticky: true,

        presentation: {
            vibe: "Control, correction, intent.",
            physicality: "It never rushes, never searches; it already knows where everything is.",
            sceneImpact: "Transforms chaos into a boss encounter controlling the battlefield.",
            visualAnchor: "Runes burning beneath its feet as the battlefield feels smaller."
        },

        quote: "The battle does not escalate. It gets directed.",

        quickLines: [
            "The battle doesn't escalate. It gets directed.",
            "The dead no longer wander. They move—corrected.",
            "It does not fall. It pauses... listening for something that no longer answers."
        ],

        quickStats: {
            ac: 16,
            hp: "~150",
            attack: "+8",
            damage: "moderate",
            speed: "30 ft / reposition by rune"
        },

        traits: [
            "Battlefield Director: It makes enemies move like parts of the same thought.",
            "Protect the Process: It is not trying to win the fight; it is trying to complete or preserve the working.",
            "Node Command: Can reactivate, pulse, protect, or reposition pressure around active nodes.",
            "Rune Reposition: Can appear where the battlefield logic needs it, especially near nodes, Rift pressure, or crossroads.",
            "Rift Trigger: At the correct threshold, it can force the battlefield into the Rift phase.",
            "Legendary Pressure: The Runecaller uses legendary actions to attack the backline, break positioning, activate nodes, and command undead outside the normal turn rhythm.",
            "Command the Dead: On a 5–6 recharge or chosen pressure beat, nearby undead immediately move or attack.",
            "Pulse Corruption: Spending two legendary actions can activate a node or trigger a battlefield shift."
        ],

        actions: [
            "Rune strike / cold force: +8 to hit, moderate damage.",
            "Correct the Dead: Reposition or coordinate nearby draugr.",
            "Pulse a Node: Spike battlefield pressure, force movement, or worsen the gate/Rift state.",
            "Protect the Pattern: Interfere with attempts to disrupt nodes, study the ritual, or stabilize the field.",
            "Open the Rift: Trigger Phase 3 when the fight reaches the correct threshold.",
            "Ice Lash: Ranged chip damage against backline, isolated, concentrating, or low-HP targets.",
            "Rune Shift: Teleport 15 ft to break positioning or relocate near a node/Rift pressure point.",
            "Pulse Corruption: Costs 2 legendary actions; activate a node or trigger a battlefield shift.",
            "Command the Dead: On 5–6 recharge or pressure beat, undead immediately move or attack."
        ],

        legendaryActions: {
            uses: 3,
            refresh: "end of its turn",
            options: [
                {
                    name: "Ice Lash",
                    cost: 1,
                    effect: "Ranged chip damage. Prioritizes backline, isolated, concentrating, or low-HP targets.",
                    tableUse: "Use to remind players the Runecaller controls more than the front line."
                },
                {
                    name: "Rune Shift",
                    cost: 1,
                    effect: "Teleport 15 ft. Breaks positioning, escapes pinning, or relocates near a node/Rift pressure point.",
                    tableUse: "Use to keep the Runecaller from becoming a static damage sponge."
                },
                {
                    name: "Pulse Corruption",
                    cost: 2,
                    effect: "Activate a node, trigger a battlefield shift, or spike existing Root/Rift pressure.",
                    tableUse: "Use when the scene needs to visibly worsen or force a new player priority."
                },
                {
                    name: "Command the Dead",
                    cost: 1,
                    recharge: "5–6 if using recharge logic",
                    effect: "Undead immediately move or attack.",
                    tableUse: "Use to show the dead are being directed, not merely aggressive."
                }
            ]
        },

        use: [
            "Boss-controller phase",
            "Transition from chaos to directed battle",
            "Node / Rift pressure",
            "Signal that the siege is covering a larger process"
        ],

        relatedThreads: [
            "thread_siege_as_distraction",
            "thread_rift_is_symptom",
            "thread_runecaller_directs_battle",
            "thread_root_rewritten"
        ],

        reference: "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md",

        tags: [
            "act-1",
            "frost-root",
            "hostile",
            "boss",
            "runecaller",
            "battlefield-controller",
            "sticky",
            "encounter-actor"
        ],

        gmNotes: "Do not place immediately. Describe first, pause, then place. It is not angry; it directs. Its loss should feel like a signal was cut, not like a monster simply died."
    },
    {
        id: "object_frostroot_rune_node",
        name: "Frostroot Rune Node",
        role: "Battlefield hazard / solution target",
        group: "Root Interference",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        encounterType: "battlefield-object",
        currentLocation: "location_skjoldyrs_hollow_gate_palisade",
        currentState: "Expanding cold-field pressure and battlefield control.",

        sticky: false,

        presentation: {
            vibe: "A small thing making the whole battlefield worse.",
            physicality: "A jagged rune-mark or buried focus pulsing blue-white beneath frost and disturbed snow.",
            sceneImpact: "Creates expanding area pressure and gives players a concrete battlefield solution target.",
            visualAnchor: "Cold light spreading outward in a widening ring."
        },

        quote: "The snow around it stops falling and starts spreading.",

        quickLines: [
            "The light does not flare. It spreads.",
            "The cold moves outward like a decision.",
            "Anyone too close feels their legs begin to lock."
        ],

        quickStats: {
            ac: 13,
            hp: 60,
            speed: "stationary",
            damageField: "Expands 10 ft/round",
            save: "Con save vs 0 movement and 2d8 cold damage"
        },

        traits: [
            "Expanding Cold Field: The node expands its damage/control field by 10 ft each round.",
            "Rooted Movement Lock: Creatures caught in the field risk 0 movement and 2d8 cold damage on a failed Con save.",
            "Battlefield Anchor: The Runecaller can activate, pulse, or protect nodes to shift battlefield pressure.",
            "Solution Target: Destroying or disrupting a node should visibly reduce pressure, open a lane, or weaken the Runecaller's control."
        ],

        actions: [
            "Cold Field Expansion: At the start or end of the round, expand the danger zone by 10 ft.",
            "Movement Lock: Creatures in the field make a Con save or suffer 0 movement and 2d8 cold damage.",
            "Pulse Response: When activated by the Runecaller, immediately trigger the cold field or a battlefield shift."
        ],

        use: [
            "Give players a non-kill solution target.",
            "Explain why the battlefield is getting worse.",
            "Create movement pressure.",
            "Let tactical players reduce the siege threat through smart targeting."
        ],

        relatedThreads: [
            "thread_runecaller_directs_battle",
            "thread_rift_is_symptom",
            "thread_root_rewritten"
        ],

        reference: "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md",

        tags: [
            "act-1",
            "frost-root",
            "battlefield-object",
            "node",
            "hazard",
            "solution-target",
            "cold-field"
        ],

        gmNotes: "Nodes should make the battlefield feel controlled and solvable. They are not just hazards; they are pressure levers players can identify, destroy, disrupt, or temporarily suppress."
    },

    {
        id: "object_frostroot_rift_core",
        name: "Frostroot Rift Core",
        role: "Reality wound / major solution target",
        group: "Root Interference",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",

        encounterType: "battlefield-object",
        currentLocation: "location_skjoldyrs_hollow_crossroads",
        currentState: "Open Rift pressure, enemy spawning, and battlefield distortion.",

        sticky: true,

        presentation: {
            vibe: "A wound trying to become a door.",
            physicality: "A vertical fracture of cold light, root-shadow, and impossible depth hanging where the battlefield should be solid.",
            sceneImpact: "Creates the Phase 3 solution target and explains continued enemy pressure.",
            visualAnchor: "A tear in the air folding snow, sound, and distance inward."
        },

        quote: "The tear does not open wider. The world around it folds smaller.",

        quickLines: [
            "The ground fractures—not with force, but with intent.",
            "Snow lifts instead of falling.",
            "Something on the other side notices you.",
            "The tear does not close. It folds."
        ],

        quickStats: {
            ac: 14,
            hp: 120,
            speed: "stationary",
            spawn: "Spawns enemies each round",
            alternateResolution: "Can be closed with ritual / Arcana / Religion / Performance-style successes if supported by scene rules"
        },

        traits: [
            "Enemy Spawn: The Rift Core spawns or introduces enemy pressure each round while active.",
            "Reality Distortion: Distance, movement, sound, and visibility can become unreliable near the Core.",
            "Major Solution Target: Destroying, closing, or stabilizing the Core should end or sharply reduce Phase 3 pressure.",
            "Symptom, Not Source: The Rift is a pressure release point, not the true root cause."
        ],

        actions: [
            "Spawn Pressure: Add draugr, lesser dead, or battlefield pressure each round.",
            "Reality Bend: Distort movement, pull combatants, isolate a lane, or make a safe path unsafe.",
            "Notice the Living: Target a character who interacts with the Core, studies it, sings against it, or tries to close it.",
            "Collapse / Fold: When resolved, the Rift folds inward rather than simply vanishing."
        ],

        use: [
            "Phase 3 major objective.",
            "Enemy spawn source.",
            "Bard / Arcana / Religion solution target.",
            "Cinematic reason the fight cannot simply be solved by killing enemies."
        ],

        relatedThreads: [
            "thread_rift_is_symptom",
            "thread_root_rewritten",
            "thread_death_not_resolving"
        ],

        reference: "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md",

        tags: [
            "act-1",
            "frost-root",
            "battlefield-object",
            "rift",
            "rift-core",
            "solution-target",
            "enemy-spawn",
            "reality-break"
        ],

        gmNotes: "Use the Rift Core to shift the scene from battlefield victory to wound management. Players should understand that killing enemies is not enough; something must be closed, disrupted, stabilized, or endured."
    },


    ///DEFENDERS///

    {
        id: "actor_frostroot_gate_defender_cluster",
        name: "Skjoldyr Gate Defender Cluster",
        role: "Mortal defender cluster / battlefield pressure unit",
        group: "Skjoldyr's Hollow",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "available",

        currentLocation: "location_skjoldyrs_hollow_gate_palisade",
        currentState: "Gate line / siege pressure",

        sticky: false,

        presentation: {
            vibe: "Competent, brave, and badly outmatched.",
            physicality: "A knot of shield-bearers, spear fighters, axe hands, and archers holding formation around splintering timber.",
            sceneImpact: "Shows that mortal warriors can resist the draugr, but cannot endure sustained supernatural pressure without Einherjar intervention.",
            visualAnchor: "A shield cluster absorbing one hit too many before the line buckles."
        },

        quote: "Hold the gate!",

        quickLines: [
            "Brace!",
            "Left side's folding!",
            "Archers, high mark!",
            "Don't chase them—hold the gate!",
            "They're not climbing. They're waiting for something."
        ],

        quickStats: {
            ac: 16,
            hp: "~50 per cluster",
            attack: "+5 to +6",
            damage: "~10–14 clustered melee / arrows",
            speed: "30 ft",
            countAs: "3–5 competent mortal defenders",
            roughCR: "Clustered CR 3-ish defenders"
        },

        traits: [
            "Hold the Line: A fresh cluster can hold against regular draugr for a short exchange without immediate collapse.",
            "Outmatched by Brutes: A Frostbound Brute can badly damage or break a cluster in 1–2 solid hits.",
            "Numbers Pressure: Even if individual defenders are competent, multiple draugr or coordinated attacks can overwhelm them quickly.",
            "Needs Einherjar Intervention: A player success can preserve, reposition, rally, or reinforce a cluster instead of tracking each defender.",
            "Mortal Limits: The cluster is brave and trained, but it cannot solve supernatural battlefield control on its own."
        ],

        actions: [
            "Clustered melee / arrows: +5 to +6 to hit, ~10–14 total damage if the cluster is fresh and positioned.",
            "Brace the Gate: Reduce or delay one pressure beat against the gate.",
            "Covering Volley: Create a lane, suppress lesser draugr, or give a player advantage / positioning for one action.",
            "Shield Lock: Hold a chokepoint for one beat unless broken by brute pressure, flanking, Skald rhythm, or Runecaller direction.",
            "Collapse Back: If reduced to 0 hp or broken by pressure, the cluster falls back, scatters, or becomes wounded-defender aftermath texture."
        ],

        use: [
            "Prove the attackers are lethal without spending player HP.",
            "Show why Einherjar are needed.",
            "Buy one round at the gate.",
            "Create rescue and reinforcement decisions.",
            "Represent mortal defenders without initiative grind.",
            "Give the GM grounded Theater-of-the-Mind combat math."
        ],

        relatedThreads: [
            "thread_siege_as_distraction",
            "thread_draugr_are_unfinished_dead",
            "thread_runecaller_directs_battle"
        ],

        reference: "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",

        tags: [
            "valhalla",
            "frost-root",
            "skjoldyrs-hollow",
            "defender",
            "mortal",
            "cluster",
            "scene-pressure",
            "encounter-actor"
        ],

        gmNotes: "Use as clustered battlefield math, not individual initiative actors. Each cluster represents roughly 3–5 competent mortal defenders, including shield fighters, spear fighters, axe hands, and archers. They are not weak; they are outmatched."
    }
    ///END DEFENDERS///
]