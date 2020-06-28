## Description

Create a programming quiz on the command line to test the skill of your fellow students.

## Objectives

After completing this assignment, you should…

* understand JavaScript expressions
* understand JavaScript types
* understand JavaScript variables
* understand boolean logic
* understand control flow with if / else / if else statements

## Assignment

Create a quiz for your fellow classmates to take. The quiz should ask at least 15 JavaScript and/or command line related questions. For each of the questions your program should ask the question using console.log and prompt the test taker for an answer. Keep track of the number of total answers that the test taker answers correctly. When the test taker has answered all of the questions display the total number of questions that they answered correctly as well as the percentage that they got right.

## Bonus 1
* If a test taker gets an answer correct your test should immediately tell them that they were correct. If the test taker gets a question wrong it should tell them that they were wrong and tell them the correct answer.
* Your answers should be case insensitive. For example, if the answer to a particular question is **string** the test taker should be able to answer **STRING** or **string** or **String** and any of those answers should be counted as a correct answer.
* Try to time the test and inform the user how long they took to complete the test at the end.

# Bonus 2
* Use your knowledge of `npm` to use a package like [enquirer](https://github.com/enquirer/enquirer) rather than `prompt-sync` to jazz up your quiz with interactive prompts. Hint: you will need to wrap your whole program with the following code to get the `await` command to work.

```js
(async () => {
    // Your code goes here
})()
```

## Bonus 3
* Make your test adaptive. If a user gets a question correct, give them a harder question next time. If they get a question incorrect, give them an easier question next time instead.
* After the test taker is done taking the test, inform them where they need to improve their skills based on the types of questions that they got wrong. If they answered all of the string questions correctly, but the boolean questions only got 50% tell them to brush up on their boolean skills, etc.

## Notes

You should use the [prompt-sync](https://github.com/heapwolf/prompt-sync#readme) node module to accept user input. You will need to use `npm` to install sync-prompt and `const prompt = require('prompt-sync')()` to use it within your code.
