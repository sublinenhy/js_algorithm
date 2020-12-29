const utils = require("./utils")
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
