# No Bell for Harthrun — QuestForge GM Dashboard Package

Standalone one-shot campaign data for the QuestForge GM Cockpit Dashboard.

## Install

Copy:

```text
data/campaigns/no-bell-for-harthrun/
```

into the dashboard's existing `data/campaigns/` directory. Point the dashboard campaign import or campaign registry at:

```js
data/campaigns/no-bell-for-harthrun/index.js
```

The campaign index exports the generic `campaignData` object expected by the dashboard.

## Package Contents

- 3 actors
- 4 ambient cast groups
- 6 locations
- 3 factions
- 6 threads
- 3 trackers
- 8 scenes
- 21 scene-linked fireable moments
- 11 cockpit references
- 8 longform GM library entries
- intentionally empty `tables.js`; essential information is deterministic

The included `current_loadout.js` activates the complete one-shot.
