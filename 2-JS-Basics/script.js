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
//////////////////////////////////////////////
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

//////////////////////////////////////////////
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

//////////////////////////////////////////////
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

//////////////////////////////////////////////
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

//////////////////////////////////////////////
// Lecture: statements and expressions

// expressions
// 3 + 4
// var x = 3
//
// // statements
// if (x === 5 ) {
//   // do something
// }

// Lecture: Arrays

// var names = ['John', 'Jane', 'Mark']
// var years = new Array(1990, 1969, 1948)
//
// console.log(names)
// console.log(names[0])
// console.log(years)
// console.log(years[2])
//
// names[1] = 'Ben'
// console.log(names)
//
// var john = ['John', 'Smith', 1990, 'teacher', false]
// console.log(john)
//
// john.push('blue') // adds element to the end of the array
// john.unshift('mister') // adds element to the start of the array
// john.pop() // removes last element of the array
// john.shift() // removes the first element of the array
// console.log(john)
//
// alert(john.indexOf('Smith')) // returns element id of array
//
// if (john.indexOf('cop') === -1) {
//   console.log('John is not a cop')
// }

//////////////////////////////////////////////
// Lecture: Objects and properties

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false
// }
//
// console.log(john.name)
// console.log(john['lastName'])
//
// var xyz = 'job'
// console.log(john[xyz])
//
// john.lastName = 'Miller'
// john['job'] = 'programmer'
//
// console.log(john)
//
// var jane = new Object()
// jane.name = 'Jane'
// jane.lastName = 'Smith'
// jane['yearOfBirth'] = 1969
// jane['job'] = 'retired'
// jane['isMarried'] = true
//
// console.log(jane)

//////////////////////////////////////////////
// lecture: objects and methods

// v1.0
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     return 2016 - this.yearOfBirth
//   }
// }

// console.log(john)
// console.log(john.family)
// console.log(john.family[2])
// console.log(john.calculateAge())

// var age = john.calculateAge()
// john.age = age

// console.log(john)

//v2.0
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     this.age = 2016 - this.yearOfBirth
//   }
// }
//
// john.calculateAge()
// console.log(john)
//
// var mike = {
//   name: 'Mike',
//   lastName: 'Smith',
//   yearOfBirth: 1967,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     this.age = 2016 - this.yearOfBirth
//   }
// }
//
// mike.calculateAge()
// console.log(mike)

//////////////////////////////////////////////
// lecture: loops

// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }
//
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']
//
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i])
// }
//
// console.log('names.length:', names.length)
//
// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i])
// }

// var i = 0
// while(i < names.length) {
//   console.log(names[i])
//   i++
// }
//
// for (var i = 1; i <= 5; i++) {
//   console.log(i)
//
//   if (i === 3) {
//     break
//   }
// }
//
// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue
//   }
//
//   console.log(i)
// }


/////////////////////////////////
// coding challenge #2

function printFullAge(years) {
  var ages = []
  var fullAges = []

  for (var i = 0; i < years.length; i++ ) {
    ages[i] = 2017 - years[i]
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person', (i + 1), 'is', ages[i], 'years old, and is of full age.')
      fullAges.push(true)
    } else {
      console.log('Person', (i + 1), 'is', ages[i], 'years old, and is NOT of full age.')
      fullAges.push(false)
    }
  }
  return fullAges
}

var years = [1978, 2003, 1990, 1995, 2009, 1984]

var full_1 = printFullAge(years)
var full_2 = printFullAge([2012, 1915, 1999])

console.log(full_1)
console.log(full_2)
