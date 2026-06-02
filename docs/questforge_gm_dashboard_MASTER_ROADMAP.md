# Questforge GM Dashboard — MASTER Roadmap and File Architecture

## Purpose

Build a fast, lightweight, static HTML GM dashboard that supports live tabletop play across Valhalla and future Questforge game modes.

This dashboard is a **GM cockpit / narration engine**.

It is not:

- A VTT
- A dice roller
- A rules resolver
- A character sheet replacement
- A database-first campaign manager
- A full lore archive

Its job is to surface the most useful at-table information faster than OneNote:

1. People first.
2. Places second.
3. Arc / story pressure third.
4. Mechanics tucked away as reference.

The dashboard should help the GM answer quickly:

- Who is here?
- What are they like?
- What do they want?
- What do they know?
- What does this place feel like?
- What can the players interact with?
- What pressure is moving underneath the scene?
- What thread, omen, or consequence should surface next?

---

# 1. North Star

The dashboard should help run RP-heavy sessions by making delivery information immediately visible.

## Core Doctrine

> People first. Place second. Arc third. Mechanics in reference.

This must remain true across:

- Valhalla
- Mothership
- Erasure Protocol
- Corporate horror
- Ship ops
- Fantasy crawl
- Other Questforge campaign modes

## Design Priority

The dashboard is not organized around dice systems.

It is organized around GM delivery:

| Priority | Dashboard Layer | Purpose |
|---|---|---|
| 1 | Actors / People | Instantly portray NPCs, contacts, threats, allies, rivals |
| 2 | Locations / Places | Describe current scene, vibe, danger, opportunities |
| 3 | Scenes / Beats / Threads | Keep story pressure and next movement visible |
| 4 | Trackers | Show clocks, faction pressure, corruption, certainty, world state |
| 5 | References | Keep procedures and rules available but not dominant |

---

# 2. Final Naming Standard

Use **generic internal names** so the same dashboard can support many games.

Avoid locking the engine to Valhalla terms like `npcs`, `zones`, `omens`, or `ragnarok`.

## Internal Data Types

Use these names across the app:

| Internal Type | Meaning |
|---|---|
| `actors` | NPCs, contacts, threats, rivals, survivors, gods, patrons, hirelings |
| `locations` | Places, zones, rooms, districts, station nodes, routes, ship compartments |
| `factions` | Groups, companies, cults, houses, guilds, crews, agencies |
| `threads` | Mysteries, unresolved hooks, promises, omens, signals, consequences |
| `trackers` | Clocks, pressure meters, faction notice, panic, certainty, corruption |
| `scenes` | Session beats, encounters, scripted moments, mission events, next steps |
| `tables` | Random tables, event tables, prompt tables |
| `references` | Rules summaries, procedures, mode-specific cheat sheets |
| `assets` | Images, icons, portraits, maps, mood boards |

## Legacy Sprint Names to Avoid Going Forward

| Earlier Name | Final Name |
|---|---|
| `npcs.js` | `actors.js` |
| `places.js` | `locations.js` |
| `session_beats.js` | `scenes.js` |
| `arcs.js` | `arc_config.js` inside each arc folder |
| `dashboard_config.js` | `campaign_config.js` or mode config depending on scope |

---

# 3. Mode Label System

The app uses generic internal data types, but each game mode can rename them in the UI.

## Valhalla Mode Labels

```js
export const valhallaMode = {
  id: "valhalla",
  label: "Valhalla",

  navLabels: {
    actors: "NPCs / Legends",
    locations: "Zones",
    factions: "Factions",
    threads: "Omens / Threads",
    trackers: "Ragnarok / Flags",
    scenes: "Session Beats",
    references: "Rules Ref",
    tables: "Tables"
  }
};
```

## Mothership Mode Labels

```js
export const mothershipMode = {
  id: "mothership",
  label: "Mothership",

  navLabels: {
    actors: "Contacts / Threats",
    locations: "Station Nodes",
    factions: "Corporations / Crews",
    threads: "Mysteries / Signals",
    trackers: "Panic / Corporate Heat",
    scenes: "Job Beats",
    references: "Rules Ref",
    tables: "Tables"
  }
};
```

## Erasure Protocol Mode Labels

