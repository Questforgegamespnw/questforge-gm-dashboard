export const references = [
  {
    "id": "reference_ashroot_fake_npc_system",
    "label": "Ashroot Fake NPC System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ashroot",
    "status": "available",
    "category": "arc system",
    "summary": "NPCs may be True, Fractured, or Echo. Echo NPCs believe they are real and only break under pressure.",
    "details": [
      "Scene population: 60% True, 30% Fractured, 10% Echo.",
      "Trust starts at 0 per player.",
      "Trust +3: subtle tells noticed automatically.",
      "Trust +5: Echo NPCs can be identified with checks.",
      "Trust -3: false NPCs feel convincing and true NPCs seem suspicious."
    ],
    "reference": "library/fake_npc_system.md",
    "tags": [
      "valhalla",
      "ashroot",
      "fake-npc",
      "echo-npc",
      "trust-tracking"
    ],
    "gmNotes": "Never run this as random chaos. Reward attention."
  },
  {
    "id": "reference_ashroot_player_hallucinations",
    "label": "Ashroot Player-Specific Hallucinations",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ashroot",
    "status": "available",
    "category": "arc system",
    "summary": "Target one player at a time with ambiguous, unresolved identity/memory hallucinations.",
    "details": [
      "Use 1 per session, maximum 2.",
      "Say: “Only you notice this.”",
      "Do not confirm whether others see it.",
      "Never fully resolve it immediately."
    ],
    "reference": "library/player_specific_hallucinations.md",
    "tags": [
      "valhalla",
      "ashroot",
      "hallucinations",
      "player-specific",
      "identity"
    ],
    "gmNotes": "Fake NPCs destabilize the world; hallucinations destabilize personal certainty."
  }
];
