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

// Example usage:

let series =
  "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbmssdsdsfdvneurghiueor";

const splitSeriesArray = splitSeries(series);

console.log("Split series:", splitSeriesArray.join(""));

let keys = {};

for (let i = 0; i < splitSeriesArray.length; i++) {
  if (keys[splitSeriesArray[i]]) {
    keys[splitSeriesArray[i]]++;
  } else {
    keys[splitSeriesArray[i]] = 1;
  }
}

let count = 0;
console.log(keys);
//remove all single occurences
for (let a in keys) {
  if (keys[a] == 1) {
    console.log(a);
    series = series
      .split("")
      .filter(function (char) {
        return char !== a;
      })
      .join("");
    count++;
  }
  console.log(keys[a]);
}
//start looking at 2 instances
//remove l
series = series
  .split("")
  .filter(function (char) {
    return char !== "l";
  })
  .join("");
count += 2;
//remove o
series = series
  .split("")
  .filter(function (char) {
    return char !== "o";
  })
  .join("");
count += 2;
//remove b
series = series
  .split("")
  .filter(function (char) {
    return char !== "b";
  })
  .join("");
//remove w
series = series
  .split("")
  .filter(function (char) {
    return char !== "w";
  })
  .join("");
count += 2;
//remove first r
series = series.replace(/r/, "");
count++;
//remove first n
series = series.replace(/n/, "");
count++;
//replace remaining n values
console.log(series);
series = series.replace("nsfdn", "");
count += 4;

console.log(series, count);
let newSplitSeriesArray = splitSeries(series);
console.log(newSplitSeriesArray.join(""));

for (let i = 0; i < newSplitSeriesArray.length - 2; i++) {
  if (newSplitSeriesArray[i] === newSplitSeriesArray[i + 2]) {
    newSplitSeriesArray.splice(i + 1, 2);
    count++;
  }
}
console.log(newSplitSeriesArray.join(""), count);
for (let i = 0; i < newSplitSeriesArray.length - 2; i++) {
  if (newSplitSeriesArray[i] === newSplitSeriesArray[i + 2]) {
    newSplitSeriesArray.splice(i + 1, 2);
    count++;
  }
}

let newKeys = {};
console.log(newSplitSeriesArray.join(""), count);

for (let i = 0; i < newSplitSeriesArray.length; i++) {
  if (newKeys[newSplitSeriesArray[i]]) {
    newKeys[newSplitSeriesArray[i]]++;
  } else {
    newKeys[newSplitSeriesArray[i]] = 1;
  }
}
console.log(newKeys);
let newSeries = series;
