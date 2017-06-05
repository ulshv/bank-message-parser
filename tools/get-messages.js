const fs = require('fs');
const usage = `Usage: 'npm run get-messages -- cc.bankname', where 'cc' is country code.`;

const getMessages = () => {
  const bankId = process.argv[2];
  if (!bankId) return console.log(usage);
  const filename = `./src/banks/${bankId.replace(/\./, '/')}/test-cases.json`;

  fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) return console.log(`Bank '${bankId}' not found.`);

      const testCases = JSON.parse(data);
      const messages = testCases.map(tc => tc.message).join('\n');

      console.log(messages);
    }
  )
}

getMessages();
