// O(n) time | O(1) space n = length of the array
function isValidSubsequence(arr, sequence) {
  let idxSeq = 0;

  for (const value of arr) {
    if (idxSeq === sequence.length) break;
    if (sequence[idxSeq] === value) idxSeq++;
  }

  return idxSeq === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
