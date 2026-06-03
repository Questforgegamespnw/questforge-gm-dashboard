export const aesirActors = [
  {
      id: "actor_heimdall",
      name: "Heimdall",
      role: "Warden of the Bifrost / threshold sentinel / system indicator",
      group: "Valhalla",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_heimdalls_threshold",
      currentState: "Still, watchful, and saying less than usual.",
      sticky: true,
  
      presentation: {
        vibe: "Absolute certainty held in minimal motion.",
        physicality: "Completely still; golden gaze steady even when his eyes are closed; greatsword planted before him; armor reflecting light like still water.",
        voice: "Sparse, calm, final. He wastes no words.",
        sceneImpact: "Makes the table wait. His silence should feel like a system alert.",
        visualAnchor: "Greatsword planted point-down before him at the Bifrost edge."
      },
  
      motivation: {
        wants: "Keep the threshold watched and delay panic until action is useful.",
        fears: "That the system will break before anyone can meaningfully respond.",
        leverage: "Sees arrivals, departures, and things that have not happened yet."
      },
  
      knowledge: {
        knows: [
        "Who should return.",
        "Who did return.",
        "Who returned incorrectly.",
        "The system is holding until it cannot."
  ],
        secrets: [
        "He does not watch movement. He watches continuity.",
        "Each time the party returns, he internally checks whether all souls returned properly.",
        "He simply knows what happens if the system breaks too soon."
  ]
      },
  
      quickLines: [
      "You return.",
      "More trouble is brewing. Tarry not.",
      "You were seen.",
      "That path leads to loss.",
      "You are not the only ones who walk between.",
      "If they are right… the world ends quietly.",
      "If they are wrong… it ends screaming."
  ],
  
      relationships: [
        { target: "actor_kara_veilfeather", label: "parallel", note: "Kara is the Valkyrie most like Heimdall in function: quiet, observant, and cryptic." },
        { target: "faction_valkyries", label: "watcher", note: "Does not agree or disagree with Valkyrie actions lightly; he confirms outcomes." }
      ],
  
      reference: "library/actors/aesir/heimdall.md",
      tags: [
      "active",
      "valhalla",
      "heimdall",
      "threshold",
      "bifrost",
      "system-indicator",
      "foreshadow",
      "high-authority"
  ],
      gmNotes: "If Heimdall says nothing, stop. Let that land. Silence from Heimdall is a panic button."
    },

  {
      id: "actor_odin",
      name: "Odin",
      role: "Allfather / fate authority / distant power",
      group: "Aesir",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "",
      currentState: "Present by implication more often than direct appearance.",
      sticky: false,
  
      presentation: {
        vibe: "Ancient stillness with the weight of already-seen consequences.",
        physicality: "One eye glowing faintly; ravens always present; spear resting, not raised; stillness more intimidating than motion.",
        voice: "Rare, intentional, measured, and impossible to rush.",
        sceneImpact: "Raises the scale of the scene immediately. His refusal to act should feel heavier than action.",
        visualAnchor: "Spear resting rather than raised, with ravens watching nearby."
      },
  
      motivation: {
        wants: "Preserve the shape of fate until intervention becomes unavoidable.",
        fears: "That intervention at the wrong time produces the worse ending he has already seen.",
        leverage: "Knowledge of paths, costs, and future consequences."
      },
  
      knowledge: {
        knows: [
        "More than he says.",
        "What happens if he intervenes too early."
  ],
        secrets: [
        "His silence may be containment, not neglect."
  ]
      },
  
      quickLines: [
      "You mistake silence for inaction.",
      "I have already seen what happens if I intervene.",
      "You are still deciding."
  ],
  
      relationships: [],
  
      reference: "library/actors/aesir/odin.md",
      tags: [
      "active",
      "valhalla",
      "odin",
      "allfather",
      "fate",
      "ravens",
      "knowledge",
      "high-authority",
      "quiet-power"
  ],
      gmNotes: "Use sparingly. Odin should not become the party’s quest dispenser unless intentionally reframing the arc."
    }
];
