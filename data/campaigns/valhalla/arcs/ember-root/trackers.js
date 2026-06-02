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
    "gmNotes": "Increase by 1 when a thread is explored, players debate too long, or players rest/delay."
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
    "summary": "Tracks player understanding of the Root/Core/system truth.",
    "effects": [
      {
        "range": "0",
        "label": "Low",
        "note": "Confusion. Players may misidentify the Core or Root as the enemy."
      },
      {
        "range": "1",
        "label": "Mid",
        "note": "Tradeoffs visible. Players understand some costs but not the whole shape."
      },
      {
        "range": "2",
        "label": "High",
        "note": "Mitigation unlocked. Better Council clarity, extra crisis resolution, safer Exfil, possible Join Skarth option."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "insight",
      "truth",
      "act-2"
    ],
    "gmNotes": "High Insight is earned by correct understanding, not by checking boxes."
  },
  {
    "id": "tracker_emberroot_core_stability",
    "name": "Core Stability",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "state",
    "value": 1,
    "min": 0,
    "max": 2,
    "label": "Strained",
    "summary": "Tracks how controlled the Living Core/system is during Forge Below and later consequence scenes.",
    "effects": [
      {
        "range": "0",
        "label": "Failing / Unstable",
        "note": "Multiple hazards, panic, rapid escalation, chaotic exfil."
      },
      {
        "range": "1",
        "label": "Strained / Mixed",
        "note": "Fluctuating hazards, urgent tone, standard outcomes."
      },
      {
        "range": "2",
        "label": "Stable / Stabilized",
        "note": "Fewer hazards, controlled tension, improved outcomes."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "core",
      "stability",
      "act-2"
    ],
    "gmNotes": "Stabilize improves. Giant success or ignored system worsens."
  },
  {
    "id": "tracker_emberroot_giant_timer",
    "name": "Giant Interference Timer",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "clock",
    "value": 0,
    "min": 0,
    "max": 3,
    "label": "Not yet broken",
    "summary": "Tracks the giant strike team's three-round destabilization cycle in Forge Below.",
    "effects": [
      {
        "range": "1",
        "label": "Arrive",
        "note": "Giants enter and target pillars or chains."
      },
      {
        "range": "2",
        "label": "Destabilize",
        "note": "Giants begin breaking containment supports."
      },
      {
        "range": "3",
        "label": "Break",
        "note": "Pillar/chain breaks or surge triggers. Core Stability worsens."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "giants",
      "forge-below",
      "timer"
    ],
    "gmNotes": "If players hesitate, advance this timer."
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
    "gmNotes": "Players resolve 1 crisis, or 2 with High Insight. All others fail."
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
    "summary": "Tracks escape condition after The Unsavable based on resolved/unresolved crises and Core State.",
    "effects": [
      {
        "range": "0",
        "label": "Catastrophic",
        "note": "Constant hazards, path collapse, high chance of damage/NPC loss/separation."
      },
      {
        "range": "1",
        "label": "Unstable",
        "note": "Changing routes and shifting hazards."
      },
      {
        "range": "2",
        "label": "Controlled",
        "note": "Clearer path, fewer hazards, safer Valkyrie extraction."
      }
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "exfil",
      "escape",
      "consequence"
    ],
    "gmNotes": "Every unresolved crisis adds one hazard. Every resolved crisis adds one benefit."
  }
];
