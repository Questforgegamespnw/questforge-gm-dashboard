# Questforge GM Dashboard — MASTER Roadmap and File Architecture

## Current Status

**Status:** V1 stabilization candidate / Sprint 2 bridge complete  
**Current focus:** table-drill validation, documentation alignment, and selective maintainability cleanup.

The dashboard now functions as a local, static **GM cockpit / narration engine** for running the Valhalla hub/intermission loop. Sprint 1 and Sprint 1.5 are effectively complete. The first Sprint 2 bridge feature, runtime pinning, is implemented and green in local testing.

Core completed capabilities:

- Loads Valhalla campaign data through `data/campaigns/valhalla/index.js`.
- Uses generic internal data types: `actors`, `locations`, `factions`, `threads`, `trackers`, `scenes`, `fireableMoments`, `tables`, `references`, and `assets`.
- Uses mode labels to keep the app generic while Valhalla uses setting-specific display language.
- Uses `current_loadout.js` to control live cockpit material.
- Supports parent/child location navigation.
- Uses the selected location to surface actors, threads, scenes, fireable moments, and linked tables.
- Supports campaign-wide search across loaded content.
- Uses tracker-based availability gates for scenes, threads, moments, and tables where applicable.
- Keeps table-facing delivery text visually prioritized in detail panels.
- Supports runtime-only **Pin to Cockpit** / **Unpin from Cockpit**.
- Shows pinned content in a dedicated right-rail panel and supplements cockpit/location-aware context with pins.
- Includes expanded smoke test coverage for data integrity, runtime pin surface, renderer pin support, and dashboard shell IDs.
- Completed renderer maintainability pass 1 by splitting shared renderer helpers and card/rail rendering while preserving the public renderer import surface.

---

# 1. North Star

The dashboard should help run RP-heavy tabletop sessions by surfacing the most useful at-table information faster than OneNote.

It is not:

- a VTT
- a dice roller
- a rules resolver
- a character sheet replacement
- a database-first campaign manager
- a full lore archive

It is:

- a local-first GM cockpit
- a narration engine
- a campaign data viewer
- a session-running support tool
- a fast reference surface for people, places, pressure, and table-facing beats

## Core Doctrine

> People first. Places second. Arc pressure third. Mechanics in reference.


## Live Room Questions

At the table, the cockpit should help the GM answer four room-running questions quickly:

- Where are we?
- Who is nearby?
- What do they say?
- How do I make this room feel alive?

This is a core design promise, not a cosmetic layer. The dashboard is not primarily a lore archive; it is a live GM cockpit for making people, places, and pressure immediately usable at the table.

Design mapping:

```text
People first
  → actors
  → ambientCast
  → actor-linked answerMoments

Places second
  → locations
  → location vibes
  → location-linked tables
  → fireableMoments

Arc pressure third
  → threads
  → trackers
  → scenes
  → escalation cues
```

This must remain true across:

- Valhalla
- Mothership
- Erasure Protocol
- corporate horror
- ship ops
- fantasy crawl
- other Questforge campaign modes

## Practical Table Test

The dashboard succeeds if the GM can answer these in under 5 seconds:

- Where are we?
- Who is nearby?
- What do they say?
- How do I make this room feel alive?
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
- What did I just search up that I need to keep in reach?

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

