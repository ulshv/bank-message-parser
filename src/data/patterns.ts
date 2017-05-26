import { Pattern } from '../types';
import { arrayToObjectWithIds } from '../utils';

const patterns: Pattern[] = [
  {
    id: 100,
    bank_id: 1,
    regexp: /(VISA|MAESTRO)\d+ \d+\.\d+\.\d+.+(зачисление|покупка|списание|оплата).+Баланс/
  },
  {
    id: 200,
    bank_id: 2,
    regexp: /(Pokupka).*Dostupno.*Tinkoff\.ru/
  },
  {
    id: 300,
    bank_id: 3,
    regexp: /Karta \*\d*;\sPokupka.*Ostatok.*Raiffeisenbank/
  },
];

export default patterns;

export const patternsById = arrayToObjectWithIds(patterns);
