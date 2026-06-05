# Questforge GM Dashboard — MASTER Roadmap

This roadmap is the planning tracker for Questforge GM Dashboard. The root `README.md` explains the product and architecture in full. This document tracks current status, completed milestones, near-term work, design decisions, and future product direction.

---

## Current Status

**Status:** V1 stabilization candidate / live-use readiness pass  
**Current working campaign:** Valhalla  
**Current focus:** fake-table validation, phone/table-use testing, documentation alignment, and selective cleanup based on real friction.

The dashboard currently functions as a local, static **GM cockpit / narration engine** for running the Valhalla hub/intermission loop. It is not a VTT, dice roller, rules resolver, database-first campaign manager, character sheet replacement, or full lore archive.

Current functional state:

- Static HTML/CSS/JavaScript module app opens locally through a server.
- Valhalla campaign data loads through `data/campaigns/valhalla/index.js`.
- Generic app data types are in use, including `ambientCast`.
- Current loadout controls what starts live.
- Selected location drives nearby actors, ambient cast, fireables, tables, threads, and trackers.
- Runtime-only pins can promote found content into the live cockpit.
- Renderer split pass 1 is complete while preserving the public import surface.
- Smoke test covers current data integrity, relationships, runtime pins, renderer pin support, shell IDs, and Ambient Cast.
- Functional smoke state is clean aside from deferred markdown reference stubs.
- Phone-aware responsive CSS exists for large mobile-device table use.

Current best next input:

```text
Fake table drills + actual phone/table use.
```

Do not invent major new features until those drills reveal real friction.

---

## North Star

The dashboard should help run RP-heavy tabletop sessions by surfacing useful table information faster than OneNote.

Core doctrine:

> People first. Places second. Arc pressure third. Mechanics in reference.

Live room questions:

```text
Where are we?
Who is nearby?
What do they say?
How do I make this room feel alive?
```

The dashboard succeeds when the GM can quickly answer:

- who is present
- what they want
- what they sound like
- what the place feels like
- what can fire here
- what pressure is active
- what changed because of player choices
- where deeper reference material lives if needed

---

## Stable Architecture Decisions

### Generic Internal Data Types

Use these app-wide names in data and app logic:

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

Mode-specific words such as NPCs, zones, omens, Ragnarok, Valkyries, certainty, panic, corporations, or survivors belong in mode labels, campaign data, tags, display text, or markdown lore — not in core app architecture.

### Layer Model

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

Plain-language rule:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
Global holds reusable campaign systems.
The arc holds the current adventure/context package.
The session layer is optional one-off prep.
The current loadout says what starts live.
Runtime pins temporarily promote found content during play.
```

### Global vs Arc Rule

Do not keep something in `global/` because it is important.

Use `global/` only for material that remains useful across campaign contexts. Use an arc folder for content tied to a specific hub, mission, adventure, intermission, or context package.

Examples:

```text
Global:
- Ragnarok Meter
- Yggdrasilmaed System
- Bifrost Deployment & Valkyrie Extraction
- Mortality Drift
- Legendary Item Evolution
- reusable campaign-wide procedures

Arc:
- Valhalla Intermission hub locations
- Intermission scenes and fireables
- room-specific ambient cast
- hub failure textures
- arc fallout overlays
```

### Session Layer Rule

The `sessions/` layer is optional. The current live flow is primarily handled by:

- `current_loadout.js`
- selected location context
- location-linked scenes
- location-linked fireable moments
- location-linked tables
- tracker availability gates
- runtime pins

Use `sessions/` only when one-off prep truly helps.

### Runtime Pin Rule

Runtime pins are the current bridge implementation for temporary cockpit promotion.

Rules:

- runtime-only
- no database
- no browser storage
- no `current_loadout.js` writing
- supplement location-aware filtering
- do not replace current loadout or selected-location logic

Future persistent pins belong to the standalone app/session-state epic.

---

## Current App Surface

### Main Layout

```text
Top Bar:
  Campaign / Mode / Search / View Filter

Left Rail:
  Active/local actors
  Active/child locations

Center Panel:
  Selected detail panel
  Searchable cards

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

### Current Tabs

```text
Cockpit | Actors | Locations | Threads | Lore / Rules
```

The tabs act like a campaign bookbag. The right rail handles immediate live table context.

### Phone / Mobile Support

Current phone support is a responsive CSS layer for large mobile devices and constrained table use. It supports:

- stacked cockpit panels
- full-width controls
- touch-safe input/button sizing
- sticky horizontal tabs
- single-column cards
- mobile ordering that prioritizes main detail and live cockpit panels

