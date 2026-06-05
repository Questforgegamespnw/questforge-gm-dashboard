# Questforge GM Dashboard — Content Writing Guide

## Purpose

This guide explains how to fill dashboard data templates without flattening the material into plot summary.

`templates.js` is the copy/paste scaffold.  
This guide is the writing doctrine for what belongs inside those fields.

The dashboard is not a lore archive, wiki, or static module. It is a GM cockpit / narration engine. Each card should help the GM quickly answer:

- Where is the camera?
- Who is present?
- What is happening now?
- What pressure is live?
- What can the players do?
- What changes because of this?

Core doctrine:

> People first. Places second. Arc pressure third. Mechanics in reference.

---

## 1. Anti-Flattening Rule

When porting content from notes, PDFs, outlines, or another act, do not reduce scenes to plot summaries.

A flattened scene says:

> The party investigates the system failure and learns the Core is overloaded.

A dashboard-ready scene says:

> The route down from the High Forge enters the Midworks, where Emberfall stops looking like a fortress and starts looking like a heart under strain. Vast pipes carry heat and pressure upward from the lower furnaces. Seals glow white at their edges. Valve wheels shudder in their housings.

The second version gives the GM a camera, texture, and playable entry point.

Every major scene should preserve:

- camera center
- table-facing description
- playable pressure
- discoverable clues
- meaningful outcomes
- branch/consequence logic
- voiced scripted beats

---

## 2. Scene Field Writing Guide

### `summary`

Use this for the GM-facing structural purpose of the scene.

It should answer:

> Why does this scene exist in the arc?

Good:

```js
"summary": "The party enters a Midworks overflow chamber where contradictory readings, straining valves, and failing seals reveal that Emberfall’s power system is being pushed beyond safe limits."
```

Avoid:

```js
"summary": "The party sees some system stuff and learns the city is unstable."
```

Keep it short, clear, and functional.

---

### `playerFacing`

This is the camera.

Write this as table-facing text the GM can paraphrase or read aloud.

It should answer:

- What do the players see first?
- What is moving?
- What has changed?
- Who or what draws attention?
- What does the room feel like?
- What choice or danger is visible?

Good player-facing text starts inside the scene, not above it.

Good:

```js
"playerFacing": "For one breath, there is nothing but rainbow-white light and the sensation of floating inside a silent fall. Emberfall burns somewhere below the veil, vast and unreadable. Then the Bifrost sputters, the color snaps out, and gravity takes you all at once."
```

Avoid:

```js
"playerFacing": "The party reaches the Core and learns it is alive."
```

That is plot summary, not camera.

---

### `gmTruth`

Use this for the hidden or structural truth the GM must preserve.

It should be short and actionable.

Good:

```js
"gmTruth": "The Core is not the enemy. It is holding the bomb."
```

Good:

```js
"gmTruth": "The giants are exploiting the failure, not causing the whole disaster."
```

Avoid long lore explanations. Put long explanations in markdown references.

---

### `clues`

Clues are discoverable handles.

They should help the players interpret the situation through play.

Good:

```js
"clues": [
  "The seals are not failing from damage alone; they are straining against overflow from below.",
  "The giants ignore easy targets and focus on stabilizer housings.",
  "The Root appears overloaded or overfed rather than malicious."
]
```

Avoid clues that only repeat the answer:

```js
"clues": [
  "The Core is not evil."
]
```

Better:

```js
"clues": [
  "The Core reacts to pressure, damage, release attempts, and careful engagement rather than attacking at random."
]
```

---

### `outcomes`

Outcomes describe what can change because of the scene.

Use outcomes for:

- future consequences
- tracker shifts
- trust changes
- route changes
- unlocked branches
- worsened dangers
- softened fallout
- altered NPC/faction behavior

Good:

```js
"outcomes": [
  "A clean stabilization reduces immediate Midworks danger and slows Core Stability loss.",
  "A partial stabilization prevents catastrophe but leaves the High Forge under power strain.",
  "Combining this thread with Root Resonance reveals that the pressure is coming from something alive or semi-alive below."
]
```

Avoid:

```js
"outcomes": [
  "Players learn more."
]
```

---

### `pressure`

Pressure is the live tension in one sharp sentence.

It should tell the GM what makes this scene hard right now.

Good:

```js
"pressure": "The city’s blood is moving too fast, and the people in charge cannot see the wound clearly from behind glass."
```

Good:

```js
"pressure": "Pick where your hands go. The rest still happens."
```

Avoid:

```js
"pressure": "This is tense."
```

---

### `runNote`

Use this for practical handling instructions.

It should answer:

- How should this scene be paced?
- What should the GM foreground?
- What should not be over-explained?
- What player choices matter?
- What tools or trackers should be used?

Good:

```js
"runNote": "Run this as a reactor-room overflow encounter. The overseers and Kaldra can see contradictory readings from the control room, but the party must enter the valve chamber and physically adjust the system. The solution is not all-open or all-closed: vent pressure first, redirect flow second, reseal the main channel third."
```

Avoid:

```js
"runNote": "Run the scene and reveal clues."
```

---

### `forwardPath.branches`

Branches are decision paths, pressure states, or consequence variants.

Each branch should include:

- `id`
- `label`
- `condition`
- `effect`
- `softPoint`

Good:

