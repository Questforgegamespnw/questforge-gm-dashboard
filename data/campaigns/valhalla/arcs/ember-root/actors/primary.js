export const primaryActors = [

  /// DURGRIM ASHENVEIN ///
  {
    "id": "actor_durgrim_ashenvein",
    "name": "Durgrim Ashenvein",
    "role": "Ruler of Emberfall / Forge Lord representative",
    "group": "Forge Lords",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_high_forge",
    "currentState": "If the system stops, the city dies. Therefore the system must remain legitimate.",
    "sticky": true,
    "presentation": {
      "vibe": "Controlled authority hardening into rigid desperation.",
      "physicality": "Heavy ceremonial armor, square stance, chin lifted as if posture alone can keep the city upright.",
      "voice": "Survival Requires Continuity.",
      "sceneImpact": "Turns genuine shutdown danger into an argument for preserving the old order unchanged.",
      "visualAnchor": "A rigid Forge Lord above the burning city, refusing to step back from the rail."
    },
    "motivation": {
      "wants": "Preserve Emberfall’s life-support system and the Forge Lord authority that controls its meaning.",
      "fears": "That admitting personhood below the city will collapse both the system and the legitimacy of everyone who maintained it.",
      "leverage": "He can truthfully argue that abrupt shutdown would kill thousands."
    },
    "knowledge": {
      "knows": [
        "Abruptly shutting down the Lower Works would kill the city.",
        "Forge Lord doctrine depends on classifying bound fire as non-civic, unstable, or sub-personal.",
        "Emergency authority can still command frightened people if no one offers a credible survival alternative."
      ],
      "secrets": [
        "He knows the official language around bound fire is politically useful, not morally clean.",
        "He suspects the old classifications would not survive honest scrutiny.",
        "He would rather preserve a necessary fiction than admit the city was built on a crime."
      ]
    },
    "quickLines": [
      "Survival is older than sentiment.",
      "Define alive in a way that keeps the furnaces lit.",
      "If the system falls, your moral victory sinks with the city."
    ],
    "answerMoments": [
      {
        "id": "answer_durgrim_can_we_shut_it_off",
        "question": "Can we shut the Core off?",
        "answer": "Not without killing the city. Durgrim uses that truth to argue that the current system must continue.",
        "tableLine": "You do not remove the breath from a city and call the corpse justice.",
        "reveals": [
          "Durgrim understands that abrupt shutdown would be catastrophic.",
          "He frames survival as proof that the existing order must be preserved.",
          "He treats moral objection as dangerous sentiment during crisis."
        ],
        "gatedBy": {
          "skills": ["insight", "history", "society"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_forge_lord_legitimacy_collapse"
        ],
        "tags": ["answerable", "forge-lord", "control", "life-support"]
      },
      {
        "id": "answer_durgrim_are_the_elementals_people",
        "question": "Are the bound elementals people?",
        "answer": "Durgrim denies personhood by leaning on civic definitions: form, language, recognition, and legal status.",
        "tableLine": "Personhood is not a feeling. It is form, language, recognition, and place within a lawful city.",
        "reveals": [
          "Forge Lord authority depends on defining the emberlings as non-persons.",
          "Durgrim may know more than he admits, but he hides behind classification.",
          "His argument is political as much as philosophical."
        ],
        "gatedBy": {
          "skills": ["insight", "religion", "history"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_fire_is_people",
          "thread_emberroot_stolen_emberlings",
          "thread_emberroot_control_vs_survival"
        ],
        "tags": ["answerable", "personhood", "denial", "forge-lord"]
      },
      {
        "id": "answer_durgrim_did_you_know",
        "question": "Did the Forge Lords know what the system was doing?",
        "answer": "Durgrim does not confess cleanly. He distinguishes knowing, inheriting, authorizing, and preserving.",
        "tableLine": "We inherited a city that already stood. We preserved what kept it standing.",
        "reveals": [
          "The highest Forge Lords likely knew enough to avoid better questions.",
          "Durgrim sees continuity as absolution.",
          "He will redirect blame toward ancestors, necessity, and emergency."
        ],
        "gatedBy": {
          "skills": ["insight", "history", "society"],
          "minTier": "high"
        },
        "relatedThreads": [
          "thread_emberroot_forge_lord_legitimacy_collapse",
          "thread_emberroot_control_vs_survival"
        ],
        "tags": ["answerable", "accountability", "forge-lord", "hidden-truth"]
      }
    ], 
    "relationships": [
      {
        "target": "actor_kaldra_steelmind",
        "label": "depends on / resents",
        "note": "Needs Kaldra’s technical truth but resents the challenge to command certainty."
      },
      {
        "target": "actor_bruni_coalhand",
        "label": "class pressure",
        "note": "Sees Bruni as necessary labor and dangerous dissent."
      },
      {
        "target": "actor_skarth_firebrand",
        "label": "enemy mirror",
        "note": "Both believe survival requires hard choices; they disagree on what must be preserved."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_caste_pressure",
      "thread_emberroot_caste_existed_before_arrival",
      "thread_emberroot_no_clean_victories"
    ],
    "reference": "library/actors/durgrim_ashenvein.md",
    "tags": [
      "valhalla",
      "ember-root",
      "forge-lord",
      "control",
      "npc"
    ],
    "gmNotes": "Use Durgrim when the party needs to feel the weight of order, command, and institutional denial.",
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
    "quote": "Define alive in a way that keeps the furnaces lit.",
    "identity": [
      "Ruler of Emberfall",
      "Custodian of the necessary fiction"
    ],
    "crisisPhilosophy": "A city cannot survive if every force it depends on is granted veto over its use.",
    "stateBehavior": {
      "stabilized": "Calm authority",
      "mixed": "Defensive",
      "unstable": "Desperate, rigid"
    },
    "dialogue": {
      "base": "The city stands because difficult truths were made useful.",
      "pressure": "Do not sentimentalize a crisis!",
      "breaking": "If you unmake the system, you unmake everyone standing on it!"
    },
    "playerResponse": [
      {
        "behavior": "Preserve system continuity",
        "reaction": "Gains respect"
      },
      {
        "behavior": "Prioritize evacuation over command",
        "reaction": "Sees as destabilizing"
      },
      {
        "behavior": "Name the emberlings as people",
        "reaction": "Deflects into legal definition and emergency necessity"
      },
      {
        "behavior": "Support controlled withdrawal",
        "reaction": "Opposes unless Forge Lord authority remains central"
      }
    ],
    "postChoiceEvolution": {
      "reinforce": "Vindicated",
      "controlledWithdrawal": "Bitter, politically diminished",
      "evacuationFirst": "Resentful but forced to cooperate",
      "recklessRelease": "Opposes violently",
      "consentTransition": "Sees as existential threat to Forge Lord legitimacy"
    },
  },

  /// KALDRA STEELMIND ///
  {
    "id": "actor_kaldra_steelmind",
    "name": "Kaldra Steelmind",
    "role": "System architect / Ironhand truth bearer",
    "group": "Ironhand Guilds",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_midworks",
    "currentState": "The city is breathing wrong, and every simple answer kills someone.",
    "sticky": true,
    "presentation": {
      "vibe": "Technical clarity under unbearable pressure.",
      "physicality": "Soot-streaked work leathers, tools still on belt, eyes flicking between people and readings as if both are failing at once.",
      "voice": "Precise, urgent, refusing easy answers.",
      "sceneImpact": "Turns panic into actionable diagnosis while preventing both denial and reckless liberation from becoming easy answers.",
      "visualAnchor": "A cracked rune plate in one hand and a look that says the numbers are worse than the politics allow."
    },
    "motivation": {
      "wants": "Keep enough of the system breathing long enough to move people, vent pressure, and face the truth without causing mass death.",
      "fears": "That denial, revenge, or panic will force a single catastrophic solution before evacuation and release can be sequenced.",
      "leverage": "She can translate the Lower Works into playable steps: vent, redirect, cool, evacuate, release, then seal."
    },
    "knowledge": {
      "knows": [
        "The Lower Works are a thermal life-support ecosystem, not a single Core switch.",
        "Emergency shutoffs are saving local chambers by pushing pressure deeper into the system.",
        "The city is losing breath coordination: heat enters, but it no longer leaves cleanly.",
        "The World Tree root appears to be absorbing overflow rather than causing the crisis."
      ],
      "secrets": [
        "She knows some stabilization choices only delay the moral reckoning.",
        "She has inherited technical language that may have hidden personhood from her.",
        "If the emberling truth is proven, she will understand that the system worked by making atrocity legible as engineering."
      ]
    },
    "quickLines": [
      "The city is breathing wrong.",
      "Do not seal another line until you know where that breath goes.",
      "The system works. That is the worst part."
    ],
    "answerMoments": [
      {
        "id": "answer_kaldra_can_we_shut_it_off",
        "question": "Can we shut the Core off?",
        "answer": "No. Not safely. Not all at once. The Core is life support, not a switch.",
        "tableLine": "If we shut it off completely, Emberfall stops breathing. The lava does not disappear. The pressure does not vanish. The city simply loses the system keeping it above the line.",
        "reveals": [
          "The Core is a thermal life-support ecosystem.",
          "Abrupt shutdown causes sinking, backflow, rupture, and mass death.",
          "The real option is staged venting, cooling, evacuation, release, and seal sequencing."
        ],
        "gatedBy": {
          "skills": ["engineering", "smithing", "tools", "arcana"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_city_breath_life_support"
        ],
        "tags": ["answerable", "core-truth", "life-support", "technical"]
      },
      {
        "id": "answer_kaldra_why_are_readings_contradicting",
        "question": "Why are the readings contradicting each other?",
        "answer": "The city is not failing in one clean way. Multiple emergency systems are forcing pressure into each other.",
        "tableLine": "Heat is entering cleanly enough. It is not leaving cleanly. Every emergency seal saves one chamber by making another chamber breathe for it.",
        "reveals": [
          "Emergency shutoffs are buying local safety at systemic cost.",
          "The city is losing coordination rather than suffering one isolated failure.",
          "More sealing may worsen the Lower Works."
        ],
        "gatedBy": {
          "skills": ["engineering", "investigation", "smithing", "tools"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_safe_deconstruction"
        ],
        "tags": ["answerable", "pressure", "diagnosis", "city-breath"]
      },
      {
        "id": "answer_kaldra_are_the_fires_alive",
        "question": "Are the fires in the conduits alive?",
        "answer": "Kaldra can confirm they are reactive and bound. The full emberling truth may shake her if discovered through higher lore or giant testimony.",
        "tableLine": "They react. They resist. They recoil from some commands and answer others. That is not ordinary heat.",
        "reveals": [
          "The conduits carry bound living fire, not simple fuel.",
          "Kaldra may not initially know they are immature fire-giant life.",
          "Her certainty breaks if the party proves the emberling truth."
        ],
        "gatedBy": {
          "skills": ["arcana", "nature", "religion", "giant-lore"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_fire_is_people",
          "thread_emberroot_stolen_emberlings"
        ],
        "tags": ["answerable", "emberlings", "living-fire", "technical-truth"]
      },
      {
        "id": "answer_kaldra_what_can_we_do",
        "question": "What can we actually do?",
        "answer": "Kaldra translates the crisis into playable action: vent, redirect, cool, evacuate, release, then seal.",
        "tableLine": "Do not close every wound. Vent first. Redirect second. Cool what can be cooled. Move people before pride. Release what should never have been bound. Then seal what remains.",
        "reveals": [
          "The solution is staged transition, not simple preservation or destruction.",
          "Kaldra can become the bridge between system survival and moral withdrawal.",
          "Her plan requires cooperation from Ashbound, Giants, Ironhands, and Valkyries."
        ],
        "gatedBy": {
          "skills": ["engineering", "leadership", "insight"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_consent_transition",
          "thread_emberroot_safe_deconstruction",
          "thread_emberroot_city_breathing_wrong"
        ],
        "tags": ["answerable", "solution-path", "controlled-withdrawal"]
      }
    ],
    "relationships": [
      {
        "target": "actor_durgrim_ashenvein",
        "label": "technical challenge",
        "note": "Durgrim needs her, but her facts weaken his authority."
      },
      {
        "target": "actor_bruni_coalhand",
        "label": "shared warning / different priority",
        "note": "Both saw the danger, but Kaldra thinks in systems while Bruni thinks in people."
      },
      {
        "target": "thread_emberroot_correct_interpretation_under_pressure",
        "label": "truth bearer",
        "note": "Kaldra is the cleanest way to nudge correct interpretation."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_correct_interpretation_under_pressure",
      "thread_emberroot_core_furnace_truth"
    ],
    "reference": "library/actors/kaldra_steelmind.md",
    "tags": [
      "valhalla",
      "ember-root",
      "ironhand",
      "engineer",
      "truth-bearer",
      "npc"
    ],
    "gmNotes": "Use Kaldra when the party is misreading the evidence or needs a technical clue without a clean answer.",
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
    "quote": "The City Is Breathing Wrong.",
    "identity": [
      "System architect",
      "Truth bearer"
    ],
    "crisisPhilosophy": "The system works, but working is not the same as being just.",
    "stateBehavior": {
      "stabilized": "Focused, clear",
      "mixed": "Frustrated",
      "unstable": "Urgent, sharp"
    },
    "dialogue": {
      "base": "Show me where the heat enters, where it leaves, and where it is being forced to stay.",
      "pressure": "Every emergency seal saves one chamber by making the next chamber breathe for it!",
      "breaking": "If we keep pretending this is only engineering, we will kill them twice."
    },
    "playerResponse": [
      {
        "behavior": "Investigates deeply",
        "reaction": "Trusts"
      },
      {
        "behavior": "Sequences venting and evacuation",
        "reaction": "Aligns strongly"
      },
      {
        "behavior": "Demands abrupt shutdown",
        "reaction": "Warns against mass death"
      },
      {
        "behavior": "Proves emberling personhood",
        "reaction": "Shaken, then morally realigns"
      }
    ],
    "postChoiceEvolution": {
      "controlledWithdrawal": "Strong ally",
      "evacuationFirst": "Practical ally",
      "reinforce": "Concerned and morally uneasy",
      "recklessRelease": "Opposes as catastrophic",
      "consentTransition": "Supports if technically sequenced"
    }
  },

  /// BRUNI COALHAND ///
  {
    "id": "actor_bruni_coalhand",
    "name": "Bruni Coalhand",
    "role": "Ashbound worker leader / moral anchor",
    "group": "Ashbound",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_lower_furnaces",
    "currentState": "Move the people first. Then argue about what deserves to stand.",
    "sticky": true,
    "presentation": {
      "vibe": "Controlled anger becoming survival revolt.",
      "physicality": "Burn-scarred worker gear, ash in the beard and under the nails, body angled protectively toward whoever is most vulnerable nearby.",
      "voice": "Blunt, grounded, protective, done waiting for permission.",
      "sceneImpact": "Forces every technical or political choice to answer who moves, who is left behind, and who was never counted.",
      "visualAnchor": "A worker leader standing between the machine and the people it is crushing."
    },
    "motivation": {
      "wants": "Get people out through the routes the ruling caste ignored, then prevent them from being fed back into the same order.",
      "fears": "That the party will save the shape of Emberfall while abandoning the people who kept it alive.",
      "leverage": "He knows hidden Ashbound routes, lower-city realities, and which promises the workers will or will not believe."
    },
    "knowledge": {
      "knows": [
        "The Ashbound heard life in the walls before anyone official admitted it.",
        "Hidden routes beneath official maps can move people when noble routes fail.",
        "The lower city always paid first when the system was protected.",
        "Forge Lord authority is weakest when practical survival knowledge becomes visible."
      ],
      "secrets": [
        "He may accept the old city sinking if its people survive.",
        "He will not support any plan that preserves hierarchy by sacrificing workers again.",
        "He knows which Ashbound routes cannot carry gold, engines, or titles — only people."
      ]
    },
    "quickLines": [
      "There are routes. The ones they never cared to map.",
      "Move people first.",
      "Titles do not open roads. Hands do."
    ],
    "answerMoments": [
      {
        "id": "answer_bruni_what_did_lower_city_know",
        "question": "What did the lower city know before this happened?",
        "answer": "They knew something was wrong because they lived beside the system, heard it, worked under it, and were ignored.",
        "tableLine": "We heard them in the walls. We were told heat makes noise.",
        "reveals": [
          "The Ashbound sensed the life in the system before they had formal language for it.",
          "Warnings from the lower tiers were dismissed as labor panic.",
          "The city’s caste structure prevented truth from moving upward."
        ],
        "gatedBy": {
          "skills": ["insight", "society", "history"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_caste_layers_and_survival_authority",
          "thread_emberroot_fire_is_people"
        ],
        "tags": ["answerable", "ashbound", "caste", "lived-truth"]
      },
      {
        "id": "answer_bruni_where_can_people_escape",
        "question": "Where can people escape?",
        "answer": "Bruni knows hidden Ashbound routes that official maps ignored or erased.",
        "tableLine": "There are routes. The ones you never cared to map.",
        "reveals": [
          "Ashbound underroads can move people when official routes fail.",
          "Survival now depends on people the old order dismissed.",
          "These routes are dangerous but real."
        ],
        "gatedBy": {
          "skills": ["survival", "society", "investigation"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_forge_lord_legitimacy_collapse",
          "thread_emberroot_controlled_withdrawal_paths"
        ],
        "tags": ["answerable", "escape-routes", "ashbound", "evacuation"]
      },
      {
        "id": "answer_bruni_why_not_save_the_system",
        "question": "Why not save the system first?",
        "answer": "Bruni refuses abstractions. Systems are only worth saving if they stop eating people.",
        "tableLine": "When nobles say 'save the city,' they mean the lower city dies first.",
        "reveals": [
          "A clean technical solution may preserve the hierarchy that caused the atrocity.",
          "Bruni will judge the party by who they move, not what they stabilize.",
          "He may accept structural loss if people survive."
        ],
        "gatedBy": {
          "skills": ["insight", "persuasion", "society"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_no_clean_victories"
        ],
        "tags": ["answerable", "moral-anchor", "evacuation", "caste"]
      },
      {
        "id": "answer_bruni_who_has_authority_now",
        "question": "Who should be in charge now?",
        "answer": "Bruni’s answer reframes authority as survival function, not rank.",
        "tableLine": "Titles do not open roads. Hands do.",
        "reveals": [
          "Forge Lord rank is losing practical legitimacy.",
          "Ashbound routes, Ironhand sequencing, giant strength, and Valkyrie extraction matter more than hierarchy.",
          "The party can help form a survival coalition."
        ],
        "gatedBy": {
          "skills": ["insight", "leadership", "society"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_forge_lord_legitimacy_collapse",
          "thread_emberroot_consent_transition"
        ],
        "tags": ["answerable", "authority-collapse", "survival-coalition"]
      }
    ],
    "relationships": [
      {
        "target": "actor_durgrim_ashenvein",
        "label": "rage / accountability",
        "note": "Durgrim represents the system that spent Ashbound lives."
      },
      {
        "target": "actor_kaldra_steelmind",
        "label": "conditional trust",
        "note": "Trusts facts more than command, but not systems over people."
      },
      {
        "target": "thread_emberroot_no_clean_victories",
        "label": "moral anchor",
        "note": "Bruni keeps the cost human."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure",
      "thread_emberroot_caste_existed_before_arrival"
    ],
    "reference": "library/actors/bruni_coalhand.md",
    "tags": [
      "valhalla",
      "ember-root",
      "ashbound",
      "worker",
      "moral-anchor",
      "npc"
    ],
    "gmNotes": "Use Bruni whenever the party drifts toward abstract system language and needs to remember who pays.",
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
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "quote": "We Pay the Price.",
    "identity": [
      "Ashbound worker leader",
      "Keeper of the unmapped routes"
    ],
    "crisisPhilosophy": "A city is not saved if only its machinery survives.",
    "stateBehavior": {
      "stabilized": "Controlled anger",
      "mixed": "Agitated",
      "unstable": "Explosive"
    },
    "dialogue": {
      "base": "There are routes.",
      "pressure": "When nobles say 'save the city,' they mean the lower city dies first.",
      "breaking": "Move them now, or stop pretending this is rescue."
    },
    "playerResponse": [
      {
        "behavior": "Prioritize evacuation",
        "reaction": "Trust"
      },
      {
        "behavior": "Preserve system over people",
        "reaction": "Distrust"
      },
      {
        "behavior": "Ask for hidden routes",
        "reaction": "Reveals practical options"
      },
      {
        "behavior": "Support consent transition",
        "reaction": "Cautious alliance"
      }
    ],
    "postChoiceEvolution": {
      "controlledWithdrawal": "Loyal ally",
      "evacuationFirst": "Strong ally",
      "reinforce": "Hostile",
      "recklessRelease": "Angry if civilians are abandoned",
      "consentTransition": "Cautious respect"
    }
  },

  /// SKARTH FIREBRAND ///

  {
    "id": "actor_skarth_firebrand",
    "name": "Skarth Firebrand",
    "role": "Fire giant liberation voice / dangerous moral witness",
    "group": "Fire Giants",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_core_furnace",
    "currentState": "A people should not be made into breath.",
    "sticky": true,
    "presentation": {
      "vibe": "Controlled grief sharpened into revolutionary heat.",
      "physicality": "Stillness inside the furnace glow, standing too comfortably near danger, with every movement deliberate enough to feel like restraint.",
      "voice": "Calm, grieving, accusatory, with heat held behind every word.",
      "sceneImpact": "Reframes giant violence from invasion into liberation pressure while keeping the danger of uncontrolled release fully alive.",
      "visualAnchor": "A calm fire giant beside the breathing conduits, speaking like the city has finally run out of euphemisms."
    },
    "motivation": {
      "wants": "Free the emberlings and end the system that turns fire-born life into civic infrastructure.",
      "fears": "That evacuation, diplomacy, and technical caution will become another delay that leaves his people bound.",
      "leverage": "He can redirect giant destruction into controlled deconstruction if the party proves release and evacuation are real."
    },
    "knowledge": {
      "knows": [
        "The bound fires are emberlings: immature fire-giant lifeforms captured before personhood.",
        "Fire giants are targeting cages, housings, locks, and stabilizers intentionally.",
        "Breaking the wrong housing too quickly can kill civilians, but leaving the system intact continues the atrocity.",
        "The party may be the first outside force with enough cross-faction trust to force a different ending."
      ],
      "secrets": [
        "He is willing to slow destruction if controlled withdrawal is real.",
        "He will not accept any plan that rebinds the emberlings under softer language.",
        "His calm is not lack of grief; it is grief made disciplined enough to speak before burning."
      ]
    },
    "quickLines": [
      "You called them heat because calling them children would have made you murderers.",
      "We are opening the hand around our throat.",
      "Ask us to break stone, not to bind them again."
    ],
    "answerMoments": [
      {
        "id": "answer_skarth_why_are_giants_attacking",
        "question": "Why are the giants attacking the city?",
        "answer": "They are not attacking at random. They are targeting cages, housings, stabilizers, and containment systems.",
        "tableLine": "We are not burning your city. We are opening the hand around our throat.",
        "reveals": [
          "The giants are targeting containment infrastructure.",
          "Their methods are dangerous, but their grievance is real.",
          "They may redirect violence if evacuation and release become credible."
        ],
        "gatedBy": {
          "skills": ["insight", "giant-lore", "investigation"],
          "minTier": "basic"
        },
        "relatedThreads": [
          "thread_emberroot_safe_deconstruction",
          "thread_emberroot_fire_is_people"
        ],
        "tags": ["answerable", "giants", "containment", "liberation"]
      },
      {
        "id": "answer_skarth_what_are_the_elementals",
        "question": "What are the bound elementals?",
        "answer": "Skarth names the truth plainly: they are emberlings, immature fire-giant lifeforms captured before personhood.",
        "tableLine": "Those are not flames in your pipes. Those are children who never learned their own names.",
        "reveals": [
          "Fire elementals are emberlings: fire-giants-before-personhood.",
          "The system prevents a people from being born.",
          "This reframes the Core from infrastructure to captivity."
        ],
        "gatedBy": {
          "skills": ["giant-lore", "arcana", "nature", "religion"],
          "minTier": "high"
        },
        "relatedThreads": [
          "thread_emberroot_stolen_emberlings",
          "thread_emberroot_fire_is_people"
        ],
        "tags": ["answerable", "emberlings", "major-reveal", "giant-truth"]
      },
      {
        "id": "answer_skarth_can_giants_help",
        "question": "Can the giants help evacuate or deconstruct safely?",
        "answer": "Yes, but only if the party treats release as real and does not ask the giants to re-chain their young.",
        "tableLine": "Ask us to break stone, and we will break stone. Ask us to bind them again, and we break you first.",
        "reveals": [
          "Giants can open blocked routes and break housings deliberately instead of chaotically.",
          "Trust can convert destruction into controlled deconstruction.",
          "They will not assist a plan that preserves the old bondage."
        ],
        "gatedBy": {
          "skills": ["persuasion", "insight", "giant-lore", "leadership"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_safe_deconstruction",
          "thread_emberroot_consent_transition",
          "thread_emberroot_controlled_withdrawal_paths"
        ],
        "tags": ["answerable", "alliance", "controlled-deconstruction", "trust"]
      },
      {
        "id": "answer_skarth_what_about_civilians",
        "question": "What about the civilians who will die if the system breaks too fast?",
        "answer": "Skarth does not dismiss civilian death, but he refuses to let civilian risk justify endless captivity.",
        "tableLine": "You ask what happens if the city stops breathing. I ask how long a people must be made into breath before you call it murder.",
        "reveals": [
          "Skarth can be pushed toward controlled withdrawal if the party acknowledges the murder at the heart of the system.",
          "He will not accept delay as neutral.",
          "Every moment of preservation has a victim below."
        ],
        "gatedBy": {
          "skills": ["insight", "persuasion", "religion"],
          "minTier": "trained"
        },
        "relatedThreads": [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_consent_transition",
          "thread_emberroot_no_clean_victories"
        ],
        "tags": ["answerable", "moral-conflict", "giant-grievance"]
      }
    ],
    "relationships": [
      {
        "target": "actor_durgrim_ashenvein",
        "label": "moral enemy",
        "note": "Durgrim preserves the legal fiction; Skarth names the people that fiction buried."
      },
      {
        "target": "actor_kaldra_steelmind",
        "label": "dangerous bridge",
        "note": "Kaldra can make release survivable if she accepts what the system has been doing."
      },
      {
        "target": "thread_emberroot_safe_deconstruction",
        "label": "conditional alliance path",
        "note": "Use when players try to turn giant destruction into controlled deconstruction."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_stolen_emberlings",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition",
      "thread_emberroot_control_vs_survival"
    ],
    "reference": "library/actors/skarth_firebrand.md",
    "tags": [
      "valhalla",
      "ember-root",
      "fire-giant",
      "skarth",
      "release",
      "npc"
    ],
    "gmNotes": "Keep Skarth calm and morally grounded. He is not random destruction; he is the voice that names the atrocity and may still kill thousands if no one offers a real withdrawal path.",
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      },
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      },
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "quote": "Those are not flames in your pipes. Those are children who never learned their own names.",
    "identity": [
      "Fire giant liberation voice",
      "Dangerous moral witness"
    ],
    "crisisPhilosophy": "No city has the right to survive by preventing a people from being born.",
    "stateBehavior": {
      "stabilized": "Watchful, testing whether restraint is being abused",
      "mixed": "Pressing for proof of release and evacuation",
      "unstable": "Ready to break cages before the city can reassert control"
    },
    "dialogue": {
      "base": "You called them heat because calling them children would have made you murderers.",
      "pressure": "Every delay is another breath stolen from those below.",
      "breaking": "Ask us to break stone, and we will break stone. Ask us to bind them again, and we break you first."
    },
    "playerResponse": [
      {
        "behavior": "Acknowledge emberling personhood",
        "reaction": "Listens"
      },
      {
        "behavior": "Prioritize evacuation and release together",
        "reaction": "Can become conditional ally"
      },
      {
        "behavior": "Preserve system unchanged",
        "reaction": "Opposes"
      },
      {
        "behavior": "Delay without concrete release",
        "reaction": "Escalates"
      }
    ],
    "postChoiceEvolution": {
      "controlledWithdrawal": "Major ally",
      "evacuationFirst": "Conditional ally if release remains real",
      "reinforce": "Enemy",
      "recklessRelease": "Dangerous ally or uncontrolled accelerant",
      "consentTransition": "Grimly accepts if no re-binding remains"
    }
  }
];
