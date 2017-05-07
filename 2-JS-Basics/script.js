/*

// Lecture variables
var name = 'John'
console.log(name)

var lastName = 'Smith'
console.log(lastName)

var age = 26

console.log(age)

console.log(name + ' ' + lastName + ' is ' + age + ' old.')

var fullAge = true
console.log(fullAge)

// Lecture variables 2
var name = 'Tom '
var age = 22

console.log(name + age)
console.log(age + age)
console.log(age + '' + age)
console.log(age + ' ' + age * age)

var job, isMarried
console.log(job)

job = 'teacher'
isMarried = false

console.log(name + 'is a ' + job, '. Is he married? ' + isMarried)

var lastName = prompt('What is the last name?')

console.log(lastName)

alert(lastName)

*/

// Lecture: operators

// var now = 2017
// var birthYear = now - 22
//
// birthYear = now - 22 * 2
//
//
// console.log(birthYear)
//
// var ageTom = 23
// var ageMark = 28
//
// ageJohn = (3 + 5) * 4 - 6
// ageJohn++ // +1
// console.log(ageJohn) // 27
//
// ageJohn *= 2
// console.log(ageJohn)

// Lecture: if/else statements

// var name = 'John'
// var age = 26
// var isMarried = 'yes'
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married!')
// } else {
//   console.log(name + ' will hopefully marry soon..')
// }
//
// isMarried = true
//
// if(isMarried) {
//   console.log('YES!')
// } else {
//   console.log('NO!')
// }
//
// if (23 == "23") {
//   console.log('Something to print...')
// } // true
//
// if (23 === "23") {
//   console.log('Something to 2...')
// } // false

// Lecture: boolean logic and switch

// var age = 20
//
//
// if (age > 19 ) {
//   console.log('John is a teenager')
// } else if (age >= 20 && age < 30 ) {
//   console.log('John is a young man')
// } else {
//   console.log('John is a man')
// }
//
// var job = 'teacher'
//
// job = prompt('What does John do?')
//
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids.')
//     break
//   case 'driver':
//     console.log('John drives a cab in Lisbon.')
//     break
//   case 'cop':
//     console.log('John helps fight crime.')
//     break
//   default:
//     console.log('John does something else.')
// }

// coding challenge

// var johnHeight = 170
// var tomHeight = 175
// var baxHeight = 183
//
// var johnAge = 70
// var tomAge = 25
// var baxAge = 23
//
// var multiplier = 90
//
// var johnScore = johnHeight + (johnAge * multiplier)
// var tomScore = tomHeight + (tomAge * multiplier)
// var baxScore = baxHeight + (baxAge * multiplier)
//
// console.log('Johns score = ' + johnScore)
// console.log('Toms score = ' + tomScore)
// console.log('Baxters score = ' + baxScore)
//
// if (tomScore > johnScore && tomScore > baxScore ) {
//   console.log('Tom wins with ' + tomScore + ' points.')
// } else if (johnScore > tomScore && johnScore >  baxScore) {
//   console.log('John wins with ' + johnScore + ' points.')
// } else if (baxScore > tomScore && baxScore > johnScore) {
//   console.log('Baxter wins with ' + baxScore + ' points.')
// } else {
//   console.log('It\'s a draw!')
// }

// Lecture: functions

// function calculateAge(yearOfBirth) {
//   var age = 2016 - yearOfBirth
//   return age
// }
//
// var ageJohn = calculateAge(1990)
// var ageMike = calculateAge(1968)
// var ageMary = calculateAge(1939)
//
// console.log(ageJohn)
// console.log(ageMike)
// console.log(ageMary)
//
// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year)
//   var retirement = 65 - age
//
//   if (retirement >= 0) {
//     console.log(name,'retires in', retirement, 'years.')
//   } else {
//     console.log(name, 'has already retired.')
//   }
// }
//
// yearsUntilRetirement('John', 1990)
// yearsUntilRetirement('Mike', 1970)
// yearsUntilRetirement('Mary', 1938)

// Lecture: statements and expressions

// expressions
3 + 4
var x = 3

// statements
if (x === 5 ) {
  // do something
}
