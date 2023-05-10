//
// File: main.js
// Date: 5/24/2022
//

// ex1
const countNumbers = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result += 1;
    }
  }
  return result;
};

// ex1 test cases
const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  const array2 = [3, {}, 2, "string"];
  const array3 = [];
  console.log(countNumbers(array));
  console.log(countNumbers(array2));
  console.log(countNumbers(array3));
};

// ex2
const minNumber = (arr) => {
  let min = arr[0]; //12
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// ex2 test cases
const ex2 = () => {
  let array1 = [3, 5, 1, 2];
  console.log(minNumber(array1));
  console.log(minNumber([10, 5, 3, 0]));
  console.log(minNumber([3, -29, 1, -100]));
};

// ex3
const interleave = (arr1, arr2) => {
  let result = "";
  if (arr1.length !== arr2.length) {
    return "ERROR: Array length mismatch";
  } else {
    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i];
      result += arr2[i];
    }
  }
  return result;
};

// ex3 test cases
const ex3 = () => {
  console.log(interleave([1, 2, 3], [1, 2, 3]));
  console.log(interleave([4, 2, 1], ["J", "I", "K"]));
  console.log(interleave([21], [32, 1, 2]));
};

// ex4
const palindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const ex4 = () => {
  console.log(palindrome("radar"));
  console.log(palindrome("month"));
  console.log(palindrome("racecar"));
};

//ex 5

const displayThis = (string) => {
  let result = 0;
  const arrayOfStr = string.split(" ");
  for (let i = 0; i < arrayOfStr.length; i++) {
    if (arrayOfStr[i] === "this") {
      result += 1;
    }
  }
  return `this appears: ${result} times.`;
};

//ex 5 test cases
const ex5 = () => {
  let str = "today this is a this is a this is a test.";
  let str1 = "this is not this";
  let str2 = "I don't have any this in my string";
  console.log(displayThis(str));
  console.log(displayThis(str1));
  console.log(displayThis(str2));
};

//ex 6
const longestString = (arr) => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result.length) {
      result = arr[i];
    }
  }
  return result;
};

//ex 6 test cases
const ex6 = () => {
  const array = ["this", "is", "a", "test", "happy"];
  const array1 = ["sdadsad", "d", "short"];
  const array2 = ["sdadsad", "d", "short", "longestString"];
  console.log(longestString(array));
  console.log(longestString(array1));
  console.log(longestString(array2));
};

//ex 7
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //console.log("I :" + i, "J :" + j);
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

//ex 7 test cases
const ex7 = () => {
  let n = [1, 3, 6, 3, 6, 10];
  let array = [4, 3, 2, 1, 23, 111];
  let array1 = [90, 102, 30, 12, 2];

  console.log(sort(n));
  console.log(sort(array));
  console.log(sort(array1));
};

//ex 8
const countWords = (str) => str.split(" ").length;

//ex 8 test cases
const ex8 = () => {
  let words = "Count the words in this string";
  let words1 = "Hello";
  let words2 = "Hi my name is Ethan";
  console.log(countWords(words));
  console.log(countWords(words1));
  console.log(countWords(words2));
};

//ex 9
const countS = (str) => {
  str = str.toLowerCase();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      result += 1;
    }
  }
  return result;
};

//ex 9 test cases
const ex9 = () => {
  let a = "this counts the number of words that end in s";
  let b = "I don't have any";
  let c = "I have many ssssssSs with uppercase";
  console.log(countS(a));
  console.log(countS(b));
  console.log(countS(c));
};


