import { BankModule, Pattern } from '../types';
import { arrayToObjectWithIds } from '../utils';

import b_001 from './russia/001_sberbank';
import b_002 from './russia/002_tinkoff';
import b_003 from './russia/003_raiffeisen';

const bankModules: BankModule[] = [
  b_001,
  b_002,
  b_003,
];

export default bankModules;

export const banks = bankModules.map(bm => bm.bank);
export const banksById = arrayToObjectWithIds(banks);

const emptyPatterns: Pattern[] = [];
export const patterns: Pattern[] = bankModules
  .reduce((arr, bm) => arr.concat(bm.patterns), emptyPatterns);

export const patternsById = arrayToObjectWithIds(patterns);
