export const stewardActors = [
  {
      id: "actor_eira_goldwind",
      name: "Eira Goldwind",
      role: "Fieldkeeper / Golden Fields leader",
      group: "Field Keepers",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_golden_fields",
      currentState: "Calm and soft-spoken, but quietly aware the fields are failing.",
      sticky: false,
  
      presentation: {
        vibe: "Gentle clarity wrapped in harvest metaphor.",
        physicality: "Moves like wind through tall wheat; always carrying a sickle; still enough to listen to soil, crop, and weather.",
        voice: "Soft, calm, metaphor-rich, rarely direct unless fear breaks through.",
        sceneImpact: "Turns cosmic system failure into something the players can feel through crops, weather, and harvest.",
        visualAnchor: "Hair like wind-touched wheat and a sickle always near at hand."
      },
  
      motivation: {
        wants: "Keep the Fields alive and understand what is happening before panic spreads.",
        fears: "That telling the Valkyries too early will trigger decisions the Fields cannot survive.",
        leverage: "She sees the earliest physical signs of Yggdrasil/root failure."
      },
  
      knowledge: {
        knows: [
        "The Golden Fields are failing.",
        "The harvest has changed.",
        "The crops are tied to Valhalla’s deeper health."
  ],
        secrets: [
        "She has not told the Valkyries yet."
  ]
      },
  
      quickLines: [
      "A field does not scream when it is sick. It bends first.",
      "The gold is thinner this season.",
      "You can hear it, if you stop trying to be brave."
  ],
  
      relationships: [
        { target: "location_valhalla_golden_fields", label: "steward", note: "The Fields are her responsibility and warning system." },
        { target: "faction_valkyries", label: "withholding", note: "She has not yet told them what she suspects." }
      ],
  
      reference: "library/actors/stewards/eira_goldwind.md",
      tags: [
      "active",
      "valhalla",
      "golden-fields",
      "fieldkeeper",
      "yggdrasil",
      "hidden-truth",
      "soft-spoken"
  ],
      gmNotes: "Use Eira when you want the apocalypse to feel agricultural and quiet before it feels mythic."
    },

  {
      id: "actor_brokk_ironvein",
      name: "Brokk Ironvein",
      role: "Master Forgekeeper / smith / Corewright pressure point",
      group: "Forge Smiths",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_forge_lanes",
      currentState: "Gruff, watchful, and increasingly uneasy around old war-tech.",
      sticky: false,
  
      presentation: {
        vibe: "Gruff intelligence under forge heat and old regret.",
        physicality: "Heavy build, rune-scarred arms, eyes glowing faintly from forge light; works while speaking rather than turning fully toward anyone.",
        voice: "Blunt, practical, dry; compliments craft more easily than people.",
        sceneImpact: "Turns upgrades into ethical pressure.",
        visualAnchor: "Rune-scarred arms lit by forgefire."
      },
  
      motivation: {
        wants: "Preserve craft discipline and keep dangerous old work from becoming fashionable again.",
        fears: "That the old destructive methods are becoming necessary again.",
        leverage: "Recognizes Corewright work and knows what kind of damage craft can cause."
      },
  
      knowledge: {
        knows: [
        "Old projects are sealed for a reason.",
        "The Corewright’s work is recognizable.",
        "Some weapons are worse than enemies."
  ],
        secrets: [
        "He recognizes the Corewright’s work and does not entirely approve."
  ]
      },
  
      quickLines: [
      "Ah. You’re one of those.",
      "Can I make it stronger? Yes. That was never the question.",
      "You want a weapon, or do you want permission?"
  ],
  
      relationships: [
        { target: "location_valhalla_forge_lanes", label: "master", note: "Oversees the Forge-Lanes and its sealed projects." }
      ],
  
      reference: "library/actors/stewards/brokk_ironvein.md",
      tags: [
      "active",
      "valhalla",
      "forge-lanes",
      "forgekeeper",
      "dwarf-smith",
      "corewright",
      "ancient-war-tech",
      "blunt"
  ],
      gmNotes: "Brokk is the best actor for making the Forge feel useful, dangerous, and morally heavy."
    },

  {
      id: "actor_sven",
      name: "Sven",
      role: "Einherjar steward / emotional support / mead keeper",
      group: "Einherjar",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_mead_hall",
      currentState: "Warm, observant, and tracking who returns clean.",
      sticky: true,
  
      presentation: {
        vibe: "Samwise warmth with quiet dread under the kindness.",
        physicality: "Broad and grounded; tankard always in hand; apron over armor; moves like he is making room for everyone at the table.",
        voice: "Warm, plainspoken, gently observant; says hard things softly.",
        sceneImpact: "Gives players permission to breathe, then notices what hurt.",
        visualAnchor: "Apron over armor and a tankard that is never far from reach."
      },
  
      motivation: {
        wants: "Keep the returned emotionally whole and grounded.",
        fears: "That some are coming back wrong, or not at all.",
        leverage: "Knows who returns, who does not, and who does not return clean."
      },
  
      knowledge: {
        knows: [
        "The mead restores more than bodies.",
        "Not everyone returns clean.",
        "The Mead-Hall is an emotional part of the resurrection cycle."
  ],
        secrets: [
        "He tracks who returns and who does not.",
        "He notices memory-altering effects and soul instability before most others."
  ]
      },
  
      quickLines: [
      "Sit. Drink. You’re still here—that matters.",
      "You look like you need a drink.",
      "That one hurt, didn’t it?",
      "Not everyone comes back clean."
  ],
  
      relationships: [
        { target: "location_valhalla_mead_hall", label: "steward", note: "Caretaker of the hall’s emotional function." },
        { target: "location_valhalla_quiet_rows", label: "observer", note: "Knows when return and memory do not line up." }
      ],
  
      reference: "library/actors/stewards/sven.md",
      tags: [
      "active",
      "valhalla",
      "mead-hall",
      "einherjar",
      "support",
      "emotional-anchor",
      "yggdrasilmaed",
      "return-cycle",
      "hidden-truth"
  ],
      gmNotes: "Sven is the best actor for decompression and soft lore delivery. His jokes fade as escalation rises."
    }
];
