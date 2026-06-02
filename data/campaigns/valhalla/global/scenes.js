export const scenes = [
  {
    id: "scene_valhalla_bifrost_return",
    title: "Bifrost Return",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "intro",
    priority: "high",
    trigger: "Start of post-mission sequence.",
    summary: "Reset tone after mission danger and return players to Valhalla’s mythic structure.",
    playerFacing: "The party descends in streaks of burning rainbow light. Heat fades into warmth. Battle noise dissolves into distant laughter, bread, mead, and woodsmoke.",
    gmTruth: "The return system is still working, but each return can reveal subtle deviation.",
    involvedActors: ["actor_heimdall"],
    involvedLocations: ["location_valhalla_bifrost_platform"],
    involvedFactions: [],
    clues: [
      "The landing site feels slightly different each time.",
      "Mission sensations may linger longer than they should."
    ],
    outcomes: [
      "Clean return leads to hub decompression.",
      "Strange return raises immediate system concern.",
      "Severe misalignment pushes Heimdall or Valkyrie tension."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_heimdall_acknowledgment",
        "scene_valhalla_immediate_hub_reactions"
      ],
      branches: [
        {
          condition: "Return feels wrong",
          nextScene: "scene_valhalla_heimdall_acknowledgment",
          note: "Use Heimdall’s reduced response as confirmation."
        }
      ],
      scriptedMoments: []
    },
    pressure: "Arrival is always violent. It is no longer always clean.",
    runNote: "Use as recap, sensory reset, and first system-health tell.",
    tags: ["active", "valhalla", "bifrost", "return", "session-opener"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_heimdall_acknowledgment",
    title: "Heimdall Acknowledgment",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "foreshadow",
    priority: "high",
    trigger: "Immediately after Bifrost return.",
    summary: "Signal system health through Heimdall’s behavior.",
    playerFacing: "Heimdall is waiting. He has already seen the party arrive before they have fully stood.",
    gmTruth: "The amount Heimdall says is a direct system readout.",
    involvedActors: ["actor_heimdall"],
    involvedLocations: ["location_valhalla_heimdalls_threshold"],
    involvedFactions: [],
    clues: [
      "Less speech than usual means something is wrong.",
      "Silence means something is very wrong."
    ],
    outcomes: [
      "Normal acknowledgment reassures the party.",
      "Reduced speech creates unease.",
      "Silence escalates the hub tone immediately."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_immediate_hub_reactions",
        "scene_valhalla_choose_hub_location"
      ],
      branches: [
        {
          condition: "High escalation",
          nextScene: "scene_valhalla_retrieval_failure_incident",
          note: "Heimdall’s silence can precede visible failure elsewhere."
        }
      ],
      scriptedMoments: [
        {
          timing: "After the party rises from the Bifrost",
          speaker: "actor_heimdall",
          line: "You return. Good.",
          purpose: "Baseline acknowledgment; shorten or remove as escalation rises."
        }
      ]
    },
    pressure: "Heimdall sees the failure but does not explain it.",
    runNote: "Do not over-explain. Let changed ritual carry the warning.",
    tags: ["active", "valhalla", "heimdall", "foreshadow", "system-indicator"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_immediate_hub_reactions",
    title: "Immediate Hub Reactions",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "fallout",
    priority: "medium",
    trigger: "After Heimdall acknowledgment.",
    summary: "Show how the hub responds to what happened during the mission.",
    playerFacing: "NPCs react to injuries, missing details, recovered items, emotional state, or mission consequences.",
    gmTruth: "The hub should feel responsive, not static.",
    involvedActors: [],
    involvedLocations: [
      "location_valhalla_bifrost_platform",
      "location_valhalla_mead_hall"
    ],
    involvedFactions: [
      "faction_einherjar",
      "faction_valkyries"
    ],
    clues: [],
    outcomes: [
      "Clean success brings warmth and praise.",
      "Costly success brings quiet concern or awkward silence.",
      "Corruption evidence increases Aerie or Heimdall tension.",
      "Death or near-death makes Quiet Rows relevant."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_choose_hub_location"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "The hub reacts to the mission instead of resetting perfectly.",
    runNote: "Use only enough reaction to make the mission matter before handing choice back to players.",
    tags: ["active", "valhalla", "fallout", "post-mission"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_choose_hub_location",
    title: "Choose Hub Location",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "choice",
    priority: "high",
    trigger: "Once players have control after return reactions.",
    summary: "Let players choose emotional pacing and which system layer they inspect.",
    playerFacing: "The hub opens to them: Mead-Hall, Forge-Lanes, Golden Fields, Valkyrie Aerie, or Quiet Rows.",
    gmTruth: "Their chosen location determines which part of Valhalla’s system they inspect.",
    involvedActors: [],
    involvedLocations: [
      "location_valhalla_mead_hall",
      "location_valhalla_forge_lanes",
      "location_valhalla_golden_fields",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_quiet_rows"
    ],
    involvedFactions: [],
    clues: [
      "Every hub location reveals a different failure mode."
    ],
    outcomes: [
      "Mead-Hall gives social rest and rumors.",
      "Forge-Lanes gives upgrades and ancient war-tech dread.",
      "Golden Fields gives root/sap foreshadowing.",
      "Valkyrie Aerie gives mission selection and retrieval pressure.",
      "Quiet Rows gives memory and death-system dread."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_mead_hall_decompression",
        "scene_valhalla_golden_fields_warning",
        "scene_valhalla_forge_lanes_recognition",
        "scene_valhalla_quiet_rows_foreshadowing",
        "scene_valhalla_valkyrie_aerie_briefing"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "Valhalla is not static; player movement reveals which system is under strain.",
    runNote: "Offer clear location choices. Let players choose mood and pressure.",
    tags: ["active", "valhalla", "hub", "choice", "post-mission"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_mead_hall_decompression",
    title: "Mead-Hall Decompression",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "social",
    priority: "medium",
    trigger: "Players go to the Mead-Hall after mission.",
    summary: "Offer warmth first, then optional tension.",
    playerFacing: "The hall is loud, warm, and alive. Einherjar boast, sing, drink, and demand the party tell the story.",
    gmTruth: "The Mead-Hall maintains emotional acceptance of the death-return cycle.",
    involvedActors: ["actor_sven", "actor_svinhild"],
    involvedLocations: ["location_valhalla_mead_hall"],
    involvedFactions: ["faction_einherjar"],
    clues: [
      "Mead may taste slightly different.",
      "A warrior may remember a death incorrectly."
    ],
    outcomes: [
      "Rumor delivery.",
      "NPC relationship scene.",
      "Mead-Hall event table.",
      "Escalation tell."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_mission_selection",
        "scene_valhalla_choose_hub_location"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "Warmth should feel real before it feels unreliable.",
    runNote: "Do not rush the ominous part. Let the hall breathe.",
    tags: ["active", "valhalla", "mead-hall", "social", "decompression"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_golden_fields_warning",
    title: "Golden Fields Warning",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "clue",
    priority: "medium",
    trigger: "Players visit the Fields, or a farmer seeks them out.",
    summary: "Show world-state deterioration through grounded details.",
    playerFacing: "The fields are golden and peaceful, but something in the crop rhythm is off.",
    gmTruth: "Yggdrasil’s influence is changing the crops.",
    involvedActors: [],
    involvedLocations: ["location_valhalla_golden_fields"],
    involvedFactions: [],
    clues: [
      "Harvest is lighter.",
      "Wind changes direction unnaturally.",
      "Wheat briefly darkens or cracks."
    ],
    outcomes: [
      "Farmer conversation.",
      "Root/sap clue.",
      "Foreshadowing corruption.",
      "Link to Forge or Aerie investigation."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_choose_hub_location"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "Cosmic failure becomes agricultural before it becomes obvious.",
    runNote: "Keep the Fields quiet and grounded.",
    tags: ["active", "valhalla", "golden-fields", "clue", "yggdrasil"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_forge_lanes_recognition",
    title: "Forge-Lanes Recognition",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "downtime",
    priority: "medium",
    trigger: "Players visit the Forge, especially with a Corewright character.",
    summary: "Tie upgrades to ancient war-tech and moral pressure.",
    playerFacing: "The Forge is alive with sparks, steel, runes, and heat. Someone recognizes the Corewright nature of the character.",
    gmTruth: "Some old projects should not be reopened.",
    involvedActors: [],
    involvedLocations: ["location_valhalla_forge_lanes"],
    involvedFactions: [],
    clues: [
      "A sealed door hums.",
      "A smith reacts to the Corewright with unease.",
      "A weapon seems too powerful for comfort."
    ],
    outcomes: [
      "Upgrade opportunity.",
      "Sealed project hook.",
      "Smith warning.",
      "Dangerous test weapon."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_choose_hub_location"
      ],
      branches: [],
      scriptedMoments: [
        {
          timing: "When a Corewright PC draws attention",
          speaker: "dwarf artisan",
          line: "Ah. You’re one of those.",
          purpose: "Signal recognition, unease, and old war-tech relevance."
        }
      ]
    },
    pressure: "Creation and escalation are dangerously close together.",
    runNote: "Make upgrades exciting, but morally weighted.",
    tags: ["active", "valhalla", "forge", "corewright", "downtime"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_quiet_rows_foreshadowing",
    title: "Quiet Rows Foreshadowing",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "foreshadow",
    priority: "medium",
    trigger: "After a death, failed return, name anomaly, or emotional beat.",
    summary: "Slow everything down and show memory instability.",
    playerFacing: "The room is quiet, candlelit, and warm. Names are carved into wood. One name looks different than it should.",
    gmTruth: "The soul-anchor system is degrading.",
    involvedActors: ["actor_sven"],
    involvedLocations: ["location_valhalla_quiet_rows"],
    involvedFactions: [],
    clues: [
      "A name flickers.",
      "A carving feels warm.",
      "A newly carved name looks familiar."
    ],
    outcomes: [
      "Missing name mystery.",
      "NPC grief scene.",
      "Return-system revelation.",
      "Valkyrie retrieval failure link."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_valkyrie_aerie_briefing",
        "scene_valhalla_mission_selection"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "Identity is beginning to fail.",
    runNote: "Use sparingly. Slow everything down.",
    tags: ["active", "valhalla", "quiet-rows", "memory", "death"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_valkyrie_aerie_briefing",
    title: "Valkyrie Aerie Briefing",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "choice",
    priority: "high",
    trigger: "Players seek next mission, need deployment, or escalation requires Valkyrie involvement.",
    summary: "Connect mission selection to retrieval strain and moral fracture.",
    playerFacing: "Valkyries stand amid open sky and wind, composed but visibly strained.",
    gmTruth: "They are overworked and beginning to miss souls.",
    involvedActors: ["actor_svinhild"],
    involvedLocations: ["location_valhalla_valkyrie_aerie"],
    involvedFactions: ["faction_valkyries"],
    clues: [
      "A Valkyrie avoids eye contact.",
      "A mount refuses command briefly.",
      "Briefings are shorter than they should be."
    ],
    outcomes: [
      "Mission selection.",
      "Valkyrie favor.",
      "Dark Valkyrie foreshadow.",
      "Retrieval failure incident."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_mission_selection",
        "scene_valhalla_retrieval_failure_incident"
      ],
      branches: [],
      scriptedMoments: []
    },
    pressure: "The mission system and soul retrieval system are both under strain.",
    runNote: "Show fatigue without making the Valkyries incompetent.",
    tags: ["active", "valhalla", "valkyrie", "aerie", "mission"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_retrieval_failure_incident",
    title: "Retrieval Failure Incident",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "hidden",
    type: "complication",
    priority: "high",
    trigger: "Major escalation moment involving the Valkyries or return cycle.",
    summary: "Make the retrieval system failure undeniable.",
    playerFacing: "A Valkyrie returns alone, or a returning soul slips from her grasp and vanishes before reaching Valhalla.",
    gmTruth: "The cycle is no longer guaranteed.",
    involvedActors: ["actor_svinhild"],
    involvedLocations: [
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_quiet_rows"
    ],
    involvedFactions: ["faction_valkyries"],
    clues: [
      "Some souls are not there to take.",
      "Retrieval failures connect directly to Quiet Rows degradation."
    ],
    outcomes: [
      "Valkyrie morale fractures.",
      "Quiet Rows consequences appear.",
      "Dark Valkyrie seed becomes active."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_quiet_rows_foreshadowing",
        "scene_valhalla_mission_selection"
      ],
      branches: [
        {
          condition: "Players press the Valkyries for answers",
          nextScene: "scene_valhalla_valkyrie_aerie_briefing",
          note: "Reveal strain, not the full root-cause chain."
        }
      ],
      scriptedMoments: [
        {
          timing: "When the failure becomes visible",
          speaker: "returning Valkyrie",
          line: "…They weren’t there to take.",
          purpose: "Make retrieval failure concrete and frightening."
        }
      ]
    },
    pressure: "Death and return are no longer guaranteed.",
    runNote: "Use sparingly. This is a major escalation beat, not casual flavor.",
    tags: ["active", "valhalla", "valkyrie", "retrieval-failure", "major-escalation"],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_mission_selection",
    title: "Mission Selection",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "choice",
    priority: "high",
    trigger: "After hub interactions or when pressure demands action.",
    summary: "Move from hub phase to next mission.",
    playerFacing: "The party chooses where to go next and who to aid.",
    gmTruth: "The choice should reflect the systems they have seen failing.",
    involvedActors: ["actor_svinhild"],
    involvedLocations: ["location_valhalla_valkyrie_aerie"],
    involvedFactions: ["faction_valkyries"],
    clues: [],
    outcomes: [
      "Next mission packet.",
      "Aerie deployment.",
      "Bifrost outbound sequence."
    ],
    forwardPath: {
      upNext: [],
      branches: [],
      scriptedMoments: []
    },
    pressure: "Hub clues should shape what the next mission feels like.",
    runNote: "Close the free-roam phase when player attention points outward again.",
    tags: ["active", "valhalla", "mission-selection", "choice"],
    gmNotes: ""
  }
];
