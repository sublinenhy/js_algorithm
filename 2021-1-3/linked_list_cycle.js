/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  let slow = head, fast = head;
  if (head === null) return false;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast)  return true;
  }
  return false;
};

module.exports = hasCycle

