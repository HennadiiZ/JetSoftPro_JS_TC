


//submit homework to the repository that you created for git lecture 


//==================== 1 ====================
// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

//1
function recursion(base, exponent){
    if (exponent === 0){
    return 1;
    }
    else{
    return base * recursion(base, exponent - 1);
    }
};
console.log('______task 1 v1:');
console.log(recursion(8, 2)); //64

 //2   
function recursionTwo(base, exponent) {
    if (exponent === 0){
        return 1;
    } 
    else {
      return (exponent > 0) ? base * recursionTwo(base, exponent - 1) : recursionTwo(base, exponent + 1) / base;
    }
};
console.log('______task 1 v2:');
console.log(recursionTwo(8, 2)); //64





//==================== 2 ====================   
// 2. Write functions min and max that will find min and max number in array using apply

//! I didn't get it
//! ok, here we have functions min and max, but 'apply' has nothing to do with these functions...
function min(arr){
    let min = arr.reduce((prev, cur)=>{
         return (prev < cur) ? prev : cur;
    })
    return min;
}
//console.log( min([11, 2, 3, 84, 10]))

function max(arr){
    let max = arr.reduce((prev, cur)=>{
        return (prev > cur) ? prev : cur;
   },0)
   return max;
}
//console.log( max([1, 2, 93, 4, 10]))

//! so another solution:
// const digits = [1, 2, 93, 4, 10]
// console.log(Math.max.apply(Math, digits))
// console.log(Math.min.apply(Math, digits))
// console.log(Math.max.apply(Math, [1, 2, 93, 4, 10]))
// console.log(Math.min.apply(Math, [1, 2, 93, 4, 10]))

//! another solution:
const digits = [1, 2, 93, 4, 10]

 function maxDigit(arr) {
    return Math.max.apply(null, arr);
 }

 function minDigit(arr){
    return Math.min.apply(null, arr)
 }

console.log('______task 2 :')
console.log(maxDigit(digits))
console.log(minDigit(digits))




//==================== 3 ====================
// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

//! branch and color. WHAT IS  'BRANCH'? maybe 'BRAND'?
//!I'm not sure if I got it , so I made 3 versions

//1st version
function displayCarDetails(ownerName){
    //return `${this.registrationNumber} ,${this.brand}, ${this.color}`
    console.log(`The owner's name is: ${ownerName}, number: ${this.registrationNumber} , brand: ${this.brand}, color: ${this.color}`)
}
const ivan = { registrationNumber: 'AA77C12', brand: 'TOYOTA', color: 'black'}
const oleg = { registrationNumber: 'DBA71CCQ2', brand: 'MAZDA', color: 'blue'}
const vladimir = {registrationNumber: 'QQ321YY7', brand: 'batmobile',color: 'very unusual'}
console.log('______task 3 :')
displayCarDetails.call(ivan, 'Ivan');
displayCarDetails.call(oleg, 'Oleg');
displayCarDetails.call(vladimir, 'Vladimir');


//2nd version
function DisplayCarDetails(registrationNumber, brand, color ){
    this.registrationNumber = registrationNumber;
    this.brand = brand;
    this.color = color;

    console.log(`${this.registrationNumber} ,${this.brand}, ${this.color}`)
}
const ivanUser = new DisplayCarDetails('AA77C12', 'TOYOTA', 'black')
const olegUser = new DisplayCarDetails('DBA71CCQ2', 'MAZDA', 'blue')
const vladimirUser = new DisplayCarDetails('QQ321YY7', 'BMW', 'very unusual')
console.log('______task 3 v2:')
console.log(ivanUser)
console.log(ivanUser.registrationNumber)
console.log(ivanUser.brand)
console.log(ivanUser.color)
console.log(olegUser)
console.log(vladimirUser)

//3rd version (I know it's incorrect though)
// const ivan = {
//     registrationNumber: 'AA77C12',
//     brand: 'TOYOTA',
//     color: 'black'
// }
// const oleg = {
//     registrationNumber: 'DBA71CCQ2', 
//     brand: 'MAZDA',
//     color: 'blue'
// }
// const vladimir = {
//     registrationNumber: 'QQ321YY7', 
//     brand: 'BMW',
//     color: 'very unusual'
// }

// function displayCarDetails(ownerName){
//     return `${ownerName.registrationNumber} ,${ownerName.brand}, ${ownerName.color}`
// }
//console.log('______task 3 v3:')
// console.log(displayCarDetails(ivan))
// console.log(displayCarDetails(oleg))
// console.log(displayCarDetails(vladimir))





//==================== 4 ====================
// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
//! I CANNOT FIX THAT, BECAUSE IT'S RUNNING RIGHT ALREADY :-)
 
// function greet (person) {
//   if (person.name ==  'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
//console.log(greet(amy)) - working correctly
function greet (person) {
    if (person.name !==  'amy' ) {
      return 'hey amy'
    } else {
      return 'hey arnold'
    }
}
const amy = {name: 'amy'}
console.log('______task 4:')
console.log(greet(amy)) // - in case if you need Arnold





//==================== 5 ====================
// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

//1st

setTimeout(() => {
    for (var i = 0; i < 4; i++) {   
    console.log(i)
    }
}, 0)

//2nd 

for (let i = 0; i < 4; i++) {
setTimeout(() => console.log(i), 0)
}


