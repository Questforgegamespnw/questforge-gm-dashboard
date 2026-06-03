# Questforge GM Dashboard — MASTER Roadmap and File Architecture

## Current Status

**Status:** V1 feature-complete candidate  
**Current focus:** Stabilization, documentation, and small usability features.

The dashboard now successfully functions as a local, static **GM cockpit / narration engine** for running the Valhalla hub/intermission loop. The original Sprint 1 MVP is effectively complete and has moved into polish/stabilization.

Core completed capabilities:

- Loads Valhalla campaign data through `data/campaigns/valhalla/index.js`.
- Uses generic internal data types: `actors`, `locations`, `factions`, `threads`, `trackers`, `scenes`, `tables`, `references`, and `assets`.
- Uses mode labels to keep the app generic while Valhalla uses setting-specific display language.
- Uses `current_loadout.js` to control live cockpit material.
- Supports parent/child location navigation.
- Uses the selected location to surface active actors, threads, scenes, fireable moments, and linked tables.
- Supports campaign-wide search across loaded content.
- Uses tracker-based availability gates for scenes, threads, moments, and tables where applicable.
- Keeps table-facing delivery text visually prioritized in detail panels.
- Smoke test currently reports green.

---

# 1. North Star

The dashboard should help run RP-heavy tabletop sessions by surfacing the most useful at-table information faster than OneNote.

It is not:

- A VTT
- A dice roller
- A rules resolver
- A character sheet replacement
- A database-first campaign manager
- A full lore archive

It is:

- A local-first GM cockpit
- A narration engine
- A campaign data viewer
- A session-running support tool
- A fast reference surface for people, places, pressure, and table-facing beats

## Core Doctrine

> People first. Place second. Arc / story pressure third. Mechanics in reference.

This must remain true across:

- Valhalla
- Mothership
- Erasure Protocol
- Corporate horror
- Ship ops
- Fantasy crawl
- Other Questforge campaign modes

## Practical Table Test

The dashboard succeeds if the GM can answer these in under 5 seconds:

- Who is this NPC?
- What is their vibe?
- What do they sound like?
- What can I say as them?
- Where are the players?
- What does this place look, sound, and feel like?
- What can fire here?
- What scene, moment, or table belongs to this location?
- What pressure or thread is active?
- What tracker changed?
- Where is the deeper markdown if needed?

---

# 2. Architecture Standard

Use generic internal names so the same dashboard can support many games.

## Canonical Internal Data Types

| Internal Type | Meaning |
|---|---|
| `actors` | NPCs, contacts, threats, rivals, survivors, gods, patrons, hirelings |
| `locations` | Places, zones, rooms, districts, station nodes, routes, ship compartments |
| `factions` | Groups, companies, cults, houses, guilds, crews, agencies |
| `threads` | Mysteries, unresolved hooks, promises, omens, signals, consequences |
| `trackers` | Clocks, pressure meters, faction notice, panic, certainty, corruption |
| `scenes` | Session beats, encounters, scripted moments, mission events, next steps |
| `fireableMoments` | Small location-linked beats that can be fired immediately at the table |
| `tables` | Random tables, event tables, prompt tables |
| `references` | Rules summaries, procedures, mode-specific cheat sheets, lore/rules notes |
| `assets` | Images, icons, portraits, maps, mood boards |

## Avoid as Core/App-Wide Names

Avoid locking the app to one mode with names like:

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

Those terms are allowed in:

- Mode labels
- Campaign data
- Tags
- Markdown lore
- Display text

They should not become app-wide core names.

---

# 3. Layer Model

The intended architecture remains:

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
The session layer is optional prep for a specific night.
The current loadout says what starts live.
Runtime pins can temporarily promote found content during play.
```

## Important Update: Session Layer Is Optional

Earlier roadmap drafts treated `sessions/next-session/` as a major live layer. In practice, the active table flow is better handled by:

- `current_loadout.js`
- selected location context
- location-linked scenes
- location-linked fireable moments
- location-linked tables
- tracker availability gates
- future runtime pins

The session layer may still be useful for one-off prep, but it is no longer required for the primary live flow.

---

# 4. Current File Architecture

```text
questforge-gm-dashboard/
├── index.html
├── README.md
├── CHANGELOG.md
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
│   │   ├── schemas.js
│   │   ├── tags.js
│   │   ├── templates.js
│   │   └── reference_categories.js
│   └── campaigns/
│       └── valhalla/
│           ├── campaign_config.js
│           ├── current_loadout.js
│           ├── index.js
│           ├── global/
│           │   ├── actors.js
│           │   ├── locations.js
│           │   ├── factions.js
│           │   ├── threads.js
│           │   ├── trackers.js
│           │   ├── scenes.js
│           │   ├── fireable_moments.js
│           │   ├── tables.js
│           │   └── references.js
│           ├── arcs/
│           │   └── valhalla-intermission/
│           ├── sessions/
│           │   └── archive/
│           ├── library/
│           └── assets/
│
├── smoke-test.html
└── docs/
```

The exact folders may evolve, but this separation should remain stable.

---

# 5. Dashboard Layout and Navigation

## Current Primary Layout

```text
Top Bar:
  Campaign / Mode / Search / View Filter

