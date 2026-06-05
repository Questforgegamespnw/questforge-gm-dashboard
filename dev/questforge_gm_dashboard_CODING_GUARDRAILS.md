## Core Doctrine

People first. Places second. Arc pressure third. Mechanics in reference.

The cockpit should help the GM answer four live room questions quickly:

- Where are we?
- Who is nearby?
- What do they say?
- How do I make this room feel alive?

---

# Questforge GM Dashboard — Coding Guardrails

## Purpose

This file defines the implementation rules for the Questforge GM Dashboard.

Use this as the daily coding reference. The MASTER Roadmap explains the full project vision; this file keeps the codebase uniform, transferable, and future-proof while building.

The dashboard is a **GM cockpit / narration engine**, not a VTT or rules automation system.

Core doctrine:

> People first. Place second. Arc pressure third. Mechanics in reference.

---

# 1. Do Not Break the Generic Architecture

The app core must stay game-agnostic.

The dashboard should support Valhalla now, and later Mothership, Erasure Protocol, corporate horror, ship ops, fantasy crawl, and other Questforge modes.

## Required Internal Data Names

Use these generic internal names everywhere in app logic:

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

- mode labels
- campaign data
- tags
- markdown lore
- display text

Example:

```js
// Good internal key
actors

// Good Valhalla UI label
"NPCs / Legends"

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
          → Optional Session Layer
            → Current Loadout
            → Runtime Pins / UI State
```