```js
{
  "id": "council_evacuation_first",
  "label": "Evacuation First",
  "condition": "Party sides with Bruni or prioritizes living people over infrastructure.",
  "effect": "Resources shift toward evacuation, triage, and route survival instead of preserving the old system.",
  "softPoint": "Best human outcome; weakens containment response and enrages authority factions."
}
```

Avoid branches that are just menu labels without consequences.

---

### `forwardPath.scriptedMoments`

Scripted moments are deployable table beats.

They are not a railroad script.

Use them for:

- opening camera shots
- NPC lines
- clue delivery
- pressure spikes
- choice prompts
- consequence reveals
- transition beats

Each scripted moment should include:

- `timing`
- `speaker`
- `line`
- `purpose`

Good:

```js
{
  "timing": "Truth reveal",
  "speaker": "GM",
  "line": "The Core is not the bomb. The Core is the thing holding the bomb.",
  "purpose": "Reframe the scene from boss arena to containment crisis."
}
```

Avoid:

```js
{
  "timing": "Middle",
  "speaker": "NPC",
  "line": "Explain the lore.",
  "purpose": "Info dump."
}
```

---

## 3. Camera Rules

Use these when writing `playerFacing` and scripted GM narration.

### Start where the players are

Bad:

> The Midworks are part of Emberfall’s industrial pressure system.

Good:

> The descent from the High Forge takes you below the command balconies and into the working organs of Emberfall.

### Show motion before explanation

Bad:

> The bridge is unstable.

Good:

> The Chainway dips under your weight, and everyone on it screams before the chains catch.

### Let strong images do work

Bad:

> The Valkyries are going to ferry many souls because many people died.

Good:

> Hundreds of wings descend through the open sky beyond the threshold. No one stops to explain why. No one needs to.

### Use sensory detail for orientation, not decoration

Good sensory detail tells the GM what matters:

- heat means pressure
- silence means grief
- ash means aftermath
- chain-noise means containment strain
- crowd motion means evacuation pressure

---

## 4. Scene Type Patterns

### Arrival Crisis

Use when players enter an active disaster.

Must include:

- immediate camera shock
- multiple simultaneous pressures
- visible human/structural/tactical stakes
- limited support
- consequence of what is not chosen

Core question:

> Where do you land, and what gets worse because you did?

---

### Investigation Thread

Use when players are trying to understand a crisis.

Must include:

- physical place to investigate
- concrete interaction point
- partial truth
- interpretation risk
- what this thread clarifies
- what it does not clarify alone

Core question:

> What part of the truth can be understood here?

---

### Realization / Synthesis

Use when several threads connect.

Must include:

- what clues stack together
- what false single-cause answer falls away
- what the new frame is
- where the party must go next

Core question:

> What does the party understand now that they could not understand before?

---

### System Crisis

Use when an environment, machine, city, ship, or magical structure is the encounter.

Must include:

- system parts that matter
- what is failing
- what players can physically or socially affect
- what worsens if ignored
- pressure-state branches

Core question:

> What can the party stabilize, redirect, sacrifice, or understand?

---

### Council / Choice

Use when the party chooses between values, not just tactics.

Must include:

- faction arguments
- no clean right answer
- consequences by branch
- player agency
- visible cost

Core question:

> Which truth gets paid for first?

---

### Unsavable / Consequence Engine

Use when multiple consequences resolve at once.

Must include:

- several simultaneous crisis fronts
- prior choices returning as advantages or costs
- one thing that cannot be saved
- clear emotional cost
- direct bridge to exfil or fallout

Core question:

> Where do your hands go, and what happens where they are not?

---

### Hot Exfil

Use when the party escapes through consequences.

Must include:

- fast hazard beats
- hazards tied to prior unresolved crises
- benefits tied to prior saved assets
- extraction pressure
- final look back

Core question:

> What does escape look like through the shape of your choices?

---

### Fallout / Hub Reflection

Use after loud field pressure.

Must include:

- lower emotional volume
- evidence that the hub is not untouched
- quiet consequences
- NPC reaction
- decompression options
- future pressure seed

Core question:

> What follows the party home?

---

## 5. Anti-Generated Voice Pass

After drafting, make one polish pass for natural table voice.

Check for overuse of:

- “not X, Y”
- “not just”
- “does not simply”
- “the thing is not the thing”
- repeated “pressure”
- repeated “alive”
- repeated “answers”
- too many perfect aphorisms in a row

Strong lines are good. Too many strong lines stacked together can sound generated.

For each scene, keep:

- one strongest image
- one strongest NPC line
- one strongest pressure sentence
- one clear GM handling note

Let the rest be functional.

---

## 6. Porting Checklist

When bringing over a new act, arc, or session, check each scene:

- [ ] Does `summary` explain the scene’s job?
- [ ] Does `playerFacing` put the camera in the room?
- [ ] Does `gmTruth` preserve the hidden/structural truth?
- [ ] Do `clues` provide discoverable interpretation handles?
- [ ] Do `outcomes` explain what changes later?
- [ ] Does `pressure` state the live tension?
- [ ] Does `runNote` tell the GM how to run the scene?
- [ ] Do `branches` create meaningful variants or consequences?
- [ ] Do `scriptedMoments` include table-ready lines or beats?
- [ ] Could this scene be run from the card without opening a lore document?

If not, the scene is probably flattened and needs a voice/camera pass.