Left Rail:
  Active actors
  Active locations / child locations

Center Panel:
  Searchable cards
  Selected detail panel

Right Rail:
  Can Fire Here
    - Scenes
    - Moments
    - Tables
  Pressure
    - Threads
    - Trackers
```

## Current Top Tabs

```text
Cockpit | Actors | Locations | Threads | Lore / Rules
```

The top tabs act more like a campaign bookbag/library. The right rail handles the immediate live table context.

### Cockpit

Primary live-running view. Shows active loadout material and supports selected-location context.

### Actors

Full loaded actor roster. Use when players seek someone unexpected.

### Locations

Full loaded location roster. Use when players move, wander, or ask about an area.

### Threads

Mysteries, consequences, omens, relationship changes, and trackers.

### Lore / Rules

References and tables. These are available but not dominant.

---

# 6. Detail Panel Delivery Priority

The detail panel should prioritize what the GM can say, describe, or perform.

## Actors

Display priority:

1. Name
2. Role / type / status metadata
3. Current state
4. Vibe
5. Physicality
6. Voice
7. Quick Lines
8. Scene impact / visual anchor
9. Motivation
10. Knowledge
11. Reference / GM notes

`Quick Lines` are table-facing performance text and should remain near the top.

## Locations

Display priority:

1. Name
2. Type / region / status metadata
3. Current state
4. Vibe
5. Establishing Shot
6. Approach Beat
7. Sensory
8. Function
9. Pressure
10. Opportunities
11. Dangers
12. Escalation
13. Reference / GM notes

`Establishing Shot`, `Approach Beat`, and `Sensory` should be visually distinct from normal metadata.

## Scenes

Display priority:

1. Title
2. Type / priority / status metadata
3. At Table block
   - player-facing setup
   - scripted lines as readable beat cards
   - cue
   - purpose
4. Trigger
5. Summary
6. GM truth
7. Clues
8. Outcomes
9. Forward path
10. Run note
11. Reference / GM notes

Scene scripted moments are table-facing delivery text and should not be buried low in the stack.

## Fireable Moments

Display priority:

1. Title
2. Type metadata
3. Read Aloud block
   - narration lines
   - speech lines
4. Compact reminder
5. Trigger
6. GM purpose
7. Follow-up
8. Tags

`spotlight.readAloud` supports both legacy strings and structured line objects:

```js
readAloud: [
  {
    type: "narration",
    text: "Sven clears space before you reach the table."
  },
  {
    type: "speech",
    speaker: "Sven",
    text: "Sit. Drink. You’re still here—that matters."
  }
]
```

---

# 7. Core Data Shapes — Current Additions

## Location Presentation

Locations may now include an `approachBeat` in addition to the establishing shot:

```js
presentation: {
  establishingShot: "The big opening image.",
  approachBeat: "A softer second beat as the players approach, enter, or notice who is present.",
  vibe: "Emotional tone.",
  sensory: []
}
```

## Availability Gates

Scenes, threads, moments, and tables may include tracker-based visibility gates:

```js
availability: {
  trackerId: "tracker_ragnarok_meter",
  minValue: 4,
  maxValue: 10
}
```

Omit `availability` when content should be baseline-visible.

## Fireable Moments

Fireable moments are short, location-linked beats surfaced in the right rail.

```js
{
  id: "moment_unique_id",
  title: "Moment Title",
  type: "omen / clue / warning / decompression / navigation",
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "arc_valhalla_intermission",
  status: "available",
  locationIds: [],
  availability: {
    trackerId: "tracker_ragnarok_meter",
    minValue: 4
  },
  trigger: "When to use this moment.",
  compact: "Short right-rail reminder.",
  spotlight: {
    title: "Spotlight Title",
    readAloud: [],
    gmPurpose: "Why this beat matters.",
    followUp: "What to do next."
  },
  tags: [],
  gmNotes: ""
}
```

## Tables

Tables should remain normal data objects, but if they are location-linked they should surface in the right rail under **Can Fire Here → Tables**.

```js
{
  id: "table_unique_id",
  name: "Table Name",
  die: "1d8",
  category: "event",
  relatedLocation: "location_id",
  entries: [],
  tags: []
}
```

---

# 8. Current Loadout and Runtime Pins

## Current Loadout

`current_loadout.js` controls the initial active session context.

```js
export const currentLoadout = {
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "valhalla-intermission",

  activeActors: [],
  activeLocations: [],
  activeFactions: [],
  activeThreads: [],
  activeTrackers: [],
  activeScenes: [],
  activeTables: [],
  activeReferences: []
};
```

Do not move files around to mark them active. Use the current loadout.

## Planned Runtime Pinning Feature

### Feature: Promote Search Result to Active Loadout

**Goal:** Allow the GM to find any item through campaign-wide search and promote it into the active table-running context.

**Problem:** Search can now find broad campaign material, including items outside the current loadout or gated context. However, there is no UI action to mark a found item as active for the current session.

**Desired behavior:** When a GM selects an item from search results, provide an action such as:

- Add to Active
- Pin to Cockpit
- Add to Current Loadout

The selected item should then appear in the active cockpit context without requiring manual edits to `current_loadout.js`.

**Likely promotable targets:**

- actors
- locations
- scenes
- fireable moments
- threads
- references
- tables

**Runtime-only first pass:**

```js
state.pinnedItemIds = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

