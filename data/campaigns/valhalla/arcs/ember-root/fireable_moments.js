export const fireableMoments = [
  {
    "id": "moment_emberroot_tri_voice_collision",
    "title": "Tri-Voice Collision",
    "type": "caste pressure burst",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "trigger": "When players hesitate, ask for a clean explanation, or a caste argument should interrupt the room.",
    "compact": "Forge Lords control. Engineers fix. Workers survive.",
    "spotlight": {
      "title": "Tri-Voice Collision",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Forge Lord",
          "text": "Hold the system!"
        },
        {
          "type": "speech",
          "speaker": "Engineer",
          "text": "That will overload it!"
        },
        {
          "type": "speech",
          "speaker": "Worker",
          "text": "We are not dying for this!"
        }
      ],
      "gmPurpose": "Inject caste pressure without creating a duplicate scene beat.",
      "followUp": "Return control to the players immediately and ask whose pressure they answer."
    },
    "relatedThreads": [
      "thread_emberroot_control_vs_survival"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      },
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "tags": [
      "valhalla",
      "ember-root",
      "tri-voice",
      "caste-pressure",
      "reusable-moment"
    ]
  },
  {
    "id": "moment_emberroot_bruni_people_over_systems",
    "title": "Bruni: People Over Systems",
    "type": "moral pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_lower_furnaces",
      "location_emberfall_high_forge"
    ],
    "trigger": "When the table is drifting toward system-first language while people are visibly paying the cost.",
    "compact": "The cost has a face.",
    "spotlight": {
      "title": "Bruni: People Over Systems",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Bruni",
          "text": "We told them it would break."
        },
        {
          "type": "speech",
          "speaker": "Bruni",
          "text": "How many more die before you stop?"
        }
      ],
      "gmPurpose": "Bring the moral center back to living people.",
      "followUp": "Let the party answer through priority, not debate."
    },
    "relatedActors": [
      "actor_bruni_coalhand"
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_control_vs_survival"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      },
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "tags": [
      "valhalla",
      "ember-root",
      "bruni",
      "ashbound",
      "reusable-moment"
    ]
  },
  {
    "id": "moment_emberroot_kaldra_bad_assumption",
    "title": "Kaldra: Bad Assumption",
    "type": "technical pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_midworks",
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    "trigger": "When players treat corruption, sabotage, or one faulty part as the whole answer.",
    "compact": "The readings are not lying. The assumption is.",
    "spotlight": {
      "title": "Kaldra: Bad Assumption",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Kaldra",
          "text": "The readings are not lying."
        },
        {
          "type": "speech",
          "speaker": "Kaldra",
          "text": "The assumption is."
        }
      ],
      "gmPurpose": "Nudge interpretation without replacing the investigation scenes.",
      "followUp": "Ask what assumption the party is willing to abandon."
    },
    "relatedActors": [
      "actor_kaldra_steelmind"
    ],
    "relatedThreads": [
      "thread_emberroot_city_breathing_wrong"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      },
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "tags": [
      "valhalla",
      "ember-root",
      "kaldra",
      "technical-pressure",
      "reusable-moment"
    ]
  },
  {
    "id": "moment_emberroot_valkyrie_capacity_warning",
    "title": "Valkyrie Capacity Warning",
    "type": "extraction strain",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_lower_furnaces"
    ],
    "trigger": "When too many people need saving at once or extraction begins to look automatic.",
    "compact": "We cannot catch them all.",
    "spotlight": {
      "title": "Valkyrie Capacity Warning",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Thora",
          "text": "Pick one—I cannot carry all of them!"
        },
        {
          "type": "speech",
          "speaker": "Kara",
          "text": "Something is wrong beyond this."
        }
      ],
      "gmPurpose": "Foreshadow Valhalla system strain through action.",
      "followUp": "Make the party assign rescue priority."
    },
    "relatedActors": [
      "actor_thora_kara_emberroot"
    ],
    "relatedThreads": [
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_no_clean_victories"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "tags": [
      "valhalla",
      "ember-root",
      "valkyries",
      "extraction",
      "reusable-moment"
    ]
  },
  {
    "id": "moment_emberroot_skarth_control_is_the_problem",
    "title": "Skarth: Control Is the Problem",
    "type": "ideological pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge"
    ],
    "trigger": "When players cling to total containment or show sympathy for release before the formal branch is offered.",
    "compact": "Stop pretending control is working.",
    "spotlight": {
      "title": "Skarth: Control Is the Problem",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "You fear what you built."
        },
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "Stop pretending control is working."
        }
      ],
      "gmPurpose": "Let Skarth pressure the philosophy without duplicating the Confrontation Reframe or Giant Coordination scenes.",
      "followUp": "If High Insight plus real sympathy exists, keep the Giant Coordination branch available."
    },
    "relatedActors": [
      "actor_skarth_firebrand"
    ],
    "relatedThreads": [
      "thread_emberroot_safe_deconstruction",
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "tags": [
      "valhalla",
      "ember-root",
      "skarth",
      "ideology",
      "reusable-moment"
    ]
  },

  {
    "id": "moment_emberroot_skarth_council_reframe",
    "title": "Skarth Confrontation Reframe — Yes. And?",
    "type": "ideological pressure / confrontation interrupt",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "locationIds": [
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    "trigger": "Fire during the Confrontation if the party accuses, interrogates, challenges, or directly questions Skarth about causing the disaster.",
    "compact": "Accusation becomes temptation.",
    "spotlight": {
      "title": "Skarth: Yes. And?",
      "readAloud": [
        {
          "type": "speech",
          "speaker": "Durgrim",
          "text": "This is your doing."
        },
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "Yes. And?"
        },
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "We did not break your miracle. We interrupted your denial."
        },
        {
          "type": "speech",
          "speaker": "Skarth",
          "text": "They call it disaster because, for once, it is not obeying them."
        }
      ],
      "gmPurpose": "Turn blame into philosophical pressure without forcing the players to side with Skarth.",
      "followUp": "If the party keeps engaging and has High Insight or real sympathy, make the Giant Coordination branch available."
    },
    "relatedActors": [
      "actor_skarth_firebrand",
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    "relatedThreads": [
      "thread_emberroot_safe_deconstruction",
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "skarth",
      "council",
      "reframe",
      "fireable",
      "ideology"
    ],
    "visibilityGate": "forge_below_choice"
  },

