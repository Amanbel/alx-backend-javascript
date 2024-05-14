const readline = require('node:readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Welcome to Holberton School, what is your name?\n', (stdName) => {
  console.log(`Your name is: ${stdName}`);
  r1.write('This important software is now closing\n');
  r1.close();
});
