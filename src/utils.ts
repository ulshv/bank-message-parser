import {
  Message,
  Bank,
  Pattern
} from './types/common';

import banks from './data/banks'
import patterns from './data/patterns';

export const getPatternByMessage = (message: Message): Pattern | void =>
  patterns.find(pattern => pattern.regexp.test(message));

export function arrayToObjectWithIds <T extends { id: number }> (arr: T[]): {[ id: number ]: T} {
  const o: { [id: number]: T } = {};
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, o);
}

/*
export function arrayToObjectWithIds <T extends { id: number }> (arr: T[]): {[ id: number ]: T} {
  const objectWithIds: {[ id: number ]: T} = {};
  arr.forEach(item => objectWithIds[item.id] = item);
  return objectWithIds;
}*/

