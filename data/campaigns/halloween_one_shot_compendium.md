# Halloween One-Shot Compendium
## The Count's Gala / The Silent Abbey / Vader von Vaderham of the Vaderhams

> Preservation status: merged from original planning notes, map annotations, monster reference material, and actual-play evolution. This document favors the actual-play canon where it conflicts with the original prep.

---

## 0. Core Identity

### One-Sentence Pitch

A newly promoted adventuring party is sent on an official guild field test to investigate a silent town and abbey, only to discover that the obvious vampire Count is not the true monster—the real threat is a rogue vampire hidden inside the monastery, using gothic court theater, glamored townsfolk, and unleashed horrors to frame and destabilize the Count's gala.

### Adventure Shape

- **Opening Mode:** Bright civic fantasy, guild bureaucracy, promotion review.
- **Middle Mode:** Deserted-town mystery, monastery paranoia, gothic folklore horror.
- **Inversion Mode:** Social infiltration at a vampire gala where the expected villain is morally compromised but not the murderer.
- **Final Mode:** Two-phase boss fight against the dark monk / rogue vampire, ending in a super-Varghiest transformation.

### Central Twist

The Count's court appears monstrous because of vampire aristocratic showmanship, secrecy, and glamour magic. The townsfolk are charmed and coerced, but unharmed and ultimately compensated. The Count is not clean, but he is not the active predator. The true villain is a rogue vampire/dark monk who has breached the monastery, attacked from the shadows, and sent monsters to make the Count look guilty.

---

## 1. Canon Notes and Naming Decisions

### Preserved Names

- **Vlaste** — pronounced *Vlah-stay*. The holy city and adventuring hub.
- **Barovia / Treville** — the destination town. Original notes contain both. Use **Barovia** as the mapped/live-play name and preserve **Treville** as an alternate draft name, neighboring village, or rename option.
- **The Count's Gala** — the social/horror centerpiece.
- **The Grand Court of Vampires** — vampire aristocratic authority whose laws and expectations shape the Count's behavior.
- **Order of Vigilant Mercy** — holy order tied to the Church of Light and monastery support.
- **Cohortium / Cohortium Annex / Cohortium Magnus** — formal adventurer trial facilities.

### Actual-Play Canon Overrides

- The Count's daughter is **actually young**, not a secret ancient monster.
- She is a **natural-born vampire**, not turned. This makes her a rare gift among vampire society.
- The “dolls” language was theatrical vampire court showmanship, not her true intent.
- The traumatized child encountered by the party was likely **the Count's daughter**, out seeking excitement.
- The Count breached the monastery to retrieve his daughter, but this only seemed impossible because the party did not realize the monastery barriers had already been compromised by the dark monk.
- The Varghiest and hangman tree pressure were sent or stirred by the rogue vampire/dark monk, not by the Count.
- If the party goes to the monastery first, they interrupt the dark monk's conversion efforts.
- If they go to town first, the Varghiest attacks that night and the monastery is more corrupted by the time they arrive.

---

## 2. Trackers

### tracker_halloween_review_status

**Name:** Official Review Status  
**Type:** promotion/evaluation state  
**Range:** 0–4  
**Default:** 1

Tracks how the party's official field test is going in the eyes of the Adventurer's Administration.

| Value | Label | Meaning |
|---:|---|---|
| 0 | Failed Confidence | Reckless, negligent, or disastrous conduct threatens promotion. |
| 1 | Under Review | Standard starting state. Every action or inaction matters. |
| 2 | Competent Field Work | Party is showing sound judgment under pressure. |
| 3 | B-Rank Material | Party shows initiative, restraint, and survival instincts beyond expected level. |
| 4 | Exceptional Review | Party resolves the crisis, identifies the true villain, protects innocents, and avoids a false massacre. |

**GM Notes:** Raise when the party investigates carefully, protects innocents, avoids attacking the wrong target, or handles social pressure well. Lower when they cause unnecessary deaths, ignore clear danger, or choose violence before understanding the scene.

---

### tracker_halloween_monastery_integrity

**Name:** Monastery Integrity  
**Type:** sanctuary/corruption state  
**Range:** 0–3  
**Default:** depends on route

| Value | Label | Meaning |
|---:|---|---|
| 0 | Fallen Sanctuary | Most monks are turned, ghouled, enthralled, dead, or hiding. Holy barriers are fully compromised. |
| 1 | Breached | Barriers are weakened; several monks are compromised; the dark monk has significant control. |
| 2 | Shaken | One bitten monk, fearful brothers, signs of breach, but most of the monastery remains recoverable. |
| 3 | Holding | Party interrupted the dark monk early; sanctuary remains tense but functional. |

**Starting Values:**

- Party goes monastery first: start at **2** and allow it to rise to **3** if they interrupt or expose the threat.
- Party goes town first: start at **1** by the time they reach the monastery; drop to **0** if they delay further or mishandle the corruption.

---

### tracker_halloween_dark_monk_progress

**Name:** Dark Monk Conversion Progress  
**Type:** hidden villain clock  
**Range:** 0–4  
**Default:** 1

| Value | Label | Meaning |
|---:|---|---|
| 0 | Interrupted | The dark monk has paused or lost momentum due to party presence. |
| 1 | First Bite | One monk is bitten; suspicion exists but proof is thin. |
| 2 | Quiet Spread | More monks are being dominated, ghouled, or turned in hidden spaces. |
| 3 | Monastery Cell | The rogue vampire has a working cell inside the abbey. |
| 4 | Open Betrayal | The dark monk can reveal himself with minions, leverage, and compromised sanctuary access. |

**Advancement:** Advance at nightfall, after major delays, or when the party chases only the Count theory without checking the monastery. Pause or reduce if they stay at the monastery, search the forgotten sections, protect the bitten monk, or force the dark monk to hide.

---

### tracker_halloween_count_suspicion

**Name:** Count Suspicion  
**Type:** misdirection pressure  
**Range:** 0–4  
**Default:** 2

