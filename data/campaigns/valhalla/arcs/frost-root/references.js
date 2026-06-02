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
      "End with victory plus unease, not closure."
    ],
    tags: ["act-1", "running-rule", "gm"]
  },
  {
    id: "reference_frost_root_language_guardrails",
    label: "Frost Root Language Guardrails",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "reminder",
    summary: "Do not misrepresent the Frost Root as simply corrupted, dying, failing, or hostile.",
    details: [
      "Good language: disturbed, reacting, not behaving normally, pulled wrong, written into, redirected, adjusting.",
      "Avoid authoritative GM/NPC truth that says: the root is dying, the root is corrupted, the root is evil, the root is failing.",
      "NPCs may interpret poorly, but the final GM framing should preserve the inversion.",
      "Root Shrine reveal: not breaking, adjusting."
    ],
    tags: ["act-1", "root", "language", "guardrail"]
  },
  {
    id: "reference_einherjar_strike_system",
    label: "Einherjar Strike System",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    category: "procedure",
    summary: "Deployment loop established in Scene 0.",
    details: [
      "Deploy: Bifrost Down.",
      "Assess: identify local pressure and hidden objective.",
      "Neutralize: stop immediate escalation without revealing true nature.",
      "Extract: Valkyrie Up.",
      "Operational secrecy: do not reveal Valhalla, origin, or cosmic Ragnarok truth."
    ],
    tags: ["scene-0", "mission-loop", "einherjar", "procedure"]
  },
  {
    id: "reference_yggdrasilmaed",
    label: "Yggdrasilmaed",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "available",
    category: "rules",
    summary: "Divine mead resource introduced by Sven to support hard encounters from session 1.",
    details: [
      "Each player begins with 4 uses.",
      "Per use: heal 50% HP OR restore spell slots/abilities as pseudo-long-rest without healing.",
      "Encourage use under pressure, but never make it feel free.",
      "Optional: small surge / environmental reaction when used near Root strain."
    ],
    tags: ["scene-0", "mead", "resource", "rules"]
  },
  {
    id: "reference_gate_state_system",
    label: "Gate State System",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "procedure",
    summary: "Set after Phase 0 based on player speed and control.",
    details: [
      "Fast: Gate intact; defenders organized; fewer enemies inside town; Brinhild strong position.",
      "Moderate: Gate cracking; one breach lane opens; civilians in danger; brute pressure increases.",
      "Slow: Gate breached; enemies inside town immediately; civilians high risk; battlefield splits into two fronts."
    ],
    tags: ["act-1", "gate", "siege", "tracker"]
  },
  {
    id: "reference_node_quick_rules",
    label: "Node Quick Rules",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "rules",
    summary: "Local wrongness / battlefield objective nodes. Tactical shorthand may call them corruption nodes.",
    details: [
      "AC 13 / HP 25 / medium object / poison and psychic immunity.",
      "Aura: 10 ft radius, difficult terrain for players, allied undead gain +1d4 cold damage on first hit each turn.",
      "Suppress: action, DC 15 Arcana or Religion, disables aura until next turn.",
      "Pulse of Ruin: Runecaller activation or node below half HP; undead reroll active fear saves with advantage.",
      "Describe as visually wrong before mechanically dangerous. Destruction unravels rather than explodes."
    ],
    tags: ["act-1", "nodes", "rules", "battlefield"]
  },
  {
    id: "reference_runecaller_quick_rules",
    label: "Runecaller Quick Rules",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "rules",
    summary: "Battlefield controller and Phase 2 boss presence.",
    details: [
      "On entry: Corruption Pulse / node pulse pressure spike; nodes reactivate if appropriate; undead reroll fear with advantage.",
      "Legendary-lite at end of player turns, 2 total per round: Ice Lash, Rune Shift, Pulse Corruption costs 2.",
      "Command the Dead can create chain movement/attacks when abilities trigger.",
      "It is not trying to win the fight. It is trying to complete or protect the process.",
      "Entrance pacing: describe first, pause, then place miniature/token."
    ],
    tags: ["act-1", "runecaller", "boss", "rules"]
  },
  {
    id: "reference_rift_core_quick_rules",
    label: "Rift Core Quick Rules",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "rules",
    summary: "Phase 3 reality wound. Not a doorway; a mistake.",
    details: [
      "Baseline tuning: AC 14; HP 60. Earlier 120 HP version deprecated unless you want longer phase.",
      "Reality Tear: 15 ft radius difficult terrain; DC 14 CON or disadvantage on next attack/check this turn.",
      "Initiative 20: spawn 1 Draugr; optional first two rounds spawn 2 if fight is too easy.",
      "Close the Wound: adjacent action, DC 15 Arcana/Religion/Performance. Three successes folds the Rift.",
      "Void Flare: nearby force push/damage pulse as needed.",
      "Collapse language: it folds, like a wound remembering it was never meant to be open."
    ],
    tags: ["act-1", "rift", "rules", "phase-3"]
  },
  {
    id: "reference_skald_resonance_clash",
    label: "Skald Resonance Clash",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "rules",
    summary: "Bard-facing duel inside the battlefield.",
    details: [
      "When a player casts a spell, Skald may force CHA Performance/Persuasion vs Skald CHA.",
      "Player wins: spell proceeds normally and player gains a small concentration/resonance benefit.",
      "Skald wins: one target gains advantage on save OR spell's first damage roll is weakened/disadvantaged.",
      "Limit uses: 2–3 total or 3/day. This is spotlight pressure, not caster shutdown.",
      "Death beat: chant stops mid-syllable and the silence feels heavier than the noise."
    ],
    tags: ["act-1", "skald", "bard", "rules"]
  },
  {
    id: "reference_defenders_usage",
    label: "Defenders in Combat",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "frost-root",
    status: "active",
    category: "reminder",
    summary: "Defenders are environmental storytelling with hit points.",
    details: [
      "Have them engaged already.",
      "Let players save them occasionally.",
      "Use them to anchor positions.",
      "Do not track them like PCs.",
      "Do not let them overshadow players.",
      "Do not keep them alive too long if tension needs escalation."
    ],
    tags: ["act-1", "defenders", "combat", "gm"]
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
  }
];
