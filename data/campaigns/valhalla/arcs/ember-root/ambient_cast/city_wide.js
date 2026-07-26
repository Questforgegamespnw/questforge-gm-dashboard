export const cityWideAmbientCast = [
  {
    id: "ambient_emberroot_citywide_crisis_crowd",
    title: "Emberfall Crisis Crowd",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_forge_city"
    ],
    summary: "Messengers, runners, guards, workers, and evacuees moving through a city that is trying to pretend collapse is still logistics.",
    names: [
      "Borin",
      "Dagna",
      "Huld",
      "Istri",
      "Kornak",
      "Mira",
      "Rurik",
      "Sella"
    ],
    voices: [
      "Breathless urgency.",
      "Caste-coded certainty cracking under heat.",
      "Trying to sound official while clearly afraid.",
      "Practical, soot-covered, and out of patience."
    ],
    hookLines: [
      "Which order do you want me to disobey first?",
      "The upper lifts are locked. Of course they are.",
      "If you can fly, start carrying people.",
      "The bells stopped making sense ten minutes ago."
    ],
    interactionSeeds: [
      "A runner brings two contradictory orders from different castes.",
      "A soot-covered child points toward a blocked lower route.",
      "A guard asks whether to hold position or open the gates.",
      "A messenger collapses before finishing a warning."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what orders are circulating through the city.",
        response: "One runner says hold the lifts. Another says open them. A third says no order matters if the lower routes are already filling with smoke.",
        reveals: [
          "Forge Lord command is losing practical control.",
          "Different layers of the city are receiving contradictory survival instructions.",
          "Evacuation pressure is becoming more important than formal authority."
        ],
        relatedThreads: [
          "thread_emberroot_forge_lord_legitimacy_collapse",
          "thread_emberroot_control_vs_survival"
        ],
        tags: ["rumor-answer", "citywide", "authority-collapse", "evacuation"]
      },
      {
        prompt: "Ask what people have heard from below.",
        response: "They say the walls are making sounds. Not breaking sounds. Breathing sounds.",
        reveals: [
          "Ordinary civilians can sense that the crisis is not only structural.",
          "The city breath motif is reaching the surface before the full truth is understood."
        ],
        relatedThreads: [
          "thread_emberroot_city_breathing_wrong"
        ],
        tags: ["rumor-answer", "city-breath", "lower-works"]
      }
    ],
    relatedActors: [],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_control_vs_survival"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "room-life",
      "citywide",
      "crisis"
    ],
    gmNotes: "Use when players ask who else is nearby anywhere in Emberfall.",
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
    id: "ambient_emberroot_arrival_ashbound_civilians",
    title: "Arrival: Ashbound Civilians in Immediate Danger",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_forge_city",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    summary: "Families, furnace workers, trapped elders, and burned evacuees caught in the first hot landing crisis.",
    names: [
      "Astri",
      "Bekk",
      "Dorna",
      "Hildi",
      "Mav",
      "Nora",
      "Oskar",
      "Runa"
    ],
    voices: [
      "Panic sharpened into practical pleading.",
      "Protective, direct, and too close to death for polite speech.",
      "Shouting names of missing people over the roar.",
      "Workers who know the routes but cannot move everyone."
    ],
    hookLines: [
      "Please—over here!",
      "My brother is still inside!",
      "We told them it was too hot!",
      "Do not send us back down there!"
    ],
    interactionSeeds: [
      "A worker shoves a child toward the party and turns back for someone else.",
      "A family is trapped behind heat shimmer and failing metal.",
      "A wounded crew chief knows a route but refuses to leave without elders.",
      "A panicked group blocks the fastest path unless calmed or redirected."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what was wrong before the rupture.",
        response: "It was not only hotter. It had a rhythm. Like something behind the walls was trying to breathe through stone.",
        reveals: [
          "The Ashbound experienced the Lower Works as something alive or semi-alive before officials named it.",
          "The crisis had warning signs before the party arrived."
        ],
        relatedThreads: [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_fire_is_people"
        ],
        tags: ["rumor-answer", "ashbound", "city-breath", "lived-truth"]
      },
      {
        prompt: "Ask why they refuse to go back down.",
        response: "Because down there, orders mean bodies. If they seal the wrong door, we become the pressure release.",
        reveals: [
          "Emergency containment has uneven caste consequences.",
          "The lower city understands shutdown and sealing as human-cost decisions."
        ],
        relatedThreads: [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_caste_layers_and_survival_authority"
        ],
        tags: ["rumor-answer", "caste", "evacuation", "containment"]
      }
    ],
    relatedActors: [
      "actor_bruni_coalhand",
      "actor_ashbound_defender",
      "actor_thora_kara_emberroot"
    ],
    relatedFactions: [
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "arrival",
      "civilians",
      "ashbound",
      "hot-landing"
    ],
    gmNotes: "Use during Hot Landing and the Evacuate Civilians branch.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "ambient_emberroot_arrival_ironhand_emergency_crews",
    title: "Arrival: Ironhand Emergency Crews",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_forge_city",
      "location_emberfall_midworks",
      "location_emberfall_chainways"
    ],
    summary: "Engineers and rune crews trying to stabilize failing infrastructure while arguing over the cause.",
    names: [
      "Arvik",
      "Durn",
      "Elska",
      "Fjori",
      "Hann",
      "Marn"
    ],
    voices: [
      "Fast technical commands under fear.",
      "Correction-as-survival.",
      "Arguing because each reading is bad in a different way.",
      "Trying to make a disaster into a solvable problem."
    ],
    hookLines: [
      "That support is going!",
      "Reinforce the upper chain!",
      "If this span drops, we lose the route!",
      "Stop arguing and brace it!"
    ],
    interactionSeeds: [
      "A crew needs ten seconds of protection to lock a chain brace.",
      "Two engineers demand incompatible fixes.",
      "A rune panel gives three contradictory readings.",
      "A construct accepts commands from the wrong priority queue."
    ],
    rumorAnswers: [
      {
        prompt: "Ask what the readings mean.",
        response: "They do not agree because they are not measuring one failure. Intake is high, venting is late, and pressure is moving the wrong direction.",
        reveals: [
          "The disaster is systemic rather than a single breach.",
          "Heat is entering more cleanly than it is leaving.",
          "Emergency fixes may displace danger instead of solving it."
        ],
        relatedThreads: [
          "thread_emberroot_city_breathing_wrong",
          "thread_emberroot_safe_deconstruction"
        ],
        tags: ["rumor-answer", "ironhand", "diagnosis", "pressure"]
      },
      {
        prompt: "Ask whether the Core is causing the crisis.",
        response: "No. Or not exactly. Something below is absorbing more than it should. If that fails, the failure comes back upward.",
        reveals: [
          "The Lower Works may be containing or absorbing catastrophe rather than simply causing it.",
          "This points toward the root/overflow truth without fully explaining it."
        ],
        relatedThreads: [
          "thread_emberroot_root_heat_siphon",
          "thread_emberroot_city_breathing_wrong"
        ],
        tags: ["rumor-answer", "lower-works", "root-siphon", "partial-truth"]
      }
    ],
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedThreads: [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_city_breathing_wrong"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "arrival",
      "engineers",
      "ironhand",
      "structure"
    ],
    gmNotes: "Use during Hot Landing, Stabilize Structure, and Thread A.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "ambient_emberroot_arrival_forge_lord_command",
    title: "Arrival: Forge Lord Emergency Command",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_forge_city",
      "location_emberfall_high_forge",
      "location_emberfall_chainways"
    ],
    summary: "Command staff, guards, and officers trying to treat the hot landing disaster as an obedience problem.",
    names: [
      "Agnar",
      "Belda",
      "Dori",
      "Frann",
      "Grimholt",
      "Kelda"
    ],
    voices: [
      "Controlled and clipped.",
      "Orders before compassion.",
      "Trying to sound calm enough to make panic illegal.",
      "Authority fraying at the edges."
    ],
    hookLines: [
      "Hold your position!",
      "This sector remains under command authority.",
      "If evacuation begins without order, more die.",
      "Do not mistake noise for collapse."
    ],
    interactionSeeds: [
      "A guard blocks a route until someone with authority clears it.",
      "Command prioritizes equipment over workers.",
      "A messenger carries two conflicting orders.",
      "A Forge Lord aide quietly admits the lower reports are worse than announced."
    ],
    rumorAnswers: [
      {
        prompt: "Ask why evacuation is delayed.",
        response: "Unauthorized evacuation kills more people than heat. Movement must remain classified, sequenced, and approved.",
        reveals: [
          "Forge Lord command is treating survival as a control problem.",
          "They may use real danger to justify delaying lower-tier movement.",
          "Authority is prioritizing order even as order becomes impractical."
        ],
        relatedThreads: [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_forge_lord_legitimacy_collapse"
        ],
        tags: ["rumor-answer", "forge-lords", "command", "control"]
      },
      {
        prompt: "Ask what the bound fires are.",
        response: "Unstable thermal matter. Non-civic flame. Dangerous material that becomes useful only when properly governed.",
        reveals: [
          "Forge Lord language denies personhood through classification.",
          "Official terminology hides moral reality behind civic categories."
        ],
        relatedThreads: [
          "thread_emberroot_fire_is_people",
          "thread_emberroot_stolen_emberlings"
        ],
        tags: ["rumor-answer", "forge-lords", "personhood-denial", "classification"]
      }
    ],
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_forge_guard"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords"
    ],
    relatedThreads: [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_control_vs_survival"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "arrival",
      "forge-lords",
      "command"
    ],
    gmNotes: "Use to make authority present even when Durgrim is not on camera.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  {
    id: "ambient_emberroot_arrival_fire_giant_raiders",
    title: "Arrival: Fire Giant Raiders",
    type: "ambient-cast",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_ember_root",
    status: "available",
    locationIds: [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    summary: "Fire giant raiders targeting stabilizers, housings, cage-locks, and containment routes rather than random victims.",
    names: [
      "Agaun",
      "Brakka",
      "Cairn",
      "Drog",
      "Marnak",
      "Surtal"
    ],
    voices: [
      "Calm inside chaos.",
      "Commands aimed at structures, locks, and housings.",
      "Anger disciplined into demolition.",
      "Refusing to call captive fire a resource."
    ],
    hookLines: [
      "Break the housing!",
      "Leave the runners. Strike the locks!",
      "Those are not theirs to bind!",
      "Open the breath-cage!"
    ],
    interactionSeeds: [
      "A raider hammers a stabilizer instead of attacking the party.",
      "A giant deliberately redirects others away from civilians and toward containment hardware.",
      "A giant points others toward a chain anchor or cage-lock.",
      "A scout retreats once the housing is doomed."
    ],
    rumorAnswers: [
      {
        prompt: "Ask why they are breaking stabilizers.",
        response: "Because that is where the breath is chained.",
        reveals: [
          "The giants are targeting containment infrastructure.",
          "They recognize the system as captivity, not civic machinery.",
          "Their attacks can become controlled deconstruction if trust exists."
        ],
        relatedThreads: [
          "thread_emberroot_safe_deconstruction",
          "thread_emberroot_fire_is_people"
        ],
        tags: ["rumor-answer", "fire-giants", "containment", "safe-deconstruction"]
      },
      {
        prompt: "Ask whether they intend to kill civilians.",
        response: "Move them, then. We strike cages. Your lords built cages under homes.",
        reveals: [
          "The giants may accept evacuation as meaningful if it does not become delay.",
          "Civilian risk comes from the city placing containment infrastructure beneath lived space."
        ],
        relatedThreads: [
          "thread_emberroot_control_vs_survival",
          "thread_emberroot_consent_transition"
        ],
        tags: ["rumor-answer", "fire-giants", "evacuation", "moral-conflict"]
      }
    ],
    relatedActors: [
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard",
      "actor_skarth_firebrand"
    ],
    relatedFactions: [
      "faction_emberroot_fire_giants"
    ],
    relatedThreads: [
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_safe_deconstruction"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "arrival",
      "fire-giants",
      "raiders"
    ],
    gmNotes: "Use during Stop Forge Overlord, Thread B, and Break the Chains.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  },
  
];
