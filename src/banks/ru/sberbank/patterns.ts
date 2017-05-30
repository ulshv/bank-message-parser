// Sberbank patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.sberbank",
    regexp: /((?:VISA|MAESTRO)\d+).*?(\d+.\d+.\d+ \d+:\d+).*?(?:(оплата|покупка|списание)|(зачисление)).*?(\d+(?:\.\d+)?)р ?([\wа-яё]*) ?Баланс: (\d+(?:\.\d+)?)р/i
  },
];

export default patterns;