{
  "id": "moment_emberroot_lower_works_backflow_surge",
  "title": "Lower Works Backflow Surge",
  "type": "system crisis / technical reveal",
  "modeId": "valhalla",
  "campaignId": "valhalla",
  "arcId": "arc_ember_root",
  "status": "available",
  "locationIds": [
    "location_emberfall_core_furnace",
    "location_emberfall_lower_furnaces",
    "location_emberfall_midworks"
  ],
  "trigger": "Fire when the party inspects the Ember Root / Lower Works connection and needs to understand that upper shutoffs are forcing pressure back down into the city's breath system.",
  "compact": "Backflow surge proves upper shutoffs are choking the Lower Works and lowering city buoyancy.",
  "spotlight": {
    "title": "The City Inhales Wrong",
    "readAloud": [
      {
        "type": "narration",
        "text": "The chamber inhales wrong."
      },
      {
        "type": "narration",
        "text": "Every vent that should open stays tight for half a breath too long. The pressure has nowhere to go, so it comes backward through the lower lungs. Chains draw taut. Root-light flashes hard enough to throw shadows upward."
      },
      {
        "type": "narration",
        "text": "A brass-ringed buoyancy gauge on the Ironhand console trembles, drops by five marked points, and waits there."
      },
      {
        "type": "speech",
        "speaker": "Ironhand Engineer",
        "text": "Her breathing's getting more labored. We're down five more points now — and not returning."
      },
      {
        "type": "speech",
        "speaker": "Ironhand Engineer",
        "text": "That is not coming from below. That is being forced back down."
      },
      {
        "type": "speech",
        "speaker": "Ironhand Engineer",
        "text": "Someone upstairs is closing safeties faster than we can vent. They're saving districts by drowning the lungs."
      }
    ],
    "gmPurpose": "Show that upper-level emergency shutoffs are creating backflow, worsening the Lower Works, and causing Emberfall to lose buoyancy.",
    "followUp": "Point the party toward Kaldra / the Ironhand control room with urgent lower-level proof: the shutoff order must change now."
  },
  "skillGates": [
    {
      "id": "gate_backflow_buoyancy_loss",
      "skills": ["engineering", "arcana", "investigation", "tools"],
      "tier": "basic",
      "visible": "The buoyancy gauge drops and does not rebound after the surge.",
      "reveal": "The city is losing lift because pressure is being forced back into the Lower Works faster than it can vent.",
      "consequence": "The party knows this is not a local heat surge; it is an active citywide sinking risk.",
      "tags": ["city-breath", "buoyancy", "backflow"]
    },
    {
      "id": "gate_backflow_shutoff_sequence",
      "skills": ["engineering", "insight", "systems"],
      "tier": "trained",
      "visible": "The surge follows an upper-line safety closure by less than a breath.",
      "reveal": "Command-level shutoffs are being triggered in the wrong order, saving upper districts by overloading the pressure lungs below.",
      "consequence": "The party can bring critical information to Kaldra: prioritize venting and diversion before further shutoffs.",
      "tags": ["ironhands", "shutoffs", "controlled-withdrawal"]
    }
  ],
  "relatedActors": [
    "actor_kaldra_steelmind",
    "actor_ironhand_engineer"
  ],
  "relatedThreads": [
    "thread_emberroot_city_breathing_wrong",
    "thread_emberroot_root_heat_siphon",
    "thread_emberroot_safe_deconstruction"
  ],
  "relatedLocations": [
    "location_emberfall_core_furnace",
    "location_emberfall_midworks"
  ],
  "relatedScenes": [
    "scene_emberroot_s02_thread_a_system_failure",
    "scene_emberroot_core_furnace_descent",
    "scene_emberroot_lower_works_controlled_decommission"
  ],
  "tags": [
    "valhalla",
    "ember-root",
    "city-breath",
    "backflow",
    "buoyancy",
    "ironhand",
    "skill-gate"
  ],
  "gmNotes": "Use this to bridge Root/Lower Works inspection into the Midworks control-room correction scene. The key table takeaway is: the city is losing buoyancy because the shutoff sequence is wrong."
},

