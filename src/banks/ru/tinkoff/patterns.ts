// Copyright 2017-present Sergey Ulyashev and Contributors. Licensed under the Apache License v2.0
// You may not use this file except in compliance with the License (http://www.apache.org/licenses/LICENSE-2.0)

import * as moment from 'moment';
import { Pattern, Transaction, Props } from '../../../types';
import { getMomentDate, isLastYear } from '../../../utils';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.tinkoff",
    regexp: /(Pokupka)\. Karta (\*\d+)\. Summa (\d+(?:\.\d+)?) RUB\. ([\w\d\s.,а-яё]*?)\. (\d+\.\d+\.\d+ \d+:\d+)\. Dostupno (\d+(?:\.\d+)?) RUB\. Tinkoff\.ru/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => ({
      balance     : parseFloat(data[6]),
      card        : data[2],
      currency    : "rub",
      datetime    : getMomentDate(data[5], 'DD.MM.YYYY hh:mm', timezone).format(),
      description : 'Покупка',
      flow        : '-',
      value       : parseFloat(data[3]),
      vendor      : data[4] || null,
    } as Transaction),
  },
  {
    id: 2,
    bank_id: "ru.tinkoff",
    regexp: /(\d{2}\.\d{2}\.\d{2}( \d{2}:\d{2})?) \d{2}\.\d{2}\.\d{2} (\+)?(\d[\s\d]*(?:\.\d{2})?) (\w+)(?: \+?(?:\d[\s\d]*(?:\.\d{2})?) \5)? (?:(Оплата|Пополнение)\s?(?:[\.\wа-яё]+)? (.*)|(Проценты.*|Вознаграждение.*|Плата.*?sms.*))/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => ({
      balance     : null,
      card        : null,
      currency    : "rub",
      datetime    : getMomentDate(data[1], 'DD.MM.YY' + (data[2] ? ' hh:mm' : ''),
                                  timezone).format(),
      description : data[6] || data[8],
      flow        : data[3] ? '+' : '-',
      value       : parseFloat(data[4].replace(/\s/g, '')),
      vendor      : data[7] || null,
    } as Transaction),
  },
  {
    id: 3,
    bank_id: "ru.tinkoff",
    regexp: /Vypiska ot (\d{2}\.\d{2}) po karte (\*\d+)\. Nachisleno protsentov: (\d+(?:\.\d+)?) (rub)\. Cashback: (\d+(?:\.\d+)?) (rub)\. Balans na (\d{2}\.\d{2}): (\d+(?:\.\d+)?) (rub)\. Tinkoff\.ru/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => {
      const date = getMomentDate(data[1], 'DD.MM', timezone);
      if (isLastYear(date)) date.set('year', date.year() - 1);

      return ({
        balance     : parseFloat(data[8]),
        card        : data[2],
        currency    : "rub",
        datetime    : date.format(),
        description : `Выписка от ${data[1]}. Проценты на остаток по счету и вознаграждение за операции покупок`,
        flow        : '+',
        value       : parseFloat((parseFloat(data[3]) + parseFloat(data[5])).toFixed(3)),
        vendor      : 'Tinkoff',
      } as Transaction)
    },
  },
];

export default patterns;
