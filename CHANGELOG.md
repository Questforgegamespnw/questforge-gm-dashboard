# Changelog

All notable project changes will be documented in this file.

This project is currently in **pre-alpha**. Version numbers are provisional until the first stable table-ready release.

## Current Stage Snapshot

**Current stage:** Sprint 2 bridge complete / V1 stabilization candidate / content architecture cleanup complete  
**Current working campaign:** Valhalla  
**Current app model:** Local static GM cockpit / narration engine  
**Persistence model:** Runtime-only UI state; no backend, no database, no browser storage, no `current_loadout.js` writes.

The app now supports the Valhalla hub/intermission flow with location-aware live content, standalone fireable moments, runtime pinning, broad campaign search, tracker-gated surfacing, Ambient Cast room-life support, grouped actor files, arc-local Valhalla Intermission content, split references, and the first renderer maintainability split.

---

## [0.4.0-prealpha] - 2026-06-03

### Stage

- Marks a major **content architecture cleanup and Ambient Cast implementation pass** after Sprint 2 runtime pinning.
- Valhalla Intermission content has been relocated out of the broad global layer and into the arc layer.
- The global layer has been narrowed toward always-on campaign systems, rules, placeholders, trackers, and reusable references.
- Ambient Cast is now a working generic data concept for location-linked room life.

### Added

- Added `ambientCast` as a generic dashboard data type.
- Added location-based Ambient Cast files under the Valhalla Intermission arc.
- Added initial Valhalla ambient cast groups:
  - Mead-Hall Einherjar
  - Golden Fields Fieldhands
  - Forge-Lanes Smiths
  - Threshold Waiters
  - Quiet Rows Keepers and Absent Names
  - Valkyrie Aerie Wings
- Added Ambient Cast support to campaign assembly through `campaignData.ambientCast`.
- Added Ambient Cast search/cockpit visibility.
- Added location-aware Ambient Cast surfacing so selected locations can answer:
  - who is nearby?
  - what do they say?
  - how do I make this room feel alive?
- Added Ambient Cast detail rendering fields:
  - names
  - voices
  - hook lines
  - interaction seeds
  - related actors
  - related threads
  - related locations
- Added visually distinct Ambient Cast hook-line delivery near the top of the detail panel.
- Added `renderSpokenLinesBlock()` in `renderers.helpers.js`.
- Reused the spoken-line helper for actor quick lines and Ambient Cast hook lines.
- Added grouped actor files for the Valhalla Intermission arc:
  - `aesir.js`
  - `einherjar.js`
  - `stewards.js`
  - `valkyries.js`
- Added a reusable arc template scaffold zip under `dev/`.
- Added an arc template structure that includes data files, actor folders, ambient cast folders, and a more complete arc-local library folder.
- Added `reference_yggdrasilmaed_counter` as a global reference.
- Added explicit documentation for the Yggdrasilmaed Counter as mission-use system exposure, distinct from ordinary Mead-Hall drinking.
- Added global-vs-arc placement doctrine to project docs.

### Changed

- Changed Valhalla Intermission actors from a flat/global actor collection into arc-local grouped files.
- Changed Valhalla Intermission ambient cast from global placeholders into arc-local location-based files.
- Changed most Valhalla hub/intermission content out of `global/` and into `arcs/valhalla-intermission/`.
- Changed `global/` expectations so empty files/folders can remain as placeholders for future truly global content.
- Changed the campaign assembly layer to import actor and ambient cast folders through their `index.js` files.
- Changed `data/campaigns/valhalla/index.js` to include arc fireable moments after the relocation.
- Changed references into a split model:
  - `global/references.js` for campaign-wide systems/rules/procedures.
  - `arcs/valhalla-intermission/references.js` for hub/intermission references.