{
  "id": "moment_emberroot_realization_same_pressure",
  "title": "Realization Shift — The Same Pressure",
  "type": "hairpin realization / synthesis trigger",
  "modeId": "valhalla",
  "campaignId": "valhalla",
  "arcId": "arc_ember_root",
  "status": "available",
  "locationIds": [
    "location_emberfall_high_forge",
    "location_emberfall_midworks",
    "location_emberfall_lower_furnaces",
    "location_emberfall_core_furnace",
    "location_emberfall_chainways"
  ],
  "trigger": "Fire when the party connects Root burden, city breath failure, Forge Lord control, giant targeting, and Ashbound survival routes into one shared pattern.",
  "compact": "The city saves the upper layers by forcing pressure downward.",
  "spotlight": {
    "title": "The Same Pressure",
    "readAloud": [
      {
        "type": "narration",
        "text": "It is not three problems."
      },
      {
        "type": "narration",
        "text": "The Root is not corrupted. It is burdened."
      },
      {
        "type": "narration",
        "text": "The Lower Works are not simply breaking. They are being forced to breathe for decisions made above them."
      },
      {
        "type": "narration",
        "text": "The giants are not attacking randomly. They know where the cages are."
      },
      {
        "type": "narration",
        "text": "And the Forge Lords are not merely failing to respond. They are trying to keep command of a system whose survival depends on everyone else carrying the cost."
      },
      {
        "type": "speech",
        "speaker": "Kaldra",
        "text": "The city is doing politically what it is doing mechanically."
      },
      {
        "type": "speech",
        "speaker": "Kaldra",
        "text": "It saves the upper layers by forcing pressure downward."
      }
    ],
    "gmPurpose": "Convert scattered investigation into the core Act 2 realization: Emberfall's machinery and politics are both built to preserve the top by sacrificing the bottom.",
    "followUp": "Route immediately toward The Confrontation — Crown Preservation Revealed, or let the party carry this realization into whichever scene is already in motion."
  },
  "triggerSignals": [
    "The players say or imply that the city is pushing all the cost downward.",
    "The players connect Root burden to lower pressure/backflow.",
    "The players realize Forge Lord evacuation/control orders are not neutral safety measures.",
    "The players recognize that giant strikes target cages, housings, pipeways, or restraints rather than civilians.",
    "Kaldra learns that upper shutoffs or Crown Preservation logic are killing the lower city.",
    "The upper and lower split-party groups reunite and compare findings."
  ],
  "outcomeShift": {
    "question": "Do the players understand the crisis as one moral/mechanical pressure system?",
    "levers": [
      "Name the Root as burdened, not corrupted.",
      "Identify backflow as caused by upper shutoff decisions.",
      "Recognize giant targeting as intentional deconstruction pressure.",
      "Recognize Ashbound routes as survival infrastructure, not unauthorized movement.",
      "Challenge Forge Lord command as preservation of the head at the body's expense."
    ],
    "consequences": [
      "The party can confront the Forge Lords with a coherent accusation.",
      "Kaldra has enough synthesis to break with command.",
      "Skarbrand / Skarth can become a conditional coalition partner instead of only a threat.",
      "Bruni and the Ashbound become necessary to survival rather than secondary victims.",
      "Emergency Coalition logic becomes available once Crown Preservation is revealed."
    ]
  },
  "relatedActors": [
    "actor_kaldra_steelmind",
    "actor_bruni_coalhand",
    "actor_skarth_firebrand",
    "actor_durgrim_ashenvein"
  ],
  "relatedFactions": [
    "faction_emberroot_forge_lords",
    "faction_emberroot_ironhand_guilds",
    "faction_emberroot_ashbound",
    "faction_emberroot_fire_giants"
  ],
  "relatedThreads": [
    "thread_emberroot_city_breathing_wrong",
    "thread_emberroot_root_heat_siphon",
    "thread_emberroot_control_vs_survival",
    "thread_emberroot_forge_lord_legitimacy_collapse",
    "thread_emberroot_safe_deconstruction",
    "thread_emberroot_crown_preservation_protocol"
  ],
  "relatedTrackers": [
    "tracker_emberroot_insight",
    "tracker_emberroot_core_stability",
    "tracker_emberroot_crown_preservation_protocol"
  ],
  "relatedScenes": [
    "scene_emberroot_split_politics_and_lungs",
    "scene_emberroot_upper_political_pressure",
    "scene_emberroot_s02_thread_a_system_failure",
    "scene_emberroot_confrontation_crown_preservation_revealed",
    "scene_emberroot_emergency_coalition_cut_crownlines"
  ],
  "visibilityGates": [
    {
      "id": "calm_center_investigation",
      "label": "Calm Center / Investigation"
    },
    {
      "id": "forge_below_choice",
      "label": "Forge Below / Choice"
    }
  ],
  "visibilityGate": "calm_center_investigation",
  "tags": [
    "valhalla",
    "ember-root",
    "realization",
    "same-pressure",
    "city-breath",
    "root-burden",
    "forge-lords",
    "ashbound",
    "fire-giants",
    "hairpin-trigger"
  ],
  "gmNotes": "Do not fire this because the scene order says so. Fire it when the table actually puts the pieces together. This replaces the old fixed Realization Shift scene."
}
]