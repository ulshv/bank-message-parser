// Raiffeisen patterns

import { Pattern } from '../../../types';

const patterns: Pattern[] = [
  {
    id: 300,
    bank_id: 3,
    regexp: /Karta \*\d*;\sPokupka.*Ostatok.*Raiffeisenbank/
  },
];

export default patterns;
