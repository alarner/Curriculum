const person = {
  height: "5'9",
  firstName: "Aaron",
  lastName: "Larner",
  age: 34,
};

// const firstName = person.firstName;
// const { firstName } = person;

// const name = person.firstName;
const { firstName: name, height: myHeight, age } = person;

console.log(name);

// const newPerson = {
//   name: name,
// };

const foo = "bar";

const newPerson = {
  name,
  myHeight,
  age,
  7: 7,
  foo,
};

console.log(newPerson);

// const greeting = `Hello, my name is ${firstName}. In the bible, ${firstName} was brother of moses. My parents named me ${firstName} because ...`;
