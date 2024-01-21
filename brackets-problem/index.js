// - [ ]  Given an input number = 1,2,3 we have to generate this output

// 		number = 1, output = [ '()' ]
// 		number = 2, output = [ '(())', '()()' ]
// 		number = 3, output = [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

function generateParenthesis(n) {
    const res = [];
    if (n < 1) {
      return res;
    }
  
    function generate(str, open, close) {

      if (open === n && close === n) {
        res.push(str);
        return;
      }
  
      if (open < n) {
        generate(str + '(', open + 1, close);
      }
  
      if (close < open) {
        generate(str + ')', open, close + 1);
      }
    }
  
    generate('', 0, 0);
    return res;
  }

  
  const number = 2;
  const results = generateParenthesis(number);

console.log(results);