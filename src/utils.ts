import {
  Message,
  Bank,
  Pattern,
} from './types/common';
import patterns from './data/patterns';

export const getPatternByMessage = (message: Message): Pattern | void =>
  patterns.find(pattern => pattern.regexp.test(message));
