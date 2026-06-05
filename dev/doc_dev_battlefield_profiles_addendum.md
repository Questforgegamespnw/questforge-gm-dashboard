# Battlefield Profiles & Encounter Actor Clusters Addendum

## Purpose

Some arc scenes include active combat pressure without requiring every participant to become a full initiative actor. This addendum defines how the dashboard separates named actors, encounter actors, ambient cast, and quick battlefield math.

This was first stress-tested in the Frostroot arc, where mortal defenders, named allies, and undead attackers are all active in the same battlefield scene.

## Separation of Duties

### Named Actors

Named actors live in `actors.js`.

Use named actors for characters who have story weight, relationships, voice, motives, and recurring narrative function.

Examples:

- Brinhild, Field Captain
- Jarl Eirik
- Yrsa Root-Seer
- Torvald Brewmaster
- The Runecaller, if treated as a named antagonist

Named actors may receive a `battlefieldProfile` only when they need quick combat handling during active scene pressure.

They should not be moved into `encounters.js` merely because they can fight.

### Encounter Actors

Encounter actors live in `encounters.js` and export as:

```js
export const encounterActors = [
  // encounter profiles
];
```

Use encounter actors for generic enemies, pressure units, monsters, battlefield units, and clustered groups that need fast scene math.

Examples:

- Draugr Unfinished Dead
- Frostbound Brute
- Skald Frozen-Tongue
- Gate Defender Cluster

Encounter actors are allowed to have `quickStats`, `traits`, `actions`, and `use` fields.

They are not expected to carry the same relationship depth as named actors.

### Ambient Cast

Ambient cast lives in `ambient_cast/` files and exports into one `ambientCast` array.

Use ambient cast for local texture, voices, stakes, crowds, aftermath testimony, and location color.

Examples:

- Skjoldyr Civilians
- Gate Defenders
- Wounded Defenders
- Root-Tenders / Shrine Keepers
- Sap-Hearth Revelers

Ambient cast should not carry full combat math. If a civilian crowd, root-tender, or reveler is touched by serious combat pressure, they are assumed dead, scattered, or converted into consequence. Their value is narrative pressure, not initiative handling.

## Battlefield Profile

A `battlefieldProfile` is a compact quick-reference block placed on a named actor when that actor has active battlefield utility.

Battlefield profiles and encounter actors are battlefield-fidelity tools.

They work in Theater of the Mind by giving the GM enough grounded math to make lanes, clusters, pressure, and combat-touchable NPCs feel real.

They also work with grids, minis, terrain, and battle maps by providing fast handling rules for bodies the GM does not want to fully run as individual initiative actors.

Use them to support:
- Theater of the Mind combat
- zone-based combat
- loose sketch maps
- full tactical grids
- set-piece battles with many non-player combatants

They should clarify what happens around the players without replacing the players’ tactical choices.

Use this for named allies or named enemies who need quick math but should remain in `actors.js`.

### Shape

```js
battlefieldProfile: {
  role: "field-anchor",
  handling: "named-ally-zone-holder",

  quickStats: {
    ac: 17,
    hp: 110,
    attack: "+7",
    damage: "1d10+4"
  },

  signatureAction: {
    name: "Valkyrie Sweep",
    frequency: "1/round",
    effect: "Push all enemies in melee 10 ft and knock prone. One target fails automatically."
  },

  rules: [
    "Holds one lane at the gate.",
    "Prioritizes protection over kills.",
    "Never leaves her zone.",
    "Use her to create openings, not solve the encounter."
  ],

  barks: [
    "Push them back!",
    "You hold HERE!"
  ],

  tableUse: "Use as a lane anchor. Stabilizes one pressure point without replacing player decisions."
}
```

### Use When

Add `battlefieldProfile` when:

- A named actor can be attacked, damaged, or pressured during a scene.
- The GM needs fast AC / HP / attack math.
- The actor has a signature support action, defensive action, or battlefield role.
- The actor should remain narratively important and not become a generic encounter profile.

