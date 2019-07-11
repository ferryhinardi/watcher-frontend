export function flatListKeyExtractor(item, index) {
  return item.id ? `key_${item.id}` : `key_${index}`;
}
