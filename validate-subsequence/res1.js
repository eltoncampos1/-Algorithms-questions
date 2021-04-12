// O(n) time | O(1) space n = length of the array
function isValidSubsequence(arr, sequence) {
  let idxArr = 0;
  let idxSeq = 0;

  while (idxArr < arr.length && idxSeq < sequence.length) {
    if (arr[idxArr] === sequence[idxSeq]) idxSeq++;
    idxArr++;
  }

  return idxSeq === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
