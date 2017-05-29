// Tinkoff test cases

import { TestCase } from "../../../types";

const testCases: TestCase[] = [
  {
    message: "Pokupka. Karta *1234. Summa 447.00 RUB. LENTA, SYKTYVKAR. 13.05.2017 20:19. Dostupno 3500.99 RUB. Tinkoff.ru",
    pattern_id: 200,
    transaction: {
      action: "Pokupka",
      balance: 3500.99,
      card: "*1234",
      datetime: "13.05.2017 20:19",
      type: "outcome",
      value: 447,
      vendor: "LENTA, SYKTYVKAR",
    },
  },
  {
    message: "Pokupka. Karta *9876. Summa 318.00 RUB. PYATEROCHKA 7078, SYKTYVKAR. 12.05.2017 21:30. Dostupno 2904 RUB. Tinkoff.ru",
    pattern_id: 200,
    transaction: {
      action: "Pokupka",
      balance: 2904,
      card: "*9876",
      datetime: "12.05.2017 21:30",
      type: "outcome",
      value: 318,
      vendor: "PYATEROCHKA 7078, SYKTYVKAR",
    },
  },
  {
    message: "Vhod v Tinkoff.ru uspeshno vypolnen v 18:37 06.04.2017. Esli vhod proizveli ne vy, pozvonite v Bank po nomeru 88005551010. Tinkoff.ru",
    pattern_id: null,
    transaction: null,
  }
];

export default testCases;