```js
export const erasureProtocolMode = {
  id: "erasure-protocol",
  label: "Erasure Protocol",

  navLabels: {
    actors: "Survivors / Hostiles",
    locations: "Districts / Routes",
    factions: "Groups",
    threads: "Protocol Pressure",
    trackers: "Certainty / Hub State",
    scenes: "Mission Beats",
    references: "Procedures",
    tables: "Tables"
  }
};
```

This lets one app support many table modes without changing the underlying architecture.

---

# 4. Final File Architecture

This is the architecture to build toward during Sprint 1.

It is denser than the original shell, but it prevents redesign later.

```text
questforge-gm-dashboard/
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   │
│   ├── core/
│   │   ├── data-loader.js
│   │   ├── filters.js
│   │   ├── renderers.js
│   │   ├── state.js
│   │   └── utils.js
│   │
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
│   │
│   └── campaigns/
│       └── valhalla/
│           ├── campaign_config.js
│           ├── current_loadout.js
│           ├── index.js
│           │
│           ├── global/
│           │   ├── actors.js
│           │   ├── locations.js
│           │   ├── factions.js
│           │   ├── threads.js
│           │   ├── trackers.js
│           │   ├── scenes.js
│           │   ├── tables.js
│           │   └── references.js
│           │
│           ├── arcs/
│           │   ├── valhalla-intermission/
│           │   │   ├── arc_config.js
│           │   │   ├── actors.js
│           │   │   ├── locations.js
│           │   │   ├── factions.js
│           │   │   ├── threads.js
│           │   │   ├── trackers.js
│           │   │   ├── scenes.js
│           │   │   ├── tables.js
│           │   │   ├── references.js
│           │   │   └── library/
│           │   │       ├── hub/
│           │   │       ├── actors/
│           │   │       ├── locations/
│           │   │       ├── factions/
│           │   │       └── lore/
│           │   │
│           │   ├── ashen-root/
│           │   │   ├── arc_config.js
│           │   │   ├── actors.js
│           │   │   ├── locations.js
│           │   │   ├── factions.js
│           │   │   ├── threads.js
│           │   │   ├── trackers.js
│           │   │   ├── scenes.js
│           │   │   ├── tables.js
│           │   │   ├── references.js
│           │   │   └── library/
│           │   │
│           │   └── archive/
│           │
│           ├── sessions/
│           │   ├── next-session/
│           │   │   ├── session_config.js
│           │   │   ├── scenes.js
│           │   │   ├── active_threads.js
│           │   │   ├── active_notes.md
│           │   │   └── prep.md
│           │   │
│           │   └── archive/
│           │
│           ├── library/
│           │   ├── hub/
│           │   ├── actors/
│           │   ├── locations/
│           │   ├── factions/
│           │   ├── lore/
│           │   └── rules/
│           │
│           └── assets/
│               ├── icons/
│               ├── portraits/
│               ├── maps/
│               └── mood/
│
├── docs/
│   ├── MASTER_ROADMAP.md
│   ├── sprint_plan.md
│   ├── roadmap.md
│   ├── content_entry_guide.md
│   ├── data_schema.md
│   ├── file_architecture.md
│   └── future_features.md
│
└── archive/
```

---

# 5. Folder Purpose Guide

## `js/core/`

Generic app logic. It should not know or care whether the current mode is Valhalla, Mothership, or Erasure Protocol.

Use for:

- Rendering cards
- Filtering/search
- State handling
- Loading campaign data
- Utility functions
- Shared UI behavior

## `js/modes/`

Mode-specific labels, display priorities, optional field handling, and UI names.

Use for:

- Valhalla labels
- Mothership labels
- Erasure Protocol labels
- Mode-specific nav order
- Optional display logic

Do not put campaign lore here.

## `data/shared/`

Universal data templates, tags, schemas, and reference categories.

Use for:

- Shared actor template
- Shared location template
- Shared scene template
- Tag conventions
- Field notes
- Validation helpers later

## `data/campaigns/<campaign>/`

Campaign-specific operational data and lore.

Each campaign should have:

- `campaign_config.js`
- `current_loadout.js`
- `index.js`
- `global/`
- `arcs/`
- `sessions/`
- `library/`
- `assets/`

## `global/`

Campaign-wide material that can recur across multiple arcs.

Examples in Valhalla:

- Heimdall
- Sven
- Mead-Hall
- Bifrost Platform
- Valkyrie Aerie
- Ragnarok Meter
- Valhalla return loop

