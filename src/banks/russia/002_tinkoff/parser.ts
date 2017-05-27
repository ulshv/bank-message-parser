// Tinkoff parser

import { Message, Pattern, Transaction, Parser } from '../../../types';

const parseMessage = (message: Message, pattern: Pattern): Transaction | void => {
  return;
}

const parser: Parser = {
  parseMessage,
};

export default parser;
