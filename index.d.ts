import {
  Bank,
  Message,
  Pattern,
  Transaction,
  Parser,
} from './src/types';

export const getPatternFromMessage: (message: Message, bankId?: string) => Pattern;
export const getTransaction: (message: Message, pattern: Pattern) => Transaction;
declare const main: (message: Message, bankId?: string) => Transaction;
export default main;