| Value | Label | Meaning |
|---:|---|---|
| 0 | Complicated Ally | Party sees the Count as compromised but not the murderer. |
| 1 | Questionable Host | Party suspects him but sees contradictions. |
| 2 | Obvious Villain | Standard early read: he probably took the town. |
| 3 | Damning Evidence | Fabio, the daughter retrieval, and monster attacks make him look guilty. |
| 4 | False Target Locked | Party is ready to attack the Count before understanding the rogue vampire plot. |

**GM Notes:** This tracker is not about truth. It is about table perception. Let it rise from the Count's theatrical behavior, Fabio's menace, glamored townsfolk, and the daughter retrieval scene. Let it fall from blood rose tea clues, social gossip, evidence of the dark monk's sabotage, or the Count showing paternal concern.

---

### tracker_halloween_gala_cover

**Name:** Gala Cover Integrity  
**Type:** infiltration state  
**Range:** 0–3  
**Default:** 1 or 2 depending on preparation

| Value | Label | Meaning |
|---:|---|---|
| 0 | Exposed | The party is known as intruders or suspicious actors. |
| 1 | Watched | They are inside, but under attention from guards, Fabio, or a noble house. |
| 2 | Accepted | Their cover is plausible enough to move socially. |
| 3 | Social Momentum | Their cover accidentally creates leverage, invitations, gossip, or assumed status. |

**Special Note:** “Vader von Vaderham of the Vaderhams” is the gold-standard actual-play example of a terrible cover saved by an even worse guard roll.

---

## 3. Threads

### thread_halloween_field_test

**Title:** The Field Test Is Real  
**Type:** framing pressure / guild bureaucracy

The party is not merely taking a quest. They are under formal review for promotion. Every action or inaction can become part of their evaluation. This creates pressure to behave like professionals even while the situation becomes stranger than the paperwork suggested.

**Use When:** Players debate risk, hesitate, or wonder how much authority they have.

**Key Question:** Are they trying to pass a test, solve a crisis, or protect people when those goals diverge?

---

### thread_halloween_safe_place_is_compromised

**Title:** The Safe Place Is Compromised  
**Type:** monastery horror / hidden corruption

The monastery appears to be the holy refuge, but the dark monk has already breached its protections. The party may mistake the Count's ability to enter as proof of his overwhelming evil, when the true clue is that the wards had already failed.

**Use When:** The party reaches the abbey, meets the bitten monk, discovers the holy armory, or sees the Count retrieve his daughter.

---

### thread_halloween_count_is_not_clean

**Title:** The Count Is Not Clean, But He Is Not the Monster  
**Type:** moral inversion / social horror

The Count glamors townsfolk, hides the truth, and performs vampire aristocratic menace. He is not innocent. But he is not killing them, and he is not the source of the Varghiest attacks or monastery corruption.

**Use When:** The party reaches the gala, discovers blood rose tea, or sees that the townsfolk are unharmed.

---

### thread_halloween_vampire_court_theater

**Title:** Vampire Court Theater  
**Type:** performance / misdirection / politics

The Grand Court expects grandeur, predation, secrecy, and dehumanizing language. The Count performs these things to maintain standing, even while trying to minimize harm. The invitation's “dolls” language belongs to this theatrical mask.

**Use When:** The party hears court language, meets nobles, sees the daughter, or realizes that etiquette is part of survival.

---

### thread_halloween_lonely_daughter

**Title:** The Lonely Natural-Born Daughter  
**Type:** emotional reveal / misread innocence

The Count's daughter is a true-born vampire child, rare and politically important. She is lonely, sheltered, polite, and curious. Her search for excitement creates one of the strongest misdirections of the one-shot.

**Use When:** The party finds the abandoned child, brings her to the monastery, or watches the Count retrieve her.

---

### thread_halloween_rogue_vampire_frame_job

**Title:** The Rogue Vampire Frame Job  
**Type:** true villain plot

The dark monk/rival vampire uses the Count's suspicious secrecy as cover. He sends monsters, turns monks, corrupts holy ground, and manipulates evidence to make the Count look like the obvious villain.

**Use When:** Clues contradict the Count theory or the dark monk becomes too coincidentally present.

---

### thread_halloween_invitations_and_identity

**Title:** Invitations and Identity  
**Type:** social infiltration pressure

The gala can only be found or entered with an invitation, a forged identity, stolen proof, or strong social improvisation. The queue creates time pressure and forces the party to become someone before the door.

**Use When:** The party tries to enter the gala.

---

## 4. Factions

### faction_halloween_adventurers_administration

**Name:** Adventurer's Administration  
**Type:** guild bureaucracy / ranking authority

The Adventurer's Administration manages ranking, trials, transport waivers, contracts, and official review. It exists to reduce adventurer mortality, but its processes can still be overridden by senior authority.

**Beliefs:**

- Rankings save lives.
- Trials must test competence under pressure.
- Field tests are dangerous but historically legitimate.
- Paperwork is how chaos becomes accountable.

**Key Faces:** Sebastian Waldor, the Arbiter, Damien Taizo.

**In Play:** Provides the opening pressure and the official reason the party cannot treat this like an ordinary job.

---

### faction_halloween_church_of_light

**Name:** Church of Light / Order of Vigilant Mercy  
**Type:** holy authority / anti-supernatural support

The Church of Light requested investigation of the silent abbey and town. The Order of Vigilant Mercy maintains anti-supernatural equipment, holy wards, and forgotten armories.

**Beliefs:**

- Darkness must be contained before it spreads.
- Mercy requires preparation, not just prayer.
- Holy places are not automatically safe if vigilance fails.

**Key Faces:** Brother Arnold, the bitten monk, monastery brothers.

---

### faction_halloween_monastery_brothers

**Name:** Brothers of the Abbey  
**Type:** isolated religious community / compromised sanctuary

The monks maintain gardens, beehives, mead production, and blessed grounds. Their isolation made them slow to notice the town's disappearance and vulnerable to internal compromise.

**Current State by Route:**

- Monastery first: spooked, partially compromised, recoverable.
- Town first: several turned/ghouled/dominated, sanctuary deeply breached.

---

### faction_halloween_count_household

**Name:** The Count's Household  
**Type:** restrained vampire nobility / morally compromised host

