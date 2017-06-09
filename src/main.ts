import banks, { banksById, patterns } from './banks';
import { Transaction, Props, Pattern } from './types';

export const getPatternFromMessage = (message: string, props: Props = {})
: Pattern | void => {
  const { bankId } = props;
  return patterns.find(pattern => (
    (bankId ? pattern.bank_id === bankId : true) &&
    pattern.regexp.test(message)
  ));
}

export const getTransaction = (message: string, pattern: Pattern, props: Props = {})
: Transaction | void => {
  const data = message.match(pattern.regexp);
  if (data) return pattern.parser(data, props);
}

const main = (message: string, props?: Props)
: Transaction | void => {
  const pattern = getPatternFromMessage(message, props);
  if (pattern) return getTransaction(message, pattern, props);
}

export default main;
