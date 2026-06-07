export const threads = [
  {
    id: "thread_emberroot_no_clean_victories",
    title: "No Clean Victories",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "arc pressure / moral consequence",
    summary: "Every Act 2 outcome preserves something, loses something, and advances the cost of Ragnarok.",
    currentState: "Arc pressure is built around triage, tradeoff, and choosing what survives.",
    nextPressure: "When the party looks for a perfect answer, make the competing losses visible instead of punishing them for trying.",
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
      "scene_emberroot_hot_exfil",
      "scene_valhalla_post_act2_reflection"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "tradeoff",
      "no-clean-victories",
      "arc-pressure"
    ],
    gmNotes: "Act 2 is a failure of possibility, not a failure of skill. Choices should matter without allowing every loss to be avoided.",
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
    summary: "The Living Core is the stabilizer, not the threat; it is reacting to overwhelming pressure and holding the disaster back.",
    currentState: "Players may initially misread the Core as the source of the crisis.",
    nextPressure: "Reveal through investigation and Forge Below that the Core reacts, contains, and stabilizes rather than attacking at random.",
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
      "scene_emberroot_core_furnace_descent",
      "scene_emberroot_s03_forge_below_living_core"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "core",
      "truth",
      "forge-below"
    ],
    gmNotes: "The system is not simply broken. It is working beyond survivable limits. The Core is holding the bomb.",
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
    type: "faction pressure / systemic failure",
    summary: "Forge Lords, Engineers, and Workers force the party between control, stabilization, and survival; the disaster was built over time, not created by the players' arrival.",
    currentState: "Caste pressure should show up as bursts during every active crisis.",
    nextPressure: "Drop a Tri-Voice Burst when players hesitate, when a crisis escalates, or when different social layers want incompatible rescues.",
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
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "caste-pressure",
      "tri-voice",
      "factions",
      "systemic-failure"
    ],
    gmNotes: "Forge Lords control, Engineers fix, Workers survive. Do not let the caste system become background lore; it should visibly shape what each group demands.",
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
    id: "thread_emberroot_giants_want_release",
    title: "The Giants Want Release",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "enemy motivation / ideological pressure",
    summary: "Fire Giants are not random attackers; they want to free the system and force an ascension event.",
    currentState: "The giants treat containment as the real crime and sabotage as liberation.",
    nextPressure: "Show giants targeting chains, pillars, containment supports, and system controls more than easy civilian kills.",
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
    gmNotes: "Their violence is real, but their goal is release, not random destruction.",
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
    type: "valhalla foreshadowing / rescue limit",
    summary: "Thora and Kara show that the crisis is exceeding Valhalla's rescue logic.",
    currentState: "The Valkyries can retrieve, carry, and witness; they cannot erase the cost of collapse.",
    nextPressure: "Use empty hands, late arrivals, failed catches, and exhaustion to show that even divine systems have limits.",
    relatedActors: [
      "actor_thora_kara_emberroot"
    ],
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_valhalla_quiet_rows",
      "location_valhalla_valkyrie_aerie"
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
    gmNotes: "This thread bridges Emberfall field pressure into Valhalla fallout. Let strain show through action before explanation.",
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
    id: "thread_emberroot_skarth_philosophical_alignment_path",
    title: "Join Skarth Is an Alignment Path, Not an Evil Path",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "choice branch / philosophical pressure",
    summary: "If earned, players may choose transformation over control. This worsens the city but remains philosophically consistent.",
    currentState: "Only available with High Insight plus actual player sympathy or questioning.",
    nextPressure: "Skarth should ask what the party is actually trying to save, then clearly state that helping him makes things worse for the city.",
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
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_skarth_council_reframe",
      "scene_emberroot_join_skarth_branch",
      "scene_emberroot_runaway_transformation_variant",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "skarth",
      "release",
      "transformation",
      "join-skarth"
    ],
    gmNotes: "This is not a bad ending. It is agency with consequences. Control versus release should remain a live question, not a villain speech.",
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
    currentState: "The Unsavable defines resolved and unresolved crisis count; Hot Exfil converts that into escape texture.",
    nextPressure: "Run as skill challenge or chase once one or two crises resolve and collapse escalates.",
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
      "hot-exfil",
      "consequence"
    ],
    gmNotes: "Every unresolved crisis becomes one persistent hazard. Every resolved crisis becomes one visible benefit or cleaner route.",
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  },
  {
  id: "thread_emberroot_fire_is_people",
  title: "Fire Is People",
  type: "moral-reveal / faction-truth",
  summary: "The fire giants and bound fire elementals are not mindless forces in Emberfall’s system; they are peoples treated as thermal infrastructure.",
  currentState: "The party has seen giants avoid civilians and target containment housings, opening the possibility that the giants are dismantling cages rather than merely attacking the city.",
  pressure: "The city’s survival has depended on refusing personhood to the beings that make it function.",
  gmNotes: "What does survival mean when the thing keeping everyone alive is also an atrocity?"
  
}
];
