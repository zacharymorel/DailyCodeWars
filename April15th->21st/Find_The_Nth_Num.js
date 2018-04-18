
// Instructions
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// Examples
// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

// My Solution: 
let findDigit = function(num, nth) {
  let newNum = num 

  if (Math.sign(nth) === -1 || Math.sign(nth) === 0) 
    return -1
  
  
  if (Math.sign(newNum) === -1) {
    newNum *= -1
    return digitLoop(newNum, nth)
  }

  return digitLoop(num, nth)
}

function digitLoop(num, nth) {
  let arr = num.toString().split('')
  let digit
  let tracker = 0
    
  for(let i = arr.length - 1; i >= 0; i--) {
    tracker++
    (tracker === nth) && (digit = arr[i])
  }

  (!digit) && (digit = 0)
  return Number(digit)
}