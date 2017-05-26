import { MessagePatternPair } from "../../../src/types";
import { patternsById } from "../../../src/data/patterns";

const pairs: MessagePatternPair[] = [
  {
    message: "VISA1234 15.05.17 12:45 оплата услуг 100р TELE2 Баланс: 1000.50р",
    pattern: patternsById[100]
  },
  {
    message: "VISA2345 23.04.17 19:50 покупка 19990р ELDORADO Баланс: 9500р",
    pattern: patternsById[100]
  },
  {
    message: "VISA3456 05.02.17 16:55 списание 2900р Баланс: 21592.69р",
    pattern: patternsById[100]
  },
  {
    message: "VISA4567: перевод 300р. на карту получателя ИВАН ИВАНОВ И. выполнен",
    pattern: null
  }
];

export default pairs;
