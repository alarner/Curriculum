## Description

Generate a random integer between 1 and 100. Prompt the user to guess the number.

## Objectives

After completing this assignment, you should…

- understand boolean logic
- understand how to use while loops

## Assignment

For this assignment you will create a number guessing game. Your program will randomly generate an integer (whole number) between 1 and 100. Using the prompt-sync module, you should ask the user to guess the randomly generate number. If their guess is too low, it should inform them that the guess was too low and prompt them to guess again. If their guess is too high it should inform them that their guess was too high, and prompt them to guess again. If they correctly guess the number it should inform them that they won.

## Bonus

Update your game so that when a user wins, it prompts them to either quit or play again. If they choose to play again, the game should start over with a new random number. If they choose to quit, it should show a goodbye message.

## Notes

You should use the [prompt-sync](https://github.com/heapwolf/prompt-sync#readme) node module to accept user input. You will need to use `npm` to install sync-prompt and `const prompt = require('prompt-sync')()` to use it within your code.
