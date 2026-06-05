export const threads = [
  {
    id: "thread_emberroot_arrival_forced_triage",
    title: "Arrival Forced Triage",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "opening pressure",
    summary: "The hot landing forces the party to choose among civilians, structure, and enemy sabotage before they can calmly assess the field.",
    currentState: "The first Act 2 lesson is that all three problems are real and nearby.",
    nextPressure: "Whichever crisis they ignore becomes a future cost.",
    relatedActors: [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver",
      "actor_ashbound_defender",
      "actor_ironhand_engineer"
    ],
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces",
      "location_emberfall_midworks"
    ],
    relatedScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_arrival_stop_forge_overlord"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "arrival",
      "triage"
    ],
    gmNotes: "Do not present as a menu; present as simultaneous disaster.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "thread_emberroot_no_clean_victories",
    title: "No Clean Victories",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "consequence / moral pressure",
    summary: "Every Act 2 outcome preserves something, loses something, and advances Ragnarok.",
    currentState: "Arc pressure is built around triage, tradeoff, and choosing what survives.",
    nextPressure: "Force the party to pick between mutually valid losses.",
    relatedActors: [
      "actor_sven",
      "actor_heimdall",
      "actor_svinhild"
    ],
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces",
      "location_emberfall_high_forge",
      "location_valhalla_quiet_rows",
      "location_valhalla_bifrost_platform"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "tradeoff",
      "no-clean-victories"
    ],
    gmNotes: "Act 2 is a failure of possibility, not a failure of skill.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
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
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "thread_emberroot_core_is_not_enemy",
    title: "The Core Is Not the Enemy",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "mystery / truth",
    summary: "The Living Core is the stabilizer, not the threat; it is overwhelmed by amplified inputs.",
    currentState: "Players may initially misread the Core as the source of the crisis.",
    nextPressure: "Reveal through Forge Below that the Core reacts and stabilizes rather than attacks.",
    relatedActors: [
      "actor_kaldra_steelmind"
    ],
    relatedLocations: [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedScenes: [
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_realization_shift",
      "scene_emberroot_s03_forge_below_living_core"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "core",
      "truth",
      "forge-below"
    ],
    gmNotes: "The system is not broken. It is working beyond survivable limits.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "thread_emberroot_caste_pressure",
    title: "Caste Pressure",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "faction-pressure",
    summary: "Forge Lords, Engineers, and Workers force the party between control, stabilization, and survival.",
    currentState: "Caste pressure should show up as bursts during every active crisis.",
    nextPressure: "Drop a Tri-Voice Burst when players hesitate or a crisis escalates.",
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "caste-pressure",
      "tri-voice",
      "factions"
    ],
    gmNotes: "Forge Lords control, Engineers fix, Workers survive.",
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
    id: "thread_emberroot_skarth_mirror",
    title: "Skarth's Question",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "ideological mirror",
    summary: "Skarth challenges the party's ideals by asking what they are actually trying to save.",
    currentState: "Skarth represents harsh pragmatism and survival over idealism.",
    nextPressure: "Use Skarth when the party clings to a perfect outcome.",
    relatedActors: [
      "actor_skarth_firebrand"
    ],
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants"
    ],
    relatedScenes: [
      "scene_emberroot_arrival_stop_forge_overlord",
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "skarth",
      "ideological-mirror"
    ],
    gmNotes: "He is not only an enemy. He is a perspective.",
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "thread_emberroot_caste_existed_before_arrival",
    title: "This Problem Existed Before They Arrived",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "systemic failure",
    summary: "The caste system makes clear that the disaster was built over time, not created by the players' arrival.",
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedScenes: [
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_c_root_resonance"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "caste",
      "systemic-failure"
    ],
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "thread_emberroot_giants_want_release",
    title: "The Giants Want Release",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "enemy motivation",
    summary: "Fire Giants are not random attackers; they want to free the system and force an ascension event.",
    relatedActors: [
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_core_furnace",
      "location_emberfall_forge_city"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants"
    ],
    relatedScenes: [
      "scene_emberroot_arrival_stop_forge_overlord",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s03_forge_below_living_core"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "fire-giants",
      "release"
    ],
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
    id: "thread_emberroot_valkyrie_strain",
    title: "We Cannot Catch Them All",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "valhalla foreshadowing",
    summary: "Thora and Kara show that the crisis is exceeding Valhalla's rescue logic.",
    relatedActors: [
      "actor_thora_kara_emberroot"
    ],
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_valhalla_quiet_rows"
    ],
    relatedFactions: [
      "faction_valkyries"
    ],
    relatedScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil",
      "scene_valhalla_post_act2_reflection"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "valkyries",
      "system-failure"
    ],
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
    id: "thread_emberroot_core_furnace_truth",
    title: "The Core Is Holding the Bomb",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "location truth",
    summary: "The Core Furnace reveals that the Core is not attacking; it is reacting and containing.",
    relatedActors: [
      "actor_kaldra_steelmind"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace"
    ],
    relatedScenes: [
      "scene_emberroot_core_furnace_descent",
      "scene_emberroot_s03_forge_below_living_core"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "core-furnace",
      "truth"
    ],
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "thread_emberroot_correct_interpretation_under_pressure",
    title: "Correct Interpretation Under Pressure",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "investigation / reward logic",
    summary: "Session 2 rewards interpreting the problem correctly, not completing all content.",
    currentState: "C → B → A is the optimal route, but even optimal players cannot save everything.",
    nextPressure: "Use Informed Decision during Council if earned.",
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    relatedScenes: [
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_realization_shift",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "insight"
    ],
    visibilityGates: [
      {
        id: "calm_center_investigation",
        label: "Calm Center / Investigation"
      },
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "calm_center_investigation"
  },
  {
    id: "thread_emberroot_skarth_philosophical_alignment_path",
    title: "Join Skarth Is an Alignment Path, Not an Evil Path",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "choice branch",
    summary: "If earned, players may choose transformation over control. This worsens the city but remains philosophically consistent.",
    currentState: "Only available with High Insight plus actual player sympathy/questioning.",
    nextPressure: "If offered, clearly state that helping Skarth makes things worse for the city.",
    relatedActors: [
      "actor_skarth_firebrand"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge"
    ],
    relatedScenes: [
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch",
      "scene_emberroot_runaway_transformation_variant"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "skarth",
      "release"
    ],
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "forge_below_choice"
  },
  {
    id: "thread_emberroot_transformation_over_control",
    title: "Transformation Over Control",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "philosophical pressure / variant path",
    summary: "Skarth's offer is a different answer to the act's core problem: control is the problem, release is the answer.",
    currentState: "Inactive unless players have High Insight and real sympathy for Skarth's position.",
    nextPressure: "If accepted, shift The Unsavable and Hot Exfil from collapse to runaway transformation.",
    relatedActors: [
      "actor_skarth_firebrand",
      "actor_thora_kara_emberroot"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge",
      "location_emberfall_chainways"
    ],
    relatedScenes: [
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "transformation",
      "control",
      "join-skarth"
    ],
    gmNotes: "This is not a bad ending. It is agency with consequences.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "forge_below_choice"
  },
  {
    id: "thread_emberroot_hot_exfil_consequence_chain",
    title: "Hot Exfil Consequence Chain",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "consequence / escape",
    summary: "Hot Exfil turns unresolved crises into physical escape hazards.",
    currentState: "The Unsavable defines resolved/unresolved crisis count; Hot Exfil converts that into escape texture.",
    nextPressure: "Run as skill challenge or chase once 1–2 crises resolve and collapse escalates.",
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_core_furnace"
    ],
    relatedScenes: [
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "hot-exfil"
    ],
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  }
];
