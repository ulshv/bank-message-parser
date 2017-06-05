import banks, { banksById, patterns } from './banks';
import { Message, Transaction, Pattern } from './types';

export const getPatternFromMessage = (message: Message, bankId? : string)
: Pattern | void =>
  patterns.find(pattern => (
    (bankId ? pattern.bank_id === bankId : true) &&
    pattern.regexp.test(message)
  ));

export const getTransaction = (message: Message, pattern: Pattern)
: Transaction | void => {
  const data = message.match(pattern.regexp);
  if (data) return pattern.parser(data);
}

const main = (message: Message, bankId? : string)
: Transaction | void => {
  const pattern = getPatternFromMessage(message);
  if (pattern) return getTransaction(message, pattern);
}

export default main;
