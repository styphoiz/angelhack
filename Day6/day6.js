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

const series = "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbmssdsdsfdvneurghiueor";

const splitSeriesArray = splitSeries(series);

console.log("Split series:", splitSeriesArray);

let keys = {}

for (let i=0;i<splitSeriesArray.length; i++){

    if (keys[splitSeriesArray[i]]){

        keys[splitSeriesArray[i]]++

    }

    else

        keys[splitSeriesArray[i]] = 1

    }

}
