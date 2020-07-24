// const {
//   foo,
//   isVerticalWinOpportunity,
//   isHorizontalWinOpportunity,
// } = require("./tictactoeFunctions");
// // const foo = anything.foo;
// console.log(
//   foo,
//   isVerticalWinOpportunity.toString(),
//   isHorizontalWinOpportunity
// );
// [
//     {
//         x: 0,
//         y: 0,
//         value: 'O'
//     }
// ]

// const board = new Array(3);

// [
//     ['X', '', ''],
//     ['', 'O', ''],
//     ['', '', '']
// ]

// const row1 = ['', '', ''];
// const row2 = ['', '', ''];
// const row3 = ['', '', ''];

// [
//     ' O X'
//     '   ',
//     '   '
// ]

// const board = [
//   ["X", "X", ""],
//   ["X", "O", "O"],
//   ["", "", "O"],
// ];

// function isVerticalWinOpportunity(board, column, player) {
//   let playerCount = 0;
//   let emptySpaceCount = 0;
//   for (let i = 0; i < 3; i++) {
//     if (board[i][column] === player) {
//       playerCount++;
//     } else if (board[i][column] === "") {
//       emptySpaceCount++;
//     }
//   }
//   return playerCount >= 2 && emptySpaceCount >= 1;
// }

// function isHorizontalWinOpportunity(board, column, player) {
//   let playerCount = 0;
//   let emptySpaceCount = 0;
//   for (let i = 0; i < 3; i++) {
//     if (board[column][i] === player) {
//       playerCount++;
//     } else if (board[column][i] === "") {
//       emptySpaceCount++;
//     }
//   }
//   return playerCount >= 2 && emptySpaceCount >= 1;
// }

// for (let i = 0; i < 3; i++) {
//   if (isHorizontalWinOpportunity(board, i, "X")) {
//     console.log("horizontal win opportunity", i, playerCount);
//     break;
//   }
//   if (isVerticalWinOpportunity(board, i, "X")) {
//     console.log("vertical win opportunity", i);
//     break;
//   }
// }

// function myFunctionName() {
//   console.log("running myFunctionName...");
// }

// function myConsoleLog(stringToLog) {
//   break;
//   console.log(stringToLog);
//   return stringToLog;
// }

// const result = myConsoleLog("another test");
// console.log(result);

// function typeOfFood() {
//   //   if (food === "tomato") {
//   //     return "fruit";
//   //   } else if (food === "chips") {
//   //     return "junk";
//   //   } else if (food === "lettuce") {
//   //     return "vegetable";
//   //   }
//   return "unknown";
// }

// console.log(typeOfFood("tomato"));
// // console.log(`tomato are ${result} food`);

// function add(a, b) {
//   if (typeof a !== "number") {
//     throw new Error("first argument must be a number");
//   }
//   if (typeof b !== "number") {
//     throw new Error("second argument must be a number");
//   }
//   birthday(a + b);
//   return a + b;
// }

// function birthday(age) {
//   if (age < 0) {
//     throw new Error("you aren't benjamin button");
//   }
//   return age + 1;
// }

// function nextDay(day) {
//   day++;
//   if (day === 28) {
//     birthday(-1);
//   }
//   return day;
// }

// console.log(nextDay(27));

// let aaronsAge = 34;
// function birthday(age) {
//   return age + 1;
// }

// console.log(aaronsAge);
// const newAge = birthday(aaronsAge);
// console.log(aaronsAge);

// const ticTacToeBoard = [
//   ["X", "X", ""],
//   ["X", "O", "O"],
//   ["", "", "O"],
// ];

// function getNextMove(board) {
//   return {
//     x: 0,
//     y: 2,
//   };
// }

// // const { x, y } = getNextMove(ticTacToeBoard);
// const result = getNextMove(ticTacToeBoard);
// const x = result.x;
// const y = result.y;

// const [[cell1, cell2, cell3], row2, row3] = ticTacToeBoard;

// function birthday() {
//   let birthmonth = 3;
//   function getBirthmonth() {
//     return birthmonth;
//   }
//   if (age < 0) {
//     throw new Error("you aren't benjamin button");
//   }
//   age = age + 1;
//   return age;
// }

// birthday();
// console.log(age, birthmonth);
// birthday();
// console.log(age);
// age = 28;
// const result = birthday();
// console.log(result);

function myFunctionName() {
  console.log("test1");
}

const myOtherFunction = myFunctionName;
myFunctionName();
myOtherFunction();

const myFunction1 = function () {
  console.log("test2");
};

const myFunction2 = (arg1, arg2) => {
  console.log("test3", arg1, arg2);
  return arg1 === arg2;
};

const isEqual = (arg1, arg2) => arg1 === arg2;
const isEven = (num) => num % 2 === 0;

myFunction1();
myFunction2("foo", "bar");

setTimeout(() => console.log("anonymous function"), 2000);

(async () => {
  await myFunction1();
})();
