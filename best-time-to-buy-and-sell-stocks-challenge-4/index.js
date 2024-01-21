/**
 * @param {number[]} prices
 * @return {number}
 */
var sellProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  
    return maxProfit;
};

console.log(sellProfit([7,6,8,4,3,1,9,1,2]))
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the sell profit = 0.

// Example 3:

// Input: prices = [7,6,8,4,3,1,9,1,2]
// Output: 8
// Explanation: Buy on day 2 (price = 6) and sell on day 3 (price = 8), profit = 8-6 = 2.
 