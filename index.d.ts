import {
  Bank,
  Message,
  Pattern,
  Transaction,
  Parser,
} from './src/types';

export const getPatternFromMessage:
  (message: Message, bankId?: string) => Pattern | void;
export const getTransaction:
  (message: Message, pattern: Pattern) => Transaction | void;
declare const main:
  (message: Message, bankId?: string) => Transaction | void;

export default main;