The Count's household survives on blood rose tea and tries to avoid direct feeding. They still participate in glamour, secrecy, and courtly dehumanization because vampire society requires it.

**Beliefs:**

- Appearances prevent greater violence.
- The Grand Court must not see weakness.
- Mortals should not be harmed, but they also cannot be allowed full knowledge.
- The daughter must be protected at all costs.

**Key Faces:** The Count, the Count's Daughter, Fabio.

---

### faction_halloween_grand_court_of_vampires

**Name:** Grand Court of Vampires  
**Type:** aristocratic vampire power structure

The Grand Court enforces the rules of vampire society: secrecy, glamour, pageantry, and the expectation of predatory grandeur. It creates the pressure that makes the Count perform as more monstrous than he truly is.

**Beliefs:**

- Mortals are props, servants, food, or political liabilities.
- Weakness invites challenge.
- A noble house must maintain spectacle.
- Natural-born vampires are rare and valuable.

---

### faction_halloween_dark_monk_cell

**Name:** The Dark Monk's Cell  
**Type:** rogue vampire conspiracy / monastery corruption

A rival vampire hidden in or around the monastery is attempting to destabilize the Count, corrupt the abbey, and turn the holy site into his own foothold.

**Beliefs:**

- The Count's restraint is weakness.
- The monastery is a perfect symbolic conquest.
- The adventurers can be weaponized against the Count.
- A false villain is more useful than an open war.

**Key Face:** The Dark Monk / Rogue Vampire.

---

## 5. Actors

### actor_halloween_sebastian_waldor

**Name:** Sebastian Waldor  
**Role:** Adventurer's Administrator  
**Group:** Adventurer's Administration  
**Status:** available / opening

Sebastian runs the Adventurer's Point tower smoothly and effectively. He is an elf, age 240, blonde, very well built, and immaculately groomed. Not a hair is out of place unless it is intentional. He has nearly a century in office and was once an Arcane Knight / Eldritch Knight of approximately 15th level.

**Vibe:** Immaculate administrator who dislikes unnecessary adventurer death.

**Wants:** Keep the review process controlled and the party alive.

**Fears:** Field tests returning to the bad old days of high mortality.

**Quick Lines:**

- “How much of that did you catch?”
- “From here forward, you are hereby under official review.”
- “Do come back safe. No sense in tarnishing my spotless record.”

---

### actor_halloween_the_arbiter

**Name:** The Arbiter  
**Role:** Senior ranking authority / field test mandate  
**Group:** Adventurer's Administration  
**Status:** mysterious / opening

The party knows only his title. He was present when the ranking system and trials were established. He overrides Sebastian and insists on a field test due to urgency and lack of other eligible parties. After leaving the office, he looks over the party, nods, walks to the window, and blinks out of existence.

**Vibe:** Powerful, unreadable, above the normal chain of complaint.

**Quick Lines:**

- “If they were ready for review, they should be able to handle this.”
- “No other eligible party is able to respond to this missive.”

---

### actor_halloween_damien_taizo

**Name:** Damien Taizo  
**Role:** Friendly rival party leader / bard  
**Group:** Rival C-rank adventuring party  
**Status:** available / opening

A 5th-level bard and leader of a friendly rival adventuring group. He enjoys competition, good-natured teasing, and occasional pranks. He warns the party when he realizes the Arbiter is involved.

**Quick Lines:**

- “Hey now guys, what's the hurry?”
- “You’re going to see Sebastian?”
- *leans in and mouths* “The Arbiter.”
- “Watch yourselves. You’re the only source of competition my group’s got around here.”

---

### actor_halloween_brother_arnold

**Name:** Brother Arnold  
**Pronunciation:** Arnoh  
**Role:** Priest of the Order of Vigilant Mercy / monastery contact  
**Group:** Church of Light  
**Status:** available

Brother Arnold is found in the vegetable garden, surprised and spooked to see the party. He explains the town's disappearance and can outfit the party with anti-supernatural tools.

**Vibe:** Helpful, worried, sheltered but not useless.

**Quick Lines:**

- “We are unsure what exactly is happening in the town.”
- “The grounds are blessed by Helm and the other luminous ones.”
- “Brother Meynard made a trip into town and discovered its current state.”
- “There is a road that leads northwards from town into the forest.”

---

### actor_halloween_bitten_monk

**Name:** The Bitten Monk  
**Role:** early clue / shock victim / suspicion amplifier  
**Group:** Monastery Brothers  
**Status:** route-dependent

A monk recently bitten during the dark monk's early corruption attempts. Played as vaguely French, timid, quiet-voiced, in shock, and almost non-verbal.

**Vibe:** The human proof that the safe place is not safe.

**Use:** He may flinch at names, avoid candlelight, gesture toward cloisters, or whisper fragments about a brother's voice, bells, blood, or a shadow at prayer.

---

### actor_halloween_dark_monk

**Name:** The Dark Monk / Rogue Vampire  
**Role:** true villain / rival vampire / final boss  
**Group:** Dark Monk's Cell  
**Status:** hidden until reveal

A rival vampire infiltrating or corrupting the monastery. He weaponizes the Count's theatrical guilt, sends monsters, turns monks, and tries to destabilize the gala. He is the actual source of the predatory attacks.

**Vibe:** Pious mask over aristocratic predation.

**Wants:** Turn the monastery, frame the Count, expose or ruin the gala, and seize influence.

**Boss Phases:**

1. Human vampire phase: composed, tactical, charming, blasphemously elegant.
2. Super Varghiest phase: monstrous, winged, violent, mask fully broken.

**Quick Lines:**

- “You were so eager for a monster in a cape that you never checked beneath the cowl.”
- “Holy walls are only walls once the first prayer goes silent.”
- “The Count plays predator. I am one.”

---

### actor_halloween_count

**Name:** The Count  
**Role:** vampire noble / false villain / father  
**Group:** Count's Household / Grand Court of Vampires  
**Status:** misunderstood power

The Count appears to be the obvious villain. In truth, he is a morally compromised but restrained vampire noble trying to maintain political appearances while preventing actual bloodshed. His household drinks blood rose tea rather than feeding directly.

