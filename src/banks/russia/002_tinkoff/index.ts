// Tinkoff

import { Bank } from '../../../types';
import patterns from './patterns';
import parser from './parser';
const { default: testCases } = process.env.NODE_ENV === 'production' ? null : require('./test-cases');

const bank: Bank = {
  id: 2,
  name: 'Tinkoff',
  patterns,
  testCases,
  parser,
};

export default bank;
