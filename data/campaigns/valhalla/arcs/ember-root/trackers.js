export const trackers = [
  {
    "id": "tracker_emberroot_investigation_clock",
    "name": "Investigation Clock",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "clock",
    "value": 0,
    "min": 0,
    "max": 6,
    "label": "Time pressure",
    "summary": "Tracks delay, indecision, and missed intervention windows during the interpretation phase before the Crown Preservation Protocol becomes the dominant clock.",
    "effects": [
      {
        "range": "0-1",
        "label": "Early Pressure",
        "note": "The crisis is active but still maneuverable. Root, politics, and backflow clues can be interpreted before authority hardens."
      },
      {
        "range": "2-3",
        "label": "Rising Instability",
        "note": "Minor route failures, worsened backflow, or Forge Lord command restrictions enter play."
      },
      {
        "range": "4-5",
        "label": "Hardening Command",
        "note": "Forge Lord contingency behavior becomes more visible. Command seals, route restrictions, and lower-district sacrifice logic intensify."
      },
      {
        "range": "6",
        "label": "Protocol Imminent",
        "note": "The Crown Preservation Protocol is ready to trigger or has effectively begun. Transition to the CPP tracker."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "clock",
      "time-pressure",
      "act-2",
      "interpretation"
    ],
    "gmNotes": "Use before the Confrontation. Increase when players delay, debate too long, rest, or pursue information without acting. Once Crown Preservation is revealed or triggered, shift primary pressure to tracker_emberroot_crown_preservation_protocol."
  },
  {
    "id": "tracker_emberroot_insight",
    "name": "Insight Level",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "understanding",
    "value": 2,
    "min": 0,
    "max": 3,
    "label": "High",
    "summary": "Tracks player understanding of Root burden, city breath, Forge Lord sacrifice logic, giant targeting, Ashbound routes, and the need for sequenced withdrawal.",
    "effects": [
      {
        "range": "0",
        "label": "Low",
        "note": "Players may treat the crisis as root corruption, simple sabotage, giant attack, or ordinary system failure."
      },
      {
        "range": "1",
        "label": "Partial",
        "note": "Players understand at least one truth: Root burden, city breath, giant target discipline, or Forge Lord control logic."
      },
      {
        "range": "2",
        "label": "High",
        "note": "Players connect the same-pressure truth: upper command, lower backflow, Root burden, and targeted giant action are all part of one system."
      },
      {
        "range": "3",
        "label": "Coalition Clarity",
        "note": "Players understand what each faction must do: Ashbound evacuate, Giants cut/breach, Ironhands sequence, players override/decommission."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "insight",
      "truth",
      "act-2",
      "coalition"
    ],
    "gmNotes": "Raise Insight when players correctly identify that the city is doing politically what it is doing mechanically: saving upper layers by forcing pressure downward. High Insight should improve coalition coordination, decommission options, and Exfil state. Game-day start: the party has synthesized the core truth and can operate from controlled-withdrawal logic."
  },
  {
    "id": "tracker_emberroot_core_stability",
    "name": "City Breath State",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "state",
    "value": 1,
    "min": 0,
    "max": 3,
    "label": "Damaged / Directional",
    "summary": "Tracks how well Emberfall's Lower Works can still intake, vent, redirect, and exhale pressure while the Forge Lords try to feed the crownlines.",
    "effects": [
      {
        "range": "0",
        "label": "Failing / Backflow",
        "note": "The city cannot breathe correctly. Lower routes choke, vents reverse, housings rupture, and Exfil becomes dangerous."
      },
      {
        "range": "1",
        "label": "Strained / Uneven",
        "note": "The city breathes unevenly. Some routes hold, some chambers lag, and emergency choices remain possible."
      },
      {
        "range": "2",
        "label": "Sequenced / Recovering",
        "note": "Pressure is being vented, redirected, or reduced. Coalition action improves evacuation and controlled decommission."
      },
      {
        "range": "3",
        "label": "Withdrawal Window",
        "note": "The city has enough breath coordination for the party to perform controlled decommission with reduced collateral damage."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "city-breath",
      "lower-works",
      "stability",
      "act-2"
    ],
    "gmNotes": "Improve when players vent, redirect, cool, sequence evacuation, or earn Ironhand/Giant/Ashbound cooperation. Worsen when CPP advances, crownlines feed, housings break wrong, or the Crown Anvil severs required vent paths. Game-day start: Midworks and Lower Core retain partial direction, but most safeties are blown and unrecoverable."
  },
  {
    "id": "tracker_emberroot_crown_preservation_protocol",
    "name": "Crown Preservation Protocol",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "countdown",
    "value": 3,
    "min": 0,
    "max": 5,
    "label": "Lockout stopped / damage done",
    "summary": "Tracks the Forge Lords' contingency that forcibly preserves the High Forge and upper city by sealing, starving, and drowning the lower body of Emberfall.",
    "effects": [
      {
        "range": "0",
        "label": "Protocol Feeding",
        "note": "Gold crownlines begin drawing lift, pressure, and breath upward. The lower city feels the first loss."
      },
      {
        "range": "1",
        "label": "Lower Routes Choking",
        "note": "Smoke, heat, and backflow worsen in Ashbound routes and lower evacuation lanes."
      },
      {
        "range": "2",
        "label": "Pipeways Collapsing",
        "note": "Crownline pressure causes pipeways and lower-lung channels to rupture or lock. Giants are needed to cut the right lines."
      },
      {
        "range": "3",
        "label": "Core Override Window Closing",
        "note": "Ironhand terminals are mostly locked out. Manual Lower Works override becomes the only viable answer."
      },
      {
        "range": "4",
        "label": "Upper Seal Engaging",
        "note": "The upper city begins final isolation. Every unresolved lower route becomes harder to save."
      },
      {
        "range": "5",
        "label": "Crown Preserved / Body Drowned",
        "note": "The High Forge survives by sacrificing the rest. The lower city is unsavable except for routes already opened and people already moving."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "cpp",
      "crown-preservation",
      "forge-lords",
      "countdown",
      "act-2"
    ],
    "gmNotes": "This becomes the primary pressure tracker after The Confrontation. Advance when Forge Lord command seals hold, players delay after breakout, the Crown Anvil lands a major action, or the party fails decommission checks. Reduce or pause only through crownline cuts, successful override progress, or major coalition action. Game-day start: party stopped total lockout at round 3, but CPP already cut three of five main arteries and burned many safeties/overflow meters."
  },
  {
    "id": "tracker_emberroot_giant_timer",
    "name": "Giant Coordination State",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "alliance-state",
    "value": 1,
    "min": 0,
    "max": 3,
    "label": "Awaiting Sequence",
    "summary": "Tracks whether Skarbrand and the giants are acting as rupture pressure, restrained witnesses, or coordinated deconstruction allies.",
    "effects": [
      {
        "range": "0",
        "label": "Rupture Pressure",
        "note": "Giants are breaking cages, housings, or crownlines by fury and instinct. Civilian risk rises."
      },
      {
        "range": "1",
        "label": "Waiting on Promises",
        "note": "Skarbrand is holding his giants back because the party promised a real answer. Delay risks renewed breaking."
      },
      {
        "range": "2",
        "label": "Coordinated Breaks",
        "note": "Giants break named lines, blocked stone, and crownline feeds in sequence with Kaldra and Bruni."
      },
      {
        "range": "3",
        "label": "Coalition Force",
        "note": "Skarbrand and lieutenants actively protect the operation, oppose the Crown Anvil, and breach the outer shell for evacuation."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "giants",
      "skarbrand",
      "safe-deconstruction",
      "coalition"
    ],
    "gmNotes": "This replaces the old containment-break framing. Lower it if the party lies, delays, or re-binding becomes likely. Raise it when evacuation and release are credible, when Kaldra names true targets, or when the party honors Skarbrand's terms. Game-day start: Skarth is ready to act if release remains real and Kaldra names what not to break."
  },
  {
    "id": "tracker_emberroot_ashbound_evacuation",
    "name": "Ashbound Evacuation",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "progress",
    "value": 0,
    "min": 0,
    "max": 6,
    "label": "Routes not yet moving",
    "summary": "Tracks Bruni and the Ashbound opening hidden routes, clearing tunnel exits, and moving civilians before CPP drowns the lower city.",
    "effects": [
      {
        "range": "0-1",
        "label": "Routes Identified",
        "note": "Ash drains, old cuts, crawlways, and root-adjacent hollows are known but not yet carrying mass movement."
      },
      {
        "range": "2-3",
        "label": "Evacuation Moving",
        "note": "People are moving. Routes are dangerous but real. Saved civilians and Ashbound trust create capacity."
      },
      {
        "range": "4-5",
        "label": "Mass Flow",
        "note": "Large groups are moving through hidden routes. Giants and Ironhands can improve or preserve capacity."
      },
      {
        "range": "6",
        "label": "Outer Shell Breach / New Start",
        "note": "Ashbound routes connect to the giant-breached outer shell. Hot Exfil has a viable people-survive path."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "ashbound",
      "evacuation",
      "hidden-routes",
      "progress"
    ],
    "gmNotes": "Increase when players validate Ashbound authority, protect route crews, reject cargo/title priority, or coordinate giant breaches. Worsen/complicate when CPP advances, routes flood, command seals block exits, or Crown Anvil pressure collapses pipeways."
  },
  {
    "id": "tracker_emberroot_controlled_decommission",
    "name": "Controlled Decommission",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "progress",
    "value": 0,
    "min": 0,
    "max": 6,
    "label": "Override not begun",
    "summary": "Tracks the party's final Lower Works operation: manual override, pressure venting, redirection, cooling, release without re-binding, and sealing the death-throes behind evacuation.",
    "effects": [
      {
        "range": "0",
        "label": "Override Not Begun",
        "note": "CPP is feeding and the party has not started the decisive manual sequence."
      },
      {
        "range": "1",
        "label": "Crownline Feed Identified",
        "note": "The party knows what is feeding the upper city and which lines must be cut or vented."
      },
      {
        "range": "2",
        "label": "Pressure Venting",
        "note": "Lower pressure begins moving away from evacuation routes and away from the Root burden."
      },
      {
        "range": "3",
        "label": "Flow Redirected",
        "note": "Dead channels, broken crownlines, or giant-cut paths absorb pressure that would have drowned lower routes."
      },
      {
        "range": "4",
        "label": "Override Window Stabilized",
        "note": "Kaldra/Ironhands and the party create a brief safe window for release and final lock handling."
      },
      {
        "range": "5",
        "label": "Release Without Re-Binding",
        "note": "Bound pressure and emberling life are released without returning to the old containment logic."
      },
      {
        "range": "6",
        "label": "Controlled Decommission Complete",
        "note": "The old life-support system exhales. Emberfall as it was cannot survive, but the people have a route out."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "lower-works",
      "controlled-decommission",
      "sequenced-release",
      "progress"
    ],
    "gmNotes": "Use during Lower Works Operation. Successes add progress. Strong or well-supported successes may add 2. Failures should usually advance CPP, worsen City Breath, threaten Ashbound evacuation, or let the Crown Anvil sever an option rather than simply stopping progress."
  },
  {
    "id": "tracker_emberroot_crown_anvil_pressure",
    "name": "Crown Anvil Pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "scene-pressure",
    "value": 0,
    "min": 0,
    "max": 5,
    "label": "Not yet surfaced",
    "summary": "Tracks the Forge Lord lava submarine / contingency vessel as a backdrop threat during Controlled Decommission.",
    "effects": [
      {
        "range": "0",
        "label": "Not Yet Surfaced",
        "note": "The Lower Works are unstable, but the Crown Anvil has not entered the chamber."
      },
      {
        "range": "1",
        "label": "Lava Wake",
        "note": "The lava moves wrong. Heat and pressure roll toward the override platform."
      },
      {
        "range": "2",
        "label": "Crownline Anchors",
        "note": "The Crown Anvil fires anchor-lines into the chamber, feeding CPP and threatening required lines."
      },
      {
        "range": "3",
        "label": "Seal Torpedo",
        "note": "A gold-rune projectile or command pulse attempts to lock a manual vent, gate, or housing permanently."
      },
      {
        "range": "4",
        "label": "Boarding Clamp / Automata",
        "note": "Forge automata or clamps threaten the override dais, Kaldra, or a critical progress point."
      },
      {
        "range": "5",
        "label": "Final Crown Pulse",
        "note": "The Crown Anvil attempts to complete upper-city isolation. Skarbrand and lieutenants must buy time or the party must finish immediately."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "crown-anvil",
      "lava-submarine",
      "forge-lords",
      "scene-pressure"
    ],
    "gmNotes": "Do not run this as a normal monster HP tracker. It is a backdrop pressure engine. Advance on failed decommission checks, CPP escalation, or when the scene needs pressure. Giants can reduce, hold, or redirect its effects; they should buy time, not replace the party's override role."
  },
  {
    "id": "tracker_emberroot_unsavable_crises",
    "name": "Unsavable Cost",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "cost-state",
    "value": 1,
    "min": 0,
    "max": 5,
    "label": "Cost forming",
    "summary": "Tracks what Crown Preservation and the withdrawal operation have already made impossible to save.",
    "effects": [
      {
        "range": "0",
        "label": "Cost Deferred",
        "note": "The coalition is ahead of the crisis. The Unsavable may be infrastructure, legacy, or authority rather than lives."
      },
      {
        "range": "1-2",
        "label": "Visible Loss",
        "note": "A route, district function, record, or group becomes endangered or lost because CPP already advanced."
      },
      {
        "range": "3-4",
        "label": "Hard Sacrifice",
        "note": "The party must choose what not to answer: route, people, infrastructure, Forge Lord remnants, or decommission stability."
      },
      {
        "range": "5",
        "label": "Severe Cost",
        "note": "CPP or failed sequence has made a major loss unavoidable. Hot Exfil begins under maximum pressure."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "cost",
      "cpp",
      "act-2"
    ],
    "gmNotes": "This is not punishment. It records what the Forge Lords already chose and what the coalition cannot undo in time. Increase when CPP advances, the Crown Anvil lands a major action, evacuation lags, or decommission failures demand visible cost."
  },
  {
    "id": "tracker_emberroot_exfil_state",
    "name": "Hot Exfil State",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "escape-state",
    "value": 1,
    "min": 0,
    "max": 3,
    "label": "Unstable",
    "summary": "Tracks escape condition after Controlled Decommission based on Ashbound routes, CPP progress, City Breath, Giant breach roads, and Crown Anvil fallout.",
    "effects": [
      {
        "range": "0",
        "label": "Catastrophic",
        "note": "Routes fail, pressure reverses, extraction is desperate, and NPC loss/separation risk is high."
      },
      {
        "range": "1",
        "label": "Unstable",
        "note": "Routes shift, hazards move, and prior choices determine who can help."
      },
      {
        "range": "2",
        "label": "Coalition Route",
        "note": "Ashbound tunnels, giant breaches, Ironhand sequencing, and Valkyrie extraction create a survivable path."
      },
      {
        "range": "3",
        "label": "Outer Shell Breach",
        "note": "The evacuation reaches a giant-breached outer shell route toward the new start. The city dies behind them, but people survive."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "exfil",
      "ashbound-tunnels",
      "outer-shell",
      "consequence"
    ],
    "gmNotes": "Every unresolved crisis adds one hazard. Every resolved coalition lane adds one benefit. Ashbound routes, Ironhand sequencing, Giant breach roads, preserved Chainways, and Valkyrie capacity should all matter."
  }
];
