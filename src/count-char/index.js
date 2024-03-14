function countBs(string) {
  let counter = 0

  for(s of string.toLowerCase()) {
    if(s != 'b') continue
    counter = counter + 1
  }
  return counter
}

function countChar(string, char) {
  let counter = 0

  for(let i = 0; i <= string.toLowerCase().length; i++) {
    if(string[i] != char) continue
    counter = counter + 1
  }

  return counter
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));