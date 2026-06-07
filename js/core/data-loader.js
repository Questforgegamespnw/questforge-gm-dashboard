import { uniqueById } from "./utils.js";

export function getActiveData(campaignData) {
  const loadout = campaignData.currentLoadout;

  return {
    actors: filterByIds(campaignData.actors, loadout.activeActors),
    locations: filterByIds(campaignData.locations, loadout.activeLocations),
    ambientCast: filterByIds(campaignData.ambientCast ?? [], loadout.activeAmbientCast ?? []),
    factions: filterByIds(campaignData.factions, loadout.activeFactions),
    scenes: filterByIds(campaignData.scenes, loadout.activeScenes),
    fireableMoments: filterByIds(campaignData.fireableMoments ?? [], loadout.activeFireableMoments ?? loadout.activeMoments ?? []),
    threads: filterByIds(campaignData.threads, loadout.activeThreads),
    trackers: filterByIds(campaignData.trackers, loadout.activeTrackers),
    tables: filterByIds(campaignData.tables, loadout.activeTables),
    references: filterByIds(campaignData.references, loadout.activeReferences)
  };
}

export function mergeCampaignLayers(globalItems = [], arcItems = [], sessionItems = []) {
  return uniqueById([...globalItems, ...arcItems, ...sessionItems]);
}

export function searchData(items, searchTerm = "") {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return items;

  return items.filter((item) => searchableText(item).includes(query));
}

function filterByIds(items = [], ids = []) {
  if (!ids?.length) return [];

  const idSet = new Set(ids);
  return items.filter((item) => idSet.has(item.id));
}

function searchableText(item) {
  return [
    item.id,
    item.name,
    item.title,
    item.label,
    item.role,
    item.type,
    item.status,
    item.currentState,
    item.summary,
    item.pressure,
    item.names?.join(" "),
    item.voices?.join(" "),
    item.hookLines?.join(" "),
    item.interactionSeeds?.join(" "),
    item.gmNotes,
    item.presentation?.vibe,
    item.presentation?.physicality,
    item.presentation?.voice,
    item.presentation?.sceneImpact,
    item.presentation?.establishingShot,
    item.motivation?.wants,
    item.motivation?.fears,
    item.knowledge?.knows?.join(" "),
    item.knowledge?.secrets?.join(" "),
    item.clues?.join(" "),
    item.outcomes?.join(" "),
    flattenAnswerMoments(item.answerMoments),
    flattenRumorAnswers(item.rumorAnswers),
    flattenOutcomeShift(item.outcomeShift),
    flattenSkillGates(item.skillGates),
    item.tags?.join(" ")
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function flattenAnswerMoments(answerMoments = []) {
  return answerMoments.map((moment) => [
    moment.id,
    moment.question,
    moment.answer,
    moment.tableLine,
    moment.reveals?.join(" "),
    moment.gatedBy?.skills?.join(" "),
    moment.gatedBy?.minTier,
    moment.relatedThreads?.join(" "),
    moment.tags?.join(" ")
  ].filter(Boolean).join(" ")).join(" ");
}

function flattenRumorAnswers(rumorAnswers = []) {
  return rumorAnswers.map((rumor) => [
    rumor.prompt,
    rumor.response,
    rumor.reveals?.join(" "),
    rumor.relatedThreads?.join(" "),
    rumor.tags?.join(" ")
  ].filter(Boolean).join(" ")).join(" ");
}

function flattenOutcomeShift(outcomeShift) {
  if (!outcomeShift) return "";

  return [
    outcomeShift.question,
    outcomeShift.levers?.join(" "),
    outcomeShift.consequences?.join(" ")
  ].filter(Boolean).join(" ");
}

function flattenSkillGates(skillGates = []) {
  return skillGates.map((gate) => [
    gate.id,
    gate.skills?.join(" "),
    gate.tier,
    gate.visible,
    gate.reveal,
    gate.consequence,
    gate.tags?.join(" ")
  ].filter(Boolean).join(" ")).join(" ");
}
