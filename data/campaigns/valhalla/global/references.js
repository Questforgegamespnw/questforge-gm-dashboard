export const references = [
  {
    id: "reference_multi_pantheon_character_support",
    label: "Multi-Pantheon Character Support",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "character-origin / afterlife",
    summary: "Players are not limited to Norse gods or beliefs; Valhalla can borrow champions from aligned domains without claiming ownership of their final destination.",
    details: [
      "Valhalla is not claiming ownership. It is borrowing champions.",
      "Use the Valkyrie line: “You are… on loan.”",
      "Ask each player what their original afterlife would have been like.",
      "Final truth: Valhalla is not their home. It is their assignment."
    ],

    reference: "library/rules/multi_pantheon_character_support.md",
    tags: [
      "valhalla",
      "multi-pantheon",
      "afterlife",
      "character-origin",
      "soul-requisition"
    ],
    gmNotes: "Good long-term fuel for Hel, Loki, and inter-pantheon tension."
  },

  {
    id: "reference_fear_vs_corruption_loop",
    label: "Fear vs Corruption Loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "combat procedure",
    summary: "Fear creates tactical movement; corruption pulses disrupt control by forcing rerolls and reintroducing chaos into the battlefield.",
    details: [
      "Fear saves occur on initial application, half HP, and line-of-sight break.",
      "Frightened enemies reposition and retreat intelligently rather than panic-locking.",
      "Corruption Node pulses or Rift activations force affected enemies to reroll fear saves with advantage.",
      "Loop: control, disruption, chaos, reassertion."
    ],

    reference: "library/rules/fear_vs_corruption_loop.md",
    tags: [
      "valhalla",
      "fear",
      "corruption",
      "combat-system",
      "battlefield-control"
    ],
    gmNotes: "Use to keep fear powerful without making the battlefield static."
  },

  {
    id: "reference_yggdrasilmaed_system",
    label: "Yggdrasilmaed System",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "recovery / mission resource",
    summary: "A campaign-wide recovery resource that begins as divine mead and later reveals itself as a system-level state restoration tool.",
    details: [
      "Each player begins a mission with 4 charges.",
      "Restoration Draught heals 50% max HP.",
      "Rejuvenation Draught restores spell slots/class resources like a long rest, but no HP.",
      "True nature: micro-reinitialization of the player’s state within the Yggdrasil system.",
      "Eldri reveal: while Eldri is active, Yggdrasilmaed does nothing.",
      "Track mission-use separately with the Yggdrasilmaed Counter."
    ],

    reference: "library/rules/yggdrasilmaed_system.md",
    tags: [
      "valhalla",
      "yggdrasilmaed",
      "recovery",
      "mission-resource",
      "system-restoration",
      "eldri"
    ],
    gmNotes: "The later reveal reframes healing as overwrite."
  },

  {
    id: "reference_yggdrasilmaed_counter",
    label: "Yggdrasilmaed Counter",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "campaign consequence / hidden counter",
    summary: "Tracks mission-use of Yggdrasilmaed as system exposure. Each true draught consumed during missions strengthens the system’s later claim over the character.",
    details: [
      "Only count Yggdrasilmaed consumed as a mission resource: Restoration Draught or Rejuvenation Draught.",
      "Do not count ordinary Mead-Hall drinking, celebration, social scenes, or narrative flavor.",
      "Each counted use represents the character accepting a deeper state rewrite from the Yggdrasil system.",
      "At the final Odin confrontation, total Yggdrasilmaed exposure increases the difficulty of resisting Odin, system authority, or forced continuity.",
      "The counter should feel generous early and terrifying in hindsight."
    ],

    reference: "library/rules/yggdrasilmaed_counter.md",
    tags: [
      "valhalla",
      "yggdrasilmaed",
      "hidden-counter",
      "system-exposure",
      "odin",
      "endgame",
      "campaign-consequence"
    ],
    gmNotes: "Track quietly. The players can benefit from the mead for a long time before learning that every mission-use gave the system another handle."
  },

  {
    id: "reference_bifrost_deployment_extraction",
    label: "Bifrost Deployment & Valkyrie Extraction",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "deployment / extraction",
    summary: "Campaign-wide deployment and extraction procedure: Bifrost sends the party into active threats; Valkyrie extraction brings them home when the mission state allows it.",
    details: [
      "The world does not wait for them; they arrive into active threats.",
      "Extraction requires mission state stabilized or emergency retrieval triggered.",
      "Extraction types: clean, hot, forced, failed.",
      "Heimdall tracks who deploys, who returns, and who returns wrong."
    ],

    reference: "library/rules/bifrost_deployment_and_valkyrie_extraction.md",
    tags: [
      "valhalla",
      "bifrost",
      "deployment",
      "extraction",
      "valkyries",
      "mission-loop"
    ],
    gmNotes: "Core Valhalla mission-loop procedure. Keep this global because it remains relevant regardless of active arc."
  },

  {
    id: "reference_mortality_drift",
    label: "Mortality Drift",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "campaign pivot / resurrection",
    summary: "Campaign pivot for resurrection failure: death begins reversible, then return becomes delayed, incomplete, or uncertain as Ragnarok pressure rises.",
    details: [
      "First Return Failure Event is the key campaign pivot.",
      "Heimdall line: “You return… Not all of you.”",
      "Before: death is reset, Valhalla is safe, missions are contained.",
      "After: death is uncertain, Valhalla is vulnerable, missions affect everything."
    ],

    reference: "library/rules/mortality_drift.md",
    tags: [
      "valhalla",
      "mortality-drift",
      "return-failure",
      "resurrection-cycle",
      "quiet-rows"
    ],
    gmNotes: "Use when you are ready to make the players question whether they will come back."
  },

  {
    id: "reference_ragnarok_escalation_system",
    label: "Ragnarok Escalation System",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "world-state meter",
    summary: "Tracks world collapse from 0 to 10; tier changes alter Valhalla, missions, enemies, legendary items, and return-system reliability.",
    details: [
      "Tier 1 / 1–3: subtle wrongness.",
      "Tier 2 / 4–6: planar bleed.",
      "Tier 3 / 7–9: reality fracture.",
      "Tier 4 / 10: Ragnarok."
    ],

    reference: "library/rules/ragnarok_escalation_system.md",
    tags: [
      "valhalla",
      "ragnarok-meter",
      "tracker",
      "world-state",
      "escalation"
    ],
    gmNotes: "When tension feels low, increase the meter by 1."
  },

  {
    id: "reference_legendary_item_evolution",
    label: "Legendary Item Evolution",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "item progression",
    summary: "Legendary items evolve with Ragnarok tier, not character level; increased power should feel exciting and ominous at the same time.",
    details: [
      "Tier changes automatically awaken new item properties.",
      "Items are responding to instability in Yggdrasil.",
      "Player feeling: “Why are we getting stronger?”",
      "NPC line: “That’s not your weapon changing… that’s the world getting worse.”"
    ],

    reference: "library/rules/legendary_item_evolution.md",
    tags: [
      "valhalla",
      "legendary-items",
      "ragnarok-meter",
      "progression",
      "world-breaking"
    ],
    gmNotes: "Power increase should feel exciting and ominous."
  },

  {
    id: "reference_relationship_triangle",
    label: "Relationship Triangle",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "campaign philosophy / faction compass",
    summary: "Yggdrasil, Valkyries, Hel, and Loki create the campaign’s core philosophical compass for order, duty, rest, and change.",
    details: [
      "Yggdrasil System: order / continuation.",
      "Valkyries: duty / fracture.",
      "Hel: rest / acceptance.",
      "Loki: change / choice.",
      "Players decide which direction the world bends."
    ],

    reference: "library/factions/relationship_triangle.md",
    tags: [
      "valhalla",
      "faction-triangle",
      "yggdrasil",
      "valkyries",
      "hel",
      "loki"
    ],
    gmNotes: "Use as a zoomed-out orientation tool."
  },

  {
    id: "reference_rift_system",
    label: "Rift System",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "encounter tech",
    summary: "Rifts are chaos spike buttons that spawn enemies, warp terrain, and create urgency across mission arcs.",
    details: [
      "Player options: destroy, enter at high risk, suppress with skill challenge, or ignore.",
      "Use when combat pressure needs a sudden spike."
    ],

    reference: "library/rules/rift_system.md",
    tags: [
      "valhalla",
      "rift",
      "encounter-tech",
      "chaos-spike",
      "act-1"
    ],
    gmNotes: "Act 1 origin, but reusable."
  },

  {
    id: "reference_corruption_node_system",
    label: "Corruption Node System",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "encounter tech",
    summary: "Corruption Nodes turn the environment into active objective space and give the GM a battlefield control dial.",
    details: [
      "Effects: difficult terrain, enemy buffs, fear reroll triggers.",
      "Player options: destroy, suppress, or ignore.",
      "Nodes are the battlefield control dial."
    ],

    reference: "library/rules/corruption_node_system.md",
    tags: [
      "valhalla",
      "corruption-node",
      "encounter-tech",
      "battlefield-control",
      "act-1"
    ],
    gmNotes: "Strong reusable objective tech."
  },

  {
    id: "reference_resonance_clash_system",
    label: "Resonance Clash System",
    modeId: "valhalla",
    campaignId: "valhalla",
    status: "active",

    category: "spotlight mechanic",
    summary: "When Bard magic meets Skald reaction, resolve it as a contested duel of will instead of treating it as a routine spell interaction.",
    details: [
      "Bard rolls CHA using Performance or Persuasion.",
      "Skald rolls CHA.",
      "Bard wins: spell enhanced or ignores resistance.",
      "Skald wins: spell weakened or partial failure."
    ],

    reference: "library/rules/resonance_clash_system.md",
    tags: [
      "valhalla",
      "resonance-clash",
      "bard",
      "skald",
      "spellcasting",
      "act-1"
    ],
    gmNotes: "Use to spotlight the Bard, not to tax every spell."
  },

  {
    id: "thread_loki_balder_misdirection",
    title: "Loki / Balder Misdirection",
    type: "long-game-mystery",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla",
    status: "active",
    summary: "Balder may not be what he appears; Loki may be embedded, interfering, or exploiting instability.",
    currentState: "Do not confirm in Act 1. Let suspicion build slowly through contradictions and too-clean sorting.",
    nextPressure: "Later arcs can complicate the first guide figure from Scene 0.",
    relatedActors: ["actor_baldur_shepherd_of_the_dead"],
    tags: ["scene-0", "loki", "balder", "misdirection", "long-game"]
  },
  {
    id: "thread_maker_awareness",
    title: "The Maker Notices Differently",
    type: "meta-mystery",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    summary: "The Maker exists outside the Yggdrasil system and is aware of the players in a way the system is not.",
    currentState: "Only implied through pattern-focus, above-view echo moments, and being noticed by something without eyes.",
    nextPressure: "Use sparingly. This is a long-term payoff thread, not an Act 1 explanation.",
    relatedScenes: ["scene_act1_phase_0_drop_skirmish", "scene_act1_root_shrine_too_late"],
    tags: ["maker", "meta", "long-game", "do-not-explain"]
  },

  {
    id: "thread_chosen_vs_assigned",
    title: "Chosen vs Assigned",
    type: "mystery / identity",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla",
    status: "active",
    summary: "The players are allowed to believe they were chosen, while the hidden truth is that they were assigned to a system under strain.",
    currentState: "Scene 0 introduces the party as worthy heroes and new Einherjar assets.",
    nextPressure: "Future Heimdall, Yrsa, and system-glitch moments can imply they are not being processed like normal souls.",
    relatedActors: ["actor_baldur_shepherd_of_the_dead", "actor_svinhild_valkyrie_commander", "actor_yrsa_root_seer"],
    relatedScenes: ["scene_prologue_death_and_dissolution", "scene_prologue_valhalla_briefing"],
    tags: ["scene-0", "identity", "hidden-truth", "valhalla"]
  },

  {
    id: "reference_einherjar_strike_system",
    label: "Einherjar Strike System",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla",
    status: "available",
    category: "procedure",
    summary: "Deployment loop established in Scene 0.",
    details: [
      "Deploy: Bifrost Down.",
      "Assess: identify local pressure and hidden objective.",
      "Neutralize: stop immediate escalation without revealing true nature.",
      "Extract: Valkyrie Up.",
      "Operational secrecy: do not reveal Valhalla, origin, or cosmic Ragnarok truth."
    ],
    tags: ["scene-0", "mission-loop", "einherjar", "procedure"]
  },
  {
    id: "reference_yggdrasilmaed",
    label: "Yggdrasilmaed",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla",
    status: "available",
    category: "rules",
    summary: "Divine mead resource introduced by Sven to support hard encounters from session 1.",
    details: [
      "Each player begins with 4 uses.",
      "Per use: heal 50% HP OR restore spell slots/abilities as pseudo-long-rest without healing.",
      "Encourage use under pressure, but never make it feel free.",
      "Optional: small surge / environmental reaction when used near Root strain."
    ],
    tags: ["scene-0", "mead", "resource", "rules"]
  },
];
