export const threads = [
  {
    "id": "thread_emberroot_correct_interpretation_under_pressure",
    "title": "Correct Interpretation Under Pressure",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "investigation / reward logic",
    "summary": "Session 2 rewards interpreting the problem correctly, not completing all content.",
    "currentState": "C → B → A is the optimal route, but even optimal players cannot save everything.",
    "nextPressure": "Use Informed Decision during Council if earned.",
    "relatedScenes": [
      "scene_emberroot_s02_thread_a_system_failure",
      "scene_emberroot_s02_thread_b_giant_interference",
      "scene_emberroot_s02_thread_c_root_resonance",
      "scene_emberroot_s04_molten_council"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "insight"
    ]
  },
  {
    "id": "thread_emberroot_skarth_philosophical_alignment_path",
    "title": "Join Skarth Is an Alignment Path, Not an Evil Path",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "choice branch",
    "summary": "If earned, players may choose transformation over control. This worsens the city but remains philosophically consistent.",
    "currentState": "Only available with High Insight plus actual player sympathy/questioning.",
    "nextPressure": "If offered, clearly state that helping Skarth makes things worse for the city.",
    "relatedActors": [
      "actor_skarth_firebrand"
    ],
    "relatedScenes": [
      "scene_emberroot_s03_break_the_chains",
      "scene_emberroot_s04_molten_council",
      "scene_emberroot_s05_unsavable"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "skarth",
      "release"
    ]
  },
  {
    "id": "thread_emberroot_hot_exfil_consequence_chain",
    "title": "Hot Exfil Consequence Chain",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_ember_root",
    "status": "available",
    "type": "consequence / escape",
    "summary": "Hot Exfil turns unresolved crises into physical escape hazards.",
    "currentState": "The Unsavable defines resolved/unresolved crisis count; Hot Exfil converts that into escape texture.",
    "nextPressure": "Run as skill challenge or chase once 1–2 crises resolve and collapse escalates.",
    "relatedScenes": [
      "scene_emberroot_s05_unsavable"
    ],
    "tags": [
      "valhalla",
      "ember-root",
      "hot-exfil"
    ]
  }
];
