let array = [[".",".",".",".","X"],
["X",".",".","X","."],
["X",".",".","X","X"],
[".",".","X",".","."],
["X",".",".",".","."]]

let newArr = []
for (let i = 0; i < array.length; i++) {

  for (let j = 0; j < array[i].length; j++) {
    let dot = 0
    let x = 0
    let adj = 0
    const currentSquare = array[i][j];

    console.log(`Current Square: ${currentSquare}`);

    

    // Check adjacent squares (top, bottom, left, right)

    if (i > 0) {

      const topSquare = array[i - 1][j];

      console.log(`Top Square: ${topSquare}`);
      if(topSquare == "."){
          dot++
      }else if (topSquare == "X"){
          x++
      }
    adj++
    }

    if (i < array.length - 1) {

      const bottomSquare = array[i + 1][j];

      console.log(`Bottom Square: ${bottomSquare}`);
if(bottomSquare == "."){
          dot++
      }else if (bottomSquare == "X"){
          x++
      }
      adj++
    }

    if (j > 0) {

      const leftSquare = array[i][j - 1];

      console.log(`Left Square: ${leftSquare}`);
if(leftSquare == "."){
          dot++
      }else if (leftSquare == "X"){
          x++
      }
      adj++
    }

    if (j < array[i].length - 1) {

      const rightSquare = array[i][j + 1];

      console.log(`Right Square: ${rightSquare}`);
if(rightSquare == "."){
          dot++
      }else if (rightSquare == "X"){
          x++
      }
      adj++

    }

      console.log(dot)
      console.log(x)    
if(array[i] == "X"){
    if(adj == dot){
        newArr.push()
    }
}else if(array[i]= "."){
    
}
    console.log('----------------------');

  }

}
