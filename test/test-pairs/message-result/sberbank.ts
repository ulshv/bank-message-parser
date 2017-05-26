import { Transaction, MessageTransactionPair } from "../../../src/types";

const pairs: MessageTransactionPair[] = [
  {
    message: "VISA1234 15.05.17 12:45 оплата услуг 100р TELE2 Баланс: 1000.50р",
    transaction: {
      card: "VISA1234",
      datetime: '15.05.17 12:45',
      vendor: "TELE2",
      value: 100,
      type: "outcome",
      hash: "a001131eb8d7323f34c5a36a6e3eb06d"
    }
  },
  {
    message: "VISA2345 1.05.17 11:00 оплата услуг 50.50р МТС Баланс: 900.50р",
    transaction: {
      card: "VISA2345",
      datetime: '1.05.17 11:00',
      vendor: "МТС",
      value: 50.5,
      type: "outcome",
      hash: "6363fe744f74ee8f280958ab2f185dde"
    }
  }
];

export default pairs;