## `arcs/<arc-name>/`

Arc-specific material.

Examples:

- Ashen Root NPCs
- Ashen Root locations
- Arc-specific factions
- Arc-specific scenes
- Arc-specific threads
- Arc-specific tables

## `sessions/<session-name>/`

Tonight’s prep and temporary active material.

Use for:

- Tonight’s opening beat
- Likely next scenes
- Active reminders
- Session stingers
- One-off notes
- Temporary active thread list

## `library/`

Longform markdown canon.

Use for:

- Location dossiers
- NPC backstories
- Hub system notes
- Lore articles
- Rule notes
- Scene prep
- Full event table writeups

The library is for depth.  
The dashboard arrays are for speed.

---

# 6. Global vs Arc vs Session Rule

This is the most important content placement rule.

## Put something in `global/` if:

It can recur across the whole campaign.

Examples:

```text
Heimdall
Sven
The Mead-Hall
The Bifrost Platform
The Valkyrie Aerie
Ragnarok Meter
Return Loop Reference
```

## Put something in `arcs/<arc-name>/` if:

It belongs mainly to one campaign arc or adventure package.

Examples:

```text
Ashen Root cultists
Ashen Root village locations
Arc-specific omens
Arc-specific clue chains
Arc-specific faction pressure
```

## Put something in `sessions/<session-name>/` if:

It matters tonight and may not matter later.

Examples:

```text
Opening scene
Session stinger
Temporary player choice reminders
Tonight’s likely NPCs
Tonight’s active location list
One-off prep notes
```

## Do not move files around to mark them current.

Use `current_loadout.js`.

---

# 7. Current Loadout System

The current loadout file controls what the dashboard spotlights as active.

Path:

```text
data/campaigns/valhalla/current_loadout.js
```

Example:

```js
export const currentLoadout = {
  modeId: "valhalla",
  campaignId: "valhalla",
  arcId: "valhalla-intermission",
  sessionId: "next-session",

  activeActors: [
    "actor_heimdall",
    "actor_sven",
    "actor_svinhild"
  ],

  activeLocations: [
    "location_valhalla_bifrost_platform",
    "location_valhalla_heimdalls_threshold",
    "location_valhalla_mead_hall",
    "location_valhalla_valkyrie_aerie"
  ],

  activeFactions: [
    "faction_einherjar",
    "faction_valkyries"
  ],

  activeScenes: [
    "scene_valhalla_bifrost_return",
    "scene_valhalla_heimdall_acknowledgment",
    "scene_valhalla_choose_hub_location"
  ],

  activeThreads: [
    "thread_returned_incomplete",
    "thread_yggdrasil_root_sickness",
    "thread_heimdall_knows_more"
  ],

  activeTrackers: [
    "tracker_ragnarok_meter"
  ],

  activeTables: [
    "table_mead_hall_events",
    "table_golden_fields_events"
  ]
};
```

## Why This Matters

This allows the project to contain lots of material without cluttering the live dashboard.

Nothing needs to be deleted, moved, or renamed just because it is not active tonight.

---

# 8. Campaign Index System

Each campaign should have an `index.js` that merges global, arc, and session-level data into one export for the dashboard.

Path:

```text
data/campaigns/valhalla/index.js
```

Example:

```js
import { campaignConfig } from "./campaign_config.js";
import { currentLoadout } from "./current_loadout.js";

import { actors as globalActors } from "./global/actors.js";
import { locations as globalLocations } from "./global/locations.js";
import { factions as globalFactions } from "./global/factions.js";
import { threads as globalThreads } from "./global/threads.js";
import { trackers as globalTrackers } from "./global/trackers.js";
import { scenes as globalScenes } from "./global/scenes.js";
import { tables as globalTables } from "./global/tables.js";
import { references as globalReferences } from "./global/references.js";

import { actors as arcActors } from "./arcs/valhalla-intermission/actors.js";
import { locations as arcLocations } from "./arcs/valhalla-intermission/locations.js";
import { factions as arcFactions } from "./arcs/valhalla-intermission/factions.js";
import { threads as arcThreads } from "./arcs/valhalla-intermission/threads.js";
import { trackers as arcTrackers } from "./arcs/valhalla-intermission/trackers.js";
import { scenes as arcScenes } from "./arcs/valhalla-intermission/scenes.js";
import { tables as arcTables } from "./arcs/valhalla-intermission/tables.js";
import { references as arcReferences } from "./arcs/valhalla-intermission/references.js";

export const campaignData = {
  config: campaignConfig,
  currentLoadout,

  actors: [...globalActors, ...arcActors],
  locations: [...globalLocations, ...arcLocations],
  factions: [...globalFactions, ...arcFactions],
  threads: [...globalThreads, ...arcThreads],
  trackers: [...globalTrackers, ...arcTrackers],
  scenes: [...globalScenes, ...arcScenes],
  tables: [...globalTables, ...arcTables],
  references: [...globalReferences, ...arcReferences]
};
```

