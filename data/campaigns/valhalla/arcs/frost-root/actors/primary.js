// Named, recurring, table-facing NPCs for this arc.
export const primaryActors = [

    {
        id: "actor_brinhild_field_captain",
        name: "Brinhild",
        role: "Valkyrie field captain / set-piece ally",
        group: "Valkyries",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",
        currentLocation: "location_skjoldyrs_hollow_gate_palisade",
        currentState: "Holding a critical lane during the siege.",
        sticky: true,
        presentation: {
            vibe: "Aggressive battlefield certainty.",
            physicality: "Shield-first, always mid-motion, never hesitates.",
            voice: "Sharp command barks under pressure.",
            sceneImpact: "Shows elite divine combat without solving the encounter.",
            visualAnchor: "Frost-covered armor, shield planted in impossible pressure."
        },
        motivation: { wants: "Hold the line long enough for the party to decide where they matter most.", fears: "The town breaking before the real threat is understood.", leverage: "A lane that does not collapse while she stands." },
        knowledge: { knows: ["The Runecaller is not random battlefield noise.", "This siege is organized."], secrets: [] },
        quickLines: [
            "Hold the line or die tired.", 
            "You're late. Good. That means you're needed.",
            "Then we kill them inside the walls instead!",
             "...so. You finally show yourself."],
        gmNotes: "Set-piece ally only. She supports, protects, and demonstrates scale. She does not kill the boss, solve nodes, or take the players' spotlight.",
        tags: [
            "act-1", 
            "siege", 
            "valkyrie",
             "ally", 
             "set-piece", 
             "sticky"
            ],
        battlefieldProfile: {
            role: "field-anchor",
            handling: "named-ally-zone-holder",

            quickStats: {
                ac: 17,
                hp: 110,
                attack: "+7",
                damage: "1d10+4"
            },

            signatureAction: {
                name: "Valkyrie Sweep",
                frequency: "1/round",
                effect: "Push all enemies in melee 10 ft and knock prone. One target fails automatically."
            },

            rules: [
                "Holds one lane at the gate.",
                "Prioritizes protection over kills.",
                "Never leaves her zone.",
                "Use her to create openings, not solve the encounter."
            ],

            barks: [
                "Push them back!",
                "You hold HERE!",
                "Next time, give me one more cup before becoming responsible.",
            ],

            tableUse: "Use Brinhild as a lane anchor. She can stabilize one local pressure point, but she should not chase objectives, clear the field, or replace player decisions."
        }
    },
    {
        id: "actor_jarl_eirik_skjoldrson",
        name: "Jarl Eirik Skjoldrson",
        role: "Mortal war leader / line anchor",
        group: "Skjoldyr's Hollow",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",
        currentLocation: "location_skjoldyrs_hollow_gate_palisade",
        currentState: "Holding the gate or falling back to the inner line if breached.",
        sticky: true,
        presentation: {
            vibe: "A hard-drinking wall of a man who becomes command the instant danger returns.",
             physicality: "One-armed, one-eyed, broad as a gatepost, usually carrying either an axe or a cup like both are official tools of office.",
             voice: "Loud, direct, warm when there is time, iron when there is not.",
             sceneImpact: "Makes mortal courage feel alive: not polished, not divine, but immediate and absolute.",
             visualAnchor: "A laughing Jarl going still mid-revel, setting down his cup, and making the room sober with one sentence."
            
        },
        motivation: { wants: "Outlast the attack and keep his people alive.", fears: "Not death; waste, panic, and people waiting for rescue.", leverage: "Line-anchor presence and earned local trust." },
        knowledge: { knows: ["This attack is different from prior undead pressure.", "The town may not be able to withstand another night like this."], secrets: ["He does not believe in fate or divine rescue."] },
        quickLines: ["If you're here to help, then stop watching and start killing!", "We don't win this—we survive it!", "You fight like something that's already died once.", "Fear's fine. Just don't let it choose where you stand.", "...there it is. The reason this isn't over yet."],
        gmNotes: "Jarl is the line anchor. The Gate Captain is only a wall soldier / local command role, not the main anchor.",
        tags: ["act-1", "skjoldyrs-hollow", "mortal", "line-anchor", "sticky"],
        battlefieldProfile: {
            role: "frontline-command / mortal berserker anchor",
            handling: "named-ally-defensive-commander",

            quickStats: {
                ac: 16,
                hp: 95,
                attack: "+6",
                damage: "1d8+3"
            },

            signatureAction: {
                name: "Hold the Line",
                frequency: "1/round",
                effect: "One ally or defender group reduces incoming damage by half this turn."
            },

            reactiveBeat: {
                name: "The Jarl Takes the Opening",
                trigger: "If the party creates a major opening, exposes the Runecaller, or needs someone to hold impossible pressure away from the battlefield.",
                effect: "Eirik stops acting as a defensive commander and becomes a direct mortal spearhead. He charges, blocks, or throws himself into the breach to buy the party time.",
                tableUse: "This should feel heroic and dangerous, not optimal. It proves the party changed the battle enough for mortals to act."
            },

            mythicSurvivalBeat: {
                name: "Spat Back From the Rift",
                trigger: "If Eirik enters the Rift or holds off respawning reinforcements beyond the battlefield.",
                effect: "After the Rift folds, Eirik is thrown back into the snow alive, laughing, covered in draugr wreckage, and ready for the mead hall.",
                tableUse: "Use only if earned. This turns Eirik from local commander into a table-beloved saga figure."
            },

            rules: [
                "Defaults to holding the gate breach and reinforcing failing positions.",
                "Prioritizes the town while the line is collapsing.",
                "If the heroes create an impossible opening, Eirik may become the spearhead.",
                "His offensive moments should be rare, costly, loud, and emotionally obvious.",
                "He can hold impossible pressure briefly, but should not solve the boss encounter alone.",
                "If he survives an impossible stunt, let the survival become saga material."
            ],

            barks: [
                "Stand your ground!",
                "We don’t fall here!",
                "Open it!",
                "With me!",
                "You gave us a road. Now we take it!",
                "If I come back, someone better have my cup ready!"
            ],

            visualAnchor: "One-armed, one-eyed, laughing through blood and frost as the Rift spits him back into the snow.",

            tableUse: "Use Eirik as the mortal proof that courage still matters. He is outmatched by the scale of the threat, but not by fear."
        }
    },
    {
        id: "actor_yrsa_root_seer",
        name: "Yrsa Root-Seer",
        role: "Root-seer / mystic listener",
        group: "Skjoldyr's Hollow",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",
        currentLocation: "location_skjoldyrs_hollow_sap_hearth",
        currentState: "Listening to the root and reacting before others understand what changed.",
        sticky: true,
        presentation: {
            vibe: "Calm, cryptic, unsettling; always half a step ahead.",
            physicality: "Stillness that makes the air feel listened to.",
            voice: "Soft fragments, root-metaphors, incomplete truths.",
            sceneImpact: "Turns wrongness into meaning without explaining the full truth.",
            visualAnchor: "Sap-stained amber veil over her eyes, gold-resin fingers."
        },
        motivation: { wants: "Warn without breaking the mystery or claiming certainty she does not have.", fears: "The root learning something it should not know.", leverage: "Senses nodes, Rift, Runecaller, and unnatural dead." },
        knowledge: { knows: ["The party came down wrong.", "The dead are behaving like instructions.", "Something is writing into the root."], secrets: ["She suspects the party is not mortal-bound and not meant to stay."] },
        quickLines: ["You are not meant to stay.", "You came down wrong... not like the others.", "You still carry the sky with you.", "These are not the dead. These are... instructions.", "Something has learned how to wear death.", "It does not speak to the root. It writes into it."],
        gmNotes: "Truth sideways only. She senses and guides; she does not solve.",
        tags: ["act-1", "skjoldyrs-hollow", "mystic", "root", "foreshadow", "sticky"]
    },
    {
        id: "actor_torvald_brewmaster",
        name: "Torvald Brewmaster",
        role: "Brewmaster / keeper of the sap",
        group: "Skjoldyr's Hollow",
        modeId: "valhalla",
        campaignId: "valhalla",
        arcId: "frost-root",
        status: "active",
        currentLocation: "location_skjoldyrs_hollow_sap_hearth",
        currentState: "Protecting the Sap-Hearth and hiding worry over weakening sap flow.",
        sticky: true,
        presentation: {
            vibe: "Loud, warm, stubborn, deeply grounded.",
            physicality: "Built like a siege engine in a leather apron over dented armor.",
            voice: "Big commands, blunt care, no patience for nonsense.",
            sceneImpact: "Makes the town matter emotionally and practically.",
            visualAnchor: "Soot-covered face, frost-and-ash beard, forge hammer, half-full tankard."
        },
        motivation: { wants: "Keep the Sap-Hearth alive and the town standing.", fears: "The root supply failing under everyone's feet.", leverage: "Sap knowledge, mead supply, stubborn local trust." },
        knowledge: { knows: ["Sap flow is weakening.", "The mead is less reliable than it should be.", "Something upstream is wrong."], secrets: ["He has been compensating quietly so people do not panic."] },
        quickLines: ["If it's weak, we fix it.", "This isn't drink—this is lifeblood.", "You don't take from the root. You ask—and you take only what it gives.", "You want me to run? Then you better be ready to carry the root with you.", "She hears things I don't want to believe. So I keep brewing—and hope she's wrong."],
        gmNotes: "Grounded clue delivery. His words may call it poisoning, but hidden truth is disturbance / redirection / strain.",
        tags: ["act-1", "skjoldyrs-hollow", "sap-hearth", "brewmaster", "heart", "sticky"]
    },

];
