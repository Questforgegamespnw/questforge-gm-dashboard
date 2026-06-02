// Placeholder for future filter helpers.
// Keep this file generic. Do not hardcode Valhalla-specific filters here.

export function filterByStatus(items, status) {
  if (!status || status === "all") return items;
  return items.filter((item) => item.status === status);
}

export function filterByTag(items, tag) {
  if (!tag || tag === "all") return items;
  return items.filter((item) => item.tags?.includes(tag));
}
