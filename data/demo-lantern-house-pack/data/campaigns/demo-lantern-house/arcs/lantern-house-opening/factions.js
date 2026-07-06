export const arcFactions = [
  {
    id: "faction_tidewatch_council",
    name: "Tidewatch Council",
    type: "harbor authority / civic faction",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    summary: "The coastal council responsible for shipping, lighthouse maintenance, harbor closures, and public calm.",
    currentState: "Publicly treating the Lantern House as a maintenance problem while privately searching for records tied to the missing lamplighter.",
    pressure: "The council needs the light functioning, the harbor open, and the truth small enough to file away.",
    motto: "The coast survives by order.",
    belief: "Panic kills faster than storms.",
    truth: "They delayed closing the harbor because too much money and pride were tied to keeping trade moving.",
    publicFace: "Civic duty, safety notices, harbor law, storm discipline.",
    privateTruth: "A few councilors suspect the light has been altered, but none want responsibility for naming it.",
    goals: [
      "Recover or silence evidence about the missing lamplighter.",
      "Keep villagers from spreading supernatural rumors.",
      "Restart safe shipping as soon as possible."
    ],
    resources: [
      "Harbor watch patrols",
      "Sealed lighthouse records",
      "Authority over closures and searches"
    ],
    tensions: [
      "Orren wants safety more than reputation.",
      "Mira may expose what the council ordered hidden.",
      "Villagers no longer trust official tide reports."
    ],
    genericLines: [
      "This is a public safety matter, not a ghost story.",
      "The council will review all findings after the storm.",
      "No one benefits from frightening the harbor."
    ],
    inPlayUse: "Use council pressure when the party hesitates, finds evidence, or threatens to expose the cover-up.",
    relatedActors: ["actor_captain_orren", "actor_mira_vale"],
    relatedLocations: ["location_lantern_house", "location_keeper_hall"],
    relatedThreads: ["thread_missing_lamplighter"],
    tags: ["active", "faction-pressure", "political", "harbor", "public-safe-demo"]
  }
];
