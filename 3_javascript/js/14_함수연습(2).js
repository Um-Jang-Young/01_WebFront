
// 문제 1번
function print(name) {
  console.log(`Hello, [${name}]!`);
}

print("장영");


// 문제 2번
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 5));

// 문제 3번

const mulFn = (num1, num2) => {
  return num1 * num2;
};

console.log(mulFn(2, 5));


// 문제 4번
function compareFn(num1, num2) {
  let message;

  if(num1 > num2) {
    message = "첫 번쨰 숫자가 더 큽니다";
  } else {
    message = "두 번째 숫자가 더 크거나 같습니다";
  }

  console.log(message);
}

compareFn(2, 7);


// 문제 5번
function lengthFn(str) {
  console.log(str.length);
}

lengthFn("Hello, world!");



// 문제 6번
function repeatFn(str, count) {
  let result = "";
  for(let i = 0; i < count; i++)
    result += str;
  console.log(result);
}

repeatFn("Hello", 3);



// 문제 7번
function test7(num) {
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(test7(5));
console.log(test7(2));


// 문제 8번
function test8(num1, num2, num3) {
  let max = num1;

  if(num2 > max) {
    max = num2;
  }

  if(num3 > max) {
    max = num3;
  }

  return max;
}

console.log(test8(1, 10, 2));
console.log(test8(9, 5, 2));


// 문제 9번
const test9 = (arr) => {
  return arr[0];
}

let array = [10, 20, 30];
console.log(test9(array));



// 문제 10번
function test10(arr) {
  let total = 0;
  let avg;

  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  avg = total / arr.length;

  return {"합계" : total, "평균" : avg}
}

let array2 = [10, 20, 30];
console.log(test10(array2));



//문제 11번
const c1 = function calc(num1, num2, op) {
  let result = 0;
  switch(op) {
    case '+' : result = num1 + num2; break;
    case '-' : result = num1 - num2; break;
    case '*' : result = num1 * num2; break;
    case '/' : result = num1 / num2; break;
    case '%' : result = num1 % num2; break;
    default : break;
  }

  return result;
}

function test11(c1) {
  console.log(c1(10, 20, '+'));
}

test11(c1);




// 문제 12번
function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("12번 : " + `안녕하시오, ${name}`);
}

function sayGoodbye(name) {
  console.log("12번 : " + `잘가, ${name}`);
}

greet('길동', sayHello);
greet('장영', sayGoodbye);


/*const p = function print(str) {
  return str;
}

function test12(p) {
  console.log(p("잘가. 장영!"));
}

test12(p);
*/