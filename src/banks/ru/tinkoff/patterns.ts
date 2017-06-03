import { Pattern, Transaction } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.tinkoff",
    regexp: /(Pokupka)\. Karta (\*\d+)\. Summa (\d+(?:\.\d+)?) RUB\. ([\w\d\s.,а-яё]*?)\. (\d+\.\d+\.\d+ \d+:\d+)\. Dostupno (\d+(?:\.\d+)?) RUB\. Tinkoff\.ru/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      balance     : parseFloat(data[6]),
      card        : data[2],
      datetime    : data[5],
      description : 'Покупка',
      flow        : '-',
      value       : parseFloat(data[3]),
      vendor      : data[4] || null,
    } as Transaction),
  },
  {
    id: 2,
    bank_id: "ru.tinkoff",
    regexp: /(\d{2}\.\d{2}\.\d{2}(?: \d{2}:\d{2})?) \d{2}\.\d{2}\.\d{2} (\+)?(\d[\s\d]*(?:\.\d{2})?) (\w+)(?: \+?(?:\d[\s\d]*(?:\.\d{2})?) \4)? (?:(Оплата|Пополнение)\s?(?:[\.\wа-яё]+)? (.*)|(Проценты.*|Вознаграждение.*|Плата.*?sms.*))/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      balance     : null,
      card        : null,
      datetime    : data[1],
      description : data[5] || data[7],
      flow        : data[2] ? '+' : '-',
      value       : parseFloat(data[3].replace(/\s/g, '')),
      vendor      : data[6] || null,
    } as Transaction),
  },
  {
    id: 3,
    bank_id: "ru.tinkoff",
    regexp: /Vypiska ot (\d{2}\.\d{2}) po karte (\*\d+)\. Nachisleno protsentov: (\d+(?:\.\d+)?) (rub)\. Cashback: (\d+(?:\.\d+)?) (rub)\. Balans na (\d{2}\.\d{2}): (\d+(?:\.\d+)?) (rub)\. Tinkoff\.ru/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      balance     : parseFloat(data[8]),
      card        : data[2],
      datetime    : data[1],
      description : `Выписка от ${data[1]}. Проценты на остаток по счету и вознаграждение за операции покупок`,
      flow        : '+',
      value       : parseFloat((parseFloat(data[3]) + parseFloat(data[5])).toFixed(3)),
      vendor      : 'Tinkoff',
    } as Transaction),
  },
];

export default patterns;
