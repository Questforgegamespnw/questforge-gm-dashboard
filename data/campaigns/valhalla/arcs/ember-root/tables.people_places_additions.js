export const tables = [
  {
    "id": "table_emberroot_quick_encounter_builder",
    "name": "Act 2 Quick Encounter Builder",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "encounter builder",
    "steps": [
      "Pick 1 enemy type",
      "Pick 1 hazard",
      "Pick 1 objective"
    ],
    "enemyOptions": [
      "Magma Reaver",
      "Cinder Channeler",
      "Ember Guard",
      "Forge Guard",
      "Ironhand Engineer",
      "Ashbound Defender"
    ],
    "hazardOptions": [
      "Collapsing bridge",
      "Lava spread",
      "Core flare",
      "Heat pressure",
      "Chain failure",
      "Crowd panic"
    ],
    "objectiveOptions": [
      "Save civilians",
      "Reach control node",
      "Hold route",
      "Evacuate group",
      "Stabilize pillar",
      "Delay Skarth"
    ],
    "example": "Magma Reaver + Collapsing Bridge + Save Civilians.",
    "tags": [
      "valhalla",
      "ember-root",
      "encounter-builder",
      "combat"
    ]
  },
  {
    "id": "table_emberroot_npc_state_reactions",
    "name": "NPC State Reactions",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "npc behavior",
    "entries": [
      "High Insight: NPCs trust the players more and defer more.",
      "Unstable Core: NPCs interrupt more, panic faster, and argue emotionally.",
      "High Clock: NPCs stop debating and demand decisions."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "npc",
      "behavior"
    ]
  },
  {
    "id": "table_emberroot_district_crisis_drop",
    "name": "District Crisis Drop Table",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "location crisis",
    "entries": [
      "High Forge: command failure, blocked evacuation, Council pressure.",
      "Midworks: overload node, conflicting engineer data, rune panel surge.",
      "Lower Furnaces: trapped workers, furnace breach, Ashbound revolt.",
      "Chainways: route collapse, pursuit, vertical rescue.",
      "Core Furnace: regulator instability, Core flare, pillar damage."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "locations",
      "crisis"
    ]
  }
];
