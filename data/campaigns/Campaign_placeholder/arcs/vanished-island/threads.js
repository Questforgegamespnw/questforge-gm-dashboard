export const threads = [
    {
        id: "thread_missing_ships",
        title: "The Missing Ships",
        label: "The Missing Ships",
        category: "primary-mystery",
        type: "investigation",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "active",

        summary:
            "Multiple ships have disappeared after sailing from the harbor.",

        currentState:
            "The party has found the magically concealed island connected to the disappearances but has not yet located the missing vessels.",

        nextPressure:
            "Evidence of the missing ships may be found offshore, within the jungle, or among the island's inhabitants.",

        relatedLocations: [
            "location_harbor",
            "location_open_water",
            "location_island_shore",
        ],
    },

    {
        id: "thread_island_distortion",
        title: "The Island That Would Not Move",
        label: "The Island's Distortion",
        category: "supernatural-mystery",
        type: "environmental-mystery",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "active",

        summary:
            "The island cannot be approached through ordinary navigation and appears to control its position relative to nearby ships.",

        currentState:
            "The party overcame the effect by intentionally steering toward the island.",

        nextPressure:
            "Leaving the island may be more difficult than entering it.",
    },

    {
        id: "thread_time_dilation",
        title: "Time Beyond the Shore",
        label: "Time Dilation",
        category: "hidden-truth",
        type: "temporal-mystery",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "hidden",

        summary:
            "Time passes differently within the island than it does on the surrounding water.",

        currentState:
            "The party has not yet conclusively recognized the temporal distortion.",

        nextPressure:
            "The condition of the sailors and ship will reveal that more time has passed offshore than the party experienced inland.",

        relatedLocations: [
            "location_open_water",
            "location_island_shore",
            "location_jungle",
            "location_cardinal_complex",
        ],
    },

    {
        id: "thread_cardinal_complex",
        title: "The Four Pyramids and the Fountain",
        label: "The Cardinal Complex",
        category: "location-mystery",
        type: "ancient-mechanism",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "active",

        summary:
            "Four cardinal pyramids surround a dry, ornately decorated stone fountain at the island's center.",

        currentState:
            "The party began investigating the complex but was interrupted by the ship's flare.",

        nextPressure:
            "The party must eventually determine whether the complex causes, regulates, or contains the island's magical effects.",

        relatedLocations: ["location_cardinal_complex"],
    },

    {
        id: "thread_ship_under_attack",
        title: "The Flare from the Ship",
        label: "Ship Under Attack",
        category: "immediate-crisis",
        type: "rescue",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",
        status: "urgent",

        summary:
            "The expedition ship launched a distress flare while the party was exploring the island.",

        currentState:
            "The party is racing back toward shore. Merfolk are attacking the ship.",

        nextPressure:
            "Crew members may be injured, captured, or forced overboard if the party cannot intervene.",

        relatedLocations: ["location_island_shore"],
        relatedFactions: [
            "faction_expedition_sailors",
            "faction_merfolk",
        ],
    },
];
