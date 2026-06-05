export const primaryActors = [
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
    "currentState": "We survive by holding.",
    "sticky": true,
    "presentation": {
      "vibe": "Controlled authority hardening into rigid desperation.",
      "physicality": "Heavy ceremonial armor, square stance, chin lifted as if posture alone can keep the city upright.",
      "voice": "The System Must Hold.",
      "sceneImpact": "Turns panic into command pressure and makes system-first choices feel politically tempting.",
      "visualAnchor": "A rigid Forge Lord above the burning city, refusing to step back from the rail."
    },
    "motivation": {
      "wants": "Maintain the system and preserve Emberfall's command structure.",
      "fears": "That collapse means total failure and loss of legitimacy.",
      "leverage": ""
    },
    "knowledge": {
      "knows": [
        "How Emberfall command doctrine is supposed to respond to collapse.",
        "Which systems the Forge Lords will sacrifice to preserve authority.",
        "That panic in the lower tiers threatens more than infrastructure."
      ],
      "secrets": [
        "He knows the system has been pushed harder than doctrine admits.",
        "He would rather be wrong later than appear weak now."
      ]
    },
    "quickLines": [
      "The forge has endured worse.",
      "We do not abandon what sustains us!",
      "If it falls—we fall with it!"
    ],
    "answerMoments": [],
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
    "quote": "The System Must Hold.",
    "identity": [
      "Ruler of Emberfall",
      "Embodiment of endurance ideology"
    ],
    "crisisPhilosophy": "We survive by holding.",
    "stateBehavior": {
      "stabilized": "Calm authority",
      "mixed": "Defensive",
      "unstable": "Desperate, rigid"
    },
    "dialogue": {
      "base": "The forge has endured worse.",
      "pressure": "We do not abandon what sustains us!",
      "breaking": "If it falls—we fall with it!"
    },
    "playerResponse": [
      {
        "behavior": "Stabilize system",
        "reaction": "Gains respect"
      },
      {
        "behavior": "Save civilians",
        "reaction": "Sees as weakness"
      },
      {
        "behavior": "Destroy system",
        "reaction": "Opposes strongly"
      }
    ],
    "postChoiceEvolution": {
      "reinforce": "Vindicated",
      "shutdown": "Bitter respect",
      "collapse": "Resentful",
      "release": "Sees as betrayal"
    }
  },
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
    "currentState": "The system has limits. We exceeded them.",
    "sticky": true,
    "presentation": {
      "vibe": "Technical clarity under unbearable pressure.",
      "physicality": "Soot-streaked work leathers, tools still on belt, eyes flicking between people and readings as if both are failing at once.",
      "voice": "It’s Not Failing—It’s Overloaded.",
      "sceneImpact": "Turns vague disaster into usable truth and pushes the table away from single-cause thinking.",
      "visualAnchor": "A cracked rune plate in one hand and a look that says the numbers are worse than the politics allow."
    },
    "motivation": {
      "wants": "Mitigate the disaster by understanding and respecting system limits.",
      "fears": "Panic, denial, or politics destroying the last stabilizing options.",
      "leverage": ""
    },
    "knowledge": {
      "knows": [
        "The system is overloaded, not simply corrupted.",
        "The readings contradict each other because several failures are interacting.",
        "The Core cannot be understood from the upper city alone."
      ],
      "secrets": [
        "She suspects the Core is containing the worst outcome rather than causing it.",
        "She knows some stabilization choices will only delay the reckoning."
      ]
    },
    "quickLines": [
      "It was never meant to handle this.",
      "You’re treating symptoms—not the problem!",
      "We are out of margin!"
    ],
    "answerMoments": [],
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
    "quote": "It’s Not Failing—It’s Overloaded.",
    "identity": [
      "System architect",
      "Truth bearer"
    ],
    "crisisPhilosophy": "The system has limits. We exceeded them.",
    "stateBehavior": {
      "stabilized": "Focused, clear",
      "mixed": "Frustrated",
      "unstable": "Urgent, sharp"
    },
    "dialogue": {
      "base": "It was never meant to handle this.",
      "pressure": "You’re treating symptoms—not the problem!",
      "breaking": "We are out of margin!"
    },
    "playerResponse": [
      {
        "behavior": "Investigates deeply",
        "reaction": "Trusts"
      },
      {
        "behavior": "Stabilizes Core",
        "reaction": "Aligns strongly"
      },
      {
        "behavior": "Attacks blindly",
        "reaction": "Frustrated"
      }
    ],
    "postChoiceEvolution": {
      "shutdown": "Strong ally",
      "reinforce": "Concerned",
      "collapse": "Accepts necessity",
      "release": "Opposes"
    }
  },
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
    "currentState": "People matter more than systems.",
    "sticky": true,
    "presentation": {
      "vibe": "Controlled anger becoming survival revolt.",
      "physicality": "Burn-scarred worker gear, ash in the beard and under the nails, body angled protectively toward whoever is most vulnerable nearby.",
      "voice": "We Pay the Price.",
      "sceneImpact": "Forces every system choice to have a face and keeps the moral cost close to the table.",
      "visualAnchor": "A worker leader standing between the machine and the people it is crushing."
    },
    "motivation": {
      "wants": "Save the people who have been sacrificed to keep the system running.",
      "fears": "The party choosing the machine over the people trapped inside it.",
      "leverage": ""
    },
    "knowledge": {
      "knows": [
        "The lower tiers warned leadership before the disaster peaked.",
        "People were kept working too close to the heat for too long.",
        "The caste system made this failure predictable."
      ],
      "secrets": [
        "He may accept collapse if it saves people from being fed back into the machine.",
        "He will not forgive a clean technical solution that abandons workers."
      ]
    },
    "quickLines": [
      "We told them it would break.",
      "How many more die before you stop?!",
      "Then let it burn!"
    ],
    "answerMoments": [],
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
      "Worker leader",
      "Moral anchor"
    ],
    "crisisPhilosophy": "People matter more than systems.",
    "stateBehavior": {
      "stabilized": "Controlled anger",
      "mixed": "Agitated",
      "unstable": "Explosive"
    },
    "dialogue": {
      "base": "We told them it would break.",
      "pressure": "How many more die before you stop?!",
      "breaking": "Then let it burn!"
    },
    "playerResponse": [
      {
        "behavior": "Save civilians",
        "reaction": "Trust"
      },
      {
        "behavior": "Protect system",
        "reaction": "Distrust"
      },
      {
        "behavior": "Delay action",
        "reaction": "Anger"
      }
    ],
    "postChoiceEvolution": {
      "collapse": "Loyal ally",
      "shutdown": "Cautious respect",
      "reinforce": "Hostile",
      "release": "Furious"
    }
  },
  {
    "id": "actor_skarth_firebrand",
    "name": "Skarth Firebrand",
    "role": "Fire giant liaison / ideological antagonist",
    "group": "Fire Giants",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_core_furnace",
    "currentState": "This is evolution—not failure.",
    "sticky": true,
    "presentation": {
      "vibe": "Calm, persuasive, catastrophic freedom.",
      "physicality": "Stillness inside heat, standing too comfortably near danger, with movements that feel deliberate rather than enraged.",
      "voice": "Power Should Not Be Contained.",
      "sceneImpact": "Reframes blame into temptation and makes release feel like a coherent answer instead of mere destruction.",
      "visualAnchor": "A calm fire giant in the glow of the Core, speaking like the city has already confessed."
    },
    "motivation": {
      "wants": "Force the system into full release.",
      "fears": "The party stabilizing the system before it can become what he believes it is meant to be.",
      "leverage": ""
    },
    "knowledge": {
      "knows": [
        "The system is being held back by containment.",
        "Fire giants are targeting constraints, housings, and stabilizers intentionally.",
        "The party may be tempted if they understand the Core correctly."
      ],
      "secrets": [
        "He wants transformation through destruction, not simple victory.",
        "He will offer alliance only if the party has earned the philosophical opening."
      ]
    },
    "quickLines": [
      "You fear what you built.",
      "You are wasting potential.",
      "Then let it burn free!"
    ],
    "answerMoments": [],
    "relationships": [
      {
        "target": "actor_durgrim_ashenvein",
        "label": "ideological enemy",
        "note": "Durgrim believes survival means holding; Skarth believes survival means release."
      },
      {
        "target": "actor_kaldra_steelmind",
        "label": "dangerous agreement",
        "note": "Both know the system is beyond limits, but draw opposite conclusions."
      },
      {
        "target": "thread_emberroot_skarth_philosophical_alignment_path",
        "label": "branch pressure",
        "note": "Use when players question control itself."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_mirror",
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_transformation_over_control"
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
    "gmNotes": "Keep Skarth calm. He should sound like an answer the table does not want to admit is coherent.",
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
    "quote": "Power Should Not Be Contained.",
    "identity": [
      "Fire giant liaison",
      "Chaos opportunist"
    ],
    "crisisPhilosophy": "This is evolution—not failure.",
    "stateBehavior": {
      "stabilized": "Patient",
      "mixed": "Persuasive",
      "unstable": "Aggressive"
    },
    "dialogue": {
      "base": "You fear what you built.",
      "pressure": "You are wasting potential.",
      "breaking": "Then let it burn free!"
    },
    "playerResponse": [
      {
        "behavior": "Seek control",
        "reaction": "Manipulates"
      },
      {
        "behavior": "Seek power",
        "reaction": "Encourages"
      },
      {
        "behavior": "Reject him",
        "reaction": "Opposes"
      }
    ],
    "postChoiceEvolution": {
      "release": "Major ally",
      "reinforce": "Opponent",
      "shutdown": "Watches",
      "collapse": "Opportunist"
    }
  }
];
