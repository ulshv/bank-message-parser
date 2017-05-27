// Tinkoff

import { Bank, BankModule } from '../../../types';
import patterns from './patterns';
import testCases from './test-cases';

const bank: Bank = {
  id: 2,
  name: 'Tinkoff'
};

const bankModule: BankModule = {
  bank,
  patterns,
  testCases,
};

export default bankModule;
