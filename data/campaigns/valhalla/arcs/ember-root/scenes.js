// Questforge GM Cockpit Dashboard — EmberRoot Scenes
// -----------------------------------------------------------------------------
// Navigation note:
// - This is a JavaScript module, so comments and VS Code //#region folding are safe.
// - Keep this file data-only. Do not add runtime logic here.
// - House convention: quoted keys for campaign data arrays; unquoted keys for app code.
//
// Arc spine revision:
// Triage → Interpretation → Coalition → Cost of Withdrawal.
// Realization Shift is intentionally no longer a scene in this file; make it a
// hairpin fireable moment keyed to when the table connects Root burden,
// lower backflow, giant targeting, and Forge Lord Crown Preservation.
// -----------------------------------------------------------------------------

export const scenes = [
  {
    "id": "scene_emberroot_phase_zero_hot_landing",
    "title": "Phase Zero — Hot Landing",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "arrival shock / forced triage",
    "priority": "high",
    "trigger": "",
    "summary": "The party lands inside an active disaster with three immediate nearby crises: civilians in danger, a collapsing structure, and fire giants striking housings and pipeways with terrifying purpose.",
    "playerFacing": "For one breath, there is nothing but rainbow-white light and the sensation of floating inside a silent fall. Emberfall burns somewhere below the veil, vast and unreadable. Then the Bifrost sputters, the color snaps out, and gravity takes you all at once.",
    "gmTruth": "This scene teaches the Act 2 rule: the party can save something, but not everything.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver",
      "actor_ashbound_defender",
      "actor_forge_guard",
      "actor_ironhand_engineer"
    ],
    "involvedLocations": [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces",
      "location_emberfall_midworks"
    ],
    "involvedFactions": [
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants",
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "The disaster is already underway before the party arrives.",
      "Every branch is an active objective, not scenery.",
      "The giants' visible target selection matters: housings, anchors, pipeways, and stabilizers, not random civilians."
    ],
    "outcomes": [
      "If the party lands together, one crisis can be fully addressed.",
      "If the party splits, two crisis zones can be meaningfully addressed with Valkyrie support.",
      "At least one crisis receives no direct support and worsens.",
      "The ignored crisis returns during coalition planning, decommission, or exfil."
    ],
    "pressure": "Immediate sensory overload and forced prioritization.",
    "runNote": "Present the three separated landing crises. The party may land together and fully address one crisis, or split with Valkyrie support to meaningfully address two. A third pressure always worsens and returns later as consequence.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "hot-landing",
      "forced-triage",
      "session-1"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_arrival_evacuate_civilians",
        "scene_emberroot_arrival_stabilize_structure",
        "scene_emberroot_arrival_stop_forge_overlord",
        "scene_emberroot_high_forge_refuge"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Bifrost failure",
          "speaker": "GM",
          "line": "For half a breath, you are still floating. Your eyes lock on each other in the rainbow-white silence, and for one impossible second nothing has realized the Bifrost is gone. Then gravity remembers.",
          "purpose": "Show that this is not a normal clean insertion."
        },
        {
          "timing": "Overloaded descent",
          "speaker": "GM",
          "line": "Thora and Kara scream down through the broken light after you, their horses slam under your falling weight, wings flaring hard as they catch riders, armor, packs, and panic all at once. The horses can carry you, but they cannot climb.",
          "purpose": "Make the landing choice urgent and constrained."
        },
        {
          "timing": "Disaster panorama",
          "speaker": "GM",
          "line": "Below you, Emberfall is already dying in pieces. Civilians trapped behind white-orange heat, chainways buckle under fleeing crowds, command lines choke evacuation routes, and fire giants hammer stabilizer housings with terrible purpose.",
          "purpose": "Present the three branch pressures."
        },
        {
          "timing": "Landing choice",
          "speaker": "Thora",
          "line": "Where are we landing?!",
          "purpose": "Force the party to choose a landing zone while still falling."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_valkyrie_strain"
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "outcomeShift": {
      "question": "Which crisis receives the party's first real attention?",
      "levers": [
        "Land together and fully address one crisis.",
        "Split with Valkyrie support to address two crisis zones.",
        "Prioritize people, routes, or housing/pipeway strikes."
      ],
      "consequences": [
        "The supported crisis becomes a later advantage.",
        "The unsupported crisis becomes later consequence texture.",
        "The party immediately learns that Act 2 choices create visible costs."
      ]
    }
  },
  {
    "id": "scene_emberroot_arrival_evacuate_civilians",
    "title": "Crisis A — Evacuate Civilians",
    "session": "session_01_the_city_burns",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "arrival branch / civilian rescue",
    "priority": "high",
    "trigger": "",
    "summary": "The party can prioritize trapped workers, families, and evacuation flow.",
    "playerFacing": "Thora and Kara drive the failing descent toward a civilian pocket where the fire has not fully closed yet. You hit hard into a shower of sparks and hot metal beside a crowd already breaking apart — workers dragging the injured, families split across catwalks, a mother and child stranded on a crumbling platform, and people still trapped behind heat, debris, and jammed machinery. No one here needs explanation. They need hands, now.",
    "gmTruth": "Saving people matters, but it costs time and may worsen routes or system state.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_bruni_coalhand",
      "actor_ashbound_defender"
    ],
    "involvedLocations": [
      "location_emberfall_forge_city",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_ashbound",
      "faction_emberroot_forge_lords"
    ],
    "clues": [
      "This rescue zone contains several problems at once: trapped people, spreading fire, unstable footing, blocked exits, and panic.",
      "Clearing routes can save more people than pulling only the nearest visible victim.",
      "Ignoring this branch means real named and visible casualties, not abstract losses."
    ],
    "outcomes": [
      "The party can save a meaningful group of civilians here, but not every trapped person.",
      "If the party acts decisively, survivors reach the High Forge and Ashbound trust improves.",
      "If the party clears the route but cannot save everyone caught behind it, the rescue succeeds at a cost.",
      "Whatever is not handled here becomes part of later consequence reporting."
    ],
    "pressure": "Human cost in immediate view.",
    "runNote": "Present this as simultaneous rescue pressures: trapped people, closing fire, sagging platforms, blocked routes, jammed machinery, and panic. Let the party choose what kind of rescue they are performing, not just who they grab first.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "civilians",
      "ashbound",
      "rescue"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_high_forge_refuge"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Crash landing into rescue zone",
          "speaker": "GM",
          "line": "The horses hit hard beside a wave of fleeing workers. Heat rolls over you in a white-orange wall, and every direction already contains someone screaming for help.",
          "purpose": "Frame this as a live civilian disaster."
        },
        {
          "timing": "Valkyrie capacity pressure",
          "speaker": "Kara",
          "line": "I can pull them out... not all of them. Who first?",
          "purpose": "Show that help is real but limited."
        },
        {
          "timing": "Rescue options",
          "speaker": "GM",
          "line": "You can pull people free, clear a path, hold the platform, carry the wounded, or stop the crowd from collapsing into panic — but not all at once.",
          "purpose": "Turn rescue into playable priorities."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse"
    ],
    "relatedTrackers": [],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "outcomeShift": {
      "question": "Does the party make Ashbound survival visible before the city reduces it to loss math?",
      "levers": [
        "Pull trapped civilians free.",
        "Clear a route.",
        "Use Valkyrie support for the vulnerable.",
        "Calm or redirect panic."
      ],
      "consequences": [
        "Ashbound trust improves.",
        "Later evacuation has more human help and route testimony.",
        "If ignored, civilian loss becomes named and visible."
      ]
    }
  },
  {
    "id": "scene_emberroot_arrival_stabilize_structure",
    "title": "Crisis B — Stabilize Collapsing Structure",
    "session": "session_01_the_city_burns",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "arrival branch / infrastructure crisis",
    "priority": "high",
    "trigger": "",
    "summary": "The party can preserve a route, support span, or chainway that will matter for evacuation and later exfil.",
    "playerFacing": "Thora and Kara angle the overloaded horses toward the Chainways, where a suspended span is already failing under crowds, cargo, and heat-warped supports. The landing is not clean — hooves scrape metal, chains scream overhead, and the whole route shudders as people try to cross before it drops.",
    "gmTruth": "The environment itself is an objective; ignored infrastructure becomes future consequence.",
    "involvedActors": [
      "actor_ironhand_engineer",
      "actor_forge_guard",
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_midworks",
      "location_emberfall_forge_city"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_forge_lords",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "The Chainway is failing from three pressures at once: too much weight, too much heat, and a losing anchor point.",
      "Clearing people and cargo reduces load before the span tears loose.",
      "Preserved infrastructure becomes future evacuation and exfil capacity."
    ],
    "outcomes": [
      "Strong intervention preserves the route as a meaningful evacuation/exfil asset.",
      "Partial intervention leaves the route usable but dangerous.",
      "Failure or neglect collapses part of the Chainway into a later exfil hazard."
    ],
    "pressure": "The bridge is not one problem. It is too heavy, too hot, and losing tension.",
    "runNote": "Run this as a route-preservation objective. Let engineering, strength, magic, leadership, cutting cargo, or directing civilians all matter.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "structure",
      "chainways",
      "infrastructure"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_high_forge_refuge"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Crash landing into Chainways",
          "speaker": "GM",
          "line": "The horses hit the Chainway hard and wrong, iron shoes shrieking across hot metal. The span dips under your weight, and everyone on it screams before the chains catch.",
          "purpose": "Connect this branch to the failed Bifrost landing."
        },
        {
          "timing": "Action options",
          "speaker": "Engineer",
          "line": "Too much weight, too much heat, and the north anchor is slipping! Clear the span, cool the supports, brace the chain, or cut something loose before it takes the whole route down!",
          "purpose": "Give actionable solution lanes."
        },
        {
          "timing": "Valkyrie limit",
          "speaker": "Thora",
          "line": "I can catch the ones who fall. I cannot hold the bridge.",
          "purpose": "Keep the players responsible for the objective."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_control_vs_survival"
    ],
    "relatedTrackers": [],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "outcomeShift": {
      "question": "Does the party preserve movement capacity before evacuation needs it?",
      "levers": [
        "Clear the span.",
        "Cool overheated supports.",
        "Brace or re-anchor the chain.",
        "Cut loose cargo or dead weight."
      ],
      "consequences": [
        "The route can help Hot Exfil.",
        "Evacuation traffic has a path.",
        "If ignored, later routes collapse under load."
      ]
    }
  },
  {
    "id": "scene_emberroot_arrival_stop_forge_overlord",
    "title": "Crisis C — The Giants Strike the Housings",
    "session": "session_01_the_city_burns",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "arrival branch / giant pressure / first dialogue pivot",
    "priority": "high",
    "trigger": "",
    "summary": "The party encounters immense fire giants deliberately striking housings, pipeways, anchors, and stabilizer systems rather than civilians, making dialogue and observation as viable as combat.",
    "playerFacing": "Thora and Kara drive the overloaded horses toward the enemy pressure point, where fire giants are not chasing civilians or holding territory. They are striking housings, chain anchors, pipeways, and stabilizer pylons with brutal precision. Each impact sends a furnace-deep groan through the district, like something below is answering.",
    "gmTruth": "This is the first proof that the giants are not random attackers. They are targeting the infrastructure of containment and release, and their target selection can become the seed of later coordination.",
    "involvedActors": [
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_forge_city"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "The giants are not attacking randomly; they target housings, pipeways, anchors, and restraint-linked infrastructure.",
      "Their size, heat aura, and target discipline make direct combat dangerous and potentially unnecessary.",
      "Their goal is not battlefield victory. Their goal is release.",
      "The party can delay, redirect, question, protect workers, or prevent the wrong housing from opening."
    ],
    "outcomes": [
      "If the party observes or speaks instead of only fighting, they gain early leverage for later giant coordination.",
      "If the party stops the immediate strike, a housing remains intact and engineers gain time.",
      "If the party treats the giants only as monsters, later trust with Skarbrand starts colder.",
      "If the strike continues unchecked, later City Breath pressure worsens."
    ],
    "pressure": "The giants are dangerous, immense, and surrounded by lethal heat — but their intent is legible.",
    "runNote": "Run this as objective-forward pressure. Combat is possible, but the scene should also reward observation, shouted questions, protective positioning, and attempts to understand why the giants are avoiding civilian targets.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "fire-giants",
      "housings",
      "dialogue-pivot"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_high_forge_refuge"
      ],
      "branches": [
        {
          "id": "crisis_c_dialogue_pivot",
          "label": "Dialogue Pivot",
          "condition": "Players recognize the giants are targeting infrastructure, not civilians.",
          "effect": "The scene can resolve through delay, shouted negotiation, or learned intent rather than full combat.",
          "softPoint": "Seed Skarbrand's later willingness to wait on a promise."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Enemy objective reveal",
          "speaker": "GM",
          "line": "The giants are not chasing civilians. They are not holding ground. They are striking the housings, anchors, and pipeways that keep the district from tearing itself open.",
          "purpose": "Show them as release agents, not random attackers."
        },
        {
          "timing": "Giant pressure",
          "speaker": "Fire Giant",
          "line": "The chains are lies. Set them free.",
          "purpose": "Shift the language from destruction to release."
        },
        {
          "timing": "Action lanes",
          "speaker": "GM",
          "line": "You can engage directly, protect the housing, pull workers clear, cut off the channelers feeding the strike, or make them answer why this pipeway matters.",
          "purpose": "Support combat and non-combat resolutions."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_stolen_emberlings"
    ],
    "relatedTrackers": [],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "outcomeShift": {
      "question": "Do the players recognize giant target discipline before treating the scene as a monster fight?",
      "levers": [
        "Notice they are not targeting civilians.",
        "Ask why the housings matter.",
        "Protect workers without taking command's framing at face value.",
        "Redirect the strike away from routes."
      ],
      "consequences": [
        "Skarbrand's later patience becomes more plausible.",
        "Giant Coordination can start from prior recognition.",
        "If missed, the giant lane remains hostile and rupture-prone."
      ]
    },
    "relatedLocations": [
      "location_emberfall_core_furnace"
    ]
  },
  {
    "id": "scene_emberroot_high_forge_refuge",
    "title": "High Forge Refuge — Managed Panic",
    "session": "arc_ember_root",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "decompression / exposition / branch setup",
    "priority": "high",
    "trigger": "",
    "summary": "After the first triage cluster, the party reaches a safer High Forge gathering point where survivor reports, caste arguments, and Act 1 root-corruption fears point them toward the Ember Root.",
    "playerFacing": "For the first time since the Bifrost failed, the party reaches a place that almost feels like shelter. The High Forge rises above the worst of the burning districts: cleaner stone, organized guard lines, command voices, triage mats, water crews, and survivors being counted by name. You get one breath that is not falling, not burning, not screaming. Then the smoke catches in your throat, another tremor rolls through the floor, and every face turns toward you with the same question: what did Valhalla send?",
    "gmTruth": "This node reports the cost of arrival choices and reframes the next move around the party's live concern: whether the Ember Root is being corrupted like Frostroot.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_thora_kara_emberroot",
      "actor_forge_guard",
      "actor_ironhand_engineer",
      "actor_ashbound_defender"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Forge Lords want order and containment.",
      "Ironhands see contradictory failures but not the full lower picture.",
      "Ashbound workers insist the walls and root were answering before obvious sabotage.",
      "Fire giants targeted infrastructure with intent.",
      "The party's memory of Frostroot corruption makes the Ember Root a natural immediate priority."
    ],
    "outcomes": [
      "Players identify the Ember Root as the next priority.",
      "Arrival choices influence who trusts them here.",
      "The party receives enough reports to justify Root Burden / Rewound Recap without forcing a generic A/B/C branch menu."
    ],
    "pressure": "Everyone wants the party to validate their version of the crisis.",
    "runNote": "Open by reporting what was saved and what worsened. Then let faction pressure and Act 1 memory point naturally toward Root Burden / Rewound Recap.",
    "tags": [
      "valhalla",
      "ember-root",
      "high-forge",
      "refuge",
      "managed-panic",
      "branch-setup"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s02_thread_c_root_resonance"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Conditional report",
          "speaker": "GM",
          "line": "Reports arrive in the shape of your choices: the people you saved, the route you preserved, the housing you stopped or did not stop. Emberfall remembers where your hands went first.",
          "purpose": "Pay off arrival branches without reciting every condition."
        },
        {
          "timing": "Frostroot echo",
          "speaker": "GM",
          "line": "You have seen root-corruption before. You remember the sick rhythm of something foreign taking hold. When Ashbound witnesses say the Ember Root is pulsing wrong, you understand exactly why that matters.",
          "purpose": "Validate the party's live reason for rushing the Root."
        },
        {
          "timing": "Caste collision",
          "speaker": "Durgrim",
          "line": "The system holds because we hold it. Panic is how cities die.",
          "purpose": "Open Forge Lord command framing."
        },
        {
          "timing": "Caste collision",
          "speaker": "Kaldra",
          "line": "No. It holds because it has not finished failing yet.",
          "purpose": "Point toward technical contradiction."
        },
        {
          "timing": "Caste collision",
          "speaker": "Bruni",
          "line": "We warned you. You called it acceptable loss.",
          "purpose": "Point toward Ashbound truth and worker cost."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_root_heat_siphon"
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_insight",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      },
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
    "relatedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces"
    ]
  },
  {
    "id": "scene_emberroot_s02_thread_c_root_resonance",
    "title": "Thread C — Root Burden / Rewound Recap",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation thread / root truth path",
    "priority": "high",
    "trigger": "",
    "summary": "The party returns to the Ember Root moment with the camera slowed down, confirming that the Root is not corrupted like Frostroot but burdened by overflow the city is forcing into it.",
    "playerFacing": "The path away from the High Forge does not descend into the deep furnaces so much as turn aside from them. Past service stairs, ash-marked walls, and half-abandoned work shrines, the Midworks open into a quieter offshoot where metal gives way to black stone and root-vein. Here the warning bells sound distant. Heat moves in slow pulses through the walls. Fine ash gathers in branching patterns across the floor, and something vast beneath the city seems to breathe too hard.",
    "gmTruth": "The Root is not corrupting Emberfall and is not being corrupted in the Frostroot pattern. It is burdened: carrying pressure the Lower Works can no longer process and acting as an emergency lung the city was never meant to use this way.",
    "involvedActors": [
      "actor_bruni_coalhand",
      "actor_ashbound_defender",
      "actor_kaldra_steelmind"
    ],
    "involvedLocations": [
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "This does not match Frostroot corruption: no foreign ritual rhythm, no consuming pattern, no spreading hunger.",
      "The Root is overfull and responsive, not malicious.",
      "Rune-light answers the Root half a breath late, suggesting amplification and burden.",
      "The Root points back toward the Lower Works and city-breath system.",
      "Ashbound testimony predates visible giant strikes and obvious mechanical failure."
    ],
    "outcomes": [
      "The party confirms the Root is burdened, not causal.",
      "Careful interpretation grants an Early Lower Works Read or +1 Insight.",
      "This scene can trigger the split-party route: some players go upward into politics while others inspect downward toward the Core / Lower Works.",
      "Misreading the Root as corruption delays the true life-support diagnosis."
    ],
    "pressure": "The clearest truth is not the loudest crisis.",
    "runNote": "Run this as a quiet investigation and omen scene. Reward careful comparison to Frostroot: the party should feel validated for checking the Root first, then unsettled because the truth is different and potentially worse.",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-c",
      "root-burden",
      "rewound-recap",
      "lower-furnaces"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_split_politics_and_lungs"
      ],
      "branches": [
        {
          "id": "root_burden_clear_read",
          "label": "Clear Root Read",
          "condition": "Party compares the phenomenon to Frostroot and reads the difference correctly.",
          "effect": "They understand the Root is burdened rather than corrupting or corrupted.",
          "softPoint": "Grant Early Lower Works Read or +1 Insight."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Frostroot comparison",
          "speaker": "GM",
          "line": "You have seen root-corruption before. You know the sick rhythm of something foreign taking hold. This is not that. That may be worse.",
          "purpose": "Validate the players' Act 1 continuity and pivot the truth."
        },
        {
          "timing": "Root-intersection reveal",
          "speaker": "GM",
          "line": "The passage opens around a root-vein as thick as a tower column, blackened with age but threaded with ember-gold light. Emberfall was not built around it by accident. The city is connected to it.",
          "purpose": "Establish the Root as mythic infrastructure."
        },
        {
          "timing": "Ashbound testimony",
          "speaker": "Ashbound Worker",
          "line": "The fires were pulsing before the giants came. Before the housings split. We told them the walls were answering something.",
          "purpose": "Give independent evidence that root behavior predates obvious causes."
        },
        {
          "timing": "Clue summary",
          "speaker": "GM",
          "line": "Not spreading. Not hungry. Burdened. The Root is not breathing for itself — something is making it take breath the city can no longer carry.",
          "purpose": "Clarify Root burden and point toward Lower Works backflow."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_root_heat_siphon",
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_control_vs_survival"
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_insight"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "outcomeShift": {
      "question": "Does the party understand the Root as witness and burden rather than culprit?",
      "levers": [
        "Compare to Frostroot corruption.",
        "Read the pulse instead of suppressing it.",
        "Listen to Ashbound testimony.",
        "Connect root-light to backflow and city breath."
      ],
      "consequences": [
        "The Root becomes a pointer toward the Lower Works.",
        "Ashbound credibility increases.",
        "The party can justify splitting between politics and technical inspection.",
        "Misreading the Root delays the true diagnosis."
      ]
    },
    "relatedLocations": [
      "location_emberfall_core_furnace"
    ]
  },
  {
    "id": "scene_emberroot_split_politics_and_lungs",
    "title": "Split Pressure — Politics Above, Lungs Below",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "split-party bridge / investigation pressure",
    "priority": "high",
    "trigger": "",
    "summary": "Two players push upward into Forge Lord politics while two players inspect downward toward the Core / Lower Works, letting social obstruction and technical backflow reveal the same crisis from opposite ends.",
    "playerFacing": "For a moment, Emberfall splits around your choices. Above, command voices tighten around maps, seals, orders, and authority. Below, the heat grows quieter and heavier, moving through root, pipe, and stone like breath with nowhere safe to go.",
    "gmTruth": "The split is not a distraction. It is Emberfall made playable: authority above is closing safeties while the lungs below take the cost.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_ironhand_engineer"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Forge Lord command is prioritizing visible district preservation and authority control.",
      "Upper safeties are being closed faster than lower pressure can vent.",
      "The Lower Works are absorbing backflow from decisions being made above.",
      "Ashbound routes may become necessary because official evacuation lanes are political tools as much as physical routes.",
      "The two halves of the party can bring different evidence to Kaldra."
    ],
    "outcomes": [
      "The upward team can expose Forge Lord obstruction, command delay, or personhood-denial language.",
      "The downward team can trigger or witness the Lower Works Backflow Surge.",
      "Both teams converge with actionable information: Kaldra must reprioritize shutoffs, vents, and evacuation routes.",
      "This scene naturally routes into Upper Track and City Breath Control-Room Correction."
    ],
    "pressure": "The city is being harmed by decisions made where the harm is not visible.",
    "runNote": "Intercut between the two groups. Keep each cut short: one political pressure beat above, one technical pressure beat below. Fire moment_emberroot_lower_works_backflow_surge for the downward group, then converge at Kaldra or the Ironhand control room.",
    "tags": [
      "valhalla",
      "ember-root",
      "split-party",
      "politics",
      "lower-works",
      "city-breath",
      "investigation"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_upper_political_pressure",
        "scene_emberroot_s02_thread_a_system_failure"
      ],
      "branches": [
        {
          "id": "split_upper_politics",
          "label": "Upper Politics",
          "condition": "Players confront Durgrim, command staff, or evacuation authority.",
          "effect": "They learn that safety closures and route control are being prioritized by authority logic.",
          "softPoint": "Let Forge Lords sound reasonable enough to be dangerous."
        },
        {
          "id": "split_lower_lungs",
          "label": "Lower Lungs",
          "condition": "Players inspect Core / Root / Lower Works interfaces.",
          "effect": "They witness backflow, buoyancy loss, and proof that upper shutoffs are choking the city.",
          "softPoint": "Fire the Lower Works Backflow Surge moment here."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Split begins",
          "speaker": "GM",
          "line": "Above you, command tries to make the crisis smaller by naming who is allowed to move. Below you, the city answers every order with pressure.",
          "purpose": "Frame the split as one problem seen from two layers."
        },
        {
          "timing": "Upper political pressure",
          "speaker": "Forge Lord",
          "line": "Unauthorized movement kills cities faster than fire.",
          "purpose": "Let Forge Lords argue control as survival."
        },
        {
          "timing": "Lower technical pressure",
          "speaker": "Ironhand Engineer",
          "line": "If another upper safety closes before this line vents, the lungs take it again.",
          "purpose": "Set up the backflow surge."
        },
        {
          "timing": "Convergence hook",
          "speaker": "Ironhand Engineer",
          "line": "Kaldra needs this now. Not after council. Not after permission. Now.",
          "purpose": "Route directly into control-room correction."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_root_heat_siphon"
    ],
    "relatedTrackers": [
      "tracker_emberroot_insight",
      "tracker_emberroot_core_stability",
      "tracker_emberroot_investigation_clock"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "outcomeShift": {
      "question": "Can the party connect political obstruction above to physical backflow below?",
      "levers": [
        "Challenge Forge Lord command logic.",
        "Inspect the Lower Works / Root interface.",
        "Identify that upper shutoffs are worsening lower pressure.",
        "Bring urgent proof to Kaldra."
      ],
      "consequences": [
        "Thread A becomes an intervention with lower-level proof.",
        "Forge Lord legitimacy weakens.",
        "Ashbound and Ironhand cooperation becomes more necessary.",
        "The party gains language for sequenced withdrawal."
      ]
    }
  },
  {
    "id": "scene_emberroot_upper_political_pressure",
    "title": "Upper Track — Command Under Accusation",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "political pressure / pre-confrontation scene",
    "priority": "high",
    "trigger": "",
    "summary": "The upward team confronts Forge Lord authority before the full rupture, exposing emergency control, personhood denial, evacuation priority, and fear of giant cooperation.",
    "playerFacing": "The upper command chamber is not calm. It is disciplined panic wearing polished stone. Runners arrive with casualty slates. Guards hold doors half-open for officials and half-closed against refugees. Forge Lords stand over maps that show every authorized route in clean lines, and none of the ways people actually survive below.",
    "gmTruth": "The Forge Lords know enough to fear collapse, but their answer is still control: control the routes, control the language, control who counts, and control the story before the city forces a different truth into the room.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_skarth_firebrand",
      "actor_forge_guard",
      "actor_bruni_coalhand"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_fire_giants",
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "Forge Lord maps prioritize authorized routes, command access, and infrastructure over lower-city movement.",
      "The Lords speak about bound fire and giants through classification language rather than personhood.",
      "They are genuinely afraid abrupt release or uncontrolled evacuation will kill thousands.",
      "They treat Ashbound routes as unauthorized because acknowledging them weakens official authority.",
      "They treat giant cooperation as surrender, even if coordinated deconstruction may be necessary."
    ],
    "outcomes": [
      "The players can weaken Forge Lord legitimacy before the Confrontation.",
      "The players can identify that political control is worsening evacuation and response capacity.",
      "If they push too hard without proof, the Lords stall, isolate, or reframe them as destabilizing outsiders.",
      "If they bring Ashbound or giant testimony into the room, the later emergency coalition becomes easier to justify."
    ],
    "pressure": "The Lords can hear the city failing and still believe the first thing to save is command.",
    "runNote": "Run this as a tense pre-confrontation. Let direct questions and accusations land. The Forge Lords should be controlled, practical, evasive, and morally rotten under pressure. If Skarbrand is nearby, let him speak rarely but cut deeply.",
    "tags": [
      "valhalla",
      "ember-root",
      "politics",
      "forge-lords",
      "pre-confrontation",
      "authority-collapse"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s02_thread_a_system_failure",
        "scene_emberroot_confrontation_crown_preservation_revealed"
      ],
      "branches": [
        {
          "id": "upper_track_lords_hold_frame",
          "label": "Lords Hold the Frame",
          "condition": "Players confront them without enough proof or allies.",
          "effect": "Forge Lords delay, reclassify the problem, and insist command must remain centralized.",
          "softPoint": "Make them sound reasonable enough to be dangerous."
        },
        {
          "id": "upper_track_frame_cracks",
          "label": "Frame Cracks",
          "condition": "Players expose missing routes, personhood denial, or command-first evacuation priorities.",
          "effect": "Forge Lord legitimacy weakens and the Confrontation starts with Durgrim on the defensive.",
          "softPoint": "Let Ashbound or Ironhand testimony matter."
        },
        {
          "id": "upper_track_giant_read",
          "label": "Giant Political Read",
          "condition": "Players question Skarbrand or observe giant intent through a political lens.",
          "effect": "The giants become legible as a dangerous liberation faction, not merely rioters.",
          "softPoint": "This helps unlock coordinated deconstruction."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Opening image",
          "speaker": "GM",
          "line": "The command table is covered in maps. Every official route is marked. Every Ashbound route is missing.",
          "purpose": "Show political blindness through a physical object."
        },
        {
          "timing": "Forge Lord defense",
          "speaker": "Durgrim",
          "line": "You mistake restraint for cruelty because you have not yet watched a city die without it.",
          "purpose": "Give the Forge Lords a strong, ugly defense."
        },
        {
          "timing": "If asked about Ashbound routes",
          "speaker": "Forge Lord",
          "line": "Routes that do not appear on civic maps are not routes. They are liabilities.",
          "purpose": "Expose class and authority blindness."
        },
        {
          "timing": "If Skarbrand is present or referenced",
          "speaker": "Skarbrand",
          "line": "Every map in this room is a confession. Look where the lines stop.",
          "purpose": "Let giant critique align with Ashbound reality."
        },
        {
          "timing": "If players mention giant cooperation",
          "speaker": "Durgrim",
          "line": "You are proposing emergency demolition with hostile giants inside a sinking city and calling it mercy.",
          "purpose": "Foreshadow the Confrontation."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition"
    ],
    "relatedTrackers": [
      "tracker_emberroot_insight",
      "tracker_emberroot_investigation_clock"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "outcomeShift": {
      "question": "Can the party break the Forge Lords' control of the narrative before command turns violent?",
      "levers": [
        "Challenge personhood-denial language.",
        "Expose missing Ashbound routes on official maps.",
        "Force the Lords to admit they prioritize command continuity.",
        "Argue that giant cooperation is not surrender if evacuation and release are real."
      ],
      "consequences": [
        "Forge Lord authority weakens.",
        "Ashbound survival authority rises.",
        "Giant coordination becomes politically imaginable.",
        "Durgrim and the cabal become more defensive in the Confrontation."
      ]
    }
  },
  {
    "id": "scene_emberroot_s02_thread_a_system_failure",
    "title": "Lower Works Backflow → City Breath Control-Room Correction",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "technical convergence / control-room correction",
    "priority": "high",
    "trigger": "",
    "summary": "The downward team's backflow proof reaches Kaldra and the Ironhand control room, revealing that upper safety shutoffs are forcing pressure into the Lower Works and dropping city buoyancy.",
    "playerFacing": "You do not arrive in the Ironhand control room with questions. You arrive with the missing answer from below. The Midworks are alive with contradiction: rune panels flash, brass gauges fall and fail to recover, vent diagrams bloom red one layer at a time, and every Ironhand in the room is arguing from readings that no longer include the wound you have seen.",
    "gmTruth": "The Ironhands have been reading symptoms. The party has seen the wound: upper shutoffs are being closed in the wrong order, forcing pressure back into the Lower Works and lowering city buoyancy.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    "involvedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "The control room has been tracking symptoms without seeing the lower backflow directly.",
      "Upper safeties are closing in the order command cares about, not the order the city can survive.",
      "Each sealed district looks safer locally while the Lower Works takes more pressure.",
      "The buoyancy loss proves this is not only heat damage; the city is physically sinking lower.",
      "The correct response is to stop indiscriminate shutoffs, vent first, redirect second, cool what can be cooled, then seal only after pressure drops."
    ],
    "outcomes": [
      "Kaldra understands the lower proof and stops trusting command's sequence.",
      "The party gains the operational spine for withdrawal: vent, redirect, cool, evacuate, release, then seal.",
      "Ironhand cooperation becomes possible but politically dangerous.",
      "This information feeds Realization Shift and The Confrontation."
    ],
    "pressure": "The city’s blood is moving too fast, and the people in charge cannot see the wound clearly from behind glass.",
    "runNote": "Fire or reference moment_emberroot_lower_works_backflow_surge first if it has not already happened. This scene is the technical correction: Kaldra learns command's shutoff order is killing the city-body below.",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-a",
      "city-breath",
      "control-room",
      "backflow"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_confrontation_crown_preservation_revealed"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Kaldra receives lower data",
          "speaker": "Kaldra",
          "line": "They are closing safeties in the order command cares about, not the order the city can survive.",
          "purpose": "Turn lower inspection into actionable Ironhand correction."
        },
        {
          "timing": "Operational sequence",
          "speaker": "Kaldra",
          "line": "Vent first. Redirect second. Cool what can be cooled. Evacuate while the routes still exist. Release only when the breath has somewhere safe to go. Then seal what remains.",
          "purpose": "Give the technical spine for sequenced withdrawal."
        },
        {
          "timing": "Control-room contradiction",
          "speaker": "Ironhand Overseer",
          "line": "Main pressure says falling. Seal pressure says rising. Buoyancy says dropping. Flow says stable. What did you see down there?",
          "purpose": "Force trust in physical observation over incomplete readouts."
        },
        {
          "timing": "Truth after correction",
          "speaker": "Kaldra",
          "line": "This is not random failure. Something above is forcing the wound downward.",
          "purpose": "Point toward CPP and the Confrontation."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse"
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_insight",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "outcomeShift": {
      "question": "Can Kaldra and the party correct the city-breath model before command locks the system?",
      "levers": [
        "Present buoyancy loss proof.",
        "Identify the wrong shutoff order.",
        "Prioritize venting and redirection over sealing.",
        "Give Kaldra enough certainty to defy command."
      ],
      "consequences": [
        "Kaldra becomes willing to break with Forge Lord policy.",
        "Controlled decommission becomes technically imaginable.",
        "If delayed, CPP begins with more lower-city damage already done."
      ]
    }
  },
  {
    "id": "scene_emberroot_confrontation_crown_preservation_revealed",
    "title": "The Confrontation — Crown Preservation Revealed",
    "session": "session_03_authority_breaks",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "political confrontation / command rupture",
    "priority": "high",
    "trigger": "",
    "summary": "The party confronts the Forge Lords with Root burden, backflow, giant targeting, Ashbound routes, and Kaldra's technical proof — revealing the Crown Preservation Protocol, a contingency that preserves the upper city by drowning the rest.",
    "playerFacing": "The council chamber does not feel like a place of debate anymore. It feels like a sealed engine. Maps of the upper city burn gold. Lower districts glow red or vanish from the diagrams entirely. Guards stand too close to the doors. Command seals hum beneath the floor. Kaldra enters with you because she wants to hear how much they knew.",
    "gmTruth": "The Forge Lords are not merely failing to save the whole city. They have already chosen which part of Emberfall counts as worth saving. Crown Preservation Protocol is designed to preserve the head by drowning the body.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand",
      "actor_forge_guard"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "The Crown Preservation Protocol reroutes pressure, breath, and remaining lift toward the High Forge and upper civic districts.",
      "Lower districts, Ashbound routes, Midworks, and Lower Works are being sacrificed to buy upper-city continuity.",
      "Kaldra's prior pipeway orders were used to feed this contingency without her fully understanding the intent.",
      "Forge Lords call the protocol continuity, legacy, and survival.",
      "The command seals and guards prove the Lords expected opposition."
    ],
    "outcomes": [
      "Kaldra breaks with Forge Lord command.",
      "The party learns CPP is already underway or moments from lock-in.",
      "The room locks and the Forge Lords order arrests.",
      "Combat or forceful breakout becomes likely.",
      "The later emergency coalition is born from rupture, not consensus."
    ],
    "pressure": "The old command structure is about to become a physical obstacle to survival.",
    "runNote": "Run this as the dramatic center of the back half. Let the players accuse, reveal, and press. When Kaldra sees the truth, she breaks with command. Then the room locks and the Forge Lords attempt arrests.",
    "tags": [
      "valhalla",
      "ember-root",
      "confrontation",
      "crown-preservation",
      "authority-breaks",
      "forge-lords"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_breakout_command_seals_lock"
      ],
      "branches": [
        {
          "id": "confrontation_kaldra_breaks",
          "label": "Kaldra Breaks With Command",
          "condition": "Kaldra hears or sees proof that Crown Preservation is intentional.",
          "effect": "She rejects Forge Lord authority and becomes the coalition's technical lead.",
          "softPoint": "This should happen unless the party prevents her from seeing the truth."
        },
        {
          "id": "confrontation_lords_arrest_order",
          "label": "Arrest Order",
          "condition": "The party or Kaldra moves to leave or override command.",
          "effect": "Command seals lock and guards/automata move to arrest the party and coalition figures.",
          "softPoint": "This is the combat ignition."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Skarbrand outside",
          "speaker": "GM",
          "line": "Skarbrand waits outside the council hall. Not kneeling. Not threatening. Waiting. When you pass, he gives you one slow nod. Not trust. A deadline.",
          "purpose": "Make giant restraint visible before the confrontation."
        },
        {
          "timing": "Protocol reveal",
          "speaker": "GM",
          "line": "The upper city glows gold on the map. Everything below it is red, sealed, or simply gone from the projection.",
          "purpose": "Reveal Crown Preservation visually."
        },
        {
          "timing": "Kaldra realizes",
          "speaker": "Kaldra",
          "line": "Is this why you had us divert the pipeways? You told us we were stabilizing the city. You were preserving the head and drowning the body.",
          "purpose": "Let Kaldra name the betrayal."
        },
        {
          "timing": "Forge Lord answer",
          "speaker": "Durgrim",
          "line": "If Emberfall cannot survive whole, then Emberfall must survive in its highest form.",
          "purpose": "State the Forge Lord justification without cartoon villainy."
        },
        {
          "timing": "Kaldra breaks",
          "speaker": "Kaldra",
          "line": "No. I am done preserving your truth. We do this our way now.",
          "purpose": "Trigger the authority rupture."
        },
        {
          "timing": "Room locks",
          "speaker": "GM",
          "line": "Kaldra turns toward the door. The chamber answers with a single, heavy sound. Clunk. Every command seal on the council doors drops into place at once.",
          "purpose": "Make command violence physical."
        },
        {
          "timing": "Arrest order",
          "speaker": "Forge Lord",
          "line": "We cannae have ye do that, Kaldra. Guards, arrest these terrorists. We cannot let them destroy a thousand years of legacy.",
          "purpose": "Ignite the breakout."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition"
    ],
    "relatedTrackers": [
      "tracker_emberroot_insight",
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can the party expose Crown Preservation before the Lords complete political and physical lockout?",
      "levers": [
        "Force admission through Kaldra's data.",
        "Expose lower districts being sacrificed.",
        "Protect Bruni and route knowledge.",
        "Keep Kaldra from being arrested or silenced."
      ],
      "consequences": [
        "Forge Lord command becomes openly hostile.",
        "Kaldra exits command authority permanently.",
        "The coalition forms outside permission.",
        "CPP starts the final countdown."
      ]
    }
  },
  {
    "id": "scene_emberroot_breakout_command_seals_lock",
    "title": "Breakout — Command Seals Lock",
    "session": "session_03_authority_breaks",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "objective combat / breakout",
    "priority": "high",
    "trigger": "",
    "summary": "The Forge Lords lock the chamber and order the arrest of Kaldra, the party, and coalition figures before they can stop Crown Preservation Protocol.",
    "playerFacing": "The chamber becomes a machine around you. Door seals burn gold. Floor runes crawl toward your boots. Guards lower shields in disciplined silence. Somewhere behind the walls, something heavy begins turning as the Crown Preservation Protocol feeds itself.",
    "gmTruth": "The debate is over. The old command structure is now a physical obstacle to survival.",
    "involvedActors": [
      "actor_durgrim_ashenvein",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_forge_guard"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Forge Lords prepared physical command seals and arrest protocols for internal dissent.",
      "Some Ironhands hesitate, proving command unity is cracking.",
      "Automata and oath guards prioritize doors, maps, and Kaldra rather than killing first.",
      "CPP continues advancing during the fight."
    ],
    "outcomes": [
      "Kaldra escapes and becomes the coalition's technical lead.",
      "Bruni or Ashbound route knowledge is protected from seizure.",
      "The party prevents or delays total command lockout.",
      "Failure or delay advances CPP and worsens lower-city conditions before the coalition can act."
    ],
    "pressure": "Get Kaldra and route knowledge out before command lockout completes.",
    "runNote": "Run as short objective combat. The goal is not to kill every Forge Lord; it is to stop lockout, protect Kaldra/Bruni, and break out before CPP becomes irreversible.",
    "tags": [
      "valhalla",
      "ember-root",
      "breakout",
      "combat",
      "command-seals",
      "forge-guards"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_emergency_coalition_cut_crownlines"
      ],
      "branches": [
        {
          "id": "breakout_clean",
          "label": "Clean Breakout",
          "condition": "Party disables seals quickly and protects Kaldra/Bruni.",
          "effect": "CPP begins but the coalition has more time and better data.",
          "softPoint": "Lower pressure starts at a better state."
        },
        {
          "id": "breakout_costly",
          "label": "Costly Breakout",
          "condition": "Party escapes after delay, injury, or lost data.",
          "effect": "CPP advances; one route, terminal, or ally is compromised.",
          "softPoint": "Start the emergency coalition under harsher timer pressure."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Combat objective",
          "speaker": "GM",
          "line": "This is not a fight for the room. It is a fight for who gets to leave it with the truth.",
          "purpose": "Clarify objective combat."
        },
        {
          "timing": "Seal timer",
          "speaker": "GM",
          "line": "A second line of gold runes lights beneath the first. Whatever is happening below, the room is feeding it.",
          "purpose": "Show CPP advancing during combat."
        },
        {
          "timing": "Kaldra override",
          "speaker": "Kaldra",
          "line": "Give me three breaths at that pylon and I can keep them from locking every lower terminal.",
          "purpose": "Create a protect/enable objective."
        },
        {
          "timing": "Breakout success",
          "speaker": "GM",
          "line": "The door seal tears open with a sound like a crown cracking. Smoke and alarms rush in at the same time.",
          "purpose": "Launch into emergency coalition."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can the party break the command seal before the Forge Lords isolate the coalition?",
      "levers": [
        "Disable command seal pylons.",
        "Protect Kaldra during override.",
        "Hold the door against oath guards.",
        "Stop automata from seizing route maps.",
        "Prevent a Forge Lord from issuing total containment."
      ],
      "consequences": [
        "Kaldra exits with enough data to plan crownline cuts.",
        "CPP is underway but not completed.",
        "The emergency coalition forms outside the sealed command structure."
      ]
    }
  },
  {
    "id": "scene_emberroot_emergency_coalition_cut_crownlines",
    "title": "Emergency Coalition — Cut the Crownlines",
    "session": "session_04_emergency_coalition",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "coalition planning / crisis assignment",
    "priority": "high",
    "trigger": "",
    "summary": "After the breakout, the coalition discovers Crown Preservation Protocol is already underway and must rapidly assign roles: Ashbound evacuate, giants break crownlines, Ironhands guide sequence, and players reach the Lower Works override.",
    "playerFacing": "The council doors burst open behind you into smoke and shouting. The city sounds different now. Not louder. Narrower. Every alarm is being pulled into one rhythm, one command, one priority. Above, the High Forge seals burn bright gold. Below, whole districts answer in red.",
    "gmTruth": "CPP is already feeding. The coalition does not have time to debate permission; it must build a counter-system fast enough to keep everyone below the crown from dying.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand",
      "actor_skarth_firebrand",
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_high_forge",
      "location_emberfall_chainways",
      "location_emberfall_lower_furnaces",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants",
      "faction_valkyries"
    ],
    "clues": [
      "CPP is already feeding crownlines and lowering survival odds for everyone below the High Forge.",
      "Ironhands are locked out of most terminals and need physical cuts and manual override.",
      "Ashbound hidden routes are the only evacuation network not controlled by Forge Lord maps.",
      "Skarbrand and the giants can break high-heat crownline infrastructure that no one else can survive approaching.",
      "The players must reach the Lower Works because the final override cannot be completed from above."
    ],
    "outcomes": [
      "Bruni and Ashbound begin opening hidden tunnel exits for mass evacuation.",
      "Skarbrand and his giants agree to break crownline-feeding pipelines and later breach the outer shell.",
      "Kaldra marks which lines must break and which must not break yet.",
      "The party commits to the Lower Works override and controlled decommission.",
      "CPP timer becomes active pressure for the finale."
    ],
    "pressure": "Act now or everyone except the Forge Lords dies.",
    "runNote": "Run as a war-room in motion. Ask or confirm who handles each lane: evacuation, crownline cutting, core override, delay of Forge Lord remnants. Keep it urgent and practical.",
    "tags": [
      "valhalla",
      "ember-root",
      "emergency-coalition",
      "crownlines",
      "survival-plan",
      "cpp"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_giant_coordination_break_right_lines",
        "scene_emberroot_ashbound_evacuation_hidden_routes",
        "scene_emberroot_core_furnace_descent"
      ],
      "branches": [
        {
          "id": "coalition_full_alignment",
          "label": "Full Alignment",
          "condition": "Party has Kaldra, Bruni, Skarbrand, and at least partial Valkyrie support.",
          "effect": "The final operation starts with all lanes active.",
          "softPoint": "Best survival path."
        },
        {
          "id": "coalition_partial_alignment",
          "label": "Partial Alignment",
          "condition": "One faction lane is weak, delayed, or mistrustful.",
          "effect": "The final operation starts with a gap or added pressure.",
          "softPoint": "Use if prior choices left one faction cold."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "CPP confirmed",
          "speaker": "Kaldra",
          "line": "They've all but locked us out of our terminals. Our only option is to break the pipes and networks feeding the crownlines.",
          "purpose": "State the crisis and solution."
        },
        {
          "timing": "Kaldra clarifies",
          "speaker": "Kaldra",
          "line": "If we cannot command the system, we cut what they are using to murder the rest of the city.",
          "purpose": "Make Kaldra's break irreversible."
        },
        {
          "timing": "Skarbrand asks",
          "speaker": "Skarbrand",
          "line": "Name what must break.",
          "purpose": "Show giant restraint becoming coalition force."
        },
        {
          "timing": "Bruni counters",
          "speaker": "Bruni",
          "line": "Name the people first.",
          "purpose": "Keep evacuation morally central."
        },
        {
          "timing": "Kaldra commits",
          "speaker": "Kaldra",
          "line": "I can name the order.",
          "purpose": "Birth the coalition in three voices."
        },
        {
          "timing": "Launch operation",
          "speaker": "GM",
          "line": "For the first time since you arrived, the people Emberfall used, ignored, classified, and feared all move in the same direction.",
          "purpose": "Transition into action lanes."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "relatedTrackers": [
      "tracker_emberroot_core_stability",
      "tracker_emberroot_exfil_state",
      "tracker_emberroot_unsavable_crises"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can the coalition become functional before CPP completes?",
      "levers": [
        "Assign Ashbound to evacuation.",
        "Assign giants to crownline cuts.",
        "Assign Ironhands to sequence and marking.",
        "Send players to the Lower Works override.",
        "Use Valkyries for trapped and immobile evacuees."
      ],
      "consequences": [
        "The final operation has multiple allied lanes.",
        "Failures become route loss, pressure loss, or increased CPP timer.",
        "Success gives the party enough time to attempt controlled decommission."
      ]
    }
  },
  {
    "id": "scene_emberroot_giant_coordination_break_right_lines",
    "title": "Giant Coordination — Break the Right Lines",
    "session": "session_04_emergency_coalition",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "coalition operation lane / giant deconstruction",
    "priority": "high",
    "trigger": "",
    "summary": "Skarbrand and allied giants hold further destruction long enough to break the crownline-feeding pipes, shell barriers, and high-heat infrastructure Kaldra marks as necessary.",
    "playerFacing": "Skarbrand stands in the heat with two lieutenants behind him, each large enough to make the surrounding guards look like children. The giants are not calm. They are choosing restraint one breath at a time. Kaldra's marked lines glow across the pressure map. Some must break now. Some must not break yet. The difference is lives.",
    "gmTruth": "The giants are not being controlled. They are agreeing to sequence their force because evacuation and release have become real.",
    "involvedActors": [
      "actor_skarth_firebrand",
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    "involvedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Giants can survive heat and lava zones that no one else can work in.",
      "Their knowledge of cages, housings, and restraint systems is practical, not symbolic.",
      "If Kaldra's markings are wrong or delayed, giant force can still become rupture.",
      "Skarbrand's condition remains clear: no re-binding and no softer chain."
    ],
    "outcomes": [
      "Giants cut crownline-feeding pipelines to slow CPP.",
      "Giants hold back from breaking evacuation routes if the party keeps release credible.",
      "Skarbrand's lieutenants can later arrive in the Lower Works to fight the Crown Anvil and buy the party time.",
      "If trust breaks, this lane becomes rupture pressure."
    ],
    "pressure": "Break crownlines, not routes. Break cages in order, not in fury.",
    "runNote": "Run this as an allied operation lane. It may happen partly offscreen while the players move, but key beats can be fired when the party needs proof that giant trust is paying off.",
    "tags": [
      "valhalla",
      "ember-root",
      "giants",
      "safe-deconstruction",
      "crownlines",
      "allied-lane"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_lower_works_controlled_decommission"
      ],
      "branches": [
        {
          "id": "giants_hold_sequence",
          "label": "Giants Hold Sequence",
          "condition": "Evacuation and release remain credible.",
          "effect": "Giants break only marked crownlines and later assist against the Crown Anvil.",
          "softPoint": "Best payoff for early dialogue in Crisis C."
        },
        {
          "id": "giants_break_fury",
          "label": "Giants Break in Fury",
          "condition": "Party delays, lies, or re-binding becomes likely.",
          "effect": "Giants resume destructive deconstruction and raise rupture pressure.",
          "softPoint": "Use only if trust collapses."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Skarbrand's condition",
          "speaker": "Skarbrand",
          "line": "No re-binding. No softer chain. Name the pipes. Name the walls. Name the cages.",
          "purpose": "Set giant terms."
        },
        {
          "timing": "Kaldra marks sequence",
          "speaker": "Kaldra",
          "line": "That one. That one. Not the red-lit housing. Not until they vent the chamber.",
          "purpose": "Show technical coordination."
        },
        {
          "timing": "Giant restraint",
          "speaker": "Skarbrand",
          "line": "Good. I can be patient for three breaths.",
          "purpose": "Make restraint impressive and temporary."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition",
      "thread_emberroot_stolen_emberlings"
    ],
    "relatedTrackers": [
      "tracker_emberroot_giant_timer",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can giant force remain coordinated under CPP pressure?",
      "levers": [
        "Give Skarbrand true targets.",
        "Do not ask giants to preserve cages unchanged.",
        "Coordinate with Ashbound evacuation timing.",
        "Use Kaldra's sequence to decide what breaks first."
      ],
      "consequences": [
        "CPP slows.",
        "Outer shell breach becomes possible.",
        "The Lower Works operation gets allied help.",
        "Mistrust turns deconstruction back into catastrophe."
      ]
    }
  },
  {
    "id": "scene_emberroot_ashbound_evacuation_hidden_routes",
    "title": "Ashbound Evacuation — Open the Hidden Routes",
    "session": "session_04_emergency_coalition",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "coalition operation lane / evacuation",
    "priority": "high",
    "trigger": "",
    "summary": "Bruni and the Ashbound open hidden tunnel exits, ash drains, old cuts, crawlways, and root-adjacent hollows for mass evacuation while CPP collapses official routes.",
    "playerFacing": "The official maps are useless now. Gold seals close the clean routes one by one while Bruni's people move toward places no command table bothered to draw: ash drains, crawlways, old service burns, root-adjacent hollows, and cuts in the city older than the current lords.",
    "gmTruth": "The city survives through the routes it refused to recognize. Ashbound knowledge is no longer background texture; it is the evacuation spine.",
    "involvedActors": [
      "actor_bruni_coalhand",
      "actor_ashbound_defender",
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_forge_city"
    ],
    "involvedFactions": [
      "faction_emberroot_ashbound",
      "faction_valkyries",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "Official routes are being sealed by CPP or choked by command priorities.",
      "Ashbound routes can carry people but not cargo, titles, archives, or command processions.",
      "Workers know routes by touch, scar, heat, and habit rather than maps.",
      "Valkyries can extract the immobile and trapped but cannot replace mass evacuation."
    ],
    "outcomes": [
      "Ashbound routes open and become the primary evacuation path.",
      "Evacuation capacity depends on earlier trust, saved civilians, preserved routes, and CPP timer state.",
      "This lane feeds directly into Hot Exfil — Ashbound Tunnels / Outer Shell Breach.",
      "If neglected, The Unsavable claims more people before the final escape."
    ],
    "pressure": "No cargo. No titles. People first.",
    "runNote": "Run this as an allied evacuation lane. Use it to create costs and advantages during decommission and Hot Exfil. The players may not personally manage every route, but their prior support determines capacity.",
    "tags": [
      "valhalla",
      "ember-root",
      "ashbound",
      "evacuation",
      "hidden-routes",
      "people-first"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "ashbound_routes_open",
          "label": "Routes Open",
          "condition": "Ashbound trust and route capacity are strong.",
          "effect": "Hidden routes carry large groups before the worst collapse.",
          "softPoint": "Best people-survive path."
        },
        {
          "id": "ashbound_routes_choked",
          "label": "Routes Choked",
          "condition": "CPP advances, trust is weak, or routes were not preserved.",
          "effect": "Evacuation still happens but with harder losses and more Hot Exfil hazards.",
          "softPoint": "Use to show cost without negating the route."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Bruni takes command",
          "speaker": "Bruni",
          "line": "No titles. No cargo. No one deciding who counts. When I say move, move.",
          "purpose": "Make Ashbound authority clear."
        },
        {
          "timing": "Routes open",
          "speaker": "GM",
          "line": "The official routes vanish behind smoke and command lines. The Ashbound routes open under your feet: ash drains, old cuts, crawlways, root-adjacent hollows — the city beneath the city.",
          "purpose": "Make hidden routes physical and immediate."
        },
        {
          "timing": "Valkyrie support",
          "speaker": "Kara",
          "line": "Point me at the ones who cannot walk.",
          "purpose": "Use Valkyries where their capacity matters most."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "relatedTrackers": [
      "tracker_emberroot_exfil_state",
      "tracker_emberroot_unsavable_crises"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can the Ashbound move people faster than CPP drowns the lower city?",
      "levers": [
        "Prioritize people over cargo.",
        "Use saved civilians as route helpers.",
        "Coordinate giants breaking blocked stone.",
        "Use Valkyries for immobile groups.",
        "Keep command guards from seizing route control."
      ],
      "consequences": [
        "More people survive.",
        "Hot Exfil gains practical routes.",
        "Some routes still collapse if CPP advances too far."
      ]
    }
  },
  {
    "id": "scene_emberroot_core_furnace_descent",
    "title": "Lower Works Descent — Override Window",
    "session": "session_04_emergency_coalition",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "transition / final descent",
    "priority": "high",
    "trigger": "",
    "summary": "The party descends toward the Lower Works while CPP collapses pathways, crownlines pull pressure upward, and the manual override window begins closing.",
    "playerFacing": "The route downward does not feel like descending into a basement or furnace room. It feels like walking toward the source of a breath while something above tightens a hand around its throat. Gold crownlines pulse through the walls. Red warnings answer below. Pipes, roots, chains, and stone all move in imperfect rhythm, as if every part of Emberfall is trying to decide whether to hold together or die in order.",
    "gmTruth": "The Lower Works are the final place the Crown Preservation Protocol cannot fully command from above. The party must reach the manual override before the window closes.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_fire_giants",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Gold crownlines are pulling pressure and lift away from lower paths.",
      "Routes collapse because CPP is starving one line and overfeeding another.",
      "The manual override cannot be completed from Midworks or High Forge.",
      "All coalition lanes are buying time for this descent."
    ],
    "outcomes": [
      "The party reaches the Lower Works operation scene.",
      "Clean descent gives better starting position.",
      "Costly descent starts controlled decommission with pressure, damage, or split positioning.",
      "Delay advances CPP and worsens Ashbound evacuation conditions."
    ],
    "pressure": "Answers are below, but so is the cost of time.",
    "runNote": "Use this as a threshold and traversal pressure scene. Do not bog down. Each obstacle should be a sign of CPP actively sacrificing lower pathways to preserve the upper city.",
    "tags": [
      "valhalla",
      "ember-root",
      "descent",
      "override-window",
      "lower-works",
      "cpp"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_lower_works_controlled_decommission"
      ],
      "branches": [
        {
          "id": "descent_controlled_window",
          "label": "Controlled Window",
          "condition": "Coalition lanes are strong and the party moves quickly.",
          "effect": "The party arrives with enough time to read the override sequence.",
          "softPoint": "Grant a clearer first check or reduced CPP pressure."
        },
        {
          "id": "descent_closing_window",
          "label": "Closing Window",
          "condition": "CPP advanced or coalition lanes are strained.",
          "effect": "The party arrives under active collapse, separated pressure, or immediate hazard.",
          "softPoint": "Start decommission with a cost already active."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Descent hook",
          "speaker": "GM",
          "line": "The heat changes. Not stronger. Closer. And now, above it, gold crownlines pulse like a command the city cannot refuse.",
          "purpose": "Signal final descent under CPP."
        },
        {
          "timing": "CPP route loss",
          "speaker": "GM",
          "line": "A walkway ahead drops three inches, then six, then tears away as lift is stolen upward through the wall beside it.",
          "purpose": "Show CPP causing instability."
        },
        {
          "timing": "Opening lower route",
          "speaker": "GM",
          "line": "The passage descends into heat that moves like breath through stone — and breath that is running out.",
          "purpose": "Lead into controlled decommission."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "relatedTrackers": [
      "tracker_emberroot_core_stability",
      "tracker_emberroot_exfil_state"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "How much of the override window remains when the party arrives?",
      "levers": [
        "Move quickly through collapsing paths.",
        "Use Ashbound route knowledge.",
        "Rely on giant-cut openings.",
        "Preserve Kaldra/Ironhand guidance.",
        "Avoid crownline-fed hazards."
      ],
      "consequences": [
        "The final operation starts with more or less CPP pressure.",
        "Allied lanes can provide one-use advantages.",
        "Delay determines how much is already unsavable."
      ]
    },
    "relatedLocations": [
      "location_emberfall_core_furnace"
    ]
  },
  {
    "id": "scene_emberroot_lower_works_controlled_decommission",
    "title": "Lower Works Operation — Controlled Decommission",
    "session": "session_05_lower_works_operation",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "final operation / skill progress / backdrop threat",
    "priority": "high",
    "trigger": "",
    "summary": "With Crown Preservation already underway, the party enters the Lower Works to manually override the final locks and decommission the coerced life-support system while a Forge Lord lava submersible, the Crown Anvil, arrives to enforce upper-city survival.",
    "playerFacing": "The Lower Works no longer feel like a chamber. They feel like a body being murdered by its own head. Gold crownlines pulse through the walls, dragging pressure upward. Red warning runes bloom across the lower housings one after another. Every breath the upper city takes now comes from somewhere below losing air. Kaldra points to the manual override dais. “There. That is the last place they cannot fully lock from above.” Then the lava moves.",
    "gmTruth": "Controlled decommission is the decisive intervention: vent, redirect, cool, evacuate, release, then seal what remains. The Crown Anvil is not the boss; it is scene pressure trying to complete CPP while the party works.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_skarth_firebrand",
      "actor_cinder_channeler",
      "actor_magma_reaver",
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_fire_giants",
      "faction_emberroot_ashbound",
      "faction_valkyries",
      "faction_emberroot_forge_lords"
    ],
    "clues": [
      "The Lower Works are a life-support lung built from captivity, not a single switch.",
      "The Crown Anvil is a Forge Lord contingency vessel designed to enforce Crown Preservation from below.",
      "The party cannot fight the entire vessel directly; they must complete the decommission while allies hold it back.",
      "Skarbrand and his lieutenants can oppose the vessel, break anchors, and shield the override platform, but they cannot perform the sequence.",
      "The sequence must release without re-binding and seal only what protects evacuees from death-throes."
    ],
    "outcomes": [
      "Full success completes controlled decommission before CPP completion: routes remain open, emberlings are released without immediate mass rupture, and the people have a path out.",
      "Partial success completes late: one route, district, ally, or group becomes unsavable.",
      "Failure or severe delay triggers Runaway Transformation Variant or a harsher Hot Exfil.",
      "Skarbrand's arrival pays off giant trust by turning their force against the Crown Anvil rather than the city."
    ],
    "pressure": "Complete controlled decommission before CPP makes the lower city unsavable.",
    "runNote": "Run as progress checks under pressure. The party needs 6 progress before CPP pressure overwhelms the lower city. The Crown Anvil acts as a backdrop disaster engine. Skarbrand and two lieutenants arrive to oppose it and buy time, but the players must complete the override.",
    "tags": [
      "valhalla",
      "ember-root",
      "controlled-decommission",
      "lower-works",
      "crown-anvil",
      "skill-progress",
      "finale"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s05_unsavable",
        "scene_emberroot_runaway_transformation_variant",
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "decommission_full_success",
          "label": "Full Controlled Decommission",
          "condition": "Party completes 6 progress before CPP pressure overwhelms the lower city.",
          "effect": "The system exhales in sequence; evacuation remains viable and release does not become immediate mass rupture.",
          "softPoint": "Best outcome; still costly."
        },
        {
          "id": "decommission_partial_success",
          "label": "Partial Controlled Decommission",
          "condition": "Party completes the sequence late or with major costs.",
          "effect": "Release is shaped but one major route, district, ally, or population cluster is lost.",
          "softPoint": "Route to The Unsavable before Hot Exfil."
        },
        {
          "id": "decommission_runaway",
          "label": "Runaway Release / Transformation",
          "condition": "CPP pressure or mistakes overwhelm the sequence.",
          "effect": "Release becomes unstable and the Runaway Transformation Variant may trigger.",
          "softPoint": "Use as danger state, not default."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "The Crown Anvil appears",
          "speaker": "GM",
          "line": "The lava below the Lower Works bulges upward. Not a wave. A hull. A black-iron prow rises through molten light, runes burning gold along its seams. It shoulders through lava like a command seal given a body.",
          "purpose": "Introduce the Forge Lord lava submersible as backdrop pressure."
        },
        {
          "timing": "Kaldra identifies it",
          "speaker": "Kaldra",
          "line": "No. Proof they planned this.",
          "purpose": "Make the vessel a contingency, not a random enemy."
        },
        {
          "timing": "Progress objective",
          "speaker": "Kaldra",
          "line": "Vent. Redirect. Cool. Evacuate. Release. Seal what remains. If we skip the order, people die.",
          "purpose": "State the progress sequence."
        },
        {
          "timing": "Crown Anvil targets platform",
          "speaker": "GM",
          "line": "Gold runes flare along the Crown Anvil's hull. Its prow turns toward the manual override platform.",
          "purpose": "Force action under pressure."
        },
        {
          "timing": "Skarbrand arrives",
          "speaker": "GM",
          "line": "The lava behind it erupts. A giant hand closes over the submarine's anchor-chain. Another hand follows. Skarbrand rises out of the molten glare with two lieutenants at his back, fire running off their shoulders like rain.",
          "purpose": "Pay off giant alliance emotionally."
        },
        {
          "timing": "Skarbrand vow",
          "speaker": "Skarbrand",
          "line": "No more crowns below.",
          "purpose": "Make allied giant intervention memorable."
        },
        {
          "timing": "Coalition exchange",
          "speaker": "Skarbrand",
          "line": "Tell me what not to break.",
          "purpose": "Show giant trust in sequence."
        },
        {
          "timing": "Coalition exchange",
          "speaker": "Kaldra",
          "line": "That one. That one. Not the red-lit housing. Not until they vent the chamber.",
          "purpose": "Keep Kaldra central to technical order."
        },
        {
          "timing": "Closing release beat",
          "speaker": "GM",
          "line": "The system does not shut down. It exhales. For one moment, every chain in the Lower Works goes slack. Not broken. Released.",
          "purpose": "Bridge to Unsavable/Hot Exfil."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_city_breathing_wrong",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_stolen_emberlings",
      "thread_emberroot_safe_deconstruction",
      "thread_emberroot_consent_transition"
    ],
    "relatedTrackers": [
      "tracker_emberroot_core_stability",
      "tracker_emberroot_giant_timer",
      "tracker_emberroot_unsavable_crises",
      "tracker_emberroot_exfil_state"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice",
    "outcomeShift": {
      "question": "Can the party finish decommission while the Crown Anvil enforces Crown Preservation?",
      "levers": [
        "Identify the live crownline feed.",
        "Vent lower pressure.",
        "Redirect flow into dead channels.",
        "Cool the manual override housing.",
        "Release bound pressure without re-binding.",
        "Seal collapse paths behind evacuation.",
        "Coordinate Skarbrand's breaks and protect Kaldra."
      ],
      "consequences": [
        "The old Emberfall cannot survive unchanged.",
        "The people can survive if evacuation lanes hold.",
        "The Crown Anvil's pressure determines how much CPP already cost."
      ]
    },
    "progressModel": {
      "controlledDecommissionTrack": {
        "target": 6,
        "steps": [
          "Identify the live crownline feed.",
          "Vent pressure away from evacuation routes.",
          "Redirect flow into dead channels.",
          "Cool and stabilize the manual override window.",
          "Release bound pressure without re-binding.",
          "Seal remaining death-throes behind evacuation routes."
        ]
      },
      "crownPreservationPressure": {
        "target": 5,
        "stages": [
          "Crownlines pulse gold through the Lower Works.",
          "Lower routes choke with smoke and pressure.",
          "The Crown Anvil arrives.",
          "Upper seal begins final isolation.",
          "Lower city becomes unsavable except for routes already opened."
        ]
      }
    }
  },
  {
    "id": "scene_emberroot_s05_unsavable",
    "title": "The Unsavable — What CPP Already Cost",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "consequence / crisis",
    "priority": "high",
    "trigger": "",
    "summary": "The party sees the cost Crown Preservation already inflicted: one route, district, archive, ally, population cluster, or legacy cannot be saved even if the decommission succeeds.",
    "playerFacing": "The decision the Forge Lords made reaches places the party cannot. Orders have already become seals. Seals have already become heat. Heat has already become names no one can answer. You do not get to save the city from consequence. You get to choose where your hands go first.",
    "gmTruth": "This scene is not punishment. It is the visible cost of a protocol already underway and the hard truth that withdrawal saves people without restoring the city as it was.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_forge_city",
      "location_emberfall_chainways",
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    "involvedFactions": [
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "CPP determines what was already sacrificed before the coalition could act.",
      "Resolved earlier crises become advantages, routes, allies, or time buffers.",
      "Ignored earlier crises return as blocked routes, unstable systems, casualties, or lost groups.",
      "High Insight and strong coalition support improve mitigation, not a clean solution.",
      "The old Emberfall cannot survive unchanged."
    ],
    "outcomes": [
      "The party commits to one immediate crisis response or accepts one visible loss.",
      "One or two consequences may be mitigated depending on prior setup and allies.",
      "At least one crisis resolves without the party and becomes the emotional cost of Act 2.",
      "The result directly shapes Hot Exfil hazards and tone."
    ],
    "pressure": "Pick where your hands go. The rest still happens.",
    "runNote": "Run as a consequence engine, not a new planning phase. Show 2–3 simultaneous crisis fronts tied to CPP and prior choices. Let earlier successes mitigate or save one additional front.",
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "cpp-cost",
      "forced-loss",
      "consequence"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "unsavable_people_first",
          "label": "People First",
          "condition": "Party prioritizes evacuation, rescue, triage, or Ashbound survival.",
          "effect": "More lives are saved, but routes, containment, or institutional control may worsen.",
          "softPoint": "Best emotional survival path."
        },
        {
          "id": "unsavable_routes_first",
          "label": "Routes First",
          "condition": "Party prioritizes evacuation lanes, bridges, tunnels, or extraction paths.",
          "effect": "Movement and exfil improve, but trapped civilians or containment problems may worsen elsewhere.",
          "softPoint": "Best tactical survival path."
        },
        {
          "id": "unsavable_cpp_cost",
          "label": "CPP Already Cost This",
          "condition": "CPP timer advanced or breakout/decommission was costly.",
          "effect": "One named route, group, archive, or district is already gone.",
          "softPoint": "Use to show Forge Lord responsibility without punishing player success."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Scene start",
          "speaker": "GM",
          "line": "It all happens at once, but not all of it begins now. Some of it began when the Crown Protocol fed the first gold line.",
          "purpose": "Tie consequence to CPP."
        },
        {
          "timing": "People crisis",
          "speaker": "GM",
          "line": "Below, evacuation lines buckle as smoke rolls through the lower platforms. You can hear names being shouted into fire.",
          "purpose": "Present human front."
        },
        {
          "timing": "Route crisis",
          "speaker": "GM",
          "line": "An Ashbound tunnel mouth coughs heat, then collapses inward with people still running toward the next turn.",
          "purpose": "Present route front."
        },
        {
          "timing": "Ignored crisis resolves",
          "speaker": "GM",
          "line": "Somewhere you are not, the thing the Forge Lords chose finishes happening.",
          "purpose": "Make unsavable explicit."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_forge_lord_legitimacy_collapse"
    ],
    "relatedTrackers": [
      "tracker_emberroot_unsavable_crises",
      "tracker_emberroot_core_stability",
      "tracker_emberroot_exfil_state"
    ],
    "visibilityGates": [
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "collapse_escape",
    "outcomeShift": {
      "question": "What did Crown Preservation already make impossible to save?",
      "levers": [
        "People first.",
        "Routes first.",
        "Containment/decommission stability first.",
        "Giant or Ashbound ally protection.",
        "Valkyrie extraction window."
      ],
      "consequences": [
        "The final exfil inherits the chosen and unchosen costs.",
        "The party sees the old city's death and the people's survival as separate outcomes."
      ]
    }
  },
  {
    "id": "scene_emberroot_runaway_transformation_variant",
    "title": "Runaway Transformation Variant",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "variant crisis / unstable release consequence",
    "priority": "high",
    "trigger": "",
    "summary": "If controlled decommission fails, completes too late, or release accelerates beyond sequence, the final crisis shifts from withdrawal into uncontrolled transformation.",
    "playerFacing": "The Core does not rage. It expands. Heat becomes alive in the walls, moving through metal, stone, chain, and root like breath finding new lungs. Structures do not simply break; they soften, bloom, split, and become something else. The old city is not falling behind you. It is changing around you.",
    "gmTruth": "The party did not simply fail. The withdrawal lost sequence. The danger is real, but the frame is transformation rather than ordinary collapse.",
    "involvedActors": [
      "actor_skarth_firebrand",
      "actor_thora_kara_emberroot",
      "actor_cinder_channeler"
    ],
    "involvedLocations": [
      "location_emberfall_core_furnace",
      "location_emberfall_forge_city",
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_valkyries",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "This is not ordinary collapse; the environment is changing state.",
      "Heat behaves like living motion instead of uncontrolled fire.",
      "Old containment architecture fails by becoming irrelevant, not merely broken.",
      "Giants may treat the transformation as liberation while evacuees experience it as catastrophe."
    ],
    "outcomes": [
      "Hot Exfil hazards become stranger, less predictable, and more alive.",
      "Skarbrand's faction may assist or clear paths, but their help worsens preservation outcomes.",
      "City Breath State is no longer only about preventing collapse; it is about surviving uncontrolled change."
    ],
    "pressure": "Escape from uncontrolled transformation, not ordinary collapse.",
    "runNote": "Use only if release becomes unsequenced, CPP pressure overwhelms the decommission, or the party explicitly accelerates release beyond evacuation capacity.",
    "tags": [
      "valhalla",
      "ember-root",
      "runaway-transformation",
      "variant",
      "unstable-release"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "transformation_runaway",
          "label": "Runaway Transformation",
          "condition": "Party broke sequence or CPP pressure overwhelmed the decommission.",
          "effect": "The city changes violently and rapidly. Exfil becomes surreal and unstable.",
          "softPoint": "Most dangerous transformation outcome."
        },
        {
          "id": "transformation_shaped",
          "label": "Shaped Release",
          "condition": "Party completed some sequence but not enough to fully stabilize release.",
          "effect": "Transformation still begins, but some paths, people, or districts are spared the worst first wave.",
          "softPoint": "Partial mitigation."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Transformation reveal",
          "speaker": "GM",
          "line": "The nearest chain does not snap. It flowers red-hot, links opening like iron petals before running into the stone.",
          "purpose": "Show change instead of simple destruction."
        },
        {
          "timing": "Environmental shift",
          "speaker": "GM",
          "line": "The floor softens under old rune-lines. The walls breathe heat. Every path you trusted is becoming a question.",
          "purpose": "Make exfil assumptions unstable."
        },
        {
          "timing": "Valkyrie reaction",
          "speaker": "Thora",
          "line": "What have you done?",
          "purpose": "Make branch emotionally legible without calling it evil."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_consent_transition",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
    "relatedTrackers": [],
    "visibilityGates": [
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "collapse_escape"
  },
  {
    "id": "scene_emberroot_hot_exfil",
    "title": "Hot Exfil — Ashbound Tunnels / Outer Shell Breach",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "escape / consequence",
    "priority": "high",
    "trigger": "",
    "summary": "The party escapes through the live consequences of controlled decommission and CPP, using Ashbound tunnels while giants breach the outer shell and Valkyries extract those who cannot move.",
    "playerFacing": "The city does not collapse behind you. It collapses with you inside it. Every route remembers what you saved. Every blocked path remembers what the Crown Protocol stole. The air is full of heat, ash, shouted names, ringing chains, and Valkyrie wings fighting for space in a sky that no longer feels reachable.",
    "gmTruth": "Hot Exfil is the final expression of Act 2 consequences: every unresolved crisis becomes a hazard, every resolved crisis becomes a benefit, and the people survive through routes the old city refused to honor.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_skarth_firebrand",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind"
    ],
    "involvedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_core_furnace",
      "location_emberfall_lower_furnaces"
    ],
    "involvedFactions": [
      "faction_valkyries",
      "faction_emberroot_fire_giants",
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "Hazards map directly to unresolved crises from Arrival, Confrontation, CPP, and Controlled Decommission.",
      "Benefits map directly to rescued civilians, preserved routes, stabilized systems, giant coordination, Ashbound trust, or improved Insight.",
      "The Valkyries need space, timing, and viable routes to extract the trapped and immobile.",
      "Skarbrand and giants can breach the outer shell but cannot move the whole population themselves.",
      "Exfil is about surviving consequences, not outrunning a generic explosion."
    ],
    "outcomes": [
      "The party escapes Emberfall, but the visible cost follows them.",
      "Resolved crises reduce exfil difficulty or create one-use advantages.",
      "Unresolved crises create hazards, blocked paths, casualties, or delayed extraction windows.",
      "Valkyrie strain is seeded for Valhalla fallout.",
      "The final tone of Act 2 is determined by what the party sees during escape."
    ],
    "pressure": "Survive the consequences, not the clock.",
    "runNote": "Run 2–4 fast exfil beats. For each beat, present a hazard tied to unresolved crisis or CPP damage and allow one decisive response. Pay off rescued civilians, preserved Chainways, Ashbound trust, giant coordination, and Kaldra's decommission work as concrete advantages.",
    "tags": [
      "valhalla",
      "ember-root",
      "hot-exfil",
      "ashbound-tunnels",
      "outer-shell-breach",
      "escape",
      "consequence"
    ],
    "forwardPath": {
      "upNext": [
        "scene_valhalla_post_act2_reflection"
      ],
      "branches": [
        {
          "id": "exfil_ashbound_tunnels",
          "label": "Ashbound Tunnel Exfil",
          "condition": "Party preserved Ashbound trust, prioritized evacuation, and rejected re-binding.",
          "effect": "Ashbound guides open hidden routes while Ironhands sequence vents and Giants break blocked stone behind them.",
          "softPoint": "Best people-survive path; the city-as-hierarchy dies behind them."
        },
        {
          "id": "exfil_outer_shell_breach",
          "label": "Outer Shell Breach",
          "condition": "Giant coordination remains active.",
          "effect": "Skarbrand and the giants breach the outer city shell, creating an impossible exit toward the new start.",
          "softPoint": "Pay off giant alliance."
        },
        {
          "id": "exfil_preserved_chainway",
          "label": "Preserved Chainway Holds",
          "condition": "Crisis B or later route-first actions preserved infrastructure.",
          "effect": "A damaged but usable route allows faster extraction or avoids one major hazard.",
          "softPoint": "Pay off arrival infrastructure rescue."
        },
        {
          "id": "exfil_transformation_route",
          "label": "Transformation Route",
          "condition": "Runaway Transformation or shaped release is active.",
          "effect": "Routes shift, mutate, or open unpredictably; some hazards become strange opportunities.",
          "softPoint": "Use for unstable release branch."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Exfil begins",
          "speaker": "GM",
          "line": "The city does not collapse behind you. It collapses with you inside it.",
          "purpose": "Frame escape as consequence."
        },
        {
          "timing": "Ashbound tunnel route opens",
          "speaker": "Bruni",
          "line": "No titles. No cargo. No one deciding who counts. When I say move, move.",
          "purpose": "Make Ashbound tunnel escape practical and morally centered."
        },
        {
          "timing": "Tunnel descent",
          "speaker": "GM",
          "line": "The official routes vanish behind smoke and command lines. The Ashbound routes open under your feet: ash drains, old cuts, crawlways, root-adjacent hollows — the city beneath the city.",
          "purpose": "Show the ignored city saving its people."
        },
        {
          "timing": "Giant-carved route assist",
          "speaker": "GM",
          "line": "Behind you, a fire giant drives both hands into blocked stone and tears open a passage no dwarf map ever admitted existed.",
          "purpose": "Pay off coordinated deconstruction."
        },
        {
          "timing": "Valkyrie extraction window",
          "speaker": "Kara",
          "line": "I need space to land!",
          "purpose": "Make extraction active."
        },
        {
          "timing": "Outer shell breach",
          "speaker": "Skarbrand",
          "line": "Go. We break the shell.",
          "purpose": "Create the final escape opening."
        },
        {
          "timing": "Last look back",
          "speaker": "GM",
          "line": "As the wings and tunnels carry the living away, Emberfall falls behind you — not as one disaster, but as every choice becoming visible at once.",
          "purpose": "Close the field sequence and bridge to fallout."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_safe_deconstruction"
    ],
    "relatedTrackers": [
      "tracker_emberroot_exfil_state",
      "tracker_emberroot_unsavable_crises"
    ],
    "visibilityGates": [
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "collapse_escape",
    "outcomeShift": {
      "question": "What survives the withdrawal?",
      "levers": [
        "Use Ashbound routes.",
        "Trust giant-carved openings.",
        "Protect evacuation columns.",
        "Create Valkyrie landing windows.",
        "Accept that Emberfall's old structure is gone."
      ],
      "consequences": [
        "People survive through the hidden city.",
        "The outer shell breach becomes the path toward a new start.",
        "The old hierarchy cannot claim it saved them."
      ]
    }
  }
];
