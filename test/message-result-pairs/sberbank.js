// @flow

import type { Transaction, MessageTransactionPair } from '../../src/types/common'

const pairs: MessageTransactionPair[] = [
  {
    message: "VISA1234 15.05.17 12:45 оплата услуг 100р TELE2 Баланс: 1000.50р",
    transaction: {
      card: "VISA1234",
      datetime: "15.03.17 12:45",
      vendor: "TELE2",
      value: 100,
      type: "outcome",
      hash: "a001131eb8d7323f34c5a36a6e3eb06d"
    }
  }
];

export default pairs
