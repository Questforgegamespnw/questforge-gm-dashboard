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
    "relatedLocation": "location_emberfall_core_furnace",
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
    "id": "table_emberroot_tri_voice_bursts",
    "name": "Tri-Voice Bursts",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "dialogue",
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
    "id": "table_emberroot_crisis_types",
    "name": "Unsavable Crisis Types",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d5",
    "category": "crisis",
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
    "id": "table_emberroot_exfil_benefits",
    "name": "Hot Exfil Stability Benefits",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "pick",
    "category": "benefit",
    "entries": [
      "Civilians saved: survivors guide routes; faster movement.",
      "Structure saved: stable path remains; Valkyries can land safely.",
      "Lava contained: safe zones exist; reduced heat checks.",
      "Enemies repelled: no interruptions; clear escape path.",
      "Core stabilized: all hazards reduced by one level; no chain escalation."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "exfil",
      "benefit",
      "consequence"
    ],
    "gmNotes": "Every resolved crisis adds one benefit."
  },
  {
    "id": "table_emberroot_reinforce_consequences",
    "name": "Reinforce Consequences",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "post-choice consequence",
    "entries": [
      "Structural Cracks: City holds, but fractures spread. Future missions here are more dangerous.",
      "Worker Casualties: Ashbound losses are high. Bruni becomes hostile toward leadership and possibly the party.",
      "Overloaded Constructs: Constructs begin malfunctioning intermittently. Future encounters include unstable constructs.",
      "Valkyrie Delay: Extraction is slower than expected. First hint: “We couldn’t reach everyone in time.”",
      "Hidden Instability: Core seems stable for now. Next fire-based arc gets bonus escalation.",
      "Political Fallout: Forge Lords strengthen grip. City becomes more authoritarian."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "reinforce",
      "consequence"
    ],
    "gmNotes": "Choice increases Ragnarok Meter by +2."
  },
  {
    "id": "table_emberroot_shutdown_consequences",
    "name": "Controlled Shutdown Consequences",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "post-choice consequence",
    "entries": [
      "District Lost: One major section destroyed. Survivors displaced.",
      "Resource Collapse: Forge output drops dramatically. Weapons or gear become scarcer in future.",
      "Valkyrie Strain: Extraction requires more effort. Valkyries visibly fatigued.",
      "Engineer Divide: Kaldra gains influence. Internal faction tension increases.",
      "Lingering Core Echo: Elemental instability remains. Occasional flare-ups.",
      "We Chose Who Lived: Survivors question the party’s priorities. Emotional fallout."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "shutdown",
      "consequence"
    ],
    "gmNotes": "Choice increases Ragnarok Meter by +1."
  },
  {
    "id": "table_emberroot_collapse_consequences",
    "name": "Collapse Consequences",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "post-choice consequence",
    "entries": [
      "Refugee Crisis: Survivors flood other regions. Future social complications.",
      "Valkyrie Overload: Massive extraction effort. Valkyries begin showing real exhaustion.",
      "Giant Expansion: Fire giants claim territory. New enemy stronghold established.",
      "Core Residue: Fragment of Living Core survives. Potential future mini-boss.",
      "Worker Loyalty: Bruni and Ashbound become strong allies.",
      "Loss of Knowledge: Important schematics or tech destroyed. Future solutions harder."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "collapse",
      "consequence"
    ],
    "gmNotes": "Choice increases Ragnarok Meter by +2."
  },
  {
    "id": "table_emberroot_release_consequences",
    "name": "Release Consequences",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "post-choice consequence",
    "entries": [
      "Elemental Rift: Fire Plane influence leaks into the world. Future missions include planar bleed.",
      "Giant Ascendancy: Skarth gains power and becomes recurring villain.",
      "Valkyrie Failure: Multiple souls are not retrieved. Quiet Rows destabilizes.",
      "Core Fragment Awakens: A piece of the entity survives independently. Future boss hook.",
      "Widespread Destruction: Entire region uninhabitable. Map permanently altered.",
      "You Chose This: NPCs directly blame the party. Reputation impact across realms."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "release",
      "consequence"
    ],
    "gmNotes": "Choice increases Ragnarok Meter by +3."
  },
  {
    "id": "table_emberroot_universal_consequences",
    "name": "Universal EmberRoot Consequences",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "die": "1d6",
    "category": "post-choice consequence",
    "entries": [
      "Heimdall Notice: “You chose… quickly.”",
      "Valkyrie Conflict: Two Valkyries argue openly.",
      "Quiet Rows Flicker: A name almost disappears.",
      "Mead Tastes Different: Subtle but noticeable.",
      "Returned Einherjar Hesitates: Small behavioral glitch.",
      "Bifrost Distortion: Arrival or return feels unstable."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "universal",
      "consequence",
      "valhalla-fallout"
    ],
    "gmNotes": "Roll once regardless of the main choice."
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
      "Pick one enemy type",
      "Pick one hazard",
      "Pick one objective"
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
    ],
    "gmNotes": "This is a dashboard table even without die entries; renderer may show details via fields if supported."
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
    ],
    "gmNotes": "Pulled from the former NPC interaction rules panel."
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
    ],
    "gmNotes": "Drop when the Investigation Clock reaches a pressure breakpoint or the scene needs motion."
  },
  {
    "id": "table_emberroot_session_02_outcome_matrix",
    "name": "Session 2 Investigation Outcome Matrix",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "investigation outcome",
    "entries": [
      "A only: Think system is failing.",
      "B only: Think giants are cause.",
      "C only: Think Root is cause.",
      "A + B: Blame giants + system.",
      "A + C: Begin understanding truth.",
      "B + C: Misattribute cause.",
      "A + B + C: Near full realization, but too late.",
      "C + B + A: Optimal route."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "session-2"
    ]
  },
  {
    "id": "table_emberroot_clock_global_escalation",
    "name": "Clock-Based Global Escalation",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "clock effects",
    "entries": [
      "Clock 2: bridge collapses; minor NPC casualties.",
      "Clock 4: district destroyed; Valkyries visibly strained.",
      "Clock 6: Core instability spike; Council urgency immediate; skip downtime."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "clock"
    ]
  },
  {
    "id": "table_emberroot_micro_encounter_modules",
    "name": "EmberRoot Micro Encounter Modules",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "micro encounters",
    "entries": [
      "High Forge — Hold the Line.",
      "High Forge — The Control Room Lie.",
      "Midworks — Argument at the Node.",
      "Midworks — Overload Cascade.",
      "Chainways — The Blocked Crossing.",
      "Chainways — The Fall."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "micro-encounters"
    ]
  },
  {
    "id": "table_emberroot_unsavable_crisis_modules",
    "name": "Unsavable Crisis Modules",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "category": "crisis modules",
    "entries": [
      "Civilian Surge — trapped civilians, emotional pressure.",
      "Structural Collapse — placeholder to rebuild later.",
      "Lava Breach — containment line gone.",
      "Enemy Push — giants/constructs exploit chaos.",
      "Core Flare — the Core reacts system-wide.",
      "Runaway Transformation — if players joined Skarth."
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable"
    ]
  }
];
