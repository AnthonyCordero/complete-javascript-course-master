/*let js = 'amazing';

console.log(40 + 50 + 6 - 8 + 6);
console.log('jonas');

let firstName = "jonas";
console.log(firstName);

//variable name cinvetion

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "corder";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(PI);

true;
let javaScriptIsFun = true
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptIsFun = "YES!";

console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);


let age = 30;
age = 31;

//const birthYear = 1991;

//const job;

var job = "programmer";
job = "teacher";



// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName)


// Asignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x)

// Comparison operators

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Fisrt Coding Challenge

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.



let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

console.log(markHeight, markWeight, ' ', johnHeight, johnWeight);

const markFirstBMI = (markWeight / markHeight ** 2);
console.log("Mark" + " First" + " BMI" + ": " + markFirstBMI);

const johnFirstBMI = (johnWeight / johnHeight ** 2);
console.log("John" + " First" + " BMI" + ": " + johnFirstBMI);


let firstMarkHigherBMI = (markFirstBMI > johnFirstBMI);
console.log(firstMarkHigherBMI)



markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

console.log(markHeight, markWeight, ' ', johnHeight, johnWeight);

const markSecondBMI = (markWeight / markHeight ** 2);
console.log("Mark" + " First" + " BMI" + ": " + markSecondBMI);

const johnSecondBMI = (johnWeight / johnHeight ** 2);
console.log("John" + " First" + " BMI" + ": " + johnSecondBMI);

let secondMarkHigherBMI = (markSecondBMI > johnSecondBMI);
console.log(secondMarkHigherBMI)


const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);




const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;

console.log(jonasNew);

console.log(`Just typing some strings`)


// IF ELSE CONTROL STRUTURE

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can star driving licence 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Saraha is too joung. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2001;


if (birthYear <= 2000) {
    let = century = 20;
} else {
    century = 21;
}

console.log(century);



const firstMarkHeight = 1.50;
const firstMarkWeight = 78;

const firstJohnHeight = 1.95;
const firstJohnWeight = 92;

console.log(firstMarkHeight, firstMarkWeight, ' ', firstJohnHeight, firstJohnWeight);

const markFirstBMI = (firstMarkWeight / firstMarkHeight ** 2);
console.log("Mark" + " First" + " BMI" + ": " + markFirstBMI);

const johnFirstBMI = (firstJohnWeight / firstJohnHeight ** 2);
console.log("John" + " First" + " BMI" + ": " + johnFirstBMI);


let firstMarkHigherBMI = (markFirstBMI > johnFirstBMI);
console.log(firstMarkHigherBMI)



const secondMarkHeight = 1.50;
const secondMarkWeight = 95;

const secondJohnHeight = 1.76;
const secondJohnWeight = 85;

console.log(secondMarkHeight, secondMarkWeight, ' ', secondJohnWeight, secondJohnHeight);

const markSecondBMI = (secondMarkWeight / secondMarkHeight ** 2);
console.log("Mark" + " First" + " BMI" + ": " + markSecondBMI);

const johnSecondBMI = (secondJohnWeight / secondJohnHeight ** 2);
console.log("John" + " First" + " BMI" + ": " + johnSecondBMI);

let secondMarkHigherBMI = (markSecondBMI > johnSecondBMI);
console.log(secondMarkHigherBMI)
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �


if (markFirstBMI > johnFirstBMI) {
    console.log(`Mark first BMI (${markFirstBMI}) is higher than John's BMI (${johnFirstBMI})`);
} else {
    console.log(`John first BMI (${johnFirstBMI}) is higher than Mark's BMI (${markFirstBMI})`);
}

console.log(`Second BMI's comprobation`);

if (markSecondBMI > johnSecondBMI) {
    console.log(`Mark Second BMI (${markSecondBMI}) is higher than John's BMI (${johnSecondBMI})`);
} else {
    console.log(`John second BMI (${johnSecondBMI}) is higher than Mark's BMI (${markSecondBMI})`);
}


// type convertion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log("I'm " + 23 + "years old");
console.log("23" + "10" + 3);
console.log("23" * "2");


let n = "1" + 1;
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job!`);
}

let height = 180;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}


// comparison operators

const age = `18`;
if (age === 18) console.log(`You just became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);

const favorite = Number(prompt("What's your favortite number?"));
console.log(favorite);

if (favorite === 23) {
    console.log(`COOL!, 23 is an amazing number! :D!`);
} else if (favorite === 7) {
    console.log(`7 is also a great number!`);
} else if (favorite === 9) {
    console.log(`9 is also a great number!`);
} else {
    console.log(`Number is not 23 or 7`);
}

if (favorite !== 23) console.log(`Why not 23?`);


const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false;
console.log(hasDriverLicence || hasGoodVision || isTired);

if (hasDriverLicence && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

console.log(`First Contest`);
const dolphinsFirstData = (96 + 108 + 89) / 3;
console.log(dolphinsFirstData);
const koalasFirstData = (88 + 91 + 110) / 3;
console.log(koalasFirstData);

if (dolphinsFirstData > koalasFirstData) {
    console.log(`Dolphin's team is the winner! CONGRATS!`);
} else {
    console.log(`Koalas's team is the winner! CONGRATS!`);
}
console.log(`Second Contest`)
const dolphinsSecondData = (97 + 112 + 101) / 3;
console.log(dolphinsSecondData);
const koalasSecondData = (109 + 95 + 123) / 3;
console.log(koalasSecondData);


if (dolphinsSecondData < 100) {
    console.log(`Oh no!... Dolphins team got disqualified because didn't reach 100 points!`);
} else if (koalasSecondData < 100) {
    console.log(`Oh no!... Koalas team got disqualified because didn't reach 100 points!`);
} else if ((dolphinsSecondData && koalasSecondData) > 100) {
    console.log(`Both teams score more than 100 points!...lets check up who wins!`);
}

if (koalasSecondData > dolphinsSecondData) {
    console.log(`Koalas team is the winner!`);
} else {
    console.log(`Dolphins team is the winner!`);
}

console.log(`Tird Conquest`);

const dolphinsTirdData = (97 + 112 + 101) / 3;
console.log(dolphinsTirdData);
const koalasTirdData = (109 + 95 + 106) / 3;
console.log(koalasTirdData);

if (dolphinsTirdData < 100) {
    console.log(`Oh no!... Dolphins team got disqualified because didn't reach 100 points!`);
} else if (koalasTirdData < 100) {
    console.log(`Oh no!... Koalas team got disqualified because didn't reach 100 points!`);
} else if (dolphinsTirdData === koalasTirdData) {
    console.log(`It's a tie!... Both Teams win's gold medal, Oh Yeah!!`);
}

if (koalasTirdData < 100) {
    console.log(`Conquest winner Dolphins Team!`);
} else if (dolphinsTirdData < 100) {
    console.log(`Conquest winner Koalas Team!`);
}



const hasDriverLicense = false; //A
const hasGoodVision = false  //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

const shouldDrive = hasDriverLicense || hasGoodVision || !isTired;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
*/

// const day = 'monday';

// switch (day) {
//     case 'monday':   // day === 'monday '
//         console.log('Plan My Course Struture');
//         console.log('Go work at PM');
//         break;
//     case 'tuesday':
//         console.log('Go work early');
//         console.log('Wash my theeth');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Become a complete, successfull profesional!');
//         console.log('Fight every day against the lazzy tony!');
//         break;
//     case 'friday':
//         console.log('Keep working till die');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Come on! everithing is posible!');
//         break;
//     default:
//         console.log('Not a Valid Day!');
// }

// if (day === 'monday') {
//     console.log('Plan My Course Struture');
//     console.log('Go work at PM');
// } else if (day === 'tuesday') {
//     console.log('Go work early');
//     console.log('Wash my theeth');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Become a complete, successfull profesional!');
// }
// else if (day === 'thursday') {
//     console.log('Fight every day against the lazzy tony!');
// }
// else if (day === 'friday') {
//     console.log('Keep working till die');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Come on! everithing is posible!');
// } else {
//     console.log('Not a Valid Day!');
// }

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