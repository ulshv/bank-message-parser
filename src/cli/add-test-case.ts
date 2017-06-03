import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import { banksById } from '../banks';
import { TestCase } from '../types';
import promptBankId from './prompt-bank-id';
import main from '../main';

const addTestCase = (defaultBankId?: string): void => {
  promptBankId(defaultBankId)
    .then(bankId => inquirer.prompt(testCaseQuestions)
      .then(a => {
        const bank = banksById[bankId];
        const filename = './src/banks/' +
          bank.id.replace(/\./, '/') + '/test-cases.json';

        fs.readFile(filename, 'utf8', (err, data) => {
          const testCases: TestCase[] = JSON.parse(data);

          testCases.push({
            message: a.message,
            bank_id: bankId,
            pattern_id: null,
            transaction: {
              balance: a.balance ? parseFloat(a.balance) : null,
              card: a.card || null,
              datetime: a.datetime,
              description: a.action || null,
              flow: a.type,
              value: parseFloat(a.value),
              vendor: a.vendor || null,
            }
          } as TestCase)

          // sort test cases by pattern_id: 1, 2, 3, ..., null, null
          testCases.sort(({ pattern_id: a }, { pattern_id: b }) =>
            a && b ? a - b :
            a && !b ? -1 :
            !a && b ? 1 : 0
          );

          const testCasesNew = JSON.stringify(testCases, null, 2) + '\n';

          fs.writeFile(path.resolve(filename), testCasesNew, err => {
            console.log(err ? 'Some Error. File not saved.' : 'Done.');

            inquirer.prompt(oneMoreQuestion)
              .then(({ oneMore }) => {
                if (oneMore) addTestCase(bankId);
              })
          });
        });
      })
    )
}

const testCaseQuestions: inquirer.Questions = [
  {
    type: 'input',
    name: 'message',
    message: 'Enter message text:',
    validate: input => /[^\s]+/.test(input) ||
      'Should contain at least one symbol'
  },
  {
    type: 'input',
    name: 'card',
    message: '  card:'
  },
  {
    type: 'input',
    name: 'datetime',
    message: '* datetime:',
    validate: input => /[^\s]+/.test(input) ||
      'Should contain at least one symbol'
  },
  {
    type: 'input',
    name: 'value',
    message: '* value:',
    validate: input => /^\d+(?:\.\d+)?$/.test(input) ||
      'examples: 100; 100.0; 10000.00;'
  },
  {
    type: 'input',
    name: 'flow',
    message: '* flow:',
    validate: input => /^(\+|\-)$/.test(input) ||
      `Should be '+' or '-'`
  },
  {
    type: 'input',
    name: 'vendor',
    message: '  vendor:'
  },
  {
    type: 'input',
    name: 'description',
    message: '  description:'
  },
  {
    type: 'input',
    name: 'balance',
    message: '  balance:',
    validate: input => /(^$|^\d+(?:\.\d+)?$)/.test(input) ||
      'Should be empty or like this examples: 100; 100.0; 10000.00;'
  },
];

const oneMoreQuestion: inquirer.Question = {
  type: 'confirm',
  default: false,
  name: 'oneMore',
  message: 'Would you like add one more TestCase?'
}

export default addTestCase;
