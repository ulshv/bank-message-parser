// Copyright 2017-present Sergey Ulyashev and Contributors. Licensed under the Apache License v2.0
// You may not use this file except in compliance with the License (http://www.apache.org/licenses/LICENSE-2.0)

import { Pattern, Transaction, Props } from '../../../types';
import { getMomentDate } from '../../../utils';

const patterns: Pattern[] = [
  {
    id: 1,
    bank_id: "ru.raiffeisen",
    regexp: /Karta (\*\d+); (Pokupka): ([\w\d\s.,\/а-яё]*?); (\d+(?:\.\d+)?) RUR; Data: (\d+\/\d+\/\d+); Dostupny Ostatok: (\d+(?:\.\d+)?) RUR. Raiffeisenbank/i,

    parser: (data: RegExpMatchArray, props: Props): Transaction => {
      const date = getMomentDate(data[5], 'DD/MM/YYYY', props.timezone);

      return ({
        balance     : parseFloat(data[6]),
        card        : data[1],
        currency    : "rub",
        datetime    : date.format(),
        description : 'Покупка',
        flow        : '-',
        unixtime    : date.unix(),
        value       : parseFloat(data[4]),
        vendor      : data[3] || null,
      } as Transaction)
    },
  },
];

export default patterns;
