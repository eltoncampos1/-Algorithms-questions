// O(log(n)) time | O(1) space
function twoNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === targetSum) {
      return [arr[left], arr[right]];
    } else if (currSum < targetSum) {
      left++;
    } else if (currSum > targetSum) {
      right--;
    }
  }

  return [];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(twoNumberSum(arr, 17));