**Vibe:** Frightening aristocratic mask over genuine paternal concern.

**Wants:** Protect his daughter, preserve his house, survive court politics, and prevent open disaster.

**Fears:** The Grand Court seeing weakness; his daughter being harmed; the rogue vampire's sabotage turning restraint into ruin.

**Quick Lines:**

- “Come here, little heart. You have frightened everyone enough for one night.”
- “You mistake theater for appetite.”
- “The Court demands a monster. I have learned to give them costume, not corpse.”

---

### actor_halloween_counts_daughter

**Name:** The Count's Daughter  
**Role:** lonely natural-born vampire child / emotional inversion  
**Group:** Count's Household  
**Status:** central reveal

Actually young, polite, well-mannered, and lonely. She is a natural-born vampire, a rare gift among vampire society, and has little chance to spend time with others. In actual play, she was likely the traumatized child encountered outside the gala.

**Vibe:** Sweet child surrounded by terrible theater.

**Wants:** Excitement, company, novelty, attention.

**Fears:** Being locked away, excluded, or treated like a relic instead of a child.

**Quick Lines:**

- “I was only looking for something interesting.”
- “Are you adventurers? Proper ones?”
- “Father says I mustn't frighten guests. But guests are always frightened anyway.”

---

### actor_halloween_fabio

**Name:** Fabio  
**Role:** vampire collector / social enforcer / gala gatekeeper  
**Group:** Count's Household  
**Status:** available

An older, stronger vampire who collects Paula and brings her to the gala. He interrogates the party about their interest in Paula and the event. He should feel dangerous, but not necessarily immediately hostile.

**Vibe:** Elegant menace, protocol with teeth.

**Quick Lines:**

- “You have taken quite an interest in another man's invitation.”
- “The gala is not found by wandering.”
- “Manners, my friends. They are often the last wall between curiosity and death.”

---

### actor_halloween_paula

**Name:** Paula  
**Role:** charmed townswoman / gala clue  
**Group:** townsfolk  
**Status:** available

A middle-aged woman glamored by Fabio. She waits off the road, waltzing with a nonexistent partner, giggling and posturing like she is inside a Regency ballroom fantasy.

**Vibe:** Romantic charm haze turned uncanny.

**Quick Lines:**

- “It is rude to interrupt a lady when she is talking to a prince.”
- “Now look what you've done. You've scared him off.”
- “I was so close to getting an invitation.”
- “The gala, of course. The Count's gala.”

---

### actor_halloween_talion_black

**Name:** Talion Black  
**Role:** Hume guide / secret access contact  
**Group:** local survivor or outsider  
**Status:** optional route helper

Talion finds the party after they stumble into the greenery. He opens a secret hatch that gives access to basement levels.

**Vibe:** Practical, wary, knows a way in that he probably should not know.

**Quick Lines:**

- “You keep walking like that, the trees will decide where you end up.”
- “The front door is for people who want to be counted.”
- “There is another way below.”

---

### actor_halloween_gala_guard

**Name:** Gala Gate Guard  
**Role:** queue pressure / cover-story test  
**Group:** Count's Household or hired court staff  
**Status:** available

The guard at the gala entrance who may accidentally accept terrible cover stories if the dice go badly enough.

**Actual-Play Legacy:** Accepted “Vader von Vaderham of the Vaderhams” after the party rolled a 7 and the guard rolled a natural 1.

**Quick Lines:**

- “Name, house, invitation.”
- “Of the northern Vaderhams, my lord?”
- “Very good. Move along. The line must not stall.”

---

### actor_halloween_varghiest

**Name:** Varghiest  
**Role:** monster pressure / rogue vampire weapon / final form inspiration  
**Group:** Dark Monk's Cell  
**Status:** hostile

A winged vampire horror. In play, Varghiest threats were sent by the rogue vampire, not the Count. The dark monk's final phase can become a super Varghiest.

**Vibe:** The vampire mask ripped into beast-shape.

**Use:** Night attack if party goes town first; chase threat; final boss phase.

---

### actor_halloween_hangman_tree

**Name:** Hangman Tree  
**Role:** forest hazard / rescue complication  
**Group:** corrupted greenery  
**Status:** hostile environmental encounter

A predatory tree that can snare the frightened child if she flees after charm is broken. It makes rescue require follow-through.

**Vibe:** Fairy-tale forest punishment turned horror encounter.

---

## 6. Ambient Cast

### ambient_halloween_runner

A messenger who finds the party in Vlaste and tells them Sebastian Waldor has requested them at Adventurer's Point with haste.

**Line:** “A Mr. Sebastian Waldor has requested to speak with you.”

---

### ambient_halloween_transport_attendant

A functionary or mage attending the transporter room. Can explain the cairn waiver procedure.

**Line:** “Waiver into the cairn before you step onto the dais. Not after. Definitely not after.”

---

### ambient_halloween_spooked_monk

A monastery brother who tries to remain hospitable while visibly afraid.

**Line:** “Visitors? At this hour?”

---

### ambient_halloween_glamored_townsperson

A charmed villager in town or at the gala. Polite, dreamy, slightly delayed in responses.

**Line:** “The Count has been most generous. I think. Hasn't he?”

---

### ambient_halloween_vampire_noble

A guest at the gala from another house. Predatory, amused, and politically observant.

**Line:** “Blood rose tea. How quaint. Your host has always mistaken restraint for refinement.”

---

### ambient_halloween_gala_servant

A glamored townsfolk servant moving through the gala.

**Line:** “Would my lord prefer the red service, the white service, or the rose?”

---

### ambient_halloween_monastery_ghoul

A monk already turned or partially ghouled if the party delayed.

**Line:** “Evening prayers are below tonight.”

---

## 7. Locations

### location_halloween_vlaste

**Name:** The Holy City of Vlaste  
**Type:** civic fantasy hub / opening location

A bright and organized holy city with adventurer infrastructure, temples, docks, markets, transporters, and formal political authority.

**Vibe:** Paperwork, faith, prestige, and polished civic order.

