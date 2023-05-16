 array = [

  [".", ".", ".", ".", "X"],

  ["X", ".", ".", "X", "."],

  ["X", ".", ".", "X", "X"],

  [".", ".", "X", ".", "."],

  ["X", ".", ".", ".", "."]

];
let count = 0
let hugeArray = []
while (count == 0 ){
    

let newArr = [];

for (let i = 0; i < array.length; i++) {

  let newRow = [];

  for (let j = 0; j < array[i].length; j++) {

    let dot = 0;

    let x = 0;

    let adj = 0;

    const currentSquare = array[i][j];

    // Check adjacent squares (top, bottom, left, right)

    if (i > 0) {

      const topSquare = array[i - 1][j];

      if (topSquare == ".") {

        dot++;

      } else if (topSquare == "X") {

        x++;

      }

      adj++;

    }

    if (i < array.length - 1) {

      const bottomSquare = array[i + 1][j];

      if (bottomSquare == ".") {

        dot++;

      } else if (bottomSquare == "X") {

        x++;

      }

      adj++;

    }

    if (j > 0) {

      const leftSquare = array[i][j - 1];

      if (leftSquare == ".") {

        dot++;

      } else if (leftSquare == "X") {

        x++;

      }

      adj++;

    }

    if (j < array[i].length - 1) {

      const rightSquare = array[i][j + 1];

      if (rightSquare == ".") {

        dot++;

      } else if (rightSquare == "X") {

        x++;

      }

      adj++;

    }

    if (currentSquare == "X") {

      if (x == 1) {

        newRow.push("X");
        console.log("X", x, dot , adj)

      } else {

        newRow.push(".");
console.log(".", dot)
      }

    } else if (currentSquare == ".") {

      if (x === 1 || x === 2) {

        newRow.push("X");


      } else {

        newRow.push(".");

      }

    }

  }

  newArr.push(newRow);

}
let newCount = hugeArray.includes(newArr)
hugeArray.push(newArr)
if(newCount){
    console.log(hugeArray.indexOf(newArr))
    count = 1
}
}
console.log("New Array:");

console.log(newArr);
