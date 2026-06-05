# QuestForge GM Dashboard

A lightweight, browser-based GM cockpit for running tabletop sessions with fast access to the people, places, scenes, pressure, tables, ambient room texture, and references that matter at the table.

QuestForge GM Dashboard is **not** a VTT, dice roller, rules resolver, database-first campaign manager, character sheet replacement, or full lore archive. It is a local-first narration and session-flow tool designed around a simple operating priority:

> People first. Places second. Arc pressure third. Mechanics in reference.

At the table, the cockpit should help the GM answer four live questions quickly:

```text
Where are we?
Who is nearby?
What do they say?
How do I make this room feel alive?
```
## Design Doctrine: The Moving Camera

Questforge GM Dashboard is not meant to behave like a traditional campaign wiki, static module, or top-down prep binder.

Most GM prep asks the GM to move through information like a book:

- Read the scene.
- Find the NPC.
- Check the map.
- Look up the rule.
- Remember the consequence.
- Improvise the connective tissue.

That works, but it puts a lot of pressure on the GM to keep the whole arc structure in their head while also running the table.

This dashboard flips that model.

Instead of asking “where am I in the document?”, the cockpit asks:

- Where are the players right now?
- Who is near them?
- What can happen here?
- What pressure is active?
- What changes if they move, delay, split, or choose?

The result is a moving-camera model of GM prep. The current location, scene, or player focus becomes the center of gravity. The dashboard then pulls nearby actors, ambient cast, available moments, active threads, trackers, tables, and references into view.

This may feel disorienting at first if you are used to traditional top-down module design. The prep is not arranged primarily as Chapter 1, Chapter 2, Chapter 3. It is arranged as connected story material that responds to where the players point the camera.

A traditional module might say:

Scene A leads to Scene B, then Scene C.

The cockpit model says:

The players are here.
These people are nearby.
These pressures are active.
These moments can fire.
These are the adjacent exits.
These consequences follow them.

When the connective tissue is designed well, the GM does not need a huge arc map open at all times. The players guide the camera through play. The dashboard keeps the relevant orbit of information close, while deeper lore and less immediate material remain searchable, pinnable, or referenceable.

This makes the tool especially strong for:

- RP-heavy sessions
- crisis scenes
- branching investigations
- faction pressure
- consequence-driven arcs
- living hubs
- location-aware narration
- improvisational GMing with strong structure underneath

The goal is not to make the story shallow or overly automated. The goal is to make deep narrative prep easier to run live.

Questforge GM Dashboard keeps the table focused on the most important questions:

Who is here?
What do they want?
What is happening now?
What can go wrong next?
What choice is the party actually making?

In short:

Traditional prep is often top-down.
This cockpit is player-camera-out.

The GM still controls the world, the tone, and the consequences. But the dashboard keeps the live scene lightweight, responsive, and centered on the characters instead of buried inside a static prep document.

---

## Project Status

**Status:** Pre-alpha / V1 stabilization candidate  
**Current working campaign:** Valhalla  
**Current stage:** V1 stabilization / live-use readiness pass  
**Current app model:** Local static HTML/CSS/JavaScript module app  
**Current persistence model:** Runtime-only UI state; no backend, no database, no browser storage, no file writing

The current build can run a Valhalla hub/intermission session faster than OneNote while preserving an architecture that can later support Mothership, Erasure Protocol, corporate horror, ship ops, fantasy crawls, and other QuestForge modes.

The project has completed:

- Sprint 1 MVP architecture.
- Sprint 1.5 table-use polish.
- Sprint 2 runtime pinning bridge feature.
- Renderer maintainability pass 1.
- Actor group split for cleaner campaign data.
- Ambient Cast data and UI support.
- Valhalla global-vs-arc relocation pass.
- Reference split between global campaign systems and Valhalla intermission hub material.
- Reusable arc template scaffold stored under `dev/`.
- Expanded smoke-test coverage for the current architecture, including Ambient Cast.
- Phone-aware responsive CSS for large mobile-device table use.

The next major design input should come from fake table drills, phone/table use, and live-use friction, not speculative feature growth.

---

## Current Capabilities

### Core App

