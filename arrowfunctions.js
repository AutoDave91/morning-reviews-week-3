/////////////////Different ways of writing functions:

///Function Declaration

function addTwo(num) {
  return num + 2;
}

addTwo(4);

///Function Expression

let addTwo = function(num) {
  return num + 2;
};

addTwo(3);

///Arrow Function

let addTwo = num => {
  return num + 2;
};

addTwo(5);

///////////////More on Arrow Functions//////////////

//1. When there is only one parameter in the parentheses, we don't have to write the parentheses

let addTwo = num => {
  return num + 2;
};

//2. When the function statement is only one line, you can omit the brackets and the return

let addTwo = num => num + 2;

//3. Usually, you will have to use parentheses, brackets, and the return:

let basicMath = num => {
  sum = num + num;
  return sum * 3;
};

basicMath(2);

//4. Arrow functions help to make higher-order functions more concise

let nums = [2, 3, 4, 5];

///Before:
nums.map(function(num) {
  return num + 2;
});

///After:
nums.map(num => num + 2);

//If this is hard to read, write it with brackets and return statement:

nums.map(num => {
  return num + 2;
});

//////PRACTICE////////

//Change to arrow function:

nums.map(function(num, index) {
  return `The index of ${num} is ${index}`;
});

//////ANSWER

nums.map((num, index) => {
  return `The index of ${num} is ${index}`;
});

//OR=====>>>

nums.map((num, index) => `The index of ${num} is ${index}`);
