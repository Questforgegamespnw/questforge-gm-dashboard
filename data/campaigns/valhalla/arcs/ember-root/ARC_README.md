# Ember Root Arc Data

This folder has been refactored toward the current Questforge dashboard arc structure.

## Shape

- `actors/` is split into `primary`, `valkyries`, and `encounters`.
- `ambient_cast/` is split by playable location.
- `locations.js`, `scenes.js`, `tables.js`, `threads.js`, `trackers.js`, `references.js`, and `factions.js` remain arc-level collections.
- `fireable_moments.js` is currently a placeholder for later table-ready micro-beats.
- `library/` contains the expected arc-local markdown scaffold.

## Important ID fixes

The old imported data used a few earlier IDs:
- `faction_emberroot_engineers`
- `faction_emberroot_workers`
- `location_emberroot_forge_below`
- `actor_skarth`
- `faction_fire_giants`

This patch normalizes those references to the current IDs:
- `faction_emberroot_ironhand_guilds`
- `faction_emberroot_ashbound`
- `location_emberfall_core_furnace`
- `actor_skarth_firebrand`
- `faction_emberroot_fire_giants`
