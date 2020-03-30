function binaryToSentence(str) {
// first we create plenty of arrays that we will use
  let binaryNumbers = [1, 2, 4, 8, 16, 32, 64, 128];
  let binaryArray = str.split(" ");
  let reversedArray = [];
  let decimalArray = [];
  
// then we split our input further into separate bits and reverse its order, which will make it easier for us to turn binary into decimal
  for (let i = 0; i < binaryArray.length; i++) {
    reversedArray.push(binaryArray[i].split(""));
  }
  for (let i = 0; i < reversedArray.length; i++) {
    reversedArray[i] = reversedArray[i].reverse();
  }
  
// next we calculate binary to decimal and push it to our (so far) empty decimal array
  for (let i = 0; i < reversedArray.length; i++) {
    let array = [];
    for (let j = 0; j < reversedArray[i].length; j++) {
      array.push(reversedArray[i][j] * binaryNumbers[j]);
    }
    decimalArray.push(array);
  }

// then we create a function and use it to sum up the effect of our previous calculation - sum will be used to invoke character code 
  function sumUp(acc, num) {
    return acc + num;
  }

  for (let i = 0; i < decimalArray.length; i++) {
      decimalArray[i] = decimalArray[i].reduce(sumUp);
  }
  
// next we turn decimal into characters, using character code
  for (let i = 0; i < decimalArray.length; i++) {
      decimalArray[i] = String.fromCharCode(decimalArray[i]);
  }

// finally, we connect our sentence together with Array.prototype.join(), assign it to new variable "sentence" and return it, voila!
  let sentence = decimalArray.join("");
  return sentence;
}
