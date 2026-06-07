// Generic filter helpers.
// Keep this file campaign-agnostic. Do not hardcode Valhalla-specific filters here.

export function filterByStatus(items = [], status) {
  if (!status || status === "all") return items;
  return items.filter((item) => item.status === status);
}

export function filterByTag(items = [], tag) {
  if (!tag || tag === "all") return items;
  return items.filter((item) => item.tags?.includes(tag));
}

export function filterByType(items = [], type) {
  if (!type || type === "all") return items;
  return items.filter((item) => item.type === type || item.category === type);
}

export function filterHasAnswerMoments(items = [], enabled = false) {
  if (!enabled) return items;
  return items.filter((item) => item.answerMoments?.length);
}

export function filterHasRumorAnswers(items = [], enabled = false) {
  if (!enabled) return items;
  return items.filter((item) => item.rumorAnswers?.length);
}

export function filterHasOutcomeShift(items = [], enabled = false) {
  if (!enabled) return items;

  return items.filter((item) => {
    return Boolean(
      item.outcomeShift?.question ||
      item.outcomeShift?.levers?.length ||
      item.outcomeShift?.consequences?.length
    );
  });
}

export function filterHasSkillGates(items = [], enabled = false) {
  if (!enabled) return items;
  return items.filter((item) => item.skillGates?.length);
}

export function applyFilters(items = [], filters = {}) {
  let output = items;

  output = filterByStatus(output, filters.status);
  output = filterByTag(output, filters.tag);
  output = filterByType(output, filters.type);
  output = filterHasAnswerMoments(output, filters.hasAnswerMoments);
  output = filterHasRumorAnswers(output, filters.hasRumorAnswers);
  output = filterHasOutcomeShift(output, filters.hasOutcomeShift);
  output = filterHasSkillGates(output, filters.hasSkillGates);

  return output;
}