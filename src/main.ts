import banks, { banksById, patterns } from './banks';
import {
  Message,
  Transaction,
  Pattern
} from './types';

export const getPatternFromMessage = (message: Message): Pattern | void =>
  patterns.find(pattern => pattern.regexp.test(message));

export const getTransaction = (message: Message, pattern: Pattern): Transaction | void => {
  const bank = banksById[pattern.bank_id];
  const data = message.match(pattern.regexp);

  if (!data) return;

  return pattern.parser(data);
}

const main = (message: Message): Transaction | void => {
  const pattern = getPatternFromMessage(message);
  if (!pattern) return;

  return getTransaction(message, pattern);
}

export default main;
