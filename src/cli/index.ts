import * as inquirer from 'inquirer';
import q from './questions';
const prompt = inquirer.createPromptModule();

const selectAction = () => {
  prompt(q.action).then(({ action }) => {
    if (action === 'add-test') {
      addTestCase();
    } else {
      addBank();
    }
  })
}

const addTestCase = () => {
  prompt([
    q.country,
    q.bank,
    q.message,
  ]).then(answers => console.log(answers))
}

const addBank = () => {
  prompt([
    q.country,
    q.bankNewName,
  ]).then(answers => console.log(answers))
}

const main = () => {
  selectAction();
};

main();
