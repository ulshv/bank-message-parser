import { Message, Transaction } from './common';

export type MessageTransactionPair = {
  message: Message,
  transaction: Transaction
};

export type MessagePatternPair = {
  message: Message,
  pattern_id: number | null
};
