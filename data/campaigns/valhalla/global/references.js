export const references = [
{
    id: "reference_valhalla_return_loop",
    label: "Valhalla Return Loop",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    category: "procedure",
    summary: "Bifrost arrival → Heimdall acknowledgment → immediate reactions → hub choice → NPC interaction → next mission selection.",
    details: [
      "Use Bifrost as recap and sensory reset.",
      "Use Heimdall as continuity anchor.",
      "Let player-selected hub locations determine emotional pacing.",
      "Do not overexplain omens."
    ],

    tags: ["active", "valhalla", "procedure", "return-loop"],
    gmNotes: ""
  },

  {
    id: "reference_valhalla_hub_failure_textures",
    label: "Valhalla Hub Failure Textures",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "arc_valhalla_intermission",
    status: "active",

    category: "reminder",
    summary: "Each Valhalla location should fail in a different emotional language.",
    details: [
      "Bifrost Platform: return becomes unstable.",
      "Heimdall’s Threshold: certainty becomes silence.",
      "Mead-Hall: warmth becomes hollow.",
      "Golden Fields: natural order becomes contaminated.",
      "Forge-Lanes: creation becomes weaponized.",
      "Quiet Rows: memory becomes unreliable.",
      "Valkyrie Aerie: duty becomes moral fracture."
    ],

    tags: ["active", "valhalla", "hub", "failure-textures"],
    gmNotes: "Do not make every location ominous in the same way."
  },

{
    "id": "reference_multi_pantheon_character_support",
    "label": "Multi-Pantheon Character Support",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "character-origin / afterlife",
    "summary": "Players are not limited to Norse gods or beliefs; Valhalla can borrow champions from aligned domains.",
    "details": [
      "Valhalla is not claiming ownership. It is borrowing champions.",
      "Use the Valkyrie line: “You are… on loan.”",
      "Ask each player what their original afterlife would have been like.",
      "Final truth: Valhalla is not their home. It is their assignment."
    ],
    "reference": "library/rules/multi_pantheon_character_support.md",
    "tags": [
      "valhalla",
      "multi-pantheon",
      "afterlife",
      "character-origin",
      "soul-requisition"
    ],
    "gmNotes": "Good long-term fuel for Hel, Loki, and inter-pantheon tension."
  },
  {
    "id": "reference_fear_vs_corruption_loop",
    "label": "Fear vs Corruption Loop",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "combat procedure",
    "summary": "Fear creates tactical movement; corruption pulses disrupt control by forcing rerolls.",
    "details": [
      "Fear saves occur on initial application, half HP, and line-of-sight break.",
      "Frightened enemies reposition and retreat intelligently rather than panic-locking.",
      "Corruption Node pulses or Rift activations force affected enemies to reroll fear saves with advantage.",
      "Loop: control, disruption, chaos, reassertion."
    ],
    "reference": "library/rules/fear_vs_corruption_loop.md",
    "tags": [
      "valhalla",
      "fear",
      "corruption",
      "combat-system",
      "battlefield-control"
    ],
    "gmNotes": "Use to keep fear powerful without making the battlefield static."
  },
  {
    "id": "reference_yggdrasilmaed_system",
    "label": "Yggdrasilmaed System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "recovery / mission resource",
    "summary": "Each player begins a mission with 4 charges used for HP restoration or resource rejuvenation.",
    "details": [
      "Restoration Draught heals 50% max HP.",
      "Rejuvenation Draught restores spell slots/class resources like a long rest, but no HP.",
      "True nature: micro-reinitialization of the player’s state within the system.",
      "Eldri reveal: while Eldri is active, Yggdrasilmaed does nothing."
    ],
    "reference": "library/rules/yggdrasilmaed_system.md",
    "tags": [
      "valhalla",
      "yggdrasilmaed",
      "recovery",
      "mission-resource",
      "eldri"
    ],
    "gmNotes": "The later reveal reframes healing as overwrite."
  },
  {
    "id": "reference_bifrost_deployment_extraction",
    "label": "Bifrost Deployment & Valkyrie Extraction",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "deployment / extraction",
    "summary": "The party deploys by Bifrost and extracts by Valkyrie; extraction is cinematic but not guaranteed.",
    "details": [
      "The world does not wait for them; they arrive into active threats.",
      "Extraction requires mission state stabilized or emergency retrieval triggered.",
      "Extraction types: clean, hot, forced, failed.",
      "Heimdall tracks who deploys, who returns, and who returns wrong."
    ],
    "reference": "library/rules/bifrost_deployment_and_valkyrie_extraction.md",
    "tags": [
      "valhalla",
      "bifrost",
      "deployment",
      "extraction",
      "valkyries",
      "mission-loop"
    ],
    "gmNotes": "Core Valhalla mission-loop procedure."
  },
  {
    "id": "reference_mortality_drift",
    "label": "Mortality Drift",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "campaign pivot / resurrection",
    "summary": "Death starts reversible, Valhalla starts safe, and then that safety begins to fail.",
    "details": [
      "First Return Failure Event is the key campaign pivot.",
      "Heimdall line: “You return… Not all of you.”",
      "Before: death is reset, Valhalla is safe, missions are contained.",
      "After: death is uncertain, Valhalla is vulnerable, missions affect everything."
    ],
    "reference": "library/rules/mortality_drift.md",
    "tags": [
      "valhalla",
      "mortality-drift",
      "return-failure",
      "resurrection-cycle",
      "quiet-rows"
    ],
    "gmNotes": "Use when you are ready to make the players question whether they will come back."
  },
  {
    "id": "reference_ragnarok_escalation_system",
    "label": "Ragnarok Escalation System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "world-state meter",
    "summary": "Tracks world collapse from 0 to 10; tier changes alter Valhalla, missions, enemies, and legendary items.",
    "details": [
      "Tier 1 / 1–3: subtle wrongness.",
      "Tier 2 / 4–6: planar bleed.",
      "Tier 3 / 7–9: reality fracture.",
      "Tier 4 / 10: Ragnarok."
    ],
    "reference": "library/rules/ragnarok_escalation_system.md",
    "tags": [
      "valhalla",
      "ragnarok-meter",
      "tracker",
      "world-state",
      "escalation"
    ],
    "gmNotes": "When tension feels low, increase the meter by 1."
  },
  {
    "id": "reference_legendary_item_evolution",
    "label": "Legendary Item Evolution",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "item progression",
    "summary": "Legendary items evolve with Ragnarok tier, not character level.",
    "details": [
      "Tier changes automatically awaken new item properties.",
      "Items are responding to instability in Yggdrasil.",
      "Player feeling: “Why are we getting stronger?”",
      "NPC line: “That’s not your weapon changing… that’s the world getting worse.”"
    ],
    "reference": "library/rules/legendary_item_evolution.md",
    "tags": [
      "valhalla",
      "legendary-items",
      "ragnarok-meter",
      "progression",
      "world-breaking"
    ],
    "gmNotes": "Power increase should feel exciting and ominous."
  },
  {
    "id": "reference_relationship_triangle",
    "label": "Relationship Triangle",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "faction compass",
    "summary": "Yggdrasil, Valkyries, Hel, and Loki create the campaign’s core philosophical compass.",
    "details": [
      "Yggdrasil System: order / continuation.",
      "Valkyries: duty / fracture.",
      "Hel: rest / acceptance.",
      "Loki: change / choice.",
      "Players decide which direction the world bends."
    ],
    "reference": "library/factions/relationship_triangle.md",
    "tags": [
      "valhalla",
      "faction-triangle",
      "yggdrasil",
      "valkyries",
      "hel",
      "loki"
    ],
    "gmNotes": "Use as a zoomed-out orientation tool."
  },
  {
    "id": "reference_rift_system",
    "label": "Rift System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "encounter tech",
    "summary": "Rifts are chaos spike buttons that spawn enemies, warp terrain, and create urgency.",
    "details": [
      "Player options: destroy, enter at high risk, suppress with skill challenge, or ignore.",
      "Use when combat pressure needs a sudden spike."
    ],
    "reference": "library/rules/rift_system.md",
    "tags": [
      "valhalla",
      "rift",
      "encounter-tech",
      "chaos-spike",
      "act-1"
    ],
    "gmNotes": "Act 1 origin, but reusable."
  },
  {
    "id": "reference_corruption_node_system",
    "label": "Corruption Node System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "encounter tech",
    "summary": "Corruption Nodes turn the environment into active objective space.",
    "details": [
      "Effects: difficult terrain, enemy buffs, fear reroll triggers.",
      "Player options: destroy, suppress, or ignore.",
      "Nodes are the battlefield control dial."
    ],
    "reference": "library/rules/corruption_node_system.md",
    "tags": [
      "valhalla",
      "corruption-node",
      "encounter-tech",
      "battlefield-control",
      "act-1"
    ],
    "gmNotes": "Strong reusable objective tech."
  },
  {
    "id": "reference_resonance_clash_system",
    "label": "Resonance Clash System",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "category": "spotlight mechanic",
    "summary": "When Bard magic meets Skald reaction, resolve it as a contested duel of will.",
    "details": [
      "Bard rolls CHA using Performance or Persuasion.",
      "Skald rolls CHA.",
      "Bard wins: spell enhanced or ignores resistance.",
      "Skald wins: spell weakened or partial failure."
    ],
    "reference": "library/rules/resonance_clash_system.md",
    "tags": [
      "valhalla",
      "resonance-clash",
      "bard",
      "skald",
      "spellcasting",
      "act-1"
    ],
    "gmNotes": "Use to spotlight the Bard, not to tax every spell."
  }
];
