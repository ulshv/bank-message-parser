// Sberbank parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parser100 = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  if (!(data && data.length === 8)) return;

  const action = data[3] || data[4];
  const balance = parseFloat(data[7]);
  const card = data[1];
  const datetime = data[2];
  const value = parseFloat(data[5]);
  const vendor = data[6] || null;
  const type = data[4] ? 'income' : 'outcome';

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
  100: parser100
}

const parser: Parser = {
  parseMessage,
};

export default parser;
