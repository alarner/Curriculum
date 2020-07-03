const { getAge } = require('./age');
console.log(
    'age',
    getAge.toString(),
    getAge()
);
const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');

if(name === 'Aaron') {
    const kittenNames = prompt('What are your kitten names? ');
}
else if(name === 'Lynsey') {
    const dndName = prompt('What is your DnD name? ');
}

// const name = prompt('what is your name? ');
// console.log(`Hello ${name}`);
// let x = 1+1;
// x = 1+2;
// console.log(x);
// // x = x + 5;
// console.log(x + 5);
// console.log(x);

// const y = 1+1; // Use const for variables that you don't want to change
// console.log(y);

// console.log(y + 1);

// let age1 = 34;
// let age2 = 34;

// console.log('age1++', age1++);
// // console.log(age1)
// // age1 = age1 + 1;

// console.log('++age2', ++age2);
// // age2 = age2 + 1;
// // console.log(age2)

// console.log('age1', age1);
// console.log('age2', age2);

// // console.log(age1 = 37);

// console.log(age1 += 6);
// console.log(age1);

// console.log(Math.pow(2, 3))

// // age++;
// // ++age;
// // console.log(age);

// // let time = (age = age + 1);

// const signupDate = 30;
// const email = 'aaron@larner.com';
// const plan = 'free';

// const showBanner1 = (
//     signupDate < 50 &&
//     !email.endsWith('@gmail.com') &&
//     plan === 'free'
// );

// const showBanner2 = (
//     signupDate < 50 &&
//     !email.endsWith('@gmail.com') &&
//     plan !== 'enterprise'
// );

// console.log('showBanner1', typeof showBanner1, showBanner1);
// console.log('showBanner2', typeof showBanner2, showBanner2);

// if(showBanner1) {
//     console.log('You should sign up for Trello Business Class');
// }
// else if(showBanner2) {
//     console.log('You should sign up for Trello Enterprise');
// }
// else {
//     console.log('no banner to show here...');    
// }

// console.log('the rest of trello.com');