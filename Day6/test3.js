const fs = require("fs");
function removeTiles(string) {
  let minMoves = Infinity;
  let result = "";
  let steps = [];

  const memo = {};
  let count = 0;

  const stack = [];
  stack.push({
    str: string,
    moves: 0,
    currentSteps: [],
  });

  while (stack.length > 0) {
    const { str, moves, currentSteps } = stack.pop();

    if (str.length === 0) {
      count++;
      console.log("Moves on this try", moves, count, minMoves);
      //   console.log("Moves on this try", moves);
      //   console.log("Steps on this try:");
      //   currentSteps.forEach((step, index) => {
      //     console.log(`Step ${index + 1}: ${step.step}`);
      //     console.log(`  Remaining string: ${step.string}`);
      //   });

      if (moves < minMoves) {
        let fileData = `Moves: ${minMoves}\nResult: ${result}\nSteps:\n`;
        steps.forEach((step, index) => {
          fileData += `Step ${index + 1}: ${step.step}\n`;
          fileData += `  Remaining string: ${step.string}\n`;
        });

        try {
          fs.writeFileSync("result3.txt", fileData);
          console.log("Result written to file: result.txt");
        } catch (err) {
          console.error("Error writing file:", err);
        }
        minMoves = moves;
        result = "";
        steps = currentSteps;
      }

      continue;
    }

    if (memo[str] && moves >= memo[str].moves) {
      count++;
      console.log("Skipping this try", moves, count, minMoves);
      continue; // Skip if a previous result with fewer moves exists
    }

    stack.push({
      str: str.slice(1),
      moves: moves + 1,
      currentSteps: [
        ...currentSteps,
        { step: `Remove ${str[0]}`, string: str.slice(1) },
      ],
    });

    for (let i = 0; i < str.length; i++) {
      let j = i + 1;
      while (j < str.length && str[j] === str[i]) {
        j++;
      }

      if (j - i > 1) {
        const newString = str.slice(0, i) + str.slice(j);
        stack.push({
          str: newString,
          moves: moves + 1,
          currentSteps: [
            ...currentSteps,
            {
              step: `Join and remove ${str[i]} and ${str[i + 1]}`,
              string: newString,
            },
          ],
        });
      }

      const newString = str.slice(0, i) + str.slice(i + 1);
      stack.push({
        str: newString,
        moves: moves + 1,
        currentSteps: [
          ...currentSteps,
          { step: `Remove ${str[i]}`, string: newString },
        ],
      });
    }

    memo[str] = { moves }; // Store the result in the memoization object
  }

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
