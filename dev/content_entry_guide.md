# Questforge GM Dashboard — Content Entry Guide

This guide defines where table-facing content belongs in the Questforge GM Cockpit Dashboard. The dashboard is a **GM cockpit / narration engine**, not a wiki, VTT, or rules automation layer.

## Core Doctrine

> **People first. Places second. Arc pressure third. Mechanics in reference.**

Every entry should help the GM answer live room questions quickly:

- Where are we?
- Who is nearby?
- What can happen here?
- What pressure follows the players?
- What can I say or fire right now?

Long lore belongs in markdown. Short, structured, searchable table cues belong in JavaScript data arrays.

---

## 1. Canonical Dashboard Types

Use these internal names in data and app logic:

```text
actors
ambientCast
locations
factions
threads
trackers
scenes
fireableMoments
tables
references
assets
```

Avoid mode-specific internal names such as `npcs`, `zones`, `omens`, `ragnarok`, `panic`, or `certainty`. Those words are fine in display labels, tags, and campaign data, but not as core app-wide data names.

---

## Each cluster of scenes should get the following cockpit wiring

Scenes:
what beat is playable right now?

Locations:
where does this beat happen, and what is adjacent?

Actors:
who should appear in the rail?

Ambient Cast:
whose voices fill the room?

Fireable Moments:
what can I drop instantly?

Tables:
what quick result tools matter here?

Trackers:
what state is changing?

References:
what GM truth or rule should be one click away?

Which then translate into these: 

