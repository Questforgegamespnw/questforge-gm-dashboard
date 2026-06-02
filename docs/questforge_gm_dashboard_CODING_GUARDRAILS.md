# Questforge GM Dashboard — Coding Guardrails

## Purpose

This file defines the implementation rules for the Questforge GM Dashboard.

Use this as the daily coding reference. The MASTER Roadmap explains the full project vision; this file keeps the codebase uniform, transferable, and future-proof while building.

The dashboard is a **GM cockpit / narration engine**, not a VTT or rules automation system.

Core doctrine:

> People first. Place second. Arc third. Mechanics in reference.

---

# 1. Do Not Break the Generic Architecture

The app core must stay game-agnostic.

The dashboard should support Valhalla now, and later Mothership, Erasure Protocol, corporate horror, ship ops, fantasy crawl, and other Questforge modes.

## Required Internal Data Names

Use these generic internal names everywhere in app logic:

```text
actors
locations
factions
threads
trackers
scenes
tables
references
assets
```

## Avoid These as Internal File/Data Names

Do not use these as final internal names:

```text
npcs
places
zones
session_beats
omens
ragnarok
valkyries
einherjar
panic
certainty
```

Those terms are allowed only in:

- Mode labels
- Campaign data
- Tags
- Markdown lore
- Display text

Example:

```js
// Good internal key
actors

// Good Valhalla UI label
"Npcs / Legends"

// Avoid as app-wide internal key
npcs
```

---

# 2. Layer Rules

The architecture has strict layers.

```text
App Core
  → Mode Labels
    → Campaign Data
      → Global Campaign Layer
        → Arc Layer
          → Session Layer
            → Current Loadout
```

Plain-language version:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
The global layer holds reusable campaign material.
The arc layer holds the current adventure package.
The session layer holds tonight.
The current loadout says what is live.
```

## Layer Responsibilities

| Layer | Purpose |
|---|---|
| `js/core/` | Generic rendering, filtering, state, utilities, data loading |
| `js/modes/` | UI labels and mode-specific display priorities |
| `data/shared/` | Shared templates, schemas, tags, reference categories |
| `data/campaigns/<campaign>/global/` | Recurring campaign-wide dashboard data |
| `data/campaigns/<campaign>/arcs/<arc>/` | Arc-specific dashboard data |
| `data/campaigns/<campaign>/sessions/<session>/` | Tonight-specific prep |
| `data/campaigns/<campaign>/library/` | Longform markdown lore and reference |
| `data/campaigns/<campaign>/assets/` | Campaign-specific images/icons/maps/mood assets |

---

# 3. Import Rules

## App Entry

`js/app.js` should import from the selected campaign index.

Example:

```js
import { campaignData } from "../data/campaigns/valhalla/index.js";
```

## Campaign Index

The campaign `index.js` merges global, arc, and session data into one export.

Example path:

```text
data/campaigns/valhalla/index.js
```

## Core Import Rule

Files in `js/core/` must not import Valhalla-specific files.

Good:

```js
// js/core/renderers.js
export function renderActors(actors) {
  // generic rendering logic
}
```

Bad:

```js
// js/core/renderers.js
import { valhallaPlaces } from "../../data/campaigns/valhalla/global/locations.js";
```

## Mode Import Rule

Mode files may define labels and display priorities, but should not contain campaign lore.

Good:

```js
export const valhallaMode = {
  id: "valhalla",
  navLabels: {
    actors: "NPCs / Legends",
    locations: "Zones",
    scenes: "Session Beats"
  }
};
```

Bad:

```js
export const valhallaMode = {
  svenBackstory: "Long lore text..."
};
```

---

# 4. File Placement Rules

Use these placement rules when adding content.

## Campaign-Wide Recurring Material

Put in:

```text
data/campaigns/<campaign>/global/
```

Examples:

```text
Heimdall
Sven
The Mead-Hall
The Bifrost Platform
The Valkyrie Aerie
Ragnarok Meter
Valhalla return loop
```

## Arc-Specific Material

Put in:

```text
data/campaigns/<campaign>/arcs/<arc-name>/
```

Examples:

```text
Ashen Root cult NPCs
Ashen Root locations
Arc-specific clues
Arc-specific faction pressure
Arc-specific scenes
```

## Tonight-Only Material

Put in:

```text
data/campaigns/<campaign>/sessions/<session-name>/
```

Examples:

```text
Opening scene
Session stinger
Temporary reminders
Tonight’s likely NPCs
One-off notes
```

## Longform Lore

Put in:

```text
data/campaigns/<campaign>/library/
```

Examples:

```text
Full Mead-Hall dossier
NPC backstory
Worldbuilding notes
Full rule explanations
Full event table writeup
```

## Short Dashboard Data

Put in:

```text
global/
arcs/<arc-name>/
sessions/<session-name>/
```

Examples:

```text
actors.js
locations.js
scenes.js
threads.js
trackers.js
tables.js
references.js
```

---

# 5. Current Loadout Rule

Do not move files around to mark them current.

Use:

```text
data/campaigns/<campaign>/current_loadout.js
```

The current loadout controls what the dashboard spotlights as live.

Example:

```js
export const currentLoadout = {
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "valhalla-intermission",
  sessionId: "next-session",

  activeActors: [
    "actor_heimdall",
    "actor_sven"
  ],

  activeLocations: [
    "location_valhalla_bifrost_platform",
    "location_valhalla_mead_hall"
  ],

  activeScenes: [
    "scene_valhalla_bifrost_return"
  ],

  activeThreads: [
    "thread_returned_incomplete"
  ],

  activeTrackers: [
    "tracker_ragnarok_meter"
  ]
};
```

## Current Loadout Principle

Inactive content can remain in the campaign files.  
The dashboard should use `current_loadout.js` to decide what is active tonight.

---

# 6. Required Base Fields

Every dashboard item should have stable identity fields.

## Actors

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
relationships
gmNotes
```

