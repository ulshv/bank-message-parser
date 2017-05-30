// Tinkoff patterns

import { Pattern, Transaction } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.tinkoff",
    regexp: /(?:(Pokupka))\. Karta (\*\d+)\. Summa (\d+(?:\.\d+)?) RUB\. ([\w\d\s.,а-яё]*?)\. (\d+\.\d+\.\d+ \d+:\d+)\. Dostupno (\d+(?:\.\d+)?) RUB\. Tinkoff\.ru/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      action   : data[1],
      balance  : parseFloat(data[6]),
      card     : data[2],
      datetime : data[5],
      type     : 'outcome',
      value    : parseFloat(data[3]),
      vendor   : data[4] || null,
    } as Transaction),
  },
];

export default patterns;
