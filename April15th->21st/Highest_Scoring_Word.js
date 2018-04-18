// https://www.codewars.com/kata/highest-scoring-word

// Instructions:
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// My Solution: 
let alphaBet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphaReference = {}

alphaBet.map((item, index) =>  alphaReference[item] = index+1)

function high(x) {
  let newString = x
  let totalWordStore = {}
  let totalWord = 0
  let wordToBeAdded = []

  newString = newString.split('')

  for(let i = 0; i <= newString.length; i++) {
    if(newString[i] === ' ' || newString[i] === undefined) {
      // 2. join the words
      let word = wordToBeAdded.join('')
      // 3. put the joined word as key and totalWord value in totalWordStore {}
      totalWordStore[word] = totalWord
      // 4. reset everything 
      totalWord = 0
      wordToBeAdded = []
    }

    if(newString[i] !== ' ') {
      // 1. add up all the words in separated by space
      wordToBeAdded.push(newString[i])
      totalWord = totalWord + alphaReference[newString[i]] 
    }
  }
  return findHighestProp(totalWordStore)
}

function findHighestProp(obj) {
  let highestWordTotal = ''
  let highestWord = ''
  
  for(let value in obj) {
    if(obj[value] > highestWordTotal) {
      highestWordTotal = obj[value]
      highestWord = value
    }
  }
  return highestWord
}

high('man i need a taxi up to ubud') // => 'taxi'
// high('what time are we climbing up the volcano') // => 'volcano'
