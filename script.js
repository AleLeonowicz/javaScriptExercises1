// let js = 'amazing';
// console.log(40 + 88 + 23 - 10);
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);



// Asignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x -1
// console.log(x);

//Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// console.log(ageJonas);
// console.log(ageSarah);

// const avarage = (ageJonas + ageSarah) / 2;

// console.log(avarage);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonasNew);


// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// mltiple
// lines`);

//windows + . = emoji

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving lessons 😍')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
// }
// const birthYear = 1991;
// let century;


// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


//Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);


//Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);


// 5 falsy values: 0, ' ', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;

// if (money) {
//     console.log("Don't spend it all 😎");
// } else {
//     console.log('You should get a job!');
// }




// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is cool!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else {
//     console.log(`${favourite} is not cool at all!`)
// }

// if (favourite !== 23) console.log('Why not the 23?!');



// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someoneelse should drive!');
// }


// const isTired = true;
// console.log(hasDriversLicence || hasGoodVision || isTired);


const day = 'saturday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend! 😁');
        break;
    default:
        console.log('Not a valid day!');
}

const age = 23;
age >= 18 ? console.log('I like to dring wine 🍷') :
    console.log('I like to dring water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);


let dink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);