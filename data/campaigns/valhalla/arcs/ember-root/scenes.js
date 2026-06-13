// Questforge GM Cockpit Dashboard — EmberRoot Scenes
// -----------------------------------------------------------------------------
// Navigation note:
// - This is a JavaScript module, so comments and VS Code //#region folding are safe.
// - Keep this file data-only. Do not add runtime logic here.
// - House convention: quoted keys for campaign data arrays; unquoted keys for app code.
// -----------------------------------------------------------------------------

export const scenes = [

  // ============================================================================
  //#region ACT 2 / SESSION 01 — ARRIVAL HOT ZONE
  // ============================================================================

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
    "summary": "The party lands inside an active disaster with three immediate nearby crises: civilians in danger, a collapsing structure, and a fire giant/forge overlord escalating the damage.",
    "playerFacing": "For one breath, there is nothing but rainbow-white light and the sensation of floating inside a silent fall. Emberfall burns somewhere below the veil, vast and unreadable. Then the Bifrost sputters, the color snaps out, and gravity takes you all at once.",   
    "gmTruth": "This scene teaches the Act 2 rule: they can save something, but not everything.",
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
      "Enemies exploit collapse rather than simply attack.",
      "Structures, civilians, and enemies are all active objectives."
    ],
    "outcomes": [
      "If the party lands together, one crisis can be fully addressed.",
      "If the party splits, two crisis zones can be meaningfully addressed: one Valkyrie/horse plus part of the party per zone.",
      "Each Valkyrie/horse can support roughly two players under these conditions, but cannot maintain altitude or solve the crisis alone.",
      "At least one crisis zone receives no direct support and worsens.",
      "The ignored crisis creates later consequences during High Forge, investigation, or Hot Exfil."
    ],
    "outcomeShift": {
      "question": "Which crisis receives the party's first real attention?",
      "levers": [
        "Land together and fully address one crisis.",
        "Split with Valkyrie support to partially address two crisis zones.",
        "Prioritize people, routes, or containment pressure."
      ],
      "consequences": [
        "The supported crisis becomes a later advantage.",
        "The unsupported crisis worsens into later consequence texture.",
        "The party immediately learns that Act 2 choices create visible costs."
      ]
    },
    "pressure": "Immediate sensory overload and forced prioritization.",
    "runNote": "This is not a clean Bifrost insertion. Thora and Kara ride the failing drop down to prevent a fatal crash, but the horses are overloaded and cannot maintain altitude. Present the three crises as separated bad landing zones. The party may land together and fully address one crisis, or split into two groups with one Valkyrie/horse per group to address two crises. A third crisis is always left unsupported and worsens.",
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
          "timing": "Valkyries ride the broken drop",
          "speaker": "GM",
          "line": "Thora and Kara scream down through the broken light after you, their horses slam under your falling weight, wings flaring hard as they catch riders, armor, packs, and panic all at once.",
          "purpose": "Make it clear the Valkyries are improvising an emergency rescue."
        },
        {
          "timing": "Overloaded descent",
          "speaker": "GM",
          "line": "The horses can carry you, but they cannot climb.",
          "purpose": "Explain why the landing choice is urgent and constrained."
        },
        {
          "timing": "Disaster panorama",
          "speaker": "GM",
          "line": "Below you, Emberfall is already dying in pieces. Civilians trapped behind white-orange heat, chainways buckle under fleeing crowds, command lines choke evacuation routes, and fire giants hammer stabilizer housings with terrible purpose.", 
          "purpose": "Present the three crisis branches as separated crash sites."
        },
        {
          "timing": "engaging the players",
          "speaker": "GM",
          "line": "Thora twists in the saddle, teeth clendhed against the wind.",
          "purpose": "Force the party to choose a landing zone while still falling."
        },

        {
          "timing": "Landing choice",
          "speaker": "Thora",
          "line": "Where are we landing?!",
          "purpose": "Force the party to choose a landing zone while still falling."
        }
      ]
    },
    "linkedScenes": [
      "scene_emberroot_arrival_evacuate_civilians",
      "scene_emberroot_arrival_stabilize_structure",
      "scene_emberroot_arrival_stop_forge_overlord"
    ],
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
    "visibilityGate": "arrival_hot_zone"
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
    "playerFacing": "Thora and Kara drive the failing descent toward a civilian pocket where the fire has not fully closed yet. You hit hard into a shower of sparks and hot metal beside a crowd already breaking apart — workers dragging the injured, families split across catwalks, a mother and child stranded on a crumbling platform, and people still trapped behind heat, debris, and jammed machinery. No one here needs explanation. They need hands, now.",    "gmTruth": "Saving people matters, but it costs time and may worsen routes or system state.",
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
      "This rescue zone is not one problem but several at once: trapped people, spreading fire, unstable footing, blocked exits, and panic.",
      "Some civilians can be saved quickly if the party clears routes or calms the crowd instead of only pulling individual victims.",
      "The Valkyries can carry people, shield the vulnerable, or pull victims from immediate danger, but they cannot save everyone alone.",
      "Saving the most visible people may cost time that could preserve evacuation flow for others.",
      "Ignoring this branch means real named and visible casualties, not abstract losses."
    ],
    "outcomes": [
      "The party can save a meaningful group of civilians here, but not every trapped person.",
      "Possible rescue priorities include: pulling trapped victims free, clearing an escape route, stabilizing a sagging platform, carrying the wounded, or controlling panic long enough for evacuation to move.",
      "If the party acts decisively, survivors reach the High Forge and Ashbound trust improves.",
      "If the party saves individuals but not the route, later evac traffic worsens.",
      "If the party clears the route but cannot save everyone caught behind it, the rescue succeeds at a cost.",
      "Whatever is not handled here becomes part of the later consequence report at High Forge Refuge."
    ],
    "outcomeShift": {
      "question": "Does the party make Ashbound survival visible before the city can reduce it to loss math?",
      "levers": [
        "Pull trapped civilians free.",
        "Clear a route instead of saving only the nearest visible victims.",
        "Use Valkyrie support to move the most vulnerable.",
        "Calm or redirect panic."
      ],
      "consequences": [
        "Ashbound trust improves.",
        "Later evacuation has more human help and better route testimony.",
        "If ignored, civilian loss becomes named and visible at High Forge."
      ]
    },
    "pressure": "Human cost in immediate view.",
    "runNote": "If chosen first, the party crash-lands directly into a civilian rescue pocket. Present the scene as multiple simultaneous rescue pressures: trapped people, closing fire, sagging platforms, blocked routes, jammed machinery, and panic. Thora and Kara can carry civilians, shield the vulnerable, or pull people from immediate danger, but they defer rescue priority to the players and cannot save everyone. Let the party choose what kind of rescue they are performing, not just who they grab first. Let structure or enemy sabotage worsen elsewhere.",    "tags": [
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
          "timing": "Crash landing into the rescue zone",
          "speaker": "GM",
          "line": "The horses hit hard beside a wave of fleeing workers. Heat rolls over you in a white-orange wall, and every direction already contains someone screaming for help.",
          "purpose": "Frame this branch as a live civilian disaster, not a quiet rescue tableau."
        },
        {
          "timing": "Crisis reveal",
          "speaker": "Civilian",
          "line": "Please—over here! My brother is still inside!",
          "purpose": "Make this branch about visible people, not abstract rescue math."
        },
        {
          "timing": "Valkyrie capacity pressure",
          "speaker": "Kara",
          "line": "I can pull them out... not all of them. Who first?",
          "purpose": "Show that Valkyrie help is real but limited, and put the choice on the players."
        },
        {
          "timing": "Human stakes become visible",
          "speaker": "GM",
          "line": "A mother and child are stranded on a crumbling platform while workers below try to hold up the buckling support with their bare arms.",
          "purpose": "Make the rescue concrete, immediate, and emotionally legible."
        },
        {
          "timing": "Rescue options come into focus",
          "speaker": "GM",
          "line": "You can pull people free, clear a path, hold the platform, carry the wounded, or stop the crowd from collapsing into panic — but not all at once.",
          "purpose": "Turn the rescue into clear playable priorities."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_forge_lord_legitimacy_collapse"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone"
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
      "Clearing people and cargo will reduce load before the span tears loose.",
      "Cooling overheated supports, venting pressure, or redirecting forge-water can buy time.",
      "Bracing, anchoring, pinning, or cutting loose dead weight can keep the main route from dropping."
    ],
    "outcomes": [
      "2 successful interventions: the route survives, but damaged; later exfil remains possible with hazards.",
      "3 successful interventions: the route survives as a meaningful evacuation/exfil asset.",
      "0–1 successful interventions: part of the Chainway collapses and becomes a later exfil hazard.",
      "If chosen first, preserve movement and later extraction options. Let civilians or enemy sabotage worsen elsewhere."
    ],
    "pressure": "The bridge is not one problem. It is too heavy, too hot, and losing tension.",
    "runNote": "If chosen first, preserve movement and later extraction options. Let civilians or enemy sabotage worsen.",
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
          "purpose": "Connect this branch directly to the failed Bifrost landing choice."
        },
        {
          "timing": "Structure audibly fails",
          "speaker": "GM",
          "line": "A massive chain-link support snaps somewhere above you with a sound like a bell being torn in half.",
          "purpose": "Make infrastructure failure immediate and sensory."
        },
        {
          "timing": "Crisis reveal",
          "speaker": "Engineer",
          "line": "That support is going! If this span drops, we lose the route!",
          "purpose": "Make the structure a future-route consequence, not just scenery."
        },
        {
          "timing": "Action options become clear",
          "speaker": "Engineer",
          "line": "Too much weight, too much heat, and the north anchor is slipping! Clear the span, cool the supports, brace the chain, or cut something loose before it takes the whole route down!",
          "purpose": "Give players actionable solution lanes without turning the scene into engineering homework."
        },
        {
          "timing": "Human cost enters the frame",
          "speaker": "Worker",
          "line": "There are people still crossing!",
          "purpose": "Tie infrastructure to immediate human cost."
        },
        {
          "timing": "Valkyrie support limit",
          "speaker": "Thora",
          "line": "I can catch the ones who fall. I cannot hold the bridge.",
          "purpose": "Show that Valkyries can prevent instant death, but the players must solve the structural crisis."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_caste_pressure"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone"
  },
  {
    "id": "scene_emberroot_arrival_stop_forge_overlord",
    "title": "Crisis C — Stop the Forge Overlord",
    "session": "session_01_the_city_burns",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "arrival branch / enemy escalation",
    "priority": "high",
    "trigger": "",
    "summary": "The party can stop a fire giant/forge-overlord threat that is deliberately smashing stabilizers, housings, or containment-linked routes.",
    "playerFacing": "Thora and Kara drive the overloaded horses toward the enemy pressure point, where fire giants are not chasing civilians or holding territory. They are striking housings, chain anchors, and stabilizer pylons with brutal precision. Each impact sends a furnace-deep groan through the district, like something below is answering.",
    "gmTruth": "Enemies are crisis multipliers, not isolated combat pieces.",
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
      "The giants are not attacking randomly; they are targeting stabilizers, housings, chain anchors, and restraint-linked infrastructure.",
      "Their goal is not battlefield victory. Their goal is release.",
      "Every damaged stabilizer makes the civilian and structure crises worse.",
      "The fire giant threat can be delayed, disrupted, or redirected without needing a full defeat.",
      "Skarth’s philosophy is visible in the tactic: containment is the enemy."
    ],
    "outcomes": [
      "Stopping the enemy quickly preserves stabilizers and reduces later Core instability.",
      "Disrupting or delaying the giants buys time but leaves damaged infrastructure behind.",
      "Driving them off gives the party a tactical win and a clearer clue that the giants want release.",
      "Ignoring this branch lets enemy sabotage worsen civilian danger, structural collapse, and later Core pressure.",
      "If chosen first, enemy escalation is blunted; civilians or structure worsen elsewhere."
    ],
    "pressure": "This is a fight, but the enemy objective is release, not victory.",
    "runNote": "Run short and objective-forward. The enemy is trying to break the scene, not win initiative math.",
    "tags": [
      "valhalla",
      "ember-root",
      "arrival",
      "fire-giants",
      "enemy",
      "sabotage"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_high_forge_refuge"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "Crash landing near enemy pressure point",
          "speaker": "GM",
          "line": "The horses drop you hard beside a stabilizer pylon, close enough that the heat off the nearest giant hits like an opened furnace door.",
          "purpose": "Connect this branch directly to the failed Bifrost landing choice."
        },
        {
          "timing": "Enemy objective reveal",
          "speaker": "GM",
          "line": "The giants are not chasing civilians. They are not holding ground. They are striking the housings, anchors, and restraint points that keep the district from tearing itself open.",
          "purpose": "Show enemies as release agents, not simple attackers."
        },
        {
          "timing": "Enemy pressure",
          "speaker": "Fire Giant",
          "line": "The chains are lies. Set it free.",
          "purpose": "Shift the enemy language from destruction to release."
        },
        {
          "timing": "System response",
          "speaker": "GM",
          "line": "The pylon cracks. Somewhere below, something answers with a pulse of heat through the stone.",
          "purpose": "Foreshadow that the giants are interacting with a deeper containment system."
        },
        {
          "timing": "Action options become clear",
          "speaker": "GM",
          "line": "You can engage the giant directly, protect the stabilizer, reinforce the housing, pull workers clear, or cut off the channelers feeding the strike.",
          "purpose": "Give players actionable lanes beyond ordinary combat."
        },
        {
          "timing": "Valkyrie support limit",
          "speaker": "Thora",
          "line": "I can keep you alive in this. I cannot stop that thing and carry the wounded too.",
          "purpose": "Show that Valkyries support the party but do not solve the objective."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_caste_pressure"
    ],
    "visibilityGates": [
      {
        "id": "arrival_hot_zone",
        "label": "Arrival / Hot Zone"
      }
    ],
    "visibilityGate": "arrival_hot_zone",
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
    "summary": "After the first triage cluster, the party reaches a relatively safer High Forge gathering point where survivor reports and caste arguments reveal the three investigation routes.",
    "playerFacing": "For the first time since the Bifrost failed, the party reaches a place that almost feels like shelter. The High Forge rises above the worst of the burning districts: cleaner stone, organized guard lines, command voices, triage mats, water crews, and survivors being counted by name. You get one breath that is not falling, not burning, not screaming. Then the smoke catches in your throat, another tremor rolls through the floor, and every face turns toward you with the same question: what did Valhalla send?",
    "gmTruth": "This is where the party learns the disaster is not one problem: system failure, enemy exploitation, and Root resonance overlap.",
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
      "Ironhand engineers see contradictory failures.",
      "Ashbound workers insist warnings were ignored.",
      "Fire giants targeted infrastructure with intent.",
      "The fires may have started pulsing before the enemy breach."
    ],
    "outcomes": [
      "Players identify which investigation branch to pursue first.",
      "Arrival choices influence who trusts them here.",
      "Investigation Clock begins to matter openly."
    ],
    "pressure": "Everyone wants the party to validate their version of the crisis.",
    "runNote": "Open this scene by reporting what the party saved and what worsened elsewhere. Read only the conditional consequence beats that match the completed and unresolved arrival branches, then move into the caste argument and A/B/C investigation leads.",
    "tags": [
      "valhalla",
      "ember-root",
      "high-forge",
      "refuge",
      "branch-setup",
      "managed-panic"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s02_thread_a_system_failure",
        "scene_emberroot_s02_thread_b_giant_interference",
        "scene_emberroot_s02_thread_c_root_resonance"
      ],
      "branches": [],
      "scriptedMoments": [
        {
          "timing": "If Crisis A — Evacuate Civilians was not completed",
          "speaker": "GM",
          "line": "The first reports from the lower platforms arrive in fragments: names missing, families split, smoke-heavy survivors insisting there were still people beyond the fire when the route was cut off.",
          "purpose": "Show the human cost of not landing in the civilian pocket."
        },
        {
          "timing": "If Crisis A was completed",
          "speaker": "GM",
          "line": "The rescued civilians reach the High Forge in small, shaking groups. Some are burned. Some are crying. But they are alive, and the Ashbound see who made that possible.",
          "purpose": "Confirm that saving people mattered."
        },
        {
          "timing": "If Crisis B — Stabilize Collapsing Structure was not completed",
          "speaker": "GM",
          "line": "A runner arrives from the Chainways covered in rust dust and blood. The route is not gone, but it is no longer reliable — whole sections hang lower than they should, and evacuation traffic is already backing up.",
          "purpose": "Show the route/exfil cost of not stabilizing the span."
        },
        {
          "timing": "If Crisis B was completed",
          "speaker": "GM",
          "line": "The Chainway still groans under every movement, but it holds. Evacuation lines begin forming around it instead of away from it.",
          "purpose": "Confirm that preserving infrastructure changed later options."
        },
        {
          "timing": "If Crisis C — Stop the Forge Overlord was not completed",
          "speaker": "GM",
          "line": "The next tremor comes from below, not above. Someone says another stabilizer housing split open under giant hands, and for a moment every rune-light in the High Forge flickers the same color.",
          "purpose": "Show enemy sabotage accelerating because the party did not stop the release attempt."
        },
        {
          "timing": "If Crisis C was completed",
          "speaker": "GM",
          "line": "The stabilizer housing is cracked but intact. The giants were driven back before they could open it fully, and the engineers keep looking at the damage like it almost said something.",
          "purpose": "Confirm that stopping the enemy preserved the system and created a clue."
        },
        {
          "timing": "Arrival at High Forge",
          "speaker": "GM",
          "line": "The High Forge is cleaner than the districts below, but not calmer. Orders echo off black stone balconies, wounded survivors are sorted under guard, and every controlled voice is one bad report away from breaking.",
          "purpose": "Reframe the pace from immediate triage to managed panic."
        },
        {
          "timing": "First breath",
          "speaker": "GM",
          "line": "For one moment, the party can breathe. Then the breath turns rough with smoke, and the floor answers with another low tremor.",
          "purpose": "Give the party a pause, then immediately remind them the crisis is still alive."
        },
        {
          "timing": "Ambient cast — triage line",
          "speaker": "Triage Worker",
          "line": "Names first! If you can walk, move left. If you cannot, do not move them without an Ironhand!",
          "purpose": "Show organized panic and caste procedure under pressure."
        },
        {
          "timing": "Ambient cast — survivor report",
          "speaker": "Smoke-Covered Survivor",
          "line": "There were more behind us. I heard them. I heard them when the fire came through.",
          "purpose": "Keep the unresolved civilian cost present even in the safer zone."
        },
        {
          "timing": "Ambient cast — guard control",
          "speaker": "Forge Guard",
          "line": "Make a lane! Give the sky-riders room. No one touches them until the Forge Lords speak.",
          "purpose": "Identify the party as important and politically dangerous."
        },
        {
          "timing": "Forge Lord recognition",
          "speaker": "Durgrim",
          "line": "Powerful riders arrive in our hour of fracture. For that, Emberfall gives thanks. For the timing, Emberfall has questions.",
          "purpose": "Greet the party with appreciation and distrust at the same time."
        },
        {
          "timing": "Valkyrie boundary",
          "speaker": "Kara",
          "line": "Questions later. Count your living first.",
          "purpose": "Let the Valkyries push back without taking command from the party."
        },
        {
          "timing": "Caste collision",
          "speaker": "Durgrim",
          "line": "The system holds because we hold it. Panic is how cities die.",
          "purpose": "Open the branch hub through Forge Lord denial and control ideology."
        },
        {
          "timing": "Caste collision",
          "speaker": "Kaldra",
          "line": "No. It holds because it has not finished failing yet.",
          "purpose": "Point toward System Failure / Thread A."
        },
        {
          "timing": "Caste collision",
          "speaker": "Bruni",
          "line": "We warned you. You called it acceptable loss.",
          "purpose": "Point toward caste pressure and worker cost."
        }
      ]
    },
    "linkedScenes": [
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s02_thread_c_root_resonance"
    ],
    "relatedThreads": [
      "thread_emberroot_control_vs_survival",
      "thread_emberroot_fire_is_people",
      "thread_emberroot_safe_deconstruction"
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

  // ============================================================================
  //#endregion ACT 2 / SESSION 01 — ARRIVAL HOT ZONE
  // ============================================================================


  // ============================================================================
  //#region ACT 2 / SESSION 02 — INVESTIGATION THREADS
  // ============================================================================

  {
    "id": "scene_emberroot_s02_thread_a_system_failure",
    "title": "Thread A — System Failure",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation thread",
    "priority": "high",
    "trigger": "",
    "summary": "The party enters a Midworks overflow chamber where contradictory readings, straining valves, and failing seals reveal that Emberfall’s power system is being pushed beyond safe limits.",
    "playerFacing": "The route down from the High Forge enters the Midworks, where Emberfall stops looking like a fortress and starts looking like a heart under strain. Vast pipes carry heat and pressure upward from the lower furnaces. Seals glow white at their edges. Valve wheels shudder in their housings. Behind reinforced glass, Ironhand overseers argue over readings that do not agree with the room in front of you.",
    "gmTruth": "The Midworks are not simply malfunctioning; they are channeling more living pressure from below than the city was designed to safely move.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_ironhand_engineer"
    ],
    "involvedLocations": [
      "location_emberfall_midworks"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "The Midworks channel raw heat and pressure from the lower furnaces upward into the High Forge.",
      "The control-room readings contradict what is physically happening in the chamber.",
      "The seals are not failing from damage alone; they are straining against overflow from below.",
      "Opening every valve would spread the overload. Closing every valve would rupture the chamber.",
      "The correct response is to vent pressure, redirect flow, and reseal the main channel in sequence."
    ],
    "outcomes": [
      "Stabilizing the overflow chamber proves the system is overloaded, not merely broken.",
      "A clean stabilization reduces immediate Midworks danger and slows City Breath State loss.",
      "A partial stabilization prevents catastrophe but leaves the High Forge under power strain.",
      "A failed sequence causes a violent pressure vent and makes the Ironhand engineers look less in control.",
      "Combining this thread with Root Resonance reveals that the pressure is coming from something alive or semi-alive below."
    ],
    "pressure": "The city’s blood is moving too fast, and the people in charge cannot see the wound clearly from behind glass.",
    "runNote": "Run this as a reactor-room overflow encounter. The overseers and Kaldra can see contradictory readings from the control room, but the party must enter the valve chamber and physically adjust the system. The solution is not all-open or all-closed: vent pressure first, redirect flow second, reseal the main channel third. Wrong moves should cause heat bursts, seal strain, steam knockback, or temporary system spikes rather than instant failure.",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-a",
      "system-failure",
      "midworks"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_realization_shift",
        "scene_emberroot_core_furnace_descent"
      ],
      "branches": [
        {
          "id": "thread_a_low_pressure",
          "label": "Low Pressure — Early Overflow",
          "condition": "Thread A is investigated first, or before the Midworks pressure has worsened.",
          "effect": "The valve chamber is unstable but readable. The party can diagnose the sequence before major rupture.",
          "softPoint": "Clean stabilization is possible: vent pressure, redirect flow, then seal the main line."
        },
        {
          "id": "thread_a_medium_pressure",
          "label": "Medium Pressure — Active Seal Strain",
          "condition": "Thread A was left unattended for one investigation window.",
          "effect": "A seal is already glowing white and pressure readings are spiking. The party enters with one complication active.",
          "softPoint": "Stabilization is still possible, but one valve area begins in fail-state and must be handled immediately."
        },
        {
          "id": "thread_a_high_pressure",
          "label": "High Pressure — Reactor Room Overload",
          "condition": "Thread A was left unattended for two or more investigation windows.",
          "effect": "The chamber is venting violently into secondary channels. The party can still learn the truth, but the system is already damaging the High Forge supply.",
          "softPoint": "Prevent catastrophe rather than achieve clean stabilization; success reduces harm but cannot fully erase the delay."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Shift from High Forge to Midworks",
          "speaker": "GM",
          "line": "The descent from the High Forge takes you below the command balconies and into the working organs of Emberfall. Pipes the size of towers carry heat upward. The floor beats under your boots like the city has a pulse.",
          "purpose": "Move the camera from managed panic to the city’s power-circulation layer."
        },
        {
          "timing": "Control-room contradiction",
          "speaker": "Ironhand Overseer",
          "line": "Our readings are all contradictory. Main pressure says falling. Seal pressure says rising. Flow says stable. What do you see in there?",
          "purpose": "Force the party to trust physical observation over authority readouts."
        },
        {
          "timing": "Kaldra identifies the real problem",
          "speaker": "Kaldra",
          "line": "We need to inspect the heart closer in. Perhaps adjust the valves, but we need to see the real readings in there.",
          "purpose": "Clarify overload without solving the whole mystery."
        },
        {
          "timing": "Interaction point — overflow chamber",
          "speaker": "GM",
          "line": "Three valve wheels dominate the chamber. One vents pressure into a relief stack. One redirects flow into secondary channels. One seals the main line. All three are shaking. The wrong order will not fix this — it will spread it.",
          "purpose": "Give the party a concrete physical system to manipulate."
        },
        {
          "timing": "Valve sequence clue",
          "speaker": "Ironhand Engineer",
          "line": "Do not seal it under pressure! Bleed it, move it, then lock it down!",
          "purpose": "Provide the intended valve order in urgent in-world language."
        },
        {
          "timing": "Successful stabilization",
          "speaker": "GM",
          "line": "The relief stack screams white steam. The secondary channels take the glow. Then the main seal finally bites shut, and the chamber drops from a roar to a wounded thrum.",
          "purpose": "Confirm success while keeping the city unstable."
        },
        {
          "timing": "Truth after the fix",
          "speaker": "Kaldra",
          "line": "That was not random failure. Something below is pushing more through the system than the Midworks can carry.",
          "purpose": "Point toward the deeper Core/Root truth."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_caste_pressure"
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
    "visibilityGate": "calm_center_investigation"
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
    "priority": "high",
    "trigger": "",
    "summary": "The party follows guard movement into a Midworks riot-zone where fire giants are using the crisis to attack restraint systems and free what they believe Emberfall has trapped below.",
    "playerFacing": "The route down from the High Forge is clogged with Forge Guards moving at a run, shields half-raised and orders breaking apart into shouted fragments. Below, the Midworks have become something between a riot, a breach, and a prison break. Fire giants are smashing barricades, throwing aside guards, and driving toward stabilizer housings with terrifying purpose. They are not moving like invaders. They are moving like people who know exactly where the locks are.",
    "gmTruth": "The giants are denizens of Emberfall’s lower order, not outside invaders. They are exploiting the disaster to free themselves and what they believe is trapped beneath the city, but they are still hurting anyone and anything that tries to stop them.",
    "involvedActors": [
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard"
    ],
    "involvedLocations": [
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "The giants are not foreign invaders; they know the Midworks routes, guard patterns, and restraint systems.",
      "Their movement looks like a riot or prison break more than a military assault.",
      "They ignore many easy targets and focus on barricades, stabilizer housings, chain anchors, and containment-linked machinery.",
      "They believe something below Emberfall is trapped and should be freed.",
      "Their cause may be understandable, but their method is causing civilian deaths, structural damage, and worsening instability."
    ],
    "outcomes": [
      "Stopping the immediate riot protects guards, workers, and restraint systems from further damage.",
      "Questioning, observing, or sparing a giant can reveal that they see themselves as liberators, not invaders.",
      "Treating this only as a monster fight risks missing the release ideology behind the violence.",
      "Letting the giants continue worsens City Breath State, structural safety, and later exfil pressure.",
      "This branch gives leverage for later Skarth conversations if the party recognizes the difference between cause and method."
    ],
    "pressure": "The giants are wrong about the cost, not necessarily wrong that something is trapped.",
    "runNote": "Run this as a riot-zone intervention, not a standard enemy encounter. The party enters amid rushing guards, broken barricades, and giants pushing toward restraint infrastructure. The objective can be to stop a strike team, protect a housing, separate guards and giants, capture/interrogate a participant, or prevent a channeler from opening the next lock. Keep combat short and objective-based. The deeper reveal is that the giants are exploiting the failure, not causing it.",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-b",
      "fire-giants",
      "chainways"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_realization_shift",
        "scene_emberroot_core_furnace_descent"
      ],
      "branches": [
        {
          "id": "thread_b_low_pressure",
          "label": "Low Pressure — Riot Forming",
          "condition": "Thread B is investigated first, or before giant action has widened.",
          "effect": "The party reaches the riot-zone before the restraint housing is opened.",
          "softPoint": "They can interrupt the channeler, question the motive, or protect the housing before major damage."
        },
        {
          "id": "thread_b_medium_pressure",
          "label": "Medium Pressure — Housing Breached",
          "condition": "Thread B was left unattended for one investigation window.",
          "effect": "The giants have forced the restraint housing half-open and guards are losing the line.",
          "softPoint": "The party can still stop the release attempt, but must choose between the housing, wounded guards, and capturing intel."
        },
        {
          "id": "thread_b_high_pressure",
          "label": "High Pressure — Riot Spreading",
          "condition": "Thread B was left unattended for two or more investigation windows.",
          "effect": "A housing has been broken open and the giants are moving toward the next lock.",
          "softPoint": "The party can contain the spread or gain hard intel, but cannot fully undo the damage already done."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Shift from High Forge to riot-zone",
          "speaker": "GM",
          "line": "You do not need directions. You follow the guards running down from the High Forge, past ash-streaked walls and warning bells, until command language gives way to impact, screaming metal, and the roar of giants.",
          "purpose": "Move the camera from managed panic into active Midworks conflict."
        },
        {
          "timing": "Riot revealed",
          "speaker": "GM",
          "line": "This is not an invasion line. It is a riot with a target. Fire giants shove through barricades, throw guards aside, and drive toward a restraint housing built into the wall of the Midworks.",
          "purpose": "Frame the giants as local uprising and release-agents rather than foreign attackers."
        },
        {
          "timing": "Guard report",
          "speaker": "Wounded Guard",
          "line": "They know the lanes. They knew which gates were light, which locks mattered, where we would be thinnest.",
          "purpose": "Show that the giants understand Emberfall from inside the system."
        },
        {
          "timing": "Interaction point — restraint housing under assault",
          "speaker": "GM",
          "line": "Ahead, a stabilizer housing is half-open, its restraint-runes exposed. One giant holds the guard line back while a cinder-channeler drives both hands into the seam, feeding fire into the lock.",
          "purpose": "Give the party a concrete objective beyond winning initiative."
        },
        {
          "timing": "Giant ideology line",
          "speaker": "Fire Giant",
          "line": "The chains are lies. Set it free.",
          "purpose": "Make the release motive explicit in the middle of the violence."
        },
        {
          "timing": "Action options become clear",
          "speaker": "GM",
          "line": "You can break the channeler’s focus, reinforce the housing, hold the guard line, pull the wounded clear, or try to make them answer why this lock matters.",
          "purpose": "Give players tactical and investigative lanes at the same time."
        },
        {
          "timing": "Clue summary",
          "speaker": "GM",
          "line": "That was not panic. That was a keyhole.",
          "purpose": "Keep Thread B from becoming the false main answer."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_core_is_not_enemy",
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "relatedLocations": [
      "location_emberfall_core_furnace"
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
    "trigger": "",
    "summary": "The party follows lower-tier reports to a mystical Root-intersection offshoot where the World Tree root touches Emberfall’s machinery and shows signs of overload, amplification, and distress.",
    "playerFacing": "The path away from the High Forge does not descend into the deep furnaces so much as turn aside from them. Past service stairs, ash-marked walls, and half-abandoned work shrines, the Midworks open into a quieter offshoot where metal gives way to black stone and root-vein. Here the warning bells sound distant. Heat moves in slow pulses through the walls. Fine ash gathers in branching patterns across the floor, and something vast beneath the city seems to breathe too hard.",
    "gmTruth": "The Root is not corrupting Emberfall. It is amplifying and carrying more pressure than the city should be forcing through it.",
    "involvedActors": [
      "actor_bruni_coalhand",
      "actor_ashbound_defender",
      "actor_kaldra_steelmind"
    ],
    "involvedLocations": [
      "location_emberfall_lower_furnaces"
    ],
    "involvedFactions": [
      "faction_emberroot_ashbound",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "This is not the Deep Forge; it is a Root-intersection offshoot where World Tree root-vein crosses Emberfall’s Midworks.",
      "The pulses are rhythmic and responsive, not random fire spread.",
      "Ash, heat, and rune-light branch outward from the Root-vein instead of radiating from ordinary damage.",
      "The Root appears overloaded or overfed rather than malicious.",
      "The fires may be answering pressure from below before any visible sabotage or mechanical failure.",
      "The Root amplifies what passes through it; it does not choose the shape of what Emberfall forces into it."
    ],
    "outcomes": [
      "Reading the resonance gives the party a clearer warning that the Core is not simply an enemy.",
      "Careful observation or respectful interaction grants an Early Core Read or Insight advantage.",
      "Misreading the Root as corruption pushes the party toward suppression instead of understanding.",
      "This branch can be completed before or after the system and giant threads without assuming those clues are known.",
      "The party leaves with a sensory truth: something below is overwhelmed, responsive, and being made louder."
    ],
    "pressure": "The clearest truth is not the loudest crisis.",
    "runNote": "Run this as a quiet investigation and omen scene, not an emergency repair. The party finds a Root-intersection offshoot where the city’s machinery meets living myth. Let them inspect ash patterns, pulse rhythms, root-veins, heat blooms, shrine markings, worker testimony, or magical resonance. There may be nothing to fix immediately; the reward is correct interpretation. If pursued early or carefully, grant Early Core Read or +1 Insight.",
    "tags": [
      "valhalla",
      "ember-root",
      "thread-c",
      "root-resonance",
      "lower-furnaces"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_realization_shift",
        "scene_emberroot_core_furnace_descent"
      ],
      "branches": [
        {
          "id": "thread_c_low_pressure",
          "label": "Low Pressure — Quiet Pulse",
          "condition": "Thread C is investigated first, or before Root pressure has intensified.",
          "effect": "The Root offshoot is eerie but readable. The pulse is slow enough to study.",
          "softPoint": "Careful interpretation can grant Early Core Read or +1 Insight without immediate cost."
        },
        {
          "id": "thread_c_medium_pressure",
          "label": "Medium Pressure — Overfull Pattern",
          "condition": "Thread C was left unattended for one investigation window.",
          "effect": "The ash patterns are stronger, heat pulses are faster, and workers report the walls answering more often.",
          "softPoint": "The truth is clearer, but the Root’s distress adds pressure to the clock or City Breath State."
        },
        {
          "id": "thread_c_high_pressure",
          "label": "High Pressure — Resonance Surge",
          "condition": "Thread C was left unattended for two or more investigation windows.",
          "effect": "The Root offshoot is actively surging. The party can still read the truth, but the scene feels like standing beside something overwhelmed and awake.",
          "softPoint": "The clue becomes unmistakable, but the cost rises: City Breath State worsens, a vision hits hard, or the party must choose whether to soothe, suppress, or endure the resonance."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Shift from High Forge to Root offshoot",
          "speaker": "GM",
          "line": "The route away from the High Forge does not follow the loudest alarms. It bends into older service passages where the stone is darker, the metalwork thins, and the heat stops roaring long enough to become a pulse.",
          "purpose": "Move the camera from managed panic to a quieter mystical investigation space."
        },
        {
          "timing": "Root-intersection reveal",
          "speaker": "GM",
          "line": "The passage opens around a root-vein as thick as a tower column, blackened with age but threaded with ember-gold light. Emberfall was not built around it by accident. The city is connected to it.",
          "purpose": "Establish that this is a World Tree intersection, not merely furnace damage."
        },
        {
          "timing": "Ashbound testimony",
          "speaker": "Ashbound Worker",
          "line": "The fires were pulsing before the giants came. Before the housings split. We told them the walls were answering something.",
          "purpose": "Give this branch independent evidence that the Root behavior predates obvious causes."
        },
        {
          "timing": "Resonance observation",
          "speaker": "GM",
          "line": "Ash drifts across the floor in branching lines. When the root-light brightens, every nearby rune answers half a breath later.",
          "purpose": "Show amplification and response without naming the full Core truth."
        },
        {
          "timing": "Kaldra interpretation",
          "speaker": "Kaldra",
          "line": "That is not corruption. Corruption consumes pattern. This is making the pattern louder.",
          "purpose": "Clarify amplification without assuming the party completed Thread A or B."
        },
        {
          "timing": "Interaction point — read the resonance",
          "speaker": "GM",
          "line": "There is no valve to turn here. No enemy line to break. Only the pulse, the ash-patterns, the root-vein, and the question of whether you treat this like a sickness, a signal, or a wound.",
          "purpose": "Give the players a meaningful investigative interaction instead of a repair task."
        },
        {
          "timing": "Clue summary",
          "speaker": "GM",
          "line": "Not spreading. Answering. Not hungry. Overfull.",
          "purpose": "Make the Root feel responsive and overloaded without revealing everything too early."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",

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
    "relatedLocations": [
      "location_emberfall_core_furnace"
    ]
  },
  {
    "id": "scene_emberroot_realization_shift",
    "title": "Realization Shift — It Is Not One Thing",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation synthesis",
    "priority": "high",
    "trigger": "",
    "summary": "When players connect at least two investigation threads, the frame changes from finding one cause to recognizing a cascade: system overload, giant exploitation, and Root amplification feeding each other.",
    "playerFacing": "The pieces do not collapse into one clean answer. They stack. The Midworks are carrying too much. The giants know exactly which restraints to strike. The Root is not spreading fire like an infection — it is answering pressure, making everything louder, faster, and harder to contain. It is not one thing. It is a cascade.",
    "gmTruth": "The crisis is a cascade. Emberfall’s systems are beyond safe operating limits, the giants are exploiting restraint failures to pursue release, and the Root is amplifying what the city forces through it rather than corrupting the city on its own.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_bruni_coalhand"
    ],
    "involvedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "No single faction had the whole truth; each was interpreting one part of the cascade.",
      "Thread A shows the Midworks are overloaded and carrying too much pressure from below.",
      "Thread B shows the giants are exploiting the crisis by attacking restraint points, not causing the entire disaster alone.",
      "Thread C shows the Root is overwhelmed and amplifying pressure rather than maliciously corrupting Emberfall.",
      "The correct read is not system failure, enemy sabotage, or Root corruption by itself.",
      "The Core Furnace becomes the next obvious pressure point because all three threads point downward."
    ],
    "outcomes": [
      "Insight may increase if the party connects at least two threads correctly.",
      "The party can now choose the Core Furnace descent with better context.",
      "If they only connected A + B, they may still over-prioritize sabotage and infrastructure failure.",
      "If they connected A + C, they begin the strongest true read: overload plus amplification.",
      "If they connected B + C, they understand release ideology and Root distress, but may still misunderstand the technical overload.",
      "If they connected A + B + C, they have near-full realization; the Investigation Clock determines whether this insight arrives early enough to prevent later costs."
    ],
    "pressure": "The answer is clearer now, but clarity does not mean control.",
    "runNote": "Use when the party connects at least two investigation threads or reaches deeper evidence. Do not present this as a lecture. Summarize only the clues they have actually earned, then point them downward toward the Core Furnace. A/B/C can be completed in any order, so avoid assuming knowledge from an unvisited branch.",
    "tags": [
      "valhalla",
      "ember-root",
      "realization",
      "investigation",
      "synthesis"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_core_furnace_descent"
      ],
      "branches": [
        {
          "id": "realization_a_only",
          "label": "A Only — System Failure Read",
          "condition": "Only Thread A has been meaningfully investigated.",
          "effect": "The party sees overload and contradiction, but may still think Emberfall is suffering a technical failure."
        },
        {
          "id": "realization_b_only",
          "label": "B Only — Giant Cause Read",
          "condition": "Only Thread B has been meaningfully investigated.",
          "effect": "The party sees giant violence and targeted sabotage, but may mistake the giants for the root cause."
        },
        {
          "id": "realization_c_only",
          "label": "C Only — Root Cause Read",
          "condition": "Only Thread C has been meaningfully investigated.",
          "effect": "The party sees Root distress and amplification, but may not yet understand what is overfeeding it."
        },
        {
          "id": "realization_a_b",
          "label": "A + B — Sabotage and System Read",
          "condition": "Threads A and B have been investigated.",
          "effect": "The party sees system overload and giant exploitation, but may still frame the crisis as infrastructure failure plus sabotage."
        },
        {
          "id": "realization_a_c",
          "label": "A + C — Strong Truth Read",
          "condition": "Threads A and C have been investigated.",
          "effect": "The party begins the clearest true read: the system is carrying too much from below, and the Root is amplifying rather than corrupting."
        },
        {
          "id": "realization_b_c",
          "label": "B + C — Release and Root Read",
          "condition": "Threads B and C have been investigated.",
          "effect": "The party sees release ideology and Root distress, but may misattribute the overload to giant interference unless they check the Midworks."
        },
        {
          "id": "realization_a_b_c",
          "label": "A + B + C — Full Cascade Read",
          "condition": "All three investigation threads have been investigated.",
          "effect": "The party has near-full realization: system overload, giant release tactics, and Root amplification are feeding the same collapse."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "When players connect at least two investigation threads",
          "speaker": "GM",
          "line": "It is not one thing. Not one source. Not one failure.",
          "purpose": "Move the table from cause-hunting to cascade logic."
        },
        {
          "timing": "Thread A connection",
          "speaker": "GM",
          "line": "The Midworks were not lying. They were overloaded — carrying more than they were built to move.",
          "purpose": "Fold System Failure into the synthesis if Thread A was investigated."
        },
        {
          "timing": "Thread B connection",
          "speaker": "GM",
          "line": "The giants were not the beginning of the disaster. They were the ones who knew where to strike once it started.",
          "purpose": "Fold Giant Interference into the synthesis if Thread B was investigated."
        },
        {
          "timing": "Thread C connection",
          "speaker": "GM",
          "line": "The Root was not spreading corruption. It was answering pressure — and making the pressure louder.",
          "purpose": "Fold Root Resonance into the synthesis if Thread C was investigated."
        },
        {
          "timing": "Realization lands",
          "speaker": "GM",
          "line": "Every path points downward now: overload, restraint, release, resonance. Whatever is happening, the Core Furnace is where the answers stop being separate.",
          "purpose": "Point toward Core Furnace descent."
        },
        {
          "timing": "Kaldra names the shape",
          "speaker": "Kaldra",
          "line": "Cascade failure. Not one break. A system teaching every other system how to fail.",
          "purpose": "Give the technical synthesis in Kaldra's voice."
        },
        {
          "timing": "Bruni names the cost",
          "speaker": "Bruni",
          "line": "So everyone was right enough to be dangerous, and wrong enough to get people killed.",
          "purpose": "Ground the realization in social and human consequence."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy"
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
    "visibilityGate": "calm_center_investigation"
  },
  {
    "id": "scene_emberroot_core_furnace_descent",
    "title": "Core Furnace Descent — The Heat Changes",
    "session": "session_02_the_breaking_point",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "transition / descent hook",
    "priority": "high",
    "trigger": "",
    "summary": "The party commits to going below, where the heat feels closer rather than stronger and the separate crisis threads begin to converge into one pressure.",
    "playerFacing": "The route downward does not feel like descending into a basement or furnace room. It feels like walking toward the source of a breath. The heat does not simply grow stronger. It grows closer. Pipes, roots, chains, and stone all seem to pulse in imperfect rhythm, as if every part of Emberfall is trying to decide whether to hold together or answer what waits below.",
    "gmTruth": "The Core Furnace will reveal containment, not villainy.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_midworks",
      "location_emberfall_lower_furnaces",
      "location_emberfall_chainways"
    ],
    "involvedFactions": [
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "The heat is not simply increasing; it is getting closer and more responsive.",
      "The route downward carries signs from all investigated threads: overload, restraint damage, and Root pulse.",
      "The Core Furnace is the point where separate clues stop being separate.",
      "Delay changes the descent: the same route becomes louder, hotter, and less stable as pressure rises.",
      "The party is moving from investigation into direct contact with the living containment system."
    ],
    "outcomes": [
      "The party commits to the Forge Below / Living Core scene.",
      "Low pressure descent gives cleaner observation and better positioning.",
      "Medium pressure descent adds instability, blocked paths, or strained systems.",
      "High pressure descent begins with active Core instability or giant timer pressure already visible.",
      "The descent establishes the starting pressure state for Forge Below."
    ],
    "pressure": "Answers are below, but so is the cost of time.",
    "runNote": "Use this as a threshold scene, not a full encounter. The party is leaving investigation space and entering the pressure source. If they reached this point early or with strong Insight, let the descent be readable and ominous. If they delayed or left branches to worsen, make the same route unstable: blocked paths, heat surges, damaged seals, separated footing, or an advanced giant timer. Then move directly into Forge Below / Living Core.",
    "tags": [
      "valhalla",
      "ember-root",
      "descent",
      "core-furnace",
      "transition"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s03_forge_below_living_core"
      ],
      "branches": [
        {
          "id": "descent_low_pressure",
          "label": "Low Pressure — Controlled Descent",
          "condition": "The party reaches the Core route early or with strong Insight.",
          "effect": "The route is dangerous but readable. The party can observe signs before the Forge Below crisis fully erupts.",
          "softPoint": "Grant clearer opening clues or favorable starting position."
        },
        {
          "id": "descent_medium_pressure",
          "label": "Medium Pressure — Strained Descent",
          "condition": "The party reaches the Core route after one major delay or unresolved pressure state.",
          "effect": "Heat pulses through the route, seals groan, and one visible complication blocks or taxes the descent.",
          "softPoint": "Require a navigation, endurance, engineering, or magical mitigation moment before arrival."
        },
        {
          "id": "descent_high_pressure",
          "label": "High Pressure — Descent Under Surge",
          "condition": "The party reaches the Core route late or after multiple unattended pressures worsen.",
          "effect": "The route downward is already reacting. The party arrives under immediate instability or with the giant timer advanced.",
          "softPoint": "Start Forge Below with a cost already active: City Breath State loss, separated entry, damaged route, or immediate timer tick."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Descent hook",
          "speaker": "GM",
          "line": "The heat changes. Not stronger. Closer.",
          "purpose": "Signal that the investigation has become descent."
        },
        {
          "timing": "Threshold realization",
          "speaker": "GM",
          "line": "Above you, the city burns in separate disasters. Below you, those disasters begin to feel like one pressure.",
          "purpose": "Bridge investigation synthesis into the Core route without revealing everything."
        },
        {
          "timing": "Low pressure descent",
          "speaker": "GM",
          "line": "The route downward is dangerous, but legible. Heat pulses through pipe, root, and stone in a rhythm slow enough to follow.",
          "purpose": "Use if the party reached the descent early or with strong Insight."
        },
        {
          "timing": "Medium pressure descent",
          "speaker": "GM",
          "line": "The passage shudders as you descend. A seal groans somewhere in the walls, and the heat answers half a breath later.",
          "purpose": "Use if the party reaches the descent after one major delay or unresolved pressure."
        },
        {
          "timing": "High pressure descent",
          "speaker": "GM",
          "line": "The route is already reacting before you reach it. Stone cracks underfoot, chains ring below, and the heat comes in hard pulses like something straining against a door.",
          "purpose": "Use if the party reaches the descent late or under high Core pressure."
        },
        {
          "timing": "Opening the route downward",
          "speaker": "GM",
          "line": "The passage descends into heat that moves like breath through stone.",
          "purpose": "Lead into Forge Below."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_giants_want_release"
    ],
    "visibilityGates": [
      {
        "id": "calm_center_investigation",
        "label": "Calm Center / Investigation"
      }
    ],
    "visibilityGate": "calm_center_investigation",
    "relatedLocations": [
      "location_emberfall_core_furnace"
    ]
  },

  // ============================================================================
  //#endregion ACT 2 / SESSION 02 — INVESTIGATION THREADS
  // ============================================================================


  // ============================================================================
  //#region ACT 2 / SESSION 03 — FORGE BELOW
  // ============================================================================

  {
    "id": "scene_emberroot_s03_forge_below_living_core",
    "title": "Forge Below / Living Core",
    "session": "session_03_forge_below",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "system crisis",
    "priority": "high",
    "trigger": "",
    "summary": "The party reaches the living containment chamber where the Core, regulator pillars, chains, Root pressure, and giant interference all converge into one system crisis.",
    "playerFacing": "The Forge Below is not a throne room, not a boiler room, and not a battlefield until everyone else makes it one. At its center, the Core pulses inside chains, regulator pillars, and root-lit containment stone. It is alive, ancient, and under impossible pressure. Every strike against the restraints, every overloaded channel above, every forced demand from the city makes it answer harder.",
    "gmTruth": "The Core is not the enemy. It is holding the bomb.",
    "involvedActors": [
      "actor_kaldra_steelmind",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_ember_guard",
      "actor_skarth_firebrand"
    ],
    "involvedLocations": [
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_emberroot_ironhand_guilds"
    ],
    "clues": [
      "Regulator pillars and containment chains are not decorative; they are holding pressure in shape.",
      "The Core reacts to pressure, damage, release attempts, and attempts to understand it.",
      "The Core is alive or alive-adjacent, but its reactions are not simple hostility.",
      "The Core is holding back something worse than itself.",
      "Stabilizing containment, stopping giants, and engaging the Core are all valid priorities, but the party cannot fully optimize all three at once."
    ],
    "outcomes": [
      "The Core State is established for the Molten Council and Unsavable sequence.",
      "Protecting regulator pillars improves later stability.",
      "Understanding or calming the Core improves Insight and later negotiation/framing.",
      "Stopping the giant strike team slows release pressure.",
      "Failure or delay makes later scenes harsher: worse City Breath State, more violent exfil, or stronger Skarth leverage."
    ],
    "pressure": "Stabilize, stop giants, or engage Core — not all three.",
    "runNote": "Run this as a system crisis engine, not a boss arena. The Core should feel responsive, ancient, and overwhelmed rather than evil. Give the party three competing lanes: stabilize containment, stop giant interference, or engage/understand the Core. Use City Breath State, Giant Timer, and Insight to track which priority gets protected and which worsens.",
    "tags": [
      "valhalla",
      "ember-root",
      "session-3",
      "forge-below",
      "core-furnace"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s03_break_the_chains",
        "scene_emberroot_s04_molten_council"
      ],
      "branches": [
        {
          "id": "core_low_pressure",
          "label": "Low Pressure — Responsive Core",
          "condition": "The party reaches Forge Below early, with strong Insight, or after mitigating key pressures.",
          "effect": "The Core is strained but readable. Its pulses respond to careful action rather than immediately lashing out.",
          "softPoint": "Players can choose a primary approach: stabilize pillars, engage the Core, or intercept giants with manageable fallout."
        },
        {
          "id": "core_medium_pressure",
          "label": "Medium Pressure — Agitated Core",
          "condition": "The party reaches Forge Below after one or more pressures worsened.",
          "effect": "The Core reacts faster, regulator pillars are already stressed, and one crisis begins active.",
          "softPoint": "The party can still achieve a strong result, but must accept a tradeoff between City Breath State, giant interference, or personal risk."
        },
        {
          "id": "core_high_pressure",
          "label": "High Pressure — Surging Core",
          "condition": "The party reaches Forge Below late or after multiple high-pressure branches.",
          "effect": "The Core is surging against containment. Chains scream, pillars crack, and the scene begins with immediate instability.",
          "softPoint": "The party can prevent catastrophe or gain the truth, but cannot restore a clean state."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "First sight of the Core",
          "speaker": "GM",
          "line": "The Core does not sit in the chamber. The chamber is built around surviving it.",
          "purpose": "Make containment architecture immediately legible."
        },
        {
          "timing": "Core pulse",
          "speaker": "GM",
          "line": "The Core pulses. The chamber answers. Not with anger first — with pressure.",
          "purpose": "Make the Core feel responsive, not hostile."
        },
        {
          "timing": "Containment becomes visible",
          "speaker": "GM",
          "line": "Chains thicker than siege towers vanish into regulator pillars and root-lit stone. Every link is tense. Every pillar is singing under load.",
          "purpose": "Show that the chamber is restraining and shaping pressure."
        },
        {
          "timing": "Truth reveal",
          "speaker": "GM",
          "line": "The Core is not the bomb. The Core is the thing holding the bomb.",
          "purpose": "Reframe the scene from boss arena to containment crisis."
        },
        {
          "timing": "Priority pressure",
          "speaker": "GM",
          "line": "You can feel the three demands pulling apart: stabilize the containment, stop the giants, or try to reach the Core itself.",
          "purpose": "Make the scene’s impossible choice playable."
        },
        {
          "timing": "Kaldra system read",
          "speaker": "Kaldra",
          "line": "Those pillars are not locks. They are regulators. If they fail, pressure stops having shape.",
          "purpose": "Give the technical read without reducing the Core to machinery."
        },
        {
          "timing": "Core response to careful action",
          "speaker": "GM",
          "line": "When you stop forcing it, the pulse changes. Not calmer exactly. Listening.",
          "purpose": "Reward players who engage the Core as responsive rather than hostile."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path"
    ],
    "relatedTrackers": [
      "tracker_emberroot_core_stability",
      "tracker_emberroot_giant_timer",
      "tracker_emberroot_insight"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice"
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
    "trigger": "",
    "summary": "Skarth’s strike team tries to break or open the restraints around the Core, advancing a timer from arrival to destabilization to rupture.",
    "playerFacing": "A regulator pillar fractures with a sound like stone remembering pain. Chain tension shifts across the chamber, and the Core answers in a low pulse that rolls through your bones. Across the containment floor, fire giants target the pillars, seams, locks, and chains.",
    "gmTruth": "Skarth’s followers are not trying to win a fight. They are trying to make release irreversible.",
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
      "The giants target pillars, chains, locks, and regulator seams rather than the party first.",
      "Their goal is release, not victory.",
      "The strike team is advancing a timer: damage pillar, shift chain tension, open restraint, trigger rupture.",
      "Stopping the channelers matters as much as stopping the heavy hitters.",
      "Skarth may not be physically present, but the tactic reflects his philosophy."
    ],
    "outcomes": [
      "Stopped early: the Core remains more stable and later scenes soften.",
      "Partially stopped: one restraint is damaged but catastrophic release is delayed.",
      "Not stopped: instability spikes and later scenes become harsher.",
      "Capturing or hearing the strike team gives stronger leverage for understanding Skarth’s release argument.",
      "If the party focuses only on killing giants, the release timer may still advance."
    ],
    "pressure": "Timer-based objective: arrive, destabilize, partial rupture, catastrophic break.",
    "runNote": "Run this as an objective timer inside the Forge Below scene. Skarth is felt, not necessarily physically present. The giants target pillars, chains, seams, and regulator housings before they target the party. Let the players interrupt channelers, protect pillars, reinforce restraints, question the motive, or trade City Breath State for tactical advantage.",
    "tags": [
      "valhalla",
      "ember-root",
      "session-3",
      "strike-team",
      "skarth"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_s04_molten_council"
      ],
      "branches": [
        {
          "id": "chains_low_pressure",
          "label": "Low Pressure — Strike Team Arriving",
          "condition": "The party reaches or notices the strike team early.",
          "effect": "The giants are moving into position but have not yet fractured a regulator pillar.",
          "softPoint": "The party can intercept, negotiate, ambush, or protect the first target."
        },
        {
          "id": "chains_medium_pressure",
          "label": "Medium Pressure — First Pillar Fractured",
          "condition": "The giant timer has advanced once or Thread B was left partially unresolved.",
          "effect": "One regulator pillar is cracked and chain tension has shifted.",
          "softPoint": "The party can still prevent rupture, but must choose between stopping channelers and stabilizing damaged containment."
        },
        {
          "id": "chains_high_pressure",
          "label": "High Pressure — Restraint Opening",
          "condition": "The giant timer has advanced multiple times or the party reaches this module late.",
          "effect": "A chain is losing tension and a restraint point is opening.",
          "softPoint": "The party can prevent catastrophic break or gain hard truth, but cannot undo the damage cleanly."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Giant timer begins or advances",
          "speaker": "GM",
          "line": "A regulator pillar fractures. One chain screams under the shift in pressure.",
          "purpose": "Make the enemy objective physical."
        },
        {
          "timing": "Enemy objective becomes clear",
          "speaker": "GM",
          "line": "They are not trying to kill you. They are trying to free it.",
          "purpose": "Show release as the giant strategy."
        },
        {
          "timing": "Channeler action",
          "speaker": "GM",
          "line": "The cinder-channeler plants both hands against the regulator seam. Fire pours into the crack, not to burn it away, but to wake the pressure behind it.",
          "purpose": "Show that channelers accelerate release rather than simply attack."
        },
        {
          "timing": "Giant mantra",
          "speaker": "Fire Giant",
          "line": "The chains are lies. Set it free.",
          "purpose": "Tie the strike team to the release ideology."
        },
        {
          "timing": "Timer pressure",
          "speaker": "GM",
          "line": "The pillar is not destroyed yet, but it has changed. The chain no longer pulls evenly. The whole chamber feels it.",
          "purpose": "Show partial failure and make the timer visible."
        },
        {
          "timing": "Action lanes",
          "speaker": "GM",
          "line": "You can stop the channeler, brace the pillar, pull pressure away from the seam, confront the giant line, or try to make them answer why this restraint matters.",
          "purpose": "Offer playable choices beyond ordinary combat."
        },
        {
          "timing": "If the party stops the strike cleanly",
          "speaker": "GM",
          "line": "The chain snaps back into tension with a brutal sound, but it holds. The Core answers once — low, wounded, contained.",
          "purpose": "Confirm success without making the Core safe."
        },
        {
          "timing": "If the timer advances too far",
          "speaker": "GM",
          "line": "The restraint opens by a handspan, and every flame in the chamber leans toward it.",
          "purpose": "Show that release is beginning before full catastrophe."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_giants_want_release",
      "thread_emberroot_skarth_philosophical_alignment_path"
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
    "visibilityGate": "forge_below_choice"
  },

  // ============================================================================
  //#endregion ACT 2 / SESSION 03 — FORGE BELOW
  // ============================================================================


  // ============================================================================
  //#region ACT 2 / SESSION 04 — THE CHOICE
  // ============================================================================

  {
    "id": "scene_emberroot_s04_molten_council",
    "title": "The Choice / Molten Council",
    "session": "session_04_the_choice",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "decision / council",
    "priority": "high",
    "trigger": "",
    "summary": "The party returns from the Forge Below into the apex decision: reinforce containment, shut down the flow, collapse part of the system, prioritize evacuation, release pressure, or—if earned—side with Skarth’s transformation argument.",
    "playerFacing": "By the time the party returns from the Forge Below, the council chamber is already breaking into arguments. Heat rolls up through the floor in slow pulses. Guards hold the doors. Engineers carry fresh readings no one wants to believe. Ashbound survivors crowd the edges, soot-streaked and silent. Durgrim stands beneath the old seals of Emberfall like authority alone can hold the city together. Kaldra watches the numbers fail. Bruni watches the wounded. Skarth watches the party, calm as a lit fuse. Everyone turns when you enter, because you have seen what they have only been arguing about.",
    "gmTruth": "The players are choosing what survives, not what wins. The correct choice depends on what they value after understanding the cascade.",
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
      "The party has seen enough to know this is a cascade, not one clean cause.",
      "Durgrim’s answer preserves order and containment, but risks repeating the same control failure.",
      "Kaldra’s answer seeks technical stabilization or shutdown, but may require sacrificing parts of the city.",
      "Bruni’s answer prioritizes evacuation and living people over the survival of Emberfall’s old power structure.",
      "Skarth’s answer embraces release and transformation, but worsens immediate city stability.",
      "Insight clarifies costs; low Insight makes each faction sound more certain than they deserve.",
      "City Breath State and Investigation Clock determine how much time the council has before argument becomes collapse."
    ],
    "outcomes": [
      "The final Act 2 choice locks here.",
      "The chosen council branch determines what becomes unsavable first.",
      "Supporting containment preserves more structure but risks harsher moral fallout.",
      "Supporting controlled shutdown reduces pressure but may strand districts or kill power to critical systems.",
      "Supporting evacuation saves more people but weakens containment response and enrages authority factions.",
      "Supporting release or joining Skarth accelerates transformation and worsens immediate city stability.",
      "Hot Exfil and The Unsavable trigger immediately after the choice."
    ],
    "pressure": "The party is not choosing who is right. They are choosing which truth gets paid for first.",
    "runNote": "Run this as the apex decision scene. Start with the party returning from the Forge Below, then let each faction make one strong argument. Use the branches as decision paths and pressure variants. If City Breath State is low or the Investigation Clock is high, make the arguments shorter, sharper, and more desperate. If the party accuses or interrogates Skarth, fire moment_emberroot_skarth_council_reframe. If High Insight and player sympathy exist, make Join Skarth possible.",
    "tags": [
      "valhalla",
      "ember-root",
      "session-4",
      "choice",
      "council"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_join_skarth_branch",
        "scene_emberroot_s05_unsavable"
      ],
      "branches": [
        {
          "id": "council_reinforce_containment",
          "label": "Reinforce Containment",
          "condition": "Party sides with Durgrim, prioritizes order, or believes the Core must remain restrained at any cost.",
          "effect": "Containment holds longer and institutional authority survives, but pressure and human cost remain severe.",
          "softPoint": "Best for preserving structure; worst for repeating the control logic that helped create the crisis."
        },
        {
          "id": "council_controlled_shutdown",
          "label": "Controlled Shutdown",
          "condition": "Party sides with Kaldra or pursues a technical stabilization path.",
          "effect": "The city sacrifices output and parts of the system to reduce pressure safely.",
          "softPoint": "Best technical compromise if Insight is high; risks power loss, stranded districts, and political blame."
        },
        {
          "id": "council_evacuation_first",
          "label": "Evacuation First",
          "condition": "Party sides with Bruni or prioritizes living people over infrastructure.",
          "effect": "Resources shift toward evacuation, triage, and route survival instead of preserving the old system.",
          "softPoint": "Best human outcome; weakens containment response and enrages authority factions."
        },
        {
          "id": "council_forced_collapse",
          "label": "Forced Collapse / Sacrifice Section",
          "condition": "Party chooses to collapse, sever, or sacrifice a district/system segment to stop cascade spread.",
          "effect": "A contained disaster prevents broader failure, but the sacrificed area becomes an immediate Unsavable cost.",
          "softPoint": "Best when City Breath State is low and clean stabilization is gone."
        },
        {
          "id": "council_release_pressure",
          "label": "Release Pressure",
          "condition": "Party accepts that containment must open partially, without fully joining Skarth.",
          "effect": "Pressure vents and transformation begins in controlled or semi-controlled form.",
          "softPoint": "Best philosophical middle path; dangerous if Insight is low or City Breath State is already poor."
        },
        {
          "id": "council_join_skarth",
          "label": "Join Skarth",
          "condition": "Only available with High Insight plus real player sympathy, doubt about control, or prior engagement with Skarth’s argument.",
          "effect": "Objective flips from preserving Emberfall to enabling transformation/release.",
          "softPoint": "Not evil, not safe. This worsens the city immediately and routes to the Help Skarth branch."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Council chamber entrance",
          "speaker": "GM",
          "line": "When you enter, the argument stops for half a breath. Not because they agree. Because you have been below, and everyone in this room knows it.",
          "purpose": "Frame the party as the only people with enough firsthand truth to matter."
        },
        {
          "timing": "High clock pressure",
          "speaker": "GM",
          "line": "Another tremor climbs through the chamber floor. Dust falls from the old seals overhead, and this time no one pretends not to notice.",
          "purpose": "Use if the Investigation Clock is high or City Breath State is poor."
        },
        {
          "timing": "Durgrim’s case",
          "speaker": "Durgrim",
          "line": "If containment fails, there is no city left to save. Order first. Mercy after.",
          "purpose": "State the Forge Lord control argument."
        },
        {
          "timing": "Kaldra’s case",
          "speaker": "Kaldra",
          "line": "Order will not solve pressure. The system needs reduction, not confidence.",
          "purpose": "State the technical stabilization/shutdown argument."
        },
        {
          "timing": "Bruni’s case",
          "speaker": "Bruni",
          "line": "You keep saying city when you mean furnace. I mean people.",
          "purpose": "State the Ashbound survival argument."
        },
        {
          "timing": "Skarth’s case",
          "speaker": "Skarth",
          "line": "You call it collapse because you fear what it becomes without your hands around its throat.",
          "purpose": "State the release/transformation argument."
        },
        {
          "timing": "Skarth remains unreadable",
          "speaker": "GM",
          "line": "Skarth does not argue first. He watches the party like someone waiting for the evidence to speak for him.",
          "purpose": "Keep Skarth dangerous and available without forcing his reframe unless players press him."
        },
        {
          "timing": "Kaldra challenges Durgrim",
          "speaker": "Kaldra",
          "line": "If we reinforce everything, we may preserve the shape of the city long enough to kill everyone inside it.",
          "purpose": "Show why pure containment is not a clean answer."
        },
        {
          "timing": "Bruni challenges Kaldra",
          "speaker": "Bruni",
          "line": "Controlled shutdown. Controlled collapse. Controlled sacrifice. You always find cleaner words for who gets left below.",
          "purpose": "Keep technical solutions morally grounded."
        },
        {
          "timing": "Low insight confusion",
          "speaker": "GM",
          "line": "Every argument sounds true while it is being spoken. That is the danger.",
          "purpose": "Use if the party has low or partial Insight."
        },
        {
          "timing": "High insight clarity",
          "speaker": "GM",
          "line": "You can hear the shape beneath the words now: control, reduction, survival, release. None of them are lies. None of them are free.",
          "purpose": "Use if the party has strong Insight."
        },
        {
          "timing": "Choice pressure",
          "speaker": "GM",
          "line": "The chamber waits for your answer. Not because you command Emberfall. Because you are the only ones who have seen enough to choose what survives.",
          "purpose": "Force the apex decision."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_core_is_not_enemy",
      "thread_emberroot_skarth_philosophical_alignment_path",
    ],
    "relatedTrackers": [
      "tracker_emberroot_investigation_clock",
      "tracker_emberroot_insight",
      "tracker_emberroot_core_stability"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice"
  },
  
  {
    "id": "scene_emberroot_join_skarth_branch",
    "title": "Optional Branch — Help Skarth",
    "session": "session_04_the_choice",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "choice branch / philosophical alignment",
    "priority": "high",
    "trigger": "",
    "summary": "If earned, the party may choose transformation over control and actively help Skarth open, shape, or accelerate release. This worsens the city immediately but remains philosophically consistent.",
    "playerFacing": "Skarth does not celebrate when the room turns toward him. He looks almost tired. The chamber shakes again, and the old seals above the council flare like warnings no one trusts anymore. He looks at the party, not the Forge Lords. “You already see it,” he says. “This does not need to be saved. It needs to be allowed. Help me.”",
    "gmTruth": "This is not evil and not failure. It is a different answer to the same problem.",
    "involvedActors": [
      "actor_skarth_firebrand",
      "actor_magma_reaver",
      "actor_cinder_channeler",
      "actor_thora_kara_emberroot"
    ],
    "involvedLocations": [
      "location_emberfall_core_furnace",
      "location_emberfall_high_forge"
    ],
    "involvedFactions": [
      "faction_emberroot_fire_giants",
      "faction_emberroot_forge_lords",
      "faction_emberroot_ironhand_guilds",
      "faction_emberroot_ashbound"
    ],
    "clues": [
      "Entry requires High Insight and expressed sympathy, doubt about containment, or direct engagement with Skarth’s argument.",
      "The objective flips from preserving Emberfall’s current structure to enabling transformation or release.",
      "Helping Skarth does not make the party evil, but it does make the immediate disaster worse.",
      "The giants may assist the party if they commit to release.",
      "A controlled-release version may exist, but only if the party acts with restraint instead of simple destruction."
    ],
    "outcomes": [
      "Breaking restraints accelerates release and likely triggers the Runaway Transformation variant.",
      "Trying to shape the release may preserve some mitigation while still worsening the city.",
      "Turning back after accepting Skarth’s offer damages trust and may make the giants hostile again.",
      "City Breath State drops sharply if the party helps release directly.",
      "Unsavable gains transformation pressure instead of ordinary collapse pressure."
    ],
    "pressure": "This is agency with teeth: the party may choose release, but they must own what release does to everyone still inside the city.",
    "runNote": "Only offer this branch with High Insight plus real player sympathy, doubt about control, or direct engagement with Skarth’s argument. Before they commit, restate the cost clearly: this will make things worse for Emberfall immediately. Do not frame the choice as evil. Frame it as choosing transformation over preservation.",
    "tags": [
      "valhalla",
      "ember-root",
      "join-skarth",
      "release",
      "variant"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_runaway_transformation_variant",
        "scene_emberroot_s05_unsavable"
      ],
      "branches": [
        {
          "id": "help_skarth_break_restraints",
          "label": "Break Restraints",
          "condition": "Party actively helps Skarth accelerate release.",
          "effect": "Giants assist; City Breath State plummets; Runaway Transformation variant becomes likely.",
          "softPoint": "Fastest and most catastrophic release path."
        },
        {
          "id": "help_skarth_controlled_release",
          "label": "Shape the Release",
          "condition": "Party agrees containment must open but tries to limit harm.",
          "effect": "Transformation begins with some mitigation; exfil remains dangerous but less purely catastrophic.",
          "softPoint": "Hardest path to run, but best if the party wants Skarth’s truth without accepting Skarth’s full violence."
        },
        {
          "id": "help_skarth_turn_back",
          "label": "Turn Back",
          "condition": "Party hesitates after seeing the cost.",
          "effect": "Skarth’s trust drops; giants may become hostile again; party can return to another council option with added pressure.",
          "softPoint": "Use if players realize the price mid-commitment."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Only if High Insight plus real player sympathy/questioning",
          "speaker": "Skarth",
          "line": "You already see it.",
          "purpose": "Validate the players before tempting them."
        },
        {
          "timing": "Offer",
          "speaker": "Skarth",
          "line": "This does not need to be saved. It needs to be allowed.",
          "purpose": "Frame the branch as transformation over control."
        },
        {
          "timing": "Decision prompt",
          "speaker": "Skarth",
          "line": "Help me.",
          "purpose": "Offer the branch directly after making the cost clear."
        },
        {
          "timing": "Cost clarification",
          "speaker": "GM",
          "line": "This will not save Emberfall as it is. It will make the city worse now so something else can begin.",
          "purpose": "Make the cost explicit before commitment."
        },
        {
          "timing": "If the party breaks restraints",
          "speaker": "GM",
          "line": "The first restraint opens, and the chamber does not explode. It exhales.",
          "purpose": "Make release feel transformative rather than merely destructive."
        },
        {
          "timing": "If the party shapes the release",
          "speaker": "GM",
          "line": "You are not stopping the pressure. You are teaching it where not to go first.",
          "purpose": "Support the controlled-release path."
        },
        {
          "timing": "If the party turns back",
          "speaker": "Skarth",
          "line": "Then you saw the door and chose the lock.",
          "purpose": "Let Skarth judge hesitation without turning him into a cartoon villain."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_skarth_philosophical_alignment_path",
    ],
    "relatedTrackers": [
      "tracker_emberroot_core_stability",
      "tracker_emberroot_unsavable_crises"
    ],
    "visibilityGates": [
      {
        "id": "forge_below_choice",
        "label": "Forge Below / Choice"
      }
    ],
    "visibilityGate": "forge_below_choice"
  },

  // ============================================================================
  //#endregion ACT 2 / SESSION 04 — THE CHOICE
  // ============================================================================


  // ============================================================================
  //#region ACT 2 / SESSION 05 — UNSAVABLE / HOT EXFIL
  // ============================================================================

  {
    "id": "scene_emberroot_s05_unsavable",
    "title": "The Unsavable",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "consequence / crisis",
    "priority": "high",
    "trigger": "",
    "summary": "The party experiences the cost of the choice made at the Molten Council as multiple crises resolve at once and at least one thing becomes impossible to save.",
    "playerFacing": "The decision leaves the council chamber before anyone can soften it. Orders turn into movement. Movement turns into panic. Somewhere below, the Core answers. Somewhere above, the Chainways scream under evacuation weight. Across Emberfall, every unresolved crisis arrives at the same time. You do not get to save the city from consequence. You get to choose where your hands go first.",
    "gmTruth": "The party’s choice determined what breaks first, what can still be mitigated, and what becomes unsavable. This scene is not punishment; it is consequence becoming visible.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_bruni_coalhand",
      "actor_kaldra_steelmind",
      "actor_magma_reaver",
      "actor_ember_guard"
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
      "The chosen council branch determines which crisis becomes dominant.",
      "Resolved earlier crises become advantages, routes, allies, or time buffers.",
      "Ignored earlier crises return as named costs, blocked routes, unstable systems, or casualties.",
      "High Insight grants better mitigation, not a clean solution.",
      "City Breath State changes whether the disaster behaves like collapse, rupture, or transformation.",
      "The Valkyries can help preserve lives and extraction windows, but they cannot erase the chosen cost."
    ],
    "outcomes": [
      "The party commits to one immediate crisis response.",
      "One or two consequences may be mitigated depending on prior setup, speed, and available allies.",
      "At least one crisis resolves without the party and becomes the emotional cost of Act 2.",
      "Resolved arrival branches soften the final disaster; ignored branches worsen it.",
      "The result directly shapes Hot Exfil hazards.",
      "The Act 2 choice becomes morally legible through what the party cannot save."
    ],
    "pressure": "Pick where your hands go. The rest still happens.",
    "runNote": "Run this as a consequence engine, not a new planning phase. Show three simultaneous crisis fronts tied to prior choices: people, routes, containment, or transformation. Let the party pick one primary response and possibly one secondary mitigation if they earned it. Then resolve the ignored crisis clearly and visibly. Do not over-explain the math. Make the cost concrete.",
    "tags": [
      "valhalla",
      "ember-root",
      "session-5",
      "unsavable",
      "forced-loss"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_runaway_transformation_variant",
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "unsavable_people_first",
          "label": "People First",
          "condition": "Party prioritizes evacuation, rescue, triage, or Ashbound survival.",
          "effect": "More lives are saved, but routes, containment, or institutional control may worsen.",
          "softPoint": "Best emotional survival path; can make Hot Exfil more chaotic if infrastructure was ignored."
        },
        {
          "id": "unsavable_routes_first",
          "label": "Routes First",
          "condition": "Party prioritizes Chainways, evacuation lanes, bridges, or extraction paths.",
          "effect": "Movement and exfil improve, but trapped civilians or containment problems may worsen elsewhere.",
          "softPoint": "Best tactical survival path; may feel cold if visible people are left behind."
        },
        {
          "id": "unsavable_containment_first",
          "label": "Containment First",
          "condition": "Party prioritizes stabilizers, regulator systems, City Breath State, or technical control.",
          "effect": "The disaster remains more shaped and less explosive, but immediate human costs rise.",
          "softPoint": "Best infrastructure path; morally dangerous if framed as saving the city while people die."
        },
        {
          "id": "unsavable_release_first",
          "label": "Release First",
          "condition": "Party prioritizes pressure venting, transformation, or Skarth-aligned outcomes.",
          "effect": "Containment pressure drops in one direction while city structure and identity begin changing.",
          "softPoint": "Best transformation path; worsens ordinary rescue and route assumptions."
        },
        {
          "id": "unsavable_split_response",
          "label": "Split Response",
          "condition": "Party splits, has strong allies, or previously preserved enough support to address two fronts.",
          "effect": "Two crises can be partly mitigated, but neither receives full attention.",
          "softPoint": "Use only if earlier play earned enough support, routes, or Valkyrie capacity."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Scene start",
          "speaker": "GM",
          "line": "It all happens at once.",
          "purpose": "Prevent the scene from becoming a comfortable planning room."
        },
        {
          "timing": "Consequences arrive",
          "speaker": "GM",
          "line": "The choice has left your mouth, and Emberfall is already obeying the cost.",
          "purpose": "Tie the disaster directly to the Molten Council decision."
        },
        {
          "timing": "People crisis",
          "speaker": "GM",
          "line": "Below, evacuation lines buckle as smoke rolls through the lower platforms. You can hear names being shouted into fire.",
          "purpose": "Present the human front."
        },
        {
          "timing": "Route crisis",
          "speaker": "GM",
          "line": "The Chainways lurch under too much weight. A whole evacuation column freezes as the span drops by a handspan and does not rise again.",
          "purpose": "Present the movement/exfil front."
        },
        {
          "timing": "Containment crisis",
          "speaker": "GM",
          "line": "A stabilizer housing splits open somewhere below, and every rune-light in the district flickers in the same wounded rhythm.",
          "purpose": "Present the Core/containment front."
        },
        {
          "timing": "Commitment point",
          "speaker": "GM",
          "line": "You can answer one of these fully. Maybe touch a second if you move fast. The rest will not wait.",
          "purpose": "Force the crisis choice."
        },
        {
          "timing": "Valkyrie support",
          "speaker": "Kara",
          "line": "Point me. I can keep people alive, not make this fair.",
          "purpose": "Keep Valkyries useful without making them a solution button."
        },
        {
          "timing": "After chosen crisis resolves",
          "speaker": "GM",
          "line": "You saved who you could. You held what you could. But Emberfall is larger than your reach.",
          "purpose": "Land the Act 2 emotional truth."
        },
        {
          "timing": "Ignored crisis resolves",
          "speaker": "GM",
          "line": "Somewhere you are not, the thing you did not choose finishes happening.",
          "purpose": "Make the unsavable explicit without turning it into punishment."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_no_clean_victories",
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_valkyrie_strain"
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
    "visibilityGate": "collapse_escape"
  },
  {
    "id": "scene_emberroot_runaway_transformation_variant",
    "title": "Runaway Transformation Variant",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "variant crisis / join Skarth consequence",
    "priority": "high",
    "trigger": "",
    "summary": "If the party helps Skarth or chooses release over preservation, the final crisis shifts from ordinary collapse into uncontrolled transformation.",
    "playerFacing": "The Core does not rage. It expands. Heat becomes alive in the walls, moving through metal, stone, chain, and root like breath finding new lungs. Structures do not simply break; they soften, bloom, split, and become something else. The old city is not falling behind you. It is changing around you.",
    "gmTruth": "The party did not fail to save everything; they chose not to preserve everything. The danger is real, but the frame is transformation rather than simple destruction.",
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
      "faction_valkyries"
    ],
    "clues": [
      "This is not ordinary collapse; the environment is changing state.",
      "Heat behaves like living motion instead of uncontrolled fire.",
      "Old containment architecture fails by becoming irrelevant, not merely broken.",
      "Giants may treat the transformation as vindication while others experience it as catastrophe.",
      "The Valkyries recognize that extraction assumptions have changed."
    ],
    "outcomes": [
      "The Unsavable gains a transformation crisis in addition to ordinary collapse pressure.",
      "Hot Exfil hazards become stranger, less predictable, and more alive.",
      "Skarth’s faction may assist or clear paths, but their help worsens preservation outcomes.",
      "City Breath State is no longer only about preventing collapse; it is about surviving uncontrolled change.",
      "Valhalla fallout will focus on whether transformation was liberation, disaster, or both."
    ],
    "pressure": "Escape from uncontrolled transformation, not ordinary collapse.",
    "runNote": "Use only if the party helped Skarth, chose release, or opened containment enough to change the city’s state. Do not describe this as simple explosion or punishment. Make it beautiful, terrifying, and costly. The party chose transformation over preservation; now they must survive what transformation does to everyone still inside.",
    "tags": [
      "valhalla",
      "ember-root",
      "runaway-transformation",
      "join-skarth",
      "variant"
    ],
    "forwardPath": {
      "upNext": [
        "scene_emberroot_hot_exfil"
      ],
      "branches": [
        {
          "id": "transformation_runaway",
          "label": "Runaway Transformation",
          "condition": "Party broke restraints, fully sided with Skarth, or accelerated release.",
          "effect": "The city changes violently and rapidly. Exfil becomes surreal and unstable.",
          "softPoint": "Most dangerous transformation outcome."
        },
        {
          "id": "transformation_shaped",
          "label": "Shaped Release",
          "condition": "Party tried to guide, limit, or redirect release instead of simply breaking containment.",
          "effect": "Transformation still begins, but some paths, people, or districts are spared the worst first wave.",
          "softPoint": "Best release-aligned mitigation path."
        },
        {
          "id": "transformation_rejected_too_late",
          "label": "Rejected Too Late",
          "condition": "Party began release, then tried to turn back after the first cost became visible.",
          "effect": "Both Skarth’s trust and containment stability suffer. The party faces transformation without full giant support.",
          "softPoint": "Use for hesitation after commitment."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "If players helped Skarth",
          "speaker": "GM",
          "line": "The Core does not rage. It expands.",
          "purpose": "Shift the collapse into transformation."
        },
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
          "purpose": "Make the branch emotionally legible without calling it evil."
        },
        {
          "timing": "Skarth final word",
          "speaker": "Skarth",
          "line": "You chose. Good.",
          "purpose": "Lock in philosophical alignment as consequence."
        },
        {
          "timing": "If release was shaped",
          "speaker": "GM",
          "line": "The change still comes, but not everywhere first. For one impossible moment, your guidance matters.",
          "purpose": "Reward controlled-release attempts without negating cost."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_skarth_philosophical_alignment_path",
      "thread_emberroot_hot_exfil_consequence_chain"
    ],
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
    "title": "Hot Exfil",
    "session": "session_05_the_unsavable",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "escape / consequence",
    "priority": "high",
    "trigger": "",
    "summary": "The party escapes through the live consequences of their decisions as unresolved crises become hazards and resolved crises become fragile advantages.",
    "playerFacing": "The city does not collapse behind you. It collapses with you inside it. Every route remembers what you saved. Every blocked path remembers what you ignored. The air is full of heat, ash, shouted names, ringing chains, and Valkyrie wings fighting for space in a sky that no longer feels reachable.",
    "gmTruth": "Hot Exfil is not a separate escape minigame. It is the final expression of Act 2 consequences: every unresolved crisis becomes a hazard, and every resolved crisis becomes a benefit.",
    "involvedActors": [
      "actor_thora_kara_emberroot",
      "actor_magma_reaver",
      "actor_ember_guard"
    ],
    "involvedLocations": [
      "location_emberfall_chainways",
      "location_emberfall_forge_city",
      "location_emberfall_core_furnace"
    ],
    "involvedFactions": [
      "faction_valkyries",
      "faction_emberroot_fire_giants"
    ],
    "clues": [
      "Hazards map directly to unresolved crises from Arrival, Investigation, Forge Below, and The Unsavable.",
      "Benefits map directly to rescued civilians, preserved routes, stabilized systems, stopped giants, or improved Insight.",
      "Core State changes whether hazards behave like collapse, rupture, fire, panic, or transformation.",
      "The Valkyries need space, timing, and viable routes to extract the party.",
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
    "runNote": "Run 2–4 fast exfil beats. For each beat, present a hazard tied to an unresolved crisis and allow one decisive response. If the party previously saved people, preserved routes, stabilized containment, or earned allies, convert those into concrete advantages. Keep the pace hard and visual. End when the Valkyries find a narrow extraction window, not when every hazard is solved.",
    "tags": [
      "valhalla",
      "ember-root",
      "hot-exfil",
      "escape",
      "consequence"
    ],
    "forwardPath": {
      "upNext": [
        "scene_valhalla_post_act2_reflection"
      ],
      "branches": [
        {
          "id": "exfil_rescued_civilians",
          "label": "Rescued Civilians Aid Escape",
          "condition": "Crisis A or later people-first actions were meaningfully resolved.",
          "effect": "Survivors, Ashbound, or rescued workers create directions, open a route, warn of a hazard, or buy time.",
          "softPoint": "Human rescue becomes practical advantage."
        },
        {
          "id": "exfil_preserved_chainway",
          "label": "Preserved Chainway Holds",
          "condition": "Crisis B or later route-first actions preserved infrastructure.",
          "effect": "A damaged but usable route allows faster extraction or avoids one major hazard.",
          "softPoint": "Infrastructure rescue becomes movement advantage."
        },
        {
          "id": "exfil_stopped_sabotage",
          "label": "Sabotage Blunted",
          "condition": "Crisis C, Thread B, or Break the Chains was meaningfully stopped.",
          "effect": "Giant pressure is reduced or delayed during escape.",
          "softPoint": "Enemy control becomes breathing room."
        },
        {
          "id": "exfil_core_stabilized",
          "label": "City Breath State",
          "condition": "Forge Below or Council choices preserved City Breath State.",
          "effect": "Hazards behave predictably enough to navigate.",
          "softPoint": "Technical/Insight success becomes readable danger."
        },
        {
          "id": "exfil_transformation_route",
          "label": "Transformation Route",
          "condition": "Runaway Transformation or shaped release is active.",
          "effect": "Routes shift, mutate, or open unpredictably; some hazards become strange opportunities.",
          "softPoint": "Use for Skarth/release branch exfil."
        }
      ],
      "scriptedMoments": [
        {
          "timing": "Exfil begins",
          "speaker": "GM",
          "line": "The city does not collapse behind you. It collapses with you inside it.",
          "purpose": "Frame escape as consequence, not aftermath."
        },
        {
          "timing": "Hazard beat",
          "speaker": "GM",
          "line": "Ahead, the route you need is still there — but only barely, and only because of what you chose earlier.",
          "purpose": "Tie movement to prior choices."
        },
        {
          "timing": "If civilians were saved",
          "speaker": "Ashbound Survivor",
          "line": "This way! The lower stair still holds!",
          "purpose": "Turn rescued people into a practical exfil advantage."
        },
        {
          "timing": "If Chainway was preserved",
          "speaker": "GM",
          "line": "The Chainway screams under your weight, damaged and sagging, but it remembers being saved. It holds.",
          "purpose": "Pay off Crisis B."
        },
        {
          "timing": "If sabotage was ignored",
          "speaker": "GM",
          "line": "A stabilizer housing bursts open ahead of you, and the path fills with heat that should have been contained.",
          "purpose": "Pay off unresolved giant interference."
        },
        {
          "timing": "If transformation is active",
          "speaker": "GM",
          "line": "The corridor bends where it should break. Stone and root pull apart just wide enough to become a path, if you trust it before it changes again.",
          "purpose": "Make release branch exfil strange and playable."
        },
        {
          "timing": "Valkyrie extraction window",
          "speaker": "Kara",
          "line": "I need space to land!",
          "purpose": "Make extraction active, not automatic."
        },
        {
          "timing": "Valkyrie strain",
          "speaker": "Thora",
          "line": "We can carry you out. We cannot carry the city.",
          "purpose": "Reinforce the Act 2 cost and Valkyrie limits."
        },
        {
          "timing": "Final pull",
          "speaker": "Kara",
          "line": "Now—or never.",
          "purpose": "End with momentum and pressure."
        },
        {
          "timing": "Last look back",
          "speaker": "GM",
          "line": "As the wings take you upward, Emberfall falls away beneath you — not as one disaster, but as every choice you made becoming visible at once.",
          "purpose": "Close the field sequence and bridge to fallout."
        }
      ]
    },
    "relatedThreads": [
      "thread_emberroot_hot_exfil_consequence_chain",
      "thread_emberroot_valkyrie_strain",
      "thread_emberroot_no_clean_victories"
    ],
    "relatedTrackers": [
      "tracker_emberroot_exfil_state"
    ],
    "visibilityGates": [
      {
        "id": "collapse_escape",
        "label": "Collapse / Escape"
      }
    ],
    "visibilityGate": "collapse_escape"
  },

  // ============================================================================
  //#endregion ACT 2 / SESSION 05 — UNSAVABLE / HOT EXFIL
  // ============================================================================

];
