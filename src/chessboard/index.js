// My solution

let cols = 0

while (cols < 8) {
  let string = ''
  let rows = 0

  while(rows < 8) {
    if(rows % 2 == 0) {
      if(cols % 2 === 0) {
        string += '#'
      } else {
        string += ' '
      }
    }
    if(rows % 2 == 1) {
      if(cols % 2 === 0) {
        string += ' '
      } else {
        string += '#'
      }
    }
    rows++
  }

  console.log(string)
  cols++
} 
// Their solution

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
