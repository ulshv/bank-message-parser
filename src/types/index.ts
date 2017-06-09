export type Pattern = {
  id: number,
  bank_id: string,
  regexp: RegExp,
  parser: Parser,
};

export type Transaction = {
  balance: number | null,
  card: string | null,
  currency: string,
  datetime: string,
  description: string | null,
  flow: '+' | '-', // income or expenses
  value: number,
  vendor: string | null,
};

export type Bank = {
  id: string,
  patterns: Pattern[],
};

export type TestCase = {
  message: string,
  bank_id: string | null,
  pattern_id: number | null,
  transaction: Transaction | null,
};

export type Props = {
  bankId?: string,
  timezone?: number,
};

export type StringMap = {
  [key: string]: string,
}

export interface Parser {
  (data: RegExpMatchArray, props: Props): Transaction;
}
