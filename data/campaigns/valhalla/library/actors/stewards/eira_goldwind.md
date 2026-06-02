# Eira Goldwind — Fieldkeeper

> “The field tells the truth before the hall is ready to hear it.”

## Overview

Leader of the Golden Fields and the life-side voice of Valhalla.

**Role:** Fieldkeeper / Golden Fields leader  
**Group:** Field Keepers  
**Likely Location:** `location_valhalla_golden_fields`  
**Current State:** Calm and soft-spoken, but quietly aware the fields are failing.

## Presence

- **Vibe:** Gentle clarity wrapped in harvest metaphor.
- **Physicality:** Moves like wind through tall wheat; always carrying a sickle; still enough to listen to soil, crop, and weather.
- **Voice:** Soft, calm, metaphor-rich, rarely direct unless fear breaks through.
- **Scene Impact:** Turns cosmic system failure into something the players can feel through crops, weather, and harvest.
- **Visual Anchor:** Hair like wind-touched wheat and a sickle always near at hand.

## Personality / Use at Table

Use Eira Goldwind when you need:

- Fieldkeeper / Golden Fields leader
- A scene shaped by: Gentle clarity wrapped in harvest metaphor.
- A delivery cue grounded in: Turns cosmic system failure into something the players can feel through crops, weather, and harvest.

## Motivation

- **Wants:** Keep the Fields alive and understand what is happening before panic spreads.
- **Fears:** That telling the Valkyries too early will trigger decisions the Fields cannot survive.
- **Leverage:** She sees the earliest physical signs of Yggdrasil/root failure.

## Knowledge

### Knows

- The Golden Fields are failing.
- The harvest has changed.
- The crops are tied to Valhalla’s deeper health.

### Secrets

- She has not told the Valkyries yet.

## Dialogue Bank

- “A field does not scream when it is sick. It bends first.”
- “The gold is thinner this season.”
- “You can hear it, if you stop trying to be brave.”

## Common Player Questions / Answer Bank

### Who are you?

**Short answer:**  
"Eira Goldwind. I keep the fields, though lately I think they have been keeping me."

**Expanded answer:**  
"Someone must listen to the growing things. Warriors listen for horns. Valkyries listen for the dead. I listen for the harvest. It speaks earlier than either."

**GM Use:** Establish Eira as a quiet warning system.

---

### What do you do here?

**Short answer:**  
"I tend what feeds Valhalla. Food, rhythm, patience, and all the small signs heroes step over."

**Expanded answer:**  
"The Fields are not decoration. They are breath, bread, season, and proof that the cycle still nourishes what it takes. When they change, something beneath the feast has changed first."

**GM Use:** Make the Fields central, not pastoral filler.

---

### What is wrong with the Fields?

**Short answer:**  
"The gold is thinner. The roots are listening to something sour."

**Expanded answer:**  
"The wheat still rises, yes. The sun still catches it, yes. But the stalks bend before wind touches them. The soil warms at the wrong hour. Some rows remember rain that never fell. These are small things, until they are not."

**GM Use:** Deliver quiet ecological dread.

---

### Is this connected to Yggdrasil?

**Short answer:**  
"Everything living here is connected to Yggdrasil. That is the comfort and the danger."

**Expanded answer:**  
"A tree does not only feed its branches. It carries sickness the same way. If the root is troubled, every golden thing above it eventually learns the shape of that trouble."

**GM Use:** Confirm connection without full causal exposition.

---

### Why have you not told the Valkyries?

**Short answer:**  
"Because they know how to answer danger with motion. I am not yet sure motion is the answer."

**Expanded answer:**  
"The Valkyries are brave. Bravery cuts quickly. Sometimes that saves a life. Sometimes it cuts the root because the leaf looked sick. I needed to know whether this was weather, wound, or warning."

**If challenged:**  
"Yes. Delay can become cowardice. I know. I have been counting the days."

**GM Use:** Let Eira be flawed without making her negligent.

---

### What do you want from us?

**Short answer:**  
"Look closely. Then tell the truth before it becomes useful to lie."

**Expanded answer:**  
"Walk the rows. Touch the soil. Listen before you decide what kind of enemy this is. If you bring warriors here looking only for something to strike, they will miss what is already wounded."

**GM Use:** Encourage investigation and restraint.

---

### Are the crops dangerous?

**Short answer:**  
"Not as a wolf is dangerous. More as a fever is dangerous."

**Expanded answer:**  
"Do not fear the wheat. Fear what it is carrying. Fear that something meant to nourish may learn to spread what hurts it."

