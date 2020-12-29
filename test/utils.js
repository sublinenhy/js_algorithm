let plusOne = function (s, j) {
    let sArr = s.split("");
    if (sArr[j] === "9") {
        sArr[j] = "0";
    } else {
        sArr[j] = parseInt(sArr[j]) + 1;
        sArr[j] = sArr[j] + "";
    }
    return sArr.join("")
}

let minusOne = function (s, j) {
    let sArr = s.split("");
    if (sArr[j] === "0") {
        sArr[j] = "9";
    } else {
        sArr[j] = parseInt(sArr[j]) - 1;
        sArr[j] = sArr[j] + "";
    }
    return sArr.join("")
}

module.exports = {
    plusOne,
    minusOne
}
