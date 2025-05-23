'use strict';

// let hasDriversLicense = false;
// let pastTest = true;

// if (pastTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(' I can drive! :D')



            // FUNCTIONS

// function fruitProcessor (apples, oranges){
//    console.log (apples, oranges);
//    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//    return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1 (birthYear){
//    return 2037 - birthYear;
// }


// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear){
//    return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUtilRetirement = (birthYear, firstname) =>{
//    const age = 2037 - birthYear;
//    const retirement = 65 - age;
//    return `${firstname} retire in ${retirement} years`;
// }
// const yearsUntilRetirement = yearsUtilRetirement(1991);
// console.log(yearsUtilRetirement(1993, 'Tony'));

// const cutPieces = function (fruit){
//    return fruit * 4;
// }
// function fruitProcessor (apples, oranges){

//    const applePieces = cutPieces(apples);
//    const orangePieces = cutPieces (oranges);

//    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//    return juice;
// }

// console.log(fruitProcessor(5, 3));

// const calcAge = function (birthYear){
//    return 2037 - birthYear;
// }

// const yearsUtilRetirement = (birthYear, firstname) =>{
//    const age = calcAge(birthYear);
//    const retirement = 65 - age;

//    if (retirement > 0){
//       return `${firstname} retire in ${retirement} years`;
//    }else{
//       return `${firstname} is alredy retired`;
//     }
// }
// console.log(yearsUtilRetirement(1993, 'Tony'));
// console.log(yearsUtilRetirement(1963, 'Mike'));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage (85, 54, 41);
// console.log(scoreDolphins)
// const scoreKoalas = calcAverage (23, 34, 40);
// console.log(scoreKoalas)

// const checkWinner = (scoreDolphins, scoreKoalas) =>{
//    const avgDolphis = scoreDolphins;
//     const avgKoalas = scoreKoalas;
    
//     if (avgDolphis > (avgKoalas + avgKoalas)){
//         return console.log(`Dolphins wins (${avgDolphis} vs. (${avgKoalas}))`);
//     }else if (avgKoalas > (avgDolphis + avgDolphis)){
//         return console.log(`Koala wins (${avgKoalas}) vs. (${avgDolphis}))`)
//     }else{
//         return console.log(`No one wisn the competition, Dolphins (${avgDolphis}) vs. Koalas (${avgKoalas})`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//  Arrays 

// const friend1 = 'Michael';
// const friend2 = 'steven';
// const friend3 = 'Peter';

// const firends = ['Michael', 'Seteven', 'Peter'];
// console.log(firends);

// // const years = new Array(1991, 1984, 2000, 2020);

// console.log(firends[1]);
// console.log(firends[0]);

// console.log(firends.length);
// console.log(firends[firends.length - 1]);

// firends[2] = 'Jay';
// console.log(firends);

// const firstName = 'Tony';
// const tony = [firstName, 'Cordero', 2037 - 1991, 'prorammer', firends];
// console.log(tony);

// // Excercise

// const calcAge = function (birthYear){
//    return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Method


// const firends = ['Michael', 'Steven', 'Peter'];
// console.log(firends);

// // Add Elements

// firends.push('Jay');
// console.log(firends);

// firends.unshift('Tony');
// console.log(firends);

// // Remove Elements

// firends.pop();
// console.log(firends);

// firends.shift();
// console.log(firends);

// console.log(firends.indexOf('Steven'));

// console.log(firends.includes('Steven'));
// console.log(firends.includes('Bob'));

//  Objects

// const tony = {
//    firstName: 'Tony',
//    lastName: 'Cordero',
//    age: 2024 - 1993,
//    job: 'programmer',
//    friends: ['Bigotes', 'David', 'Chus']
// }
// console.log(tony);

// console.log(tony.lastName);
// console.log(tony['firstName']);

// const nameKey ='Name';

// const interestedIn = prompt('What do you want to know about Tony?, Choose between: firstName, lastName, age, job, and friends');

// if (tony[interestedIn]){
//    console.log(tony[interestedIn]);
// } else{
//    console.log('Wrong request!, Choose between: firstName, lastName, age, job, and friends')
// }

// tony.location = 'Costa Rica';
// tony['LinkedIn'] = 'https://www.linkedin.com/in/anthony-cordero-front-end/';


// // CHALLLENGE

// // Tony has 3 friends, and his best friend is David

// console.log(`${tony.firstName} ${tony.lastName} has ${tony.friends.length} friends, and his best friend is ${tony.friends[1]}`);

// const tony = {
//    firstName: 'Tony',
//    lastName: 'Cordero',
//    birthYear: 1993,
//    job: 'programmer',
//    friends: ['Bigotes', 'David', 'Chus'],
//    hasDriverLicense: true,

//    calcAge: function(){
//       console.log(this);
//       return 2037 - this.birthYear;
//    }
// }

// console.log(tony.calcAge());

// const nameKey = 'Name';
// console.log(tony['first' + nameKey]);
// console.log(tony['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Tony?, Choose between, fistName, lastName, age, job, and friends');
// // console.log(tony[interestedIn]);

// if (tony[interestedIn]){
//    console.log(tony[interestedIn]);
// }else {
//    console.log('Wrong request!, Choose between, fistName, lastName, age, job, and friends');
// }

// tony.location = 'Costa Rica';
// tony['LinkedIn'] = 'https://www.linkedin.com/in/anthony-cordero-front-end/';
// console.log(tony);

// console.log(tony.firstName + ' has ' + [tony.friends.length] + ' friends, and his best friend is called ' + tony.friends[1]);


// const tony = {
//    firstName: 'Tony',
//    lastName: 'Cordero',
//    birthYear: 1993,
//    job: 'programmer',
//    friends: ['Bigotes', 'David', 'Chus'],
//    hasDriverLicense: true,

//    calcAge: function(){
//       return 2037 - this.birthYear;
//    },
//    licenseValidation: function (){
//       if (this.hasDriverLicense){
//          return 'a';
//       }else{
//          return 'no';
//       }
//    }
// };
// console.log(`${tony.firstName} is a ${tony.calcAge()} year old ${tony.job}, and he has ${tony.licenseValidation()} driver's license`);
// console.log(tony.calcAge());


// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
  
//   calcBMI: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
  
//   calcBMI: function(){
//   this.bmi = this.mass / (this.height * this.height);
//   return this.bmi;
//   }
// };

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);


// LOOPS

// const tony = [
//    'Tony',
//    'Cordero',
//    2024 - 1993,
//    'programmer',
//    ['Bigotes', 'David', 'Chus']
// ];

// FOR
// // Backwards Loop
// for (let i = tony.length - 1; i>= 0; i--){
//    console.log(i, tony[i]);
// };

// for (let excercise = 1; excercise <= 3; excercise++){
//   console.log(`-------- Starting excercise ${excercise}`);
//   for (let rep = 1; rep <= 5; rep++){
//     console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
//   };
// };

// WHILE
// let rep = 1;
// while (rep <= 3){
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// };