import {
  Message,
  Transaction,
  Pattern
} from './common';

export type MessageTransactionPair = {
  message: Message,
  transaction: Transaction
};

export type MessagePatternPair = {
  message: Message,
  pattern?: Pattern
};
