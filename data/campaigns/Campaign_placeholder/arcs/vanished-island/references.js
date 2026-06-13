export const references = [

    {
        id: "reference_campaign_current_state",
        title: "Current Campaign State",
        label: "Current State",
        category: "campaign-summary",
        type: "gm-reference",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        summary:
            "The party is racing from the cardinal pyramid complex toward the island shore after seeing a distress flare launched from their expedition ship.",

        details: [
            "The ship is being attacked by merfolk.",
            "Time passes differently on the island than on the surrounding water.",
            "The four pyramids and dry fountain remain unexplored.",
            "The fate of the missing ships remains unknown.",
        ],
    },

    {
        id: "reference_known_vs_hidden_truth",
        title: "Known and Hidden Truths",
        label: "Known vs. Hidden",
        category: "gm-truth",
        type: "gm-reference",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        knownToPlayers: [
            "Ships have been disappearing.",
            "The island behaved impossibly when approached.",
            "The island contains a jungle and ancient ceremonial structures.",
            "A distress flare was launched from their ship.",
        ],

        hiddenFromPlayers: [
            "Time passes differently on the island and the surrounding water.",
            "Merfolk are presently attacking the ship.",
            "The island's magic is connected to the ship disappearances.",
        ],

        unresolved: [
            "Why the merfolk are attacking",
            "Where the missing ships and crews are",
            "Who built the pyramids",
            "What the central fountain does",
            "Whether the island can be escaped normally",
        ],
    },

];
