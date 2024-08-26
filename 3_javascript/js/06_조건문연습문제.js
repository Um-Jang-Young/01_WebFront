function check01() {
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);
  let message;

  if(v1 > v2) {
    message = `${v1}이 ${v2}보다 더 큽니다`
  } else if(v1 < v2) {
    message = `${v1}이 ${v2}보다 더 작습니다`
  } else {
    message = `${v1}과 ${v2}는 같습니다`
  }

  alert(message);
}

function check02() {
  const number = document.getElementById("number3");
  const value = Number(number.value);

  if(value % 2 == 0) {
    alert("짝수 입니다");
  } else {
    alert("홀수 입니다");
  }
}

function check03() {
  const number1 = document.getElementById("number4");
  const number2 = document.getElementById("number5");
  const number3 = document.getElementById("number6");

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);
  const v3 = Number(number3.value);

  let result = v1;

  if(v2 > result) {
    result = v2;
  }

  if(v3 > result) {
    result = v3;
  }

  /* if(v1 > v2) {
    if(v1 > v3) {
      result = v1;
    } else {
      result = v2;
    }
  } else if(v2 > v1) {
    if(v2 > v3) {
      result = v2;
    }
    else {
      result = v3;
    }
  } else if(v3 > v1) {
    if(v3 > v2) {
      result = v3;
    }
    else {
      result = v2;
    }
  } */

  alert("세 숫자중 가장 큰 숫자는 " + result + "입니다");
}

function check04() {
  const str = document.getElementById("inputStr");
  const value = str.value;

  if(value.length == 0) {
    alert("미입력");
  } else if(value == "apple") {
    alert("입력하신 문자열은 apple 입니다");
  } else if(value == "banana") {
    alert("입력하신 문자열은 banana 입니다");
  } else {
    alert("입력하신 문자열은 " + value + "입니다");
  }
}

function check05() {
  const number = document.getElementById("number7");
  const value = Number(number.value);
  let result;

  if(value > 90) {
    result = 'A';
  } else if(value > 80) {
    result = 'B';
  } else if(value > 70) {
    result = 'C';
  } else if(value > 60) {
    result = 'D';
  } else {
    result = 'F';
  }

  alert(result);
}

function check06() {
  const inputAge = document.getElementById("inputAge");
  const inputTall = document.getElementById("inputTall");

  const age = Number(inputAge.value);
  const tall = Number(inputTall.value);

  if(age < 0 || age > 100) {
    alert("잘못 입력 하셨습니다");
  } else {
    if(age >= 12) {
      if(tall >= 140.0) {
        alert("탑승 가능");
      }
      else {
        alert("적정 키가 아닙니다");
      }
    } else {
      alert("적정 연령이 아닙니다");
    } 
  }
  
}

function check07() {
  const inputMonth = document.getElementById("inputMonth");
  const month = Number(inputMonth.value);

  if(document.getElementById("temper").style.display == "none") {
    if(month >= 3 && month <= 5) {
      alert("봄");
    } else if(month >= 6 && month <= 8) {
      alert("여름");
      document.getElementById("temper").style.display = "block";
    } else if(month >= 9 && month <= 11) {
      alert("가을");
    } else if(month != 0) {
      alert("겨울");
      document.getElementById("temper").style.display = "block";
    }
  } else {
    check08(month);
  }
  
}

function check08(month) {
  const inputTemper = document.getElementById("inputTemper");
  const temper = Number(inputTemper.value);

  if(month >= 6 && month <= 8) {
    if(temper >= 30) {
      alert("폭염");
    }
  } else {
    if(temper <= 0) {
      alert("한파");
    }
  }

  document.getElementById("temper").style.display = "none";
}