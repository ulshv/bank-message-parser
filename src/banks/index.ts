import { Bank, Pattern, TestCase } from '../types';
import { arrayToObjectWithIds } from '../utils';

import b_001 from './russia/001_sberbank';
import b_002 from './russia/002_tinkoff';
import b_003 from './russia/003_raiffeisen';

const banks: Bank[] = [
  b_001,
  b_002,
  b_003,
];

export default banks;
export const banksById = arrayToObjectWithIds(banks);

export const patterns: Pattern[] = banks
  .reduce((arr, bank) => arr.concat(bank.patterns), [] as Pattern[]);
export const patternsById = arrayToObjectWithIds(patterns);

export const testCases: TestCase[] = banks
  .reduce((arr, bank) => arr.concat(bank.testCases), [] as TestCase[]);
