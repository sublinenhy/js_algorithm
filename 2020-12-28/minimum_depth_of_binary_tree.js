/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

let minDepth = function(root) {
  if (root === null) return 0
  let q = [];
  let depth = 0;

  q.push(root);
  depth++;

  while (q.length !== 0) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let cur = q.shift();
      if (cur.left === null && cur.right === null) return depth;

      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }

    depth++;

  }

  return depth;
};


document.getElementsByClassName("content")[0]
  .innerHTML = permute([1,2,5])
  .toString();
