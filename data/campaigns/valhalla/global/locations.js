export const locations = [
  {
    id: "location_valhalla_hub",
    name: "Valhalla Hub",
    type: "fortress-city / war afterlife hub",
    region: "Valhalla",
    locationRole: "parent",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    currentState: "Functional, structured, beautiful, and beginning to fail under Ragnarok pressure.",
    presentation: {
      establishingShot: "Massive rune-carved timber walls, dragon-headed beams, golden sky, and battle echoes that never quite fade.",
      vibe: "Eternal readiness with hairline cracks beneath the glory.",
      sensory: [
        "Gold light that never fully dims.",
        "Distant drills and feasting sounds.",
        "A fortress-city trying to remain certain."
      ]
    },
    function: "Parent overview for the Valhalla hub and its major player-facing zones.",
    pressure: "Valhalla remains beautiful, but rituals, retrieval, memory, and morale are beginning to misfire.",
    connectedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_mead_hall",
      "location_valhalla_golden_fields",
      "location_valhalla_forge_lanes",
      "location_valhalla_quiet_rows",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_training_grounds"
    ],
    keyActors: [
      "actor_heimdall",
      "actor_sven",
      "actor_svinhild"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_yggdrasil_root_sickness",
      "thread_valkyrie_disagreement",
      "thread_heimdall_knows_more",
      "thread_names_changing_quiet_rows",
      "thread_borrowed_souls",
      "thread_return_is_not_guaranteed"
    ],
    availableScenes: [
      "scene_valhalla_choose_hub_location",
      "scene_valhalla_immediate_hub_reactions"
    ],
    reference: "library/hub/00_hub_system_overview.md",
    tags: [
      "hub",
      "valhalla",
      "parent-location",
      "war-afterlife"
    ]
  },
  {
    id: "location_valhalla_bifrost_platform",
    name: "Bifrost Platform",
    type: "arrival platform / return node",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Controlled and familiar, but each return feels slightly less clean.",
    escalation: {
      stable: "Arrival is violent but clean.",
      strain: "Impact feels harsher; warmth arrives late.",
      fracture: "One return is out of sync; mission sensory details linger.",
      break: "Return is incomplete, delayed, or visibly misaligned."
    },
    presentation: {
      establishingShot: "The party falls in streaks of burning rainbow light, striking the platform with impossible force. Heat flashes and fades into warmth as battle noise dissolves into distant laughter, bread, mead, and woodsmoke.",
      vibe: "Violent arrival contained by divine order.",
      sensory: [
        "Burning rainbow light.",
        "Heat fading instantly into warmth.",
        "Battle noise replaced by distant laughter."
      ]
    },
    function: "Session opener, return sequence, tone reset, and resurrection-system indicator.",
    pressure: "Arrival is always violent. It is no longer always clean.",
    opportunities: [
      "Recap the mission through sensory contrast.",
      "Foreshadow return-system instability.",
      "Transition into immediate NPC reactions."
    ],
    dangers: [
      "The return may feel delayed, misaligned, or incomplete.",
      "Mission sensations may linger after arrival."
    ],
    connectedLocations: [
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    relatedThreads: [
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_heimdall_knows_more"
    ],
    factionsPresent: [],
    actorsPresent: [
      "actor_heimdall"
    ],
    availableScenes: [
      "scene_valhalla_bifrost_return",
      "scene_valhalla_immediate_hub_reactions"
    ],
    eventTable: "",
    reference: "library/hub/01_bifrost_platform.md",
    tags: [
      "active",
      "valhalla",
      "return",
      "bifrost",
      "system-indicator",
      "session-opener"
    ],
    gmNotes: "Use every post-mission sequence. Let small differences imply system strain."
  },
  {
    id: "location_valhalla_heimdalls_threshold",
    name: "Heimdall’s Threshold",
    type: "threshold / watcher post",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Still and watchful; Heimdall’s brevity is becoming more meaningful.",
    escalation: {
      stable: "Heimdall acknowledges the party with calm certainty.",
      strain: "He says less than usual.",
      fracture: "He pauses, watches, or withholds something obvious.",
      break: "He says nothing."
    },
    presentation: {
      establishingShot: "At the edge of the Bifrost platform, the return-light thins into stillness. Heimdall stands unmoving, framed by gold and impossible distance, his gaze already fixed on the party before they fully rise.",
      vibe: "Still, watchful, and uncomfortably certain.",
      sensory: [
        "Strange reflected light.",
        "Absolute stillness after violent return.",
        "A gaze that arrives before words."
      ]
    },
    function: "Tone anchor, system indicator, and foreshadow delivery point.",
    pressure: "If Heimdall says less than usual, something is wrong. If he says nothing, something is very wrong.",
    opportunities: [
      "Signal escalation without exposition.",
      "Deliver brief, loaded acknowledgments.",
      "Let players read changed ritual."
    ],
    dangers: [
      "Heimdall’s silence can imply severe system failure.",
      "Over-explaining weakens the location’s power."
    ],
    connectedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_mead_hall"
    ],
    relatedThreads: [
      "thread_heimdall_knows_more",
      "thread_borrowed_souls",
      "thread_return_is_not_guaranteed"
    ],
    factionsPresent: [],
    actorsPresent: [
      "actor_heimdall"
    ],
    availableScenes: [
      "scene_valhalla_heimdall_acknowledgment"
    ],
    eventTable: "",
    reference: "library/hub/02_heimdalls_threshold.md",
    tags: [
      "active",
      "valhalla",
      "heimdall",
      "threshold",
      "foreshadow",
      "system-indicator"
    ],
    gmNotes: "Keep sparse. Heimdall is a warning signal, not an exposition engine."
  },
  {
    id: "location_valhalla_mead_hall",
    name: "The Mead-Hall",
    type: "social hub / emotional reset",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Warm, loud, and mostly stable, though subtle inconsistencies are beginning.",
    escalation: {
      stable: "Feasting, boasting, warmth, and endless return.",
      strain: "Mead tastes different; songs feel rehearsed; old wounds ache.",
      fracture: "Einherjar question immortality; food dims; laughter arrives late.",
      break: "The hall feels like a memory of safety rather than safety itself."
    },
    presentation: {
      establishingShot: "The Mead-Hall stretches ahead in firelit immensity, its beams carved with ancient battles while Einherjar laugh, argue, sing, and slam tankards beneath a ceiling glowing like burnished gold.",
      vibe: "Loud, warm, alive, and remembered.",
      sensory: [
        "Roasting meat and spilled mead.",
        "Laughter rolling beneath carved rafters.",
        "Old battle songs echoing slightly too perfectly."
      ]
    },
    function: "Social hub, morale reset, rumor delivery, and resurrection-cycle pressure point.",
    pressure: "As Ragnarok rises, the hall feels less eternal and more performative.",
    opportunities: [
      "Reconnect with NPCs.",
      "Hear rumors from Einherjar.",
      "Recover emotionally after missions.",
      "Deliver Sven scenes."
    ],
    dangers: [
      "Warriors begin remembering deaths incorrectly.",
      "Food and mead become inconsistent.",
      "The hall briefly falls silent when it should not."
    ],
    eventTable: "table_mead_hall_events",
    connectedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_forge_lanes",
      "location_valhalla_quiet_rows"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed"
    ],
    factionsPresent: [
      "faction_einherjar"
    ],
    actorsPresent: [
      "actor_sven"
    ],
    availableScenes: [
      "scene_valhalla_mead_hall_decompression",
      "scene_valhalla_immediate_hub_reactions"
    ],
    reference: "library/hub/03_mead_hall.md",
    tags: [
      "active",
      "valhalla",
      "social",
      "emotional-rest",
      "mead-hall",
      "ragnarok-meter"
    ],
    gmNotes: "Let players love this place before it starts to fail."
  },
  {
    id: "location_valhalla_golden_fields",
    name: "The Golden Fields",
    type: "fields / sustenance zone / world-state indicator",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Golden and calm, but harvest irregularities are beginning.",
    escalation: {
      stable: "Golden, abundant, rhythmic, and calm.",
      strain: "Harvest is lighter; wind changes direction unnaturally.",
      fracture: "Wheat pales, cracks, or briefly blackens.",
      break: "Crops bleed sap-like resin or fail in patches."
    },
    presentation: {
      establishingShot: "The road opens onto wheat so golden it seems to hold its own light, moving in slow waves beneath a sky that never fully darkens while distant farmers work in steady cadence.",
      vibe: "Peaceful, maintained, and faintly unnatural.",
      sensory: [
        "Wheat glowing faintly gold.",
        "Wind moving in rhythmic waves.",
        "Farmers singing in low, steady cadence."
      ]
    },
    function: "World-state indicator, sustenance source, and early corruption foreshadowing.",
    pressure: "The crops are tied directly to root health and sap purity.",
    opportunities: [
      "Speak with farmers for grounded perspective.",
      "Notice warning signs before warriors do.",
      "Tie crop changes to Yggdrasil corruption."
    ],
    dangers: [
      "Wheat may blacken, crack, or bleed sap-like resin.",
      "Sustenance itself may become unreliable."
    ],
    eventTable: "table_golden_fields_events",
    connectedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_forge_lanes"
    ],
    relatedThreads: [
      "thread_yggdrasil_root_sickness",
      "thread_valhalla_system_failure_chain"
    ],
    factionsPresent: [],
    actorsPresent: [
      "actor_eira_goldwind"
    ],
    availableScenes: [
      "scene_valhalla_golden_fields_warning"
    ],
    reference: "library/hub/04_golden_fields.md",
    tags: [
      "active",
      "valhalla",
      "fields",
      "sustenance",
      "yggdrasil",
      "foreshadow"
    ],
    gmNotes: "Farmers should notice problems before heroes do."
  },
  {
    id: "location_valhalla_forge_lanes",
    name: "The Forge-Lanes",
    type: "craft district / upgrade hub / ancient war-tech site",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Productive and dangerous, with sealed projects beginning to hum.",
    escalation: {
      stable: "Productive, disciplined, dangerous but controlled.",
      strain: "Forges burn irregularly; sparks form strange shapes.",
      fracture: "Weapons react on their own; sealed doors hum.",
      break: "The Forge produces solutions that resemble threats."
    },
    presentation: {
      establishingShot: "Heat rolls through the Forge-Lanes in waves, carrying the ring of hammers, the hiss of quenching steel, and the glow of rune-fire from workshops where dragon-headed bellows breathe flame.",
      vibe: "Productive, dangerous, and old enough to remember things it should not.",
      sensory: [
        "Constant sparks and ringing steel.",
        "Massive anvils with glowing runes.",
        "Dragon-head bellows breathing flame."
      ]
    },
    function: "Upgrade hub, craft district, Corewright recognition point, and ancient war-tech lore site.",
    pressure: "Some craftsmen remember making weapons that caused too much destruction.",
    opportunities: [
      "Upgrade gear.",
      "Learn about ancient wars.",
      "Trigger Corewright-specific recognition.",
      "Find hints of sealed projects."
    ],
    dangers: [
      "Weapons may react before being touched.",
      "Sealed projects may awaken.",
      "Creation becomes morally dangerous."
    ],
    eventTable: "table_forge_lanes_events",
    connectedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_golden_fields"
    ],
    relatedThreads: [
      "thread_yggdrasil_root_sickness"
    ],
    factionsPresent: [],
    actorsPresent: [
      "actor_brokk_ironvein"
    ],
    availableScenes: [
      "scene_valhalla_forge_lanes_recognition",
      "scene_valhalla_brokk_ember_root_primer",
    ],
    reference: "library/hub/05_forge_lanes.md",
    tags: [
      "active",
      "valhalla",
      "forge",
      "upgrades",
      "corewright",
      "ancient-war-tech"
    ],
    gmNotes: "Make upgrades exciting, but never morally weightless."
  },
  {
    id: "location_valhalla_quiet_rows",
    name: "The Quiet Rows",
    type: "memory sanctuary / emotional anchor",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Still and sacred; names remain stable for now, but warmth and flickers suggest strain.",
    escalation: {
      stable: "Names are clear; candles steady; memory preserved.",
      strain: "Names flicker faintly; carvings feel warm.",
      fracture: "Names partially erase; armor shifts; new marks appear.",
      break: "A name disappears, or remains after everyone forgets who it belonged to."
    },
    presentation: {
      establishingShot: "The noise of Valhalla falls away into a candlelit hall where names cover wooden boards in careful rows and armor rests along the walls like sleeping bodies.",
      vibe: "Sacred, quiet, and increasingly uncertain.",
      sensory: [
        "Candlelight that barely flickers.",
        "Carved names in warm wood.",
        "Footsteps that feel like interruptions."
      ]
    },
    function: "Emotional anchor, death-system foreshadowing, memory degradation site.",
    pressure: "Identity is supposed to survive return. Fading names mean the system is failing at the soul level.",
    opportunities: [
      "Emotional RP.",
      "Private conversations.",
      "Notice missing, altered, or familiar names.",
      "Connect death, return, and memory."
    ],
    dangers: [
      "Names may fade or disappear.",
      "A name may remain after memory of the person is gone.",
      "Death may become meaningfully permanent outside Valhalla."
    ],
    eventTable: "table_quiet_rows_events",
    connectedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    relatedThreads: [
      "thread_names_changing_quiet_rows",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_valhalla_system_failure_chain"
    ],
    factionsPresent: [],
    actorsPresent: [
      "actor_sven",
      "actor_eldri_softsky"
    ],
    availableScenes: [
      "scene_valhalla_quiet_rows_foreshadowing",
      "scene_valhalla_retrieval_failure_incident"
    ],
    reference: "library/hub/06_quiet_rows.md",
    tags: [
      "active",
      "valhalla",
      "memory",
      "quiet-rows",
      "death",
      "identity",
      "emotional"
    ],
    gmNotes: "Use sparingly. Slow everything down here."
  },
  {
    id: "location_valhalla_valkyrie_aerie",
    name: "The Valkyrie Aerie",
    type: "mission hub / deployment platform / retrieval system",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",
    currentState: "Disciplined and functional, though sortie strain and fatigue are becoming visible.",
    escalation: {
      stable: "Disciplined, awe-inspiring, efficient, and unified.",
      strain: "Shorter conversations, scuffed armor, missing feathers, restless mounts.",
      fracture: "Arguments, incomplete briefings, failed retrieval signs.",
      break: "Refusal, abandonment, dark energy, radiant wings flickering into shadow."
    },
    presentation: {
      establishingShot: "High above the fortress, open-air platforms hang in the golden sky, joined by narrow bridges and spires while Valkyries stand in composed silence and winged mounts circle in slow arcs below.",
      vibe: "Awe-inspiring discipline under increasing strain.",
      sensory: [
        "Endless sky with drifting clouds below.",
        "Winged mounts circling in controlled arcs.",
        "Wind carrying clipped commands."
      ]
    },
    function: "Mission briefing zone, deployment hub, Valkyrie relationship space, and retrieval-system failure indicator.",
    pressure: "The Valkyries are making more sorties, traveling farther, and beginning to miss souls.",
    opportunities: [
      "Receive mission briefings.",
      "Build Valkyrie relationships.",
      "Gain Valkyrie favor.",
      "Learn about missed souls."
    ],
    dangers: [
      "Valkyries may fracture morally.",
      "Returning souls may fail to arrive.",
      "A Dark Valkyrie thread may begin here."
    ],
    connectedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_quiet_rows",
      "location_valhalla_heimdalls_threshold"
    ],
    relatedThreads: [
      "thread_valkyrie_disagreement",
      "thread_dark_valkyrie_foreshadow",
      "thread_return_is_not_guaranteed",
      "thread_valhalla_system_failure_chain"
    ],
    factionsPresent: [
      "faction_valkyries"
    ],
    actorsPresent: [
      "actor_svinhild",
      "actor_ryndis_ironwing",
      "actor_eldri_softsky",
      "actor_thora_stormcall",
      "actor_kara_veilfeather",
      "actor_sylva_emberwing"
    ],
    availableScenes: [
      "scene_valhalla_valkyrie_aerie_briefing",
      "scene_valhalla_mission_selection",
      "scene_valhalla_retrieval_failure_incident",
      "scene_valhalla_briefing_ember_root"
    ],
    eventTable: "",
    reference: "library/hub/07_valkyrie_aerie.md",
    tags: [
      "active",
      "valhalla",
      "valkyrie",
      "aerie",
      "mission-hub",
      "retrieval",
      "dark-valkyrie"
    ],
    gmNotes: "The Aerie is the middle link between root corruption and Quiet Rows failure."
  },
  {
    id: "location_valhalla_training_grounds",
    name: "Training Grounds",
    type: "training yard / Einherjar readiness field",
    region: "Valhalla",
    locationRole: "child",
    parentLocation: "location_valhalla_hub",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    currentState: "A disciplined combat field where drills, readiness checks, and strange function-drift symptoms can surface.",
    presentation: {
      establishingShot: "Rows of warriors drill beneath bright Valhalla sky, each movement sharp enough to look rehearsed by the world itself.",
      vibe: "Martial, orderly, slightly too synchronized.",
      sensory: [
        "Weapon impacts ring in measured rhythm.",
        "Boots strike packed earth in unison.",
        "Commands echo across open ground."
      ]
    },
    function: "Hub location for training, readiness scenes, and early signs that Valhalla's war-machine functions are drifting.",
    pressure: "The training looks normal until repetition, timing, or memory starts behaving too cleanly.",
    connectedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    relatedThreads: [
      "thread_valhalla_system_failure_chain"
    ],
    actorsPresent: [],
    availableScenes: [],
    reference: "library/hub/08_training_grounds.md",
    tags: [
      "hub",
      "valhalla",
      "training-grounds",
      "readiness"
    ]
  }
];
