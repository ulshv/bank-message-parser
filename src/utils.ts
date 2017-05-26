import {
  Message,
  Bank,
  Pattern
} from './types/common';

import banks from './data/banks'
import patterns from './data/patterns';

/**
 * Convert array like `[ {id: 5, ...etc } ]` to object like `{ 5: { id: 5, ...etc }}`
 */
export function arrayToObjectWithIds <T extends { id: number }> (arr: T[]): { [id: number]: T } {
  const objectWithIds: { [id: number]: T } = {};
  arr.forEach(item => objectWithIds[item.id] = item);
  return objectWithIds;
}

/**
 * Trim too long messages using '...' separator in the middle
 */
export const trimText = (
  text: string,
  limit: number = 55,
  separator: string = ' ... '
): string => {
  if (text.length <= limit) return text;
  const half = Math.round((limit - separator.length) / 2)
  return text.substr(0, half) + separator + text.substr(text.length - half, text.length);
}
