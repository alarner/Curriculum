const animals = ["cats", "dogs", "frogs", "capybara"];
const animals2 = ["cats", "dogs", "frogs", "capybara"];

const compareArray = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

// console.log(compareArray(animals, animals2));

const myObject = { sally: "frog" };
console.log(myObject.sally);
myObject.sally = "snake";
console.log(myObject.sally);
myObject["sally"] = "dog";
console.log(myObject.sally);

// const sally = myObject.sally;
// const { sally } = myObject;

const enquirerConfig = {
  type: "input",
  name: "answer",
  message: "What is your username?",
};

const result = {};
result.name = "alarner";
result[enquirerConfig.name] = "alarner";
console.log(result);

const die = {
  numSides: 6,
  roll: () => {
    return 3;
  },
};

const anotherDie = { ...die };

die.numSides = 7;
console.log(die.numSides, anotherDie.numSides);

// result["username"] = "alarner";

// console.log(result);

// const animals3 = animals;
// animals[0] = "parrot";
// // console.log(animals3 === animals);

// const sally = animals[2];
// let var1 = "a";
// let var2 = var1;
// var1 = "b";
// console.log(var1, var2);
// // console.log(animals === animals2);

// // for (let index = 0; index < animals.length; index++) {
// //   console.log(`${animals[index]}s`);
// // }

// const todoName = [];
// const todoCompleted = [];
// const todoLabel = [];

// todoName.push("Wash car");
// todoCompleted.push(false);
// todoLabel.push("home");

// todoName.push("Do laundry");
// todoCompleted.push(true);
// todoLabel.push("home");

// todoName.push("work project #1");
// todoCompleted.push(false);
// todoLabel.push("work");

// const todos = [];
// todos.push({
//   name: "wash car",
//   completed: false,
//   label: "home",
// });
// todos.push({
//   name: "do laundry",
//   completed: true,
//   label: "home",
// });
// todos.push({
//   name: "work project #1",
//   completed: false,
//   label: "work",
// });
// todos.push({
//   name: "work project #2",
//   completed: true,
//   label: "work",
//   priority: 1,
// });
// todos.push({
//   name: "work project #2",
//   completed: true,
//   label: "work",
//   priority: 1,
// });

// console.log("priority" in todos[3]);
