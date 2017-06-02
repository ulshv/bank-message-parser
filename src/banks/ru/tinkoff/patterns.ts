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
  {
    id: 2,
    bank_id: "ru.tinkoff",
    regexp: /(\d{2}\.\d{2}\.\d{2}(?: \d{2}:\d{2})?) \d{2}\.\d{2}\.\d{2} (\+)?(\d[\s\d]*(?:\.\d{2})?) (\w+)(?: \+?(?:\d[\s\d]*(?:\.\d{2})?) \4)? (?:(Оплата|Пополнение)\s?(?:[\.\wа-яё]+)? (.*)|(Проценты.*|Вознаграждение.*|Плата.*?sms.*))/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      action   : data[5] || data[7],
      balance  : null,
      card     : null,
      datetime : data[1],
      type     : data[2] ? 'income' : 'outcome',
      value    : parseFloat(data[3].replace(/\s/g, '')),
      vendor   : data[6] || null,
    } as Transaction),
  }
];

export default patterns;
