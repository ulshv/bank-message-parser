export type Message = string;

export type Pattern = {
  id: number,
  bank_id: string,
  regexp: RegExp,
  parser: Parser,
};

export type Transaction = {
  action: string | null,
  balance: number | null,
  card: string | null,
  datetime: string,
  type: string,
  value: number,
  vendor: string | null,
};

export type Bank = {
  id: string,
  patterns: Pattern[],
  testCases: TestCase[] | null,
  unsupported: string[] | null,
};

export type TestCase = {
  message: Message,
  bank_id: string | null,
  pattern_id: number | null,
  transaction: Transaction | null,
};

export interface Parser {
  (data: RegExpMatchArray | null): Transaction;
};
