// Raiffeisen patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 300,
    bank_id: 3,
    regexp: /Karta (\*\d+); (?:(Pokupka)): ([\w\d\s.,\/а-яё]*?); (\d+(?:\.\d+)?) RUR; Data: (\d+\/\d+\/\d+); Dostupny Ostatok: (\d+(?:\.\d+)?) RUR. Raiffeisenbank/i
  },
];

export default patterns;
