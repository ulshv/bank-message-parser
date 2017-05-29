// Tinkoff parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parser200 = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  if (!(data && data.length === 7)) return;

  const transaction: Transaction = {
    action   : data[1],
    balance  : parseFloat(data[6]),
    card     : data[2],
    datetime : data[5],
    type     : 'outcome',
    value    : parseFloat(data[3]),
    vendor   : data[4] || null,
  }

  return transaction;
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const parser = parsersById[pattern.id];
  if (!parser) return;

  return parser(message, pattern);
}

const parsersById: ParsersById = {
  200: parser200
}

const parser: Parser = {
  parseMessage,
};

export default parser;
