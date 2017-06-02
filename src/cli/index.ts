import * as inquirer from 'inquirer';
import checkMessages from './check-messages';
import addTestCase from './add-test-case';

const selectAction = (): void => {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Select action:',
    choices: [
      { name: 'Check unsupported messages', value: 'checkMessages'},
      { name: 'Add TestCase for Bank', value: 'addTestCase'},
    ],
  })
  .then(({ action }) => actionHandlers[action]());
}

const actionHandlers: { [name: string]: Function } = {
  checkMessages,
  addTestCase,
};

selectAction();
