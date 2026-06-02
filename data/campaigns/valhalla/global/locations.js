export const locations = [
  {
    "id": "location_valhalla_hub",
    "name": "Valhalla Hub",
    "type": "fortress-city / war afterlife hub",
    "region": "Valhalla",
    "locationRole": "parent",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "available",
    "currentState": "Functional, structured, beautiful, and beginning to fail under Ragnarok pressure.",
    "presentation": {
      "establishingShot": "Massive rune-carved timber walls, dragon-headed beams, golden sky, and battle echoes that never quite fade.",
      "vibe": "Eternal readiness with hairline cracks beneath the glory.",
      "sensory": [
        "Gold light that never fully dims.",
        "Distant drills and feasting sounds.",
        "A fortress-city trying to remain certain."
      ]
    },
    "function": "Parent overview for the Valhalla hub and its major player-facing zones.",
    "pressure": "Valhalla remains beautiful, but rituals, retrieval, memory, and morale are beginning to misfire.",
    "connectedLocations": [
      "location_valhalla_bifrost_platform",
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_mead_hall",
      "location_valhalla_golden_fields",
      "location_valhalla_forge_lanes",
      "location_valhalla_quiet_rows",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_training_grounds"
    ],
    "keyActors": [
      "actor_heimdall",
      "actor_sven",
      "actor_svinhild"
    ],
    "relatedThreads": [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_yggdrasil_root_sickness",
      "thread_valkyrie_disagreement",
      "thread_heimdall_knows_more",
      "thread_names_changing_quiet_rows",
      "thread_borrowed_souls",
      "thread_return_is_not_guaranteed"
    ],
    "availableScenes": [
      "scene_valhalla_choose_hub_location",
      "scene_valhalla_immediate_hub_reactions"
    ],
    "fireableMoments": [
      {
        "id": "moment_valhalla_hub_choose_direction",
        "title": "Choose Where to Go",
        "type": "navigation",
        "trigger": "When players finish the return beat and need table-facing options.",
        "compact": "Valhalla opens around them: Mead-Hall, Forge-Lanes, Golden Fields, Quiet Rows, Training Grounds, or the Valkyrie Aerie.",
        "spotlight": {
          "title": "Choose Where to Go",
          "readAloud": [
            "Valhalla does not close around you.",
            "It opens.",
            "Warmth and music roll from the Mead-Hall. Forgefire glows in the distance. Golden fields ripple under impossible sunlight. Above, the Valkyrie Aerie waits in the wind."
          ],
          "gmPurpose": "Hand agency back to the players and let them choose emotional pacing.",
          "followUp": "Click the chosen child location."
        },
        "tags": [
          "valhalla",
          "hub",
          "choice",
          "navigation"
        ]
      }
    ],
    "reference": "library/hub/00_hub_system_overview.md",
    "tags": [
      "hub",
      "valhalla",
      "parent-location",
      "war-afterlife"
    ]
  },
  {
    "id": "location_valhalla_bifrost_platform",
    "name": "Bifrost Platform",
    "type": "arrival platform / return node",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Controlled and familiar, but each return feels slightly less clean.",
    "escalation": {
      "stable": "Arrival is violent but clean.",
      "strain": "Impact feels harsher; warmth arrives late.",
      "fracture": "One return is out of sync; mission sensory details linger.",
      "break": "Return is incomplete, delayed, or visibly misaligned."
    },
    "presentation": {
      "establishingShot": "The party falls in streaks of burning rainbow light, striking the platform with impossible force. Heat flashes and fades into warmth as battle noise dissolves into distant laughter, bread, mead, and woodsmoke.",
      "vibe": "Violent arrival contained by divine order.",
      "sensory": [
        "Burning rainbow light.",
        "Heat fading instantly into warmth.",
        "Battle noise replaced by distant laughter."
      ]
    },
    "function": "Session opener, return sequence, tone reset, and resurrection-system indicator.",
    "pressure": "Arrival is always violent. It is no longer always clean.",
    "opportunities": [
      "Recap the mission through sensory contrast.",
      "Foreshadow return-system instability.",
      "Transition into immediate NPC reactions."
    ],
    "dangers": [
      "The return may feel delayed, misaligned, or incomplete.",
      "Mission sensations may linger after arrival."
    ],
    "connectedLocations": [
      "location_valhalla_heimdalls_threshold",
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    "relatedThreads": [
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_heimdall_knows_more"
    ],
    "factionsPresent": [],
    "actorsPresent": [
      "actor_heimdall"
    ],
    "availableScenes": [
      "scene_valhalla_bifrost_return",
      "scene_valhalla_immediate_hub_reactions"
    ],
    "fireableMoments": [
      {
        "id": "moment_bifrost_clean_return",
        "title": "Clean Return",
        "type": "return",
        "trigger": "Use when the return should feel functional and reassuring.",
        "compact": "Heat fades into warmth. The system still catches them.",
        "spotlight": {
          "title": "Clean Return",
          "readAloud": [
            "Rainbow fire tears away from your skin.",
            "The platform catches you with impossible force.",
            "Then the heat becomes warmth, and Valhalla is there again."
          ],
          "gmPurpose": "Establish the baseline so later deviations matter.",
          "followUp": "Move to Heimdall or immediate hub reactions."
        },
        "tags": [
          "valhalla",
          "bifrost",
          "return",
          "baseline"
        ]
      },
      {
        "id": "moment_bifrost_lingering_mission_sensation",
        "title": "Lingering Mission Sensation",
        "type": "omen",
        "trigger": "Use when something from the previous mission should follow them home.",
        "compact": "A sound, smell, or injury from the mission lingers one breath too long.",
        "spotlight": {
          "title": "Lingering Mission Sensation",
          "readAloud": [
            "The battle should be gone.",
            "For one breath, it is not.",
            "You still smell the place you left behind. Then Valhalla’s warmth pushes in and the sensation vanishes."
          ],
          "gmPurpose": "Signal return-system strain without stopping the hub loop.",
          "followUp": "Ask one player what detail lingered for them."
        },
        "tags": [
          "valhalla",
          "bifrost",
          "return",
          "omen",
          "system-strain"
        ]
      },
      {
        "id": "moment_bifrost_one_heartbeat_late",
        "title": "One Heartbeat Late",
        "type": "system-tell",
        "trigger": "Use when the return should feel slightly delayed or misaligned.",
        "compact": "One of them arrives a heartbeat after the others.",
        "spotlight": {
          "title": "One Heartbeat Late",
          "readAloud": [
            "The party strikes the platform in a crash of light.",
            "For one heartbeat, one space is empty.",
            "Then the last streak of color lands too hard, too late, and the warmth catches up."
          ],
          "gmPurpose": "Create a visible but non-catastrophic return anomaly.",
          "followUp": "Let Heimdall notice without explaining."
        },
        "tags": [
          "valhalla",
          "bifrost",
          "return",
          "misalignment"
        ]
      }
    ],
    "eventTable": "",
    "reference": "library/hub/01_bifrost_platform.md",
    "tags": [
      "active",
      "valhalla",
      "return",
      "bifrost",
      "system-indicator",
      "session-opener"
    ],
    "gmNotes": "Use every post-mission sequence. Let small differences imply system strain."
  },
  {
    "id": "location_valhalla_heimdalls_threshold",
    "name": "Heimdall’s Threshold",
    "type": "threshold / watcher post",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Still and watchful; Heimdall’s brevity is becoming more meaningful.",
    "escalation": {
      "stable": "Heimdall acknowledges the party with calm certainty.",
      "strain": "He says less than usual.",
      "fracture": "He pauses, watches, or withholds something obvious.",
      "break": "He says nothing."
    },
    "presentation": {
      "establishingShot": "At the edge of the Bifrost platform, the return-light thins into stillness. Heimdall stands unmoving, framed by gold and impossible distance, his gaze already fixed on the party before they fully rise.",
      "vibe": "Still, watchful, and uncomfortably certain.",
      "sensory": [
        "Strange reflected light.",
        "Absolute stillness after violent return.",
        "A gaze that arrives before words."
      ]
    },
    "function": "Tone anchor, system indicator, and foreshadow delivery point.",
    "pressure": "If Heimdall says less than usual, something is wrong. If he says nothing, something is very wrong.",
    "opportunities": [
      "Signal escalation without exposition.",
      "Deliver brief, loaded acknowledgments.",
      "Let players read changed ritual."
    ],
    "dangers": [
      "Heimdall’s silence can imply severe system failure.",
      "Over-explaining weakens the location’s power."
    ],
    "connectedLocations": [
      "location_valhalla_bifrost_platform",
      "location_valhalla_valkyrie_aerie",
      "location_valhalla_mead_hall"
    ],
    "relatedThreads": [
      "thread_heimdall_knows_more",
      "thread_borrowed_souls",
      "thread_return_is_not_guaranteed"
    ],
    "factionsPresent": [],
    "actorsPresent": [
      "actor_heimdall"
    ],
    "availableScenes": [
      "scene_valhalla_heimdall_acknowledgment"
    ],
    "fireableMoments": [
      {
        "id": "moment_heimdall_you_return",
        "title": "You Return",
        "type": "acknowledgment",
        "trigger": "Use as the normal Heimdall baseline after arrival.",
        "compact": "Heimdall gives the minimum possible confirmation: “You return.”",
        "spotlight": {
          "title": "You Return",
          "readAloud": [
            "Heimdall’s gaze moves across you once.",
            "His sword remains planted before him.",
            "“You return.”"
          ],
          "gmPurpose": "Confirm that the system registered the party’s return.",
          "followUp": "Move quickly unless players press him."
        },
        "tags": [
          "valhalla",
          "heimdall",
          "threshold",
          "baseline"
        ]
      },
      {
        "id": "moment_heimdall_you_were_seen",
        "title": "You Were Seen",
        "type": "foreshadow",
        "trigger": "Use when the mission exposed the party to something watching across systems.",
        "compact": "Heimdall says only: “You were seen.”",
        "spotlight": {
          "title": "You Were Seen",
          "readAloud": [
            "Heimdall does not look past you.",
            "He looks through the path you used to return.",
            "“You were seen.”"
          ],
          "gmPurpose": "Seed external attention without naming the watcher.",
          "followUp": "Answer follow-up questions with short, final statements."
        },
        "tags": [
          "valhalla",
          "heimdall",
          "foreshadow",
          "watcher"
        ]
      },
      {
        "id": "moment_heimdall_says_nothing",
        "title": "Heimdall Says Nothing",
        "type": "omen",
        "trigger": "Use only when you want the table to understand something is very wrong.",
        "compact": "Heimdall watches them return. He does not speak.",
        "spotlight": {
          "title": "Heimdall Says Nothing",
          "readAloud": [
            "Heimdall is waiting.",
            "His sword is planted before him.",
            "His gaze moves across each of you once.",
            "He says nothing."
          ],
          "gmPurpose": "Escalate through absence. Do not explain the silence.",
          "followUp": "Let players ask questions; answer minimally."
        },
        "tags": [
          "valhalla",
          "heimdall",
          "silence",
          "omen",
          "high-escalation"
        ]
      }
    ],
    "eventTable": "",
    "reference": "library/hub/02_heimdalls_threshold.md",
    "tags": [
      "active",
      "valhalla",
      "heimdall",
      "threshold",
      "foreshadow",
      "system-indicator"
    ],
    "gmNotes": "Keep sparse. Heimdall is a warning signal, not an exposition engine."
  },
  {
    "id": "location_valhalla_mead_hall",
    "name": "The Mead-Hall",
    "type": "social hub / emotional reset",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Warm, loud, and mostly stable, though subtle inconsistencies are beginning.",
    "escalation": {
      "stable": "Feasting, boasting, warmth, and endless return.",
      "strain": "Mead tastes different; songs feel rehearsed; old wounds ache.",
      "fracture": "Einherjar question immortality; food dims; laughter arrives late.",
      "break": "The hall feels like a memory of safety rather than safety itself."
    },
    "presentation": {
      "establishingShot": "The Mead-Hall stretches ahead in firelit immensity, its beams carved with ancient battles while Einherjar laugh, argue, sing, and slam tankards beneath a ceiling glowing like burnished gold.",
      "vibe": "Loud, warm, alive, and remembered.",
      "sensory": [
        "Roasting meat and spilled mead.",
        "Laughter rolling beneath carved rafters.",
        "Old battle songs echoing slightly too perfectly."
      ]
    },
    "function": "Social hub, morale reset, rumor delivery, and resurrection-cycle pressure point.",
    "pressure": "As Ragnarok rises, the hall feels less eternal and more performative.",
    "opportunities": [
      "Reconnect with NPCs.",
      "Hear rumors from Einherjar.",
      "Recover emotionally after missions.",
      "Deliver Sven scenes."
    ],
    "dangers": [
      "Warriors begin remembering deaths incorrectly.",
      "Food and mead become inconsistent.",
      "The hall briefly falls silent when it should not."
    ],
    "eventTable": "table_mead_hall_events",
    "connectedLocations": [
      "location_valhalla_bifrost_platform",
      "location_valhalla_forge_lanes",
      "location_valhalla_quiet_rows"
    ],
    "relatedThreads": [
      "thread_valhalla_system_failure_chain",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed"
    ],
    "factionsPresent": [
      "faction_einherjar"
    ],
    "actorsPresent": [
      "actor_sven"
    ],
    "availableScenes": [
      "scene_valhalla_mead_hall_decompression",
      "scene_valhalla_immediate_hub_reactions"
    ],
    "fireableMoments": [
      {
        "id": "moment_sven_sit_drink",
        "title": "Sven: Sit. Drink.",
        "type": "decompression",
        "trigger": "Use when the table needs warmth after danger.",
        "compact": "Sven makes room, puts a drink down, and refuses to let heroics replace breathing.",
        "spotlight": {
          "title": "Sven: Sit. Drink.",
          "readAloud": [
            "Sven is already clearing space before you reach the table.",
            "A tankard lands in front of you.",
            "“Sit. Drink. You’re still here—that matters.”"
          ],
          "gmPurpose": "Give the party permission to decompress and talk in-character.",
          "followUp": "Ask who accepts the drink and who does not."
        },
        "tags": [
          "valhalla",
          "mead-hall",
          "sven",
          "decompression"
        ]
      },
      {
        "id": "moment_mead_tastes_wrong",
        "title": "The Mead Tastes Wrong",
        "type": "system-tell",
        "trigger": "Use when you want subtle return-cycle strain in a warm scene.",
        "compact": "The mead restores, but the taste lands slightly wrong.",
        "spotlight": {
          "title": "The Mead Tastes Wrong",
          "readAloud": [
            "The mead is warm.",
            "It does what it always does: steadies the hands, fills the chest, reminds the body it is alive.",
            "But the aftertaste is thinner than you remember."
          ],
          "gmPurpose": "Make the Yggdrasilmaed/return loop feel slightly less reliable.",
          "followUp": "Sven notices if players react."
        },
        "tags": [
          "valhalla",
          "mead-hall",
          "yggdrasilmaed",
          "system-strain"
        ]
      },
      {
        "id": "moment_warrior_remembers_wrong_death",
        "title": "Warrior Remembers the Wrong Death",
        "type": "memory-drift",
        "trigger": "Use when Einherjar memory weirdness should surface socially.",
        "compact": "A warrior cheerfully remembers fighting beside a PC in a battle that never happened.",
        "spotlight": {
          "title": "Warrior Remembers the Wrong Death",
          "readAloud": [
            "An Einherjar slams a hand on the table beside you.",
            "“There you are! I knew I remembered that shield-work. We died well at the Black Ford, you and I.”",
            "No one at the table seems to think the statement is strange."
          ],
          "gmPurpose": "Foreshadow memory drift while keeping the Mead-Hall lively.",
          "followUp": "Let the player decide whether to correct them."
        },
        "tags": [
          "valhalla",
          "mead-hall",
          "memory",
          "einherjar",
          "foreshadow"
        ]
      },
      {
        "id": "moment_hall_goes_silent",
        "title": "The Hall Goes Silent",
        "type": "omen",
        "trigger": "Use sparingly when you want the Mead-Hall to feel less eternal.",
        "compact": "For one breath, the whole hall stops.",
        "spotlight": {
          "title": "The Hall Goes Silent",
          "readAloud": [
            "The laughter cuts out.",
            "No cup hits wood. No boot scrapes floor. No fire pops in the hearth.",
            "Then the hall roars back to life like nothing happened."
          ],
          "gmPurpose": "Turn warmth hollow for one controlled beat.",
          "followUp": "Do not explain it immediately."
        },
        "tags": [
          "valhalla",
          "mead-hall",
          "silence",
          "omen",
          "high-escalation"
        ]
      }
    ],
    "reference": "library/hub/03_mead_hall.md",
    "tags": [
      "active",
      "valhalla",
      "social",
      "emotional-rest",
      "mead-hall",
      "ragnarok-meter"
    ],
    "gmNotes": "Let players love this place before it starts to fail."
  },
  {
    "id": "location_valhalla_golden_fields",
    "name": "The Golden Fields",
    "type": "fields / sustenance zone / world-state indicator",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Golden and calm, but harvest irregularities are beginning.",
    "escalation": {
      "stable": "Golden, abundant, rhythmic, and calm.",
      "strain": "Harvest is lighter; wind changes direction unnaturally.",
      "fracture": "Wheat pales, cracks, or briefly blackens.",
      "break": "Crops bleed sap-like resin or fail in patches."
    },
    "presentation": {
      "establishingShot": "The road opens onto wheat so golden it seems to hold its own light, moving in slow waves beneath a sky that never fully darkens while distant farmers work in steady cadence.",
      "vibe": "Peaceful, maintained, and faintly unnatural.",
      "sensory": [
        "Wheat glowing faintly gold.",
        "Wind moving in rhythmic waves.",
        "Farmers singing in low, steady cadence."
      ]
    },
    "function": "World-state indicator, sustenance source, and early corruption foreshadowing.",
    "pressure": "The crops are tied directly to root health and sap purity.",
    "opportunities": [
      "Speak with farmers for grounded perspective.",
      "Notice warning signs before warriors do.",
      "Tie crop changes to Yggdrasil corruption."
    ],
    "dangers": [
      "Wheat may blacken, crack, or bleed sap-like resin.",
      "Sustenance itself may become unreliable."
    ],
    "eventTable": "table_golden_fields_events",
    "connectedLocations": [
      "location_valhalla_mead_hall",
      "location_valhalla_forge_lanes"
    ],
    "relatedThreads": [
      "thread_yggdrasil_root_sickness",
      "thread_valhalla_system_failure_chain"
    ],
    "factionsPresent": [],
    "actorsPresent": [
      "actor_eira_goldwind"
    ],
    "availableScenes": [
      "scene_valhalla_golden_fields_warning"
    ],
    "fireableMoments": [
      {
        "id": "moment_eira_gold_is_thinner",
        "title": "Eira: The Gold Is Thinner",
        "type": "clue",
        "trigger": "Use when players speak with Eira or inspect the crops.",
        "compact": "Eira names the problem in harvest language, not prophecy.",
        "spotlight": {
          "title": "Eira: The Gold Is Thinner",
          "readAloud": [
            "Eira kneels and lets the wheat run through her fingers.",
            "“The gold is thinner this season.”",
            "She says it softly, like naming it too loudly might make it worse."
          ],
          "gmPurpose": "Deliver root sickness through grounded, agricultural imagery.",
          "followUp": "Point toward the idea that Valhalla’s sustenance is linked to deeper system health."
        },
        "tags": [
          "valhalla",
          "golden-fields",
          "eira",
          "yggdrasil",
          "clue"
        ]
      },
      {
        "id": "moment_fields_wind_reverses",
        "title": "The Wind Reverses",
        "type": "system-tell",
        "trigger": "Use as a quiet environmental wrongness beat.",
        "compact": "The field wind stops and resumes from the wrong direction.",
        "spotlight": {
          "title": "The Wind Reverses",
          "readAloud": [
            "The wheat moves in one long golden wave.",
            "Then the wind stops.",
            "When it returns, every stalk bends the other way at once."
          ],
          "gmPurpose": "Show natural order becoming too system-like or corrected.",
          "followUp": "Let perceptive players connect it to Yggdrasil/root pressure."
        },
        "tags": [
          "valhalla",
          "golden-fields",
          "wind",
          "omen"
        ]
      },
      {
        "id": "moment_wheat_blackens_then_recovers",
        "title": "Wheat Blackens, Then Recovers",
        "type": "corruption-tell",
        "trigger": "Use when the players need a visible but brief corruption sign.",
        "compact": "A patch of wheat blackens for one breath, then returns to gold.",
        "spotlight": {
          "title": "Wheat Blackens, Then Recovers",
          "readAloud": [
            "A dark ripple passes through the wheat.",
            "For one breath, the field is not gold but black-veined and brittle.",
            "Then the color returns, too quickly, like the world corrected itself."
          ],
          "gmPurpose": "Make root sickness visible without making it fully understood.",
          "followUp": "Eira may pretend she did not see it unless pressed."
        },
        "tags": [
          "valhalla",
          "golden-fields",
          "corruption",
          "yggdrasil",
          "foreshadow"
        ]
      }
    ],
    "reference": "library/hub/04_golden_fields.md",
    "tags": [
      "active",
      "valhalla",
      "fields",
      "sustenance",
      "yggdrasil",
      "foreshadow"
    ],
    "gmNotes": "Farmers should notice problems before heroes do."
  },
  {
    "id": "location_valhalla_forge_lanes",
    "name": "The Forge-Lanes",
    "type": "craft district / upgrade hub / ancient war-tech site",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Productive and dangerous, with sealed projects beginning to hum.",
    "escalation": {
      "stable": "Productive, disciplined, dangerous but controlled.",
      "strain": "Forges burn irregularly; sparks form strange shapes.",
      "fracture": "Weapons react on their own; sealed doors hum.",
      "break": "The Forge produces solutions that resemble threats."
    },
    "presentation": {
      "establishingShot": "Heat rolls through the Forge-Lanes in waves, carrying the ring of hammers, the hiss of quenching steel, and the glow of rune-fire from workshops where dragon-headed bellows breathe flame.",
      "vibe": "Productive, dangerous, and old enough to remember things it should not.",
      "sensory": [
        "Constant sparks and ringing steel.",
        "Massive anvils with glowing runes.",
        "Dragon-head bellows breathing flame."
      ]
    },
    "function": "Upgrade hub, craft district, Corewright recognition point, and ancient war-tech lore site.",
    "pressure": "Some craftsmen remember making weapons that caused too much destruction.",
    "opportunities": [
      "Upgrade gear.",
      "Learn about ancient wars.",
      "Trigger Corewright-specific recognition.",
      "Find hints of sealed projects."
    ],
    "dangers": [
      "Weapons may react before being touched.",
      "Sealed projects may awaken.",
      "Creation becomes morally dangerous."
    ],
    "eventTable": "table_forge_lanes_events",
    "connectedLocations": [
      "location_valhalla_mead_hall",
      "location_valhalla_golden_fields"
    ],
    "relatedThreads": [
      "thread_yggdrasil_root_sickness"
    ],
    "factionsPresent": [],
    "actorsPresent": [
      "actor_brokk_ironvein"
    ],
    "availableScenes": [
      "scene_valhalla_forge_lanes_recognition"
    ],
    "fireableMoments": [
      {
        "id": "moment_brokk_you_are_one_of_those",
        "title": "Brokk: You’re One of Those",
        "type": "recognition",
        "trigger": "Use when a Corewright or old-tech-linked PC draws Brokk’s attention.",
        "compact": "Brokk recognizes the shape of old dangerous craft.",
        "spotlight": {
          "title": "Brokk: You’re One of Those",
          "readAloud": [
            "Brokk stops mid-strike.",
            "The hammer hangs above the anvil for a breath longer than it should.",
            "“Ah. You’re one of those.”"
          ],
          "gmPurpose": "Make the Forge recognize a PC’s deeper origin or old-war resonance.",
          "followUp": "Follow with a practical warning, not a lore dump."
        },
        "tags": [
          "valhalla",
          "forge-lanes",
          "brokk",
          "corewright",
          "recognition"
        ]
      },
      {
        "id": "moment_forge_sealed_door_hums",
        "title": "The Sealed Door Hums",
        "type": "hook",
        "trigger": "Use when players linger near old projects or ask what is forbidden.",
        "compact": "A sealed forge door reacts before anyone touches it.",
        "spotlight": {
          "title": "The Sealed Door Hums",
          "readAloud": [
            "Behind a rune-bound door, something hums.",
            "The sound is low enough to feel in your teeth.",
            "Brokk does not look at the door. “No.”"
          ],
          "gmPurpose": "Seed sealed-project danger and ancient war-tech pressure.",
          "followUp": "Players can press Brokk, but he should resist easy answers."
        },
        "tags": [
          "valhalla",
          "forge-lanes",
          "sealed-project",
          "ancient-war-tech"
        ]
      },
      {
        "id": "moment_weapon_reacts_before_touch",
        "title": "Weapon Reacts Before Touch",
        "type": "system-tell",
        "trigger": "Use when the Forge should feel alive and dangerous.",
        "compact": "A weapon shifts, rings, or warms before a player reaches it.",
        "spotlight": {
          "title": "Weapon Reacts Before Touch",
          "readAloud": [
            "The weapon moves before your hand reaches it.",
            "Not much. Just enough for metal to whisper against stone.",
            "The nearest smith goes very still."
          ],
          "gmPurpose": "Show creation becoming responsive, predictive, or unstable.",
          "followUp": "Offer upgrade temptation with moral weight."
        },
        "tags": [
          "valhalla",
          "forge-lanes",
          "weapon",
          "system-strain"
        ]
      },
      {
        "id": "moment_upgrade_or_permission",
        "title": "Upgrade or Permission",
        "type": "choice",
        "trigger": "Use when a player asks for an upgrade that has real consequences.",
        "compact": "Brokk makes the moral cost of craft explicit.",
        "spotlight": {
          "title": "Upgrade or Permission",
          "readAloud": [
            "Brokk looks at the work, then at you.",
            "“Can I make it stronger? Yes.”",
            "He sets the tool down. “That was never the question.”"
          ],
          "gmPurpose": "Frame upgrades as choices, not shopping.",
          "followUp": "Ask what they are willing to risk or awaken."
        },
        "tags": [
          "valhalla",
          "forge-lanes",
          "upgrade",
          "brokk",
          "choice"
        ]
      }
    ],
    "reference": "library/hub/05_forge_lanes.md",
    "tags": [
      "active",
      "valhalla",
      "forge",
      "upgrades",
      "corewright",
      "ancient-war-tech"
    ],
    "gmNotes": "Make upgrades exciting, but never morally weightless."
  },
  {
    "id": "location_valhalla_quiet_rows",
    "name": "The Quiet Rows",
    "type": "memory sanctuary / emotional anchor",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Still and sacred; names remain stable for now, but warmth and flickers suggest strain.",
    "escalation": {
      "stable": "Names are clear; candles steady; memory preserved.",
      "strain": "Names flicker faintly; carvings feel warm.",
      "fracture": "Names partially erase; armor shifts; new marks appear.",
      "break": "A name disappears, or remains after everyone forgets who it belonged to."
    },
    "presentation": {
      "establishingShot": "The noise of Valhalla falls away into a candlelit hall where names cover wooden boards in careful rows and armor rests along the walls like sleeping bodies.",
      "vibe": "Sacred, quiet, and increasingly uncertain.",
      "sensory": [
        "Candlelight that barely flickers.",
        "Carved names in warm wood.",
        "Footsteps that feel like interruptions."
      ]
    },
    "function": "Emotional anchor, death-system foreshadowing, memory degradation site.",
    "pressure": "Identity is supposed to survive return. Fading names mean the system is failing at the soul level.",
    "opportunities": [
      "Emotional RP.",
      "Private conversations.",
      "Notice missing, altered, or familiar names.",
      "Connect death, return, and memory."
    ],
    "dangers": [
      "Names may fade or disappear.",
      "A name may remain after memory of the person is gone.",
      "Death may become meaningfully permanent outside Valhalla."
    ],
    "eventTable": "table_quiet_rows_events",
    "connectedLocations": [
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    "relatedThreads": [
      "thread_names_changing_quiet_rows",
      "thread_returned_incomplete",
      "thread_return_is_not_guaranteed",
      "thread_valhalla_system_failure_chain"
    ],
    "factionsPresent": [],
    "actorsPresent": [
      "actor_sven",
      "actor_eldri_softsky"
    ],
    "availableScenes": [
      "scene_valhalla_quiet_rows_foreshadowing",
      "scene_valhalla_retrieval_failure_incident"
    ],
    "fireableMoments": [
      {
        "id": "moment_quiet_rows_name_flickers",
        "title": "A Name Flickers",
        "type": "memory-tell",
        "trigger": "Use as the lightest Quiet Rows warning.",
        "compact": "A carved name changes shape for a moment, then settles.",
        "spotlight": {
          "title": "A Name Flickers",
          "readAloud": [
            "One carved name catches your eye.",
            "The letters do not move exactly. They almost remember a different shape.",
            "Then the carving is still again."
          ],
          "gmPurpose": "Show memory-anchor strain without escalating to full failure.",
          "followUp": "Let players inspect or ask Sven/Eldri."
        },
        "tags": [
          "valhalla",
          "quiet-rows",
          "memory",
          "name",
          "foreshadow"
        ]
      },
      {
        "id": "moment_sven_not_everyone_comes_back_clean",
        "title": "Sven: Not Everyone Comes Back Clean",
        "type": "truth-softener",
        "trigger": "Use when players ask Sven about return, memory, or the Quiet Rows.",
        "compact": "Sven gives the soft version of a hard truth.",
        "spotlight": {
          "title": "Sven: Not Everyone Comes Back Clean",
          "readAloud": [
            "Sven’s usual warmth does not leave him, but it lowers.",
            "“Not everyone comes back clean.”",
            "He looks toward the names. “Most do. That used to be enough.”"
          ],
          "gmPurpose": "Give players a human way into mortality drift.",
          "followUp": "Do not reveal the full system chain yet."
        },
        "tags": [
          "valhalla",
          "quiet-rows",
          "sven",
          "return-cycle",
          "mortality-drift"
        ]
      },
      {
        "id": "moment_quiet_rows_name_disappears",
        "title": "A Name Disappears",
        "type": "high-escalation",
        "trigger": "Use only when you are ready for a major memory/soul failure tell.",
        "compact": "A name disappears while observed.",
        "spotlight": {
          "title": "A Name Disappears",
          "readAloud": [
            "A name near the end of the row begins to pale.",
            "The grooves soften. The wood smooths.",
            "A space remains where someone was supposed to be remembered."
          ],
          "gmPurpose": "Make soul-anchor failure undeniable.",
          "followUp": "Follow with silence, grief, or urgent Valkyrie pressure."
        },
        "tags": [
          "valhalla",
          "quiet-rows",
          "memory",
          "soul-failure",
          "high-escalation"
        ]
      }
    ],
    "reference": "library/hub/06_quiet_rows.md",
    "tags": [
      "active",
      "valhalla",
      "memory",
      "quiet-rows",
      "death",
      "identity",
      "emotional"
    ],
    "gmNotes": "Use sparingly. Slow everything down here."
  },
  {
    "id": "location_valhalla_valkyrie_aerie",
    "name": "The Valkyrie Aerie",
    "type": "mission hub / deployment platform / retrieval system",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "active",
    "currentState": "Disciplined and functional, though sortie strain and fatigue are becoming visible.",
    "escalation": {
      "stable": "Disciplined, awe-inspiring, efficient, and unified.",
      "strain": "Shorter conversations, scuffed armor, missing feathers, restless mounts.",
      "fracture": "Arguments, incomplete briefings, failed retrieval signs.",
      "break": "Refusal, abandonment, dark energy, radiant wings flickering into shadow."
    },
    "presentation": {
      "establishingShot": "High above the fortress, open-air platforms hang in the golden sky, joined by narrow bridges and spires while Valkyries stand in composed silence and winged mounts circle in slow arcs below.",
      "vibe": "Awe-inspiring discipline under increasing strain.",
      "sensory": [
        "Endless sky with drifting clouds below.",
        "Winged mounts circling in controlled arcs.",
        "Wind carrying clipped commands."
      ]
    },
    "function": "Mission briefing zone, deployment hub, Valkyrie relationship space, and retrieval-system failure indicator.",
    "pressure": "The Valkyries are making more sorties, traveling farther, and beginning to miss souls.",
    "opportunities": [
      "Receive mission briefings.",
      "Build Valkyrie relationships.",
      "Gain Valkyrie favor.",
      "Learn about missed souls."
    ],
    "dangers": [
      "Valkyries may fracture morally.",
      "Returning souls may fail to arrive.",
      "A Dark Valkyrie thread may begin here."
    ],
    "connectedLocations": [
      "location_valhalla_bifrost_platform",
      "location_valhalla_quiet_rows",
      "location_valhalla_heimdalls_threshold"
    ],
    "relatedThreads": [
      "thread_valkyrie_disagreement",
      "thread_dark_valkyrie_foreshadow",
      "thread_return_is_not_guaranteed",
      "thread_valhalla_system_failure_chain"
    ],
    "factionsPresent": [
      "faction_valkyries"
    ],
    "actorsPresent": [
      "actor_svinhild",
      "actor_ryndis_ironwing",
      "actor_eldri_softsky",
      "actor_thora_stormcall",
      "actor_kara_veilfeather",
      "actor_sylva_emberwing"
    ],
    "availableScenes": [
      "scene_valhalla_valkyrie_aerie_briefing",
      "scene_valhalla_mission_selection",
      "scene_valhalla_retrieval_failure_incident"
    ],
    "fireableMoments": [
      {
        "id": "moment_svinhild_report",
        "title": "Svinhild: Report",
        "type": "briefing",
        "trigger": "Use when the party enters the Aerie after a mission or seeks orders.",
        "compact": "Svinhild turns uncertainty into assignment.",
        "spotlight": {
          "title": "Svinhild: Report",
          "readAloud": [
            "Svinhild does not ask whether you are ready.",
            "She looks you over once, counting damage and delay.",
            "“Report.”"
          ],
          "gmPurpose": "Start mission pressure cleanly and give the party a tactical frame.",
          "followUp": "Let players summarize what mattered."
        },
        "tags": [
          "valhalla",
          "aerie",
          "svinhild",
          "briefing"
        ]
      },
      {
        "id": "moment_ryndis_dont_die_where_i_cant_reach_you",
        "title": "Ryndis: Don’t Die Where I Can’t Reach You",
        "type": "warning",
        "trigger": "Use when retrieval strain needs a blunt practical voice.",
        "compact": "Ryndis gives survival advice that implies failed retrieval zones.",
        "spotlight": {
          "title": "Ryndis: Don’t Die Where I Can’t Reach You",
          "readAloud": [
            "Ryndis checks the edge of a damaged wing harness without looking up.",
            "“Don’t die where I can’t reach you.”",
            "A beat. “That used to be a joke.”"
          ],
          "gmPurpose": "Make retrieval failure practical instead of abstract.",
          "followUp": "Point toward unstable zones without overexplaining."
        },
        "tags": [
          "valhalla",
          "aerie",
          "ryndis",
          "retrieval-failure",
          "warning"
        ]
      },
      {
        "id": "moment_thora_pushes_risk",
        "title": "Thora Pushes Risk",
        "type": "pressure",
        "trigger": "Use when the table needs momentum or reckless urgency.",
        "compact": "Thora wants to move before caution wins.",
        "spotlight": {
          "title": "Thora Pushes Risk",
          "readAloud": [
            "Thora is already half-turned toward the launch platforms.",
            "“We can debate after we arrive.”",
            "Stormlight crawls along her spear."
          ],
          "gmPurpose": "Push speed, risk, and Valkyrie disagreement.",
          "followUp": "Let Svinhild or Ryndis push back if needed."
        },
        "tags": [
          "valhalla",
          "aerie",
          "thora",
          "risk",
          "momentum"
        ]
      },
      {
        "id": "moment_kara_you_changed",
        "title": "Kara: You Changed",
        "type": "cryptic-truth",
        "trigger": "Use sparingly when the party’s return or identity should feel watched.",
        "compact": "Kara says the thing no one else wants to say plainly.",
        "spotlight": {
          "title": "Kara: You Changed",
          "readAloud": [
            "Kara stands at the edge of the platform, quiet enough to be missed.",
            "Her eyes do not move across the group. They stop on one of you.",
            "“You changed.”"
          ],
          "gmPurpose": "Seed identity/return instability through a cryptic actor.",
          "followUp": "Do not let Kara explain fully yet."
        },
        "tags": [
          "valhalla",
          "aerie",
          "kara",
          "identity",
          "foreshadow"
        ]
      },
      {
        "id": "moment_sylva_everyone_can_be_brought_back",
        "title": "Sylva: Everyone Can Be Brought Back",
        "type": "fragile-faith",
        "trigger": "Use before a retrieval failure to show what belief still looks like.",
        "compact": "Sylva states the noble lie with complete sincerity.",
        "spotlight": {
          "title": "Sylva: Everyone Can Be Brought Back",
          "readAloud": [
            "Sylva’s answer comes immediately, bright and certain.",
            "“Everyone can be brought back.”",
            "For a moment, she looks like she has never needed that to be false."
          ],
          "gmPurpose": "Show the hopeful face of the system before it breaks.",
          "followUp": "Use later failure to make this line hurt."
        },
        "tags": [
          "valhalla",
          "aerie",
          "sylva",
          "system-believer",
          "foreshadow"
        ]
      }
    ],
    "eventTable": "",
    "reference": "library/hub/07_valkyrie_aerie.md",
    "tags": [
      "active",
      "valhalla",
      "valkyrie",
      "aerie",
      "mission-hub",
      "retrieval",
      "dark-valkyrie"
    ],
    "gmNotes": "The Aerie is the middle link between root corruption and Quiet Rows failure."
  },
  {
    "id": "location_valhalla_training_grounds",
    "name": "Training Grounds",
    "type": "training yard / Einherjar readiness field",
    "region": "Valhalla",
    "locationRole": "child",
    "parentLocation": "location_valhalla_hub",
    "modeId": "valhalla",
    "campaignId": "valhalla",
    "arcId": "arc_valhalla_intermission",
    "status": "available",
    "currentState": "A disciplined combat field where drills, readiness checks, and strange function-drift symptoms can surface.",
    "presentation": {
      "establishingShot": "Rows of warriors drill beneath bright Valhalla sky, each movement sharp enough to look rehearsed by the world itself.",
      "vibe": "Martial, orderly, slightly too synchronized.",
      "sensory": [
        "Weapon impacts ring in measured rhythm.",
        "Boots strike packed earth in unison.",
        "Commands echo across open ground."
      ]
    },
    "function": "Hub location for training, readiness scenes, and early signs that Valhalla's war-machine functions are drifting.",
    "pressure": "The training looks normal until repetition, timing, or memory starts behaving too cleanly.",
    "connectedLocations": [
      "location_valhalla_mead_hall",
      "location_valhalla_valkyrie_aerie"
    ],
    "relatedThreads": [
      "thread_valhalla_system_failure_chain"
    ],
    "actorsPresent": [],
    "availableScenes": [],
    "fireableMoments": [
      {
        "id": "moment_training_drill_repeats_too_perfectly",
        "title": "The Drill Repeats Too Perfectly",
        "type": "function-drift",
        "trigger": "Use when the Training Grounds should show Valhalla becoming too systematized.",
        "compact": "A training sequence repeats with impossible precision.",
        "spotlight": {
          "title": "The Drill Repeats Too Perfectly",
          "readAloud": [
            "A line of warriors completes a drill in perfect rhythm.",
            "Then they do it again.",
            "Same breath. Same angle. Same shouted count."
          ],
          "gmPurpose": "Show readiness turning into automation.",
          "followUp": "Let players interrupt or observe the pattern."
        },
        "tags": [
          "valhalla",
          "training-grounds",
          "function-drift",
          "readiness"
        ]
      },
      {
        "id": "moment_training_warrior_predicts_a_blow",
        "title": "Warrior Predicts a Blow",
        "type": "omen",
        "trigger": "Use during sparring or informal challenge.",
        "compact": "An Einherjar reacts before the attack begins.",
        "spotlight": {
          "title": "Warrior Predicts a Blow",
          "readAloud": [
            "The warrior moves before the blow is thrown.",
            "Not quickly. Early.",
            "For a moment, everyone nearby keeps training as if nothing strange happened."
          ],
          "gmPurpose": "Hint at timing/continuity weirdness through martial practice.",
          "followUp": "Tie back to Heimdall or system prediction if players investigate."
        },
        "tags": [
          "valhalla",
          "training-grounds",
          "continuity",
          "omen"
        ]
      }
    ],
    "reference": "library/hub/08_training_grounds.md",
    "tags": [
      "hub",
      "valhalla",
      "training-grounds",
      "readiness"
    ]
  }
];
