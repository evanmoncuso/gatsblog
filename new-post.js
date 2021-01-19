const readline = require('readline');
const fs = require('fs');

const ACCEPTABLE_CHARS_REGEX = new RegExp('(\-)|([a-z0-9])*\w+');

const fileTemplate = (title, time) => {
  return `---
title: ${title}
date: ${time}
---

Sample Text
`;
}

const getTitleFromUser = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Post Title:', (title) => {
      console.log(`Creating Post "${title}"`);

      rl.close();

      resolve(title);
    });
  });
}

const main = async () => {
  console.log('get title');
  let title = await getTitleFromUser();
  console.log('... it is', title);

  const now = new Date().toUTCString();
  console.log('... it is', now);

  console.log('create file');
  await fs.writeFileSync(`src/posts/${title}.md`, fileTemplate(title, now))

  console.log('yay');
}

main();