**Key Sites:** Adventurer's Point, Basilica Lux, Grand Marquis' Manor, Vigiles Urbani Castra, Cohortium Annex, Enclosed Bazaar, Laughing Donkey, docks, shops.

---

### location_halloween_adventurers_point

**Name:** Adventurer's Point  
**Type:** guildhall / tower / briefing site

The guildhall of the mighty Adventurers. Includes specialized bank vaults, arcane transporters, training rooms, and a Grand Library Annex pocket dimension.

**Scene Use:** Runner summons, Damien warning, overheard Arbiter/Sebastian argument, briefing, transporter access.

---

### location_halloween_transport_room

**Name:** Arcane Transport Room  
**Type:** transition chamber

A large dais sits in the floor. Ornate mosaics cover the walls and floors. A waist-high cairn atop a pedestal accepts transport waivers before activation.

**Vibe:** Official magical infrastructure, clean enough that the later horror feels far away.

---

### location_halloween_barovia_treville

**Name:** Barovia / Treville  
**Type:** deserted quarry town

A small town of a few hundred people, unwalled but protected by watchtowers. It makes most of its income from a surface stone quarry to the north. Buildings are sturdy lumber with quarried-stone foundations and crushed-stone paths.

**Key Sites:** Town hall, inn, road to monastery, small quarry, road north to lumbermill and dense forest.

**Vibe:** Empty working town, suddenly over-neat because no one is moving through it.

---

### location_halloween_monastery

**Name:** The Monastery / Abbey  
**Type:** holy refuge / compromised sanctuary

A monastery with 90 beds, about half filled in original prep. It has a central garden, vegetable garden, beehives, and monk's mead production. The grounds are blessed by Helm and other luminous ones.

**State by Route:**

- Monastery first: late evening, monks surprised and spooked, one bitten monk, corruption interrupted.
- Town first: later arrival, many monks may already be turned or ghouled.

---

### location_halloween_forgotten_holy_armory

**Name:** Forgotten Holy Armory  
**Type:** hidden reward location / anti-vampire gear cache

Forgotten sections of the monastery contain a holy armory from older Vigilant Mercy operations.

**Possible Contents:** Blessed stakes, holy water, sunburst lanterns, silvered chains, consecrated bolts, warding chalk, reliquary dust, anti-charm seals, Decon's Leathers of Holy Aura.

**Function:** Converts investigation into leverage for the boss fight.

---

### location_halloween_greenery

**Name:** The Greenery / Dense Woods  
**Type:** forest horror approach

Beyond the lumbermill road lies dense woods. Darkness often dwells there. The party may encounter the child, hangman tree, Varghiest pressure, and Talion Black.

---

### location_halloween_gala_queue

**Name:** The Gala Queue  
**Type:** social pressure checkpoint

A line of vampire nobles, guests, servants, and glamored attendants waits at the entrance. The party must invent or sustain a cover story as the line counts down.

**Legacy Beat:** Vader von Vaderham of the Vaderhams.

---

### location_halloween_counts_gala

**Name:** The Count's Gala  
**Type:** social infiltration / political theater

A grand vampire gathering full of courtly performance, noble gossip, glamored townsfolk, blood rose tea, and dangerous etiquette. The party enters expecting a predator's lair and discovers a more complicated truth.

---

### location_halloween_basement_access

**Name:** Secret Basement Access  
**Type:** hidden route / Talion's hatch

A secret hatch found through Talion Black that allows access to basement levels beneath the gala site or estate.

**Use:** Bypass formal entry, escape route, or route to discover the true sabotage.

---

## 8. Scenes

### scene_halloween_free_roam_vlaste

**Title:** Free Roam in Vlaste  
**Type:** opening / civic setup

The party mills around Vlaste while waiting for a review arena to be arranged. Use shops, the Laughing Donkey, temple services, or Adventurer's Point bustle. A runner eventually summons them.

**Exit:** Runner says Sebastian Waldor has requested them.

---

### scene_halloween_damien_warning

**Title:** Damien's Warning  
**Type:** rival banter / tension signal

Damien Taizo sees the party rushing into Adventurer's Point and teases them before realizing they are going to see Sebastian and possibly the Arbiter.

**Key Line:** *leans in and mouths* “The Arbiter.”

---

### scene_halloween_overheard_office

**Title:** Sebastian and the Arbiter  
**Type:** overheard briefing / authority pressure

The party overhears Sebastian objecting to issuing this quest to a C-rank party under review. The Arbiter overrules him and mandates a field test.

**Key Image:** The Arbiter exits, looks the party over, nods, walks to the window, and blinks out of existence.

---

### scene_halloween_official_briefing

**Title:** Official Review Briefing  
**Type:** mission briefing

Sebastian explains that the party is now under official review and must investigate an abbey outside Barovia that has gone more silent than usual.

**Key Line:** “From here forward you are hereby under official review. All actions you do or do not take will be taken into consideration for your promotion evaluation.”

---

### scene_halloween_transport_to_barovia

**Title:** Transport Waivers  
**Type:** transition

The party drops waivers into the cairn and steps onto the transporter dais. The bright order of Vlaste gives way to gothic isolation.

---

### scene_halloween_arrival_choice

**Title:** Outskirts Arrival Choice  
**Type:** branch point

The party arrives in the outskirts and can head toward either town or monastery.

**Choice A:** Monastery first.  
**Choice B:** Town first.

This choice changes the first night.

---

### scene_halloween_monastery_first_night

**Title:** Monastery First — Spooked Brothers  
**Type:** investigation / quiet horror

Late evening. The monks are surprised and spooked. The party discovers or hears about a recently bitten monk. Their presence interrupts the dark monk's attempt to turn more brothers that night.

**Outcome:** Monastery remains more intact; dark monk pauses conversions.

---

### scene_halloween_town_first_day

**Title:** Town First — Empty Streets  
**Type:** mystery exploration

The party explores the deserted town, discovers lore hooks, and may encounter Paula or clues about the gala.

**Outcome:** Count suspicion rises; dark monk gains time at the monastery.

---

### scene_halloween_paula_waltzing

**Title:** Paula Waltzes Alone  
**Type:** uncanny social clue

