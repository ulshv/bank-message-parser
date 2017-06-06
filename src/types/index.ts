export type Message = string;

export type Pattern = {
  id: number,
  bank_id: string,
  regexp: RegExp,
  parser: Parser,
};

export type Transaction = {
  balance: number | null,
  card: string | null,
  datetime: string,
  description: string | null,
  flow: '+' | '-', // income or expenses
  unixtime: number,
  value: number,
  vendor: string | null,
};

export type Bank = {
  id: string,
  patterns: Pattern[],
};

export type TestCase = {
  message: Message,
  bank_id: string | null,
  pattern_id: number | null,
  transaction: Transaction | null,
};

export type Props = {
  bankId?: string,
  timezone?: number,
};

export interface Parser {
  (data: RegExpMatchArray, props: Props): Transaction;
}
