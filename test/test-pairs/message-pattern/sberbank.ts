import { MessagePatternPair } from "../../../src/types";
import { patternsById } from "../../../src/data/patterns";

const pairs: MessagePatternPair[] = [
  {
    message: "VISA1234 15.05.17 12:45 оплата услуг 100р TELE2 Баланс: 1000.50р",
    pattern: patternsById[10]
  }
];

export default pairs;
