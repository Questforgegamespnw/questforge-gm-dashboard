export const arcConfig = {
  id: "harthrun_investigation",
  title: "The Village That Bled",
  campaignId: "no_bell_for_harthrun",
  modeId: "questforge-default",
  status: "available",
  levelRange: "10",
  runtime: "Approximately 3 hours",
  startingLocation: "location_fort_dios",
  sceneOrder: ["scene_fort_dios_briefing", "scene_harthrun_approach", "scene_village_that_bled", "scene_following_the_taken", "scene_entering_the_mine", "scene_lower_mine", "scene_conversion_chamber", "scene_aftermath"],
  pressure: "Every delay gives the Legion time to convert another captive and prepare the mine.",
  presentationDoctrine: "Begin with an understandable military decision, reveal occupation through physical evidence, and save the full supernatural operation for the mine.",
  endingConditions: ["The demon is destroyed or driven off.", "The surviving captives are recovered or lost.", "The ledger network is contained, compromised, or allowed to propagate.", "The party decides how Fort Dios records Harthrun."]
};
