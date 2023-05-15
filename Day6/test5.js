function findNextBlockIndex(board, color, startIndex) {

  for (let i = startIndex + 1; i < board.length; i++) {

    if (board[i] === color) {

      return i;

    }

  }

  return -1;

}

function findPrevBlockIndex(board, color, startIndex) {

  for (let i = startIndex - 1; i >= 0; i--) {

    if (board[i] === color) {

      return i;

    }

  }

  return -1;

}

function shouldClearBlock(board, currentIndex) {

  const currentBlock = board[currentIndex];

  const prevBlock = board[currentIndex - 1]

  const nextBlock = board[currentIndex + 1]

  const nextPrevBlockIndex = findPrevBlockIndex(board, nextBlock, currentIndex);

  const prevNextBlockIndex = findNextBlockIndex(board, prevBlock, currentIndex);

  const prevBlockIndex = findPrevBlockIndex(board, currentBlock, currentIndex - 1);

  const nextBlockIndex = findNextBlockIndex(board, currentBlock, currentIndex + 1);

  if (prevBlockIndex === -1 && nextBlockIndex === -1) {

    return true;

  }

  const prevBlockDistance = currentIndex - prevBlockIndex;

  const nextBlockDistance = nextBlockIndex - currentIndex;

  

  const nextPrevBlockDistance = nextBlockIndex - nextPrevBlockIndex;

  const prevNextBlockDistance = prevNextBlockIndex - prevBlockIndex;

console.log(nextPrevBlockDistance)

  if (prevBlockDistance <= nextPrevBlockDistance && nextBlockDistance <= prevNextBlockDistance)

  {

      console.log("in here")

      return true;

  }

  return true;

}

function clearBlocks(board) {

  let moves = 0;

  let steps = [];

  const boardCopy = [...board];

  for (let i = 0; i < board.length; i++) {

    if (shouldClearBlock(board, i)) {

      const currentBlock = boardCopy[i];

      let startIndex = i;

      let endIndex = i;

      while (startIndex >= 0 && boardCopy[startIndex] === currentBlock) {

        boardCopy[startIndex] = '.';

        startIndex--;

      }

      while (endIndex < boardCopy.length && boardCopy[endIndex] === currentBlock) {

        boardCopy[endIndex] = '.';

        endIndex++;

      }

      moves++;

      steps.push({

        move: moves,

        blocks: `${endIndex - startIndex - 1}`,

        startIndex,

        endIndex,

        board: [...boardCopy]

      });

    }

  }

  return steps;

}

// Test example

const board = ['R', 'B', 'R', 'G', 'G', 'R', 'G', 'B', 'R'];

const steps = clearBlocks(board);

console.log(`Number of moves: ${steps.length}`);

console.log('Steps:');

steps.forEach((step) => {

  console.log(`Move ${step.move}: Clear ${step.blocks} block(s) at index ${step.startIndex + 1}-${step.endIndex - 1}`);

  console.log(`Resulting board: ${step.board.join('')}`);

  console.log('---');

});

