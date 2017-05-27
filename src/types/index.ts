export type Message = string;
export type PatternId = number;

export type Pattern = {
  id: number,
  bank_id: number,
  regexp: RegExp
};

export type Transaction = {
  balance: number | null,
  card: string,
  datetime: string,
  type: string,
  value: number,
  vendor: string | null,
};

export type Bank = {
  id: number,
  name: string
};

export type BankModule = {
  bank: Bank,
  patterns: Pattern[]
  testCases: MessagePatternTransaction[],
};

export type MessagePatternTransaction = {
  message: Message,
  pattern_id: PatternId | null,
  transaction: Transaction | null,
};