## Locations

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
currentState
presentation
function
pressure
opportunities
dangers
connectedLocations
actorsPresent
factionsPresent
eventTable
reference
gmNotes
```

## Scenes

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

## Threads

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
gmNotes
```

## Trackers

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
gmNotes
```

---

# 7. Optional Field Rule

Renderers must tolerate missing optional fields.

Optional fields include:

```text
escalation
eventTable
quickLines
scriptedMoments
forwardPath
notice
effects
reference
visualAnchor
relationships
connectedLocations
actorsPresent
factionsPresent
gmNotes
```

Do not write rendering logic that crashes if an optional field is absent.

Good:

```js
const sensory = location.presentation?.sensory ?? [];
```

Bad:

```js
const sensory = location.presentation.sensory.map(...);
```

---

# 8. Lore vs Dashboard Rule

Markdown is for depth.  
JS arrays are for speed.

## Markdown Library Can Be Long

Use markdown for:

- Full lore
- Full NPC backstory
- Full location dossier
- Full event tables
- Worldbuilding notes
- Design notes
- Rules explanations

## Dashboard Arrays Must Stay Short

Use arrays for:

- Fast cards
- Search/filter
- Active session display
- At-table delivery cues

## Field Length Rule

If a dashboard field becomes a lore paragraph, move it into markdown and add a reference path.

Example:

```js
reference: "library/hub/03_mead_hall.md"
```

---

# 9. Mode Boundary Rule

Mode-specific language belongs in mode files or campaign data, not app core.

## Allowed in Valhalla Data / Mode Files

```text
Ragnarok
Omens
Valkyrie
Einherjar
Bifrost
Quiet Rows
Mead-Hall
```

## Not Allowed in Core JS

Core renderers, filters, and state files should not contain hardcoded Valhalla terms.

Good:

```js
renderTrackers(trackers, mode.navLabels.trackers)
```

Bad:

```js
renderRagnarokMeter(ragnarokMeter)
```

Unless `renderRagnarokMeter` lives in a Valhalla-only mode extension, which is not needed for Sprint 1.

---

# 10. ID Rules

Use stable lowercase snake-case IDs with type prefixes.

## Prefixes

```text
actor_
location_
faction_
thread_
tracker_
scene_
table_
reference_
arc_
session_
```

## Examples

```text
actor_sven
actor_heimdall
location_valhalla_mead_hall
location_valhalla_bifrost_platform
scene_valhalla_bifrost_return
thread_returned_incomplete
tracker_ragnarok_meter
table_mead_hall_events
reference_valhalla_return_loop
arc_valhalla_intermission
session_next
```

## ID Stability

Do not rename IDs casually once they are referenced.

If display names change, update `name`, not `id`.

---

# 11. Tag Rules

Use lowercase kebab-case tags.

Good:

```text
active
session-current
social
danger
hidden-truth
faction-pressure
valhalla
mead-hall
dark-valkyrie
```

Avoid:

```text
Dark Valkyrie
Faction Pressure
SessionCurrent
```

Tags should be useful for filtering, not prose.

---

# 12. Renderer Rules

Renderers should:

- Accept generic arrays.
- Use mode labels where appropriate.
- Check optional fields safely.
- Avoid Valhalla-specific assumptions.
- Display short fields first.
- Put deeper/larger fields lower in the card.
- Never require every campaign to use every field.

## Display Priority

### Actor Cards

1. Name
2. Role / group
3. Vibe
4. Current state
5. Want
6. Quick lines
7. Knows / secrets
8. GM notes

### Location Cards

1. Name
2. Type / region
3. Establishing shot
4. Vibe
5. Sensory details
6. Pressure
7. Opportunities
8. Dangers
9. Actors/factions present
10. Escalation, if present
11. GM notes

### Scene Cards

1. Title
2. Type / priority
3. Trigger
4. Summary
5. Player-facing
6. GM truth
7. Forward path
8. Scripted moments
9. Outcomes
10. Run note

---

# 13. Search Rules

Search should eventually include:

```text
id
name/title
role/type
tags
vibe
summary
currentState
pressure
gmNotes
quickLines
clues
outcomes
```

Search should not care whether the active mode calls actors “NPCs,” “Contacts,” or “Survivors.”

---

# 14. Sprint 1 Restrictions

Do not add these during Sprint 1:

- Database
- Backend
- Login
- Cloud sync
- Foundry integration
- Dice roller
- Rules automation
- Drag-and-drop editor
- Full markdown parser
- Dynamic campaign switching
- Dynamic arc switching
- Complex state management framework
- Character sheet system

Sprint 1 goal:

> Load Valhalla data, show active actors/locations/scenes/threads/trackers, and run a hub session faster than OneNote.

---

# 15. Valhalla Integration Rules

Valhalla is the first campaign, but the app should not become Valhalla-only.

## Valhalla Hub Markdown

Full lore goes here:

```text
data/campaigns/valhalla/library/hub/
```

## Valhalla Hub Dashboard Data

Recurring hub content goes here:

```text
data/campaigns/valhalla/global/
```

Recommended files:

```text
actors.js
locations.js
factions.js
threads.js
trackers.js
scenes.js
tables.js
references.js
```

## Valhalla Current Active Material

Controlled by:

```text
data/campaigns/valhalla/current_loadout.js
```

## Valhalla Mode Labels

Controlled by:

```text
js/modes/valhalla.mode.js
```

---

# 16. Content Placement Examples

## Example 1: Mead-Hall

Full lore:

```text
data/campaigns/valhalla/library/hub/03_mead_hall.md
```

Dashboard card:

```text
data/campaigns/valhalla/global/locations.js
```

Event table:

```text
data/campaigns/valhalla/global/tables.js
```

Active tonight:

```text
data/campaigns/valhalla/current_loadout.js
```

## Example 2: Ashen Root Villager

If only used in Ashen Root:

```text
data/campaigns/valhalla/arcs/ashen-root/actors.js
```

If becoming recurring campaign NPC:

```text
data/campaigns/valhalla/global/actors.js
```

## Example 3: Tonight’s Opening Scene

```text
data/campaigns/valhalla/sessions/next-session/scenes.js
```

If it becomes reusable later, promote it to:

```text
data/campaigns/valhalla/arcs/<arc-name>/scenes.js
```

or:

```text
data/campaigns/valhalla/global/scenes.js
```

---

# 17. Refactor Rule

Prefer small, controlled refactors.

Do not rename architecture during feature work unless explicitly planned.

If a file or data type feels wrong, update this guardrail file or the MASTER Roadmap first, then refactor.

---

# 18. Coding Support Checklist

Before adding or editing code, check:

- [ ] Is this generic app logic? Put it in `js/core/`.
- [ ] Is this just a label/display preference? Put it in `js/modes/`.
- [ ] Is this campaign-wide data? Put it in `global/`.
- [ ] Is this arc-specific data? Put it in `arcs/<arc>/`.
- [ ] Is this tonight-only prep? Put it in `sessions/<session>/`.
- [ ] Is this long lore? Put it in `library/`.
- [ ] Is this active tonight? Add the ID to `current_loadout.js`.
- [ ] Does this use generic internal names?
- [ ] Does this renderer tolerate missing optional fields?
- [ ] Did we avoid hardcoding Valhalla into core app logic?

---

# 19. Final Rule

When in doubt, preserve this separation:

```text
Core code is generic.
Mode files change labels.
Campaign files hold content.
Markdown holds lore.
Arrays hold at-table data.
Current loadout controls what is live.
```
