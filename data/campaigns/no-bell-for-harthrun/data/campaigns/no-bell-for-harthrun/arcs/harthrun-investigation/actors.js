const base = { modeId: "questforge-default", campaignId: "no_bell_for_harthrun", arcId: "harthrun_investigation", status: "available" };

export const actors = [
  {
    ...base, id: "actor_fort_dios_duty_officer", name: "Fort Dios Duty Officer", role: "Overextended briefing authority", currentLocation: "location_fort_dios", currentState: "Tired, direct, and responsible for sending the party where soldiers still cannot be spared.", sticky: true,
    presentation: { physicality: "Ink-stained cuffs, rain-damp cloak, sleepless posture.", voice: "Precise and economical; never defensive until blame is implied.", sceneImpact: "Makes Fort Dios's triage legible without excusing its cost." },
    motivation: { wants: "A verified account and a contained threat.", fears: "That Harthrun is one breach among several and the fort has already lost the wider front." },
    knowledge: { knows: ["The constabulary requested aid.", "The request was unconfirmed when the fort was engaged on multiple fronts.", "No unit was dispatched."], secrets: ["The refusal still troubles the personnel who processed it."] },
    quickLines: ["We did not call them liars. We said we could not strip a wall for a report we could not verify.", "Find out what happened. If anyone lives, bring them back."], relatedThreads: ["thread_harthrun_request_for_aid"], reference: "library/00_adventure_overview.md", tags: ["fort-dios", "briefing", "authority"]
  },
  {
    ...base, id: "actor_subsumed_captain", name: "Subsumed Captain", role: "Controlled field patrol commander", currentLocation: "location_conversion_chambers", currentState: "A commander from another village, preserved as an articulate node for the demon's orders.", sticky: true,
    presentation: { physicality: "Familiar field armor over a body held unnaturally still.", voice: "Calm military cadence with no wasted motion or emotion.", sceneImpact: "His speech distinguishes command-geas control from silent thrall conversion." },
    motivation: { wants: "Whatever the demon writes through him.", fears: "Buried beneath the geas; a moment of restored agency may expose terror." },
    knowledge: { knows: ["Mine defenses and captive counts.", "The demon's immediate commands.", "Allied patrol language and habits."], secrets: ["He is not a willing collaborator."] },
    quickLines: ["Weapons down. You are relieved of independent action.", "The village has been brought into order."], relatedThreads: ["thread_subsumed_captain", "thread_ledger_command_network"], reference: "library/02_ledger_command_geas.md", tags: ["captain", "command-node", "victim", "boss-transition"]
  },
  {
    ...base, id: "actor_ichor_demon", name: "Ichor Demon", role: "Legion commander and conversion architect", currentLocation: "location_conversion_chambers", currentState: "Directing conversion while testing the captured communication network.", sticky: true,
    presentation: { physicality: "A war-form lacquered in black-red blood, shaped around a brutal spike-grown weapon.", voice: "Rarely speaks aloud; authority appears as fresh commands and compelled action.", sceneImpact: "Turns occupation, conversion, and written command into one battlefield system." },
    motivation: { wants: "Control of the Darksen and access to allied communication channels.", fears: "Loss of the ledger network before the operation can propagate." },
    knowledge: { knows: ["How the ichor spikes convert bodies.", "How to propagate commands through linked ledgers.", "Where the Legion intends to expand next."], secrets: ["Harthrun is a field operation, not the final objective."] },
    quickLines: ["Obedience travels farther than armies.", "You carried the road into your own walls."], relatedThreads: ["thread_ichor_conversion", "thread_ledger_command_network", "thread_ichor_legion_expansion"], reference: "library/05_ichor_demon_encounter.md", tags: ["demon", "commander", "boss", "ichor-legion"]
  }
];