Do not add `battlefieldProfile` when:

- The actor is social-only.
- The actor should not be touched by combat.
- The actor is better represented as a generic enemy or cluster in `encounters.js`.

## Encounter Actor Clusters

A cluster is a grouped combat profile representing several similar combatants as one scene-pressure unit.

Clusters prevent large battles from becoming initiative grind.

### Use Clusters For

- Mortal defender groups
- Archer groups
- Militia knots
- Civilian shield-lines, if trained enough to matter
- Enemy groups when individual tracking would slow the scene

### Do Not Use Clusters For

- Named characters
- Civilian crowds that should die or scatter if directly hit
- Pure ambient texture
- Important bosses

### Example: Defender Cluster Logic

In Frostroot, Skjoldyr defenders are competent mortal fighters, roughly comparable to CR 3 guards/archers. They are not helpless. They are losing because the enemy force is larger, stranger, more durable, and system-directed.

Representative enemy math:

```text
Regular draugr: AC 16 | HP 65 | +7 to hit | 1d8+3 damage
Frostbound brute: AC 15 | HP 125 | +11 to hit | 2d8+1d6 cold damage
```

Representative defender cluster:

```js
quickStats: {
  ac: 16,
  hp: "~50 per cluster",
  countAs: "3–5 competent mortal defenders",
  roughCR: "clustered CR 3-ish defenders"
}
```

### Design Intent

A defender cluster should communicate:

- Mortal warriors can fight regular draugr.
- Mortal warriors can briefly survive a brute.
- Mortal warriors cannot solve the siege without Einherjar intervention.
- Player action can preserve, reinforce, reposition, or rally a cluster.
- Failed pressure beats can wound, scatter, or break a cluster.

The goal is not tactical precision. The goal is fast, believable battlefield math.

## Recommended Frostroot Encounter Split

### `actors.js`

Named story levers:

- Brinhild Field Captain — named ally with `battlefieldProfile`
- Jarl Eirik — named ally with `battlefieldProfile`
- Yrsa Root-Seer
- Torvald Brewmaster
- Frostwake Gate Captain
- Runecaller, if treated as named antagonist

### `encounters.js`

Combat and pressure units:

- Skjoldyr Gate Defender Cluster
- Draugr Unfinished Dead
- Frostbound Brute
- Skald Frozen-Tongue
- Runecaller battlefield profile, if treated primarily as encounter pressure

### `ambient_cast/`

Voice and scene texture:

- Skjoldyr Civilians
- Gate Defenders
- Wounded Defenders
- Root-Tenders / Shrine Keepers
- Sap-Hearth Revelers

## Practical Rule

Use this rule when deciding where a thing belongs:

```text
If it has a name, motive, and story relationship: actors.js.
If it needs combat math but is generic or grouped: encounters.js.
If it provides voices, stakes, and texture: ambient_cast/.
If it is a named actor who needs quick battle handling: actors.js + battlefieldProfile.
```

## Non-Goals

This pattern is not meant to create a full tactical subsystem.

Avoid:

- Full statblocks for every local NPC
- Initiative tracking for every defender
- Duplicating ambient cast as combat actors unless the combat version serves a different purpose
- Putting monster-manual detail into `actors.js`

The cockpit should answer the at-table question quickly: “What happens if this part of the battlefield gets hit?”


Battlefield profiles are not tactical-map replacements.

They are fast scene-fidelity tools for Theater of the Mind combat. Their purpose is to make combat-touchable NPCs, defender groups, pressure units, and battlefield lanes feel physically grounded without requiring initiative tracking for every body on the field.

Use them to answer:
- Can this NPC survive being hit?
- Can this group hold for one more beat?
- What does player intervention save, delay, or open?
- What does enemy pressure visibly change?
- Why are the heroes needed here?

Do not use them to simulate every combatant.
Do not let them replace player-facing tactical choices.
Do not let allied profiles solve the encounter automatically.