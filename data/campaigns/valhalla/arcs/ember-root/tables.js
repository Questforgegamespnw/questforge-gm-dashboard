export const tables = [
  {
      id: "table_emberroot_core_reactions",
      name: "Forge Below Core Reactions",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_ember_root",
      status: "available",
      die: "1d6",
      category: "reaction",
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
        "core-reaction",
        "rollable"
      ],
      gmNotes: "Pick or roll once per round during Forge Below when the Core should visibly answer the table state.",
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
        "caste-pressure",
        "rollable"
      ],
      gmNotes: "Drop one burst to make caste pressure audible, then immediately return control to the players.",
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
        "crisis",
        "rollable"
      ],
      gmNotes: "Pick fast; do not over-randomize if a crisis is obvious from prior choices.",
      visibilityGates: [
        {
          id: "collapse_escape",
          label: "Collapse / Escape"
        }
      ],
      visibilityGate: "collapse_escape"
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
        "hazard",
        "rollable"
      ],
      gmNotes: "Every unresolved crisis can add one persistent exfil hazard.",
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
      category: "hazard",
      relatedLocations: [
        "location_emberfall_core_furnace",
        "location_emberfall_chainways",
        "location_emberfall_forge_city"
      ],
      entries: [
        "Living Flame: fire moves like a decision, cutting off a safe route.",
        "Dissolving Structure: stone and metal soften instead of cracking.",
        "Energy Distortion: magic, navigation, or extraction arrives warped or delayed.",
        "Elemental Bloom: a safe space becomes a new hazard pocket.",
        "Giant Reverence: fire giants stop fighting and start protecting the transformation.",
        "Valkyrie Shock: extraction falters as Thora or Kara asks, “What have you done?”"
      ],
      tags: [
        "valhalla",
        "ember-root",
        "join-skarth",
        "transformation",
        "hazard",
        "rollable"
      ],
      gmNotes: "Use only if players helped Skarth or chose release in a strongly sympathetic way.",
      visibilityGates: [
        {
          id: "collapse_escape",
          label: "Collapse / Escape"
        }
      ],
      visibilityGate: "collapse_escape"
    }
];
