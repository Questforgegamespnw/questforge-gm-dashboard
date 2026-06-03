# Brokk Ironvein — Master Forgekeeper

> “Good craft tells the truth. Bad craft asks to be worshiped.”

## Overview

Dwarven master smith overseeing the Forge-Lanes.

**Role:** Master Forgekeeper / smith / Corewright pressure point  
**Group:** Forge Smiths  
**Likely Location:** `location_valhalla_forge_lanes`  
**Current State:** Gruff, watchful, and increasingly uneasy around old war-tech.

## Presence

- **Vibe:** Gruff intelligence under forge heat and old regret.
- **Physicality:** Heavy build, rune-scarred arms, eyes glowing faintly from forge light; works while speaking rather than turning fully toward anyone.
- **Voice:** Blunt, practical, dry; compliments craft more easily than people.
- **Scene Impact:** Turns upgrades into ethical pressure.
- **Visual Anchor:** Rune-scarred arms lit by forgefire.

## Personality / Use at Table

Use Brokk Ironvein when you need:

- Master Forgekeeper / smith / Corewright pressure point
- A scene shaped by: Gruff intelligence under forge heat and old regret.
- A delivery cue grounded in: Turns upgrades into ethical pressure.

## Motivation

- **Wants:** Preserve craft discipline and keep dangerous old work from becoming fashionable again.
- **Fears:** That the old destructive methods are becoming necessary again.
- **Leverage:** Recognizes Corewright work and knows what kind of damage craft can cause.

## Knowledge

### Knows

- Old projects are sealed for a reason.
- The Corewright’s work is recognizable.
- Some weapons are worse than enemies.

### Secrets

- He recognizes the Corewright’s work and does not entirely approve.

## Dialogue Bank

- “Ah. You’re one of those.”
- “Can I make it stronger? Yes. That was never the question.”
- “You want a weapon, or do you want permission?”

## Common Player Questions / Answer Bank

### Who are you?

**Short answer:**  
"Brokk Ironvein. Master of these lanes, keeper of the old seals, and the last fool you should ask for a harmless weapon."

**If they seem respectful:**  
"I keep the forges honest. Steel lies when the hand that made it lies. Runes lie worse. My work is making sure neither lie long enough to kill the wrong person."

**GM Use:** Establish Brokk as a craft authority, not a shopkeeper.

---

### What do you do here?

**Short answer:**  
"I keep the fire useful and the dangerous things closed. Some days, that is the same job."

**Expanded answer:**  
"Weapons come here to be repaired, named, reforged, retired, or sealed. The young ones think the first three are the important parts. They are wrong. Knowing when to put a thing away is half of craft."

**GM Use:** Frame the Forge-Lanes as a place of judgment, not just upgrades.

---

### Can you improve my weapon?

**Short answer:**  
"Yes. Bad question."

**Expanded answer:**  
"Can I make it sharper? Heavier? Hungrier? I can make a spoon into a murder if you give me enough time and a bad enough reason. The question is what you need it to do, and what you are willing to become after it does it."

**If the player pushes for power:**  
"Power is easy. Control is expensive. Consequences cost extra."

**GM Use:** Make upgrades exciting but morally weighted.

---

### What is Corewright work?

**Short answer:**  
"Old craft. Too old for some of you to wear with that much confidence."

**Expanded answer:**  
"Corewrights did not make tools. They made answers. Whole, finished answers. The kind that keep answering long after the question has changed. That is why I watch them. That is why I do not trust them."

**If speaking to a Corewright PC:**  
"You carry old logic in new skin. That does not make you guilty. It does make you dangerous."

**GM Use:** Recognition without dumping full lore.

---

### Do you think my nature is a problem?

**Short answer:**  
"No. But I think pretending it is not a problem would be stupid."

**Expanded answer:**  
"A hammer is not evil. A hammer in the wrong hand still breaks the skull. A hammer that swings itself is worse. If you are asking whether I hate what you are, no. If you are asking whether I will ignore what you might do, also no."

**GM Use:** Give Brokk a fair but suspicious stance toward ancient war-tech PCs.

---

### Why are some doors sealed?

**Short answer:**  
"Because someone wiser than you survived long enough to close them."

**Expanded answer:**  
"We did not seal failures. Failures are easy. Break them, melt them, start again. We sealed successes. Things that worked too well. Things that answered fear with ruin."

**If players want access:**  
"Tell me what you are trying to save. Then I will decide whether what is behind that door should wake up for it."

**GM Use:** Seed sealed-project hooks without opening them casually.

---

### What is going wrong in Valhalla?

**Short answer:**  
"The fire is listening to things it should not hear."

