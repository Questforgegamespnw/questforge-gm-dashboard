# QuestForge GM Dashboard

A lightweight, browser-based GM cockpit for running tabletop sessions with faster access to the people, places, scenes, pressure, tables, and references that matter at the table.

QuestForge GM Dashboard is **not** a VTT, dice roller, rules resolver, database-first campaign manager, or full lore archive. It is a narration and session-flow tool designed around a simple operating priority:

> People first. Places second. Arc pressure third. Mechanics in reference.

## Project Status

**Status:** Pre-alpha / V1 feature-complete candidate  
**Current working campaign:** Valhalla  
**Primary goal:** Run a Valhalla hub / intermission session faster than OneNote while preserving an architecture that can later support Mothership, Erasure Protocol, corporate horror, ship ops, fantasy crawls, and other QuestForge modes.

The current build is local/static and intended for personal table use while the architecture and content model are still being shaped.

## Current Features

- Static browser dashboard using HTML, CSS, and JavaScript modules.
- Generic core data types:
  - `actors`
  - `locations`
  - `factions`
  - `threads`
  - `trackers`
  - `scenes`
  - `fireableMoments`
  - `tables`
  - `references`
  - `assets`
- Mode label support for multiple game styles.
- Current Valhalla mode labels.
- Current loadout filtering for active session material.
- Campaign-wide search across loaded dashboard material.
- Left rail for local actors and locations.
- Center panel for selected card details.
- Right rail for active story pressure.
- Right rail “Can Fire Here” panel for location-specific scenes, moments, and tables.
- Parent/child location support for hub navigation.
- Tracker-based availability gates for surfacing content at the right escalation level.
- Moment spotlight rendering with read-aloud text prioritized first.
- Structured read-aloud lines that can separate GM narration from character speech.
- Scene “At Table” rendering that brings `playerFacing` and `scriptedMoments` above deeper prep metadata.
- Actor quick-line highlighting near voice/presentation data.
- Location establishing shot, approach beat, and sensory detail emphasis.
- Markdown library references for deeper lore.
- Smoke test page for data integrity checks.

## Current Valhalla Content

The current Valhalla data layer includes:

- 11 actors
- 9 locations
- 2 factions
- 9 threads
- 1 tracker
- 18 scenes
- 28 fireable moments
- 4 tables
- 13 references

Recent smoke test status:

```text
FAIL: 0
WARN: 0
PASS: 385
```

## Live Table Flow

The current live-flow model is location-driven.

```text
Select Location
  → local actors appear in the left rail
  → local pressure appears in the right rail
  → Can Fire Here shows scenes, moments, and tables
  → selected detail panel prioritizes table-facing delivery text
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

Locations
  → establishing shot and approach beat
  → sensory details visually grouped
  → function/pressure/opportunities/dangers lower
```

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
```

Plain-language version:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
The arc holds the current adventure.
The session layer is optional.
The current loadout says what is live.
```

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
│   └── campaigns/
│       └── valhalla/
│           ├── campaign_config.js
│           ├── current_loadout.js
│           ├── index.js
│           ├── global/
│           ├── arcs/
│           ├── sessions/
│           ├── library/
│           └── assets/
│
├── docs/
└── archive/
```

## Data Shape Notes

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
tags
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
http://localhost:8000/smoke-test_phase4.html
```

## Data Model Principles

Dashboard arrays should stay short and table-facing. Long lore, full NPC writeups, full location dossiers, and deep answer banks belong in markdown files under the campaign `library/` folder.

Use JavaScript arrays for:

- Fast cards
- Search/filter data
- Active session display
- At-table delivery cues

Use markdown for:

- Full lore
- Full dialogue banks
- Full NPC backstory
- Full location dossiers
- Rules explanations
- Design notes

## Current Development Priorities

1. Keep the core app generic.
2. Keep Valhalla hub session readiness stable.
3. Use fake table drills to identify real friction.
4. Implement runtime pinning / “promote search result to active loadout.”
5. Update shared templates and smoke tests to match the current data shape.
6. Expand actor-linked answer moments from markdown dialogue banks.
7. Consider splitting `renderers.js` only after behavior stabilizes.
8. Avoid backend/database/cloud features until the static MVP proves useful at the table.

## Planned Ticket: Promote Search Result to Active Loadout

Goal: allow the GM to find any item through campaign-wide search and promote it into the active table-running context.

Current search can find broad campaign material, including items outside the current loadout or gated context. The planned next step is a UI action such as:

```text
Add to Active
Pin to Cockpit
Add to Current Loadout
```

Likely promotable targets:

- actors
- locations
- scenes
- fireable moments
- threads
- references
- tables

Likely first implementation:

```js
state.pinnedItemIds = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

Possible persisted shape later:

```js
currentLoadout.pinned = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

This should supplement location-aware filtering, not replace it. The cockpit should still prioritize current location, availability gates, active tracker state, and then explicit pinned items.

## Design Rules

- Do not hardcode Valhalla terms into core app logic.
- Do not move files around to mark content current; use `current_loadout.js`.
- Keep mode labels separate from campaign data.
- Keep longform lore in markdown.
- Keep dashboard fields short and immediately usable.
- Treat mechanics as reference, not the center of the interface.
- Prefer small, whole-function edits when changing core renderers.

## Smoke Testing

The smoke test validates:

- Campaign data shape
- Required fields
- Duplicate IDs
- Current loadout references
- Tag format
- Parent/child location relationships
- Actor/location/thread/scene references
- Fireable moment shape
- Markdown reference availability

Run the smoke test after significant data changes, especially after editing:

- `actors.js`
- `locations.js`
- `fireable_moments.js`
- `scenes.js`
- `threads.js`
- `trackers.js`
- `references.js`
- `current_loadout.js`

## License

No license has been selected yet. Treat this repository as private / all rights reserved until a license is added.
