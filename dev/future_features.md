# Questforge GM Dashboard — Future Features

This document tracks future feature ideas without letting them distract from the static MVP.

The current product is a local/static GM cockpit. Future features should preserve the core doctrine:

> People first. Place second. Arc pressure third. Mechanics in reference.

---

## Current Rule

Do not build heavyweight app features until the cockpit has proven useful at the table.

The current bridge layer should remain:

- local-first
- static-friendly
- no backend
- no database
- no login
- no cloud sync
- no rules automation
- no VTT replacement scope

---

## Recently Completed Bridge Features

These were previously future-facing but are now implemented at the static-app bridge level:

- Campaign-wide search across loaded dashboard material.
- Location-aware **Can Fire Here** panel.
- Standalone `fireableMoments` collection.
- Location-linked tables.
- Tracker-based availability gates.
- Runtime-only **Pin to Cockpit** / **Unpin from Cockpit**.
- Pinned items panel.
- Runtime pin supplementing of cockpit, rails, pressure, and fireables.
- Expanded smoke test coverage.
- Renderer maintainability pass 1 with helper/card split.

---

## Near-Term Stabilization

These are the next best improvements before larger product features.

### 1. Fake table drills

Run short simulated table sessions and record where the GM still reaches for memory, OneNote, or raw files.

Deliverables:

- friction notes
- missed lookup cases
- confusing UI moments
- content fields that are too long or too buried
- candidate tickets based on real use

### 2. Actor-linked answer moments

Goal: make NPC answer banks more table-usable without turning actor cards into walls of text.

Possible approach:

- Keep full answer banks in markdown.
- Add short `answerMoments` or `quickAnswers` arrays to actors.
- Surface them near quick lines or through a focused detail block.

### 3. Renderer maintainability pass 2, only if needed

Possible future modules:

```text
renderers.detail.js
renderers.delivery.js
renderers.panels.js
```

Do not split just to split. Split when a future change becomes harder because of file size.

### 4. Template and schema alignment

Keep shared templates current with real working shapes:

- `fireableMoments`
- structured `spotlight.readAloud`
- `presentation.approachBeat`
- location-linked tables
- availability gates
- future actor answer moments

---

## Standalone App / Persistent Campaign Builder Epic

This is the major future product direction.

Goal: move from a personal static dashboard to a more broadly usable campaign cockpit that can support custom user story data.

Potential capabilities:

- persistent campaign content
- persistent GM session state
- persistent loadout
- persistent pins
- tracker value editing
- arc switching
- campaign switching
- custom user-created actors/locations/scenes
- import/export campaign packs
- backup/restore
- user-owned data files

Important architecture distinction:

```text
Campaign content ≠ Session state
```

Campaign content includes:

- actors
- locations
- factions
- threads
- scenes
- tables
- references
- lore markdown

Session state includes:

- selected campaign
- selected arc
- selected session
- current loadout
- runtime/persistent pins
- tracker values
- temporary notes
- revealed/hidden state

---

## Dynamic Campaign Switching

Goal: switch between Questforge modes/campaigns without manually changing imports.

Potential support targets:

- Valhalla
- Mothership
- Erasure Protocol
- corporate horror
- ship ops
- fantasy crawl

Static bridge version:

- likely manual import changes only

Standalone app version:

- campaign registry
- selected campaign state
- mode label switching
- campaign pack loading

---

## Dynamic Arc Switching

Goal: move from Valhalla Intermission to Ashen Root or another arc through UI.

Possible behavior:

- choose campaign
- choose arc
- choose current loadout/session
- optionally preserve shared/global campaign layer

Avoid until the current static session-running model is stable.

---

## Markdown Rendering

Goal: open linked markdown references directly in the dashboard.

Possible features:

- simple markdown viewer
- linked reference cards
- lore drawer/modal
- search result opens markdown reference

Risks:

- markdown parsing can become a distraction
- long lore can pull the UI away from at-table speed

Keep dashboard fields short even if markdown rendering is added.

---

## Import / Export

Potential standalone-app features:

- export campaign pack
- import campaign pack
- export session state
- backup current loadout
- share mode templates

This becomes important if the project is marketed beyond personal use.

---

## Relationship / Faction Notice Tools

Potential tools:

- faction notice sliders
- relationship clocks
- reputation values
- pressure/history notes
- visible public status vs hidden GM truth

Keep this simple. The dashboard is a narration cockpit, not a spreadsheet-first simulator.

---

## Notes and Scratchpad

Possible features:

- runtime notes
- pinned note cards
- session recap scratch area
- temporary TODOs

Static bridge warning:

- no browser storage unless explicitly scoped
- no hidden persistence surprises

Standalone app version:

- notes become session state

---

## Foundry / VTT Links

Possible features:

- reference links to Foundry scenes
- NPC token links
- journal entry links
- map links

Non-goal:

- replacing Foundry
- resolving rules
- automating dice or combat

---

## GitHub Pages Deployment

Potential goal: host the static dashboard on GitHub Pages.

Likely requirements:

- verify module paths
- keep relative imports clean
- avoid local-only assumptions
- avoid browser storage unless scoped
- review asset paths

---

## Explicit Non-Goals Unless Reconsidered

Do not drift into these by accident:

- VTT replacement
- dice roller as a centerpiece
- rules automation engine
- character sheet system
- tactical combat tracker
- database-first campaign manager
- cloud sync before local value is proven
- login/account system before product direction is real

---

## Feature Intake Checklist

Before accepting a new feature, ask:

- [ ] Does this help the GM run the table faster?
- [ ] Does this preserve people/place/pressure priority?
- [ ] Can this stay game-agnostic?
- [ ] Is this static-friendly?
- [ ] Does this need persistence, and if so, should it wait for the standalone app epic?
- [ ] Is this solving real friction from a table drill?
- [ ] Does this belong in data, state, renderer, or documentation?
