export const valkyrieActors = [
  {
      id: "actor_svinhild",
      name: "Svinhild",
      role: "Mission authority / Valkyrie commander / strategist",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Direct, efficient, and starting to question whether they are actually winning.",
      sticky: true,
  
      presentation: {
        vibe: "Strategic pressure with no patience for wasted motion.",
        physicality: "Fully armored, always in motion, wings rarely still; even standing still feels like preparing to depart.",
        voice: "Clipped, direct, tactical; commands more than she explains.",
        sceneImpact: "Turns uncertainty into assignment.",
        visualAnchor: "Wings rarely still behind full armor."
      },
  
      motivation: {
        wants: "Keep missions moving and produce results before the system falls further behind.",
        fears: "That all the discipline in Valhalla is still not enough.",
        leverage: "Mission authority, battlefield clarity, and Valkyrie command access."
      },
  
      knowledge: {
        knows: [
        "The missions are getting riskier.",
        "The Valkyries are under strain.",
        "Results matter more than ceremony right now."
  ],
        secrets: [
        "She is beginning to question: Are we actually winning?"
  ]
      },
  
      quickLines: [
      "We do not have time for doubt.",
      "Report.",
      "You were deployed for a reason.",
      "Next time, be faster."
  ],
  
      relationships: [
        { target: "faction_valkyries", label: "commander", note: "Represents command discipline and mission pressure." },
        { target: "actor_thora_stormcall", label: "risk tension", note: "Thora's recklessness can be useful, but dangerous." }
      ],
  
      reference: "library/actors/valkyries/svinhild.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "commander",
      "mission-giver",
      "pressure-source",
      "strategist",
      "risk-escalation"
  ],
      gmNotes: "Use when the table needs clear next steps, hard pressure, or mission framing."
    },

  {
      id: "actor_ryndis_ironwing",
      name: "Ryndis Ironwing",
      role: "Veteran retriever / practical mentor / retrieval failure observer",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Blunt, practical, and quietly tracking difficult retrievals.",
      sticky: false,
  
      presentation: {
        vibe: "Battlefield practicality with old exhaustion under the bluntness.",
        physicality: "Direct stance, no wasted posture, wings carried like tools rather than symbols; looks at injuries before faces.",
        voice: "Blunt, practical, dry; advice comes without ceremony.",
        sceneImpact: "Makes survival feel earned rather than glorious.",
        visualAnchor: "Iron-dark wings and the expression of someone who has carried worse."
      },
  
      motivation: {
        wants: "Keep useful people alive and retrievals possible.",
        fears: "That certain zones are becoming unreachable.",
        leverage: "Thousands of retrievals worth of pattern recognition."
      },
  
      knowledge: {
        knows: [
        "Some retrieval zones are becoming difficult.",
        "Survival is more useful than ceremony.",
        "Players who live can learn."
  ],
        secrets: [
        "She has started marking difficult retrievals.",
        "She is quietly avoiding certain mission zones.",
        "She may be first to suspect system failure."
  ]
      },
  
      quickLines: [
      "Still breathing? Good. Makes my job easier.",
      "Don’t die where I can’t reach you.",
      "I’ve carried better. I’ve carried worse."
  ],
  
      relationships: [
        { target: "faction_valkyries", label: "veteran", note: "Old enough to see patterns others dismiss." }
      ],
  
      reference: "library/actors/valkyries/ryndis_ironwing.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "veteran-retriever",
      "practical",
      "mentor",
      "retrieval-failure",
      "system-suspicion"
  ],
      gmNotes: "Use Ryndis for practical advice and early retrieval-system suspicion."
    },

  {
      id: "actor_eldri_softsky",
      name: "Eldri Softsky",
      role: "Gentle guide / emotional anchor / fragmented soul specialist",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Gentle and patient, but frightened by souls that no longer respond to her voice.",
      sticky: false,
  
      presentation: {
        vibe: "Deep empathy under quiet terror.",
        physicality: "Approaches slowly, never crowds, hands visible, movements softened as if guiding someone from a nightmare.",
        voice: "Soft-spoken, patient, intimate; built for reassurance.",
        sceneImpact: "Makes failed return feel personal and humane.",
        visualAnchor: "A gentle presence that feels like the first safe voice after death."
      },
  
      motivation: {
        wants: "Guide confused souls safely back into themselves.",
        fears: "That some souls can no longer be reached by comfort, memory, or name.",
        leverage: "Can calm fragmented souls and emotionally support players."
      },
  
      knowledge: {
        knows: [
        "Some returned souls are not fully oriented.",
        "Gentle guidance usually works.",
        "Recently, some souls do not respond."
  ],
        secrets: [
        "Some souls do not respond to her anymore.",
        "She has begun encountering souls that do not respond to her voice.",
        "This terrifies her."
  ]
      },
  
      quickLines: [
      "It’s alright… you made it back.",
      "Not all journeys end cleanly.",
      "You felt it too, didn’t you?"
  ],
  
      relationships: [
        { target: "actor_ryndis_ironwing", label: "contrast", note: "Eldri comforts where Ryndis hardens." },
        { target: "thread_dark_valkyrie_foreshadow", label: "risk", note: "Can become emotional anchor or tragic Dark Valkyrie path depending on play." }
      ],
  
      reference: "library/actors/valkyries/eldri_softsky.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "guide",
      "gentle",
      "emotional-anchor",
      "fragmented-souls",
      "player-comfort",
      "dark-valkyrie-risk"
  ],
      gmNotes: "Use Eldri when the table needs comfort, grief, or proof that failed returns hurt good people."
    },

  {
      id: "actor_thora_stormcall",
      name: "Thora Stormcall",
      role: "Fast responder / risk pusher / reckless anti-hero candidate",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Competitive, impulsive, and overextending into unstable zones.",
      sticky: false,
  
      presentation: {
        vibe: "Lightning-fast confidence with burnout under the bravado.",
        physicality: "Restless motion, spear always ready, weight forward like she is waiting to launch before permission is granted.",
        voice: "Sharp, teasing, competitive, impatient.",
        sceneImpact: "Pushes the party toward risk and speed.",
        visualAnchor: "Spear and stormlight; never quite still."
      },
  
      motivation: {
        wants: "Win fast, reach dangerous zones first, and prove fear is a waste of time.",
        fears: "That slowing down means losing people.",
        leverage: "Fastest responder in dangerous retrieval zones."
      },
  
      knowledge: {
        knows: [
        "Some zones are unstable.",
        "Speed saves souls, until it does not."
  ],
        secrets: [
        "She is overextending into unstable zones.",
        "She has started taking unnecessary risks."
  ]
      },
  
      quickLines: [
      "If you die, make it interesting.",
      "I don’t wait. I arrive.",
      "Next time—try not to need me."
  ],
  
      relationships: [
        { target: "actor_svinhild", label: "command tension", note: "Useful but increasingly difficult to control." },
        { target: "thread_dark_valkyrie_foreshadow", label: "risk", note: "Possible burnout fracture or reckless anti-hero path." }
      ],
  
      reference: "library/actors/valkyries/thora_stormcall.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "spear",
      "fast-responder",
      "risk-pusher",
      "reckless",
      "unstable-zones",
      "burnout-risk"
  ],
      gmNotes: "Use Thora when you want action pressure, impatience, or dangerous momentum."
    },

  {
      id: "actor_kara_veilfeather",
      name: "Kara Veilfeather",
      role: "Watcher / cryptic truth-dropper / independent Valkyrie",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Quiet, unsettlingly aware, and likely working independently.",
      sticky: false,
  
      presentation: {
        vibe: "Cryptic perception with dangerous independence.",
        physicality: "Still at the edge of scenes; watches before speaking; appears to have already noticed the change everyone else missed.",
        voice: "Quiet, sparse, delayed; sometimes only a pause and a sentence.",
        sceneImpact: "Seeds doubt with very few words.",
        visualAnchor: "A watcher’s stillness and a blade that catches cold light."
      },
  
      motivation: {
        wants: "Understand what is changing and act before command admits it.",
        fears: "That official order will preserve the system long enough for it to fail catastrophically.",
        leverage: "Already knows more than most and is willing to move independently."
      },
  
      knowledge: {
        knows: [
        "The system is failing.",
        "Something about the party has changed.",
        "Not all explanations are safe to speak aloud."
  ],
        secrets: [
        "She already knows the system is failing.",
        "She may be working independently.",
        "She is a Dark Valkyrie candidate."
  ]
      },
  
      quickLines: [
      "...",
      "You changed.",
      "Not all of you returned."
  ],
  
      relationships: [
        { target: "actor_heimdall", label: "parallel", note: "Most akin to Heimdall in silence and perception." },
        { target: "thread_dark_valkyrie_foreshadow", label: "candidate", note: "A major Dark Valkyrie candidate because she already knows and may act alone." }
      ],
  
      reference: "library/actors/valkyries/kara_veilfeather.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "watcher",
      "quiet",
      "cryptic",
      "system-failure",
      "dark-valkyrie-candidate",
      "heimdall-parallel",
      "independent-actor"
  ],
      gmNotes: "Use Kara sparingly. Her lines should create questions, not answer them."
    },

  {
      id: "actor_sylva_emberwing",
      name: "Sylva Emberwing",
      role: "Morale boost / player ally / system believer",
      group: "Valkyries",
      modeId: "valhalla",
      campaignId: "valhalla",
      arcId: "arc_valhalla_intermission",
      status: "active",
      currentLocation: "location_valhalla_valkyrie_aerie",
      currentState: "Hopeful, confident, and not yet tested by true failure.",
      sticky: false,
  
      presentation: {
        vibe: "Bright confidence with fragile faith underneath.",
        physicality: "Open stance, radiant confidence, posture angled toward action and reassurance.",
        voice: "Inspiring, clear, optimistic, and certain.",
        sceneImpact: "Makes the Valkyrie system still feel noble and worth saving.",
        visualAnchor: "Gold-winged confidence before the first real crack."
      },
  
      motivation: {
        wants: "Prove the system still works and help the players believe in it.",
        fears: "Not yet named; her fragility comes from never having faced real failure.",
        leverage: "Morale, confidence, and genuine belief."
      },
  
      knowledge: {
        knows: [
        "The doctrine and purpose of the Valkyries.",
        "How to inspire people into motion."
  ],
        secrets: [
        "She has not yet faced a failure.",
        "That makes her the most fragile when it happens."
  ]
      },
  
      quickLines: [
      "We don’t fail. We adapt.",
      "Everyone can be brought back.",
      "That’s what we’re here for."
  ],
  
      relationships: [
        { target: "faction_valkyries", label: "believer", note: "Represents the hopeful face of the system before it breaks." },
        { target: "thread_dark_valkyrie_foreshadow", label: "fragile", note: "Not a cynical candidate yet, but a failure could break her deeply." }
      ],
  
      reference: "library/actors/valkyries/sylva_emberwing.md",
      tags: [
      "active",
      "valhalla",
      "valkyrie",
      "idealist",
      "morale-boost",
      "player-ally",
      "system-believer",
      "fragile-faith",
      "failure-shock"
  ],
      gmNotes: "Use Sylva to show what is being lost. Her hope matters because it can break."
    }
];
