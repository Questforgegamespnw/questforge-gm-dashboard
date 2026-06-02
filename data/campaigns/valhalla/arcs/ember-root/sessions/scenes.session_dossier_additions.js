export const scenes = [
  {
    "id": "scene_emberroot_s01_city_burns_opening",
    "title": "Session 1 — The City Burns",
    "session": "session_01_the_city_burns",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "opening / crisis",
    "priority": "high",
    "trigger": "Act 2 begins; Bifrost drops the party into Emberfall.",
    "summary": "Introduce multi-objective pressure and teach that helping one thing means losing another.",
    "playerFacing": "The Bifrost drop tears into Emberfall too hot, too late, and too close to active collapse.",
    "gmTruth": "The players are assigning losses, not preventing loss.",
    "involvedActors": [
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_forge_city"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Fires resist suppression.",
      "Heat behaves strangely.",
      "Too many simultaneous objectives."
    ],
    "outcomes": [
      "Players save something.",
      "Something else fails."
    ],
    "pressure": "Immediate triage.",
    "runNote": "Do not ask what they do. Ask who they are going for.",
    "reference": "library/sessions/session_01_the_city_burns.md",
    "tags": [
      "valhalla",
      "ember-root",
      "session-1",
      "city-burns"
    ]
  },
  {
    "id": "scene_emberroot_s02_breaking_point",
    "title": "Session 2 — The Breaking Point",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation / transition",
    "priority": "high",
    "trigger": "After Session 1 partial stabilization.",
    "summary": "Transition from reaction to investigation and reveal that the problem is systemic, not external.",
    "playerFacing": "The city still burns, but now it breathes between failures.",
    "gmTruth": "Everything is causing this. The Root amplifies a system already past safe limits.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_durgrim_ashenvein",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Systems fail independently.",
      "Giants exploit rather than cause.",
      "Root resonance amplifies energy."
    ],
    "outcomes": [
      "Investigation path sets Insight and Clock effects.",
      "Players are pointed toward the Core Furnace."
    ],
    "pressure": "Confusion with escalating cost.",
    "runNote": "Let confusion exist. Do not fully confirm the truth.",
    "reference": "library/sessions/session_02_the_breaking_point.md",
    "tags": [
      "valhalla",
      "ember-root",
      "session-2",
      "breaking-point"
    ]
  },
  {
    "id": "scene_emberroot_s02_thread_a_system_failure",
    "title": "Thread A — System Failure",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation thread",
    "priority": "medium",
    "trigger": "Players investigate Midworks, constructs, runes, or forge outputs.",
    "summary": "Shows that systems are failing independently.",
    "playerFacing": "Constructs misfire, runes overload, and output systems contradict each other.",
    "gmTruth": "The system is beyond safe operating limits.",
    "involvedLocations": [
      "location_emberfall_midworks"
    ],
    "clues": [
      "No single failure point.",
      "Systems are overloaded, not corrupted."
    ],
    "outcomes": [
      "A-only path makes players think the system is failing.",
      "A+C path begins real understanding."
    ],
    "pressure": "Technical contradiction.",
    "runNote": "Use Overload Zone or Construct Malfunction.",
    "reference": "library/sessions/session_02_branching_investigations.md",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-a",
      "system-failure"
    ]
  },
  {
    "id": "scene_emberroot_s02_thread_b_giant_interference",
    "title": "Thread B — Fire Giant Interference",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation thread / optional combat",
    "priority": "medium",
    "trigger": "Players investigate external attacks, scouting parties, or enemy movements.",
    "summary": "Tempting wrong-problem path: giants are exploiting the failure, not causing it.",
    "playerFacing": "Fire giant forces advance tactically through the instability.",
    "gmTruth": "They are opportunists, not the source.",
    "involvedActors": [
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Giants benefit from instability.",
      "They move with intent, not chaos."
    ],
    "outcomes": [
      "Can gain intel/tactical advantage.",
      "Costs +2 Clock if pursued as fight."
    ],
    "pressure": "Do we fight or focus?",
    "runNote": "Do not let this become the assumed main plot.",
    "reference": "library/sessions/session_02_branching_investigations.md",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-b",
      "fire-giants"
    ]
  },
  {
    "id": "scene_emberroot_s02_thread_c_root_resonance",
    "title": "Thread C — Root Resonance",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation thread / truth path",
    "priority": "high",
    "trigger": "Players follow heat fluctuations, resonance tunnels, or deep energy pulses.",
    "summary": "Points toward the actual source: the Root amplifies energy and does not corrupt.",
    "playerFacing": "Environmental pulses deepen toward something below the city.",
    "gmTruth": "The Root amplifies energy. It does not corrupt.",
    "involvedLocations": [
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "clues": [
      "Deep resonance.",
      "Amplification pattern.",
      "Not malicious corruption."
    ],
    "outcomes": [
      "+1 Clock.",
      "If early, gives Forge Below navigation advantage and Core warning."
    ],
    "pressure": "The true path is costly but clarifying.",
    "runNote": "C first is optimal, not mandatory.",
    "reference": "library/sessions/session_02_branching_investigations.md",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-c",
      "root-resonance"
    ]
  },
  {
    "id": "scene_emberroot_s03_forge_below_living_core",
    "title": "Session 3 — Forge Below / Living Core",
    "session": "session_03_forge_below",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "system crisis",
    "priority": "high",
    "trigger": "Players descend to the Core Furnace.",
    "summary": "Reframe the Core from boss fight to living containment system under crisis.",
    "playerFacing": "The Core is alive, contained, ancient, and reacting under pressure.",
    "gmTruth": "The Core is not the enemy. It is holding the bomb.",
    "involvedLocations": [
      "location_emberfall_core_furnace"
    ],
    "involvedActors": [
      "actor_magma_reaver",
      "actor_cinder_channeler"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Regulator pillars matter.",
      "Chains are containment.",
      "Core reactions are pressure responses."
    ],
    "outcomes": [
      "Core State is set for Council and Unsavable.",
      "Strike Team outcome alters later severity."
    ],
    "pressure": "Stabilize, stop giants, or engage Core — not all three.",
    "runNote": "Run as system crisis engine, not boss arena.",
    "reference": "library/sessions/session_03_forge_below_living_core.md",
    "tags": [
      "valhalla",
      "ember-root",
      "session-3",
      "forge-below"
    ]
  },
  {
    "id": "scene_emberroot_s03_break_the_chains",
    "title": "Break the Chains",
    "session": "session_03_forge_below",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "timer encounter / escalation",
    "priority": "high",
    "trigger": "During Forge Below when players stabilize or hesitate.",
    "summary": "Skarth’s strike team tries to remove constraints from the Core.",
    "playerFacing": "A regulator pillar fractures and chain tension shifts — something external is interfering.",
    "gmTruth": "Skarth is ensuring the disaster reaches its natural conclusion.",
    "involvedActors": [
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Giants target pillars/chains, not players.",
      "Their goal is release."
    ],
    "outcomes": [
      "Stopped = Core more stable.",
      "Partial = Mixed Core.",
      "Failure = instability spike and harsher later scenes."
    ],
    "pressure": "Timer-based objective: arrive, destabilize, partial rupture, catastrophic break.",
    "runNote": "Skarth is felt, not physically present.",
    "reference": "library/sessions/session_03_forge_below_living_core.md",
    "tags": [
      "valhalla",
      "ember-root",
      "strike-team",
      "skarth"
    ]
  },
  {
    "id": "scene_emberroot_s04_molten_council",
    "title": "Session 4 — The Choice / Molten Council",
    "session": "session_04_the_choice",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "decision / council",
    "priority": "high",
    "trigger": "After Forge Below resolves Core State and Skarth pressure.",
    "summary": "Players are the only ones who understand enough to choose: Reinforce, Shutdown, Collapse, Release, or rare Join Skarth branch.",
    "playerFacing": "The factions accuse, plead, and collapse into the same impossible choice.",
    "gmTruth": "The players are choosing what survives, not what wins.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Insight affects option clarity.",
      "Core State affects tone.",
      "Clock affects urgency."
    ],
    "outcomes": [
      "Final Act 2 choice locks.",
      "Hot Exfil / Unsavable trigger immediately."
    ],
    "pressure": "No backsies and no perfect clarification.",
    "runNote": "Skarth reframes accusation; he does not defend himself.",
    "reference": "library/sessions/session_04_the_choice_molten_council.md",
    "tags": [
      "valhalla",
      "ember-root",
      "session-4",
      "choice"
    ]
  },
  {
    "id": "scene_emberroot_s05_unsavable",
    "title": "Session 5 — The Unsavable",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "consequence / crisis",
    "priority": "high",
    "trigger": "Immediately after The Choice.",
    "summary": "Players experience what they chose not to save; simultaneous crises resolve around them.",
    "playerFacing": "Every system, structure, and failure demands action now.",
    "gmTruth": "Their choice determined what breaks first, not whether something breaks.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind"
    ],
    "involvedLocations": [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Too many failures at once.",
      "Core State changes crisis behavior.",
      "High Insight grants mitigation, not salvation."
    ],
    "outcomes": [
      "One or two crises resolved.",
      "Other crises cascade.",
      "Hot Exfil begins."
    ],
    "pressure": "Pick one. The rest fall.",
    "runNote": "Show all stakes, force commitment, then resolve ignored crises without them.",
    "reference": "library/sessions/session_05_the_unsavable.md",
    "tags": [
      "valhalla",
      "ember-root",
      "session-5",
      "unsavable"
    ]
  }
];
