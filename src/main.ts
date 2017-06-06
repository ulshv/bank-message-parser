import banks, { banksById, patterns } from './banks';
import { Message, Transaction, Props, Pattern } from './types';

export const getPatternFromMessage = (message: Message, props: Props = {})
: Pattern | void => {
  const { bankId } = props;
  return patterns.find(pattern => (
    (bankId ? pattern.bank_id === bankId : true) &&
    pattern.regexp.test(message)
  ));
}

export const getTransaction = (message: Message, pattern: Pattern, props: Props = {})
: Transaction | void => {
  const data = message.match(pattern.regexp);
  if (data) return pattern.parser(data, props);
}

const main = (message: Message, props?: Props)
: Transaction | void => {
  const pattern = getPatternFromMessage(message, props);
  if (pattern) return getTransaction(message, pattern, props);
}

export default main;
