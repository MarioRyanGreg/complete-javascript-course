/********************************
*  Varaiables and data types
*/

/*
var firstName = 'Tes';
console.log(firstName);

var lastName = 'Tes';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/********************************************** 
 * Variable mutation and type coercion
 */

 //var firstName = 'John'
 //var age = 28;

 // Type coercion
//console.log(firstName +  ' ' + age);

//var job, isMarried;
//job = 'teacher';
//isMarried = false;

//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
//age = 'twenty eight';
//job = 'driver';

//alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//var lastName = prompt('What is his last name?');
//console.log(firstName + ' ' + lastName);


/******************************
 * Basic Operators
 */

 //var year, yearJohn, yearMark;
 //now = 2018;
 //ageJohn = 28;
 //ageMark = 33;


 // Math Operators    
 //yearJohn = now - ageJohn;
 //yearMark = now - ageMark;

 //console.log(yearJohn);

 //console.log(now + 2);
 //console.log(now * 2);
 //console.log(now / 10);

 // Logical Operators
 //var johnOlder = ageJohn < ageMark;
 //console.log(johnOlder);

 // typeof operator
 //console.log(typeof johnOlder);
 //console.log(typeof ageJohn);
 //console.log(typeof 'Mark is older than John');
 //var x;
 //console.log(typeof x);

 /*********************************** 
  * Operator precedence
 */

 //var now = 2018;
 //var yearJohn = 1989;
 //var fullAge = 18;

 // Multiple operators
 //var isFullAge = now - yearJohn >= fullAge;
 //console.log(isFullAge);

 // Grouping
 //var ageJohn = now - yearJohn;
 //var ageMark = 35;
 //var average = (ageJohn + ageMark) / 2;
 //console.log(average);

 // Multiple assignments
 //var x, y;
 //x = y = (3 + 5) * 4 - 6;
 //console.log(x, y);

 // More operators
 //x *= 2;
 //console.log(x);
 //x += 10;
 //console.log(x);
 //x--;
 //console.log(x);

 //challenge 1
 /*
 var johnMass, markMass, johnHeight, markHeight, johnBMI, markBMI;
   
 johnMass = 92;
 johnHeight = 1.95;
 markMass = 78;
 markHeight = 1.69;

 johnBMI = johnMass / (johnHeight * johnHeight);
 markBMI = markMass / (markHeight * markHeight);

 console.log(johnBMI, markBMI);

 var isMarkBMIHigherJohnBMI = markBMI >= johnBMI;

 console.log ("Is Mark's BMI higher than John's BMI?" + " " + isMarkBMIHigherJohnBMI);
 */


 /*********************************** 
  * If / else statements
 */

 /*var firstName = 'John';
 var civilStatus = 'single'; 
 
 if (civilStatus === 'married') {
     console.log(firstName + ' is married');
 } else {
     console.log(firstName + ' will hopefully marry soon');
 }

 var isMarried = true;
 if (isMarried) {
    console.log(firstName + ' is married');
 } else {
    console.log(firstName + ' will hopefully marry soon');
 }

 var johnMass, markMass, johnHeight, markHeight, johnBMI, markBMI;

 johnMass = 192;
 johnHeight = 1.95;
 markMass = 78;
 markHeight = 1.69;

 johnBMI = johnMass / (johnHeight * johnHeight);
 markBMI = markMass / (markHeight * markHeight);

 if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
 } else {
    console.log('John\'s BMI is higher than Mark\'s.');
 }
*/

/***************************** 
 * Boolean logic
*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }
// else {
//     console.log(firstName + ' is a man.');
// }


/**************************************
 * The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 22;

// // Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.') ;

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
}
else {
    var drink = 'juice';
}*/

// Switch Statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher': 
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'deisgner':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default : console.log(firstName + ' does something else.');
// }

// age = 56;
// switch (true) {
//     case (age < 13) : 
//         console.log(firstName + ' is a boy.');
//         break; 
//     case (age >= 13 && age < 20) :
//         console.log(firstName + ' is a teenager.');
//         break;
//     case (age >= 20 && age < 30) :
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


/******************************************
 *  Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
}
else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}*/

// var johnTeamAvg = (89 + 120 + 103) / 3;
// var mikeTeamAvg = (116 + 94 + 123) / 3;
// var maryTeamAvg = (97 + 134 + 105) / 3;

// if (johnTeamAvg > mikeTeamAvg) {
//     console.log('The winner is: ' + 'John\'s Team');
// }
// else if (johnTeamAvg > mikeTeamAvg) {
//     console.log('There is no winner because the result is seri');
// }
// else {
//     console.log('The winner is: ' + 'Mike\'s Team');
// }

// switch (true) {
//      case ((johnTeamAvg > mikeTeamAvg) 
//             && (johnTeamAvg > maryTeamAvg)) : 
//            console.log('The winner is: ' + 'John\'s team', johnTeamAvg);
//            break;
//      case ((mikeTeamAvg > maryTeamAvg) 
//            && (mikeTeamAvg > johnTeamAvg)) : 
//            console.log('The winner is: ' + 'Mike\'s team', mikeTeamAvg);
//            break;
//      case ((maryTeamAvg > mikeTeamAvg) 
//            && (maryTeamAvg > johnTeamAvg)) : 
//            console.log('The winner is: ' + 'Mary\'s team', maryTeamAvg);
//            break;
//      default: console.log('There is no winner because the result was seri. Therefore should be a match for recognizing the winner.');                 
// }

/**********************************
 * Functions
 */

 /*function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName) {

    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');*/

 /**
  * Function Statements and Expressions
  */

 // Function declaration
 //function whatDoYouDo(job, firstName) {}

 // Function expression
 /*var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'   
        case 'designer':
            return firstName + ' designs beatiful websites.'
        default:
            return firstName + ' does something else';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'));*/

 /***********************************************************
  * Arrays
  */

  var names = ['John', 'Mark', 'Jane'];
  var years = new Array(1990, 1969, 1948);

  console.log(names[2]);
  console.log(names.length);





