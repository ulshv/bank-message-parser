// Tinkoff

import { Bank, TestCase } from '../../../types';
import patterns from './patterns';
const testCases = process.env.NODE_ENV === 'production' ? null : require('./test-cases.json');

const bank: Bank = {
  id: 'ru.tinkoff',
  patterns,
  testCases,
};

export default bank;
