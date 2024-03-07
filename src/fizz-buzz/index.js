// My solution
let counter = 0

while (counter < 100) {
  let string = ''

  if(counter % 3 === 0) string += 'Fizz'
  if(counter % 5 === 0) string += 'Buzz' 

  console.log(string)
  counter++
} 

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }