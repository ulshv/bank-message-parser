const fs = require('fs');
const bankMessageParser = require('../dist').default;

const getMessages = () => {
  const filename = './tools/messages.txt';

  fs.readFile(filename, 'utf-8', (err, messages) => {
      if (err) return console.log(`Add file '${filename}' with messages to test.`);

      messages.split('\n').forEach(message => {
        console.log('\n' + message);
        console.log(bankMessageParser(message));
      })
    }
  )
}

getMessages();
