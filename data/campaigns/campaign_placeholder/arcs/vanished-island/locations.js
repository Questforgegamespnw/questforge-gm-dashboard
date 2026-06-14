export const locations = [

    {
        id: "location_harbor",
        title: "The Harbor",
        label: "The Harbor",
        type: "settlement",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        establishingShot:
            "Crowded piers and increasingly empty berths reveal the growing cost of ships that leave harbor and never return.",

        vibe: "Commercial pressure, anxious sailors, and unanswered disappearances.",

        sensory: [
            "Tarred rope and saltwater",
            "Dock bells and shouted manifests",
            "Noticeably empty berths",
            "Conversations stopping when missing ships are mentioned",
        ],

        function:
            "The investigation's starting point and the center of the economic pressure caused by the disappearances.",

        pressure:
            "Each missing vessel increases financial losses, public fear, and pressure on the harbor authority.",

        opportunities: [
            "Question harbor officials",
            "Compare the routes of missing ships",
            "Speak with surviving sailors and grieving families",
            "Acquire another vessel or expedition supplies",
        ],

        dangers: [
            "Commercial interests may conceal embarrassing information",
            "Rumors may produce false leads",
            "Additional ships may disappear",
        ],

        connectedPlaces: ["location_open_water"],

        factionsPresent: [
            "faction_harbor_authority",
            "faction_commercial_company",
        ],

        tags: ["harbor", "investigation", "commerce", "missing-ships"],

        gmNotes: [
            "The exact harbor name and company name remain undefined.",
            "Expand only when the party returns or communicates with the harbor.",
        ],
    },

    {
        id: "location_open_water",
        title: "The Distorted Waters",
        label: "Distorted Waters",
        type: "wilderness",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        establishingShot:
            "Open water stretches in every direction, but a distant jungle island remains fixed at the same angle from the ship's bow.",

        vibe: "Open, exposed, and subtly impossible.",

        sensory: [
            "Wind pulling against the sails",
            "The repetitive creak of the hull",
            "An island that refuses to shift on the horizon",
            "A growing sense that ordinary navigation no longer applies",
        ],

        function:
            "The magical boundary surrounding the island and the point where normal navigation begins to fail.",

        pressure:
            "Ships caught within the island's influence may be redirected, delayed, or prevented from returning.",

        opportunities: [
            "Test the island's relationship to heading and distance",
            "Compare magical and mundane navigation",
            "Search for wreckage or other trapped vessels",
        ],

        dangers: [
            "Temporal distortion",
            "Merfolk activity",
            "Becoming unable to relocate the harbor",
            "Other missing ships may still be trapped nearby",
        ],

        connectedPlaces: [
            "location_harbor",
            "location_island_shore",
        ],

        tags: ["ocean", "navigation", "magic", "time-distortion"],
    },

    {
        id: "location_island_shore",
        title: "The Island Shore",
        label: "Island Shore",
        type: "wilderness",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        establishingShot:
            "Dense jungle rises behind a narrow shoreline while the expedition ship rests at anchor beyond the shallows.",

        vibe: "Temporary safety at the edge of something deeply unfamiliar.",

        sensory: [
            "Heavy humidity",
            "Bright tropical foliage",
            "Insects and distant animal calls",
            "The expedition ship visible beyond the surf",
        ],

        function:
            "The transition between the distorted waters and the island interior.",

        pressure:
            "The anchored ship is the party's only established route back to the outside world.",

        opportunities: [
            "Defend or recover the ship",
            "Capture or question a merfolk attacker",
            "Discover how much time has passed offshore",
            "Examine the shallows for evidence of other vessels",
        ],

        dangers: [
            "Merfolk assault",
            "Loss of the ship",
            "Crew casualties",
            "Separation from the mainland",
        ],

        connectedPlaces: [
            "location_open_water",
            "location_jungle",
        ],

        factionsPresent: [
            "faction_expedition_sailors",
            "faction_merfolk",
        ],

        tags: ["shore", "ship", "merfolk", "current-crisis"],
    },

    {
        id: "location_jungle",
        title: "The Island Jungle",
        label: "Island Jungle",
        type: "wilderness",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        establishingShot:
            "Thick tropical growth closes around every trail, concealing both the shoreline and the ancient structures deeper inland.",

        vibe: "Beautiful, overgrown, and difficult to measure.",

        sensory: [
            "Wet leaves brushing against armor",
            "Dense heat beneath the canopy",
            "Bird and insect calls with unfamiliar rhythms",
            "Stonework appearing beneath roots and moss",
        ],

        function:
            "Exploration space connecting the shoreline to the ceremonial complex.",

        pressure:
            "Travel through the jungle may consume far more outside time than the party perceives.",

        opportunities: [
            "Find signs left by earlier expeditions",
            "Discover additional ruins",
            "Track merfolk or other island inhabitants",
            "Notice evidence of temporal inconsistency",
        ],

        dangers: [
            "Becoming lost",
            "Temporal displacement",
            "Unknown jungle creatures",
            "Ancient magical defenses",
        ],

        connectedPlaces: [
            "location_island_shore",
            "location_cardinal_complex",
        ],

        tags: ["jungle", "exploration", "ruins", "time-distortion"],
    },

    {
        id: "location_cardinal_complex",
        title: "The Cardinal Complex",
        label: "Cardinal Complex",
        type: "ruin",
        modeId: "campaign_placeholder",
        campaignId: "campaign_placeholder",
        arcId: "vanished_island",

        establishingShot:
            "Four stepped stone pyramids stand at the cardinal edges of a broad clearing. At their center rests a dry and ornately carved fountain.",

        vibe: "Deliberate symmetry swallowed by centuries of jungle.",

        sensory: [
            "Sunlight breaking through the canopy",
            "Weathered carvings across dark stone",
            "Four structures arranged with exacting precision",
            "A dry fountain basin at the center of the clearing",
        ],

        function:
            "The island's central magical or ceremonial mechanism.",

        pressure:
            "The complex may control the island's concealment, temporal distortion, or both.",

        opportunities: [
            "Investigate each cardinal pyramid",
            "Interpret the fountain's carvings",
            "Restore water or magical energy to the fountain",
            "Determine whether the structures operate together",
        ],

        dangers: [
            "Activating the system incorrectly",
            "Worsening the temporal distortion",
            "Drawing the attention of the island's inhabitants",
            "Becoming trapped during a larger time shift",
        ],

        connectedPlaces: ["location_jungle"],

        tags: [
            "pyramids",
            "fountain",
            "ancient-magic",
            "cardinal-directions",
            "central-mystery",
        ],

        gmNotes: [
            "The exact culture, creators, and purpose of the complex remain intentionally undefined.",
            "The pyramids are currently described as Mayan-inspired rather than literally Mayan.",
        ],
    },



];
