/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let bracket_map = {')': '(', ']': '[', '}': '{'}
    for (let index = 0; index < s.length; index++) {
        if(Object.values(bracket_map).includes(s[index])){
            stack.push(s[index])
        } else if(stack.length == 0 || bracket_map[s[index]] != stack.pop()){
            return false;
        }
        
    }
    return true;
};
console.log(isValid("({[]})(()[]{})"))


// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false
