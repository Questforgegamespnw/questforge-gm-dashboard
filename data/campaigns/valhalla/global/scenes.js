export const scenes = [
  {
    id: "scene_valhalla_bifrost_return",
    title: "Bifrost Return",
    session: "post-mission-loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "available",
    type: "intro",
    priority: "high",
    availability: {
      trackerId: "tracker_ragnarok_meter",
      minValue: 1,
    },
    trigger: "Start of post-mission sequence.",
    summary: "Reset tone after mission danger and return players to Valhalla’s mythic structure.",
    playerFacing: "The party descends in streaks of burning rainbow light. Heat fades into warmth. Battle noise dissolves into distant laughter, bread, mead, and woodsmoke.",
    gmTruth: "The return system is still working, but each return can reveal subtle deviation.",
    involvedActors: ["actor_heimdall"],
    involvedLocations: ["location_valhalla_bifrost_platform"],
    involvedFactions: [],
    clues: [
      "The landing site feels slightly different each time.",
      "Mission sensations may linger longer than they should."
    ],
    outcomes: [
      "Clean return leads to hub decompression.",
      "Strange return raises immediate system concern.",
      "Severe misalignment pushes Heimdall or Valkyrie tension."
    ],
    forwardPath: {
      upNext: [
        "scene_valhalla_heimdall_acknowledgment",
        "scene_valhalla_immediate_hub_reactions"
      ],
      branches: [
        {
          condition: "Return feels wrong",
          nextScene: "scene_valhalla_heimdall_acknowledgment",
          note: "Use Heimdall’s reduced response as confirmation."
        }
      ],
      scriptedMoments: []
    },
    pressure: "Arrival is always violent. It is no longer always clean.",
    runNote: "Use as recap, sensory reset, and first system-health tell.",
    tags: ["active", "valhalla", "bifrost", "return", "session-opener"],
    gmNotes: ""
  },

]