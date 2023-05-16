let input =
  "kjslaqpwoerewefifjdksjdfhjdksdjfkdfdldkjdjfjfjfjfjfnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjknbmsdsdsfdvneurghiueor";
let array = input.split("");
let count = 0;

console.log("Initial Array:", array.join(""));

while (array.length > 0) {
  let removedIndices = [];

  for (let i = 0; i < array.length; i++) {
    let currentIndex = array[i];
    let nextOccur = findNextBlockIndex(array, array[i], i);
    let prevOccur = findPrevBlockIndex(array, array[i], i);
    let indexMinus1 = array[i - 1];
    let indexMinus1Next = findNextBlockIndex(array, array[i - 1], i - 1);
    let indexPlus1 = array[i + 1];
    let indexPlus1Prev = findPrevBlockIndex(array, array[i + 1], i + 1);

    if (
      (nextOccur - i > i + 1 - indexPlus1Prev &&
        i - prevOccur > indexMinus1Next - i - 1) ||
      (nextOccur === -1 && prevOccur === -1)
    ) {
      array.splice(i, 1);
      removedIndices.push(i);
      count++;
      i--;
    } else if (indexMinus1 === indexPlus1) {
      array.splice(i, 1);
      removedIndices.push(i);
      count++;
      i--;
    }

    console.log(
      "Iteration",
      count,
      "- Removed:",
      removedIndices.map((index) => array[index]).join("")
    );
    console.log("Array:", array.join(""));
  }
}

console.log("Final Array:", array.join(""));
console.log("Total Moves:", count);

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
