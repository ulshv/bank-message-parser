// Raiffeisen parser

import { Message, Pattern, Transaction, Parser, ParsersById } from '../../../types';

const parsersById: ParsersById = {
  300: (data: RegExpMatchArray): Transaction => ({
    action   : data[2],
    balance  : parseFloat(data[6]),
    card     : data[1],
    datetime : data[5],
    type     : 'outcome',
    value    : parseFloat(data[4]),
    vendor   : data[3] || null,
  } as Transaction),
}

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  const data = message.match(pattern.regexp);
  const parser = parsersById[pattern.id];

  if (data && parser) return parser(data);
}

export default { parseMessage } as Parser;
