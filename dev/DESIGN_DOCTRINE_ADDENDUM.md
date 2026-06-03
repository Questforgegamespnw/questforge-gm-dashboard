# Questforge GM Dashboard — Design Doctrine Addendum

This addendum locks the cockpit's table-facing intent into a short, repeatable doctrine.

## Core Doctrine

> People first. Places second. Arc pressure third. Mechanics in reference.

The dashboard is not primarily a lore archive. It is a live GM cockpit for making people, places, and pressure immediately usable at the table.

## Live Room Questions

At the table, the cockpit should help the GM answer four room-running questions quickly:

1. Where are we?
2. Who is nearby?
3. What do they say?
4. How do I make this room feel alive?

These questions are now part of the design pathos of the tool. New features should be judged by whether they make one of those answers faster, clearer, or more table-ready.

## Data Model Implications

```text
People first
  → actors
  → ambientCast
  → actor-linked answerMoments

Places second
  → locations
  → location vibes
  → location-linked tables
  → fireableMoments

Arc pressure third
  → threads
  → trackers
  → scenes
  → escalation cues
```

## Feature Meaning

- `actors` are named, important, recurring NPCs with motives, secrets, relationships, and recurring significance.
- `ambientCast` should represent location-linked crowd texture, name banks, voice lines, interaction hooks, and room life.
- `answerMoments` should represent actor-linked response/reveal beats for important questions.
- `locations` establish the sensory and structural context for the scene.
- `threads`, `trackers`, and `scenes` keep pressure visible without replacing the people-first flow.

## Design Rule

If a proposed feature does not help the GM answer “where are we,” “who is nearby,” “what do they say,” or “how do I make this room feel alive,” it should be treated as secondary until proven by table use.