- Static browser dashboard using HTML, CSS, and JavaScript modules.
- Local-first operation with no backend or build step.
- Generic app core that avoids campaign-specific assumptions.
- Mode label support for multiple game styles.
- Current Valhalla mode labels.
- Current loadout filtering for active session material.
- Campaign-wide search across loaded dashboard material.
- Runtime-only pinning for promoting found content into the live cockpit.
- Phone-aware responsive CSS for large mobile devices and emergency table use.
- Smoke test page for data integrity, relationship checks, renderer checks, and runtime pin checks.

### Generic Data Types

The app core is built around generic dashboard data types:

- `actors`
- `ambientCast`
- `locations`
- `factions`
- `threads`
- `trackers`
- `scenes`
- `fireableMoments`
- `tables`
- `references`
- `assets`

These names are intentionally game-agnostic. Mode-specific terms such as NPCs, zones, omens, corporations, survivors, gods, panic, certainty, Ragnarok, Valkyries, or Einherjar belong in mode labels, campaign data, tags, display text, or markdown lore — not in core app architecture.

### Live Table Interface

- Left rail for active/local actors.
- Left rail for active/child locations.
- Location-aware **Nearby / Ambient Cast** support for room-life groups.
- Center panel for selected card details.
- Main card grid for current tab/search results.
- Right rail **Pinned to Cockpit** panel.
- Right rail **Can Fire Here** panel for location-specific scenes, moments, and tables.
- Right rail pressure panel for threads and trackers.
- Parent/child location support for hub navigation.
- Tracker-based availability gates for surfacing content at the right escalation level.
- Visual pinned-state indicators for cards and rail items.
- Responsive stacked cockpit layout for narrow screens and large phones.

### Table-Facing Delivery

- Moment spotlight rendering with read-aloud text prioritized first.
- Structured read-aloud lines that can separate GM narration from character speech.
- Scene “At Table” rendering that brings `playerFacing` and `scriptedMoments` above deeper prep metadata.
- Actor quick-line highlighting near voice/presentation data.
- Ambient Cast hook-line highlighting near the top of detail panels.
- Location establishing shot, approach beat, and sensory detail emphasis.
- Markdown library references for deeper lore and longer answer banks.

---

## Current Valhalla Content

The current Valhalla data layer includes a working hub/intermission package with:

- named actors
- ambient cast groups
- hub locations
- factions
- active pressure threads
- trackers
- scenes
- fireable moments
- location-linked tables
- short reference cards
- deeper markdown reference targets

Valhalla is currently the proof campaign for the dashboard’s moving-camera workflow, reusable intermission structure, Ambient Cast model, tracker-gated pressure, runtime pinning behavior, and table-facing delivery model.

Recent verification state:

```text
Website: opens and behaves as intended
Runtime pinning: works in the live UI
Ambient Cast: smoke-tested as a first-class data type
Renderer split/helper patches: no observed UI regression
Campaign index binding: repaired after Valhalla arc relocation
Functional smoke state: clean aside from deferred markdown reference stubs
Known remaining smoke-test failures: missing markdown reference files only
```

Run the smoke test after major data moves, especially after changing import paths, adding new data types, or altering renderer/state behavior.

---

## Live Table Flow

The current live-flow model is location-driven, with runtime pins acting as a manual override layer.

```text
Select Location
  → local actors appear in the rail
  → nearby ambient cast appears for room texture
  → local pressure appears in the right rail
  → Can Fire Here shows scenes, moments, and tables
  → selected detail panel prioritizes table-facing delivery text
  → pinned items stay reachable in the cockpit
```

Delivery text is intentionally surfaced before deeper metadata:

```text
Moments
  → Read Aloud first
  → narration/speech visually split
  → GM purpose underneath

Scenes
  → At Table block first
  → scripted lines as readable beat cards
  → clues/outcomes/branches underneath

Actors
  → vibe / physicality / voice
  → quick lines immediately after voice
  → motivation/knowledge lower

Ambient Cast
  → hook lines near the top
  → voice textures
  → interaction seeds
  → names and relationship links underneath

Locations
  → establishing shot and approach beat
  → sensory details visually grouped
  → function/pressure/opportunities/dangers lower
```

---

## Mobile / Phone Use

The dashboard is still primarily designed for laptop or desktop GM use, but it now includes phone-aware responsive CSS for large mobile devices.

Current phone support focuses on:

- stacked cockpit panels
- full-width controls
- touch-safe input and button sizing
- sticky horizontal tabs
- single-column cards
- table-use ordering that prioritizes main detail and live cockpit panels before lower-priority rails

