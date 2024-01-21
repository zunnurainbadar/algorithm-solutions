/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = new Array(nums.length).fill(1);
    // Calculate left product
    let leftProduct = 1;
    for(let i=0;i<nums.length;i++){
        output[i] *= leftProduct;
        leftProduct *= nums[i]
    }

    // Calculate right product
    let rightProduct = 1;
    for(let i=nums.length - 1;i>=0;i--){
        output[i] *= rightProduct;
        rightProduct *= nums[i]
    }
    return output
};

console.log(productExceptSelf([1,2,3,4]))
