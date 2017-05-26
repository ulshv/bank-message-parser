import { Bank } from '../types';
import { arrayToObjectWithIds } from '../utils';

const banks: Bank[] = [
  {
    id: 1,
    name: 'sberbank'
  },
  {
    id: 2,
    name: 'tinkoff'
  }
];

export default banks;

export const banksByIds = arrayToObjectWithIds(banks);

/*
const o: { [id: number]: Bank } = {};
export const banksByIds = banks.reduce((obj, bank) => {
  obj[bank.id] = bank;
  return obj;
}, o);
*/
