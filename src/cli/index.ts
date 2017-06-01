import * as inquirer from 'inquirer';
import checkMessages from './check-messages';

const selectAction = (): void => {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Select action:',
    choices: [
      { name: 'Check unsupported messages', value: 'checkMessages'},
      { name: 'Add TestCase for Bank', value: 'addTestCase'},
      { name: 'Add new Bank', value: 'addBank'},
    ],
  })
  .then(({ action }) => actionHandlers[action]());
}

const actionHandlers: { [name: string]: Function } = {
  checkMessages,
};

selectAction();
