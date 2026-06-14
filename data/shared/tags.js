export const statusTags = [
  "active",
  "available",
  "hidden",
  "session-current"
];

export const contentRoleTags = [
  "primary-actor",
  "supporting-actor",
  "encounter-actor",
  "ambient-cast",
  "location-linked",
  "campaign-global",
  "arc-local",
  "session-local"
];

export const playModeTags = [
  "social",
  "danger",
  "mystery",
  "political",
  "travel",
  "combat",
  "downtime",
  "investigation",
  "system-crisis",
  "council",
  "hot-exfil",
  "fallout"
];

export const architectureTags = [
  "runtime-pin-candidate",
  "tracker-gated",
  "phase-gated",
  "skill-gate",
  "answer-moment",
  "rumor-answer",
  "outcome-shift",
  "post-choice-evolution",
  "battlefield-profile",
  "encounter-profile",
  "narrative-resolution",
  "mixed-resolution",
  "mechanical-resolution"
];

export const pressureTags = [
  "hidden-truth",
  "faction-pressure",
  "clue",
  "consequence",
  "omen",
  "foreshadow",
  "escalation",
  "system-strain",
  "high-escalation",
  "relationship",
  "pressure",
  "choice",
  "tradeoff",
  "moral-pressure",
  "resource",
  "recovery"
];

export const workflowTags = [
  "briefing",
  "mission",
  "deployment",
  "extraction",
  "return",
  "arrival",
  "realization",
  "unsavable"
];

export const referenceTags = [
  "gm-reminder",
  "procedure",
  "tracking",
  "rule",
  "lore",
  "primer",
  "doctrine"
];

export const dispositionTags = [
  "ally",
  "enemy",
  "neutral",
  "boss",
  "hazard",
  "set-piece"
];

export const commonTags = [
  ...statusTags,
  ...contentRoleTags,
  ...playModeTags,
  ...architectureTags,
  ...pressureTags,
  ...workflowTags,
  ...referenceTags,
  ...dispositionTags
];
