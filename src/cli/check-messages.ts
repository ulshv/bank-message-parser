import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import { banksById } from '../banks';
import promptBankId from './prompt-bank-id';
import main from '../main';

const checkMessages = (defaultBankId? : string): void => {
  promptBankId(defaultBankId)
    .then(bankId => {
      const bank = banksById[bankId];
      const messages = bank.unsupported || [];
      const pairs = messages.map(message => ({
        transaction: main(message, bankId),
        message,
      }));
      const unsupported = pairs.filter(pair => !pair.transaction);
      const supported   = pairs.filter(pair => pair.transaction);

      if (!pairs.length) return console.log('Unsupported messages not found.');

      [...unsupported, ...supported].forEach(pair => {
        console.log('\nMessage: \n%s\nTransaction:', pair.message);
        console.log(pair.transaction || 'Not recognized');
      });

      if (supported.length) {
        inquirer.prompt({
          type: 'confirm',
          default: false,
          name: 'deleteSupported',
          message: 'Supported messages found. Are their Transactions correct?\n  ' +
                   'Delete them from unsupported.json?',
        }).then(({ deleteSupported }) => {
          if (deleteSupported) {
            const filename = './src/banks/' +
              bank.id.replace(/\./, '/') + '/unsupported.json';
            const data = JSON.stringify(
              unsupported.map(pair => pair.message), null, 2) + '\n';

            fs.writeFile(path.resolve(filename), data, err => {
              console.log(err ? 'Some Error. File not saved.' : 'Done.');
            });
          }
        })
      }
    });
}

export default checkMessages;
