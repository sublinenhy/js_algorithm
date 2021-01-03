const utils = require("./utils");
const openLock = require("../2020-12-29/open_the_lock")
const hasCycle = require("../2021-1-3/linked_list_cycle")
const {test} = require("@jest/globals");

test("测试位置j的滚轮向上拨动一次，实现+1效果", () => {
    expect(utils.plusOne("4399", 3)).toBe("4390");
    expect(utils.plusOne("4399", 2)).toBe("4309");
    expect(utils.plusOne("4399", 0)).toBe("5399");
})

test("测试位置j的滚轮向下拨动一次，实现-1效果", () => {
    expect(utils.minusOne("4390", 3)).toBe("4399");
    expect(utils.minusOne("4399", 0)).toBe("3399");
})


test("752.打开转盘锁", () => {
    expect(openLock(["0201","0101","0102","1212","2002"], "0202")).toBe(6);
    expect(openLock(["8888"], "0009")).toBe(1);
    expect(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888")).toBe(-1);
})

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(3);
l1.next = new ListNode(2);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(-4);
l1.next.next.next.next = l1.next;

test("141.环形链表", () => {
    expect(hasCycle(l1)).toBe(true);
})

