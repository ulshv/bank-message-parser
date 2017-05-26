export type Message = string;

export type Transaction = {
  card: string,
  datetime: string,
  hash: string,
  type: string,
  value: number,
  vendor: string
};

export type Bank = {
  id: number,
  name: string
};

export type Pattern = {
  id: number,
  bank_id: number,
  regexp: RegExp
};

export type Null = null | void;
