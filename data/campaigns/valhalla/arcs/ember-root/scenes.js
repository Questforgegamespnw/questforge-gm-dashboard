export const scenes = [
  {
    "id": "scene_emberroot_burning_front",
    "title": "Arrival — The Burning Front",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "intro / crisis",
    "priority": "high",
    "trigger": "Start of Act 2 mission deployment.",
    "summary": "Players arrive into immediate crisis with no setup; the problem is already happening.",
    "playerFacing": "Fires are already spreading. Civilians are in danger. Defenses are failing. There is no approach, only arrival.",
    "gmTruth": "This is triage, not salvation.",
    "involvedActors": [],
    "involvedLocations": [],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_engineers",
      "faction_emberroot_workers"
    ],
    "clues": [
      "Too many simultaneous failures.",
      "Not enough time.",
      "Caste voices disagree immediately."
    ],
    "outcomes": [
      "Players understand the arc starts under pressure.",
      "First Clock/Insight/Core readings begin."
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_first_choices",
        "scene_emberroot_forge_below"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Opening pressure burst",
          "speaker": "tri_voice",
          "line": "Forge Lord: “Hold it!” / Engineer: “That’s wrong!” / Worker: “We’re leaving!”",
          "purpose": "Immediately establish caste conflict."
        }
      ]
    },
    "pressure": "The world does not wait for them.",
    "runNote": "No lore dump. Start with active danger.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "burning-front",
      "crisis"
    ],
    "gmNotes": "Act 2 begins with pressure, not mystery."
  },
  {
    "id": "scene_emberroot_first_choices",
    "title": "The First Choices",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "choice / investigation",
    "priority": "medium",
    "trigger": "After initial arrival crisis or when players choose where to focus.",
    "summary": "Players begin choosing who to save, what to protect, and where to commit resources.",
    "playerFacing": "Every action pulls against another need. Saving one area weakens another. Helping one group delays another.",
    "gmTruth": "There is no perfect solution, only tradeoff.",
    "involvedActors": [],
    "involvedLocations": [],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_engineers",
      "faction_emberroot_workers"
    ],
    "clues": [
      "Threads A/B/C can be explored.",
      "Order matters.",
      "C first can reduce Clock once and boost Insight."
    ],
    "outcomes": [
      "Investigation Clock advances.",
      "Insight may improve.",
      "Caste alignment begins forming."
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_forge_below"
      ],
      "branches": [],
      "scriptedMoments": []
    },
    "pressure": "Every delay is escalation.",
    "runNote": "Track thread order and increase Clock for explored threads/delay.",
    "tags": [
      "valhalla",
      "ember-root",
      "choice",
      "investigation",
      "threads"
    ],
    "gmNotes": "This is where the party starts learning that action equals tradeoff."
  },
  {
    "id": "scene_emberroot_forge_below",
    "title": "The Forge Below",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "encounter / system-crisis",
    "priority": "high",
    "trigger": "Players reach the Living Core / containment system.",
    "summary": "Run as a round loop: Core reacts, Giants act, players choose one priority, update Stability.",
    "playerFacing": "The Core is not attacking. It is failing. Chains strain. Pillars flicker. Heat builds. Something else is interfering.",
    "gmTruth": "The Core is a stabilizer under impossible stress, not the villain.",
    "involvedActors": [],
    "involvedLocations": [
      "location_emberroot_forge_below"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_emberroot_engineers"
    ],
    "clues": [
      "The Core reacts, not attacks.",
      "Giants target pillars and chains.",
      "Player priorities are mutually exclusive."
    ],
    "outcomes": [
      "Core Stability changes.",
      "Insight may improve.",
      "Giant timer may trigger instability spike."
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_the_choice"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Scene start",
          "speaker": "gm",
          "line": "You can’t do all of this.",
          "purpose": "Force priority selection."
        },
        {
          "timing": "Transition",
          "speaker": "gm",
          "line": "The system reacts to your choices.",
          "purpose": "Move to The Choice."
        }
      ]
    },
    "pressure": "The party is juggling a failing machine while someone actively breaks it.",
    "runNote": "Use table_emberroot_core_reactions and tracker_emberroot_giant_timer.",
    "tags": [
      "valhalla",
      "ember-root",
      "forge-below",
      "core",
      "giants"
    ],
    "gmNotes": "Players meaningfully affect one priority per round."
  },
  {
    "id": "scene_emberroot_the_choice",
    "title": "The Choice",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "decision",
    "priority": "high",
    "trigger": "After Forge Below reaches decision point, critical failure, or time pressure peak.",
    "summary": "Players choose Reinforce, Shutdown, Collapse, or Release under Clock/Insight/Core pressure.",
    "playerFacing": "Forge Lord, Engineer, and Worker voices collide. The system cannot wait. Four options stand in front of you.",
    "gmTruth": "They are choosing what survives, not what wins.",
    "involvedActors": [],
    "involvedLocations": [
      "location_emberroot_forge_below"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_engineers",
      "faction_emberroot_workers"
    ],
    "clues": [
      "High Insight reveals costs.",
      "Core State modifies outcome.",
      "Clock determines urgency."
    ],
    "outcomes": [
      "Decision chosen.",
      "Ragnarok Meter increase later applies.",
      "The Unsavable is prepared."
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_the_unsavable"
      ],
      "branches": [
        {
          "condition": "Reinforce",
          "nextScene": "scene_emberroot_the_unsavable",
          "note": "Hold system at cost; +2 Ragnarok later."
        },
        {
          "condition": "Shutdown",
          "nextScene": "scene_emberroot_the_unsavable",
          "note": "Best balanced option; +1 Ragnarok later."
        },
        {
          "condition": "Collapse",
          "nextScene": "scene_emberroot_the_unsavable",
          "note": "Save people over system; +2 Ragnarok later."
        },
        {
          "condition": "Release",
          "nextScene": "scene_emberroot_the_unsavable",
          "note": "Let Core become something else; +3 Ragnarok later."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Decision point",
          "speaker": "gm",
          "line": "The moment you decide—the system reacts.",
          "purpose": "Hard cut to consequence."
        }
      ]
    },
    "pressure": "No perfect options and no time to drift.",
    "runNote": "Use reference_emberroot_the_choice.",
    "tags": [
      "valhalla",
      "ember-root",
      "choice",
      "council",
      "decision"
    ],
    "gmNotes": "If High Insight, say: You understand what each of these will cost."
  },
  {
    "id": "scene_emberroot_the_unsavable",
    "title": "The Unsavable",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "crisis / consequence",
    "priority": "high",
    "trigger": "Immediately after The Choice.",
    "summary": "Force loss. Clock sets crisis count; players resolve one crisis or two with High Insight; the rest fail.",
    "playerFacing": "It all happens at once. People scream, structures fail, lava spreads, enemies push, and the Core flares.",
    "gmTruth": "This is the cost of their decision.",
    "involvedActors": [],
    "involvedLocations": [],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_engineers",
      "faction_emberroot_workers"
    ],
    "clues": [
      "Clock determines crisis count.",
      "High Insight lets players resolve +1 crisis.",
      "Everything else resolves without them."
    ],
    "outcomes": [
      "Resolved and unresolved crisis counts are established.",
      "Hot Exfil hazards and benefits are generated."
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_hot_exfil"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Start",
          "speaker": "gm",
          "line": "Pick one.",
          "purpose": "Force immediate crisis choice."
        },
        {
          "timing": "After chosen crisis resolves",
          "speaker": "gm",
          "line": "You hear it before you see it—something else fails.",
          "purpose": "Auto-fail unresolved crises."
        },
        {
          "timing": "End",
          "speaker": "gm",
          "line": "You saved who you could. But not all of them.",
          "purpose": "Land the Act 2 theme."
        }
      ]
    },
    "pressure": "Loss is now explicit and unavoidable.",
    "runNote": "Do not explain too much or offer perfect options.",
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "crisis",
      "loss"
    ],
    "gmNotes": "This is the hardest thematic section. Keep momentum."
  },
  {
    "id": "scene_emberroot_hot_exfil",
    "title": "Hot Exfil",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "escape / consequence",
    "priority": "high",
    "trigger": "After The Unsavable establishes resolved/unresolved crises.",
    "summary": "Players escape through the consequences of their decisions in real time.",
    "playerFacing": "The city does not collapse behind you. It collapses with you inside it.",
    "gmTruth": "Every unresolved crisis becomes a persistent exfil hazard; every resolved crisis becomes a stability benefit.",
    "involvedActors": [],
    "involvedLocations": [],
    "involvedFactions": [
      "faction_valkyries"
    ],
    "clues": [
      "Hazards map directly to unresolved crises.",
      "Benefits map directly to resolved crises.",
      "Core State changes hazard behavior."
    ],
    "outcomes": [
      "Players escape, but the cost is visible.",
      "Valkyrie strain and later Valhalla fallout are seeded."
    ],
    "forwardPath": {
      "upNext": [
        "scene_valhalla_post_act2_reflection"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Valkyrie extraction window",
          "speaker": "valkyrie",
          "line": "I need space to land!",
          "purpose": "Make extraction active, not automatic."
        },
        {
          "timing": "Final pull",
          "speaker": "valkyrie",
          "line": "Now—or never.",
          "purpose": "Finish with high momentum."
        }
      ]
    },
    "pressure": "Surviving the consequences, not simply escaping.",
    "runNote": "Run 2–4 rounds max. Introduce hazard, require action, escalate.",
    "tags": [
      "valhalla",
      "ember-root",
      "hot-exfil",
      "escape",
      "consequence"
    ],
    "gmNotes": "Use table_emberroot_exfil_hazards."
  },
  {
    "id": "scene_valhalla_post_act2_reflection",
    "title": "Valhalla Reflection — After EmberRoot",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "fallout / hub",
    "priority": "medium",
    "trigger": "After Hot Exfil and return to Valhalla.",
    "summary": "Show aftermath quietly. Hub reflection replaces field chaos.",
    "playerFacing": "The noise of collapse is gone, but not its weight.",
    "gmTruth": "Hub equals quiet reflection; field equals loud pressure.",
    "involvedActors": [
      "actor_sven",
      "actor_heimdall",
      "actor_svinhild"
    ],
    "involvedLocations": [
      "location_valhalla_mead_hall",
      "location_valhalla_quiet_rows",
      "location_valhalla_heimdalls_threshold"
    ],
    "involvedFactions": [
      "faction_valkyries"
    ],
    "clues": [
      "Worker survivor: “They said it would hold…”",
      "Engineer: “We were close…”",
      "Valkyrie: “…not close enough.”"
    ],
    "outcomes": [
      "Players carry consequence back to Valhalla.",
      "Ragnarok Meter change can be applied.",
      "Valkyrie strain and Quiet Rows can surface."
    ],
    "forwardPath": {
      "upNext": [],
      "branches": [],
      "scriptedMoments": []
    },
    "pressure": "The cost follows them home.",
    "runNote": "Quiet, not chaotic. Let silence do work.",
    "tags": [
      "valhalla",
      "ember-root",
      "fallout",
      "hub",
      "reflection"
    ],
    "gmNotes": "This is where visible consequence becomes emotional consequence."
  },
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