Paula dances with an invisible partner and complains that the party scared off her prince. She reveals the Count's gala and invitation logic.

**Exit:** Fabio may arrive to collect her.

---

### scene_halloween_fabio_collects_paula

**Title:** Fabio Comes to Collect  
**Type:** social threat

Fabio arrives, calm and dangerous, and questions the party's interest in Paula and the gala.

**Purpose:** Establish the gala as real and guarded by vampire protocol.

---

### scene_halloween_child_in_the_dark

**Title:** The Child Seeking Excitement  
**Type:** emotional horror / hidden reveal

The party finds a young girl who appears abandoned, hungry, left out, or glamored. In actual-play canon, she is the Count's daughter, out seeking excitement.

**If Charm Breaks:** She may flee and become endangered by the hangman tree.

---

### scene_halloween_hangman_tree

**Title:** Hangman Tree Rescue  
**Type:** environmental combat / rescue

If the child flees, the forest catches her. The party must not only break the charm but protect her afterward.

**Truth:** This pressure is tied to the rogue vampire's corruption, not the Count.

---

### scene_halloween_varghiest_night_attack

**Title:** Varghiest Night Attack  
**Type:** horror combat / route consequence

If the party goes town first, the Varghiest attacks that night. It seems to confirm vampire predation and makes the Count look guilty.

**Truth:** Sent or stirred by the rogue vampire/dark monk.

---

### scene_halloween_count_retrieves_daughter

**Title:** The Shadow at the Monastery Door  
**Type:** misdirection / emotional reveal

After the party brings the child to the monastery, the Count appears as a powerful shadow figure and claims her from their grasp. The wards fail to stop him because they were already breached.

**Suggested Read-Aloud:**

> The candles gutter all at once. Not out — down, as if every flame is bowing to something outside the walls.
>
> A shadow stands beyond the threshold of the monastery, too tall in the doorway, too still in the rain-dark. The wards carved into the stone flicker once, then fail to stop him.
>
> The girl goes quiet. Not charmed. Not afraid in the way you expect.
>
> The figure extends one pale hand.
>
> “Come here, little heart. You have frightened everyone enough for one night.”

---

### scene_halloween_forgotten_armory

**Title:** The Forgotten Holy Armory  
**Type:** exploration reward

The party discovers forgotten sections of the monastery containing anti-vampire equipment. This prepares them for the true boss.

**Outcome:** Holy gear, anti-charm tools, and vampire countermeasures.

---

### scene_halloween_queue_of_lies

**Title:** The Queue of Lies  
**Type:** social challenge / countdown pressure

The party waits in line at the gala entrance while trying to invent a cover story. The GM counts down their place in line every time they hesitate.

**Countdown Beat:**

- Seventh in line.
- Sixth.
- Fifth.
- Fourth.
- Third.
- Second.
- Name, house, invitation.

**Actual-Play Legacy:** “This is Vader von Vaderham... of the Vaderhams!”

---

### scene_halloween_gala_infiltration

**Title:** The Count's Gala  
**Type:** social infiltration / inversion

The party enters the gala and discovers glamored townsfolk, vampire nobles, court gossip, and blood rose tea. The Count is theatrical and ominous, but evidence begins to contradict the simple villain theory.

**Reveals:**

- Townsfolk are charmed but unharmed.
- The Count pays them well afterward.
- Blood rose tea slakes vampire thirst.
- Other vampire houses pressure the Count to maintain predatory appearances.

---

### scene_halloween_dark_monk_reveal

**Title:** The Dark Monk Appears  
**Type:** true villain reveal

The rogue vampire emerges, exposing or exploiting the chaos. The party realizes the monastery corruption and monster attacks came from him.

**Purpose:** Flip the Count from obvious villain to compromised ally/host.

---

### scene_halloween_final_boss

**Title:** Human Vampire to Super Varghiest  
**Type:** two-phase boss fight

Phase one is the dark monk in composed vampire form. Phase two is the monstrous Varghiest transformation. The party's holy armory discoveries should matter.

**Outcome:** Destroying the dark monk saves the monastery and prevents a false war with the Count.

---

### scene_halloween_aftermath_review

**Title:** Return to Review  
**Type:** denouement

The party returns to Vlaste. Sebastian is relieved. The Arbiter remains unreadable. The official review now has to account for more than a simple success/failure.

**Possible Results:** Promotion, conditional promotion, political secrecy, Count's debt, Church gratitude, or lingering Grand Court attention.

---

## 9. Fireable Moments

### moment_halloween_the_arbiter

**Title:** The Arbiter  
**Trigger:** When the party realizes this summons is not routine.

**Read-Aloud / Line:**

> Damien leans in, all jokes gone from his face, and mouths two words: “The Arbiter.”

**Purpose:** Signal that the party has stepped into high-level guild politics.

---

### moment_halloween_official_review

**Title:** Official Review Begins  
**Trigger:** Sebastian formally issues the field test.

**Line:**

> “From here forward, you are hereby under official review. All actions you do or do not take will be taken into consideration for your promotion evaluation.”

**Purpose:** Make every later choice feel observed and consequential.

---

### moment_halloween_bitten_monk_silence

**Title:** The Bitten Monk Cannot Say It  
**Trigger:** Party questions the bitten monk or notices his wound.

**Line:**

> The monk tries to answer, but the words fold somewhere behind his teeth. He touches the bite, then the door, then the chapel bell, and shakes his head like a man begging you not to make him remember.

**Purpose:** Build suspicion without clean exposition.

---

### moment_halloween_paula_prince

**Title:** Paula's Invisible Prince  
**Trigger:** Party interrupts Paula's waltz.

**Line:**

> “It is rude to interrupt a lady when she is talking to a prince.”

**Purpose:** Introduce charm, gala, and uncanny social logic.

---

### moment_halloween_count_at_threshold

**Title:** The Count at the Threshold  
**Trigger:** The Count comes to retrieve his daughter from the monastery.

**Line:**

> “Come here, little heart. You have frightened everyone enough for one night.”

**Purpose:** Make the Count terrifying and paternal at once.

---

### moment_halloween_wards_already_broken