Plain-language version:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
The global layer holds reusable campaign material.
The arc layer holds the current adventure package.
The session layer can hold one-off prep.
The current loadout says what starts live.
Runtime pins temporarily promote found content during play.
```

## Layer Responsibilities

| Layer | Purpose |
|---|---|
| `js/core/` | Generic rendering, filtering, state, utilities, data loading |
| `js/modes/` | UI labels and mode-specific display priorities |
| `data/shared/` | Shared templates, schemas, tags, reference categories |
| `data/campaigns/<campaign>/global/` | Recurring campaign-wide dashboard data |
| `data/campaigns/<campaign>/arcs/<arc>/` | Arc-specific dashboard data |
| `data/campaigns/<campaign>/sessions/<session>/` | One-off session prep when useful |
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
export function renderCards(items) {
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

The session layer is optional. Do not force content into session files if current loadout plus location-linked content already handles the live flow.

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
Deep answer banks
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
factions.js
threads.js
trackers.js
scenes.js
fireable_moments.js
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

The current loadout controls what the dashboard spotlights as live when the page opens.

Example:

```js
export const currentLoadout = {
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "valhalla-intermission",

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

Inactive content can remain in the campaign files. The dashboard should use `current_loadout.js` to decide what starts live.

---

# 6. Runtime Pin Rule

Runtime pins temporarily promote content during play.

They are for cases where the GM finds something through search and wants to keep it in reach without editing campaign files.

Rules:

- Runtime only.
- No persistence in the current bridge implementation.
- No `current_loadout.js` writes.
- No browser storage.
- Pins supplement current loadout and location-aware filtering.
- Pins should remain generic and work across content types.

Current state shape:

```js
state.sessionPins = {
  pinnedItemIds: []
};
```

Possible future persisted shape belongs to the standalone app/session-state epic, not the static bridge.

---

# 7. Required Base Fields

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
answerMoments
relationships
relatedThreads
reference
gmNotes
```

## Ambient Cast

Required:

```js
id
title
type
modeId
campaignId
status
locationIds
tags
```
Recommended:

```js
arcId
summary
names
voices
hookLines
interactionSeeds
relatedActors
relatedThreads
relatedLocations
reference
gmNotes
```
Ambient Cast entries represent location-linked room life: background groups, crowd texture, name banks, voice lines, interaction hooks, and minor social presence.

They are not replacements for named actors.

Use actors for primary NPCs, recurring figures, major threats, contacts, patrons, gods, rivals, and anyone the GM may need to portray directly across scenes.

Use ambientCast for the people who make a location feel inhabited without requiring full actor cards.

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

## Factions

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
tiers
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

## Fireable Moments

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

## Tables

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

## References

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

# 8. Optional Field Rule

Renderers must tolerate missing optional fields.

Optional fields include:

```text
availability
escalation
eventTable
quickLines
answerMoments
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

# 9. Lore vs Dashboard Rule

Markdown is for depth. JavaScript arrays are for speed.

## Markdown Library Can Be Long

Use markdown for:

- full lore
- full NPC backstory
- full location dossier
- full event tables
- worldbuilding notes
- design notes
- rules explanations
- dialogue banks

## Dashboard Arrays Must Stay Short

Use arrays for:

- fast cards
- search/filter
- active session display
- at-table delivery cues
- short prompts
- compact pressure summaries

## Field Length Rule

If a dashboard field becomes a lore paragraph, move it into markdown and add a reference path.

Example:

```js
reference: "library/hub/03_mead_hall.md"
```

---

# 10. Mode Boundary Rule

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
renderTrackers(trackers, mode.navLabels.trackers);
```

Bad:

```js
renderRagnarokMeter(ragnarokMeter);
```

Unless a renderer is explicitly a Valhalla-only mode extension, which is not part of the current core app.

---

# 11. ID Rules

Use stable lowercase snake-case IDs with type prefixes.

## Prefixes

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

## Examples

```text
actor_sven
actor_heimdall
ambient_valhalla_mead_hall_einherjar
location_valhalla_mead_hall
location_valhalla_bifrost_platform
scene_valhalla_bifrost_return
moment_sven_sit_drink
thread_returned_incomplete
tracker_ragnarok_meter
table_mead_hall_events
reference_valhalla_return_loop
arc_valhalla_intermission
session_next
```

## ID Stability

Do not rename IDs casually once they are referenced.

If display names change, update `name`, `title`, or `label`, not `id`.

---

# 12. Tag Rules

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

# 13. Renderer Rules

Renderers should:

- accept generic arrays
- use mode labels where appropriate
- check optional fields safely
- avoid Valhalla-specific assumptions
- display table-facing fields first
- put deeper/larger fields lower in the detail stack
- never require every campaign to use every optional field

## Public Renderer Surface

`app.js` should import from:

```js
./core/renderers.js
```

Even if renderer internals are split, keep `renderers.js` as the public export surface.

Current renderer split:

```text
renderers.js              // public exports and remaining detail/panel renderers
renderers.helpers.js      // shared renderer helpers
renderers.cards.js        // cards and rail lists
```

Future splits may include:

```text
renderers.detail.js
renderers.delivery.js
renderers.panels.js
```

Do not split further unless a real maintainability need appears.

## Display Priority

### Actor Cards / Detail

1. Name
2. Role / group
3. Current state
4. Vibe
5. Physicality
6. Voice
7. Quick lines
8. Wants / fears
9. Knows / secrets
10. GM notes

### Location Cards / Detail

1. Name
2. Type / region
3. Current state
4. Vibe
5. Establishing shot
6. Approach beat
7. Sensory details
8. Function
9. Pressure
10. Opportunities
11. Dangers
12. Actors/factions present
13. Escalation, if present
14. GM notes

### Scene Cards / Detail

1. Title
2. Type / priority
3. At Table block
4. Trigger
5. Summary
6. Player-facing text
7. GM truth
8. Forward path
9. Scripted moments
10. Outcomes
11. Run note

### Fireable Moments

1. Title
2. Type
3. Read aloud text
4. Compact reminder
5. Trigger
6. GM purpose
7. Follow-up
8. Tags

---

# 14. Search Rules

Search should include:

```text
id
name/title/label
role/type/category
status
tags
vibe
summary
currentState
pressure
gmNotes
quickLines
clues
outcomes
reference
```

Search should not care whether the active mode calls actors “NPCs,” “Contacts,” or “Survivors.”

---

# 15. Current Restrictions

Do not add these without an explicit scoped ticket:

- database
- backend
- login
- cloud sync
- Foundry integration
- dice roller
- rules automation
- drag-and-drop editor
- full markdown parser
- dynamic campaign switching
- dynamic arc switching
- complex state management framework
- character sheet system

The current bridge is static and local-first.

---

# 16. Valhalla Integration Rules

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
fireable_moments.js
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

# 17. Content Placement Examples

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

Temporary during play:

```text
runtime Pin to Cockpit
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

## Example 3: Location Moment

Use:

```text
data/campaigns/valhalla/global/fireable_moments.js
```

or:

```text
data/campaigns/valhalla/arcs/<arc-name>/fireable_moments.js
```

Link to locations with:

```js
locationIds: ["location_valhalla_mead_hall"]
```

---

# 18. Refactor Rule

Prefer small, controlled refactors.

Do not rename architecture during feature work unless explicitly planned.

If a file or data type feels wrong, update this guardrail file or the MASTER Roadmap first, then refactor.

Good refactor pattern:

```text
one responsibility
one small module split
same public import surface
syntax check
smoke test
```

Bad refactor pattern:

```text
rename many concepts
change data shapes
change app imports
add new behavior
skip smoke test
```

---

# 19. Coding Support Checklist

Before adding or editing code, check:

- [ ] Is this generic app logic? Put it in `js/core/`.
- [ ] Is this just a label/display preference? Put it in `js/modes/`.
- [ ] Is this campaign-wide data? Put it in `global/`.
- [ ] Is this arc-specific data? Put it in `arcs/<arc>/`.
- [ ] Is this location-linked room life rather than a named recurring NPC? Use `ambientCast`.
- [ ] Is this tonight-only prep? Put it in `sessions/<session>/`.
- [ ] Is this long lore? Put it in `library/`.
- [ ] Is this active tonight at start? Add the ID to `current_loadout.js`.
- [ ] Is this temporarily useful during play? Use runtime pinning.
- [ ] Does this use generic internal names?
- [ ] Does this renderer tolerate missing optional fields?
- [ ] Did we avoid hardcoding Valhalla into core app logic?
- [ ] Did we avoid persistence unless explicitly scoped?
- [ ] Did we run syntax checks and smoke test when needed?

---

# 20. Final Rule

When in doubt, preserve this separation:

```text
Core code is generic.
Mode files change labels.
Campaign files hold content.
Markdown holds lore.
Arrays hold at-table data.
Current loadout controls what starts live.
Runtime pins temporarily promote found content during play.
Persistence waits for the standalone app/session-state epic.
```
