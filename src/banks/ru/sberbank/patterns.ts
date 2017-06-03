// Sberbank patterns

import { Pattern, Transaction } from '../../../types';
import { capitalize } from '../../../utils';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.sberbank",
    regexp: /((?:VISA|MAESTRO)\d+) (\d{2}\.\d{2}\.\d{2} \d{2}:\d{2})\S* (?:(оплата услуг|покупка|списание)|(зачисление)) (\d+(?:\.\d+)?)(р)\s?([\wа-яё]*) Баланс: (\d+(?:\.\d+)?)р/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      balance     : parseFloat(data[8]),
      card        : data[1],
      datetime    : data[2],
      description : capitalize(data[3] || data[4]),
      flow        : data[4] ? '+' : '-',
      value       : parseFloat(data[5]),
      vendor      : data[7] || null,
    } as Transaction),
  },
  {
    id: 2,
    bank_id: "ru.sberbank",
    regexp: /(\d{2}[а-я]+)(\d{2})? \d{2}[а-я]+(\d{2}) \d+ (?:(плата.*|sberbank onl@in.*)|([\wа-яё\s]+)) (RUR) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)(CR)?/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      balance     : null,
      card        : null,
      datetime    : data[1] + (data[2] || data[3]),
      description : data[4] || null,
      flow        : data[9] ? '+' : '-',
      value       : parseFloat(data[8]),
      vendor      : data[5] || null,
    } as Transaction),
  },
];

export default patterns;
