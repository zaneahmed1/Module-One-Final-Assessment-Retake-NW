/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
   let numberOfThrees = 0
   let str = n.toString()
   for(let i = 0; i < str.length; i++){
       if(str[i] === "3"){
       numberOfThrees += 1   
       }
   }
   return numberOfThrees

}

module.exports = countThrees
