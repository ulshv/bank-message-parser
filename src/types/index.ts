export type Message = string;
export type PatternId = number;

export type Pattern = {
  id: number,
  bank_id: string,
  regexp: RegExp,
};

export type Transaction = {
  action: string | null,
  balance: number | null,
  card: string,
  datetime: string,
  type: string,
  value: number,
  vendor: string | null,
};

export type Bank = {
  id: string,
  patterns: Pattern[]
  testCases: TestCase[] | null,
  parser: Parser,
};

export type TestCase = {
  message: Message,
  pattern_id: PatternId | null,
  transaction: Transaction | null,
};

export type Parser = {
  parseMessage: ParseMessageFunc,
};

export type ParsersById = {
  [id: number]: ParserFunc;
}

export interface ParseMessageFunc {
  (message: Message, pattern: Pattern): Transaction | void;
}

export interface ParserFunc {
  (data: RegExpMatchArray): Transaction;
};
