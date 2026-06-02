export const tables = [
  {
    "id": "table_ashroot_fake_npc_events",
    "name": "Ashroot Fake NPC Events",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ashroot",
    "status": "available",
    "die": "1d8",
    "category": "event",
    "relatedLocation": "",
    "entries": [
      "NPC greets player like an old friend; they have never met.",
      "NPC gives correct information for the wrong situation.",
      "Two NPCs contradict each other directly.",
      "NPC disappears mid-conversation.",
      "NPC repeats the same line hours later.",
      "NPC reacts to something that did not happen.",
      "NPC claims a player said something they did not.",
      "NPC refers to a future event."
    ],
    "tags": [
      "valhalla",
      "ashroot",
      "fake-npc",
      "echo-npc",
      "memory-drift"
    ],
    "gmNotes": "Use 1–2 tells max per Echo NPC."
  },
  {
    "id": "table_ashroot_hallucinations",
    "name": "Ashroot Quick Hallucinations",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ashroot",
    "status": "available",
    "die": "1d8",
    "category": "hallucination",
    "relatedLocation": "",
    "entries": [
      "A player hears their name from behind.",
      "Footsteps do not match party count.",
      "A shadow lags behind.",
      "A memory feels wrong.",
      "A reflection smiles first.",
      "A voice overlaps their own.",
      "A door leads somewhere else briefly.",
      "Someone remembers a different outcome."
    ],
    "tags": [
      "valhalla",
      "ashroot",
      "hallucination",
      "player-specific",
      "identity"
    ],
    "gmNotes": "Delivery rule: “Only you notice this.” Trigger 1 per session, max 2."
  }
];
