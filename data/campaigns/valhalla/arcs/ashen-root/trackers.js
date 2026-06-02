export const trackers = [
  {
    "id": "tracker_ashroot_player_trust",
    "name": "Ashroot Player Trust / Suspicion",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ashroot",
    "status": "available",
    "type": "relationship / hidden",
    "value": 0,
    "min": -5,
    "max": 5,
    "label": "Neutral perception",
    "summary": "Hidden per-player trust/suspicion score for identifying True, Fractured, and Echo NPCs.",
    "effects": [
      {
        "range": "-5--3",
        "label": "Paranoid Misread",
        "note": "False NPCs feel convincing; even True NPCs seem suspicious."
      },
      {
        "range": "0",
        "label": "Neutral",
        "note": "No automatic tells."
      },
      {
        "range": "3-4",
        "label": "Pattern Recognition",
        "note": "Player notices subtle tells automatically."
      },
      {
        "range": "5",
        "label": "Echo Detection",
        "note": "Player can identify Echo NPCs with checks."
      }
    ],
    "tags": [
      "valhalla",
      "ashroot",
      "trust",
      "hidden-tracker",
      "echo-npc"
    ],
    "gmNotes": "Track per player in notes if the dashboard does not support per-character values yet."
  }
];
