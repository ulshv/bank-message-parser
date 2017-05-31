const questions = {
  action: {
    type: 'list',
    name: 'action',
    message: 'Select action',
    choices: [
      { name: 'Add TestCase', value: 'add-test'},
      { name: 'Add Bank', value: 'add-bank'},
    ],
  },
  country: {
    type: 'list',
    name: 'country',
    message: 'Select Bank country',
    choices: [ 'RU' ],
  },
  bank: {
    type: 'list',
    name: 'bankName',
    message: 'Select Bank',
    choices: [ 'raiffeisen', 'sberbank', 'tinkoff']
  },
  message: {
    type: 'input',
    name: 'message',
    message: 'Enter Message text\n ',
    validate: (input: string) => /[\S]+/.test(input) || 'Message should contain at least one letter',
  },
  bankNewName: {
    type: 'input',
    name: 'bankName',
    message: 'Enter new Bank\'s name',
    validate: (input: string) => /[\w]+/.test(input) || 'Bank name should contain at least one letter',
  }
};

export default questions;
