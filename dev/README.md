# Questforge GM Dashboard — Docs Index

This folder contains the working project references for the Questforge GM Dashboard.

The dashboard is a local/static **GM cockpit / narration engine**. These docs exist to keep the project consistent as it grows from a personal Valhalla tool into a more flexible Questforge platform utility.

Core doctrine:

> People first. Places second. Arc pressure third. Mechanics in reference.

Live room questions:

> Where are we? Who is nearby? What do they say? How do I make this room feel alive?

The dashboard is not primarily a lore archive. It is a live GM cockpit for making people, places, and pressure immediately usable at the table.

---

## Current Project Stage

**Status:** V1 stabilization candidate / Sprint 2 bridge complete.

Completed at this stage:

- static browser dashboard
- Valhalla campaign data loading
- generic internal data types
- mode labels
- current loadout workflow
- location-aware live table flow
- standalone `fireableMoments`
- location-linked scenes, moments, and tables
- tracker availability gates
- campaign-wide search
- runtime-only Pin to Cockpit bridge
- pinned right-rail panel
- expanded smoke test
- renderer maintainability pass 1

Best next validation step:

- run a fake table drill and capture real friction.

---

## Core References

Read these first:

```text
questforge_gm_dashboard_MASTER_ROADMAP.md
questforge_gm_dashboard_CODING_GUARDRAILS.md
content_entry_guide.md
file_architecture.md
future_features.md
DESIGN_DOCTRINE_ADDENDUM.md
```

Recommended use:

| File | Purpose |
|---|---|
| `questforge_gm_dashboard_MASTER_ROADMAP.md` | Current project state, sprint status, architecture, and next direction |
| `questforge_gm_dashboard_CODING_GUARDRAILS.md` | Daily implementation rules and boundaries |
| `content_entry_guide.md` | How to add actors, locations, scenes, moments, tables, and references |
| `file_architecture.md` | Where files belong and how layers relate |
| `future_features.md` | Parking lot for later product/app ideas |
| `DESIGN_DOCTRINE_ADDENDUM.md` | Short design doctrine and live room questions |

---

## Current Architecture Summary

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

## Current Data Types

Use these internal names:

```text
actors
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

Avoid mode-specific internal names such as `npcs`, `zones`, `omens`, `ragnarok`, `panic`, or `certainty` in core app logic.

---

## Runtime Pinning Status

Runtime pinning is implemented as a bridge feature.

It is:

- runtime-only
- non-persistent
- search-friendly
- useful for promoting found content into the cockpit
- supplemental to current loadout and location-aware filtering

It is not:

- a persistent session store
- a `current_loadout.js` writer
- localStorage/sessionStorage state
- a drag-and-drop loadout editor

Future persistent pins belong to the standalone app/session-state epic.

---

## Renderer Status

Renderer maintainability pass 1 is complete.

Current renderer structure:

```text
js/core/renderers.js              // public export surface and remaining detail/panel renderers
js/core/renderers.helpers.js      // shared renderer helpers
js/core/renderers.cards.js        // cards and rail lists
```

`app.js` should continue importing renderers from:

```js
./core/renderers.js
```

Do not split more renderer files unless a future ticket needs it.

---

## Smoke Test

Run the smoke test through a local server:

```text
http://localhost:8000/smoke-test_phase4.html
```

Current smoke coverage includes:

- campaign shape
- required fields
- duplicate IDs
- current loadout IDs
- tag format
- relationship IDs
- standalone `fireableMoments`
- structured read-aloud lines
- availability gates
- location-linked tables
- markdown references
- runtime pin state
- renderer pin support
- dashboard shell IDs

Do not open the smoke test through `file://`; module imports and fetch checks may fail.

---

## Documentation Update Rule

When a feature moves from planned to implemented, update all relevant docs:

- roadmap
- guardrails, if architecture or rules changed
- content entry guide, if data shape changed
- file architecture, if file placement changed
- future features, if something leaves the parking lot
- changelog
- main project README

Do not leave implemented features described as “planned.”

---

## Current Best Next Steps

1. Run a fake table drill.
2. Note any place the GM still reaches for OneNote, memory, or raw files.
3. Turn real friction into tickets.
4. Prioritize actor-linked answer moments if NPC response lookup remains a pain point.
5. Only do renderer pass 2 if the next feature genuinely needs it.

---

## Product Direction Reminder

The likely long-term path is a standalone app and persistent campaign builder.

Important distinction:

```text
Campaign content ≠ Session state
```

Campaign content is the world. Session state is what is live, selected, pinned, changed, or revealed.

Keep the current static MVP clean and local-first until the table value is proven.