Phone support is intended for emergency, secondary, or constrained table use, not yet as a fully dedicated mobile app layout. Future passes may add collapsible rails, drawer panels, or a dedicated phone cockpit toggle.

---

## Runtime Pinning

Runtime pinning is the current Sprint 2 bridge feature.

It allows the GM to:

1. Search broad campaign data.
2. Select an item.
3. Click **Pin to Cockpit**.
4. Keep that item available in the live cockpit context.
5. Click **Unpin from Cockpit** when it is no longer needed.

Runtime pins can supplement:

- actors
- ambient cast
- locations
- scenes
- fireable moments
- threads
- trackers
- tables
- references through Cockpit/search visibility

Runtime pins intentionally do **not**:

- write to `current_loadout.js`
- write to `localStorage`
- write to `sessionStorage`
- create a database record
- persist after refresh
- replace location-aware filtering

Current runtime state shape:

```js
state.sessionPins = {
  pinnedItemIds: []
};
```

Current pin helpers:

```js
isPinned(itemOrId)
pinItem(itemOrId)
unpinItem(itemOrId)
togglePinnedItem(itemOrId)
clearPins()
```

Possible future persisted session shape:

```js
currentLoadout.pinned = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

That future shape is deferred to the standalone app/session-state epic.

---

## Architecture

The project follows this separation:

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
Global holds always-on campaign systems.
The arc holds reachable content for the current adventure/context.
The session layer is optional.
The current loadout says what starts live.
Runtime pins temporarily promote found content during play.
```

### Global vs Arc Rule

Do not keep a file in `global/` because it is important.

Keep something in `global/` only if it remains useful across campaign contexts.

Good global examples:

- Ragnarok Meter
- Yggdrasilmaed System
- Yggdrasilmaed Counter
- Bifrost Deployment & Valkyrie Extraction
- Mortality Drift
- Legendary Item Evolution
- Relationship Triangle
- reusable encounter tech references

Good arc examples:

- Valhalla Intermission actors
- Valhalla hub locations
- Mead-Hall ambient cast
- Forge-Lanes event table
- Quiet Rows fireable moments
- Valhalla hub failure textures
- Intermission scenes and briefing follow-ups

---

## Recommended Project Structure

```text
questforge-gm-dashboard/
├── index.html
├── README.md
├── CHANGELOG.md
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── core/
│   │   ├── data-loader.js
│   │   ├── filters.js
│   │   ├── renderers.js
│   │   ├── renderers.helpers.js
│   │   ├── renderers.cards.js
│   │   ├── state.js
│   │   └── utils.js
│   └── modes/
│       ├── mode-registry.js
│       ├── questforge-default.mode.js
│       ├── valhalla.mode.js
│       ├── mothership.mode.js
│       └── erasure-protocol.mode.js
│
├── data/
│   ├── shared/
│   │   ├── templates.js
│   │   └── other shared data helpers
│   └── campaigns/
│       └── valhalla/
│           ├── campaign_config.js
│           ├── current_loadout.js
│           ├── index.js
│           ├── tags.js
│           ├── global/
│           │   ├── actors/
│           │   │   └── index.js
│           │   ├── ambient_cast/
│           │   │   └── index.js
│           │   ├── locations.js
│           │   ├── factions.js
│           │   ├── threads.js
│           │   ├── trackers.js
│           │   ├── scenes.js
│           │   ├── fireable_moments.js
│           │   ├── tables.js
│           │   ├── references.js
│           │   └── library/
│           ├── arcs/
│           │   └── valhalla-intermission/
│           │       ├── actors/
│           │       │   ├── index.js
│           │       │   ├── aesir.js
│           │       │   ├── einherjar.js
│           │       │   ├── stewards.js
│           │       │   └── valkyries.js
│           │       ├── ambient_cast/
│           │       │   ├── index.js
│           │       │   ├── mead_hall.js
│           │       │   ├── golden_fields.js
│           │       │   ├── forge_lanes.js
│           │       │   ├── heimdalls_threshold.js
│           │       │   ├── quiet_rows.js
│           │       │   └── valkyrie_aerie.js
│           │       ├── factions.js
│           │       ├── fireable_moments.js
│           │       ├── locations.js
│           │       ├── references.js
│           │       ├── scenes.js
│           │       ├── tables.js
│           │       ├── threads.js
│           │       ├── trackers.js
│           │       └── library/
│           ├── sessions/
│           ├── library/
│           └── assets/
│
├── tools/
│   └── smoke-test_phase4.html
├── dev/
└── archive/
```

