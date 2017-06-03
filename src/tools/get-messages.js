const fs = require('fs');

const getMessages = () => {
  const bankId = process.argv[2];
  if (!bankId) return console.log(`Provide bankId parameter.`);
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
