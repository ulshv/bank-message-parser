import {
  Bank,
  Pattern,
  Transaction,
  Parser,
} from './src/types';

export const getPatternFromMessage:
  (message: string, bankId?: string) => Pattern | void;
export const getTransaction:
  (message: string, pattern: Pattern, timezone: string) => Transaction | void;
declare const main:
  (message: string, props?: { bankId?: string, timezone?: number | string | null }) => Transaction | void;

export default main;
