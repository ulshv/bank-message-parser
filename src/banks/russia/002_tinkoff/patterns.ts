// Tinkoff patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 200,
    bank_id: 2,
    regexp: /(?:(Pokupka))\. Karta (\*\d+)\. Summa (\d+(?:.\d+)?) RUB\. ([\w\d\s.,а-яё]*?)\. (\d+\.\d+\.\d+ \d+:\d+)\. Dostupno (\d+(?:\.\d+)?) RUB\. Tinkoff\.ru/i
  },
];

export default patterns;