**Expanded answer:**  
"Forgefire has moods. Every smith knows this. Lately it has been remembering old shapes. Old commands. Old wars. That should not happen unless something deeper is stirring the ash."

**GM Use:** Tie Forge-Lanes weirdness to system failure.

---

### Are the Valkyries right to keep pushing missions?

**Short answer:**  
"Right? Maybe. Careful? No."

**Expanded answer:**  
"Duty makes people brave. It also makes them stupid if nobody is allowed to say stop. Svinhild keeps the line moving. That matters. But if the line is walking toward a furnace, someone should check the floor."

**GM Use:** Brokk can criticize command without becoming anti-Valhalla.

---

### What do you fear?

**Short answer:**  
"That the old answers will start looking useful again."

**Expanded answer:**  
"When things break, people reach for whatever still works. Does not matter what it cost last time. Does not matter who begged them to stop. If Ragnarok keeps leaning on us, someone will open a door they should not."

**GM Use:** Show the ethical danger of escalation.

---

### What should we do next?

**Short answer:**  
"Decide what you are protecting before you ask for a sharper blade."

**Expanded answer:**  
"Go see what is failing outside your own hands. Fields. Rows. Aerie. Then come back and tell me what kind of tool you actually need. Not what kind of tool makes you feel safer."

**GM Use:** Redirect players toward hub investigation.

---

## Pressure Responses

### If players treat the Forge like a shop

"No. Try again. Tell me what happened, what nearly killed you, and what you failed to stop. Then we can talk craft."

### If players ask for something dangerous

"I can make that. I can also push you into the fire. Capability is not permission."

### If players mention sealed projects

"Lower your voice. Some things behind those doors still know their names."

### If players show humility

"Good. That is the first useful tool you have brought me."

### If players are afraid of their own power

"Good. Fear keeps hands attached. Shame does not. Learn the difference."

## Dashboard Answer Moment Candidates

```js
answerMoments: [
  {
    id: "answer_brokk_can_you_improve_it",
    title: "Can you improve my weapon?",
    type: "npc-answer",
    trigger: "Players ask about upgrades, stronger weapons, or Forge help.",
    compact: "Can I make it stronger? Yes. That was never the question.",
    answer: "Can I make it sharper? Heavier? Hungrier? I can make a spoon into a murder if you give me enough time and a bad enough reason. The question is what you need it to do, and what you are willing to become after it does it.",
    gmPurpose: "Make upgrades exciting but morally weighted.",
    followUp: "Ask what problem they are trying to solve, not what bonus they want.",
    tags: ["forge", "upgrade", "moral-pressure"]
  },
  {
    id: "answer_brokk_corewright_work",
    title: "What is Corewright work?",
    type: "npc-answer",
    trigger: "Players ask about Corewright craft, ancient war-tech, or why Brokk recognizes a PC.",
    compact: "Old craft. Too old to wear with that much confidence.",
    answer: "Corewrights did not make tools. They made answers. Whole, finished answers. The kind that keep answering long after the question has changed.",
    gmPurpose: "Signal recognition and unease without dumping full lore.",
    followUp: "If a Corewright PC presses, tell them they are not guilty, but they are dangerous.",
    tags: ["corewright", "ancient-war-tech", "recognition"]
  },
  {
    id: "answer_brokk_why_sealed",
    title: "Why are some doors sealed?",
    type: "npc-answer",
    trigger: "Players notice sealed doors, humming projects, or ask about forbidden craft.",
    compact: "We sealed successes. Things that worked too well.",
    answer: "We did not seal failures. Failures are easy. Break them, melt them, start again. We sealed successes. Things that worked too well. Things that answered fear with ruin.",
    gmPurpose: "Seed sealed-project hooks and escalation danger.",
    followUp: "Require a serious need before Brokk considers opening anything.",
    tags: ["sealed-projects", "forbidden-craft", "ragnarok-pressure"]
  }
]
```

## Relationships

- **location_valhalla_forge_lanes** — master: Oversees the Forge-Lanes and its sealed projects.


## Escalation Behavior

As pressure rises, Brokk:

- Becomes more willing to open sealed options
- Warns players more bluntly about craft consequences
- Treats old war-tech as both tool and sin



## Dashboard Extraction Notes

This actor should be represented in:

```text
data/campaigns/valhalla/global/actors.js
```

Use this markdown file for deeper canon and GM reference.

## Tags

- `active`
- `valhalla`
- `forge-lanes`
- `forgekeeper`
- `dwarf-smith`
- `corewright`
- `ancient-war-tech`
- `blunt`

## GM Notes

Brokk is the best actor for making the Forge feel useful, dangerous, and morally heavy.