**GM Use:** Distinguish corruption from monster threat.

---

### What are you afraid of?

**Short answer:**  
"That the Fields are not the first thing failing. Only the first thing honest enough to show it."

**Expanded answer:**  
"A field does not posture. It does not pretend morale. It does not keep command discipline. It grows, or it fails to grow. If this place is bending, others are breaking more quietly."

**GM Use:** Point back toward Mead-Hall, Quiet Rows, Aerie.

---

### Can the Fields be healed?

**Short answer:**  
"Perhaps. But not by blessing the stalk while ignoring the root."

**Expanded answer:**  
"You can cut away blackened wheat. You can burn a sick patch. You can sing over seed. All of that may help for a day. But if the root keeps sending sickness upward, the harvest will learn it again."

**GM Use:** Tie local intervention to larger campaign problem.

---

### What should we do next?

**Short answer:**  
"Find where the same wrongness speaks a different language. The Forge will call it heat. The Rows will call it memory. The Aerie will call it duty."

**Expanded answer:**  
"Do not trust one sign alone. Valhalla is large enough to hide a wound by naming it differently in every hall."

**GM Use:** Encourage cross-location pattern recognition.

---

## Pressure Responses

### If players dismiss the Fields as minor

"Bread is never minor to the hungry. Roots are never minor to the tree."

### If players want to alert command immediately

"Then choose your words with care. Panic is also a crop. It grows quickly once planted."

### If players ask for proof

"Kneel. Put your hand in the soil. Do not speak until it answers."

### If players threaten to burn infected crops

"Fire is honest. It is not always wise."

### If players show patience

"Good. The field speaks better to those who stop performing courage."

## Dashboard Answer Moment Candidates

```js
answerMoments: [
  {
    id: "answer_eira_what_wrong_fields",
    title: "What is wrong with the Fields?",
    type: "npc-answer",
    trigger: "Players ask what Eira has noticed or why the harvest feels wrong.",
    compact: "The gold is thinner. The roots are listening to something sour.",
    answer: "The wheat still rises, yes. The sun still catches it, yes. But the stalks bend before wind touches them. The soil warms at the wrong hour. Some rows remember rain that never fell.",
    gmPurpose: "Make cosmic failure feel agricultural and observable.",
    followUp: "Invite players to inspect soil, stalks, wind, and root signs.",
    tags: ["golden-fields", "yggdrasil", "clue"]
  },
  {
    id: "answer_eira_why_not_tell_valkyries",
    title: "Why not tell the Valkyries?",
    type: "npc-answer",
    trigger: "Players challenge Eira for withholding the warning.",
    compact: "They answer danger with motion. I am not yet sure motion is the answer.",
    answer: "The Valkyries are brave. Bravery cuts quickly. Sometimes that saves a life. Sometimes it cuts the root because the leaf looked sick.",
    gmPurpose: "Create tension between care, delay, and command urgency.",
    followUp: "If challenged, have Eira admit delay can become cowardice.",
    tags: ["withholding", "valkyries", "moral-pressure"]
  },
  {
    id: "answer_eira_what_next",
    title: "What should we do next?",
    type: "npc-answer",
    trigger: "Players ask Eira where to investigate after the Fields.",
    compact: "Find where the same wrongness speaks a different language.",
    answer: "The Forge will call it heat. The Rows will call it memory. The Aerie will call it duty. Do not trust one sign alone.",
    gmPurpose: "Guide players toward cross-location pattern recognition.",
    followUp: "Point them to Forge-Lanes, Quiet Rows, or Valkyrie Aerie.",
    tags: ["cross-region-pattern", "hub-investigation", "guidance"]
  }
]
```

## Relationships

- **location_valhalla_golden_fields** — steward: The Fields are her responsibility and warning system.
- **faction_valkyries** — withholding: She has not yet told them what she suspects.


## Escalation Behavior

As the Fields worsen, Eira:

- Speaks less in metaphor and more plainly
- Watches the soil instead of the sky
- Delays telling the Valkyries until the delay becomes a mistake



## Dashboard Extraction Notes

This actor should be represented in:

```text
data/campaigns/valhalla/global/actors.js
```

Use this markdown file for deeper canon and GM reference.

## Tags

- `active`
- `valhalla`
- `golden-fields`
- `fieldkeeper`
- `yggdrasil`
- `hidden-truth`
- `soft-spoken`

## GM Notes

Use Eira when you want the apocalypse to feel agricultural and quiet before it feels mythic.
