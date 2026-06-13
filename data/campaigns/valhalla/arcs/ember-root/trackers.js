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
    "summary": "Tracks time spent, delay, indecision, rests, and thread exploration during Act 2.",
    "effects": [
      {
        "range": "0-1",
        "label": "Early Pressure",
        "note": "The crisis is active but still maneuverable."
      },
      {
        "range": "2-3",
        "label": "Minor Instability",
        "note": "Minor collapse or instability event enters play."
      },
      {
        "range": "4-5",
        "label": "Major System Failure",
        "note": "Major failure or overlapping crisis enters play."
      },
      {
        "range": "6",
        "label": "Critical Cascade",
        "note": "Critical cascade. The Unsavable begins with maximum pressure."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "clock",
      "time-pressure",
      "act-2"
    ],
    "gmNotes": "Increase by 1 when players delay, debate too long, rest, or pursue a thread without acting on its consequences. Reduce pressure only when investigation directly creates usable evacuation, venting, or deconstruction options."
  },
  {
    "id": "tracker_emberroot_insight",
    "name": "Insight Level",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "understanding",
    "value": 0,
    "min": 0,
    "max": 2,
    "label": "Low",
    "summary": "Tracks player understanding of the city-breath, emberling, caste, giant, and root truths.",
    "effects": [
      {
        "range": "0",
        "label": "Low",
        "note": "Confusion. Players may treat the crisis as a simple reactor failure, giant attack, or root corruption."
      },
      {
        "range": "1",
        "label": "Mid",
        "note": "Tradeoffs visible. Players understand the city is breathing wrong and that shutdown is dangerous, but not the whole moral shape."
      },
      {
        "range": "2",
        "label": "High",
        "note": "Controlled withdrawal unlocked. Better Council clarity, extra crisis resolution, safer Exfil, and possible giant cooperation."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "insight",
      "truth",
      "act-2"
    ],
    "gmNotes": "High Insight is earned by correct synthesis: city breath, emberling personhood, root burden, caste cost, and the need for controlled withdrawal."
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
    "max": 2,
    "label": "Strained",
    "summary": "Tracks how well Emberfall's Lower Works can still intake, vent, redirect, and exhale pressure without catastrophic backflow.",
    "effects": [
      {
        "range": "0",
        "label": "Failing / Backflow",
        "note": "The city cannot breathe correctly. Hazards stack, vents reverse, and Exfil becomes chaotic."
      },
      {
        "range": "1",
        "label": "Strained / Uneven",
        "note": "The city breathes unevenly. Some routes hold, some chambers lag, and emergency choices remain possible."
      },
      {
        "range": "2",
        "label": "Sequenced / Controlled",
        "note": "Pressure is being vented, redirected, or bought down. Evacuation and controlled withdrawal improve."
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
    "gmNotes": "Improve when players vent, redirect, cool, sequence evacuation, or earn Ironhand/Giant cooperation. Worsen when housings break wrong, shutoffs overstack, or delay forces pressure deeper."
  },
  {
    "id": "tracker_emberroot_giant_timer",
    "name": "Containment Break Timer",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "clock",
    "value": 0,
    "min": 0,
    "max": 3,
    "label": "Not yet broken",
    "summary": "Tracks the giant strike team's progress toward breaking a containment housing, cage-lock, chain anchor, or pressure support.",
    "effects": [
      {
        "range": "1",
        "label": "Target Marked",
        "note": "Giants identify a lock, housing, chain anchor, or containment support."
      },
      {
        "range": "2",
        "label": "Breaking Begins",
        "note": "Giants begin deliberate demolition. Civilian risk depends on whether evacuation and venting are underway."
      },
      {
        "range": "3",
        "label": "Containment Break",
        "note": "The target breaks. City Breath worsens unless the party redirected pressure or turned the break into controlled deconstruction."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "giants",
      "containment",
      "safe-deconstruction",
      "timer"
    ],
    "gmNotes": "Giants are not random attackers. Advance this when they are ignored, delayed with false promises, or actively sabotaging cages. Pause or redirect it if players make evacuation and release credible."
  },
  {
    "id": "tracker_emberroot_unsavable_crises",
    "name": "Unsavable Crises",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "crisis-count",
    "value": 3,
    "min": 0,
    "max": 5,
    "label": "Crisis load",
    "summary": "Tracks how many simultaneous crises appear during The Unsavable.",
    "effects": [
      {
        "range": "3",
        "label": "Clock 0–2",
        "note": "Three crises."
      },
      {
        "range": "4",
        "label": "Clock 3–4",
        "note": "Four crises."
      },
      {
        "range": "5",
        "label": "Clock 5–6",
        "note": "Five crises."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "unsavable",
      "crisis",
      "act-2"
    ],
    "gmNotes": "Players resolve 1 crisis, or 2 if High Insight and prior choices have created real capacity: routes, venting, faction cooperation, or controlled deconstruction."
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
    "max": 2,
    "label": "Unstable",
    "summary": "Tracks escape condition after The Unsavable based on resolved crises, City Breath State, preserved routes, and faction cooperation.",
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
        "label": "Controlled",
        "note": "Clearer escape path, useful faction aid, safer Valkyrie extraction, and visible benefits from resolved crises."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "exfil",
      "escape",
      "consequence"
    ],
    "gmNotes": "Every unresolved crisis adds one hazard. Every resolved crisis adds one benefit. Ashbound routes, Ironhand sequencing, Giant breach roads, preserved Chainways, and Valkyrie capacity should all matter."
  }
];