This is not yet a dedicated mobile app layout. Future improvements should be driven by actual phone use.

---

## Completed Milestones

### Sprint 1 — MVP Architecture and Valhalla Hub

**Status:** Complete.

- Local static dashboard runs.
- Valhalla campaign data loads.
- Generic data names are in use.
- Mode labels are present.
- Current loadout controls active material.
- Actors, locations, scenes, threads, trackers, tables, and references render.
- Search works across campaign material.
- Location context drives actors, scenes, moments, tables, and pressure.
- Smoke test introduced and used to validate core runtime/data integrity.

### Sprint 1.5 — Table-Use Polish

**Status:** Complete / stabilization-ready.

- Fireable moments extracted into standalone data.
- Fireables panel displays scenes, moments, and tables.
- Tracker availability gates filter live options.
- Moment read-aloud text appears first.
- Moment narration and speech can be visually split.
- Scene At Table block appears near the top.
- Actor quick lines appear near the top.
- Location establishing shot, approach beat, and sensory presentation are visually emphasized.

### Sprint 2 — Runtime Pinning Bridge

**Status:** Implemented.

- Runtime `pinnedItemIds` added to state.
- Detail-panel `Pin to Cockpit` / `Unpin from Cockpit` action added.
- Pinned items merge into the Cockpit tab.
- Pinned items supplement active/location-aware panels.
- Pinned items render in the right rail.
- No persistence is used.
- No `current_loadout.js` writing is performed.

### Renderer Maintainability Pass 1

**Status:** Implemented.

- Shared renderer helpers extracted.
- Card and rail rendering extracted.
- `renderers.js` kept as the public import surface.
- `app.js` imports left unchanged.
- Website behavior verified after split.

### Content Architecture Cleanup Pass

**Status:** Implemented.

- Valhalla Intermission content moved into the arc layer.
- Global layer reduced toward campaign-wide systems and placeholders.
- Actor data split by group under the arc.
- Ambient Cast added and split by location.
- References split between global systems and intermission hub references.
- Campaign index repaired to bind the new structure back into generic `campaignData`.

### Ambient Cast First-Class Support

**Status:** Implemented.

- `ambientCast` added as a generic dashboard data type.
- Ambient Cast supports room-life groups, names, hook lines, voice texture, and interaction seeds.
- Location-aware Ambient Cast display is active.
- Smoke test coverage added for Ambient Cast shape and relationship links.

### Phone Cockpit CSS Pass

**Status:** Implemented.

- Added phone-aware responsive CSS for large mobile devices.
- Added stacked panel behavior, full-width controls, sticky horizontal tabs, touch-safe controls, and single-column card layout.
- Further mobile refinements are deferred until actual phone/table testing.

### Documentation Cleanup Pass

**Status:** In progress.

- README refreshed as the project-facing product/architecture guide.
- Changelog discipline clarified: track app/product/design-language changes, not every campaign content edit.
- Design Doctrine Addendum merged/archived after doctrine moved into README/content guide.
- File Architecture doc compressed into a quick placement reference.
- MASTER roadmap being converted from duplicate explainer into planning tracker.

---

## Current V1 Definition of Done

V1 can be considered ready when:

- The app opens locally without console errors.
- Valhalla loads through `data/campaigns/valhalla/index.js`.
- Mode labels are used rather than hardcoded campaign terms in core logic.
- Current loadout controls starting cockpit material.
- Selected location drives actors, ambient cast, scenes, moments, tables, and pressure.
- Search finds broad campaign material.
- Runtime pins temporarily promote found material during play.
- Table-facing delivery text is prioritized in detail panels.
- References and tables are available but not dominant.
- Functional smoke state is clean.
- Deferred markdown stubs are either created or explicitly accepted as non-blocking.
- The Valhalla hub/intermission loop can be run without OneNote.
- README, changelog, roadmap, guardrails, and support docs describe the current architecture accurately.
- The architecture still obviously supports Mothership, Erasure Protocol, corporate horror, ship ops, and fantasy crawl later.

---

## Near-Term Checklist

### Stabilization

- [x] Refresh README around V1 stabilization and phone/table use.
- [x] Clarify changelog scope and product-facing change discipline.
- [x] Merge/archive redundant design doctrine addendum.
- [x] Compress file architecture doc into quick placement reference.
- [x] Add Ambient Cast smoke-test coverage.
- [x] Add phone-aware responsive CSS.
- [ ] Patch coding guardrails to include `ambientCast` everywhere it belongs.
- [ ] Refresh content entry guide if Ambient Cast / location-flow language drift remains.
- [ ] Create deferred markdown reference stubs when useful.
- [ ] Run one full fake Valhalla table drill.
- [ ] Test phone cockpit layout on actual large-phone hardware.
- [ ] Capture real table-use friction as tickets.

