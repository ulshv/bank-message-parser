import { Bank, Banks, Pattern, TestCase } from '../types';
import { objectToArray, arrayToObjectWithIds } from '../utils';
import * as banksIds from './banks-ids.json';

const banks: Banks = {};
banksIds.forEach(id => banks[id] = require(`./${id.replace(/\./, '/')}`).default);

export default banks;
export const banksArray = objectToArray<Bank>(banks);

export const patterns: Pattern[] = banksArray
  .reduce((arr, bank) => arr.concat(bank.patterns), [] as Pattern[]);
export const patternsById = arrayToObjectWithIds(patterns);

export const testCases: TestCase[] = process.env.NODE_ENV === 'production'
  ? [] : banksArray.reduce((arr, bank) => arr.concat(bank.testCases || []), [] as TestCase[]);
