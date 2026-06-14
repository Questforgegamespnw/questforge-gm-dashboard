export const fireableMoments = [
    {
        id: "moment_return_journey_feels_wrong",
        title: "The Return Journey Feels Wrong",
        label: "Return Journey Feels Wrong",
        type: "environmental-reveal",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        trigger:
            "Fire while the party races from the cardinal complex toward the shore.",

        text:
            "The trail back should be familiar. Instead, distances stretch and collapse strangely beneath the jungle canopy. No one can agree how long they have been running.",

        relatedLocations: [
            "location_cardinal_complex",
            "location_jungle"
        ],

        relatedThreads: ["thread_time_dilation"]
    },

    {
        id: "moment_battle_reaches_the_jungle",
        title: "The Battle Reaches the Jungle",
        label: "Sounds from the Shore",
        type: "approach-reveal",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        trigger:
            "Fire shortly before the party reaches the shoreline.",

        text:
            "The surf is still hidden beyond the trees when the first sounds reach you—splintering wood, shouting sailors, and something heavy striking the hull.",

        relatedLocations: [
            "location_jungle",
            "location_island_shore"
        ],

        relatedThreads: ["thread_ship_under_attack"]
    },

    {
        id: "moment_ship_attack_reveal",
        title: "The Ship Under Attack",
        label: "Ship Attack Reveal",
        type: "crisis-reveal",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        trigger:
            "Fire when the party breaks through the jungle and sees the water.",

        text:
            "Your ship sits crooked against its anchor line. Figures move through the water around it, climbing the hull and dragging at the crew. The sailors aboard look exhausted—as though this fight began hours ago.",

        relatedLocations: ["location_island_shore"],

        relatedFactions: [
            "faction_expedition_sailors",
            "faction_merfolk"
        ],

        relatedThreads: [
            "thread_ship_under_attack",
            "thread_time_dilation"
        ]
    }
];