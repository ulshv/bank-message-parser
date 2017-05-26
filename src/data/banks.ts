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
  },
  {
    id: 3,
    name: 'raiffeisen'
  }
];

export default banks;

export const banksById = arrayToObjectWithIds(banks);

