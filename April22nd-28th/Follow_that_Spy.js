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


let routes = [['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']]

findRoutes(routes)
