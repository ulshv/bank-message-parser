// Tinkoff parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parsersById: ParsersById = {
  1: (data: RegExpMatchArray): Transaction => ({
    action   : data[1],
    balance  : parseFloat(data[6]),
    card     : data[2],
    datetime : data[5],
    type     : 'outcome',
    value    : parseFloat(data[3]),
    vendor   : data[4] || null,
  } as Transaction),
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  const parser = parsersById[pattern.id];

  if (data && parser) return parser(data);
}

export default { parseMessage } as Parser;
