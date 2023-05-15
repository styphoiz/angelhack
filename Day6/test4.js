let series =
  "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbmssdsdsfdvneurghiueor";
//removed 5 with a single occurence
series =
  "kjslwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbssdsdsfdneurghiueor";
let inputString = splitSeries(series).join("");
console.log(inputString);
console.log(inputString[2], inputString[17]);
let count = 5;

let object = [];
for (let i = 0; i < inputString.length; i++) {
  //   console.log(inputString[i], i + 1);
  object.push({ [i]: inputString.indexOf(inputString[i], i + 1) });
}
console.log(object);
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
for (let key in object) {
  let last = Object.keys(object[object.length - 1]);
  console.log("Last", last[0]);
  if (key !== last[0]) {
    console.log(key, object[Number(key) + 1], object[key][key]);
    console.log(
      object[key][key],
      Number(key),
      object[Number(key) + 1][Number(key) + 1],
      Number(key) + 1
    );
    if (
      object[key][key] - Number(key) <
      object[Number(key) + 1][Number(key) + 1] - Number(key) + 1
    ) {
      count++;
      console.log("Removed ", object[key], key);
      let strArray = inputString.split("");
      console.log("strArr", strArray[Number(key)]);
      strArray[Number(key)] = " ";
      console.log("strArr", strArray[Number(key)]);
      inputString = strArray.join("");
      console.log("inputString", inputString);
    }
    console.log(Number(key));
  }
}
console.log(inputString, count);
inputString = inputString.split(" ").join("");
console.log(inputString);

let modifiedStr = "";
let str = inputString;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    modifiedStr += str[i];
  }
}
inputString = modifiedStr;

for (let i = 0; i < inputString.length; i++) {
  //   console.log(inputString[i], i + 1);
  object.push({ [i]: inputString.indexOf(inputString[i], i + 1) });
}

for (let key in object) {
  let last = Object.keys(object[object.length - 1]);
  console.log("Last", last[0]);
  if (key !== last[0] && key != "151") {
    console.log(key, object[Number(key) + 1], object[key][key]);
    console.log(
      object[key][key],
      Number(key),
      object[Number(key) + 1][Number(key) + 1],
      Number(key) + 1
    );
    if (
      object[key][key] - Number(key) <
      object[Number(key) + 1][Number(key) + 1] - Number(key) + 1
    ) {
      count++;
      console.log("Removed ", object[key], key);
      let strArray = inputString.split("");
      console.log("strArr", strArray[Number(key)]);
      strArray[Number(key)] = " ";
      console.log("strArr", strArray[Number(key)]);
      inputString = strArray.join("");
      console.log("inputString", inputString);
    }
    console.log(Number(key));
  }
}
console.log(inputString, count);
inputString = inputString.split(" ").join("");
console.log(inputString);

modifiedStr = "";
str = inputString;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    modifiedStr += str[i];
  }
}
inputString = modifiedStr;
