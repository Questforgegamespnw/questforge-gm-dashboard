export const threads = [
  {
    id: "thread_emberroot_no_clean_victories",
    title: "No Clean Victories",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "arc pressure / moral consequence",
    summary: "Every Act 2 outcome saves something, abandons something, and reveals what the party believes survival is allowed to cost.",
    currentState: "The arc is built around triage, tradeoff, and choosing which truth gets paid for first.",
    nextPressure: "When the party looks for a perfect answer, make the competing losses visible without punishing them for trying.",
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand",
      "actor_thora_kara_emberroot"
    ],
    relatedLocations: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces",
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace",
      "location_valhalla_quiet_rows",
      "location_valhalla_bifrost_platform"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
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
    gmNotes: "Act 2 is not about finding the painless answer. It is about making sure the party’s choices matter while refusing to pretend every cost can be avoided.",
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
      },
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },

  {
    id: "thread_emberroot_city_breathing_wrong",
    title: "The City Is Breathing Wrong",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "system truth / investigation spine",
    summary: "Emberfall is not failing from one clean breach. Its thermal life-support system has lost breath coordination: intake, venting, pressure, ballast, and emergency shutoffs are forcing harm into each other.",
    currentState: "The party may first see collapse, heat, and giant attacks as separate problems. Investigation should reveal they are all stressing the same city-body.",
    nextPressure: "Show breath language everywhere: chambers inhale late, vents exhale wrong, shutoffs act like tourniquets, and one saved district pushes pressure elsewhere.",
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    relatedLocations: [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace",
      "location_emberfall_chainways"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
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
      "city-breath",
      "lower-works",
      "system-truth",
      "investigation"
    ],
    gmNotes: "This replaces the old 'Core is not the enemy' framing. The point is not innocence. The point is that the system works, is overloaded, and is morally compromised.",
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
    id: "thread_emberroot_fire_is_people",
    title: "Fire Is People",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "moral reveal / faction truth",
    summary: "The bound fire in Emberfall’s system is not mindless fuel. It is living fire-born potential treated as thermal infrastructure.",
    currentState: "The party may see signs before the full truth: fire recoils, responds, resists commands, and reacts to giant speech.",
    nextPressure: "Let the truth arrive through stacked evidence before anyone says it plainly: this is not fuel, not only energy, and not only a hazard.",
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    relatedLocations: [
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace",
      "location_emberfall_midworks"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_forge_lords"
    ],
    relatedScenes: [
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s03_forge_below_living_core",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "personhood",
      "living-fire",
      "moral-reveal"
    ],
    gmNotes: "This should not feel like a trivia reveal. It should feel like the language of the city becoming morally unusable.",
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
    id: "thread_emberroot_stolen_emberlings",
    title: "Stolen Emberlings",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "hidden atrocity / major reveal",
    summary: "The bound fire elementals are emberlings: immature fire-giant lifeforms captured before they could form identity, language, and personhood.",
    currentState: "The party may know the fire is alive before they understand what kind of life has been stolen.",
    nextPressure: "Escalate from reactive fire, to living fire, to immature fire-born life, to fire-giant children-before-shape.",
    relatedActors: [
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind",
      "actor_durgrim_ashenvein"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants",
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds"
    ],
    relatedScenes: [
      "scene_emberroot_s03_forge_below_living_core",
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "emberlings",
      "major-reveal",
      "fire-giants",
      "atrocity"
    ],
    gmNotes: "This is the knife. The city does not merely exploit a people; it prevents a people from being born.",
    visibilityGates: [
      {
        id: "forge_below_choice",
        label: "Forge Below / Choice"
      }
    ],
    visibilityGate: "forge_below_choice"
  },

  {
    id: "thread_emberroot_control_vs_survival",
    title: "Control Versus Survival",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "faction pressure / political crisis",
    summary: "Forge Lords argue that control keeps people alive; Ashbound and Giants reveal that control has always decided whose lives counted.",
    currentState: "Every emergency order should ask whether it protects people, protects authority, or protects the appearance of authority.",
    nextPressure: "When the party stabilizes something, ask who benefits. When they evacuate someone, ask what authority they bypassed.",
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind"
    ],
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_forge_city"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds"
    ],
    relatedScenes: [
      "scene_emberroot_phase_zero_hot_landing",
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "control",
      "survival",
      "factions",
      "political-pressure"
    ],
    gmNotes: "This absorbs most of the old caste pressure thread but gives it a stronger question: is order saving people, or preserving the system that chose who mattered?",
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
    id: "thread_emberroot_forge_lord_legitimacy_collapse",
    title: "Forge Lord Legitimacy Collapse",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "authority pressure / consequence",
    summary: "Forge Lord authority weakens as survival depends on Ashbound routes, Ironhand truth, giant deconstruction, and Valkyrie extraction rather than command hierarchy.",
    currentState: "Durgrim can still command, but the practical basis of command is cracking.",
    nextPressure: "Show people obeying whoever can move them, open routes, explain the system, or protect the next breath.",
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind"
    ],
    relatedLocations: [
      "location_emberfall_high_forge",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    relatedScenes: [
      "scene_emberroot_high_forge_refuge",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "forge-lords",
      "legitimacy",
      "authority-collapse"
    ],
    gmNotes: "Do not make Durgrim powerless too early. Make him powerful but increasingly dependent on people his order dismissed.",
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
    id: "thread_emberroot_safe_deconstruction",
    title: "Safe Deconstruction",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "solution path / conditional alliance",
    summary: "The party can turn destruction into controlled deconstruction if they align Ironhand sequencing, Ashbound evacuation, giant force, and Valkyrie extraction.",
    currentState: "The giants are already breaking things. The question is whether the party can make that breaking survivable.",
    nextPressure: "Let Skarth’s people open terrifying routes, but only if release remains real and no one asks them to re-chain the emberlings.",
    relatedActors: [
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_thora_kara_emberroot"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedScenes: [
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s03_forge_below_living_core",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable",
      "scene_emberroot_hot_exfil"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "safe-deconstruction",
      "controlled-withdrawal",
      "giants",
      "solution-path"
    ],
    gmNotes: "This replaces the old 'join Skarth' simplicity. The real branch is not joining destruction; it is proving that release and evacuation can happen together.",
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
    id: "thread_emberroot_consent_transition",
    title: "Consent Transition",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "end-state doctrine / moral solution",
    summary: "The ethical future is not preserving the system unchanged or smashing it blindly. It is withdrawing from coerced life support through evacuation, redesign, release, and new consent.",
    currentState: "This is not a clean mechanical solution yet. It is a moral direction that must become practical under pressure.",
    nextPressure: "When a faction demands a simple answer, force the table back to the hard sequence: vent, redirect, cool, evacuate, release, then seal.",
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand",
      "actor_durgrim_ashenvein"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_high_forge"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants",
      "faction_emberroot_forge_lords"
    ],
    relatedScenes: [
      "scene_emberroot_realization_shift",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable",
      "scene_valhalla_post_act2_reflection"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "consent-transition",
      "controlled-withdrawal",
      "moral-solution"
    ],
    gmNotes: "This is the closest thing Act 2 has to a best answer, but it still costs time, authority, safety, and old certainty.",
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
    id: "thread_emberroot_root_heat_siphon",
    title: "Root Heat Siphon",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "mythic system truth / root pressure",
    summary: "The World Tree root is not causing the crisis. It is absorbing overflow the city can no longer process.",
    currentState: "The party may initially mistake root resonance for corruption or cause. Investigation should show it is burden, not origin.",
    nextPressure: "Use pulsing root heat, memory distortion, and divine discomfort to show the larger mythic cost of Emberfall forcing pressure into the root.",
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_heimdall",
      "actor_svinhild"
    ],
    relatedLocations: [
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces",
      "location_valhalla_quiet_rows",
      "location_valhalla_bifrost_platform"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedScenes: [
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_realization_shift",
      "scene_valhalla_post_act2_reflection"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "world-tree",
      "root",
      "heat-siphon",
      "mythic-cost"
    ],
    gmNotes: "This keeps the Root from becoming the villain. The city has been making the root take breaths it was never meant to take.",
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
    id: "thread_emberroot_valkyrie_strain",
    title: "We Cannot Catch Them All",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "valhalla foreshadowing / rescue limit",
    summary: "Thora and Kara show that even divine rescue systems cannot erase the cost of a civic body failing at scale.",
    currentState: "The Valkyries can retrieve, carry, witness, and prioritize. They cannot make every branch of the disaster survivable.",
    nextPressure: "Use empty hands, late arrivals, failed catches, and exhausted mounts to show rescue capacity being exceeded.",
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
      "rescue-limit",
      "system-failure"
    ],
    gmNotes: "This thread bridges Emberfall pressure into Valhalla fallout. Let strain show through action before explanation.",
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
    id: "thread_emberroot_hot_exfil_consequence_chain",
    title: "Hot Exfil Consequence Chain",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    type: "consequence / escape",
    summary: "Hot Exfil turns unresolved crises, damaged breath systems, preserved routes, and faction trust into physical escape texture.",
    currentState: "The Unsavable defines what was resolved and what was abandoned. Hot Exfil makes those choices visible under collapse pressure.",
    nextPressure: "Run as chase, skill challenge, or collapsing route sequence once one or two crisis fronts resolve and the city’s breathing worsens.",
    relatedLocations: [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    relatedFactions: [
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_fire_giants"
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
      "consequence",
      "escape"
    ],
    gmNotes: "Every unresolved crisis becomes one persistent hazard. Every resolved crisis becomes one visible benefit, cleaner route, trusted helper, or saved capacity.",
    visibilityGates: [
      {
        id: "collapse_escape",
        label: "Collapse / Escape"
      }
    ],
    visibilityGate: "collapse_escape"
  }
];