**Title:** The Wards Were Already Broken  
**Trigger:** Party realizes the Count did not breach intact holy protection.

**Line:**

> The marks did not fail when he arrived. They were already dead. You can see it now: the cuts in the prayerwork came from inside.

**Purpose:** Reframe the monastery and point toward the dark monk.

---

### moment_halloween_vader_von_vaderham

**Title:** Vader von Vaderham of the Vaderhams  
**Trigger:** Party panics at the gala queue.

**Legacy Line:**

> “This is Vader von Vaderham... of the Vaderhams!”

**Guard Fail-Forward Line:**

> “Of the northern Vaderhams, my lord?”

**Purpose:** Preserve the legendary social panic beat and allow future reruns to produce new absurd covers.

---

### moment_halloween_blood_rose_tea

**Title:** Blood Rose Tea  
**Trigger:** Party sees vampires drinking from delicate cups instead of feeding.

**Line:**

> The scent is floral first. Then iron. Then warmth, like a rose garden planted over a battlefield.

**Purpose:** Signal that the gala is not the feeding frenzy the party expected.

---

### moment_halloween_dolls_are_theater

**Title:** Dolls Are Theater  
**Trigger:** Party meets the daughter or realizes the invitation language was showmanship.

**Line:**

> “I don't want dolls that scream. I wanted guests who tell stories.”

**Purpose:** Invert the expected child-vampire horror.

---

### moment_halloween_dark_monk_mask_drop

**Title:** The Monk Smiles Wrong  
**Trigger:** The dark monk reveals himself.

**Line:**

> The brother smiles, and for the first time all night, the smile has no fear in it.

**Purpose:** Mark the transition from suspicion to true villain reveal.

---

## 10. Tables

### table_halloween_gala_queue_complications

**Name:** Gala Queue Complications  
**Die:** 1d6  
**Use:** Roll or choose when the party hesitates in line.

| d6 | Complication |
|---:|---|
| 1 | A vampire noble behind them listens too closely. |
| 2 | The guard asks for house affiliation before invitation proof. |
| 3 | A servant recognizes one party member from town. |
| 4 | Fabio appears at the edge of the entrance hall. |
| 5 | Someone ahead is rejected and quietly dragged away. |
| 6 | The line moves twice as fast; reduce planning time immediately. |

---

### table_halloween_false_cover_names

**Name:** Panic Noble Names  
**Die:** 1d8  
**Use:** Emergency inspiration when players need a terrible cover identity.

| d8 | Name |
|---:|---|
| 1 | Vader von Vaderham of the Vaderhams |
| 2 | Lord Nightwick of Upper Nightwick |
| 3 | Count Bellgrave, no relation |
| 4 | The Honorable Marrowmere Delegation |
| 5 | Lady Crimsonia Thornwell |
| 6 | Baron Duskmantle the Younger |
| 7 | House Umberveil, traveling incognito |
| 8 | Sir Not-A-Hunter of the Western Road |

---

### table_halloween_monastery_clues

**Name:** Monastery Corruption Clues  
**Die:** 1d8

| d8 | Clue |
|---:|---|
| 1 | A prayer bell has been padded so it cannot ring clearly. |
| 2 | Candle flames lean away from one hallway. |
| 3 | The bitten monk reacts to one brother's footsteps before seeing him. |
| 4 | A holy symbol is scratched from the back, not the front. |
| 5 | The garden bees refuse to approach the old cloister wall. |
| 6 | One monk cannot remember morning prayers but remembers the taste of iron. |
| 7 | The warding inscription has been cut from inside the sanctuary. |
| 8 | Brother Arnold's records show one monk signed twice for night duties he denies performing. |

---

### table_halloween_gala_gossip

**Name:** Vampire Gala Gossip  
**Die:** 1d8

| d8 | Gossip |
|---:|---|
| 1 | “The Count's reliance on blood rose tea is either refinement or cowardice.” |
| 2 | “A natural-born daughter. Imagine the leverage.” |
| 3 | “The monastery has been making noise again. Bells, prayers, accusations.” |
| 4 | “Someone is trying to embarrass this house before the Court.” |
| 5 | “The servants are glamored, yes, but look—no bite marks. Provincial restraint.” |
| 6 | “Fabio has been collecting invitations personally. Very gauche.” |
| 7 | “A beast was seen in the woods. The Count denies ownership.” |
| 8 | “A monk at a vampire gala would be a scandal. Unless he came as a meal.” |

---

### table_halloween_holy_armory_finds

**Name:** Forgotten Holy Armory Finds  
**Die:** 1d10

| d10 | Find |
|---:|---|
| 1 | Three blessed ash stakes wrapped in linen. |
| 2 | A sunburst lantern with one hour of charge. |
| 3 | Six consecrated crossbow bolts. |
| 4 | Silvered chain with prayer-script links. |
| 5 | Vials of old but potent holy water. |
| 6 | Warding chalk that blocks charm across a threshold. |
| 7 | A reliquary pendant that grants advantage/resistance against fear or charm once. |
| 8 | Decon's Leathers of Holy Aura. |
| 9 | A brittle scroll of daylight or similar radiant effect. |
| 10 | A hunter's field manual naming the Varghiest and its signs. |

---

### table_halloween_varghiest_pressure

**Name:** Varghiest Night Pressure  
**Die:** 1d6

| d6 | Pressure |
|---:|---|
| 1 | Wings scrape the roof before anything is seen. |
| 2 | A glamored townsfolk walks toward the dark, smiling. |
| 3 | The beast attacks a light source first. |
| 4 | It drops a monk's bloodied cord or holy token. |
| 5 | It retreats toward the monastery, not the castle. |
| 6 | It speaks one stolen prayer in the dark monk's voice. |

---

## 11. References

### reference_halloween_vlaste_city_notes

**Label:** Holy City of Vlaste Notes

Key details to preserve:

