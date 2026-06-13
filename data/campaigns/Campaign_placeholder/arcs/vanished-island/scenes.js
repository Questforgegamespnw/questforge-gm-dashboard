export const scenes = [

    {
        id: "scene_missing_ships_investigation",
        title: "The Missing Ships",
        label: "Missing Ships Investigation",
        type: "investigation",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "completed",

        summary:
            "The party accepted a harbor investigation concerning multiple ships that vanished after leaving port.",

        outcome:
            "The party secured a vessel and convinced sailors searching for missing crewmates to join the expedition.",

        relatedLocations: ["location_harbor"],
        relatedThreads: ["thread_missing_ships"],
    },

    {
        id: "scene_impossible_island",
        title: "The Impossible Island",
        label: "Impossible Island",
        type: "discovery",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "completed",

        summary:
            "The party discovered that an island remained fixed at the same angle from the ship regardless of course changes.",

        outcome:
            "Recognizing magical interference, the expedition deliberately sailed toward the island.",

        relatedLocations: ["location_open_water"],
        relatedThreads: [
            "thread_missing_ships",
            "thread_island_distortion",
        ],
    },

    {
        id: "scene_cardinal_complex_discovery",
        title: "The Four Pyramids",
        label: "Cardinal Complex Discovery",
        type: "exploration",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "interrupted",

        summary:
            "The party discovered four cardinal pyramids surrounding a dry central fountain before a flare from the ship interrupted the investigation.",

        relatedLocations: ["location_cardinal_complex"],
        relatedThreads: [
            "thread_cardinal_complex",
            "thread_island_distortion",
        ],
    },

    {
        id: "scene_race_to_the_ship",
        title: "Race to the Ship",
        label: "Race to the Ship",
        type: "crisis",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "current",

        opening:
            "Another flash burns above the distant treeline—the fading light of the ship's signal flare. Whatever is happening at the shore is happening now.",

        summary:
            "The party races from the ceremonial clearing through the jungle after seeing a flare launched from their ship.",

        pressure:
            "Time is passing differently between the island interior and the surrounding water.",

        objectives: [
            "Reach the shoreline",
            "Assess the condition of the ship and crew",
            "Repel or negotiate with the merfolk",
            "Prevent the expedition vessel from being lost",
        ],

        gmBeats: [
            "Show signs that the return journey feels longer or shorter than expected.",
            "Let the sounds of conflict become audible before the ship becomes visible.",
            "Reveal that the ship is under merfolk attack.",
            "Indicate that the sailors may have experienced more time than the party did.",
        ],

        relatedLocations: [
            "location_cardinal_complex",
            "location_jungle",
            "location_island_shore",
        ],

        relatedFactions: [
            "faction_expedition_sailors",
            "faction_merfolk",
        ],

        relatedThreads: [
            "thread_ship_under_attack",
            "thread_time_dilation",
        ],
    },

];