- Changed global reference records so campaign-wide references no longer carry the intermission `arcId`.
- Changed Valhalla Intermission references so hub-specific references retain `arcId: "arc_valhalla_intermission"`.
- Changed README/project documentation to include Ambient Cast, new folder structure, global-vs-arc rules, and the `dev/` folder role.
- Changed the smoke-test/run path documentation to reflect `tools/smoke-test_phase4.html` when using the current project layout.
- Changed the design doctrine from only a hierarchy into a live table question set:
  - Where are we?
  - Who is nearby?
  - What do they say?
  - How do I make this room feel alive?

### Fixed

- Fixed broken campaign import bindings after moving actor and ambient cast files into folders.
- Fixed missing arc fireable moments in `campaignData.fireableMoments` after the Valhalla Intermission relocation.
- Fixed old arc actor import path:
  - from `./arcs/valhalla-intermission/actors.js`
  - to `./arcs/valhalla-intermission/actors/index.js`
- Fixed old arc ambient cast import path:
  - from `./arcs/valhalla-intermission/ambient_cast.js`
  - to `./arcs/valhalla-intermission/ambient_cast/index.js`
- Fixed Ambient Cast visibility so room-life data is no longer just inert campaign data.
- Fixed detail-panel usability for Ambient Cast by moving spoken deliverables higher and rendering them like table-facing lines.
- Fixed documentation drift around `docs/` by recognizing `dev/` as the builder-facing documentation/scaffold area.

### Verified

Verified during this pass:

```text
Website: opens and behaves as intended after campaign index repair.
Actor group split: data imports restored through arc actor index.
Ambient Cast: displays cleanly and is selectable.
Ambient Cast detail fields: render with useful table-facing hierarchy.
Spoken delivery helper: supports actor quick lines and ambient hook lines.
Reference split: global and intermission reference files generated separately.
```

Syntax checks were run during generated patch creation for touched JavaScript files where applicable.

### Known Gaps

- Smoke test should be updated or re-run after the latest `ambientCast` wiring and folder relocation if not already done locally.
- `ambientCast` should be added to smoke-test content type coverage if the working smoke test still only validates the older canonical list.
- Actor-linked `answerMoments` remain planned but not yet fully wired into actor data and UI.
- Ambient Cast is currently location-linked only; richer randomization or generated name-picking is deferred.
- Runtime pins are still intentionally not persistent.
- Persistent session state, exported sessions, and browser/app storage remain deferred to the standalone app/session-state epic.
- Dynamic arc/session switching is not implemented.
- No backend, database, login, or cloud sync.
- No live markdown parser in the dashboard UI.
- No Foundry/VTT integration.
- No dice roller or rules automation.

---

# Changelog

All notable project changes will be documented in this file.

This project is currently in **pre-alpha**. Version numbers are provisional until the first stable table-ready release.

## [0.2.0-prealpha] - 2026-06-02

### Added

- Added standalone `fireableMoments` as a campaign data collection instead of keeping all moments embedded directly on locations.
- Added location-aware right-rail support for **Scenes**, **Moments**, and **Tables** under the “Can Fire Here” panel.
- Added location-linked table surfacing so relevant event tables appear when a location is selected.
- Added tracker-based availability gates for scenes, threads, tables, and fireable moments.
- Added campaign-wide search behavior so search can find loaded campaign material beyond the current active loadout.
- Added structured `spotlight.readAloud` support for fireable moments using narration and speech line objects.
- Added table-facing moment spotlight rendering with read-aloud text prioritized at the top of the detail panel.
- Added scene “At Table” rendering so `playerFacing` text and `forwardPath.scriptedMoments` appear above deeper metadata.
- Added actor quick-line highlighting near presentation/voice data for faster NPC delivery.
- Added location description emphasis for establishing shots and sensory details.
- Added `presentation.approachBeat` support for locations as a second descriptive beat after the establishing shot.
- Added visual distinction for narration, spoken dialogue, scripted moment cue text, and scripted moment purpose text.
- Added planned feature ticket for promoting search results into active runtime context / current loadout.

### Changed

