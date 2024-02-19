//Task 1
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//Task 2
function removeByIndex(arr, indices) {
  const extractedValues = [];

  for (let i = 0; i < indices.length; i++) {
    extractedValues.push(arr[indices[i]]);
  }
  return extractedValues;
}

const result = removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]);
console.log(result); // ['b', 'f']

//Task 3
function numToArray(num) {
  const numStr = num.toString();

  const numArray = [];

  for (let i = 0; i < numStr.length; i++) {
    numArray.push(parseInt(numStr[i], 10));
  }

  return numArray;
}

const resultTwo = numToArray(12345);
console.log(result); // [1, 2, 3, 4, 5]

//Task 4
function createMatrix(arrayOne, arrayTwo) {
  const matrix = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      matrix.push([arrayOne[i], arrayTwo[j]]);
      matrix.push([arrayTwo[j], arrayOne[i]]);
    }
  }

  return matrix;
}

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

const resultThree = createMatrix(arrayOne, arrayTwo);
console.log(result);
