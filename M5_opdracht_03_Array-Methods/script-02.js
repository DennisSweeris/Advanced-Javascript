// const superheroes = [
//     { name: "Batman", alter_ego: "Bruce Wayne" },
//     { name: "Superman", alter_ego: "Clark Kent" },
//     { name: "Spiderman", alter_ego: "Peter Parker" }]

// // A: Hier komt jouw functie
// const findSpiderMan = superheroes.find((superhero) => {
//     return superhero.name === "Spiderman";
// });

// console.log(findSpiderMan);
// // Find Spiderman
// // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B:
// const array = [1, 2, 3];
// const doubleArrayValues = array.map((array) => {
//     return array * 2;
// });
// // OR
// // const doubleArrayValues = array.map((x => x * 2));
// console.log(doubleArrayValues);
// // result should be [2, 4, 6]

// C:
// let numbers1 = [1, 4, 3, 6, 9, 7, 11];
// let numbers2 = [1, 2, 1, 2, 1, 2];

// const numbers1BiggerThan10 = numbers1.some((number) => {
//     return number > 10;
// })
// console.log("Numbers 2 contains number bigger than 10?", numbers1BiggerThan10);
// // result should be true

// const numbers2BiggerThan10 = numbers2.some((number) => {
//     return number > 10;
// })
// console.log("Numbers 2 contains number bigger than 10?", numbers2BiggerThan10);
// // result should be false

// D:
// let theGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

// const isItalyInTheGreat7 = theGreat7.includes("Italy");
// console.log(isItalyInTheGreat7);
// result should be true

// E:
// let numbers = [1, 4, 3, 6, 9, 7, 11];

// numbers.forEach((item, index, arr) => {
//     arr[index] = item * 10;
// });

// console.log(numbers);
// result should be [10, 40, 30, 60, 90, 70, 110]

// F:
// const values = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
// const isBelow100 = values.every((value) => {
//     return value < 100;
// });
// console.log(isBelow100);
// result should be: false

// G:
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = numbers.reduce((currentTotal, number) => {
    return number + currentTotal;
});
console.log(bigSum);
// result should be 1118
