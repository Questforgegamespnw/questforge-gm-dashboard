# Questforge GM Dashboard — File Placement Quick Reference

This is the short working map for where code, data, docs, and campaign material belong. For full product doctrine, read the root `README.md`. For implementation rules, read `questforge_gm_dashboard_CODING_GUARDRAILS.md`.

The dashboard is a local/static GM cockpit. Keep the app generic, keep campaign content in campaign files, and keep long lore in markdown.

---

## Core Rule

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

---

## Placement Map

| Content / Work Type | Put It Here | Notes |
|---|---|---|
| Root app shell | `index.html` | Static browser entry point. |
| App styling | `css/styles.css` | Includes desktop, responsive, and phone cockpit styling. |
| App orchestration | `js/app.js` | Coordinates state, tabs, search, location selection, render cycle, and events. |
| Generic app logic | `js/core/` | Must stay game-agnostic. No Valhalla imports here. |
| Mode labels / UI language | `js/modes/` | Labels and display language only. No campaign lore. |
| Shared templates / scaffolds | `data/shared/` | Reusable data shapes across campaigns and modes. |
| Campaign package | `data/campaigns/<campaign>/` | Campaign config, loadout, data layers, library, and assets. |
| Campaign assembly | `data/campaigns/<campaign>/index.js` | Merges global + arc + optional session data into `campaignData`. |
| Starting live material | `data/campaigns/<campaign>/current_loadout.js` | Controls what appears live when the dashboard opens. |
| Campaign-wide reusable data | `data/campaigns/<campaign>/global/` | Only content useful across multiple arcs/contexts. |
| Arc/adventure data | `data/campaigns/<campaign>/arcs/<arc>/` | Current adventure, hub package, mission arc, or intermission layer. |
| One-off session prep | `data/campaigns/<campaign>/sessions/<session>/` | Optional. Use only when current loadout + location context is not enough. |
| Longform lore and docs | `data/campaigns/<campaign>/library/` | Full lore, dossiers, answer banks, rules writeups, design notes. |
| Images, maps, handouts, icons | `data/campaigns/<campaign>/assets/` | Campaign-specific visual/media support. |
| Builder/dev docs | `dev/` | Guardrails, roadmap, content guides, templates, planning notes. |
| Smoke tests and tools | `tools/` | Browser-based test pages and project utilities. |
| Old/deprecated material | `archive/` | Keep only when useful for recovery or history. |

---

## Current Architecture Layers

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

