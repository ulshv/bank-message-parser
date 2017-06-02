import * as inquirer from 'inquirer';
import { banksById } from '../banks';

const promptBankId = (defaultId? : string) : Promise<string> =>
  inquirer.prompt({
    type: 'input',
    name: 'bankId',
    default: defaultId,
    message: 'Enter Bank id:',
    validate: (input: string) => /[\S]+/.test(input)
      ? banksById[input] ? true : `Bank with id '${input}' not found. Try again.`
      : 'Bank id should contain at least one letter',
  })
  .then(({ bankId }) => bankId);

export default promptBankId;
