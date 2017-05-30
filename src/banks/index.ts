import { Bank, Banks, Pattern, TestCase } from '../types';
import { arrayToObjectWithStringIds } from '../utils';
import * as banksIds from './banks.json';

const banks: Bank[] = banksIds.map(id =>
  // dynamic require only for `banks/**/index.ts` (ignore */test-cases.json, etc.)
  require(`./${id.replace(/\./, '/')}/index.ts`).default);

export default banks;
export const banksById = arrayToObjectWithStringIds<Bank>(banks);

export const patterns: Pattern[] = banks
  .reduce((arr, bank) => arr.concat(bank.patterns), [] as Pattern[]);

export const testCases: TestCase[] = process.env.NODE_ENV === 'production'
  ? [] : banks.reduce((arr, bank) => arr.concat(bank.testCases || []), [] as TestCase[]);
