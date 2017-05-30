import { Bank, Banks, Pattern, TestCase } from '../types';
import { arrayToObjectWithStringIds } from '../utils';
import * as banksIds from './banks-ids.json';

const banks: Bank[] = banksIds.map(id => require(`./${id.replace(/\./, '/')}`).default);
export default banks;
export const banksById = arrayToObjectWithStringIds<Bank>(banks);

export const patterns: Pattern[] = banks
  .reduce((arr, bank) => arr.concat(bank.patterns), [] as Pattern[]);

export const testCases: TestCase[] = process.env.NODE_ENV === 'production'
  ? [] : banks.reduce((arr, bank) => arr.concat(bank.testCases || []), [] as TestCase[]);
