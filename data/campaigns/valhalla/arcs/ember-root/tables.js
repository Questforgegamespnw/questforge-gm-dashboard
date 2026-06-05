export const tables = [
  {
    id: "table_emberroot_hot_landing_crisis_choices",
    name: "Hot Landing Crisis Choice Outcomes",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "pick",
    category: "opening triage",
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces"
    ],
    entries: [
      "Choose Civilians first: lives saved and Ashbound trust rises; Structure worsens; enemy completes first destructive action.",
      "Choose Structure first: route preserved and later exfil improves; civilians become harder to reach; enemy gets a cleaner opening.",
      "Choose Forge Overlord first: sabotage slowed and enemy pressure reduced; people remain in danger; structure advances toward collapse.",
      "Split hard or burn resources: one full success and one partial success; third branch still worsens.",
      "Exceptional plan: let it work, then add visible cost elsewhere."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "hot-landing",
      "triage",
      "opening"
    ],
    gmNotes: "This is not a menu. Present all three as simultaneous sensory hits.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "table_emberroot_core_reactions",
    name: "Forge Below Core Reactions",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "1d6",
    category: "scene-procedure",
    relatedLocation: "location_emberfall_core_furnace",
    entries: [
      "Lava vent erupts; area hazard.",
      "Shockwave pulse; knockback.",
      "Chain strain; movement hindered.",
      "Core flare; all hazards worsen.",
      "Holding, barely.",
      "Holding, barely."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "forge-below",
      "core-reaction"
    ],
    gmNotes: "Pick or roll once per round during Forge Below.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "forge_below_choice"
  },
  {
    id: "table_emberroot_tri_voice_bursts",
    name: "Tri-Voice Bursts",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "1d6",
    category: "dialogue",
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    entries: [
      "Forge Lord: “Hold the system!” / Engineer: “That will overload it!” / Worker: “We’re not dying for this!”",
      "Engineer: “It’s exceeding safe thresholds!” / Forge Lord: “Then increase capacity!” / Worker: “We’re the ones inside that capacity!”",
      "Forge Lord: “Defend the perimeter!” / Engineer: “They’re not the priority!” / Worker: “Tell that to the ones getting crushed!”",
      "Engineer: “This is deeper than the city!” / Forge Lord: “Then we contain it here!” / Worker: “You can’t contain this!”",
      "Forge Lord: “We endure!” / Engineer: “We adapt!” / Worker: “We survive!”",
      "Engineer: “You know what this will cost!” / Worker: “Then don’t choose them!” / Forge Lord: “Choose the city!”"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "tri-voice",
      "dialogue",
      "caste-pressure"
    ],
    gmNotes: "Drop one, then immediately return control to players.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "table_emberroot_session_02_outcome_matrix",
    name: "Session 2 Investigation Outcome Matrix",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "investigation outcome",
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    entries: [
      "A only: Think system is failing.",
      "B only: Think giants are cause.",
      "C only: Think Root is cause.",
      "A + B: Blame giants + system.",
      "A + C: Begin understanding truth.",
      "B + C: Misattribute cause.",
      "A + B + C: Near full realization, but too late.",
      "C + B + A: Optimal route."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "session-2",
      "investigation"
    ],
    gmNotes: "Reward correct interpretation under pressure, not completionism.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "table_emberroot_clock_global_escalation",
    name: "Clock-Based Global Escalation",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "clock effects",
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    entries: [
      "Clock 2: bridge collapses; minor NPC casualties.",
      "Clock 4: district destroyed; Valkyries visibly strained.",
      "Clock 6: Core instability spike; Council urgency immediate; skip downtime."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "clock"
    ],
    gmNotes: "Use when players delay, rest, debate too long, or over-investigate.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "table_emberroot_crisis_types",
    name: "Unsavable Crisis Types",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "1d5",
    category: "crisis",
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    entries: [
      "Civilians: people trapped or pinned.",
      "Structure: bridge or platform collapse.",
      "Lava: flow breach or spreading hazard.",
      "Enemies: giants or constructs pushing in.",
      "Core Flare: energy surge or instability spike."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "unsavable",
      "crisis"
    ],
    gmNotes: "Pick fast; do not over-randomize if a crisis is obvious.",
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  },
  {
    id: "table_emberroot_structural_collapse_outcomes",
    name: "Structural Collapse Crisis Outcomes",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "crisis module",
    relatedLocation: "location_emberfall_chainways",
    entries: [
      "Success: Route preserved; movement advantage during Hot Exfil; Valkyries have safer landing/retrieval path.",
      "Partial: Some people cross safely; route becomes unstable; Hot Exfil gains a minor collapse hazard.",
      "Failure: Path destroyed; people may fall or become trapped; Hot Exfil gains Falling World hazard.",
      "Unstable Core: Immediate collapse; no full success possible, only partial rescue or controlled loss.",
      "Mixed Core: Collapse staggers in sections; save people or preserve part of route.",
      "Stabilized Core: Full reinforcement possible; success creates reliable escape route later."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "structural-collapse",
      "crisis",
      "hot-exfil"
    ],
    gmNotes: "Use for Crisis B, The Unsavable, or Chainways route failure.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "table_emberroot_exfil_hazards",
    name: "Hot Exfil Hazards",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "1d5",
    category: "hazard",
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_core_furnace"
    ],
    entries: [
      "Falling World: structural collapse; paths disappear beneath them.",
      "Flood of Fire: lava spreads into escape routes.",
      "Active Pursuit: giants or constructs chase or intercept.",
      "System Rupture: Core pulses and worsens everything.",
      "Weight of Loss: survivors clog routes or reach for help they cannot receive."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "exfil",
      "hazard"
    ],
    gmNotes: "Every unresolved crisis adds one persistent exfil hazard.",
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  },
  {
    id: "table_emberroot_runaway_transformation_hazards",
    name: "Runaway Transformation Hazards",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    die: "1d6",
    category: "join-skarth variant",
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_chainways",
      "location_emberfall_forge_city"
    ],
    entries: [
      "Living Flame: fire moves like a decision, cutting off a safe route.",
      "Dissolving Structure: stone and metal soften instead of cracking.",
      "Energy Distortion: magic/navigation/extraction arrives warped or delayed.",
      "Elemental Bloom: a safe space becomes a new hazard pocket.",
      "Giant Reverence: fire giants stop fighting and start protecting the transformation.",
      "Valkyrie Shock: extraction falters as Thora or Kara asks, “What have you done?”"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "join-skarth",
      "transformation",
      "hazard"
    ],
    gmNotes: "Use only if players helped Skarth or chose release in a strongly sympathetic way.",
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  },
  {
    id: "table_emberroot_skarth_core_state_responses",
    name: "Skarth Responses by Core State",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "skarth council",
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    entries: [
      "Unstable Core: “You blame us for what your system has already become? We didn’t break it. We stopped pretending it wasn’t broken.”",
      "Mixed Core: “You think we caused this? No… we simply refused to stop it. You had the same choice. They still do.”",
      "Stabilized Core: “You call this stability? You’re suffocating it. Holding something like this in chains is the real crime.”"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "skarth",
      "core-state",
      "council"
    ],
    gmNotes: "He should reframe the accusation, not defend himself.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "forge_below_choice"
  },
  {
    id: "table_emberroot_skarth_insight_responses",
    name: "Skarth Responses by Player Insight",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "skarth council",
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    entries: [
      "High Insight: “You’ve seen it. You know this isn’t failure. Why are you helping them lie about it?”",
      "Low Insight: “You’re still trying to fix it. You don’t even understand what it is yet.”",
      "Power move: “You felt it, didn’t you? For a moment, when it almost broke free. It wasn’t chaos. It was right.”"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "skarth",
      "insight",
      "council"
    ],
    gmNotes: "Use once. Do not over-explain Skarth’s philosophy.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "forge_below_choice"
  },
  {
    id: "table_emberroot_join_skarth_consequences",
    name: "Join Skarth Consequence Frame",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    category: "choice consequence",
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge"
    ],
    entries: [
      "Forge Below objective flips: stabilize system becomes break containment faster.",
      "Benefits: Core easier to interact with; giants assist players; faster progression.",
      "Costs: Stability plummets; future crises worsen; civilian losses increase.",
      "Unsavable: +1 crisis and Runaway Transformation enters play.",
      "Dwarves: distrust/hostility. Giants: respect/interest. Valkyries: concern/unease.",
      "Safety note: clearly state this will make things worse for the city before they commit."
    ],
    tags: [
      "valhalla",
      "ember-root",
      "join-skarth",
      "consequence",
      "release"
    ],
    gmNotes: "Not evil path. Not failure path. Philosophical alignment path.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "forge_below_choice"
  }
];
