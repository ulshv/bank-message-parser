import { Bank, Pattern, TestCase } from '../types';
import { arrayToObjectWithStringIds } from '../utils';
import * as bankPaths from './bank-paths.json';

const banks: Bank[] = bankPaths.map(path =>
  // dynamic require only for `banks/**/index.ts` (ignore */test-cases.json, etc.)
  require(`./${path}/index.ts`).default);

export default banks;
export const banksById = arrayToObjectWithStringIds<Bank>(banks);

export const patterns: Pattern[] = banks
  .reduce((arr, bank) => arr.concat(bank.patterns), [] as Pattern[]);

export const testCases: TestCase[] =
  process.env.NODE_ENV === 'production'
    ? []
    : bankPaths.reduce((arr, path) => {
        const testCases = require(`./${path}/test-cases.json`);
        return arr.concat(testCases || [])
    }, [] as TestCase[]);
