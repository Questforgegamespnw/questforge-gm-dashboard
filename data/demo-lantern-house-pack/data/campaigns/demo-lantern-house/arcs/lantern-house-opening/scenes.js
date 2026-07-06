export const arcScenes = [
  {
    id: "scene_arrival_at_lantern_house",
    title: "Arrival at the Lantern House",
    session: "session_lantern_house_demo",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    type: "arrival-crisis",
    priority: "high",
    trigger: "Use when the party first reaches the cliff road below the beacon.",
    summary: "Introduce the location-driven cockpit flow: villagers outside, Orren's authority, Mira's fear, and the light's first impossible response.",
    playerFacing: "The road ends at a cliff, a locked iron gate, and a lighthouse burning against the storm. Villagers huddle below the steps in soaked cloaks. Captain Orren stands between them and the door, one hand on his whistle, the other gripping a harbor map ruined by rain. Above him, the beacon sweeps once across the sea, once across the village, and then once directly across you.",
    gmTruth: "The lamp has become a doorway/mouth through the missing lamplighter's unresolved binding. It reacts to names and lies because those are the handles it understands.",
    involvedActors: ["actor_captain_orren", "actor_mira_vale"],
    involvedLocations: ["location_lantern_house", "location_keeper_hall"],
    involvedFactions: ["faction_tidewatch_council"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    relatedTrackers: ["tracker_fog_pressure"],
    relatedReferences: ["reference_demo_how_to_run"],
    clues: [
      "The beam sweeps inland even though the mechanism should only face the harbor.",
      "Orren's map shows three ships wrecked against different approaches to the same reef.",
      "Mira flinches when someone says the missing lamplighter's name, not when they mention the disappearance."
    ],
    outcomes: [
      "If the party calms the villagers, Orren gives them cleaner access to witnesses.",
      "If they antagonize the crowd, rumors surge and Fog Pressure may increase by 1.",
      "If they question the map, they can identify that the light is misdirecting ships rather than failing randomly."
    ],
    outcomeShift: {
      question: "Do the players enter as trusted investigators, disruptive outsiders, or emergency help?",
      levers: ["Calm villagers", "Challenge Orren", "Follow Mira inside", "Investigate the cliff road first"],
      consequences: [
        "Trusted entry gives more witness cooperation.",
        "Public confrontation brings council pressure sooner.",
        "Immediate entry gets to the house while the lamp is still unstable."
      ]
    },
    forwardPath: {
      upNext: ["scene_ledger_of_lost_names", "scene_lantern_room_choice"],
      branches: [
        {
          id: "branch_arrival_public_calm",
          label: "Calm the Crowd",
          condition: "Party reassures villagers or extracts useful testimony without mockery.",
          effect: "Orren relaxes and allows broader access to the hall and witness list.",
          softPoint: "Reward players with names, rumors, and a clearer lead toward the ledger."
        },
        {
          id: "branch_arrival_force_entry",
          label: "Force the Door",
          condition: "Party bypasses Orren, threatens Mira, or ignores the villagers.",
          effect: "The house lets them in, but the fog thickens and the crowd turns fearful.",
          softPoint: "Increase Fog Pressure by 1 if you want a stronger supernatural opening."
        }
      ],
      scriptedMoments: [
        {
          timing: "First lamp flare",
          speaker: "GM",
          line: "The beam passes across the crowd and every shadow points toward the sea. Then it passes over you, and your shadows point toward the house.",
          purpose: "Show that the light is selecting the party, not merely illuminating them."
        },
        {
          timing: "When Orren opens the door",
          speaker: "actor_captain_orren",
          line: "Inside, you listen before you speak. This place has started answering things.",
          purpose: "Warn players about voice/name stakes without explaining the full truth."
        }
      ]
    },
    pressure: "The house is already treating the party as part of the problem.",
    runNote: "Start outside with human stakes. Let the supernatural appear as wrong behavior from ordinary civic objects: map, gate, lamp, ledger, whistle, shadows. Move into the Keeper's Hall when the party needs a controlled investigation space.",
    tags: ["available", "arrival", "mystery", "social", "location-linked"]
  },
  {
    id: "scene_ledger_of_lost_names",
    title: "The Ledger of Lost Names",
    session: "session_lantern_house_demo",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    type: "investigation-thread",
    priority: "medium",
    trigger: "Use when the party searches the Keeper's Hall, questions Mira, or follows Kettlewick to the ledger table.",
    summary: "The party discovers that the house records names before people vanish, and that the missing lamplighter may have been trying to remove a name rather than hide evidence.",
    playerFacing: "The ledger is too large for the narrow table beneath it. Its leather cover has gone soft from damp, and the brass clasp is bent as though opened with a knife. Mira reaches for it, stops herself, and looks toward the stairs. Kettlewick places one wet paw on the cover and slowly drags it open.",
    gmTruth: "The ledger is a civic record adapted into a supernatural index. The lamp uses written and spoken names as coordinates.",
    involvedActors: ["actor_mira_vale", "actor_kettlewick", "actor_captain_orren"],
    involvedLocations: ["location_keeper_hall", "location_tide_cellar"],
    involvedFactions: ["faction_tidewatch_council"],
    relatedThreads: ["thread_missing_lamplighter", "thread_light_that_answers"],
    relatedTrackers: ["tracker_fog_pressure"],
    clues: [
      "Several names are written in ink that has not dried despite being decades old.",
      "The missing lamplighter's name appears once crossed out, then again on tomorrow's date.",
      "Council seals cover a set of shipping names tied to wrecked vessels."
    ],
    outcomes: [
      "Reading names aloud strengthens the lamp's ability to locate those people.",
      "Destroying the ledger weakens the lamp's precision but angers the house and may erase a route to the missing.",
      "Studying the ledger reveals that the tide cellar has been used as an unofficial record vault."
    ],
    forwardPath: {
      upNext: ["scene_lantern_room_choice"],
      branches: [
        {
          id: "branch_ledger_read_names",
          label: "Read the Names",
          condition: "Party reads entries aloud or asks witnesses to confirm names.",
          effect: "Gain clearer clues but increase supernatural attention.",
          softPoint: "Let them learn fast, then make the lamp flare or echo a party member's name."
        },
        {
          id: "branch_ledger_protect_names",
          label: "Protect the Names",
          condition: "Party closes, hides, or alters the ledger to deny the lamp more coordinates.",
          effect: "Reduces immediate risk to villagers but makes the missing lamplighter harder to contact.",
          softPoint: "Good ethical instinct with investigative cost."
        }
      ],
      scriptedMoments: [
        {
          timing: "When the crossed-out name appears",
          speaker: "GM",
          line: "The ink does not say he died. It says his name was removed. Then, lower on the page, the same hand has written it again under tomorrow's tide.",
          purpose: "Move from missing-person mystery to name/coordinate logic."
        },
        {
          timing: "If Mira is pressed",
          speaker: "actor_mira_vale",
          line: "He told me the light needed names to find shore. Then he asked what happens when shore starts finding us back.",
          purpose: "Give Mira a useful reveal without making her omniscient."
        }
      ]
    },
    pressure: "Every discovered name is both clue and risk.",
    runNote: "Let players handle the ledger physically: turn pages, cover names, compare ink, ask who wrote what. Kettlewick can point to the next clue if the scene stalls.",
    tags: ["available", "investigation", "clue", "hidden-truth", "location-linked"]
  },
  {
    id: "scene_lantern_room_choice",
    title: "The Lantern Room Choice",
    session: "session_lantern_house_demo",
    modeId: "questforge-default",
    campaignId: "demo-lantern-house",
    arcId: "arc_lantern_house_opening",
    status: "available",
    type: "choice-scene",
    priority: "high",
    availability: {
      trackerId: "tracker_fog_pressure",
      minValue: 1,
      maxValue: 6
    },
    trigger: "Use when the party reaches the lantern room or forces a confrontation with the answering light.",
    summary: "The party decides what to do with a beacon that can guide the missing home but also calls through names, blood, and memory.",
    playerFacing: "The lens turns without gears. The flame inside it is too tall, too still, and too aware. As you enter, it leans toward Mira's key. A voice inside the glass exhales one word in the missing lamplighter's voice: please.",
    gmTruth: "The missing lamplighter is partially bound into the lamp. The light can be dimmed, redirected, fed, or broken; each option saves something and risks something else.",
    involvedActors: ["actor_mira_vale", "actor_kettlewick"],
    involvedLocations: ["location_lantern_room", "location_tide_cellar"],
    involvedFactions: ["faction_tidewatch_council"],
    relatedThreads: ["thread_light_that_answers", "thread_missing_lamplighter"],
    relatedTrackers: ["tracker_fog_pressure"],
    relatedReferences: ["reference_lantern_house_secret"],
    clues: [
      "The flame reacts most strongly to names, blood, and Mira's key.",
      "The lamp's voice sounds like the missing lamplighter when asking for release, but like other people when asking to be fed.",
      "Redirecting the beam briefly reveals shapes in the fog moving toward shore."
    ],
    outcomes: [
      "Dim the lamp: reduce Fog Pressure by 1, but risk losing contact with the missing.",
      "Feed the lamp: stabilize the beacon and reveal more, but increase Fog Pressure by 1.",
      "Redirect the beam: expose what is coming through the fog, but draw council attention and possible panic.",
      "Break the lens: end the immediate lure, but leave the missing unresolved and the coast without a beacon."
    ],
    forwardPath: {
      upNext: [],
      branches: [
        {
          id: "branch_lamp_dimmed",
          label: "Dim the Light",
          condition: "Party reduces the flame, covers the lens, or denies it names.",
          effect: "The fog weakens and the house quiets, but the missing lamplighter's voice fades before finishing a warning.",
          softPoint: "Best safety-first option; preserves future mystery."
        },
        {
          id: "branch_lamp_fed",
          label: "Feed the Light",
          condition: "Party uses blood, oil, names, or Mira's key to strengthen the lamp.",
          effect: "The lamp reveals the missing and the shapes in the fog, but becomes more capable of calling back.",
          softPoint: "Best information option; ethically risky."
        },
        {
          id: "branch_lamp_broken",
          label: "Break the Lens",
          condition: "Party physically destroys the lantern glass or mechanism.",
          effect: "The call stops. The storm returns to ordinary sound. Somewhere below, someone knocks once and then goes silent.",
          softPoint: "Hard ending. Do not punish it as wrong, but make the cost visible."
        }
      ],
      scriptedMoments: [
        {
          timing: "When the lamp first speaks",
          speaker: "Missing Lamplighter",
          line: "Do not give it your names. It can love a name and still drown the person wearing it.",
          purpose: "Clarify the central danger in a memorable line."
        },
        {
          timing: "If the party hesitates",
          speaker: "actor_mira_vale",
          line: "Tell me what to do while I can still tell which voice is mine.",
          purpose: "Put urgency and agency back in the players' hands."
        }
      ]
    },
    pressure: "The best tool for saving the coast has learned how to call things by name.",
    runNote: "Do not frame this as one correct answer. Each option should save one value and risk another: safety, truth, rescue, civic order, or supernatural containment.",
    tags: ["available", "choice", "hidden-truth", "moral-pressure", "tracker-gated"]
  }
];
