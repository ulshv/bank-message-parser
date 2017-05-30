// Raiffeisen test cases

import { TestCase } from "../../../types";

const testCases: TestCase[] = [
  {
    message: "Karta *4503; Pokupka: RU/SYKTYVKAR/OKEY; 354.50 RUR; Data: 01/05/2017; Dostupny Ostatok: 5000 RUR. Raiffeisenbank",
    pattern_id: 300,
    transaction: {
      action: "Pokupka",
      balance: 5000,
      card: "*4503",
      datetime: "01/05/2017",
      type: "outcome",
      value: 354.5,
      vendor: "RU/SYKTYVKAR/OKEY",
    },
  },
  {
    message: "Karta *6597; Pokupka: RU/SYKTYVKAR/LENTA; 543.00 RUR; Data: 01/05/2017; Dostupny Ostatok: 5000.96 RUR. Raiffeisenbank",
    pattern_id: 300,
    transaction: {
      action: "Pokupka",
      balance: 5000.96,
      card: "*6597",
      datetime: "01/05/2017",
      type: "outcome",
      value: 543,
      vendor: "RU/SYKTYVKAR/LENTA",
    },
  },
  {
    message: "Karta *4683; Pokupka: RU/MOSCOW/RAMBLER/KASSA; 540.00 RUR; Data: 04/05/2017; Dostupny Ostatok: 4234.46 RUR. Raiffeisenbank",
    pattern_id: 300,
    transaction: {
      action: "Pokupka",
      balance: 4234.46,
      card: "*4683",
      datetime: "04/05/2017",
      type: "outcome",
      value: 540,
      vendor: "RU/MOSCOW/RAMBLER/KASSA",
    },
  }
];

export default testCases;