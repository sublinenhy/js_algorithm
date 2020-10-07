function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let p = 0, q = 0;
  let temp1 = l1;
  let temp2 = l2;
  let res = new ListNode(0);
  let temp3 = res;

  while (temp1 !== null || temp2 !== null) {
    if (temp1 === null) {
      q = 0 + temp2.val + p;
    }else if (temp2 === null) {
      q = temp1.val + 0 + p;
    }else {
      q = temp1.val + temp2.val + p;
    }

    if (q >= 10) {
      p = Math.floor(q/10);
      q = q % 10;
      temp3.next = new ListNode(q);
    }else {
      p = Math.floor(q/10);
      temp3.next = new ListNode(q);
    }
    if (temp1 !== null) temp1 = temp1.next;
    if (temp2 !== null) temp2 = temp2.next;
    temp3 = temp3.next;
  }
  if (p !== 0) temp3.next = new ListNode(p);
  return res.next;

};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2))

document.getElementsByClassName("content")[0]
  .innerHTML = addTwoNumbers(l1,l2)
  .toString();