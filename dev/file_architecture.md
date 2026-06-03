# Questforge GM Dashboard — File Architecture

## Live Room Questions

The architecture should support four fast table questions: Where are we? Who is nearby? What do they say? How do I make this room feel alive?

This is why the data model distinguishes primary `actors`, planned lightweight `ambientCast`, location context, fireable moments, and arc pressure.


This document describes the current project structure and where new code, data, and documentation should go.

The dashboard is a local/static GM cockpit. It is intentionally not database-first and does not require a build step.

---

## 1. Architecture Layers

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

---

## 2. Recommended Root Structure

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
│           ├── arcs/
│           ├── sessions/
│           ├── library/
│           └── assets/
│
├── docs/
├── smoke-test_phase4.html
└── archive/
```

The exact folders can evolve, but the separation should remain stable.

---

## 3. App Core

Core code lives in:

```text
js/core/
```

Core files must stay game-agnostic. They should not import campaign-specific files directly.

Current core responsibilities:

| File | Purpose |
|---|---|
| `data-loader.js` | Active loadout filtering, campaign layer merging, search text construction |
| `filters.js` | Small generic filter helpers |
| `state.js` | Runtime UI state, selected item/location, search term, runtime pins |
| `utils.js` | Shared non-renderer utilities |
| `renderers.js` | Public renderer export surface and remaining detail/panel renderers |
| `renderers.helpers.js` | Shared renderer helper functions |
| `renderers.cards.js` | Card and rail list renderers |

### Renderer Split Rule

`app.js` should continue importing renderers from:

```js
./core/renderers.js
```

`renderers.js` remains the public compatibility layer even as internals are split.

---

## 4. App Orchestration

Main orchestration lives in:

```text
js/app.js
```

`app.js` coordinates:

- selected tab
- selected item
- selected location
- broad search
- active loadout data
- location-aware filtering
- availability gates
- runtime pins
- render cycle
- event bindings

Keep `app.js` as orchestration. Avoid moving generic renderer details into it.

---

## 5. Mode Labels

Mode files live in:

```text
js/modes/
```

Mode files can define display labels and UI language, but should not hold campaign lore.

Good:

```js
navLabels: {
  actors: "NPCs / Legends",
  locations: "Zones"
}
```

Bad:

```js
svenBackstory: "Long lore text..."
```

---

## 6. Campaign Data

Campaign data lives in:

```text
data/campaigns/<campaign>/
```

The campaign `index.js` merges all needed data into one `campaignData` export.

Typical Valhalla layout:

```text
data/campaigns/valhalla/
├── campaign_config.js
├── current_loadout.js
├── index.js
├── global/
│   ├── actors.js
│   ├── locations.js
│   ├── factions.js
│   ├── threads.js
│   ├── trackers.js
│   ├── scenes.js
│   ├── fireable_moments.js
│   ├── tables.js
│   └── references.js
├── arcs/
│   └── valhalla-intermission/
├── sessions/
├── library/
└── assets/
```

---

## 7. Global, Arc, and Session Data

### Global

Use `global/` for recurring campaign-wide content.

Examples:

- recurring NPCs
- hub locations
- core factions
- long-running threads
- reusable tables
- campaign-wide references

### Arc

Use `arcs/<arc>/` for current adventure package content.

Examples:

- arc-specific NPCs
- arc locations
- arc scenes
- arc pressure
- arc clues

### Session

Use `sessions/<session>/` for one-off prep.

The session layer is optional. The current live-flow model mostly uses:

- `current_loadout.js`
- selected location context
- location-linked scenes
- location-linked fireable moments
- location-linked tables
- availability gates
- runtime pins

---

## 8. Current Loadout

`current_loadout.js` controls what starts live.

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

Do not move files around to mark content current. Add IDs to the current loadout instead.

---

## 9. Runtime Pins

Runtime pins are stored in UI state, not in campaign files.

Current behavior:

```js
state.sessionPins.pinnedItemIds = [];
```

Rules:

- Runtime only.
- No persistence.
- No `current_loadout.js` writing.
- No browser storage in the bridge implementation.
- Pinned items supplement active loadout and location-aware filtering.

Future persistent pins belong to the standalone app/session-state epic, not the static bridge.

---

## 10. Markdown Library

Longform content belongs in:

```text
data/campaigns/<campaign>/library/
```

Use markdown for:

- lore dossiers
- deep NPC writeups
- full dialogue banks
- rules explanations
- GM design notes

Dashboard data can link to markdown through:

```js
reference: "library/hub/03_mead_hall.md"
```

---

## 11. Shared Data

Shared schemas, templates, tags, and reference categories belong in:

```text
data/shared/
```

Use this for reusable structure across campaigns and game modes.

Do not put Valhalla-specific lore in shared data.

---

## 12. Smoke Test

The smoke test currently validates:

- campaign shape
- required fields
- duplicate IDs
- current loadout references
- tag format
- parent/child location relationships
- actor/location/thread/scene references
- fireable moment shape
- structured read-aloud shape
- availability gate tracker references
- location-linked tables
- markdown references
- runtime pin state surface
- renderer pin support
- dashboard shell IDs

Run through a local server, not `file://`:

```text
http://localhost:8000/smoke-test_phase4.html
```

---

## 13. Placement Checklist

Before adding a file, ask:

- [ ] Is it generic app logic? Use `js/core/`.
- [ ] Is it mode labeling? Use `js/modes/`.
- [ ] Is it reusable campaign material? Use `global/`.
- [ ] Is it arc material? Use `arcs/<arc>/`.
- [ ] Is it one-night prep? Use `sessions/<session>/`.
- [ ] Is it long lore? Use `library/`.
- [ ] Is it an image/icon/map? Use `assets/`.
- [ ] Is it live tonight? Add its ID to `current_loadout.js`.
- [ ] Is it temporarily needed during play? Use runtime pinning.
