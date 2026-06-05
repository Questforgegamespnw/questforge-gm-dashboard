export const references = [
  {
    id: "reference_frost_root_act1_running_principles",
    label: "Act 1 Running Principles",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "procedure",
    summary: "Act 1 is a controlled success story with a stability illusion underneath.",
    details: [
      "Players should feel powerful, effective, and needed.",
      "The system is already breaking, but never explain Layer 3 in Act 1.",
      "Speak from player perception or observed weirdness; let hidden truth show only through consequences.",
      "End with victory plus unease, not closure.",
      "Mortal defenders are brave and competent, but outmatched by supernatural battlefield control."
    ],
    tags: ["act-1", "running-rule", "gm"]
  },

  {
    id: "reference_root_shrine_response_options",
    label: "Root Shrine Response Options",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "procedure",
    summary: "After the Too Late reveal, give agency without undoing the completed process.",
    details: [
      "Cleanse: hard skill challenge; partial success at best; feels like it resists.",
      "Stabilize: suppresses instability temporarily but does not undo change.",
      "Study: learn more and gain future advantage.",
      "Reward option: Root Pattern Recognition: advantage on future node/root checks or bonus vs node interactions.",
      "Do not provide a fight here unless future prep explicitly changes course."
    ],
    tags: ["act-1", "root-shrine", "reveal", "procedure"]
  },

  {
    id: "reference_frostroot_ragnarok_outcome_rubric",
    title: "Frostroot Act 1 — Ragnarok Outcome Rubric",
    type: "arc-outcome",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",

    summary: "Use at the end of Act 1 to decide how Frostroot changes the global Ragnarok Meter.",

    guidance: [
      {
        result: "Held",
        globalRagnarokValue: 2,
        note: "Full success: gate stabilized, civilians mostly safe, Rift closed, and the Root Shrine truth is understood or contained."
      },
      {
        result: "Strained",
        globalRagnarokValue: 3,
        note: "Partial success: the village survives, but losses, unresolved symptoms, damaged nodes, or unstable Rift aftermath remain visible."
      },
      {
        result: "Fractured",
        globalRagnarokValue: 4,
        note: "Failure state: gate collapse, heavy civilian losses, unstable Rift aftermath, or the Root change spreads without meaningful understanding."
      }
    ],

    gmNotes: "Do not tick this during play unless useful. Use active trackers like Gate State, Active Nodes, Rift State, Rift Closure Progress, and Civilian State to inform the final outcome."
  },

  {
    id: "reference_frostroot_root_truths_and_language",
    title: "Frostroot Root Truths & Language Guardrails",
    type: "truth-reference",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",

    summary: "The Frost Root is reacting to pressure and system strain. It is not simply corrupted, evil, dying, or hostile.",

    useThisLanguage: [
      "disturbed",
      "pulled wrong",
      "redirected",
      "written into",
      "reacting",
      "adjusting",
      "taught something new"
    ],

    avoidThisLanguage: [
      "corrupted",
      "evil",
      "dead",
      "possessed",
      "broken beyond repair",
      "the Root is attacking"
    ],

    coreTruths: [
      "Yggdrasil is not simply breaking; parts of the system are correcting, compensating, or reacting under strain.",
      "The Frost Root functions like a stabilizer / failsafe under pressure.",
      "The Root Shrine reveal should imply the Root was taught or redirected, not merely damaged.",
      "NPCs may misunderstand the symptom, but GM-facing truth should preserve the distinction."
    ],

    tableUse: "Use this reference when writing Yrsa, Torvald, Root Shrine clues, node behavior, and post-siege language."
  }
];
