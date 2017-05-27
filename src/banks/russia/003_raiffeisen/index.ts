// Raiffeisen

import { Bank } from '../../../types';
import patterns from './patterns';
import testCases from './test-cases';
import parser from './parser';

const bank: Bank = {
  id: 3,
  name: 'Raiffeisen',
  patterns,
  testCases,
  parser,
};

export default bank;
