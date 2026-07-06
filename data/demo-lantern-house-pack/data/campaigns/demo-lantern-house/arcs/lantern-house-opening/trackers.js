export const arcTrackers = [
  {
    id: "tracker_fog_pressure",
    name: "Fog Pressure",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    type: "meter",
    value: 2,
    min: 0,
    max: 6,
    label: "The fog is listening at the windows.",
    summary: "Tracks how strongly the unnatural fog and answering light intrude on the house.",
    effects: [
      {
        range: "0-1",
        label: "Storm Only",
        note: "The house feels wrong, but the supernatural stays subtle."
      },
      {
        range: "2-3",
        label: "Listening Fog",
        note: "Echoes, blue lamp flares, and impossible wet footprints become visible."
      },
      {
        range: "4-5",
        label: "Answering Light",
        note: "The lamp answers names, repeats lies, and pulls memories toward the glass."
      },
      {
        range: "6",
        label: "Open Door",
        note: "The beam may open a passage to the missing, the drowned, or something pretending to be either."
      }
    ],
    relatedThreads: ["thread_light_that_answers", "thread_missing_lamplighter"],
    relatedScenes: ["scene_lantern_room_choice"],
    relatedReferences: ["reference_lantern_house_secret"],
    tags: ["active", "tracking", "pressure", "supernatural", "public-safe-demo"]
  }
];
