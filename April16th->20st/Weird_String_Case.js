// https://www.codewars.com/kata/weird-string-case/javascript
//
// Instructions: 

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// My Solution: 
function toWeirdCase(string) {
  let newString = string
  newString = newString.split('')
  let newArr = []
  let stringCount = 0

  for(let i = 0; i < newString.length; i++) {

    if(stringCount % 2 === 0 && newString[i] !== ' ') {
        stringCount++
        newArr.push(newString[i].toUpperCase())
    } else if(newString[i] === ' ') {
        stringCount = 0
        newArr.push(newString[i])
    } else {
        stringCount++
        newArr.push(newString[i])
    }
  }

  return newArr.join('')
}