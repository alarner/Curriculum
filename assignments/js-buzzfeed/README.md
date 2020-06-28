## Description

Buzzfeed is known for thier super high brow quizzes like "Everyone In The World Is Either A Superhero Or A Sidekick – Which One Are You?" and "Your Taste In Home Decor Will Reveal Which 'Gilmore Girls' Character You Are." Create a Buzzfeed like quiz of your own using node.

## Objectives

After completing this assignment, you should…

* understand JavaScript expressions
* understand JavaScript types
* understand JavaScript variables
* understand boolean logic
* understand control flow with if / else / if else statements

## Assignment

Create a quiz for your fellow classmates to take. The quiz should ask a series of questions which, when combined, reveal something about the quiz taker. The topic can be anything you choose!

## Bonus 1
* Use your knowledge of `npm` to use a package like [enquirer](https://github.com/enquirer/enquirer) rather than `prompt-sync` to jazz up your quiz with interactive prompts. Hint: you will need to wrap your whole program with the following code to get the `await` command to work.

```js
(async () => {
    // Your code goes here
})()
```

## Bonus 2
* Use [this tool](https://manytools.org/hacker-tools/convert-images-to-ascii-art/) to display some ASCII art upon completion of the quiz!

## Notes

You should use the [prompt-sync](https://github.com/heapwolf/prompt-sync#readme) node module to accept user input. You will need to use `npm` to install prompt-sync and `const prompt = require('prompt-sync')()` to use it within your code.
