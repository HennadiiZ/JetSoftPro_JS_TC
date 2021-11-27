


//submit homework to the repository that you created for git lecture 


//==================== 1 ====================
// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function recursion(base, exponent){
    if (exponent === 0){
    return 1;
    }
    else{
    return base * recursion(base, exponent - 1);
    }
};
    //console.log(recursion(8, 2));






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
const digits = [1, 2, 93, 4, 10]
console.log(Math.max.apply(Math, digits))
console.log(Math.min.apply(Math, digits))

console.log(Math.max.apply(Math, [1, 2, 93, 4, 10]))
console.log(Math.min.apply(Math, [1, 2, 93, 4, 10]))




//==================== 3 ====================
// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

//! branch and color. WHAT IS  'BRANCH'? maybe 'BRAND'?
//!I'm not sure if I got it , so I made 3 versions

//1st version
function displayCarDetails(ownerName){
    
    console.log(`number: ${this.registrationNumber} , brand: ${this.brand}, color: ${this.color}`)
}
const ivan = { registrationNumber: 'AA77C12', brand: 'TOYOTA', color: 'black'}
const oleg = { registrationNumber: 'DBA71CCQ2', brand: 'MAZDA', color: 'blue'}
const vladimir = {registrationNumber: 'QQ321YY7', brand: 'batmobile',color: 'very unusual'}
// displayCarDetails.call(ivan);
// displayCarDetails.call(oleg);
// displayCarDetails.call(vladimir);
// displayCarDetails(vladimir);

//2nd version
// function DisplayCarDetails(registrationNumber, brand, color ){
//     this.registrationNumber = registrationNumber;
//     this.brand = brand;
//     this.color = color;

//     console.log(`${this.registrationNumber} ,${this.brand}, ${this.color}`)
// }
// const ivan = new DisplayCarDetails('AA77C12', 'TOYOTA', 'black')
// const oleg = new DisplayCarDetails('DBA71CCQ2', 'MAZDA', 'blue')
// const vladimir = new DisplayCarDetails('QQ321YY7', 'BMW', 'very unusual')
// console.log(ivan)
// console.log(ivan.registrationNumber)
// console.log(ivan.brand)
// console.log(ivan.color)
// console.log(oleg)
// console.log(vladimir)

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
//!console.log(greet(amy)) // - in case if you need Arnold





//==================== 5 ====================
// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

//1st
setTimeout(() => {
    for (var i = 0; i < 4; i++) {
    // console.log(i)
    }
}, 0)

//2nd 
for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
}

