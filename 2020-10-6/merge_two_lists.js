
 function ListNode(val) {
   this.val = val;
   this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
  let res = new ListNode(0);
  let temp1 = l1;
  let temp2 = l2;
  let temp3 = res;
  while (temp1 !== null ) {
    if (temp2 === null || temp1.val < temp2.val) {
      temp3.next = new ListNode(temp1.val);
      temp1 = temp1.next;
    }else {
      temp3.next = new ListNode(temp2.val);
      temp2 = temp2.next;
    }
    temp3 = temp3.next;
  }
  temp3.next = temp2;

  return res.next;

};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(6);

 console.log(mergeTwoLists(l1,l2))
document.getElementsByClassName("content")[0]
  .innerHTML = mergeTwoLists(l1, l2)
  .toString();