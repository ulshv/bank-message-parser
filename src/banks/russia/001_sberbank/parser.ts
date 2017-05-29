// Sberbank parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parser100 = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  if (!(data && data.length === 8)) return;

  const transaction: Transaction = {
    action   : data[3] || data[4],
    balance  : parseFloat(data[7]),
    card     : data[1],
    datetime : data[2],
    type     : data[4] ? 'income' : 'outcome',
    value    : parseFloat(data[5]),
    vendor   : data[6] || null,
  }

  return transaction;
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const parser = parsersById[pattern.id];
  if (!parser) return;

  return parser(message, pattern);
}

const parsersById: ParsersById = {
  100: parser100
}

const parser: Parser = {
  parseMessage,
};

export default parser;
