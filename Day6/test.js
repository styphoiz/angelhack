function removeTiles(string) {
  let minMoves = Infinity;
  let result = "";
  let steps = [];

  const memo = {};

  const removeAdjacentTiles = (str, moves, currentSteps) => {
    if (str.length === 0) {
      console.log("Moves on this try", moves);
      console.log("Steps on this try:");
      currentSteps.forEach((step, index) => {
        console.log(`Step ${index + 1}: ${step.step}`);
        console.log(`  Remaining string: ${step.string}`);
      });
      if (moves < minMoves) {
        minMoves = moves;
        result = "";
        steps = currentSteps;
      }
      return;
    }
    if (memo[str] && moves >= memo[str].moves) {
      return; // Skip if a previous result with fewer moves exists
    }

    // Case 1: Remove the first character and recursively process the rest of the string
    removeAdjacentTiles(str.slice(1), moves + 1, [
      ...currentSteps,
      { step: `Remove ${str[0]}`, string: str.slice(1) },
    ]);

    for (let i = 0; i < str.length; i++) {
      let j = i + 1;
      while (j < str.length && str[j] === str[i]) {
        j++;
      }

      if (j - i > 1) {
        // Case 2: Join the adjacent characters and recursively process the rest of the string
        const newString = str.slice(0, i) + str.slice(j);
        removeAdjacentTiles(newString, moves + 1, [
          ...currentSteps,
          {
            step: `Join and remove ${str[i]} and ${str[i + 1]}`,
            string: newString,
          },
        ]);
      }

      // Case 3: Remove the current character and recursively process the rest of the string
      const newString = str.slice(0, i) + str.slice(i + 1);
      removeAdjacentTiles(newString, moves + 1, [
        ...currentSteps,
        { step: `Remove ${str[i]}`, string: newString },
      ]);
    }

    memo[str] = { moves }; // Store the result in memoization object
  };

  removeAdjacentTiles(string, 0, []);

  return { moves: minMoves, result, steps };
}

function splitSeries(series) {
  const splits = [];

  let currentSplit = series[0];

  for (let i = 1; i < series.length; i++) {
    if (series[i] !== series[i - 1]) {
      splits.push(currentSplit[0]);

      currentSplit = "";
    }

    currentSplit += series[i];
  }

  splits.push(currentSplit[0]);

  return splits;
}

let series =
  "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbmssdsdsfdvneurghiueor";
const inputString = splitSeries(series).join("");
console.log(inputString);
const { moves, result, steps } = removeTiles(inputString);
console.log(`Moves: ${moves}`);
console.log(`Result: ${result}`);
console.log("Steps:");
steps.forEach((step, index) => {
  console.log(`Step ${index + 1}: ${step.step}`);
  console.log(`  Remaining string: ${step.string}`);
});
