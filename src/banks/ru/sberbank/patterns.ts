// Sberbank patterns

import { Pattern, Transaction } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.sberbank",
    regexp: /((?:VISA|MAESTRO)\d+).*?(\d+.\d+.\d+ \d+:\d+).*?(?:(оплата|покупка|списание)|(зачисление)).*?(\d+(?:\.\d+)?)р ?([\wа-яё]*) ?Баланс: (\d+(?:\.\d+)?)р/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      action   : data[3] || data[4],
      balance  : parseFloat(data[7]),
      card     : data[1],
      datetime : data[2],
      type     : data[4] ? 'income' : 'outcome',
      value    : parseFloat(data[5]),
      vendor   : data[6] || null,
    } as Transaction),
  },
  {
    id: 2,
    bank_id: "ru.sberbank",
    regexp: /(\d{2}[а-я]+)(\d{2})? \d{2}[а-я]+(\d{2}) \d+ (?:(плата.*|sberbank onl@in.*)|([\wа-яё\s]+)) (RUR) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)(CR)?/i,
    parser: (data: RegExpMatchArray): Transaction => ({
      action   : data[4] || null,
      balance  : null,
      card     : null,
      datetime : data[1] + (data[2] || data[3]),
      type     : data[9] ? 'income' : 'outcome',
      value    : parseFloat(data[8]),
      vendor   : data[5] || null,
    } as Transaction),
  },
];

export default patterns;
