// break 확인
function check1() {

  // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
  for(let i = 1; i < 10; i++) {
    console.log("i : ", i);

    if(i == 5) break;
  }

}

// 무한 반복하는 while 문 멈추기
function check2() {

  let i = 1;


  // 10 초과 시 멈춤
  while(true) {
    console.log(i++);

    if(i > 10) break;
  }
}

// continue 확인
function check3() {

  // 1부터 20까지 1씩 증가하며 출력
  // 단, 3의 배수는 건너뛰기
  // 1 2 4 5 7 8 10...
  for(let i = 1; i <= 20; i++) {

    // 3의 배수인 경우
    if(i % 3 == 0) continue;

    // 3의 배수인 경우 아래 코드를 수행하지 않음
    console.log("i : ", i);
  }
}


function check4() {
  // 1부터 30까지 1씩 증가하며 출력
  // 단, 홀수 또는 10의 배수는 건너뛰기
  for(let i = 1; i <= 30; i++) {

    if(i % 2 == 1 || i % 10 == 0) continue;

    console.log(i);
  }
}

// break & continue 둘 다 적용해보기
/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/

function check5() {

  for(let i = 1; i <= 5; i++) {
    
    let str = "";
    for(let j = 0; j <= 9; j++) {
      if(j != 0 && j % 4 == 0) continue;
      str += j;
    }
    console.log(str);
    if(i == 3) break;
  }
}


function startGame() {
  const randomNumber = Math.floor(Math.random() * 200) + 1; // 난수
  let count = 0; // 횟수
  let str = "1부터 200사이의 숫자를 입력: ";
  //console.log(randomNumber);
  while(true) {
    let num = prompt(str);

    if(num == null) { //프롬프트 취소시 게임 종료
      break;
    }

    //console.log(num, randomNumber);

    // 잘 못 입력한 경우
    // 1. 숫자가 아닌 글자를 넣은 경우
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값) : 값이 NaN이면 true
    let value = Number(num);
    
    if( isNaN(value) ) {
      alert("숫자만 입력해 주세요");
      continue;
    }

    // 2. 범위르르 초과한 경우
    if(value < 1 || value > 200) {
      alert("1 ~ 200 사이 값만 작성해주세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 증가
    count++;

    // 정답인 경우
    if(value === randomNumber) {
      alert(`정답 !!! (${randomNumber}) / 시도 횟수: ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if(value < randomNumber) { //작은경우
      str = `${value} [UP] / 시도 횟수 : ${count}회`
    } else { // 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}회`
    }

    /*
    if(value > randomNumber) {
      alert("down");
    } else if(value < randomNumber) {
      alert("up");
    } else {
      alert(`시도 횟수 : ${count}, 정답 : ${randomNumber}`);
      break;
    } */
  }
}
