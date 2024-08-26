function fn1() {
  for(let num=10; num>0; num--) {
    console.log(num);
  }
}

function fn2() {
  for(let num=20; num>=1; num--) {
    if(num % 2 == 0) {
      console.log(num);
    }
  }
}

function fn3() {
  let num = 1;
  while(num <= 50) {
    if(num % 5 == 0) {
      console.log(num);
    }
    num++;
  }
}

function fn4() {
  let result = 1;

  for(let num = 5; num >= 1; num--) {
    result *= num;
  }

  console.log(result);
}

function fn5() {
  for(y=2; y<=9; y++) {
    for(x=1; x<=9; x++) {
      console.log(`${y} x ${x} = ${y * x}`);
    }
  }
}

function fn6() {
  for(let num = 1; num <= 30; num++) {
    if(num % 10 == 3 || num % 10 == 6 || num % 10 == 9) {
      console.log('짝')
    } else {
      console.log(num);  
    }
  }
}

function fn7() {
  let count = 0;

  for(let y = 2; y <= 20; y++) {
    count = 0;
    for(let x = 2; x <= y; x++) {
      if(y % x == 0) {
        count++;
      }
    }

    if(count == 1) {
      console.log(y);
    }
  }
}