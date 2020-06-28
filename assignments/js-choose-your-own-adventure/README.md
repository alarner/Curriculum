## Description

Write text adventure games / interactive story.

## Objectives

After completing this assignment, you should…

* understand JavaScript expressions
* understand JavaScript types
* understand JavaScript variables
* understand boolean logic
* understand control flow with if / else / if else statements

## Assignment

Remember those "choose your own adventure" books when you were a kid? After each section you could choose for the character to do one of several things and you would be sent to a different page depending on your decision. Your task is to create your own "choose your own adventure" command line game / story. Start by asking for the name of the main character. Use `console.log` to display the background of the story to the player and `prompt-sync` to prompt the user for what they want to do next.

## Bonus 1
* Use your knowledge of `npm` to use a package like [enquirer](https://github.com/enquirer/enquirer) rather than `prompt-sync` to jazz up your prompts. Hint: you will need to wrap your whole program with the following code to get the `await` command to work.

```js
(async () => {
    // Your code goes here
})()
```

## Bonus 2
* Give your character some attributes (like strength, intelligence, agility, etc) that change based on the decisions they make and impact the outcome of the story.

## Bonus 3
* See if you can figure out how to allow your player to enter a special command any time they want to view the current status of their attributes.

## Notes

You should use the [prompt-sync](https://github.com/heapwolf/prompt-sync#readme) node module to accept user input. You will need to use `npm` to install prompt-sync and `const prompt = require('prompt-sync')()` to use it within your code.
