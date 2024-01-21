// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root || !root.left || !root.right){
    return root;
  }
  const tempLeft = root.left;
  root.left = root.right
  root.right = tempLeft
  invertTree(root.left)
  invertTree(root.right)
  return root;
};
const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
console.log(invertTree(root));

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
// Output: [4,7,2,9,6,3,1]

// Example 2:

// Input: root = [2,1,3]
// new TreeNode(2, new TreeNode(1), new TreeNode(3));
// Output: [2,3,1]
//
// Example 3:

// Input: root = []
// Output: []