The exact folders may evolve, but the architectural boundary should remain stable:

```text
Core code is generic.
Mode files change labels.
Campaign files hold content.
Markdown holds lore.
Arrays hold at-table data.
Current loadout controls what starts live.
Runtime pins temporarily promote found content during play.
```

---

## Campaign Assembly

The campaign `index.js` is the binding layer between campaign-specific file organization and the generic app model.

It should keep exporting one generic `campaignData` object:

```js
export const campaignData = {
  config: campaignConfig,
  currentLoadout,

  actors: [...globalActors, ...arcActors],
  ambientCast: [...globalAmbientCast, ...arcAmbientCast],
  locations: [...globalLocations, ...arcLocations],
  fireableMoments: [...globalFireableMoments, ...arcFireableMoments],
  factions: [...globalFactions, ...arcFactions],
  threads: [...globalThreads, ...arcThreads],
  trackers: [...globalTrackers, ...arcTrackers],
  scenes: [...globalScenes, ...arcScenes],
  tables: [...globalTables, ...arcTables],
  references: [...globalReferences, ...arcReferences]
};
```

The app should consume `campaignData.actors`, not Valhalla-specific internal group names like `aesirActors` or `valkyrieActors`.

---

## Renderer Organization

Renderer maintainability pass 1 has started splitting `js/core/renderers.js` without changing the public import path used by `app.js`.

Current renderer structure:

```text
js/core/renderers.js          // public export surface + remaining renderer groups
js/core/renderers.helpers.js  // shared pure renderer helpers
js/core/renderers.cards.js    // cards and rail lists
```

Current important helper additions:

```js
renderSpokenLinesBlock(label, lines, options)
```

This helper supports visually distinct spoken delivery blocks for actor quick lines and ambient cast hook lines.

Future optional splits may add:

```text
js/core/renderers.detail.js
js/core/renderers.delivery.js
js/core/renderers.panels.js
```

The important compatibility rule:

```js
import {
  renderCards,
  renderRailList,
  renderDetail,
  renderSelectableDetail,
  renderPressurePanel,
  renderFireablesPanel,
  renderMomentSpotlight
} from "./core/renderers.js";
```

`app.js` should continue importing from `renderers.js` unless there is a deliberate architecture ticket to change that.

---

## Data Shape Notes

### Actors

Actors are named, important, recurring table-facing people/entities: NPCs, contacts, threats, rivals, survivors, gods, patrons, hirelings, or other primary cast members.

Recommended fields:

```text
id
name
role
group
modeId
campaignId
arcId
status
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
tags
gmNotes
```

Current Valhalla Intermission actor files are grouped by table/lore category:

```text
actors/
├── aesir.js
├── einherjar.js
├── stewards.js
└── valkyries.js
```

### Ambient Cast

Ambient Cast is for location-linked room life: background groups, name banks, hook lines, voice texture, and interaction seeds.

It should answer:

```text
Who is nearby?
What do they say?
How do I make this room feel alive?
```

Recommended fields:

```text
id
title
type
modeId
campaignId
arcId
status
locationIds
summary
names
voices
hookLines
interactionSeeds
relatedActors
relatedThreads
relatedLocations
tags
gmNotes
```

Ambient Cast is not a replacement for actors.

```text
actors
= named primary NPCs with motives, secrets, relationships, and recurring importance

ambientCast
= location-linked crowd texture, names, voice lines, interaction hooks, and room life
```

### Locations

Locations should prioritize at-table description while keeping deeper information below.

Recommended presentation shape:

```js
presentation: {
  establishingShot: "The first clear image of the location.",
  approachBeat: "A second softer beat as players enter, approach, or notice who is present.",
  vibe: "Immediate emotional tone.",
  sensory: [
    "Sound, smell, texture, temperature, light, motion, etc."
  ]
}
```

Locations may link live content through:

```text
actorsPresent
factionsPresent
relatedThreads
availableScenes
eventTable
connectedLocations
parentLocation
```

### Scenes

Scenes are structured beats, briefings, choices, consequences, and table events.

Recommended fields:

```text
id
title
session
modeId
campaignId
arcId
status
type
priority
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
tags
gmNotes
```

Important table-facing scene text:

```js
forwardPath: {
  scriptedMoments: [
    {
      timing: "When this should fire.",
      speaker: "actor_or_name",
      line: "Spoken or paraphraseable line.",
      purpose: "Why this matters."
    }
  ]
}
```

