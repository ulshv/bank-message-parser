// Sberbank patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 100,
    bank_id: 1,
    regexp: /((?:VISA|MAESTRO)\d+).*?(\d+.\d+.\d+ \d+:\d+).*?(?:(оплата|покупка|списание)|(зачисление)).*?(\d+(?:\.\d+)?)р ?([\wа-яё]*) ?Баланс: (\d+(?:\.\d+)?)р/i
  },
];

export default patterns;
