# Core Stability System

## Purpose

Tracks how controlled the system is.

## States

- Stable
- Strained
- Failing

## Modifiers

| Action | Effect |
|---|---|
| Stabilize | Improve state |
| Giant success | Worsen state |
| Ignore system | Worsen state |

## Effects

| State | Effect |
|---|---|
| Stable | Fewer hazards; predictable |
| Strained | Mixed / fluctuating |
| Failing | Multiple hazards; rapid escalation |

## Design Note

Core Stability is the main bridge between player action in Forge Below and consequence severity in the Council, Unsavable, and Hot Exfil sequences.
