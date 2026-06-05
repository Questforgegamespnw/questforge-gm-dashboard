# Questforge GM Dashboard — Future Features

This document is the feature parking lot for the Questforge GM Dashboard.

It exists to capture useful future ideas without letting them distract from the current static MVP. The working rule is simple:

> Build from table friction, not from speculative app ambition.

The dashboard is currently a local/static GM cockpit. Future features should preserve the core product shape:

```text
People first. Places second. Arc pressure third. Mechanics in reference.
```

---

## Feature Gating Rule

Do not build heavyweight app features until the cockpit has proven useful through fake table drills, phone/table use, or live-session friction.

The current bridge layer should remain:

- local-first
- static-friendly
- no backend
- no database
- no login
- no cloud sync
- no rules automation
- no VTT replacement scope
- no hidden persistence

A feature should not move out of this file unless it has a clear problem statement, a table-use reason, and a scoped implementation path.

---

## Intake Categories

Use these categories to prevent every idea from looking equally urgent.

| Category | Meaning |
|---|---|
| `near-term` | Useful before or during V1 stabilization. Should still be driven by real friction. |
| `candidate` | Plausible, but needs validation before implementation. |
| `standalone-app` | Belongs to the future persistent app/campaign-builder direction. |
| `integration` | Connects the cockpit to external tools without replacing them. |
| `parking-lot` | Interesting, but not actionable yet. |
| `non-goal` | Explicitly out of scope unless the product direction changes. |

---

## Near-Term Stabilization

These are the best candidates before larger product work.

### Fake Table Drills

**Category:** `near-term`  
**Purpose:** Validate the dashboard against real table-running friction.

Run short simulated table sessions and record where the GM still reaches for memory, OneNote, raw files, or browser search.

Deliverables:

- friction notes
- missed lookup cases
- confusing UI moments
- content fields that are too long or too buried
- phone/table-use pain points
- candidate tickets based on actual use

Do not treat a feature as urgent until it shows up in this kind of use.

---

### Phone Cockpit Follow-Up

**Category:** `near-term`  
**Purpose:** Test whether the current large-phone CSS is usable during constrained table use.

Current phone support is a practical responsive layer, not a dedicated mobile app.

Validate on actual hardware:

- panel order
- tab reachability
- scroll depth
- button/input size
- selected-detail readability
- right-rail usefulness
- whether collapsible panels are needed

Possible future outcomes:

- keep current stacked layout
- add collapsible rails
- add drawer panels
- add a dedicated phone cockpit toggle
- adjust panel order for real table behavior

---

### Markdown Reference Stubs

**Category:** `near-term`  
**Purpose:** Clear deferred smoke-test failures without forcing full lore expansion.

The dashboard currently does not open markdown files directly, so missing `.md` references are documentation hygiene, not a live cockpit blocker.

When cleanup time is available, create minimal stubs for referenced markdown paths:

```md
# Reference Title

Short purpose statement.

Expanded notes can be added later.
```

This should make the smoke test cleaner without turning into a lore-writing detour.

---

### Template and Schema Alignment

**Category:** `near-term`  
**Purpose:** Keep reusable scaffolds aligned with proven working data shapes.

Keep shared templates current with real app behavior:

- `ambientCast`
- `fireableMoments`
- structured `spotlight.readAloud`
- `presentation.establishingShot`
- `presentation.approachBeat`
- location-linked tables
- tracker-based `availability`
- runtime pin compatibility
- future actor answer moments, if validated

Templates should follow working data, not aspirational design.

---

## Validated Candidate Features

These are plausible next features, but they should still be confirmed by table-use friction before implementation.

### Actor-Linked Answer Moments

**Category:** `candidate`  
**Purpose:** Make NPC answer banks usable at the table without turning actor cards into walls of text.

Possible approach:

- keep full answer banks in markdown
- add short `answerMoments` or `quickAnswers` arrays to actors
- surface them near quick lines or in a focused detail block
- keep entries short, searchable, and playable

This is most useful if fake table drills show that NPC question/answer lookup is still slow.

---

### Renderer Maintainability Pass 2

**Category:** `candidate`  
**Purpose:** Split renderer code only if future changes become harder because of file size or mixed responsibilities.

Possible future modules:

```text
renderers.detail.js
renderers.delivery.js
renderers.panels.js
```

Do not split for aesthetics alone. Split only when a ticket needs a cleaner seam.

---

### Improved Reference Access

**Category:** `candidate`  
**Purpose:** Make deeper references easier to reach without turning the dashboard into a wiki.

Possible approaches:

- better reference cards
- reference preview drawer
- clearer “open deeper notes” affordance
- search result grouping for references

Avoid this unless table use shows that markdown/reference lookup is a real friction point.