### Likely Next Feature Candidates

Only prioritize these after table-drill or phone-use friction confirms the need:

- [ ] Actor-linked `answerMoments` / quick answers.
- [ ] Improved markdown/reference opening if deeper lore lookup becomes a real table pain.
- [ ] Renderer maintainability pass 2 if the next feature needs a cleaner seam.
- [ ] Arc switching design ticket, not implementation, if manual arc changes become costly.
- [ ] Collapsible/drawer rails or dedicated phone cockpit toggle if phone use proves important.

---

## Smoke Testing Policy

Run the smoke test after significant data, renderer, state, or import changes.

Current expected path:

```text
http://localhost:8000/tools/smoke-test_phase4.html
```

Current smoke test coverage includes:

- campaign data shape
- required fields
- status values
- duplicate IDs
- current loadout references
- tag format
- parent/child location relationships
- actor/location/thread/scene references
- Ambient Cast shape and relationship links
- standalone `fireableMoments`
- structured `spotlight.readAloud`
- location-linked tables
- tracker-based availability gates
- markdown reference availability
- runtime pin state exports
- runtime pin helper behavior
- renderer support for pinned cards and rail items
- detail-panel Pin/Unpin action support
- dashboard shell IDs
- basic runtime-only pin source scan

Current known non-blocker:

```text
Missing markdown reference files are documentation hygiene failures until markdown opening becomes a live dashboard feature.
```

---

## Documentation Ownership

### Root Docs

```text
README.md      → product overview, usage, architecture summary
CHANGELOG.md   → product/app/design-language changes
```

### Dev Docs

```text
dev/questforge_gm_dashboard_MASTER_ROADMAP.md       → planning tracker
dev/questforge_gm_dashboard_CODING_GUARDRAILS.md    → implementation rules
dev/content_entry_guide.md                          → content placement and data-entry rules
dev/scene_template_writing_guide_clean.md           → scene-writing craft guide
dev/file_architecture.md                            → quick placement map
dev/future_features.md                              → feature parking lot
```

Rule:

```text
README explains the product.
Roadmap tracks direction.
Guardrails protect implementation.
Content guide explains data entry.
Scene guide explains writing quality.
File architecture explains placement.
Future features holds the parking lot.
```

Avoid letting any one dev doc become a second README.

---

## Future Product Direction

The long-term direction is a standalone app and persistent campaign builder, but this remains deferred until the static MVP proves itself through real use.

Potential future capabilities:

- persistent campaign content
- persistent GM session state
- persistent loadout
- persistent pins
- tracker value editing
- dynamic campaign switching
- dynamic arc/session switching
- custom user story data
- import/export campaign packs
- backup/restore
- campaign pack authoring tools

Key future distinction:

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
- tables
- references
- lore markdown

Session state includes:

- selected campaign
- selected arc
- selected session
- current loadout
- pinned items
- tracker values
- temporary notes
- revealed/hidden state

Do not backfill persistent app behavior into the static MVP unless explicitly scoped.

---

## Explicit Non-Goals For Current Build

Do not drift into these without a deliberate ticket:

- backend
- database
- login
- cloud sync
- Foundry integration
- dice roller
- rules automation
- drag-and-drop editor
- full markdown parser
- dynamic campaign switching
- dynamic arc/session switching
- character sheet system
- tactical combat tracker
- database-first campaign manager

---

## Decision Log

### Intermission Layer

Valhalla Intermission should remain a reusable hub/intermission arc layer, not a cloned per-act structure. Arc-specific fallout can enter as scenes, references, or location-linked fireable moments.

### Global vs Arc

Global holds campaign-wide systems. Arc folders hold reachable current context packages. Importance alone does not make something global.

### Runtime Pins

Runtime pins are temporary cockpit promotion. They do not mutate static loadout data and do not persist.

### Markdown References

Markdown is for depth. JavaScript arrays are for fast table use. Missing markdown stubs are cleanup work unless the UI begins opening them directly.

### Mobile Support

Phone support is currently a responsive CSS pass for large mobile devices. It is not yet a dedicated mobile app or separate mobile mode.

### Changelog Discipline

The changelog tracks product-facing app changes, reusable data model changes, workflow decisions, architectural decisions, and design-language discoveries. Campaign content edits should be summarized only when they affect reusable structure or workflow.

---

## Final Architectural Rule

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
