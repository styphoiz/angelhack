let input =
  "kjslaqpwoerewefifjdksjdfhjdksdjfkdfdldkjdjfjfjfjfjfnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjknbmsdsdsfdvneurghiueor";

let array = input.split("");
let count = 0;

console.log(array);

for (let i = 0; i < array.length; i++) {
  let currentIndex = array[i];
  let nextOccur = findNextBlockIndex(array, array[i], i);
  let prevOccur = findPrevBlockIndex(array, array[i], i);
  let indexMinus1 = array[i - 1];
  let indexMinus1Next = findNextBlockIndex(array, array[i - 1], i - 1);
  let indexPlus1 = array[i + 1];
  let indexPlus1Prev = findPrevBlockIndex(array, array[i + 1], i + 1);
  console.log(
    array[i],
    array[nextOccur],
    array[prevOccur],
    currentIndex,
    nextOccur,
    prevOccur
  );
  console.log(array[i - 1], array[indexMinus1Next], i - 1, indexMinus1Next);
  console.log(array[i + 1], array[indexPlus1Prev], i + 1, indexPlus1Prev);
}

function findNextBlockIndex(array, block, startIndex) {
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] === block) {
      return i;
    }
  }

  return -1;
}

function findPrevBlockIndex(array, block, startIndex) {
  for (let i = startIndex - 1; i >= 0; i--) {
    if (array[i] === block) {
      return i;
    }
  }

  return -1;
}
