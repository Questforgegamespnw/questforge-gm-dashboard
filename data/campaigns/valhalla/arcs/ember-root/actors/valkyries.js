export const valkyrieActors = [
  {
    "id": "actor_thora_kara_emberroot",
    "name": "Thora / Kara",
    "role": "Valkyrie extraction pressure / system-wide failure foreshadowing",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "vibe": "Soul-guides realizing they cannot catch everyone.",
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
    },
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
    "presentation": {
      "vibe": "Soul-guides realizing they cannot catch everyone.",
      "voice": "We Cannot Catch Them All."
    },
    "quickLines": [
      "Pick one—I can’t carry all of them!",
      "…something’s wrong beyond this."
    ],
    "currentState": "We save who we can."
  }
];
