import { Pattern } from '../types';

const patterns: Pattern[] = [
  {
    id: 10,
    bank_id: 1,
    regexp: /(VISA|MAESTRO)\d+ \d+\.\d+\.\d+.+(зачисление|покупка|списание|оплата).+Баланс/
  },
  {
    id: 20,
    bank_id: 2,
    regexp: /(Pokupka).*Dostupno.*Tinkoff\.ru/
  }
]

export default patterns;

