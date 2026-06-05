export const threads = [
  {
    id: "thread_draugr_are_unfinished_dead",
    title: "Draugr Are Unfinished Dead",
    type: "threat-truth",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    summary: "Draugr are unresolved dead / failed processing / system overflow, not traditional malicious undead.",
    currentState: "They drag bodies, place markings, move to nodes, and attack when interrupted or directed.",
    nextPressure: "Their collapse after the Rift folds should feel like the process no longer needs them.",

    truth: "The draugr are not evil raiders. They are dead caught in a broken or redirected processing state, continuing tasks until interrupted, commanded, or no longer needed.",

    tableUse: "Use this thread whenever draugr behavior should feel procedural instead of hungry, angry, or randomly violent.",

    revealPattern: [
      "Phase 0: Draugr ignore the party briefly and continue body placement / rune work.",
      "Siege: Draugr become threatening because they are numerous and directed, not because they are clever.",
      "Runecaller Phase: Draugr movement becomes corrected and coordinated.",
      "Rift Fold: Draugr should weaken, stop, collapse, or lose purpose when the process no longer needs them."
    ],

    languageCues: [
      "They continue.",
      "They do not decide.",
      "They move as if following instructions.",
      "They attack when interrupted.",
      "The dead no longer wander. They move—corrected."
    ],

    avoidLanguage: [
      "hungry undead",
      "mindless evil",
      "necromantic rage",
      "zombies looking for victims"
    ],

    relatedActors: [
      "actor_draugr_unfinished_dead",
      "actor_skald_frozen_tongue",
      "actor_runecaller_the_director"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_outer_field",
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads"
    ],

    relatedScenes: [
      "scene_act1_phase_0_drop_skirmish",
      "scene_act1_phase_1_siege",
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_phase_3_rift_opens"
    ],

    relatedMoments: [
      "moment_outer_field_drag_marks"
    ],

    relatedReferences: [
      "arcs/frost-root/library/act_1/encounters/phase_0_drop_skirmish.md",
      "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md"
    ],

    tags: [
      "act-1",
      "draugr",
      "death-system",
      "unfinished-dead",
      "threat-truth",
      "process"
    ]
  },

  {
    id: "thread_siege_as_distraction",
    title: "Siege as Distraction",
    type: "reveal-chain",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    summary: "The siege matters, but it is not the whole story. It is containment, distraction, and timing around a completed Root process.",
    currentState: "Players should feel the fight matters while signs suggest the real work happened elsewhere or earlier.",
    nextPressure: "Root Shrine approach reveals no battle and no active ritual—only aftermath.",

    truth: "The siege is real and dangerous, but it is not the enemy's primary objective. It holds attention, spends defenders, contains the town, and buys time around a Root process that is already complete or nearly complete.",

    tableUse: "Use this thread to keep the siege meaningful without letting it become the whole answer. The fight should matter; it just should not explain everything.",

    revealPattern: [
      "Gate: The attack looks like a siege but the enemies choose strange priorities.",
      "Battlefield: Brutes attack structures, draugr maintain patterns, and Skald rhythm preserves timing.",
      "Runecaller: The battle becomes directed around nodes and pressure sites.",
      "Root Shrine: The absence of violence reveals the inversion — the important work was not happening at the gate."
    ],

    languageCues: [
      "This attack has timing.",
      "The pressure is too organized.",
      "They are spending the battlefield.",
      "The shrine was not breached. It was allowed.",
      "The ritual is not forming. It is complete."
    ],

    avoidLanguage: [
      "the siege was fake",
      "the gate fight does not matter",
      "the village was only bait"
    ],

    relatedActors: [
      "actor_jarl_eirik_skjoldrson",
      "actor_brinhild_field_captain",
      "actor_frostroot_gate_defender_cluster",
      "actor_frostbound_brute",
      "actor_skald_frozen_tongue",
      "actor_runecaller_the_director"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    relatedScenes: [
      "scene_act1_ridge_reveal",
      "scene_act1_phase_1_siege",
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_root_shrine_too_late"
    ],

    relatedMoments: [
      "moment_jarl_line_anchor",
      "moment_brinhild_lane_hold",
      "moment_root_shrine_already_done"
    ],

    relatedTrackers: [
      "tracker_gate_state",
      "tracker_active_nodes",
      "tracker_civilian_state"
    ],

    relatedReferences: [
      "arcs/frost-root/library/act_1/locations/gate_and_palisade.md",
      "arcs/frost-root/library/act_1/locations/root_shrine_too_late.md"
    ],

    tags: [
      "act-1",
      "siege",
      "ritual",
      "misdirection",
      "root-shrine",
      "reveal-chain"
    ]
  },

  {
    id: "thread_sap_flow_weakening",
    title: "Sap Flow Weakening",
    type: "clue-chain",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    summary: "The Sap-Hearth shows the first grounded symptom of root disturbance through weak, altered, or inconsistent sap flow.",
    currentState: "Torvald has noticed and is compensating. The town does not yet understand what this means.",
    nextPressure: "Mead and Yggdrasilmaed can later become less trustworthy as the system breaks.",

    truth: "The sap is not merely running low. Its flow is a grounded symptom of Root behavior changing under strain or redirection.",

    tableUse: "Use this thread during decompression scenes to let the Root problem enter through domestic, sensory, and social texture rather than exposition.",

    revealPattern: [
      "Sap-Hearth: Torvald notices slower flow and tries to keep morale steady.",
      "Yrsa: The sap symptom can point toward Root wrongness without naming the whole truth.",
      "Root Shrine: Sap weakness connects to the Root being redirected or taught something new.",
      "Future arcs: Mead or restorative systems may become less reliable as Yggdrasil strain worsens."
    ],

    languageCues: [
      "Used to flow faster.",
      "Still gives enough. For now.",
      "The basin is too quiet.",
      "The sap smells metallic under the resin.",
      "The hearth is warm, but the Root feels tired."
    ],

    avoidLanguage: [
      "the sap is poisoned",
      "the Root is dead",
      "the mead is evil",
      "the hearth is corrupted"
    ],

    relatedActors: [
      "actor_torvald_brewmaster",
      "actor_yrsa_root_seer"
    ],

    relatedAmbientCast: [
      "ambient_sap_hearth_revelers",
      "ambient_root_tenders"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_sap_hearth",
      "location_skjoldyrs_hollow_root_shrine"
    ],

    relatedScenes: [
      "scene_act1_post_siege_aftermath",
      "scene_act1_root_shrine_too_late"
    ],

    relatedMoments: [
      "moment_torvald_sap_flow",
      "moment_yrsa_you_came_down_wrong"
    ],

    relatedReferences: [
      "arcs/frost-root/library/act_1/locations/sap_hearth.md",
      "arcs/frost-root/library/act_1/locations/root_shrine_too_late.md"
    ],

    tags: [
      "act-1",
      "sap",
      "mead",
      "clue",
      "root-strain",
      "sap-hearth"
    ]
  },

  {
    id: "thread_uneasy_success",
    title: "Uneasy Success",
    type: "act-ending-tone",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    summary: "Act 1 should end with victory, gratitude, and a strong sense that the resolution did not close the problem.",
    currentState: "The town is saved, but the bodies, sap, Root, and weather do not fully resolve.",
    nextPressure: "Feeds directly into Act 2 / EmberRoot instability rather than a clean completed quest feeling.",

    truth: "The heroes can win Act 1. They can save lives, close the Rift, hold the gate, and earn gratitude. The win should still leave evidence that the larger system has changed.",

    tableUse: "Use this thread after the battle and at the Root Shrine to keep victory from becoming false closure.",

    revealPattern: [
      "Heroic Recovery: Let the players feel the relief first.",
      "Aftermath: Add one or two wrong details — no cheers, wrong wind, twitching corpse, sap delay.",
      "Root Shrine: Confirm that something important already happened.",
      "Arc Bridge: Outcome informs the global Ragnarok rubric and Act 2 instability."
    ],

    languageCues: [
      "The snow finally falls the way it should.",
      "No one cheers at first.",
      "That should not have been here.",
      "This is not death as it should be.",
      "The Root looks whole, then shifts beneath the surface."
    ],

    avoidLanguage: [
      "you failed even if you won",
      "nothing mattered",
      "the town is doomed no matter what"
    ],

    relatedActors: [
      "actor_brinhild_field_captain",
      "actor_jarl_eirik_skjoldrson",
      "actor_yrsa_root_seer",
      "actor_torvald_brewmaster"
    ],

    relatedAmbientCast: [
      "ambient_skjoldyr_civilians",
      "ambient_wounded_defenders",
      "ambient_sap_hearth_revelers"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_sap_hearth",
      "location_skjoldyrs_hollow_root_shrine",
      "location_skjoldyrs_hollow_crossroads"
    ],

    relatedScenes: [
      "scene_act1_phase_4_heroic_recovery",
      "scene_act1_post_siege_aftermath",
      "scene_act1_root_shrine_too_late"
    ],

    relatedMoments: [
      "moment_torvald_sap_flow",
      "moment_yrsa_you_came_down_wrong",
      "moment_root_shrine_already_done"
    ],

    relatedTrackers: [
      "tracker_gate_state",
      "tracker_active_nodes",
      "tracker_rift_state",
      "tracker_rift_closure_progress",
      "tracker_civilian_state"
    ],

    relatedReferences: [
      "reference_frostroot_ragnarok_outcome_rubric"
    ],

    tags: [
      "act-1",
      "transition",
      "act-2-bridge",
      "tone",
      "uneasy-success",
      "aftermath"
    ]
  },

  {
    id: "thread_runecaller_directs_battle",
    title: "The Battle Gets Directed",
    type: "battlefield-reveal",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",

    summary: "The siege begins as chaos, then becomes visibly coordinated once the Runecaller enters.",
    currentState: "Draugr, nodes, brutes, and Skald pressure all begin to feel like parts of a single directed process.",
    nextPressure: "Runecaller arrival should make the party realize the enemy is not merely attacking; it is managing the battlefield to protect a larger working.",

    truth: "The Runecaller does not simply join the fight. It reveals the fight had a logic. Once it enters, the battlefield should feel smaller, colder, and more deliberately arranged.",

    tableUse: "Use this thread to shift the encounter from siege chaos into boss-controlled battlefield pressure.",

    revealPattern: [
      "Before Arrival: Enemies feel strange but still partly chaotic.",
      "Arrival: Wind dies, the dead pause, and the battlefield visibly corrects.",
      "Node Pressure: Rune Nodes become active levers instead of passive hazards.",
      "Rift Phase: The Runecaller forces or protects the transition into reality-wound pressure."
    ],

    languageCues: [
      "The wind dies. Not fades—dies.",
      "The dead no longer wander. They move—corrected.",
      "The battle does not escalate. It gets directed.",
      "The battlefield feels smaller.",
      "It is not trying to win. It is trying to complete the process."
    ],

    avoidLanguage: [
      "the Runecaller is angry",
      "the Runecaller wants a duel",
      "the boss shows up randomly",
      "the enemies suddenly get smarter for no reason"
    ],

    relatedActors: [
      "actor_runecaller_the_director",
      "actor_draugr_unfinished_dead",
      "actor_skald_frozen_tongue",
      "actor_frostbound_brute",
      "object_frostroot_rune_node",
      "object_frostroot_rift_core"
    ],

    relatedLocations: [
      "location_skjoldyrs_hollow_gate_palisade",
      "location_skjoldyrs_hollow_crossroads"
    ],

    relatedScenes: [
      "scene_act1_phase_2_runecaller_arrives",
      "scene_act1_phase_3_rift_opens",
      "scene_act1_phase_4_heroic_recovery"
    ],

    relatedTrackers: [
      "tracker_active_nodes",
      "tracker_rift_state",
      "tracker_rift_closure_progress"
    ],

    relatedReferences: [
      "arcs/frost-root/library/act_1/encounters/phase_2_runecaller_and_phase_3_rift.md"
    ],

    tags: [
      "act-1",
      "runecaller",
      "battlefield-control",
      "siege",
      "reveal",
      "nodes",
      "rift"
    ]
  }
];