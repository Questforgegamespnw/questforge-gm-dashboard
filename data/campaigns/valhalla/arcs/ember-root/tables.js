export const tables = [
  {
    "id": "table_emberroot_core_reactions",
    "name": "Forge Below Core Reactions",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "scene-procedure",
    "relatedLocation": "location_emberroot_forge_below",
    "entries": [
      "Lava vent erupts; area hazard.",
      "Shockwave pulse; knockback.",
      "Chain strain; movement hindered.",
      "Core flare; all hazards worsen.",
      "Holding, barely.",
      "Holding, barely."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "forge-below",
      "core-reaction"
    ],
    "gmNotes": "Pick or roll once per round during Forge Below."
  },
  {
    "id": "table_emberroot_crisis_types",
    "name": "Unsavable Crisis Types",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d5",
    "category": "crisis",
    "relatedLocation": "",
    "entries": [
      "Civilians: people trapped or pinned.",
      "Structure: bridge or platform collapse.",
      "Lava: flow breach or spreading hazard.",
      "Enemies: giants or constructs pushing in.",
      "Core Flare: energy surge or instability spike."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "crisis"
    ],
    "gmNotes": "Pick fast; do not over-randomize if a crisis is obvious."
  },
  {
    "id": "table_emberroot_exfil_hazards",
    "name": "Hot Exfil Hazards",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d5",
    "category": "hazard",
    "relatedLocation": "",
    "entries": [
      "Falling World: structural collapse; paths disappear beneath them.",
      "Flood of Fire: lava spreads into escape routes.",
      "Active Pursuit: giants or constructs chase or intercept.",
      "System Rupture: Core pulses and worsens everything.",
      "Weight of Loss: survivors clog routes or reach for help they cannot receive."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "exfil",
      "hazard"
    ],
    "gmNotes": "Every unresolved crisis adds one persistent exfil hazard."
  },
  {
    "id": "table_emberroot_tri_voice_bursts",
    "name": "Tri-Voice Bursts",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "dialogue",
    "relatedLocation": "",
    "entries": [
      "Forge Lord: “Hold the system!” / Engineer: “That will overload it!” / Worker: “We’re not dying for this!”",
      "Engineer: “It’s exceeding safe thresholds!” / Forge Lord: “Then increase capacity!” / Worker: “We’re the ones inside that capacity!”",
      "Forge Lord: “Defend the perimeter!” / Engineer: “They’re not the priority!” / Worker: “Tell that to the ones getting crushed!”",
      "Engineer: “This is deeper than the city!” / Forge Lord: “Then we contain it here!” / Worker: “You can’t contain this!”",
      "Forge Lord: “We endure!” / Engineer: “We adapt!” / Worker: “We survive!”",
      "Engineer: “You know what this will cost!” / Worker: “Then don’t choose them!” / Forge Lord: “Choose the city!”"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "tri-voice",
      "dialogue",
      "caste-pressure"
    ],
    "gmNotes": "Drop one, then immediately return control to players."
  },

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
