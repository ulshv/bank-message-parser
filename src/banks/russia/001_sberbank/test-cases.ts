// Sberbank test cases

import { TestCase } from "../../../types";

const testCases: TestCase[] = [
  {
    message: "VISA1234 15.05.17 12:45 оплата услуг 100р TELE2 Баланс: 1000.50р",
    pattern_id: 100,
    transaction: {
      balance: 1000.5,
      card: "VISA1234",
      datetime: '15.05.17 12:45',
      type: "outcome",
      value: 100,
      vendor: "TELE2",
    }
  },
  {
    message: "VISA2345 23.04.17 19:50 покупка 19990р ELDORADO Баланс: 9500р",
    pattern_id: 100,
    transaction: {
      balance: 9500,
      card: "VISA2345",
      datetime: '23.04.17 19:50',
      type: "outcome",
      value: 19990,
      vendor: "ELDORADO",
    }
  },
  {
    message: "VISA3456 05.02.17 16:55 списание 2900р Баланс: 21592.69р",
    pattern_id: 100,
    transaction: {
      balance: 21592.69,
      card: "VISA3456",
      datetime: '05.02.17 16:55',
      type: "outcome",
      value: 2900,
      vendor: null,
    }
  },
  {
    message: "VISA4567: перевод 300р. на карту получателя ИВАН ИВАНОВ И. выполнен",
    pattern_id: null,
    transaction: null
  }
];

export default testCases;
