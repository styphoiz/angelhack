const array = [

  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9]

];

for (let i = 0; i < array.length; i++) {

  for (let j = 0; j < array[i].length; j++) {

    const currentSquare = array[i][j];

    console.log(`Current Square: ${currentSquare}`);

    

    // Check adjacent squares (top, bottom, left, right)

    if (i > 0) {

      const topSquare = array[i - 1][j];

      console.log(`Top Square: ${topSquare}`);

    }

    if (i < array.length - 1) {

      const bottomSquare = array[i + 1][j];

      console.log(`Bottom Square: ${bottomSquare}`);

    }

    if (j > 0) {

      const leftSquare = array[i][j - 1];

      console.log(`Left Square: ${leftSquare}`);

    }

    if (j < array[i].length - 1) {

      const rightSquare = array[i][j + 1];

      console.log(`Right Square: ${rightSquare}`);

    }

    

    console.log('----------------------');

  }

}