## Sprint Note

For Sprint 1, this can be manually wired to the current Valhalla arc.

Dynamic arc switching can wait.

---

# 9. Core Data Shapes

These are the canonical dashboard-facing shapes.

Keep them short. If a field becomes long lore, move it into markdown.

---

## 9.1 Actor Shape

```js
export const actors = [
  {
    id: "actor_unique_id",
    name: "Actor Name",
    role: "Role, title, or function",
    group: "Faction, community, crew, house, company, etc.",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",
    currentLocation: "location_id or likely location",
    currentState: "What condition, mood, or situation they are currently in.",
    sticky: true,

    presentation: {
      vibe: "Overall emotional read.",
      physicality: "Posture, movement, expression, body language.",
      voice: "Tone, cadence, rhythm, speech pattern.",
      sceneImpact: "How the room changes when they enter or speak.",
      visualAnchor: "One memorable visual detail, optional."
    },

    motivation: {
      wants: "What they want right now.",
      fears: "What they are trying to avoid.",
      leverage: "What gives them power, utility, or vulnerability."
    },

    knowledge: {
      knows: [],
      secrets: []
    },

    quickLines: [
      "One short line or paraphraseable delivery cue."
    ],

    relationships: [],
    tags: [],
    gmNotes: ""
  }
];
```

### Actor Presentation Rule

Use `physicality` for behavioral presence rather than static physical description.

Prioritize:

- Posture
- Movement
- Expression
- Gesture
- Stillness
- Tension
- Proximity
- Eye contact
- How the NPC carries themselves

Avoid defaulting to:

- Height
- Eye color
- Hair color
- Ancestry
- Attractiveness
- Clothing

Unless those details actively affect the scene.

---

## 9.2 Location Shape

```js
export const locations = [
  {
    id: "location_unique_id",
    name: "Location Name",
    type: "settlement / district / room / wilderness / route / node",
    region: "Larger region",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",
    currentState: "How this place currently stands: normal, locked down, ruined, crowded, watched, etc.",

    escalation: {
      stable: "How this place feels when the local system is functioning normally.",
      strain: "Early signs of trouble, corruption, pressure, or instability.",
      fracture: "Visible instability or changed behavior.",
      break: "What this place becomes when the system is near collapse."
    },

    presentation: {
      establishingShot: "A one-paragraph camera-view description of what the players see when the scene opens.",
      vibe: "Immediate emotional tone.",
      sensory: [
        "Sound, smell, texture, temperature, light, motion, etc.",
        "A second quick sensory detail.",
        "A third quick sensory detail."
      ]
    },

    function: "What this place does in the story or world.",
    pressure: "What makes this place tense right now.",

    opportunities: [],
    dangers: [],

    connectedLocations: [],
    factionsPresent: [],
    actorsPresent: [],

    eventTable: "table_id_if_relevant",
    reference: "optional_markdown_reference_path",

    tags: [],
    gmNotes: ""
  }
];
```

### Escalation Note

`escalation` is optional.

Use it only when a location changes through:

- Pressure meter
- Corruption track
- Siege
- Haunting
- Faction war
- Season
- World-state change
- Protocol pressure
- Panic / lockdown / contamination

If a location does not need escalation, omit the whole block.

---

## 9.3 Faction Shape

```js
export const factions = [
  {
    id: "faction_unique_id",
    name: "Faction Name",
    type: "guild / kingdom / cult / family / company / order",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",

    publicFace: "How people generally see them.",
    trueNature: "What is really going on, if different.",
    vibe: "Emotional and aesthetic identity.",

    wants: "What the faction wants right now.",
    fears: "What they are trying to prevent.",
    methods: "How they usually operate.",

    resources: [],

    relationships: [
      {
        target: "other_faction_id",
        label: "ally / rival / enemy / dependent",
        note: "Short relationship note."
      }
    ],

    notice: {
      score: 0,
      label: "unknown",
      note: "How aware or interested they are in the party."
    },

    tags: [],
    gmNotes: ""
  }
];
```