- Reframed top navigation as a campaign bookbag/library instead of the primary session-running surface.
- Shifted live session action toward the location-selected cockpit and right rail.
- Renamed the reference-facing concept toward **Lore / Rules** rather than a narrow rules-only reference shelf.
- Made the Session layer optional for the current live-flow model; current loadout plus location-linked fireables now handles most table-running needs.
- Improved detail-panel hierarchy so table-facing delivery text appears before reference/build metadata.
- Updated moment read-aloud data so NPC speech can be visually separated from GM narration.
- Updated scene display so scripted lines are easier to read as performance beats rather than dense list items.
- Updated location display so establishing descriptions read as table-facing prose instead of ordinary metadata.
- Updated actor display so quick lines sit directly after voice/presentation information.
- Updated the project roadmap to reflect the current V1 feature-complete candidate state.

### Fixed

- Fixed moment click behavior after `renderReadAloud()` was accidentally scoped inside `renderDetail()`.
- Fixed `renderEstablishingShot()` after the helper call was updated to pass both `establishingShot` and `approachBeat`.
- Fixed table visibility by wiring `getTablesForLocation()` into the fireables panel.
- Fixed detail-panel UX issues that made scripted scene lines hard to scan during play.

### Verified

Latest smoke test result:

```text
FAIL: 0
WARN: 0
PASS: 385
```

Validated systems include:

- Campaign data loads successfully.
- Required fields resolve.
- Current loadout IDs resolve.
- Parent/child locations resolve.
- Location-linked scenes resolve.
- Location-linked tables resolve.
- Fireable moments render through the right rail.
- Moment spotlight read-aloud lines render in the center panel.
- Tags follow kebab-case format.
- Markdown references resolve.

### Known Gaps

- Runtime “promote search result to active loadout” is planned but not implemented.
- Runtime pins will likely begin as client-side state before any persisted `currentLoadout.pinned` shape is added.
- Actor-linked `answerMoments` are planned but not yet fully wired into `actors.js` and the renderer.
- Expanded markdown answer banks should be merged into canonical actor markdown files rather than kept as permanent staging files.
- `renderers.js` is becoming large and may need a later maintainability split once behavior stabilizes.
- Current campaign switching is still static/manual.
- Dynamic arc/session switching is not implemented.
- No backend, database, login, or cloud sync.
- No live markdown parser in the dashboard UI.
- No Foundry/VTT integration.
- No dice roller or rules automation.

## [0.1.0-prealpha] - 2026-06-02

### Added

- Created the core QuestForge GM Dashboard architecture as a static HTML/CSS/JavaScript module app.
- Added generic dashboard data types:
  - `actors`
  - `locations`
  - `factions`
  - `threads`
  - `trackers`
  - `scenes`
  - `tables`
  - `references`
  - `assets`
- Added mode registry support.
- Added initial mode files for:
  - QuestForge default
  - Valhalla
  - Mothership
  - Erasure Protocol
- Added current campaign import path for Valhalla.
- Added `current_loadout.js` workflow for active session material.
- Added active data loading through `getActiveData()`.
- Added generic search through dashboard content fields.
- Added card rendering for generic dashboard items.
- Added rail rendering for active actors and active locations.
- Added selected detail rendering in the center panel.
- Added collapsible selected detail behavior while preserving selected location context.
- Added right-rail pressure panel for threads and trackers.
- Added right-rail “Can Fire Here” panel for location-specific scenes and fireable moments.
- Added moment spotlight rendering for compact, table-ready location moments.
- Added parent/child location support for the Valhalla hub.
- Added smoke test page for validating campaign data integrity.

### Added — Valhalla Content

- Added Valhalla global actors:
  - Heimdall
  - Sven
  - Eira Goldwind
  - Brokk Ironvein
  - Odin
  - Svinhild
  - Ryndis Ironwing
  - Eldri Softsky
  - Thora Stormcall
  - Kara Veilfeather
  - Sylva Emberwing
- Added Valhalla global locations:
  - Valhalla Hub
  - Bifrost Platform
  - Heimdall’s Threshold
  - The Mead-Hall
  - The Golden Fields
  - The Forge-Lanes
  - The Quiet Rows
  - The Valkyrie Aerie
  - Training Grounds
