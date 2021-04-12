// O(n) time | O(n) space
function twoNumberSum(arr, targetSum) {
  const nums = {};
  for (const num of arr) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(twoNumberSum(arr, 17));