---

## 9.4 Scene Shape

Scenes are the final internal name for session beats.

```js
export const scenes = [
  {
    id: "scene_unique_id",
    title: "Scene / Beat Title",
    session: "Session name or number",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "available",

    type: "intro / social / clue / choice / reveal / complication / combat / travel / downtime / faction-move / consequence / fallout",
    priority: "high / medium / low",

    trigger: "When this scene becomes relevant or should enter play.",
    summary: "Short GM-facing explanation of what this scene is for.",

    playerFacing: "What the players perceive, hear, witness, or are directly told.",
    gmTruth: "What is actually happening behind the curtain.",

    involvedActors: [],
    involvedLocations: [],
    involvedFactions: [],

    clues: [],
    outcomes: [],

    forwardPath: {
      upNext: [],
      branches: [
        {
          condition: "Player choice, failure state, success state, or table condition.",
          nextScene: "scene_id_or_scene_name",
          note: "What changes because this branch happened."
        }
      ],
      scriptedMoments: [
        {
          timing: "When this line, reveal, entrance, interruption, or action should happen.",
          speaker: "actor_id_or_speaker_name",
          line: "Important scripted line or paraphraseable dialogue.",
          purpose: "Why this moment matters and what it should accomplish."
        }
      ]
    },

    pressure: "What tension, risk, clock, faction move, or emotional weight this scene adds.",
    runNote: "Quick reminder for how to run this scene at the table.",

    tags: [],
    gmNotes: ""
  }
];
```

---

## 9.5 Thread Shape

Threads keep unresolved continuity visible.

```js
export const threads = [
  {
    id: "thread_unique_id",
    title: "Thread Title",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",

    type: "mystery / promise / omen / consequence / relationship / clue-chain / threat",
    summary: "What this thread is about.",
    currentState: "Where this thread stands right now.",
    nextPressure: "How this may surface next.",

    relatedActors: [],
    relatedLocations: [],
    relatedFactions: [],
    relatedScenes: [],

    tags: [],
    gmNotes: ""
  }
];
```

---

## 9.6 Tracker Shape

Trackers represent pressure, clocks, relationship notice, panic, certainty, corruption, or other changing state.

```js
export const trackers = [
  {
    id: "tracker_unique_id",
    name: "Tracker Name",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",

    type: "clock / meter / faction-notice / corruption / panic / certainty / relationship",
    value: 0,
    min: 0,
    max: 10,

    label: "Current readable state.",
    summary: "What this tracker measures.",
    effects: [
      {
        range: "0-3",
        label: "Stable",
        note: "What this range means."
      },
      {
        range: "4-6",
        label: "Strain",
        note: "What this range means."
      },
      {
        range: "7-9",
        label: "Fracture",
        note: "What this range means."
      },
      {
        range: "10",
        label: "Break",
        note: "What this range means."
      }
    ],

    tags: [],
    gmNotes: ""
  }
];
```

---

## 9.7 Table Shape

```js
export const tables = [
  {
    id: "table_unique_id",
    name: "Table Name",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",

    die: "1d8",
    category: "event / encounter / omen / loot / complication",
    relatedLocation: "location_id_if_relevant",

    entries: [
      "Entry one.",
      "Entry two."
    ],

    tags: [],
    gmNotes: ""
  }
];
```

---

## 9.8 Reference Shape

```js
export const references = [
  {
    id: "reference_unique_id",
    label: "Reference Label",
    modeId: "valhalla",
    campaignId: "valhalla",
    arcId: "valhalla-intermission",
    status: "active",

    category: "procedure / rules / table / reminder / mode-specific",
    summary: "Short reference summary.",
    details: [
      "Step or reminder one.",
      "Step or reminder two."
    ],

    tags: [],
    gmNotes: ""
  }
];
```

---

# 10. Valhalla Hub Integration

The Valhalla hub content should be placed like this.

## Full Markdown Library

Path:

```text
data/campaigns/valhalla/library/hub/
```

Files:

