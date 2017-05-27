import { banksById, patterns } from './banks';
import {
  Message,
  Transaction,
  Pattern
} from './types';

export const getPatternByMessage = (message: Message): Pattern | void =>
  patterns.find(pattern => pattern.regexp.test(message));

export const getTransaction = (message: Message, pattern: Pattern): Transaction | void => {
  const bank = banksById[pattern.bank_id];
  return bank.parser(message, pattern);
}

const main = (message: Message): Transaction | void => {
  const pattern = getPatternByMessage(message);
  if (!pattern) return;

  return getTransaction(message, pattern);
}

export default main;