scenes.js
fireable_moments.js
ambient_cast/*
locations.js
actors/*
threads.js
tables.js
references.js
trackers.js if needed

---

## 2. Quick Type Map

### `actors`

Actors are named people or major entities the GM may need to run directly. Use them for motives, current state, knowledge, quick lines, relationships, and persistent presence at the table.

### `ambientCast`

Ambient cast entries are lightweight location-linked people, crowds, voices, and casual interactions. Use them to make a room feel populated without promoting every face into a full actor card.

### `locations`

Locations are the camera and context layer: where the players are, what hits them first, who is present, what can happen here, and what persistent pressures touch this place. Locations should point to playable scenes, nearby actors, factions, threads, and useful hazards without becoming full scene writeups.

### `factions`

Factions are pressure voices and agenda engines. Use them to define what a group believes, wants, hides, resists, and how it behaves when the party interacts with the world.

### `threads`

Threads are unresolved pressures that follow the party across multiple scenes. They should not hold one-scene outcomes, branch logic, dialogue banks, or reminders that only matter in one location.

### `trackers`

Trackers are changing state at the table. Use them for clocks, meters, stability states, progress levels, insight, threat escalation, and other values that move during play.

### `scenes`

Scenes are concrete playable beats: arrivals, choices, investigations, fights, consequences, transitions, briefings, and fallout. A scene should tell the GM what is happening, what the players can learn or do, and what changes afterward.

### `fireableMoments`

Fireable moments are small location-linked beats that can be clicked and run immediately. Use them for reusable interruptions, dialogue bursts, pressure injections, short reveals, or emotional buttons that should not become full scenes.

### `tables`

Tables are roll-or-pick tools. Use them for quick reactions, hazards, event prompts, crisis types, encounter texture, or dialogue bursts when random or fast selection is actually useful.

### `references`

References are reusable GM support cards and library entry points. Use them for arc-wide procedures, rules reminders, doctrine, summaries, and compact links to markdown—not for scene branches, NPC lines, tracker effects, or local clues.

### `assets`

Assets are media and presentation support. Use them for images, maps, handouts, icons, visual references, and other non-data material the cockpit may surface or link.

---

## 3. JavaScript vs Markdown

### Use JavaScript arrays for fast table use

Put short, structured, searchable content in JavaScript arrays:

```text
data/campaigns/<campaign>/global/
data/campaigns/<campaign>/arcs/<arc>/
data/campaigns/<campaign>/sessions/<session>/
```

Use arrays for cards, filters, quick lines, scene beats, fireable moments, event tables, pressure summaries, current-state notes, and live links between content.

### Use markdown for depth

Put longform reference material in:

```text
data/campaigns/<campaign>/library/
```

Use markdown for full lore, full NPC backstory, deep answer banks, full location dossiers, rules explanations, design notes, and GM-only prose.

If a dashboard field starts turning into paragraphs, move it into markdown and add a `reference` path.

---

## 4. Base Fields

Every dashboard item should have a stable ID, mode/campaign metadata, status, and tags.

Common baseline:

```js
id
modeId
campaignId
status
tags
```

Use `arcId` for arc-specific material and `session` or `sessionId` when an item is tied to a specific session structure.

---

## 5. Type Patterns

### Actors

Required:

```js
id
name
role
modeId
campaignId
status
tags
```

Recommended:

```js
arcId
currentLocation
currentState
sticky
presentation
motivation
knowledge
quickLines
answerMoments
relationships
relatedThreads
reference
gmNotes
```
### Answer Moments

`answerMoments` are actor-linked response beats for questions the players are likely to ask directly.

Use them when a named actor can answer, deflect, reveal, mislead, or emotionally reframe an important question.

They are especially useful for:
- major NPC knowledge
- faction perspective
- moral argument
- technical explanation
- hidden-truth reveals
- player-facing doctrine
- repeated table questions

Recommended shape:

```js
answerMoments: [
  {
    id: "answer_actor_topic",
    question: "What the players might ask.",
    answer: "The direct GM-facing answer.",
    tableLine: "A line the actor can say or the GM can paraphrase.",
    reveals: [],
    gatedBy: {
      skills: [],
      minTier: "basic / trained / expert / high"
    },
    relatedThreads: [],
    tags: []
  }
]
```
Answer moments should not become full dialogue trees. Keep them short, searchable, and table-facing.

Actors carry doctrine. Ambient Cast carries lived texture.


Use actor entries for people the GM may need to portray directly or track across scenes.

### Ambient Cast

Required:

```js
id
name
modeId
campaignId
status
locationIds
tags
```

Recommended:

```js
arcId
type
role
currentState
hookLine
quickLines
rumors
relatedActors
relatedThreads
gmNotes
```


### Rumor Answers

`rumorAnswers` are light answer beats for Ambient Cast.

Use them when background groups, witnesses, workers, refugees, bystanders, or local crowds can provide partial lived truth without becoming full actors.

Recommended shape:

```js
rumorAnswers: [
  {
    prompt: "What the party asks or listens for.",
    response: "What the ambient cast says.",
    reveals: [],
    relatedThreads: [],
    tags: []
  }
]
```

Rumor answers should feel partial, local, emotional, biased, or overheard. They should not carry the whole exposition burden.

Use ambient cast for crowd texture, passerby voices, tavern chatter, refugees, guards, workers, and minor interaction seeds.

### Locations

Required:

```js
id
name
type
modeId
campaignId
status
tags
```

Recommended:

```js
arcId
region
locationRole
parentLocation
connectedLocations
adjacentLocations
presentation
function
pressure
opportunities
dangers
relatedThreads
factionsPresent
actorsPresent
keyActors
availableScenes
eventTable
reference
gmNotes
```

Use locations as the player-facing camera layer. Keep `availableScenes` limited to scenes that can actually fire from that place.

Recommended presentation shape:

```js
presentation: {
  establishingShot: "The wide camera: the strong visual image of the place.",
  approachBeat: "The second camera beat: what immediately interacts with the players.",
  vibe: "Immediate emotional tone.",
  sensory: [
    "Sound, smell, texture, temperature, light, motion, etc."
  ]
}
```

### Factions

Required:

```js
id
name
type
modeId
campaignId
status
tags
```

Recommended:

```js
arcId
summary
currentState
pressure
motto
belief
truth
goals
resources
tensions
genericLines
inPlayUse
relatedActors
relatedLocations
relatedThreads
reference
gmNotes
```

Use factions to create pressure through agenda and voice, not just lore. A faction card should help the GM know what that group pushes for when the room gets tense.

### Threads

Required:

```js
id
title
type
modeId
campaignId
status
tags
```

Recommended:

```js
arcId
summary
currentState
nextPressure
relatedActors
relatedLocations
relatedFactions
relatedScenes
signals
consequences
availability
gmNotes
```

Threads should answer: **What unresolved pressure follows the players across multiple scenes?** Do not use threads for single-scene branch logic, outcome matrices, NPC dialogue, or location-only reminders.

### Trackers

Required:

```js
id
name
type
modeId
campaignId
status
value
min
max
tags
```

Recommended:

```js
arcId
label
summary
effects
tiers
gmNotes
```

Use trackers when a value changes during play and the dashboard needs to surface what that change means.

### Scenes

Required:

```js
id
title
type
modeId
campaignId
status
priority
tags
```

Recommended:

```js
arcId
session
availability
trigger
summary
playerFacing
gmTruth
involvedActors
involvedLocations
involvedFactions
clues
outcomes
forwardPath
pressure
runNote
gmNotes
relatedThreads
relatedTrackers
visibilityGate
```

Scenes should be playable from the cockpit. Put table-facing delivery first, then support it with clues, outcomes, branches, scripted moments, and a short run note.

Recommended forward path shape:

```js
forwardPath: {
  upNext: ["scene_next_id"],
  branches: [
    {
      id: "branch_id",
      label: "Visible branch label",
      condition: "When this branch applies.",
      effect: "What changes.",
      softPoint: "How to run it at the table."
    }
  ],
  scriptedMoments: [
    {
      timing: "When this fires.",
      speaker: "Speaker name or GM.",
      line: "Short table-facing line.",
      purpose: "Why this beat exists."
    }
  ]
}
```
#### Outcome Shifts

`outcomeShift` defines what can meaningfully change because of player interaction.

Use this when a scene has real consequences beyond “players learn more.”

Recommended shape:

```js
outcomeShift: {
  question: "What can meaningfully change here?",
  levers: [],
  consequences: []
}
```
Good levers are things players can actually do:

protect someone
persuade someone
preserve evidence
stabilize a system
damage a structure
delay a faction
earn trust
spend time
choose one value over another

Good consequences are later-facing:

a route opens or closes
a faction changes behavior
a tracker shifts
an NPC trusts or resists
a future scene becomes easier, harder, or morally different
---

### Fireable Moments

Required:

```js
id
title
type
modeId
campaignId
status
locationIds
trigger
compact
spotlight
tags
```

Recommended:

```js
arcId
availability
relatedActors
relatedThreads
reference
gmNotes
visibilityGate
```

Use fireable moments for small beats under **Can Fire Here**. They should be short enough to fire, resolve, and return control to the players.

Recommended spotlight shape:

```js
spotlight: {
  title: "Moment title",
  readAloud: [
    {
      type: "speech",
      speaker: "Speaker",
      text: "Short line."
    }
  ],
  gmPurpose: "Why to fire this moment.",
  followUp: "How to hand control back to the table."
}
```

Supported read-aloud line types:

```text
narration
speech
gm
aside
```

### Tables

Required:

```js
id
name
die
category
modeId
campaignId
status
entries
tags
```

Recommended:

```js
arcId
summary
relatedLocation
relatedLocations
availability
reference
gmNotes
visibilityGate
```

Use tables only when rolling or quick picking improves table flow. If an entry is really an outcome matrix, scene branch, tracker effect, or dialogue bank, it belongs somewhere else.

### References

Required:

```js
id
label
modeId
campaignId
status
category
summary
tags
```

Recommended:

```js
arcId
details
reference
relatedActors
relatedLocations
relatedThreads
gmNotes
```

Use references for reusable procedures, rules reminders, doctrine, compact summaries, and links to deeper markdown. Do not use references as a junk drawer for scene-specific notes.

---

## 6. ID Rules

Use stable lowercase snake-case IDs with type prefixes.

```text
actor_
ambient_
location_
faction_
thread_
tracker_
scene_
moment_
table_
reference_
arc_
session_
asset_
```

Examples:

```text
actor_sven
ambient_mead_hall_weary_raider
location_valhalla_mead_hall
thread_returned_incomplete
tracker_ragnarok_meter
scene_valhalla_bifrost_return
moment_sven_sit_drink
table_mead_hall_events
reference_valhalla_return_loop
```

Do not rename IDs casually once another file references them. Change `name`, `title`, or `label` when display wording changes.

---

## 7. Tag Rules

Use lowercase kebab-case tags.

Good:

```text
active
session-current
social
hidden-truth
faction-pressure
mead-hall
runtime-pin-candidate
```

Avoid:

```text
SessionCurrent
Faction Pressure
Mead Hall
```

Tags should help with search and filtering. They are not prose.

---

## 8. Availability and Visibility

Use `status` for whether content exists in the active data set:

```js
status: "available"
```

Use `visibilityGate` or `visibilityGates` for cockpit phase filtering, such as arrival, investigation, choice, or escape.

Use `availability` when an item depends on tracker state:

```js
availability: {
  trackerId: "tracker_ragnarok_meter",
  minValue: 4,
  maxValue: 10
}
```

Omit `availability` if the item should be baseline-visible.

### Skill Gates

`skillGates` are GM-facing reveal banks. They do not roll dice, resolve checks, or automate rules.

Use them to prepare what different forms of expertise can notice, interpret, or unlock.

Recommended shape:

```js
skillGates: [
  {
    id: "gate_unique_id",
    skills: [],
    tier: "basic / trained / expert / high",
    visible: "What the characters can notice.",
    reveal: "What the check or expertise clarifies.",
    consequence: "What this lets the players do or understand.",
    tags: []
  }
]
```

Skill gates may appear on scenes, locations, actors, fireable moments, or references.

They should answer:

What is visible to everyone?
What does expertise clarify?
What false conclusion does this prevent?
What new option does this unlock?

---

## 9. Runtime Pins

Runtime pins are a temporary session overlay. Use them when the GM finds something through search and wants it kept close without editing the current loadout.

Rules:

- Pins are runtime-only.
- Pins supplement active loadout and location-aware filtering.
- Pins are for table convenience, not content architecture.

---

## 10. Entry Checklist

Before adding or importing content, check:

- [ ] Is this short and table-facing? Put it in a JS data array.
- [ ] Is this long lore or a deep answer bank? Put it in markdown.
- [ ] Does the item use a stable prefixed ID?
- [ ] Are tags lowercase kebab-case?
- [ ] Are linked IDs valid?
- [ ] Does a scene or moment include table-facing delivery text?
- [ ] Does a location include a useful wide shot and immediate approach beat?
- [ ] Does a thread persist across multiple scenes?
- [ ] Does a table actually need rolling or quick picking?
- [ ] Does a reference support reusable GM procedure or doctrine?
- [ ] Does gated content use a real tracker ID or visibility gate?
- [ ] Is this only temporarily needed tonight? Consider runtime pinning instead.

---

## 11. Verification

After significant content changes, run the smoke test through a local server:

```text
http://localhost:8000/smoke-test_phase4.html
```

The smoke test checks shape, required fields, IDs, relationships, tags, markdown references, availability gates, fireable moments, runtime pin support, and dashboard shell IDs.
