# QuestForge GM Dashboard

A lightweight, browser-based GM cockpit for running tabletop sessions with faster access to the people, places, scenes, pressure, and references that matter at the table.

QuestForge GM Dashboard is **not** a VTT, dice roller, rules resolver, database-first campaign manager, or full lore archive. It is a narration and session-flow tool designed around a simple operating priority:

> People first. Places second. Arc pressure third. Mechanics in reference.

## Project Status

**Status:** Pre-alpha  
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
  - `tables`
  - `references`
  - `assets`
- Mode label support for multiple game styles.
- Current Valhalla mode labels.
- Current loadout filtering for active session material.
- Left rail for local actors and locations.
- Center panel for selected card details.
- Right rail for active story pressure and location-specific “Can Fire Here” moments.
- Search across active/card fields.
- Parent/child location support for hub navigation.
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
- 4 tables
- 13 references

Recent smoke test status:

```text
FAIL: 0
WARN: 0
PASS: 385
```

## Architecture

The project follows this separation:

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
The arc holds the current adventure.
The session holds tonight.
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
---

## File Shape

### Scenes

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

Then open:

```text
http://localhost:8000
```
Do not open index.html directly with file://, because ES module imports may be blocked by the browser.

To run the smoke test, open the smoke test HTML file in the browser through the same local server.

Example:

```text
http://localhost:8000/smoke-test_phase4.html
```

## Data Model Notes

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
2. Finish Valhalla hub session readiness.
3. Expand actor-linked answer moments from markdown dialogue banks.
4. Improve renderer support for `answerMoments` on actor detail cards.
5. Polish session usability through fake table drills.
6. Avoid backend/database/cloud features until the static MVP proves useful at the table.

## Design Rules

- Do not hardcode Valhalla terms into core app logic.
- Do not move files around to mark content current; use `current_loadout.js`.
- Keep mode labels separate from campaign data.
- Keep longform lore in markdown.
- Keep dashboard fields short and immediately usable.
- Treat mechanics as reference, not the center of the interface.

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
- `scenes.js`
- `threads.js`
- `trackers.js`
- `references.js`
- `current_loadout.js`

## License

No license has been selected yet. Treat this repository as private / all rights reserved until a license is added.
