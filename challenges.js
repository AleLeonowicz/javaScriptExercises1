// // // Challenge 1

// // // TEST DATA 1

// const marksWeight1 = 78;
// const marksHeight1 = 1.69;

// const johnsWeight1 = 92;
// const johnsHeight1 = 1.95;


// // TEST DATA 2

// const marksWeight2 = 95;
// const marksHeight2 = 1.88;

// const johnsWeight2 = 85;
// const johnsHeight2 = 1.76;


// const marksBmi1 = marksWeight1 / marksHeight1 ** 2;
// const johnsBmi1 = johnsWeight1 / johnsHeight1 ** 2;

// const marksBmi2 = marksWeight2 / marksHeight2 ** 2;
// const johnsBmi2 = johnsWeight2 / johnsHeight2 ** 2;


// const markHigherBmi1 = marksBmi1 > johnsBmi1;
// const markHigherBmi2 = marksBmi2 > johnsBmi2;

// console.log(markHigherBmi1, markHigherBmi2);


// // Challenge 2

// if (marksBmi1 > johnsBmi1) {
//     console.log("Mark's Bmi is higher than John's");
// } else {
//     console.log("John's Bmi is higher than Mark's");
// }


// if (marksBmi2 > johnsBmi2) {
//     console.log("Mark's Bmi is higher than John's");
// } else {
//     console.log("John's Bmi is higher than Mark's");
// }

// Challenge 3

// const avarageDolphins = (97 + 112 + 101) / 3;
// const avarageKoalas = (109 + 95 + 106) / 3;

// if (avarageDolphins > avarageKoalas && avarageDolphins >= 100) {
//     console.log(`Dolphins win the tournament with an avarage score of ${avarageDolphins}!`);
// } else if (avarageKoalas > avarageDolphins && avarageKoalas >= 100) {
//     console.log(`Koalas win the tournament with an avarage score of ${avarageKoalas}!`);
// } else if (avarageDolphins === avarageKoalas && avarageDolphins >= 100 && avarageKoalas >= 100) {
//     console.log('We have a draw!');
// } else {
//     console.log('There is no winner! 😪');
// }


// Challenge 4

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

let tip1;

bill1 >= 50 && bill1 <= 300 ? tip1 = bill1 * 0.15 : tip1 = bill1 * 0.2;

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value was ${bill1 + tip1}.`);

let tip2;

bill2 >= 50 && bill2 <= 300 ? tip2 = bill2 * 0.15 : tip2 = bill2 * 0.2;

console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value was ${bill2 + tip2}.`);

let tip3;

bill3 >= 50 && bill3 <= 300 ? tip3 = bill3 * 0.15 : tip3 = bill3 * 0.2;

console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value was ${bill3 + tip3}.`);