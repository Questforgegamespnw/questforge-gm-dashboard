export function uniqueById(items = []) {
  const seen = new Set();
  const output = [];

  for (const item of items) {
    if (!item?.id || seen.has(item.id)) continue;
    seen.add(item.id);
    output.push(item);
  }

  return output;
}