Plain language:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
Global holds reusable campaign material.
The arc holds the current adventure package.
The session layer is optional one-off prep.
The current loadout says what starts live.
Runtime pins temporarily promote found content during play.
```

---

## App Code

### `js/app.js`

Use for orchestration only:

- selected tab
- selected item
- selected location
- search term
- active loadout data
- location-aware filtering
- availability gates
- runtime pins
- render cycle
- event bindings

Do not turn `app.js` into a renderer dump or campaign-specific logic file.

### `js/core/`

Use for generic app behavior:

| File | Purpose |
|---|---|
| `data-loader.js` | Active loadout filtering, campaign layer merging, search text construction. |
| `filters.js` | Generic filter helpers. |
| `state.js` | Runtime UI state, selected item/location, search term, runtime pins. |
| `utils.js` | Shared non-renderer utilities. |
| `renderers.js` | Public renderer export surface and remaining detail/panel renderers. |
| `renderers.helpers.js` | Shared renderer helper functions. |
| `renderers.cards.js` | Card and rail list renderers. |

Core files must not import campaign-specific files.

### Renderer import rule

`app.js` should keep importing renderers from:

```js
./core/renderers.js
```

`renderers.js` remains the public compatibility layer even if renderer internals are split further.

### `js/modes/`

Use for display labels and mode language:

```js
navLabels: {
  actors: "NPCs / Legends",
  locations: "Zones"
}
```

Do not put lore, NPC backstory, campaign state, or scene content in mode files.

---

## Campaign Data

Campaign data lives in:

```text
data/campaigns/<campaign>/
```

The campaign `index.js` should export one generic object:

```js
export const campaignData = {
  config,
  currentLoadout,
  actors,
  ambientCast,
  locations,
  factions,
  threads,
  trackers,
  scenes,
  fireableMoments,
  tables,
  references,
  assets
};
```

Use generic internal names. Do not make app-wide names like `npcs`, `zones`, `omens`, `ragnarok`, `valkyries`, `panic`, or `certainty`.

---

## Global vs Arc vs Session

### Use `global/` for campaign-wide reusable material

Good global examples:

- campaign-wide trackers
- recurring campaign systems
- references used across arcs
- factions or actors that remain relevant across campaign contexts
- reusable procedures

Do not put something in `global/` just because it is important.

### Use `arcs/<arc>/` for reachable adventure/context material

Good arc examples:

- current hub/intermission package
- arc actors
- arc locations
- arc factions
- arc scenes
- arc fireable moments
- arc tables
- arc references
- arc pressure threads

### Use `sessions/<session>/` only for one-off prep

The session layer is optional. Prefer current loadout, selected location, location-linked material, availability gates, and runtime pins unless the prep is truly specific to one night.

---

## Dashboard Data Files

Use these standard files inside `global/`, `arcs/<arc>/`, or `sessions/<session>/` as needed:

```text
actors/
ambient_cast/
locations.js
factions.js
threads.js
trackers.js
scenes.js
fireable_moments.js
tables.js
references.js
assets.js
```

Folder splits are allowed when they improve maintainability, such as:

```text
actors/aesir.js
actors/stewards.js
ambient_cast/mead_hall.js
ambient_cast/forge_lanes.js
```

The campaign `index.js` is responsible for merging those local organization choices back into generic `campaignData` arrays.

---

## JavaScript Arrays vs Markdown

### Put short, table-facing material in JavaScript arrays

Use JS data for:

- cards
- search/filter data
- active session display
- quick lines
- fireable moments
- scene beats
- table entries
- current state summaries
- relationship links
- lightweight reference cards

### Put longform depth in markdown

Use markdown for:

- full lore
- full NPC backstory
- full dialogue banks
- full location dossiers
- rules explanations
- design notes
- deep answer banks

Link from JS data to markdown with:

```js
reference: "library/hub/03_mead_hall.md"
```

If a JS field turns into paragraphs, move it to markdown and keep only the table-facing cue in the data file.

---

## Current Loadout

`current_loadout.js` controls what starts live when the dashboard opens.

```js
export const currentLoadout = {
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "valhalla-intermission",

  activeActors: [],
  activeAmbientCast: [],
  activeLocations: [],
  activeFactions: [],
  activeThreads: [],
  activeTrackers: [],
  activeScenes: [],
  activeTables: [],
  activeReferences: []
};
```

Do not move files around to mark content current. Add or remove IDs from the loadout instead.

---

## Runtime Pins

Runtime pins are stored in UI state, not campaign data.

```js
state.sessionPins.pinnedItemIds = [];
```

Rules:

- runtime only
- no persistence
- no browser storage in the static bridge
- no `current_loadout.js` writing
- supplements active loadout and location-aware filtering
- future persistent pins belong to the standalone app/session-state epic

---

## Smoke Test

Run the smoke test through a local server, not `file://`:

```text
http://localhost:8000/tools/smoke-test_phase4.html
```

Run it after major data moves, import path changes, new data types, renderer changes, or state changes.

Current smoke coverage includes data shape, duplicate IDs, loadout references, relationship IDs, tags, availability gates, markdown reference targets, runtime pin state, renderer pin support, and dashboard shell IDs.

Missing markdown reference files may be deferred when markdown is not yet opened by the UI, but broken JS relationships should be fixed promptly.

---

## Placement Checklist

Before adding or moving a file, ask:

- [ ] Is it generic app logic? Use `js/core/`.
- [ ] Is it orchestration? Use `js/app.js`.
- [ ] Is it mode labeling? Use `js/modes/`.
- [ ] Is it shared template/schema material? Use `data/shared/`.
- [ ] Is it reusable campaign material? Use `global/`.
- [ ] Is it arc/adventure/hub material? Use `arcs/<arc>/`.
- [ ] Is it one-night prep? Use `sessions/<session>/`.
- [ ] Is it long lore or a deep answer bank? Use `library/`.
- [ ] Is it an image, handout, map, icon, or mood asset? Use `assets/`.
- [ ] Is it live when the dashboard opens? Add its ID to `current_loadout.js`.
- [ ] Is it temporarily useful during play? Use runtime pinning.
- [ ] Is it old but potentially useful? Move it to `archive/` instead of deleting immediately.