- Adventurer's Point is the major guildhall.
- Grand Marquis Kenneth Ashbury II resides in the Grand Marquis' Manor.
- Basilica Lux contains shrines to Helm, Eldath, Chauntea, Lathander, and Selûne.
- Vigiles Urbani Castra is the barracks/training ground for Vlaste's peacekeepers; Prefect Emelio Castus is the highest noted authority.
- The Cohortium Annex is a local adventurer trial ground.
- The Enclosed Bazaar can hide exotic goods and Thieves' Guild interest.
- The Laughing Donkey is owned by Grum, a half-orc, and is a good rumor source.

---

### reference_halloween_original_prep_summary

**Label:** Original Prep Summary

Original prep framed the quest as an urgent Church of Light request to investigate an abbey near Barovia/Treville that had gone silent. The party would discover a deserted town, a charmed woman seeking a gala invitation, and a Count whose daughter wanted more “dolls.”

Actual play complicated this into a social inversion: the Count's household was not the true predator, and the dark monk/rogue vampire became the actual villain.

---

### reference_halloween_actual_play_summary

**Label:** Actual Play Evolution Summary

Two runs produced different routes. One party went monastery first, interrupting the dark monk's conversions and preserving more of the abbey. Another route can go town first, triggering a Varghiest attack that night and allowing more monks to be turned or ghouled before the party reaches the monastery.

The Count's daughter was reframed as a lonely natural-born vampire child. The gala became a social infiltration scene full of vampire politics, blood rose tea, glamored but unharmed townsfolk, and the legendary “Vader von Vaderham” queue moment.

---

### reference_halloween_varghiest_reference

**Label:** Varghiest Monster Reference

Preserved visible traits:

- Large undead chaotic evil.
- AC around 15 natural armor.
- HP around 137.
- Speed 30 ft, fly 70 ft.
- STR 20, DEX 18, CON 20, INT 7, WIS 15, CHA 10.
- Blood Frenzy.
- Dive Attack.
- Regeneration.
- Frightful Presence in ancient variant.
- Multiattack with claws and bite.
- Bite reduces maximum hit points.

Recommended use: rogue vampire weapon, night attack, and/or final boss monster phase.

---

### reference_halloween_blood_rose_tea

**Label:** Blood Rose Tea

Blood rose tea is the Count's household substitute for direct feeding. It smells floral, metallic, and warm. It is both a moral marker and a political liability; other vampire houses may view it as weakness or eccentric restraint.

---

### reference_halloween_grand_court_rules

**Label:** Grand Court of Vampires — Implied Rules

- Mortal involvement must be glamored, hidden, or controlled.
- Noble houses must maintain predatory appearances.
- Weakness invites rival action.
- Natural-born vampires are rare and politically valuable.
- A house can minimize harm privately while still performing monstrosity publicly.

---

## 12. Route Logic

### If the Party Goes Monastery First

- They arrive late evening.
- Monks are surprised and spooked.
- They encounter the bitten monk early.
- The dark monk pauses conversions because outsiders may discover him.
- Monastery Integrity starts higher.
- More monks can be saved.
- The holy armory is easier to discover.
- The Count retrieving his daughter becomes a major misdirection.

### If the Party Goes Town First

- They discover the empty town and gala clues earlier.
- Paula/Fabio likely appear before Brother Arnold.
- Count Suspicion rises faster.
- The Varghiest attacks that night.
- The dark monk continues turning/ghouling monks.
- The monastery is worse when reached.
- The Count's monastery breach looks even more damning.

---

## 13. Reusable Run Sheet

### Act 1 — The Review

1. Free roam in Vlaste.
2. Runner summons party.
3. Damien warns them about the Arbiter.
4. Party overhears Sebastian and Arbiter.
5. Sebastian briefs the field test.
6. Transport waivers and arcane dais.

### Act 2 — First Route Choice

1. Arrival in outskirts.
2. Choose town or monastery.
3. Branch consequences begin immediately.

### Act 3A — Monastery First

1. Spooked monks.
2. Bitten monk.
3. Brother Arnold.
4. Interrupt dark monk's conversions.
5. Possible forgotten armory.

### Act 3B — Town First

1. Deserted streets.
2. Paula waltzing.
3. Fabio collects her.
4. Child clue.
5. Varghiest night attack.
6. Monastery corruption advances.

### Act 4 — Child and Count Misdirection

1. Party finds the child.
2. Child may flee into hangman tree danger.
3. Party brings her to monastery.
4. Count appears and retrieves her.
5. Party likely assumes Count is the main villain.

### Act 5 — Invitation and Queue

1. Party secures or fakes invitation.
2. Queue countdown.
3. Cover story test.
4. Enter gala watched, accepted, or exposed.

### Act 6 — Gala Inversion

1. Glamored townsfolk are unharmed.
2. Blood rose tea reveal.
3. Vampire noble gossip.
4. Daughter is polite and lonely.
5. Count is not clean, but not the killer.

### Act 7 — Dark Monk Reveal and Boss

1. Dark monk appears or is exposed.
2. Human vampire phase.
3. Super Varghiest phase.
4. Holy armory pays off.

### Act 8 — Return and Review

1. Survivors restored or compensated.
2. Count politically indebted or wary.
3. Monastery cleansed or mourned.
4. Party returns to Vlaste.
5. Sebastian and/or Arbiter judge the field test.

---

## 14. Preserved Actual-Play Anecdote

At the gala entrance, the players were stuck in a queue while trying to invent a cover story. The GM counted down their place in line—seventh, sixth, fifth, fourth—creating immediate social pressure. In panic, someone blurted out:

> “This is Vader von Vaderham... of the Vaderhams!”

The party rolled a 7 and thought they were doomed, but the guard rolled a natural 1, so the ridiculous identity worked.

This beat should be preserved as both a table memory and a reusable scene technique: countdown social pressure forces hilarious, memorable improvisation.

---

## 15. Future Expansion Hooks

- Name the Count and his house.
- Name the daughter.
- Decide whether Fabio is loyal, embarrassed, or politically trapped.
- Give the dark monk a true name and former monastery identity.
- Build 5e stat blocks or system-neutral encounter cards for the Dark Monk, Varghiest, Hangman Tree, and Gala Guards.
- Create a one-page player-facing handout for the field test notice.
- Create a GM dashboard data bundle using actors, factions, locations, scenes, threads, trackers, references, fireable moments, and tables.

