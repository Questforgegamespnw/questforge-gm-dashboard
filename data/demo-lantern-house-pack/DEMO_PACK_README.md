# QuestForge Demo Campaign Pack — The Lantern House

This bundle is a public-safe demo campaign pack for the QuestForge GM Dashboard.

It contains no private Valhalla, Emberfall, Mothership, Erasure Protocol, or player campaign story material.

## What is included

Path:

```text
data/campaigns/demo-lantern-house/
```

Contents:

- campaign config
- current loadout
- campaign index
- global placeholder files
- one playable demo arc
- actors
- ambient cast
- locations
- faction
- threads
- tracker
- scenes
- fireable moments
- table
- references
- small markdown library notes

## Install into the dashboard

1. Unzip this bundle.
2. Copy `data/campaigns/demo-lantern-house/` into your dashboard's `data/campaigns/` folder.
3. In `js/app.js`, temporarily change the campaign import from your private campaign to this demo pack.

Example:

```js
import {
  campaignData as initialCampaignData,
  availableArcs,
  getCampaignDataForArc
} from "../data/campaigns/demo-lantern-house/index.js";
```

4. Run the dashboard through a local server.
5. Open the dashboard and select `Lantern House Opening`.

## Intended demo flow

1. Select **The Lantern House**.
2. Select **Keeper's Hall**.
3. Click Mira, Orren, Kettlewick, and the Ambient Cast entries.
4. Fire moments from **Can Fire Here**.
5. Pin one clue or scene to the cockpit.
6. Move to **Lantern Room** for the final choice scene.

## Design purpose

This pack demonstrates the moving-camera dashboard model:

```text
Where are we?
Who is nearby?
What do they say?
What can happen here?
What pressure is active?
```

It is intentionally small. It is not meant to be a full adventure module.
