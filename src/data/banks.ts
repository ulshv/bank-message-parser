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

export const banksById = arrayToObjectWithIds(banks);

