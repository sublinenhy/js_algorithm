/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {
  let res = new ListNode();
  if (head === null) return null;
  if (head.next === null) return head;
  let p1 = head, p2 = head, pRes = res;
  while (p2.next !== null) {
    if (p1.val < x) {
      pRes.next = new ListNode(p1.val);
      pRes = pRes.next;
      p1 = p1.next;
      p2 = p2.next;
    } else if (p1.val >= x) {
      p2 = p2.next;
      if (p2.val < x) {
        pRes.next = new ListNode(p2.val);
        pRes = pRes.next;
        p2.val = null;
      }
    }
  }

  while (p1 !== null) {
    if (p1.val !== null) {
      pRes.next = new ListNode(p1.val);
      pRes = pRes.next
    }
    p1 = p1.next;
  }

  return res.next
};

module.exports = partition

