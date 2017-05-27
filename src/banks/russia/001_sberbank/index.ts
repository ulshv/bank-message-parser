// Sberbank

import { Bank } from '../../../types';
import patterns from './patterns';
import testCases from './test-cases';
import parser from './parser';

const bank: Bank = {
  id: 1,
  name: 'Sberbank',
  patterns,
  testCases,
  parser,
};

export default bank;
