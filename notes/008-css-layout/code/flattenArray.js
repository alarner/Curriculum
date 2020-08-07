// const myRecursiveFunction = () => {
//   console.log("recursion!");
//   myRecursiveFunction();
// };

// myRecursiveFunction();

// const callStack = [];

// const function1 = () => {
//   //   callStack.push("function1");
//   function2();
// };
// const function2 = () => {
//   //   callStack.push("function2");
//   function3();
// };
// const function3 = () => {
//   //   callStack.push("function3");
//   function4();
// };
// const function4 = () => {
//   //   callStack.push("function4");
//   function5();
// };
// const function5 = () => {
//   //   callStack.push("function5");
//   throw new Error(`You've reached the end!`);
// };

// function1();
// console.log(callStack);

// const functionA = () => {
//   console.log("a");
// };
// const functionB = () => {
//   console.log("b");
// };
// const functionC = () => {
//   console.log("c");
// };
// const functionD = () => {
//   console.log("d");
//   throw new Error("reached the end!");
// };

// functionA();
// functionB();
// functionC();
// functionD();

// const flattenArray = (array) => {
//   const result = [];
//   for (const el of array) {
//     if (!Array.isArray(el)) {
//       result.push(el);
//     } else {
//       result.push(...flattenArray(el));
//     }
//   }
//   return result;
// };

// const flattenArray = (array) => {
//   const queue = [];
//   const result = [];
//   for (const el of array) {
//     queue.push(el);
//     while (queue.length) {
//       const el2 = queue.pop();
//       if (Array.isArray(el2)) {
//         queue.push(...el2);
//       } else {
//         result.push(el2);
//       }
//     }
//   }
//   return result;
// };

const flattenArray = (input) => {
  if (!Array.isArray(input)) {
    throw new Error("Input must be an array");
  }
  const result = [];
  for (const element of input) {
    if (Array.isArray(element)) {
      const flattenedArray = flattenArray(element);
      for (const childElement of flattenedArray) {
        result.push(childElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log(flattenArray([1, { a: [2, 3] }, 4, [5, [6]], [[7], 8, 9], 10]));

// console.log(flattenArray([1, { a: [2, 3] }, 4, [5, [6]], [[7], 8, 9], 10]));
//                          [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
