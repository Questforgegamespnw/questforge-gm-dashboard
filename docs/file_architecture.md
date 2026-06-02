# File Architecture

This shell follows the agnostic architecture:

```text
App Core
  → Mode Labels
    → Campaign Data
      → Global Campaign Layer
        → Arc Layer
          → Session Layer
            → Current Loadout
```

Use `current_loadout.js` to control what is active. Do not move files around to mark them current.