- mode labels
- campaign data
- tags
- markdown lore
- display text

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
Runtime pins temporarily promote found content during play.
```

## Important Update: Session Layer Is Optional

Earlier drafts treated `sessions/next-session/` as a major live layer. In practice, the active table flow is better handled by:

- `current_loadout.js`
- selected location context
- location-linked scenes
- location-linked fireable moments
- location-linked tables
- tracker availability gates
- runtime pins

The session layer may still be useful for one-off prep, but it is no longer required for the primary live flow.

---

# 4. Current File Architecture

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
│           ├── library/
│           └── assets/
│
├── docs/
├── smoke-test_phase4.html
└── archive/
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
  Pinned to Cockpit
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

The top tabs act more like a campaign bookbag/library. The right rail handles immediate live table context.

### Cockpit

Primary live-running view. Shows active loadout material and runtime-pinned material.

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

`spotlight.readAloud` supports both legacy strings and structured line objects.

---

# 7. Core Data Shapes — Current Additions

## Location Presentation

Locations may include an `approachBeat` in addition to the establishing shot:

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

## Runtime Pinning — Implemented Bridge Feature

Runtime pinning allows the GM to find any item through campaign-wide search and promote it into the active table-running context.

Implemented behavior:

- Selected items can be pinned or unpinned from the detail panel.
- Pinned cards receive visual pin treatment.
- Pinned rail items receive visual pin treatment.
- Pinned items appear in the right rail under **Pinned to Cockpit**.
- Pinned items supplement the Cockpit tab.
- Pinned actors, locations, scenes, moments, tables, threads, and trackers supplement relevant context surfaces.

Runtime-only rules:

- No database.
- No file-writing persistence.
- No editing `current_loadout.js` from the browser.
- No localStorage/sessionStorage bridge behavior.
- No drag-and-drop loadout editor.

Current shape:

```js
state.sessionPins = {
  pinnedItemIds: []
};
```

Possible persisted shape later:

```js
currentLoadout.pinned = [
  "scene_valhalla_briefing_ember_root",
  "reference_yggdrasilmaed_system"
];
```

That persisted shape belongs to the future standalone app/session-state epic.

Important rule: runtime pins supplement location-aware filtering. They do not replace it.

The cockpit should still prioritize:

1. current location
2. availability gates
3. active tracker state
4. explicit pinned items

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

**Status:** Complete / stabilization candidate.

Completed:

- Fireable moments extracted into standalone data.
- Fireables panel displays scenes, moments, and tables.
- Tracker availability gates filter live options.
- Moment read-aloud text appears first.
- Moment narration and speech can be visually split.
- Scene At Table block appears near the top.
- Actor quick lines appear near the top.
- Location establishing shot / approach beat / sensory presentation is visually emphasized.
- Shared templates and docs are being aligned to working shapes.
- Smoke test coverage expanded.

Remaining best validation:

- Run one full fake table drill.
- Capture real friction before inventing more cleanup.

## Sprint 2 — Runtime Pinning / Promote Search Result

**Status:** Bridge implementation complete / green.

Completed:

- Runtime `sessionPins.pinnedItemIds` added to state.
- Detail-panel button added: **Pin to Cockpit** / **Unpin from Cockpit**.
- Pinned items merge into Cockpit results.
- Pinned items appear in a right-rail pinned panel.
- Pinned locations/actors/scenes/moments/tables/threads/trackers supplement relevant UI surfaces.
- Persistence remains out of scope.

Next Sprint 2 candidates:

- table-drill-based UX refinements
- actor answer moment surfacing
- optional renderer split pass 2 if behavior demands it

---

# 10. Renderer Maintainability Watch

`js/core/renderers.js` was the main complexity hotspot.

## Completed Pass 1

Renderer maintainability pass 1 is complete:

```text
renderers.js              // public exports and remaining detail/panel renderers
renderers.helpers.js      // shared renderer helpers
renderers.cards.js        // cards and rail lists
```

`app.js` still imports from:

```js
./core/renderers.js
```

This preserved compatibility while reducing file size and improving readability.

## Future Possible Splits

Only split further if real maintenance friction appears.

Possible future modules:

```text
renderers.detail.js       // generic detail fields and selected detail
renderers.delivery.js     // read-aloud, scene run block, quick lines, location description
renderers.panels.js       // pressure panel, fireables panel, moment spotlight
```

Do not split for aesthetics alone. Split when a ticket needs a cleaner seam.

---

# 11. Smoke Testing

Current smoke test coverage includes:

- campaign data shape
- required fields
- duplicate IDs
- current loadout references
- status values
- tag format
- parent/child location relationships
- actor/location/thread/scene references
- standalone `fireableMoments`
- structured `spotlight.readAloud`
- location presentation shape
- location-linked tables
- availability gates
- markdown reference availability
- runtime pin state exports
- runtime pin state behavior
- renderer support for pinned cards and rails
- detail-panel pin action
- dashboard shell IDs including `#pinned-items`
- runtime-only source scan for obvious persistence/currentLoadout mutation

Run the smoke test through a local server:

```text
http://localhost:8000/smoke-test_phase4.html
```

---

# 12. V1 Definition of Done

V1 can be considered done when:

- The app opens locally without console errors.
- Smoke test is green.
- Valhalla loads through `data/campaigns/valhalla/index.js`.
- Mode labels are used.
- Current loadout controls starting cockpit material.
- Selected location drives active actors, scenes, moments, tables, and pressure.
- Search finds broad campaign material.
- Runtime pins can temporarily promote found material during play.
- Table-facing delivery text is prioritized in detail panels.
- References and tables are available but not dominant.
- The Valhalla hub/intermission loop can be run without OneNote.
- README, CHANGELOG, roadmap, guardrails, and support docs describe the current architecture accurately.
- The architecture still obviously supports Mothership and Erasure Protocol later.

---

# 13. Near-Term Checklist

## Stabilization

- [x] Update MASTER Roadmap to current architecture.
- [x] Update README.
- [x] Update CHANGELOG.
- [x] Update smoke test coverage.
- [x] Implement runtime pin bridge.
- [x] Complete renderer maintainability pass 1.
- [ ] Update shared templates if any drift remains.
- [ ] Run one full fake table drill.
- [ ] Capture table-drill friction as tickets.

## Likely Next Feature Candidates

- [ ] Actor-linked answer moments.
- [ ] Improved reference/markdown access if table drill shows need.
- [ ] Renderer maintainability pass 2 only if necessary.
- [ ] Arc switching design ticket, not implementation, if Ashen Root transition pressure increases.

---

# 14. Future Product Direction

The long-term product direction is a standalone app and persistent campaign builder.

Potential future capabilities:

- persistent campaign content
- persistent GM session state
- persistent loadout
- persistent pins
- arc switching
- campaign switching
- tracker value editing
- custom user story data
- export/import campaign packs

Key future architecture distinction:

```text
Campaign content ≠ Session state
```

Campaign content:

- actors
- locations
- factions
- threads
- scenes
- tables
- references
- lore markdown

Session state:

- selected campaign
- selected arc
- selected session
- current loadout
- pinned items
- tracker values
- temporary notes
- revealed/hidden state

Do not backfill this into the static MVP unless explicitly scoped.

---

# 15. Final Architectural Decision

The final architecture remains:

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

That is the structure to build from.
