/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.replace(t,"").length != s.length){
      return true
    }else{
      return false
    }
};

console.log(isAnagram("anagram","nagaram"))

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false
