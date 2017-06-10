// Copyright 2017-present Sergey Ulyashev and Contributors. Licensed under the Apache License v2.0
// You may not use this file except in compliance with the License (http://www.apache.org/licenses/LICENSE-2.0)

import { Pattern, Transaction, Props } from '../../../types';
import { capitalize, getEngMonth, getMomentDate } from '../../../utils';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.sberbank",
    regexp: /((?:VISA|MAESTRO)\d+) (\d{2}\.\d{2}\.\d{2} \d{2}:\d{2})\S* (?:(оплата услуг|покупка|списание|выдача наличных)|(зачисление)) (\d+(?:\.\d+)?)(р)\s?(.*) Баланс: (\d+(?:\.\d+)?)р/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => ({
      balance     : parseFloat(data[8]),
      card        : data[1],
      currency    : "rub",
      datetime    : getMomentDate(data[2], 'DD.MM.YY hh:mm', timezone).format(),
      description : capitalize(data[3] || data[4]),
      flow        : data[4] ? '+' : '-',
      value       : parseFloat(data[5]),
      vendor      : data[7] || null,
    } as Transaction),
  },
  {
    id: 2,
    bank_id: "ru.sberbank",
    regexp: /(\d{2})([а-я]+)(\d{2})? \d{2}[а-я]+(\d{2}) \d+ (?:(плата.*|sberbank onl@in.*)|([\wа-яё\s]+)) (RUR) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)(CR)?/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => ({
      balance     : null,
      card        : null,
      currency    : "rub",
      datetime    : getMomentDate(data[1] + getEngMonth(data[2]) + (data[3] || data[4]),
                                  'DDMMMYY', timezone).format(),
      description : data[5] || null,
      flow        : data[10] ? '+' : '-',
      value       : parseFloat(data[9]),
      vendor      : data[6] || null,
    } as Transaction),
  },
  {
    id: 3,
    bank_id: "ru.sberbank",
    regexp: /((?:VISA|MAESTRO)\d+) (\d{2}\.\d{2}\.\d{2}) (оплата .*) (\d+(?:\.\d+)?)(р) Баланс: (\d+(?:\.\d+)?)р/i,
    parser: (data: RegExpMatchArray, timezone: string): Transaction => ({
      balance     : parseFloat(data[6]),
      card        : data[1],
      currency    : "rub",
      datetime    : getMomentDate(data[2], 'DD.MM.YY', timezone).format(),
      description : capitalize(data[3]),
      flow        : '-',
      value       : parseFloat(data[4]),
      vendor      : null,
    } as Transaction),
  },
];

export default patterns;
