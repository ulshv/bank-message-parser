import patterns from './data/patterns';
import {
  Message,
  Transaction,
  Pattern
} from './types/common';

export const getPatternByMessage = (message: Message): Pattern | void =>
  patterns.find(pattern => pattern.regexp.test(message));

const main = (message: Message): Transaction | void => {
  /*
  const pattern = getPatternByMessage(message);
  if (!pattern) return;
  */
}

export default main;