**Possible persisted shape later:**

```js
currentLoadout.pinned = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

**Important rule:** This should not replace location-aware filtering. It should supplement it.

The cockpit should still prioritize:

1. Current location
2. Availability gates
3. Active tracker state
4. Explicit pinned items

---

# 9. Sprint Status

## Sprint 1 — MVP Architecture and Valhalla Hub

**Status:** Complete / green.

Completed:

- Local static dashboard runs.
- Valhalla campaign data loads.
- Generic data names are in use.
- Mode labels are present.
- Current loadout controls active material.
- Actors, locations, scenes, threads, trackers, tables, and references render.
- Search works across campaign material.
- Location context drives actors/scenes/moments/tables.
- Smoke test is green.

## Sprint 1.5 — Table-Use Polish

**Status:** Mostly complete.

Completed:

- Fireable moments extracted into standalone data.
- Fireables panel displays scenes, moments, and tables.
- Tracker availability gates filter live options.
- Moment read-aloud text appears first.
- Moment narration and speech can be visually split.
- Scene At Table block appears near the top.
- Actor quick lines appear near the top.
- Location establishing shot / approach beat / sensory presentation is visually emphasized.

Remaining cleanup:

- Update shared templates to match the current working data shapes.
- Update smoke test for `fireableMoments`, structured `readAloud`, `approachBeat`, and table links if not already covered.
- Update README and CHANGELOG.
- Consider splitting `renderers.js` after V1 stabilizes.

## Sprint 2 — Runtime Pinning / Promote Search Result

**Status:** Planned next feature.

Goal:

- Add a runtime-only way to pin selected search results into the live cockpit context.

Non-goals for first pass:

- No database.
- No file-writing persistence.
- No editing `current_loadout.js` from the browser.
- No drag-and-drop loadout editor.

---

# 10. Renderer Maintainability Watch

`js/core/renderers.js` is now the main complexity hotspot.

Current responsibilities include:

- Card rendering
- Rail lists
- Detail panel rendering
- Actor delivery blocks
- Location delivery blocks
- Scene At Table blocks
- Fireables panel
- Moment spotlight panel
- Table entry rendering
- Tracker effect rendering

This is acceptable for V1 if stable, but future cleanup could split it into:

```text
renderers.js              // public exports / orchestration
renderers.cards.js        // cards and rail lists
renderers.detail.js       // generic detail fields
renderers.delivery.js     // read-aloud, scene run block, quick lines, location description
renderers.panels.js       // pressure panel, fireables panel
```

Do not split until the current UX stabilizes and the smoke test remains green.

---

# 11. V1 Definition of Done

V1 can be considered done when:

- The app opens locally without console errors.
- Smoke test is green.
- Valhalla loads through `data/campaigns/valhalla/index.js`.
- Mode labels are used.
- Current loadout controls starting cockpit material.
- Selected location drives active actors, scenes, moments, tables, and pressure.
- Search finds broad campaign material.
- Table-facing delivery text is prioritized in detail panels.
- References and tables are available but not dominant.
- The Valhalla hub/intermission loop can be run without OneNote.
- README and CHANGELOG describe the current architecture accurately.
- The architecture still obviously supports Mothership and Erasure Protocol later.

---

# 12. Near-Term Checklist

## Stabilization

- [ ] Update MASTER Roadmap to current architecture.
- [ ] Update README.
- [ ] Update CHANGELOG.
- [ ] Update shared templates.
- [ ] Update smoke test coverage if needed.
- [ ] Run one full fake table drill.

## Next Feature

- [ ] Add runtime `pinnedItemIds` to state.
- [ ] Add a detail-panel button for search-selected items: **Pin to Cockpit**.
- [ ] Merge pinned items into Cockpit tab results.
- [ ] Surface pinned locations/actors/scenes/tables/references without breaking location-aware filtering.
- [ ] Add an unpin action.
- [ ] Keep persistence out of scope for first pass.

---

# 13. Final Architectural Decision

The final architecture remains:

```text
Core code is generic.
Mode files change labels.
Campaign files hold content.
Markdown holds lore.
Arrays hold at-table data.
Current loadout controls what starts live.
Runtime pins can temporarily promote found content during play.
```

That is the structure to build from.
