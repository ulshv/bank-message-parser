// Raiffeisen parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parser300 = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  if (!(data && data.length === 7)) return;

  const transaction: Transaction = {
    action   : data[2],
    balance  : parseFloat(data[6]),
    card     : data[1],
    datetime : data[5],
    type     : 'outcome',
    value    : parseFloat(data[4]),
    vendor   : data[3],
  }

  return transaction;
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const parser = parsersById[pattern.id];
  if (!parser) return;

  return parser(message, pattern);
}

const parsersById: ParsersById = {
  300: parser300
}

const parser: Parser = {
  parseMessage,
};

export default parser;
