const { prompt } = require("enquirer");

// (async function () {
//   console.log(1);
//   const response = await prompt({
//     type: "input",
//     name: "username",
//     message: "What is your username?",
//   });
//   console.log(2);

//   console.log(response); // { username: 'jonschlinkert' }
// })();

// const fs = require("fs").promises;

// (async () => {
//   const before = new Date().getTime();
//   const promises = [];
//   for (let i = 0; i < 100; i++) {
//     const p = fs.writeFile("file1.txt", "sdfjhksdhjfsjdkfsjdhfksjdf");
//     promises.push(p);
//   }
//   console.log(promises);
//   await Promise.all(promises);
//   const after = new Date().getTime();
//   console.log(after - before);
// })();

function pause(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

(async () => {
  console.log("step 1");
  const defaultChoices = ["red", "green", "blue"];
  const questions = [
    {
      type: "select",
      name: "color",
      message: "Favorite color?",
      initial: 1,
      choices: [...defaultChoices], // defaultChoices.slice(0)
    },
  ];

  let answers = await prompt(questions);
  console.log(answers);
  console.log(defaultChoices);
  //   await pause(1000);
  //   console.log("step 2");
  //   await pause(1000);
  //   const response = await prompt({
  //     type: "input",
  //     name: "username",
  //     message: "What is your username?",
  //   });
  //   if (response.username === "alarner") {
  //     const answer = await prompt({
  //       type: "input",
  //       name: "numCats",
  //       message: "How many cats do you have?",
  //     });
  //     console.log(`${response.username} has ${answer.numCats} cats`);
  //   }
})();
