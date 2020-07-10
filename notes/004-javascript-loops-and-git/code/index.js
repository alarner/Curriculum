const message = 'Hello World';
console.log(message);
console.log(typeof message);
console.log(message.charAt(3));

const messageArray = message.split('');
console.log(messageArray);
const backToAString = messageArray.join('');
console.log(backToAString);

const arrayOfBooleans = [true, false, true];
console.log(arrayOfBooleans);

const test = [
    message.endsWith('World'),
    message === 'Hello',
    arrayOfBooleans.length
];
console.log(test); // [true, false, 3]
console.log(test.length);
test.push(7.5);
console.log(test);
console.log(test[1]);

test[1] = true;

console.log(test);

// will not work
// test = [1, 2, 3, 4, 5, 6];

const animals = ['cat', 'dog', 'rabbit', 'deer', 'parrot', 'iguana', 'capybara', 'fish', 'cheetah', 'capybara'];
// const animalsLeft = [];
// for(let position=0; position<animals.length; position=position+1) {
//     console.log(animals[position]);
//     if(animals[position] === 'capybara') {
//         console.log(`capybara found at position ${position}`);
//         animals.splice(position, 1);
//         position = position - 1;
//     }
//     // if(animals[position] !== 'capybara') {
//     //     animalsLeft.push(animals[position]);
//     // }
// }

function isNotCapybara(animal) {
    if(animal !== 'capybara') {
        return true;
    }
    else {
        return false;
    }
}

function plural(animal) {
    return `${animal}s`
}

// const animalsLeft = animals.filter(isNotCapybara);

const animalsLeft = animals.filter(isNotCapybara);
const isAnimalNotCapybara = animals.map(isNotCapybara);

console.log(isAnimalNotCapybara);

const pluralAnimals = animals.map(plural);

console.log(pluralAnimals);


if('cheetah' === animals[8]) {
    console.log('it is working')
}
