export const arcTables = [
  {
    id: "table_lantern_house_omens",
    name: "Lantern House Omens",
    die: "1d8",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "active",
    category: "omen",
    summary: "Quick atmospheric events for making the house feel alive without forcing a scene change.",
    relatedLocation: "location_lantern_house",
    relatedLocations: [
      "location_lantern_house",
      "location_keeper_hall",
      "location_lantern_room",
      "location_tide_cellar"
    ],
    entries: [
      "1 — The beacon beam pauses on one character for a heartbeat too long.",
      "2 — A wet footprint appears beside someone who has not moved.",
      "3 — The storm outside cuts silent for exactly three breaths.",
      "4 — Kettlewick hisses at an empty chair, then refuses to look at it again.",
      "5 — A villager outside says a name and the lamp flashes blue.",
      "6 — The ledger page curls open to a future tide mark.",
      "7 — The smell of lavender and lamp oil fills the room, though no lamp is nearby.",
      "8 — A voice from the glass repeats the last true sentence spoken."
    ],
    reference: "library/lantern_house_omens.md",
    tags: ["active", "table-note", "omen", "location-linked", "public-safe-demo"]
  }
];