### Fireable Moments

Fireable moments are small location-linked beats meant to be clicked and run immediately.

Recommended fields:

```text
id
title
type
trigger
compact
spotlight
modeId
campaignId
arcId
status
availability
locationIds
relatedActors
relatedThreads
reference
tags
gmNotes
```

Structured read-aloud example:

```js
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
      text: "Sit. Drink. You’re still here—that matters."
    }
  ],
  gmPurpose: "Give the party permission to decompress.",
  followUp: "Ask who accepts the drink and who does not."
}
```

### Threads

Threads are mysteries, consequences, unresolved hooks, omen chains, relationship shifts, or pressure lines.

Recommended fields:

```text
id
title
type
modeId
campaignId
arcId
status
availability
summary
currentState
pressure
relatedActors
relatedLocations
relatedFactions
relatedScenes
signals
consequences
tags
gmNotes
```

### Trackers

Trackers are clocks, pressure meters, escalation values, faction notice bars, corruption, certainty, panic, or other changing state.

Recommended fields:

```text
id
name
type
modeId
campaignId
arcId
status
value
min
max
label
summary
effects
tags
gmNotes
```

### References

References are short table-facing rules, procedures, reminders, and system notes. Long explanations still belong in markdown.

Current split:

```text
global/references.js
= campaign-wide systems and rules

arcs/valhalla-intermission/references.js
= Valhalla hub/intermission procedure and failure texture reminders
```

Global reference examples:

- Yggdrasilmaed System
- Yggdrasilmaed Counter
- Bifrost Deployment & Valkyrie Extraction
- Mortality Drift
- Ragnarok Escalation System

Intermission reference examples:

- Valhalla Return Loop
- Valhalla Hub Failure Textures

### Tables

Tables should remain normal data objects, but if they are location-linked they should surface in the right rail under **Can Fire Here → Tables**.

```js
{
  id: "table_unique_id",
  name: "Table Name",
  die: "1d8",
  category: "event",
  relatedLocation: "location_id",
  relatedLocations: [],
  entries: [],
  tags: []
}
```

### Availability Gates

Scenes, threads, moments, and tables may include tracker-based visibility gates:

```js
availability: {
  trackerId: "tracker_ragnarok_meter",
  minValue: 4,
  maxValue: 10
}
```

Omit `availability` when content should be baseline-visible.

---

## Running Locally

This project is a static HTML/JS dashboard. It does not require a backend, database, or build step.

### Option 1: VS Code Live Server

If you use VS Code:

1. Install the **Live Server** extension.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

### Option 2: Python Local Server

From the project root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Do not open `index.html` directly with `file://`, because ES module imports may be blocked by the browser.

To run the smoke test, open the smoke test HTML file in the browser through the same local server.

Example:

```text
http://localhost:8000/tools/smoke-test_phase4.html
```

---

## Smoke Testing

The smoke test validates the current dashboard architecture, including:

- Campaign data shape.
- Required fields.
- Status values.
- Duplicate IDs.
- Current loadout references.
- Tag format.
- Parent/child location relationships.
- Actor/location/thread/scene references.
- Standalone `fireableMoments` shape.
- `ambientCast` shape and location references.
- Structured `spotlight.readAloud` shape.
- Location-linked table shape.
- Tracker-based availability gates.
- Markdown reference availability.
- Runtime pin state exports.
- Runtime pin helper behavior.
- Renderer support for pinned cards and rail items.
- Detail-panel Pin/Unpin action support.
- Dashboard shell IDs, including `#pinned-items`.
- Basic runtime-only pin source scan.

Run the smoke test after significant data or renderer changes, especially after editing:

- `actors/`
- `ambient_cast/`
- `locations.js`
- `fireable_moments.js`
- `scenes.js`
- `threads.js`
- `trackers.js`
- `tables.js`
- `references.js`
- `current_loadout.js`
- `data/campaigns/valhalla/index.js`
- `state.js`
- `app.js`
- `renderers.js`
- `renderers.helpers.js`
- `renderers.cards.js`

---

## Data Model Principles

Dashboard arrays should stay short and table-facing. Long lore, full NPC writeups, full location dossiers, full dialogue banks, and deep answer banks belong in markdown files under the relevant campaign or arc `library/` folder.

Use JavaScript arrays for:

- Fast cards.
- Search/filter data.
- Active session display.
- At-table delivery cues.
- Lightweight linked references.

