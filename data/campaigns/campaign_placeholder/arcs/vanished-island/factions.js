export const factions = [

    {
        id: "faction_harbor_authority",
        title: "Harbor Authority",
        label: "Harbor Authority",
        type: "civic",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        summary:
            "Harbormasters and officials responsible for maintaining shipping activity and investigating the disappearances.",

        goals: [
            "Restore safe shipping routes",
            "Prevent further economic disruption",
            "Learn what happened to the missing ships",
        ],

        status: "offscreen",
    },

    {
        id: "faction_commercial_company",
        title: "Harbor Company",
        label: "Harbor Company",
        type: "commercial",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        summary:
            "The larger commercial organization suffering losses because of the missing ships.",

        goals: [
            "Recover vessels and cargo",
            "Resume normal trade",
            "Limit further financial damage",
        ],

        status: "offscreen",

        gmNotes: [
            "The company's official name and deeper motives remain undefined.",
        ],
    },

    {
        id: "faction_expedition_sailors",
        title: "The Expedition Sailors",
        label: "Expedition Sailors",
        type: "allied-crew",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        summary:
            "Sailors who joined the party because members of their previous crew disappeared during another voyage.",

        goals: [
            "Find their missing crewmates",
            "Keep the expedition vessel afloat",
            "Survive the island and return home",
        ],

        status: "endangered",

        gmNotes: [
            "Individual sailor names and personalities can be added once recovered from notes or established during play.",
        ],
    },

    {
        id: "faction_merfolk",
        title: "The Merfolk",
        label: "Merfolk",
        type: "island-inhabitants",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        summary:
            "Aquatic inhabitants currently attacking the expedition ship near the island's shore.",

        goals: [
            "Unknown",
        ],

        status: "hostile",

        gmNotes: [
            "Do not assume the merfolk are inherently malicious.",
            "Their motives, relationship to the island, and involvement in the missing ships remain unanswered.",
            "They may be guardians, victims, opportunists, or agents of another force.",
        ],
    },


];
