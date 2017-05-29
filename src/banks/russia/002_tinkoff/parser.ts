// Tinkoff parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parser200 = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  if (!(data && data.length === 7)) return;

  const action = data[1];
  const balance = parseFloat(data[6]);
  const card = data[2];
  const datetime = data[5];
  const type = 'outcome';
  const value = parseFloat(data[3]);
  const vendor = data[4];

  const transaction: Transaction = {
    action,
    balance,
    card,
    datetime,
    type,
    value,
    vendor,
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
