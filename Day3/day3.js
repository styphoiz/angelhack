function getNumberPermutations(str) {
  const permutations = [];

  function generatePermutations(remaining, current = "") {
    if (remaining.length === 0) {
      permutations.push(Number(current));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      generatePermutations(newRemaining, current + char);
    }
  }

  generatePermutations(str);

  return permutations;
}

const numberString = "1867";
const permutations = getNumberPermutations(numberString);
console.log(permutations);

let divisible = [];
for (let i = 0; i < permutations.length; i++) {
  if (permutations[i] % 7 == 0) {
    divisible.push(permutations[i]);
  }
}
divisible.sort((a, b) => a - b);
console.log(divisible);
console.log(divisible[divisible.length - 1], divisible[0]);
console.log(divisible[divisible.length - 1] + divisible[0]);
console.log((divisible[divisible.length - 1] + divisible[0]) / 2);
