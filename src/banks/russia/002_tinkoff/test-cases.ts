// Tinkoff test cases

import { MessagePatternTransaction } from "../../../types";

const testCases: MessagePatternTransaction[] = [
  {
    message: "Pokupka. Karta *9486. Summa 447.00 RUB. LENTA, SYKTYVKAR. 13.05.2017 20:19. Dostupno 3500.99 RUB. Tinkoff.ru",
    pattern_id: 200,
    transaction: null,
  },
  {
    message: "Pokupka. Karta *5823. Summa 318.00 RUB. PYATEROCHKA 7078, SYKTYVKAR. 18.05.2017 21:32. Dostupno 29204.00 RUB. Tinkoff.ru",
    pattern_id: 200,
    transaction: null,
  },
  {
    message: "Vhod v Tinkoff.ru uspeshno vypolnen v 18:37 06.04.2017. Esli vhod proizveli ne vy, pozvonite v Bank po nomeru 88005551010. Tinkoff.ru",
    pattern_id: null,
    transaction: null,
  }
];

export default testCases;
