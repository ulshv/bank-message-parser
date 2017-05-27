// Sberbank patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 100,
    bank_id: 1,
    regexp: /(VISA|MAESTRO)\d+ \d+\.\d+\.\d+.+(зачисление|покупка|списание|оплата).+Баланс/
  },
];

export default patterns;
