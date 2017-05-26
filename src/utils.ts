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

