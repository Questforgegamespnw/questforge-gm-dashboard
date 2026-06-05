export const valkyrieActors = [
  {
    "id": "actor_thora_kara_emberroot",
    "name": "Thora / Kara",
    "role": "Valkyrie extraction pressure / system-wide failure foreshadowing",
    "group": "Valkyries",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "currentLocation": "location_emberfall_chainways",
    "currentState": "We save who we can.",
    "sticky": true,
    "presentation": {
      "vibe": "Soul-guides realizing they cannot catch everyone.",
      "physicality": "Thora moves like a rescue line under strain; Kara scans past the immediate danger, seeing the deeper wrongness behind it.",
      "voice": "Thora is clipped, urgent, and action-first; Kara is quieter, disturbed, and speaks when the pattern feels wrong.",
      "sceneImpact": "Makes extraction feel limited, moral, and physically contested instead of automatic.",
      "visualAnchor": "Two Valkyries above a collapsing city: one reaching for bodies, one staring past the fire at the system failure underneath."
    },
    "motivation": {
      "wants": "Save who can still be reached and keep extraction possible under impossible pressure.",
      "fears": "That the crisis is exceeding Valhalla’s rescue logic and that some souls cannot be caught in time.",
      "leverage": "Extraction access, rescue authority, and the power to make triage immediate."
    },
    "knowledge": {
      "knows": [
        "There are too many people to save cleanly.",
        "Extraction is not automatic under this level of collapse.",
        "Something is wrong beyond normal battlefield casualties."
      ],
      "secrets": [
        "Kara senses the failure is deeper than the visible disaster.",
        "Thora is closer to snapping than she wants the party to see."
      ]
    },
    "quickLines": [
      "Pick one—I can’t carry all of them!",
      "…something’s wrong beyond this."
    ],
    "answerMoments": [],
    "relationships": [
      {
        "target": "thread_emberroot_valkyrie_strain",
        "label": "living signal",
        "note": "Thora and Kara show Valhalla’s rescue system straining in the field."
      },
      {
        "target": "thread_emberroot_no_clean_victories",
        "label": "triage pressure",
        "note": "They make the party choose who gets help first."
      }
    ],
    "relatedThreads": [
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "reference": "library/actors/thora_kara_valkyrie_strain.md",
    "tags": [
      "valhalla",
      "ember-root",
      "valkyries",
      "thora",
      "kara",
      "extraction",
      "npc"
    ],
    "gmNotes": "Thora and Kara protect the continuity of their charges first. They can assist rescues, carry trapped civilians, and prevent instant-failure deaths, but they defer mission priorities to the players and cannot maintain altitude or extract cleanly while the Bifrost is disrupted.",
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
    "quote": "We Cannot Catch Them All.",
    "identity": [
      "Soul-guides",
      "First sign of system-wide failure"
    ],
    "crisisPhilosophy": "We save who we can.",
    "stateBehavior": {
      "thora": {
        "stabilized": "Controlled",
        "mixed": "Strained",
        "unstable": "Snapping"
      },
      "kara": {
        "stabilized": "Observant",
        "mixed": "Uneasy",
        "unstable": "Disturbed"
      }
    },
    "dialogue": {
      "thora": "Pick one—I can’t carry all of them!",
      "kara": "…something’s wrong beyond this."
    },
    "playerResponse": [
      {
        "behavior": "Save people",
        "reaction": "Align"
      },
      {
        "behavior": "Delay",
        "reaction": "Strain increases"
      },
      {
        "behavior": "Choose system",
        "reaction": "Quiet judgment"
      }
    ],
    "postChoiceEvolution": {
      "highCasualties": "Strain visible",
      "stabilizedSystem": "Relief",
      "collapse": "Overload",
      "release": "Disturbance"
    }
  }
];
