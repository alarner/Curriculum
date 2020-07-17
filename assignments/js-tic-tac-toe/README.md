## Description

Create a tic-tac-toe game!

## Objectives

After completing this assignment, you should…

- understand how to use loops
- understand how to use arrays

## Assignment

Create a game of tic-tac-toe on the command line. Use the prompt-sync module to accept coordinates from user one for where they want to place their `X` and from user two for where they want to place their `O`.

> In this example the `X` is at `2,1` and they `O` is at `3,2`

```
    1   2   3
  -------------
1 |   | X |   |
  -------------
2 |   |   | O |
  -------------
3 |   |   |   |
  -------------
```

Players should not be able to move to a coordinate where they or the other player have already moved. Once someone has won, stop asking for new moves and tell the players who was the winner.

## Bonus 1

Update your game so that when a user wins, it prompts them to either quit or play again. If they choose to play again, the game should start over with a new random number. If they choose to quit, it should show a goodbye message.

## Bonus 2

Program a computer player that automatically makes a move after the human player makes their move. Can you make your computer player smart enough to never lose?

## Notes

You should use the [prompt-sync](https://github.com/heapwolf/prompt-sync#readme) node module to accept user input. You will need to use `npm` to install sync-prompt and `const prompt = require('prompt-sync')()` to use it within your code.
