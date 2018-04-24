// LINK: https://www.codewars.com/kata/follow-that-spy/train/javascript
//
// We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go in correct order based on his itineraries.

// Example:
// routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]

// result: "USA, BRA, UAE, JPN, PHL"

// note: It is safe to assume that there will be no repeating place with different route and there are no empty routes and could have at least one (1) route (from one waypoint to another).

// it should return the places from the given routes

function findRoutes(routes) {
  let newArr = [...routes]
  let routesTally = [] 

  for(let i = 0; i < newArr.length; i++) {

    
    for(let j = 0; j < newArr[i].length; j++) {
      let innerVal = newArr[i][j]
      console.log('InnerVAl: ', innerVal)

      // I need to check to see if the first index in the 2 D arrays are the first in every other adjcent Array and if they are, then they go in place, 
      // IF NOT: they will then get placed after 
      
      let sortedRoute = routesTally.find(route => route === innerVal);
      (!sortedRoute) && routesTally.push(innerVal); 
    }
  }

  // console.log(routesTally.join(', '))
  return routesTally.join(', ')
}


// A friends code handling it differently
function findRoutes(routes) {
  let singles = [] // both strings that are not duplicated
  let answer = "" // the final string to be assembled
  let previous = "" // on iteration, this is the last string we just added to the answer string.

  routes.map(array => array.map(string => singles.push(string))) // flatten array
  singles = singles.filter(string => singles.filter(str => str===string).length < 2 ? string : null) // filter out strings that are not repeated

  answer += singles[0] + ', ' // start the answer string with the first of the two singular strings, with a comma and a space
  previous += singles[0] // the first 'previous' value becomes what we just added to the answer string

  while (previous != singles[1]) { // while 'previous' is not the second single value (which should be the last), do the following
    let target = routes.find(array => array[0]===previous)[1] // this is the string we are targeting to add to the answer
    answer +=  target + ', ' // here we add the target string to the answer, followed by a comma and a space
    previous = target // here we change 'previous' to match what we just added to the answer
  }

  return console.log(answer.slice(0,-2)) // strip the last comma and space from final answer
}

let routes = [['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']]

findRoutes(routes)