Use markdown for:

- Full lore.
- Full dialogue banks.
- Full NPC backstory.
- Full location dossiers.
- Rules explanations.
- Design notes.

---

## Developer Materials

The `dev/` folder is the home for builder-facing references, scaffolds, and project tools.

Current examples:

- docs / planning / guardrails
- quality pass notes
- reusable arc template zip
- future scaffolds for new campaign/arc setup

The root `README.md` and `CHANGELOG.md` remain project-facing. The `dev/` folder is builder-facing. Campaign content changes should be documented in campaign files, markdown notes, or commit messages unless they change reusable dashboard structure or workflow.

---

## Current Development Priorities

1. Keep the core app generic.
2. Keep Valhalla hub/intermission readiness stable.
3. Use fake table drills and phone/table use to identify real friction.
4. Update shared templates and smoke tests when data shapes change.
5. Create deferred markdown reference stubs when documentation cleanup becomes useful.
6. Test phone cockpit layout on actual large-phone hardware.
7. Consider actor-linked `answerMoments` after live-use confirms the need.
8. Decide whether renderer maintainability needs pass 2 after actual use.
9. Keep runtime pins runtime-only until the standalone app/session-state epic.
10. Avoid backend/database/cloud features until the static MVP proves useful at the table.

## Completed Development Milestones

### Sprint 1 — MVP Architecture and Valhalla Hub

Complete.

- Local static dashboard runs.
- Valhalla campaign data loads.
- Generic data names are in use.
- Mode labels are present.
- Current loadout controls active material.
- Actors, locations, scenes, threads, trackers, tables, and references render.
- Search works across campaign material.
- Location context drives actors/scenes/moments/tables.
- Smoke test introduced and used to validate core runtime/data integrity.

### Sprint 1.5 — Table-Use Polish

Complete / stabilization-ready.

- Fireable moments extracted into standalone data.
- Fireables panel displays scenes, moments, and tables.
- Tracker availability gates filter live options.
- Moment read-aloud text appears first.
- Moment narration and speech can be visually split.
- Scene At Table block appears near the top.
- Actor quick lines appear near the top.
- Location establishing shot / approach beat / sensory presentation is visually emphasized.

### Sprint 2 — Runtime Pinning Bridge

Implemented.

- Runtime `pinnedItemIds` added to state.
- Detail-panel `Pin to Cockpit` / `Unpin from Cockpit` action added.
- Pinned items merge into the Cockpit tab.
- Pinned items supplement active/location-aware panels.
- Pinned items render in the right rail.
- No persistence is used.
- No `current_loadout.js` writing is performed.

### Renderer Maintainability Pass 1

Implemented.

- Shared renderer helpers extracted.
- Card and rail rendering extracted.
- `renderers.js` kept as the public import surface.
- `app.js` imports left unchanged.
- Website behavior verified after split.

### Content Architecture Cleanup Pass

Implemented.

- Valhalla Intermission content moved into the arc layer.
- Global layer reduced toward campaign-wide systems and placeholders.
- Actor data split by group under the arc.
- Ambient Cast added and split by location.
- References split between global systems and intermission hub references.
- Campaign index repaired to bind the new structure back into generic `campaignData`.

---

## Future / Deferred Work

### Near-Term

- Run a fake Valhalla table drill.
- Test phone cockpit layout on actual large-phone hardware.
- Identify any remaining OneNote/memory friction points.
- Update templates when new data patterns prove stable.
- Create deferred markdown reference stubs when documentation cleanup becomes useful.
- Consider actor-linked `answerMoments` after live-use confirms the need.
- Consider renderer maintainability pass 2 only if the file starts becoming painful again.

### Standalone App & Persistent Campaign Builder Epic

Deferred until the static MVP proves itself through real use.

Future direction may include:

- campaign content separate from GM session state
- persistent loadout
- persistent pins
- arc switching
- tracker values
- custom user story data
- export/import campaign packs
- campaign pack authoring tools

### Explicit Non-Goals For Current Build

- Backend.
- Database.
- Login.
- Cloud sync.
- Foundry integration.
- Dice roller.
- Rules automation.
- Drag-and-drop editor.
- Full markdown parser.
- Dynamic campaign switching.
- Dynamic arc/session switching.
- Character sheet system.

---

## License

No license has been selected yet. Treat this repository as private / all rights reserved until a license is added.
