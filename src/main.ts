import banks, { banksById, patterns } from './banks';
import { Transaction, Props, Pattern } from './types';
import { parseTimezone } from './utils';

export const getPatternFromMessage = (message: string, bankId?: string)
: Pattern | void => (
  patterns.find(pattern => (
    (bankId ? pattern.bank_id === bankId : true) &&
    pattern.regexp.test(message)
  ))
);

export const getTransaction = (message: string, pattern: Pattern, timezone: string)
: Transaction | void => {
  const data = message.match(pattern.regexp);
  if (data) return pattern.parser(data, timezone);
}

const main = (message: string, props: Props = {}): Transaction | void => {
  const { bankId, timezone } = props;
  const pattern = getPatternFromMessage(message, bankId);

  if (pattern) return getTransaction(message, pattern, parseTimezone(timezone));
}

export default main;