```text
00_hub_system_overview.md
01_bifrost_platform.md
02_heimdalls_threshold.md
03_mead_hall.md
04_golden_fields.md
05_forge_lanes.md
06_quiet_rows.md
07_valkyrie_aerie.md
09_ragnarok_escalation_profiles.md
```

## Critical Dashboard Arrays

Because the hub is recurring campaign-wide material, put compact versions in:

```text
data/campaigns/valhalla/global/
```

Recommended files:

```text
locations.js
scenes.js
tables.js
threads.js
trackers.js
references.js
```

## Valhalla Hub Core Chain

Keep this as a reference / thread / tracker note:

```text
Root Corruption →
Soul destabilization →
Valkyries overworked →
Retrieval failures →
Quiet Rows degrade →
Valhalla destabilizes →
Ragnarok pressure increases
```

## Valhalla Location Failure Textures

Use these to keep hub locations distinct:

| Location | Failure Texture |
|---|---|
| Bifrost Platform | Return becomes unstable |
| Heimdall’s Threshold | Certainty becomes silence |
| Mead-Hall | Warmth becomes hollow |
| Golden Fields | Natural order becomes contaminated |
| Forge-Lanes | Creation becomes weaponized |
| Quiet Rows | Memory becomes unreliable |
| Valkyrie Aerie | Duty becomes moral fracture |

---

# 11. Dashboard Layout

