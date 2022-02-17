/**
* Takes an array of words and counts how many times each word occurs in the array.
* 
* @param {string[]} arr - An array of lowercase words
* @returns {object} - an object where the key is the word, and the value is the count of that word
*
* ex: countWords(["good", "good", "great"]);
* returns: { "good": 2, "great": 1 }
* 
* ex: countWords(["dog", "cat", "goat"]);
* returns: { "dog": 1, "cat": 1, "goat": 1}
* 
* ex: countWords([]);
* returns: {}
*/

function countWords(arr) {
  let count = 0
  let countObj = {}
  let val = ""
  for(let i = 0; i < arr.length; i++){
      if(countObj[arr[i]]) {
        countObj[arr[i]] += 1
      } else {
        countObj[arr[i]] = 1 
      }
  }
  return countObj
}

module.exports = countWords
