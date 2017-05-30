// Sberbank parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parsersById: ParsersById = {
  100: (data: RegExpMatchArray): Transaction => ({
    action   : data[3] || data[4],
    balance  : parseFloat(data[7]),
    card     : data[1],
    datetime : data[2],
    type     : data[4] ? 'income' : 'outcome',
    value    : parseFloat(data[5]),
    vendor   : data[6] || null,
  } as Transaction),
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  const parser = parsersById[pattern.id];

  if (data && parser) return parser(data);
}

export default { parseMessage } as Parser;
