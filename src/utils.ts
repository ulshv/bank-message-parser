/** Convert array like `[ { id: 5, ...etc } ]` to object like `{ 5: { id: 5, ...etc }}` */
export function arrayToObjectWithNumbIds <T extends { id: number }> (arr: T[]): { [id: number]: T } {
  return arr.reduce((obj, item) => obj[item.id] = item, {} as { [id: number]: T });
}

/** Convert array like `[ { id: 'some_id', ...etc } ]` to object like `{ some_id: { id: 5, ...etc }}` */
export function arrayToObjectWithStringIds <T extends { id: string }> (arr: T[]): { [id: string]: T } {
  const objectWithIds: { [id: string]: T } = {};
  arr.forEach(item => objectWithIds[item.id] = item);
  return objectWithIds;
}

/** Trim too long messages using '...' separator in the middle */
export const trimText = (
  text: string,
  limit: number = 55,
  separator: string = ' ... '
): string => {
  if (text.length <= limit) return text;
  const half = Math.round((limit - separator.length) / 2)
  return text.substr(0, half) + separator + text.substr(text.length - half, text.length);
}

/** Returns string with capitalized first character */
export const capitalize = (str?: string) => str && str.charAt(0).toUpperCase() + str.slice(1)