## Primary Cockpit Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ Top Bar: Mode | Campaign | Arc | Session | Search             │
├───────────────────────┬──────────────────────────────────────┤
│ Left Rail             │ Center Panel                         │
│ Sticky Actors         │ Current Location / Selected Detail    │
│ Active Actors         │ Scene Tools / Cards                   │
├───────────────────────┼──────────────────────────────────────┤
│ Right Rail            │ Arc / Session Pressure                │
│ Scenes                │ Threads / Trackers / Stingers         │
└───────────────────────┴──────────────────────────────────────┘
```

## Top Tabs

Recommended first tabs:

```text
Cockpit | Actors | Locations | Threads | Session | Reference
```

## Cockpit

Main running view.

Shows:

- Sticky actors
- Current location
- Active scenes
- Threads
- Trackers
- Immediate next options

## Actors

Full actor roster.

Use when players seek someone unexpected.

## Locations

All current locations/zones/nodes.

Use when players wander or change scenes.

## Threads

Mysteries, promises, consequences, omens, and relationship changes.

## Session

Main beats, next scenes, mission options, and stingers.

## Reference

Rules, procedures, tables, and mode-specific reminders.

---

# 12. Sprint 1 Build Plan

Sprint 1 should build the final architecture, but only implement enough behavior to run Valhalla.

## Sprint Goal

By the end of the sprint, the dashboard should:

- Open locally in a browser.
- Load Valhalla campaign data.
- Display actors, locations, scenes, threads, trackers, and references.
- Use `current_loadout.js` to identify active content.
- Let the GM find active actors and locations faster than OneNote.
- Run a Valhalla hub / intermission session.

## Day 1 — File Architecture and Rename Pass

Tasks:

- Create the final folder structure.
- Move old files into new names:
  - `npcs.js` → `global/actors.js`
  - `places.js` → `global/locations.js`
  - `session_beats.js` → `global/scenes.js`
  - `arcs.js` → `arcs/valhalla-intermission/arc_config.js` or a starter arc config
  - `dashboard_config.js` → `campaign_config.js`
- Create:
  - `current_loadout.js`
  - `index.js`
  - `global/threads.js`
  - `global/trackers.js`
  - `global/tables.js`
  - `global/references.js`
- Create `js/core/` and move generic JS files there.
- Create `js/modes/` and add `valhalla.mode.js`.

Win condition:

- Folder structure is final enough to safely add content.

## Day 2 — Data Loading

Tasks:

- Update `app.js` to import from `data/campaigns/valhalla/index.js`.
- Render generic data types:
  - actors
  - locations
  - scenes
  - threads
  - trackers
  - references
- Use mode labels from `js/modes/valhalla.mode.js`.

Win condition:

- Editing a Valhalla actor/location file changes the dashboard.

## Day 3 — Current Loadout Filtering

Tasks:

- Make active content display based on `current_loadout.js`.
- Add active actor rail.
- Add active location panel.
- Add active scene list.
- Add active threads/trackers.

Win condition:

- Current session material is visible without deleting inactive content.

## Day 4 — Valhalla Hub Content Load

Tasks:

- Add Valhalla hub markdown files to `library/hub/`.
- Add critical hub locations to `global/locations.js`.
- Add post-mission scenes to `global/scenes.js`.
- Add hub event tables to `global/tables.js`.
- Add Ragnarok Meter to `global/trackers.js`.
- Add hub system chain to `global/references.js` or `global/threads.js`.

Win condition:

- Dashboard can run the Valhalla post-mission hub loop.

## Day 5 — Search and Navigation

Tasks:

- Add search across:
  - names
  - tags
  - vibe
  - summary
  - current state
  - pressure
- Add simple filters:
  - active
  - tag
  - location
  - faction
  - status
- Add click-to-select detail panel.

Win condition:

- GM can find Sven, Mead-Hall, or Bifrost return in under 5 seconds.

## Day 6 — Table Simulation

Run fake GM drills.

Test questions:

- Who is currently active?
- Where are the players?
- What does this place look like?
- What is the current pressure?
- What scene comes next?
- What thread should not be forgotten?
- What tracker matters right now?
- Where is the deeper lore if needed?

Win condition:

- No answer requires digging through a long note.

## Day 7 — Polish Only

Tasks:

- Improve spacing.
- Improve contrast.
- Improve font sizes.
- Improve mobile stacking.
- Fix labels.
- Fix obvious field display issues.
- Do not add major new features.

Win condition:

- The dashboard feels calm to use.

---

# 13. First Valhalla Content Targets

## Actors

Start with 8–12.

Suggested:

- Heimdall
- Sven
- Svinhild
- Brokk Ironvein
- Eira Goldwind
- Kara Veilfeather
- Ryndis Ironwing
- Eldri Softsky
- Thora Stormcall
- Sylva Emberwing

## Locations

Start with 7.

- Bifrost Platform
- Heimdall’s Threshold
- Mead-Hall
- Golden Fields
- Forge-Lanes
- Quiet Rows
- Valkyrie Aerie

## Threads

Start with 5–7.

- Returned incomplete
- Yggdrasil root sickness
- Valkyrie disagreement
- Heimdall knows more than he says
- Names changing in Quiet Rows
- Corewright resonance in the Forge
- Dark Valkyrie foreshadow

## Trackers

Start with 1–3.

- Ragnarok Meter
- Valkyrie Favor, optional
- Faction/relationship notice, optional

## Scenes

Start with post-mission hub flow.

- Bifrost Return
- Heimdall Acknowledgment
- Immediate Hub Reactions
- Choose Hub Location
- Mead-Hall Decompression
- Golden Fields Warning
- Forge-Lanes Recognition
- Quiet Rows Foreshadowing
- Valkyrie Aerie Briefing
- Retrieval Failure Incident
- Mission Selection

---

# 14. Markdown Library vs Dashboard Arrays

## Markdown Library

Use markdown for:

- Longform lore
- Full location dossiers
- Full NPC writeups
- Full scene prep
- Full tables
- Rule explanations
- Worldbuilding notes
- GM design notes

Markdown can be verbose.

## Dashboard Arrays

Use JS arrays for:

- Critical at-table data
- Fast lookups
- Cards
- Search/filter
- Active session display

Arrays should be short.

## Rule

If a dashboard field becomes a lore paragraph, move that detail into markdown and link it with:

```js
reference: "library/hub/03_mead_hall.md"
```

---

# 15. Cross-Game Expansion Plan

Once Valhalla works, future campaigns should follow this same structure.

## Example Future Campaigns

```text
data/campaigns/
├── valhalla/
├── mothership/
├── erasure-protocol/
├── corporate-horror/
├── ship-ops/
└── fantasy-crawl/
```

Each campaign gets:

```text
campaign_config.js
current_loadout.js
index.js
global/
arcs/
sessions/
library/
assets/
```

## Mothership Example

```text
data/campaigns/mothership/
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
│   ├── tables.js
│   └── references.js
├── arcs/
│   └── station-crawl/
├── sessions/
├── library/
│   ├── stations/
│   ├── corps/
│   ├── rules/
│   └── jobs/
└── assets/
```

## Erasure Protocol Example

```text
data/campaigns/erasure-protocol/
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
│   ├── tables.js
│   └── references.js
├── arcs/
├── sessions/
├── library/
│   ├── missions/
│   ├── zones/
│   ├── hubs/
│   ├── rules/
│   └── foundry/
└── assets/
```

---

# 16. Development Discipline

## Do This

- Keep data names generic.
- Keep mode labels separate.
- Keep lore markdown separate from dashboard arrays.
- Keep active content controlled by `current_loadout.js`.
- Keep mechanics in reference.
- Keep first version static and local.
- Keep fields short.
- Keep current session material easy to identify.
- Keep long-term expansion folder-compatible.

## Do Not Do This

- Do not hardcode Valhalla terms into app logic.
- Do not use `npcs`, `places`, or `session_beats` as final internal names.
- Do not make every campaign use escalation fields.
- Do not move files around just to mark them active.
- Do not build a database in Sprint 1.
- Do not build Foundry integration in Sprint 1.
- Do not build dice resolution in Sprint 1.
- Do not overfill dashboard fields with lore paragraphs.
- Do not let future game modes derail the current Valhalla MVP.

---

# 17. Version 1 Definition of Done

Version 1 is successful when:

- The app opens locally.
- The final folder structure is in place.
- The app loads Valhalla through `data/campaigns/valhalla/index.js`.
- The app uses mode labels from `js/modes/valhalla.mode.js`.
- `current_loadout.js` controls what appears as current.
- Actors display in the active rail.
- Locations display in the main panel.
- Scenes display as next beats.
- Threads/trackers display as pressure.
- Reference material is available but not dominant.
- The Valhalla hub loop can be run without opening OneNote.
- The architecture can support Mothership and Erasure Protocol later without renaming the whole project.

## Practical Table Test

The dashboard passes if you can answer these in under 5 seconds:

- Who is this NPC?
- What is their vibe?
- What do they want?
- What do they sound like?
- Where are we?
- What does the location look like?
- What pressure is active?
- What scene is likely next?
- What thread should surface?
- What tracker changed?
- Where is the deeper markdown if needed?

---

# 18. Immediate Build Checklist

## Architecture

- [ ] Create `js/core/`
- [ ] Create `js/modes/`
- [ ] Create `data/shared/`
- [ ] Create `data/campaigns/valhalla/global/`
- [ ] Create `data/campaigns/valhalla/arcs/valhalla-intermission/`
- [ ] Create `data/campaigns/valhalla/sessions/next-session/`
- [ ] Create `data/campaigns/valhalla/library/`
- [ ] Create `data/campaigns/valhalla/assets/`

## Rename / Move Existing Files

- [ ] Move `npcs.js` → `global/actors.js`
- [ ] Move `places.js` → `global/locations.js`
- [ ] Move `session_beats.js` → `global/scenes.js`
- [ ] Move `factions.js` → `global/factions.js`
- [ ] Convert `arcs.js` into `arcs/valhalla-intermission/arc_config.js`
- [ ] Rename `dashboard_config.js` → `campaign_config.js`

## Create New Files

- [ ] `current_loadout.js`
- [ ] `index.js`
- [ ] `global/threads.js`
- [ ] `global/trackers.js`
- [ ] `global/tables.js`
- [ ] `global/references.js`
- [ ] `js/modes/valhalla.mode.js`
- [ ] `js/modes/mode-registry.js`
- [ ] `data/shared/templates.js`
- [ ] `data/shared/tags.js`
- [ ] `data/shared/schemas.js`

## Load Valhalla Hub Content

- [ ] Add hub markdown files to `library/hub/`
- [ ] Add hub locations to `global/locations.js`
- [ ] Add hub event tables to `global/tables.js`
- [ ] Add post-mission scenes to `global/scenes.js`
- [ ] Add Ragnarok Meter to `global/trackers.js`
- [ ] Add hub system chain to `global/threads.js` or `global/references.js`
- [ ] Add active hub IDs to `current_loadout.js`

---

# 19. Final Architectural Decision

The final architecture is:

```text
App Core
  → Mode Labels
    → Campaign Data
      → Global Campaign Layer
        → Arc Layer
          → Session Layer
            → Current Loadout
```

Or in plain language:

```text
The app stays generic.
The mode changes the words.
The campaign holds the world.
The arc holds the current adventure.
The session holds tonight.
The current loadout says what is live.
```

That is the structure to build from.
