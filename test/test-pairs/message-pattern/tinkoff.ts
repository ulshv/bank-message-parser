import { MessagePatternPair } from "../../../src/types";
import { patternsById } from "../../../src/data/patterns";

const pairs: MessagePatternPair[] = [
  {
    message: "Pokupka. Karta *9486. Summa 447.00 RUB. LENTA, SYKTYVKAR. 13.05.2017 20:19. Dostupno 3500.99 RUB. Tinkoff.ru",
    pattern: patternsById[200]
  },
  {
    message: "Pokupka. Karta *5823. Summa 318.00 RUB. PYATEROCHKA 7078, SYKTYVKAR. 18.05.2017 21:32. Dostupno 29204.00 RUB. Tinkoff.ru",
    pattern: patternsById[200]
  },
  {
    message: "Vhod v Tinkoff.ru uspeshno vypolnen v 18:37 06.04.2017. Esli vhod proizveli ne vy, pozvonite v Bank po nomeru 88005551010. Tinkoff.ru",
    pattern: null
  }
];

export default pairs;
