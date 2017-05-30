// Sberbank

import { Bank, TestCase } from '../../../types';
import patterns from './patterns';
import parser from './parser';
const testCases = process.env.NODE_ENV === 'production' ? null : require('./test-cases.json');

const bank: Bank = {
  id: 1,
  name: 'Sberbank',
  testCases: testCases as TestCase[],
  patterns,
  parser,
};

export default bank;