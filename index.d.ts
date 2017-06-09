import {
  Bank,
  Pattern,
  Transaction,
  Parser,
} from './src/types';

export const getPatternFromMessage:
  (message: string, bankId?: string) => Pattern | void;
export const getTransaction:
  (message: string, pattern: Pattern) => Transaction | void;
declare const main:
  (message: string, bankId?: string) => Transaction | void;

export default main;
