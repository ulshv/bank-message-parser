// Tinkoff patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.tinkoff",
    regexp: /(?:(Pokupka))\. Karta (\*\d+)\. Summa (\d+(?:\.\d+)?) RUB\. ([\w\d\s.,а-яё]*?)\. (\d+\.\d+\.\d+ \d+:\d+)\. Dostupno (\d+(?:\.\d+)?) RUB\. Tinkoff\.ru/i
  },
];

export default patterns;
