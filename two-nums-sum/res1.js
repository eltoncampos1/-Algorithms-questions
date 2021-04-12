// O(n^2) time | O(1) space
function twoNumberSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    const firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secondNum = arr[j];

      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(twoNumberSum(arr, 17));
