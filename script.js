// // function construction

// var john = {
//     name: 'John',
//     yearOfBith: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function () {
//         console.log(2019 - this.yearOfBirth);
//     }
// }


// Person.prototype.calculateAge = 
// function () {
//     console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// john.calculateAge();

// var jane = new Person('Jane', 1969, 'designer');
// jane.calculateAge();

// var mark = new Person('Mark', 1948, 'retired');
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);






// ///////////////////////////////////// object.create

// var personProto = {
//     calculateAge: function () {
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     year: {value: 1969},
//     job: {value: 'designer'}
// });






////////////////////////////////// first class functions

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i< arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function isFullAge(el) {
//     return el >= 18;
// }


// function calculateAge(el) {
//     return 2019 - el;
// }

// function maxHearthRate(el) {
//     if (el >= 18 && el <=81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
    
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxRate = arrayCalc(ages, maxHearthRate);
// console.log(ages);
// console.log(maxRate);


///////////////////////// functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//             return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello, ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');




//////////////// Immediately invoked function expressions IIFE

// (function () {
//     var score = Math.random() * 10;
//     console.log(score>=5);
// }
// )();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// }
// )(5);






///////////////////////////// Closures

function retirement()
