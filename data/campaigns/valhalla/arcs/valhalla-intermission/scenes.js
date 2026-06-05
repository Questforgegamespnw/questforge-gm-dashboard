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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
    trigger: "Players visit the Fields, or a farmer seeks them out.",
    summary: "Show world-state deterioration through grounded details.",
    playerFacing: "The fields are golden and peaceful, but something in the crop's swaying rhythm is off.",
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 4,
    },
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
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 7,
    },
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
  },

  {
    id: "scene_valhalla_briefing_ember_root",
    title: "Briefing: Ember-Root",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "briefing",
    priority: "high",
    
    trigger: "Players seek mission options from Svinhild in the Valkyrie Aerie.",
    summary: "Svinhild briefs the party on troubling reports from dwarf-folk near the Ember-Root, where fire, containment failure, and faction pressure suggest a new Ragnarok offensive is forming.",
    playerFacing: "Svinhild marks the Ember-Root on the campaign table. The line glows red beneath her hand, not like a beacon, but like a coal buried under ash.",
    gmTruth: "The Ember-Root is not a simple battlefield. It is an active collapse zone where fire, failing structures, containment systems, and desperate factions will force the party into tradeoffs.",
    involvedActors: [
      "actor_svinhild",
      "actor_brokk_ironvein"
    ],
    involvedLocations: [
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_forge_lanes"
    ],
    involvedFactions: [
      "faction_valkyries"
    ],
    clues: [
      "Valkyrie scouts have received troubling news from dwarf-folk near the Ember-Root.",
      "The fires are spreading faster than local defenses can contain.",
      "Containment systems below the region are still functioning, but only barely.",
      "This may be another Ragnarok offensive beginning before Valhalla is ready to answer it."
    ],
    outcomes: [
      "Players accept deployment to the Ember-Root.",
      "Players ask what the dwarf-folk are reporting.",
      "Players ask whether this is a rescue, containment, or military response.",
      "Players consult Brokk before departure for dwarf-folk, forge, or containment context."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_mission_selection"
      ],
      branches: [
        {
          condition: "Players ask what the mission objective is",
          nextScene: "scene_valhalla_mission_selection",
          note: "Clarify that the objective is not to save everything. They must stabilize what they can, extract who they can, and identify what is driving the collapse."
        },
        {
          condition: "Players ask about the dwarf-folk",
          nextScene: "scene_valhalla_brokk_ember_root_primer",
          note: "Brokk gives a practical caste primer and warns them that the crisis exposed old failures."
        },
        {
          condition: "Players ask if this is Ragnarok",
          nextScene: "scene_valhalla_valkyrie_aerie_briefing",
          note: "Svinhild should not fully confirm it. She says it has the shape of an offensive."
        }
      ],
      scriptedMoments: [
        {
          timing: "When Svinhild opens the briefing",
          speaker: "actor_svinhild",
          line: "Our scouts have received troubling news from the dwarf-folk residing near the Ember-Root.",
          purpose: "Ground the mission in reports from local survivors rather than abstract prophecy."
        },
        {
          timing: "When she names the threat",
          speaker: "actor_svinhild",
          line: "We fear another Ragnarok offensive is bubbling beneath the region.",
          purpose: "Establish urgency without over-certainty."
        },
        {
          timing: "If players ask whether they are being sent to stop the fire",
          speaker: "actor_svinhild",
          line: "We have no way of knowing how bad things are yet. Use your best judgement to decide what survives.",
          purpose: "State the core Act 2 theme directly."
        },
        {
          timing: "If players ask what success looks like",
          speaker: "actor_svinhild",
          line: "Survivors extracted. Containment assessed. The cause identified. Anything beyond that, we earn in the field.",
          purpose: "Set expectations around partial success and tradeoffs."
        }
      ]
    },
    pressure: "The Ember-Root is already burning. The party is not arriving before the crisis; they are arriving inside it.",
    runNote: "Do not frame this as a clean rescue or boss-hunt. Frame it as a collapsing front with too many needs and not enough time.",
    tags: [
      "active",
      "valhalla",
      "briefing",
      "svinhild",
      "mission",
      "ember-root",
      "dwarf-folk",
      "ragnarok-offensive",
      "containment",
      "tradeoffs"
    ],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_brokk_ember_root_primer",
    title: "Brokk: Ember-Root Primer",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "briefing-followup",
    priority: "medium",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 2
    },
    trigger: "Players ask Brokk for more information after Svinhild briefs them on the Ember-Root.",
    summary: "Brokk gives the party a sober primer on the dwarf-folk near the Ember-Root: their caste tensions, likely crisis behavior, and why the situation was already unstable before Ragnarok pressure arrived.",
    playerFacing: "Brokk is waiting near the forge-mouth, arms folded, expression grim. He does not insult anyone. He does not joke. That is the first sign something is wrong.",
    gmTruth: "Brokk has been in Valhalla a long time. His information is culturally accurate but not fully current. He understands the shape of dwarf society, but not every present fracture on the ground.",
    involvedActors: [
      "actor_brokk_ironvein"
    ],
    involvedLocations: [
      "location_valhalla_forge_lanes",
      "location_valhalla_valkyrie_aerie"
    ],
    involvedFactions: [],
    clues: [
      "The Ember-Root society is divided between Forge Lords, Ironhand Guilds, and Ashbound.",
      "Forge Lords will try to preserve control and production even during collapse.",
      "Ironhand Guilds will argue over how to stabilize the system and may provide conflicting technical advice.",
      "Ashbound are likely to distrust authority and prioritize escape, mutual aid, and survival.",
      "The crisis did not create these tensions. It exposed them."
    ],
    outcomes: [
      "Players understand the caste structure before arrival.",
      "Players anticipate conflicting local priorities.",
      "Players decide which caste they are most likely to trust first.",
      "Players realize this mission will involve social triage, not only crisis response."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_mission_selection",
        "scene_valhalla_briefing_ember_root"
      ],
      branches: [
        {
          condition: "Players ask who is in charge",
          nextScene: "scene_valhalla_mission_selection",
          note: "Brokk explains that the Forge Lords will claim command, but command and wisdom are not the same thing."
        },
        {
          condition: "Players ask who can actually fix the system",
          nextScene: "scene_valhalla_mission_selection",
          note: "Brokk points to the Ironhand Guilds, but warns that engineers in crisis can split into rival certainties."
        },
        {
          condition: "Players ask who is most at risk",
          nextScene: "scene_valhalla_mission_selection",
          note: "Brokk names the Ashbound without hesitation."
        }
      ],
      scriptedMoments: [
        {
          timing: "When the party approaches Brokk after the briefing",
          speaker: "actor_brokk_ironvein",
          line: "I heard you are the team heading to the Ember-Root. What do you need to know?",
          purpose: "Signal Brokk’s deep concern by removing his usual gruff mockery."
        },
        {
          timing: "If players notice he is being unusually direct",
          speaker: "actor_brokk_ironvein",
          line: "If I am not giving you shit, use your head and notice why.",
          purpose: "Make his seriousness explicit without losing his voice."
        },
        {
          timing: "When explaining the Forge Lords",
          speaker: "actor_brokk_ironvein",
          line: "Forge Lords will tell you the system must endure. They may even believe it. Watch what they are willing to feed into it.",
          purpose: "Frame the upper caste as control-first and morally compromised."
        },
        {
          timing: "When explaining the Ironhand Guilds",
          speaker: "actor_brokk_ironvein",
          line: "The Ironhands know the machinery. That does not mean they agree on what it says.",
          purpose: "Set up conflicting technical guidance and factional engineering arguments."
        },
        {
          timing: "When explaining the Ashbound",
          speaker: "actor_brokk_ironvein",
          line: "The Ashbound kept the heat moving, the vents clear, the floors under everyone’s boots. If they are running, assume they have a reason.",
          purpose: "Make the lower caste sympathetic and credible before the players meet them."
        },
        {
          timing: "If players ask what has changed since Brokk knew the culture",
          speaker: "actor_brokk_ironvein",
          line: "I have been dead long enough for customs to grow teeth I have not seen. But caste? Pressure? Pride? Those do not change so quickly.",
          purpose: "Clarify that Brokk is reliable on structure but not perfect on current conditions."
        }
      ]
    },
    pressure: "Brokk’s concern turns the Ember-Root from a mission briefing into a cultural and moral warning.",
    runNote: "Play Brokk as unusually sober. He should give practical cultural intelligence, not a full encyclopedia. Keep the focus on what each caste will do under pressure.",
    tags: [
      "active",
      "valhalla",
      "briefing-followup",
      "brokk",
      "ember-root",
      "dwarf-folk",
      "caste-system",
      "forge-lords",
      "ironhand-guilds",
      "ashbound"
    ],
    gmNotes: ""
  },

  {
    id: "scene_valhalla_ember_root_fallout",
    title: "Valhalla Fallout — After Ember-Root",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "fallout",
    priority: "high",

    trigger: "Use when the party returns to Valhalla after Ember-Root.",
    summary: "Translate Ember-Root consequences into the Valhalla hub loop: the party returns home, but the hub is already responding to the cost of what happened.",
    playerFacing: "The noise of Emberfall falls away, but not all at once. Heat becomes cold air. Smoke becomes high wind. Screaming metal becomes the thunder of wings. The Valkyrie Aerie is alive with motion: riders launching, riders landing, armor half-fastened, horses stamping sparks against the stone, voices calling names across the platforms. Hundreds of wings descend through the open sky beyond the threshold. No one stops to explain why. No one needs to.",
    gmTruth: "The hub is quieter than the field, but not untouched. Ember-Root fallout has reached Valhalla before the party can process it.",

    involvedActors: [
      "actor_sven",
      "actor_heimdall",
      "actor_svinhild",
      "actor_thora_stormcall",
      "actor_kara_veilfeather"
    ],
    involvedLocations: [
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_mead_hall",
      "location_valhalla_quiet_rows",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_golden_fields"
    ],
    involvedFactions: [
      "faction_valkyries"
    ],

    clues: [
      "The Aerie is moving at emergency scale, but no one pauses to narrate the obvious.",
      "Thora and Kara return carrying more than exhaustion.",
      "The Quiet Rows feel closer after Ember-Root.",
      "Heimdall may already know enough to be waiting.",
      "Sven offers stillness without pretending the cost is small.",
      "Ash, heat, or soil changes can appear in the Golden Fields as quiet aftermath texture."
    ],

    outcomes: [
      "Ragnarok Meter or equivalent fallout pressure can be updated.",
      "Valkyrie strain surfaces through action rather than exposition.",
      "The party can decompress in the Mead-Hall, confront silence in the Quiet Rows, seek answers at Heimdall’s Threshold, or watch the Aerie respond.",
      "Thora and Kara’s relationship to the party may shift based on the Ember-Root choice.",
      "Ember-Root consequences become reusable hub texture for later intermission sessions."
    ],

    pressure: "The cost follows them home, and home is already answering it.",
    runNote: "Do not over-explain what the Valkyries are doing. Let the players infer it from the scale of motion: wings descending, names being called, riders leaving in waves, horses returning empty or exhausted. Keep the emotional volume lower than Emberfall, but make it clear Valhalla is not outside the consequence.",

    forwardPath: {
      upNext: [
        "scene_valhalla_choose_hub_location",
        "scene_valhalla_mead_hall_decompression",
        "scene_valhalla_quiet_rows_foreshadowing",
        "scene_valhalla_valkyrie_aerie_briefing"
      ],
      branches: [
        {
          id: "fallout_aerie_first",
          label: "Stay at the Aerie",
          condition: "The party lingers with Thora, Kara, Svinhild, or the returning Valkyries.",
          effect: "Valkyrie strain surfaces directly through exhaustion, duty, and unsaid judgment.",
          softPoint: "Best for processing extraction and the cost of being returned."
        },
        {
          id: "fallout_mead_hall_decompression",
          label: "Mead-Hall Decompression",
          condition: "The party seeks warmth, food, Sven, or the familiar rhythm of the hub.",
          effect: "The emotional pressure lowers enough for conversation, but not enough to forget.",
          softPoint: "Best for player reflection and soft roleplay."
        },
        {
          id: "fallout_heimdall_threshold",
          label: "Heimdall’s Threshold",
          condition: "The party seeks answers, accountability, or a formal debrief.",
          effect: "The mission becomes part of the larger Valhalla/Ragnarok pressure line.",
          softPoint: "Best for arc-level consequence and foreshadowing."
        },
        {
          id: "fallout_quiet_rows",
          label: "Quiet Rows",
          condition: "The party follows the weight of loss, names, or souls not yet processed.",
          effect: "The cost of Ember-Root becomes personal, quiet, and hard to dismiss.",
          softPoint: "Best for grief, silence, and aftermath texture."
        },
        {
          id: "fallout_golden_fields_ash_on_wind",
          label: "Golden Fields — Ash on the Wind",
          condition: "The party visits or passes near the Golden Fields after Ember-Root.",
          effect: "The fields remain golden, but ash sometimes drifts through the air on quiet wind.",
          softPoint: "Do not explain it directly. Let the image carry the aftermath: Valhalla is not untouched by what happened."
        }
      ],
      scriptedMoments: [
        {
          timing: "Return through the threshold",
          speaker: "GM",
          line: "The Bifrost gives you back to cold air, high stone, and the thunder of wings.",
          purpose: "Transition from Emberfall heat into Valhalla aftermath."
        },
        {
          timing: "Aerie in motion",
          speaker: "GM",
          line: "The Valkyrie Aerie is not still. Riders launch from every platform. Horses strike sparks from the stone. Armor is being buckled while names are shouted across the wind.",
          purpose: "Show the scale of response without explicitly explaining it."
        },
        {
          timing: "Sky image",
          speaker: "GM",
          line: "Beyond the open edge of the Aerie, hundreds of wings descend through the sky in widening arcs.",
          purpose: "Let the players put together what the Valkyries are going to do."
        },
        {
          timing: "Thora and Kara return",
          speaker: "GM",
          line: "Thora and Kara land hard, not dramatically — just tired. Their horses lower their heads, wings trembling, and for a moment neither Valkyrie speaks.",
          purpose: "Bring the cost back to the party’s escorts."
        },
        {
          timing: "Valkyrie strain",
          speaker: "Kara",
          line: "We got you back.",
          purpose: "Let the unsaid part hang."
        },
        {
          timing: "Heimdall presence",
          speaker: "GM",
          line: "At the far end of the platform, Heimdall is already watching. Not the sky. You.",
          purpose: "Point toward fallout accountability or debrief."
        },
        {
          timing: "Sven soft landing",
          speaker: "Sven",
          line: "Come in before the wind gets into your bones.",
          purpose: "Offer decompression without erasing the weight."
        },
        {
          timing: "Quiet Rows pull",
          speaker: "GM",
          line: "Somewhere below the Aerie, the Quiet Rows feel less distant than they did this morning.",
          purpose: "Seed reflection, loss, and later hub consequences."
        },
        {
          timing: "Golden Fields pull",
          speaker: "GM",
          line: "A worker in the Golden Fields digs with a tool, and the soil is warm to the touch. A speckle of hot ash drifts past.",
          purpose: "Seed the idea that Ember-Root consequences have entered Valhalla’s living systems."
        }
      ]
    },

    relatedThreads: [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_yggdrasil_root_sickness",
      "thread_valkyrie_disagreement"
    ],

    reference: "arcs/valhalla-intermission/library/references/ember_root_aftermath_textures.md",

    tags: [
      "active",
      "valhalla",
      "ember-root",
      "fallout",
      "hub",
      "reflection",
      "aftermath"
    ],
    gmNotes: "This scene is the crosspoint between Act 2 fallout and the reusable Valhalla intermission loop."
  }
  
];
