// https://www.codewars.com/kata/sort-the-odd/train/javascript
//
// Instructions:
 
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// My Solution: 
function sortArray(array) {
  let arr = array
      
  for(let i = 0; i < arr.length; i++) {
    //LENGTH === 0
    if (arr.length === 0)
      return arr

    for(let j = 0; j < arr.length; j++) {
      let temp = arr[i]

      // if [i] is odd
      if(arr[i] % 2 !== 0) {

        // if [j] is even, continue;
        if(arr[j] % 2 === 0)
          continue;

        // if [i] is odd and [j] is odd
        if(arr[j] % 2 !== 0 && arr[j] > arr[i]) {
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))