// @flow

export type Transaction = {
  card: string,
  datetime: number,
  hash: string,
  type: string,
  value: number,
  vendor: string
};

export type MessageTransactionPair = {
  message: string,
  transaction: Transaction
}
