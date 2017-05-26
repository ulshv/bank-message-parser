import { MessagePatternPair } from "../../../src/types";
import { patternsById } from "../../../src/data/patterns";

const pairs: MessagePatternPair[] = [
  {
    message: "Pokupka. Karta *9486. Summa 447.00 RUB. LENTA, SYKTYVKAR. 13.05.2017 20:19. Dostupno 3500.99 RUB. Tinkoff.ru",
    pattern: patternsById[20]
  }
];

export default pairs;