---

## Standalone App / Persistent Campaign Builder Epic

**Category:** `standalone-app`  
**Purpose:** Move from a personal static dashboard to a reusable campaign cockpit that can support custom user story data.

This is the major future product direction, but it is deferred until the static MVP proves itself through real use.

Potential capabilities:

- persistent campaign content
- persistent GM session state
- persistent loadout
- persistent pins
- tracker value editing
- arc switching
- campaign switching
- custom user-created actors, locations, scenes, threads, tables, and references
- import/export campaign packs
- backup/restore
- user-owned data files
- campaign pack authoring tools

Important architecture distinction:

```text
Campaign content ≠ Session state
```

Campaign content includes:

- actors
- ambient cast
- locations
- factions
- threads
- scenes
- fireable moments
- tables
- references
- lore markdown
- assets

Session state includes:

- selected campaign
- selected arc
- selected session
- current loadout
- runtime/persistent pins
- tracker values
- temporary notes
- revealed/hidden state

Do not backfill this complexity into the static MVP unless explicitly scoped.

---

## Campaign and Arc Switching

### Dynamic Campaign Switching

**Category:** `standalone-app`  
**Purpose:** Switch between Questforge modes/campaigns without manually changing imports.

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

### Dynamic Arc Switching

**Category:** `standalone-app`  
**Purpose:** Move between campaign arcs through UI while preserving shared/global context.

Possible behavior:

- choose campaign
- choose arc
- choose current loadout or session
- preserve global campaign layer
- swap arc-specific content
- optionally preserve selected pins or tracker values

Avoid until the current static session-running model is stable.

---

## Markdown Rendering

**Category:** `candidate` / `standalone-app`  
**Purpose:** Open linked markdown references directly in the dashboard.

Possible features:

- simple markdown viewer
- linked reference cards
- lore drawer/modal
- search result opens markdown reference
- markdown preview for references

Risks:

- markdown parsing can become a distraction
- long lore can pull the UI away from at-table speed
- dashboard fields may bloat if markdown becomes too convenient

Keep dashboard fields short even if markdown rendering is added.

---

## Import / Export

**Category:** `standalone-app`  
**Purpose:** Support sharing, backup, and user-owned campaign data.

Potential features:

- export campaign pack
- import campaign pack
- export session state
- backup current loadout
- share mode templates
- validate imported campaign packs

This becomes important if the project moves beyond personal use.

---

## Relationship / Faction Notice Tools

**Category:** `candidate` / `standalone-app`  
**Purpose:** Track faction attention, relationship shifts, reputation, and consequence pressure.

Potential tools:

- faction notice sliders
- relationship clocks
- reputation values
- pressure/history notes
- visible public status vs hidden GM truth
- simple faction-change log

Keep this simple. The dashboard is a narration cockpit, not a spreadsheet-first simulator.

---

## Notes and Scratchpad

**Category:** `candidate` / `standalone-app`  
**Purpose:** Capture temporary session notes without confusing them with campaign content.

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

## External Integrations

### Foundry / VTT Links

**Category:** `integration`  
**Purpose:** Link to external VTT material without trying to become a VTT.

Possible features:

- reference links to Foundry scenes
- NPC token links
- journal entry links
- map links

Non-goals:

- replacing Foundry
- resolving rules
- automating dice or combat
- becoming a tactical combat tracker

---

### GitHub Pages Deployment

**Category:** `candidate` / `integration`  
**Purpose:** Host the static dashboard in a simple deployable form.

Likely requirements:

- verify module paths
- keep relative imports clean
- avoid local-only assumptions
- avoid browser storage unless scoped
- review asset paths
- confirm campaign data loading works from the deployed path

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
- drag-and-drop editor before the data model stabilizes
- complex state-management framework for the static MVP

---

## Feature Intake Checklist

Before accepting a new feature, ask:

- [ ] What table-use problem does this solve?
- [ ] Did that problem show up in a fake drill, phone test, or live session?
- [ ] Does this help the GM run faster or with less cognitive load?
- [ ] Does this preserve people/place/pressure priority?
- [ ] Can this stay game-agnostic?
- [ ] Is this static-friendly?
- [ ] Does this require persistence?
- [ ] If it requires persistence, should it wait for the standalone app epic?
- [ ] Does this belong in data, state, renderer, styling, or documentation?
- [ ] Is there a smaller bridge version that proves the value first?

---

## Promotion Rule

A feature can move from this parking lot into the roadmap when it has:

1. a clear table-use problem,
2. a scoped user-facing behavior,
3. an architecture-safe implementation path,
4. a smoke-test or verification plan,
5. no hidden dependency on backend/database/persistence unless explicitly part of the standalone app epic.

If those are missing, keep it parked.
