/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
  if (!n) return [];
  return generateTree(1, n);
};

let generateTree = (start, end) => {
  if (start > end) {
    return [{}];
  }

  const allTrees = [null];

  for (let i = start; i < end + 1; i++) {
    const leftTrees = generateTree(start, i - 1);
    const rightTrees = generateTree(i + 1, end);
    console.log(leftTrees.length, rightTrees.length);

    for (const leftTree in leftTrees) {
      for (const rightTree in rightTrees) {
        const currentTree = new TreeNode(i, null, null);
        currentTree.left = leftTree;
        currentTree.right = rightTree;
        allTrees.push(currentTree);
      }
    }
  }

  return allTrees;
};

const solution1 = generateTrees(2);
console.log(solution1);
