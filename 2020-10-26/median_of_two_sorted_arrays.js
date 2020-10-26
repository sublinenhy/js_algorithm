/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let length = nums1.length + nums2.length;
  let h = Math.floor(length / 2);
  if (length % 2 === 1) {
    return getKthElement(nums1, nums2, h + 1);
  } else {
    return (getKthElement(nums1, nums2, h) + getKthElement(nums1, nums2, h + 1)) / 2;
  }

  function getKthElement(n1, n2, k) {
    let length1 = n1.length, length2 = n2.length;
    let index1 = 0, index2 = 0;
    let kthElement = 0;
    while (true) {
      // 边界情况
      if (index1 === length1) {
        return nums2[index2 + k - 1];
      }
      if (index2 === length2) {
        return nums1[index1 + k - 1];
      }
      if (k === 1) {
        return Math.min(nums1[index1], nums2[index2]);
      }

      let half = Math.floor(k / 2);
      let newIndex1 = Math.min(index1 + half, length1) - 1;
      let newIndex2 = Math.min(index2 + half, length2) - 1;
      if (n1[newIndex1] <= n2[newIndex2]) {
        k = k - (newIndex1 - index1 + 1);
        index1 = newIndex1 + 1;
      } else {
        k = k - (newIndex2 - index2 + 1);
        index2 = newIndex2 + 1;
      }


    }
  }
};


document.getElementsByClassName("content")[0]
  .innerHTML = findMedianSortedArrays([1,3], [2,7])
  .toString();