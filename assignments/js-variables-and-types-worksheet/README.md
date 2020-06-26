# JavaScript Variables and Types Worksheet

## Description
Practice working with JavaScript variables.


## Objectives

After completing this assignment, you should…

* understand how to declare a variable
* be able to mentally evaluate a JavaScript expression
* understand how to use strings, numbers and booleans, and know the differences between them
* get experience with NaN, undefined and null

## Assignment
Review the code below. For each snippet of code, determine what the final expression will evaluate to (*both type and value*). Try to answer each one of these without actually running the code via node or inside of the console. After you pick your answer, you can look up the answer by running the code. Keep a list of any expressions that you don't understand to review in class.

### Snippet #1

Evaluate this expression: `100+4`

### Snippet #2

Evaluate this expression: `'a'+'b'`

### Snippet #3

Evaluate this expression: `'Bob'+'Smith'`

### Snippet #4

Evaluate this expression: `'7'+'9'`

### Snippet #5

Evaluate this expression: `'7'+9`

### Snippet #6

Evaluate this expression: `'7'-9`

### Snippet #7

Evaluate this expression: `'abc'*3`

### Snippet #8

Evaluate this expression: `7+2*3`

### Snippet #9

Evaluate this expression: `(7+2)*3`

### Snippet #10

Evaluate this expression: `(null+2)/3`

### Snippet #11

```js
const name;
```
Evaluate this expression: `name`

### Snippet #12

```js
const x = 7;
const y = 4;
const z = x * y;
```
Evaluate this expression: `z-3`

### Snippet #13

```js
const a = true;
const b = false;
```
Evaluate this expression: `a && b`

### Snippet #14

```js
const a = true;
const b = false;
```
Evaluate this expression: `a || b`

### Snippet #15

```js
let foo = 3;
foo++;
foo++;
```
Evaluate this expression: `foo/2`

### Snippet #16

```js
const age = 29.8;
const wholeAge = Math.floor(age);
const nextAge = Math.ceil(age);
```
Evaluate this expression: `nextAge - wholeAge`

### Snippet #17

Evaluate this expression: `'5' + 3 - 3`

### Snippet #18

```js
let isRed = false;
isRed = !isRed;
```
Evaluate this expression: `isRed`

### Snippet #19

```js
let isBlue = true;
let isBlue = !!isBlue;
```
Evaluate this expression: `isBlue`

### Snippet #20

```js
const name = 'Sally';
const age = 25;
```
Evaluate this expression: `name.length + age`

### Snippet #21

```js
const x = 10;
const y = 73.3;

const point = '[' + x + ', ' + y + ']';
```
Evaluate this expression: `'point: '+point`

### Snippet #22

```js
const numberOfSheep = 16;
const numberOfGoats = 3;
```
Evaluate this expression: `numberOfGoats + numberOfSheep++`

### Snippet #23

```js
const numberOfSheep = 16;
const numberOfGoats = 3;
```
Evaluate this expression: `numberOfGoats - ++numberOfSheep`

### Snippet #24

```js
const x;
const y = (x=7);
```

Evaluate this expression: `y`

## Bonus

Download this code from [this zip file](../../notes/002-javascript-introduction/code/bonus.zip) and extract it to somewhere that you can run your `node` command. `cd` into the bonus directory and run `node index.js`. See if you can get 11 or more correct in a row ;)