- Added Valhalla factions:
  - Einherjar
  - Valkyries
- Added Valhalla threads, including:
  - Valhalla System Failure Chain
  - Returned Incomplete
  - Yggdrasil Root Sickness
  - Valkyrie Disagreement
  - Heimdall Knows More Than He Says
  - Names Changing in the Quiet Rows
  - Dark Valkyrie Foreshadow
  - Borrowed Souls
  - Return Is Not Guaranteed
- Added Ragnarok Meter tracker.
- Added Valhalla scene spine for post-mission hub flow.
- Added Valhalla event tables for Mead-Hall, Golden Fields, Forge-Lanes, and Quiet Rows.
- Added Valhalla reference cards for return loop, hub failure textures, and system/rules references.
- Added location-specific `availableScenes` for hub locations.
- Added location-specific `fireableMoments` across the Valhalla hub.
- Added Aerie-focused NPC presence for Valkyrie interactions.
- Added initial answer-bank markdown expansions for Valkyries and stewards as staging content.
- Added deeper Sven tour-guide answer bank as staging content.

### Changed

- Renamed and standardized internal concepts around generic data names instead of mode-specific terms.
- Clarified that core app code should remain game-agnostic.
- Moved rendering responsibilities into `renderers.js`.
- Kept orchestration and state coordination in `app.js`.
- Added `clearSelectedItem()` behavior so selected item detail can collapse without clearing the current location context.
- Updated location behavior so selecting a parent hub location reveals child locations.
- Updated selected location behavior so local actors, scenes, moments, and pressure can be surfaced per location.
- Merged temporary systems addition files into the main global data files:
  - `references.systems_additions.js` → `references.js`
  - `threads.systems_additions.js` → `threads.js`
  - `trackers.systems_additions.js` → `trackers.js`
- Consolidated duplicate Ragnarok tracker content into a single active tracker.

### Fixed

- Fixed detail panel collapse behavior after renderer refactor.
- Fixed selected location context being cleared when only the selected detail should collapse.
- Fixed scene/moment surfacing by wiring location-specific “Can Fire Here” data into the right rail.
- Fixed missing `clearSelectedItem` app import during refactor.
- Fixed unresolved Training Grounds references by restoring parent/child location structure and ensuring location IDs resolve.
- Fixed duplicate tracker risk by merging to one `tracker_ragnarok_meter`.
- Fixed smoke test warnings related to parent/child location detection.

### Verified

Latest smoke test result:

```text
FAIL: 0
WARN: 0
PASS: 385
```

Validated data counts:

```text
actors: 11
locations: 9
factions: 2
threads: 9
trackers: 1
scenes: 18
tables: 4
references: 13
```

Validated systems:

- No duplicate IDs within content types.
- No duplicate IDs across all content types.
- Required fields present.
- Current loadout IDs resolved.
- Tags follow kebab-case format.
- Parent and child locations resolve.
- Location `keyActors`, `actorsPresent`, `relatedThreads`, and `availableScenes` resolve.
- Fireable moments include required IDs, titles, triggers, compact text, and spotlight content.
- Actor current locations resolve.
- Thread related locations resolve.
- Scene involved locations resolve.
- Markdown references resolve.

### Known Gaps

- Actor-linked `answerMoments` are planned but not yet fully wired into `actors.js` and the renderer.
- Expanded markdown answer banks should be merged into the canonical actor markdown files rather than kept as permanent staging files.
- Current campaign switching is still static/manual.
- Dynamic arc/session switching is not implemented.
- No backend, database, login, or cloud sync.
- No live markdown parser in the dashboard UI.
- No Foundry/VTT integration.
- No dice roller or rules automation.

## [0.0.0-prealpha] - Initial Concept

### Added

- Established the project goal: a fast GM cockpit / narration engine for tabletop sessions.
- Defined the core doctrine: people first, places second, arc pressure third, mechanics in reference.
- Identified Valhalla as the first working campaign mode.
- Planned long-term support for additional QuestForge modes.
