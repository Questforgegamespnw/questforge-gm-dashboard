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
    relatedActors: [],
    relatedFactions: [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    relatedThreads: [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_caste_pressure"
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
    relatedActors: [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedThreads: [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_correct_interpretation_under_pressure"
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
    relatedActors: [
      "actor_durgrim_ashenvein",
      "actor_forge_guard"
    ],
    relatedFactions: [
      "faction_emberroot_forge_lords"
    ],
    relatedThreads: [
      "thread_emberroot_caste_pressure",
      "thread_emberroot_caste_existed_before_arrival"
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
    summary: "Fire giant raiders and lesser elemental pressure targeting stabilizers, housings, and routes rather than random victims.",
    names: [
      "Agaun",
      "Brakka",
      "Cairn",
      "Drog",
      "Marnak",
      "Surtal"
    ],
    voices: [
      "Calm in chaos.",
      "Admiring the scale of failure.",
      "Commands aimed at structures, not civilians.",
      "Treating collapse as revelation."
    ],
    hookLines: [
      "Break the housing!",
      "You call this failure?",
      "It is feeding the surge!",
      "Why would you stop this?"
    ],
    interactionSeeds: [
      "A raider hammers a stabilizer instead of attacking the party.",
      "A lesser elemental pours through a breach the giants opened.",
      "A giant points others toward a chain anchor.",
      "A scout retreats once the structure is doomed."
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
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_mirror"
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
  {
    id: "ambient_emberroot_malfunctioning_constructs",
    title: "Arrival: Malfunctioning Constructs and Loose Elementals",
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
    summary: "Forge constructs, heat regulators, and fire elementals behaving like symptoms of overload rather than a clean enemy wave.",
    names: [
      "Unit 3",
      "Unit 8",
      "Line-Brace",
      "Gate-Keeper",
      "Furnace Impulse"
    ],
    voices: [
      "Grinding command loops.",
      "Warning bells that no longer agree.",
      "Fire answering pressure changes.",
      "Metal trying to obey impossible instructions."
    ],
    hookLines: [
      "Priority conflict. Hold. Evacuate. Hold.",
      "Heat threshold exceeded.",
      "Command source invalid.",
      "The fire is moving sideways."
    ],
    interactionSeeds: [
      "A construct blocks civilians because its route order never updated.",
      "A fire elemental erupts from a regulator vent.",
      "A repair automaton starts welding the wrong support.",
      "A player can redirect the construct, but it costs time."
    ],
    relatedActors: [
      "actor_ironhand_engineer"
    ],
    relatedFactions: [
      "faction_emberroot_ironhand_guilds"
    ],
    relatedThreads: [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_correct_interpretation_under_pressure"
    ],
    tags: [
      "valhalla",
      "ember-root",
      "ambient",
      "arrival",
      "constructs",
      "elementals",
      "overload"
    ],
    gmNotes: "Use to show systemic failure before the players understand it.",
    visibilityGates: [
      {
        id: "arrival_hot_zone",
        label: "Arrival / Hot Zone"
      }
    ],
    visibilityGate: "arrival_hot_zone"
  }
];
