import { MessagePatternPair } from "../../../src/types";
import { patternsById } from "../../../src/data/patterns";

const pairs: MessagePatternPair[] = [
  {
    message: "Karta *4503; Pokupka: RU/SYKTYVKAR/OKEY; 354.50 RUR; Data: 01/05/2017; Dostupny Ostatok: 5000 RUR. Raiffeisenbank",
    pattern: patternsById[300]
  },
  {
    message: "Karta *6597; Pokupka: RU/SYKTYVKAR/LENTA; 543.00 RUR; Data: 01/05/2017; Dostupny Ostatok: 5000.96 RUR. Raiffeisenbank",
    pattern: patternsById[300]
  },
  {
    message: "Karta *4683; Pokupka: RU/MOSCOW/RAMBLER/KASSA; 540.00 RUR; Data: 04/05/2017; Dostupny Ostatok: 4234.46 RUR. Raiffeisenbank",
    pattern: patternsById[300]
  }
];

export default pairs;
