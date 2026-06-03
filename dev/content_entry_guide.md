# Questforge GM Dashboard — Content Entry Guide

## Design Doctrine Addendum

The cockpit's table-facing doctrine is:

> People first. Places second. Arc pressure third. Mechanics in reference.

Content should help the GM answer four live room questions quickly:

- Where are we?
- Who is nearby?
- What do they say?
- How do I make this room feel alive?

`ambientCast` is the planned lightweight content type for location-linked crowd texture, name banks, hook lines, and casual interaction seeds.


This guide is the working reference for adding table-facing content to the Questforge GM Dashboard.

The dashboard is a **GM cockpit / narration engine**. Enter content so it can be found, filtered, pinned, and used quickly during play. Long lore belongs in markdown. Short, actionable table cues belong in JavaScript data arrays.

Core doctrine:

> People first. Place second. Arc pressure third. Mechanics in reference.

---

## 1. Canonical Dashboard Types

Use these internal names in data and app logic:

```text
actors
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

## 2. Where Content Belongs

### Use dashboard arrays for fast table use

Put short, structured, searchable content in JavaScript arrays:

```text
data/campaigns/<campaign>/global/
data/campaigns/<campaign>/arcs/<arc>/
data/campaigns/<campaign>/sessions/<session>/
```

Use arrays for:

- cards
- filters
- quick lines
- scene beats
- fireable moments
- event tables
- pressure summaries
- current-state notes

### Use markdown for depth

Put longform reference material in:

```text
data/campaigns/<campaign>/library/
```

Use markdown for:

- full lore
- full NPC backstory
- deep answer banks
- full location dossiers
- rules explanations
- design notes
- GM-only prose

If a dashboard field starts turning into paragraphs, move it into markdown and add a `reference` path.

---

## 3. Required Base Fields

Every item should have a stable `id`, mode/campaign metadata, status, and tags.

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
currentState
presentation
function
pressure
opportunities
dangers
connectedLocations
relatedThreads
factionsPresent
actorsPresent
keyActors
availableScenes
eventTable
reference
gmNotes
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
publicFace
privateTruth
goals
resources
tensions
relatedActors
relatedLocations
relatedThreads
gmNotes
```

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
pressure
relatedActors
relatedLocations
relatedFactions
relatedScenes
signals
consequences
availability
gmNotes
```

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
```

### Fireable Moments

Fireable moments are small location-linked beats that can be clicked and run immediately.

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
```

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

---

## 4. ID Rules

Use stable lowercase snake-case IDs with type prefixes.

```text
actor_
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
```

Examples:

```text
actor_sven
location_valhalla_mead_hall
thread_returned_incomplete
tracker_ragnarok_meter
scene_valhalla_bifrost_return
moment_sven_sit_drink
table_mead_hall_events
reference_valhalla_return_loop
```

Do not rename IDs casually once another file references them. Change `name`, `title`, or `label` when the display wording changes.

---

## 5. Tag Rules

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

## 6. Location Content Pattern

Locations are the “where are we?” layer. They should help the GM describe the place and surface what can happen there.

Recommended presentation shape:

```js
presentation: {
  establishingShot: "The first strong visual image.",
  approachBeat: "A second beat as the players enter, approach, or notice who is present.",
  vibe: "Immediate emotional tone.",
  sensory: [
    "Sound, smell, texture, temperature, light, motion, etc."
  ]
}
```

Use location links to drive the live table flow:

```js
actorsPresent: ["actor_sven"],
relatedThreads: ["thread_returned_incomplete"],
availableScenes: ["scene_valhalla_bifrost_return"],
eventTable: "table_mead_hall_events"
```

For parent/child navigation:

```js
locationRole: "parent",
connectedLocations: ["location_valhalla_mead_hall"]
```

```js
locationRole: "child",
parentLocation: "location_valhalla_hub"
```

---

## 7. Scene Content Pattern

Scenes are structured beats, choices, briefings, consequences, and events.

Put table-facing delivery first:

```js
playerFacing: "What the GM can say or paraphrase at the table.",
forwardPath: {
  scriptedMoments: [
    {
      timing: "When the players hesitate.",
      speaker: "actor_sven",
      line: "Sit. Drink. You are still here. That matters.",
      purpose: "Give the party permission to decompress."
    }
  ]
}
```

Use deeper fields for prep:

```js
gmTruth: "What is really happening.",
clues: [],
outcomes: [],
runNote: "How to run this cleanly."
```

---

## 8. Fireable Moment Pattern

Use `fireableMoments` for short beats that should appear under **Can Fire Here**.

```js
{
  id: "moment_sven_sit_drink",
  title: "Sven: Sit. Drink.",
  type: "decompression",
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "arc_valhalla_intermission",
  status: "available",
  locationIds: ["location_valhalla_mead_hall"],
  trigger: "When the party returns shaken or scattered.",
  compact: "Sven makes space and grounds the room.",
  spotlight: {
    title: "Sven: Sit. Drink.",
    readAloud: [
      {
        type: "narration",
        text: "Sven is already clearing space before you reach the table."
      },
      {
        type: "speech",
        speaker: "Sven",
        text: "Sit. Drink. You are still here. That matters."
      }
    ],
    gmPurpose: "Give the party permission to decompress.",
    followUp: "Ask who accepts the drink and who does not."
  },
  tags: ["decompression", "mead-hall"]
}
```

Supported read-aloud line types currently include:

```text
narration
speech
gm
aside
```

The renderer also tolerates legacy string lines, but structured objects are preferred.

---

## 9. Availability Gates

Scenes, threads, tables, and fireable moments can be gated by tracker state.

```js
availability: {
  trackerId: "tracker_ragnarok_meter",
  minValue: 4,
  maxValue: 10
}
```

Omit `availability` if the item should be baseline-visible.

Use gates for escalation. Do not use them for permanent archive status; use `status` for that.

---

## 10. Runtime Pins

Runtime pins are a temporary session overlay.

Use them when the GM finds something through search and wants it kept close without editing `current_loadout.js`.

Rules:

- Pins are runtime-only.
- Pins do not write to `current_loadout.js`.
- Pins do not use browser storage in the current bridge implementation.
- Pins supplement active loadout and location-aware filtering.
- Pinned content can appear in the cockpit and pinned panel.

This is the current bridge model before a future standalone app/session-state architecture.

---

## 11. Entry Checklist

Before adding new content, check:

- [ ] Is this short and table-facing? Put it in a JS data array.
- [ ] Is this long lore or deep answer-bank content? Put it in markdown.
- [ ] Does the item use a stable prefixed ID?
- [ ] Are tags lowercase kebab-case?
- [ ] Are linked IDs valid?
- [ ] Does a scene or moment include table-facing delivery text?
- [ ] Does a location include useful presentation text?
- [ ] Does gated content use a real tracker ID?
- [ ] Does current live material belong in `current_loadout.js`?
- [ ] Is this only temporarily needed tonight? Consider runtime pinning instead.

---

## 12. Verification

After significant content changes, run the smoke test through a local server:

```text
http://localhost:8000/smoke-test_phase4.html
```

The smoke test checks shape, required fields, IDs, relationships, tags, markdown references, availability gates, fireable moments, runtime pin support, and dashboard shell IDs.
