// Tinkoff

import { Bank, BankModule } from '../../../types';
import patterns from './patterns';
import testCases from './test-cases';
import parser from './parser';

const bank: Bank = {
  id: 2,
  name: 'Tinkoff'
};

const bankModule: BankModule = {
  id: bank.id,
  bank,
  patterns,
  testCases,
  parser,
};

export default bankModule;
