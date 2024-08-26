document.addEventListener("keydown", function(e) {
  //console.log(e);
  if(e.key == 'Q' || e.key == 'q') {
    //console.log(document.querySelector(".key:nth-child(1)"));
    document.querySelector(".key:nth-child(1)").style.backgroundColor = "yellow";
  } else if(e.key == 'W' || e.key == 'w') {
    document.querySelector(".key:nth-child(2)").style.backgroundColor = "yellow";
  } else if(e.key == 'E' || e.key == 'e') {
    document.querySelector(".key:nth-child(3)").style.backgroundColor = "yellow";
  } else if(e.key == 'R' || e.key == 'r') {
    document.querySelector(".key:nth-child(4)").style.backgroundColor = "yellow";
  }
});

document.addEventListener("keyup", function(e) {
  //console.log(e);
  //문자열.toLowerCase() : 영어를 모두 소문자로 변경(A->a)
  //문자열.toUpperCase() : 영어를 모두 대분자로 변경(a->A)
  if(e.key == 'Q' || e.key == 'q') {
    //console.log(document.querySelector(".key:nth-child(1)"));
    document.querySelector(".key:nth-child(1)").style.backgroundColor = "white";
  } else if(e.key == 'W' || e.key == 'w') {
    document.querySelector(".key:nth-child(2)").style.backgroundColor = "white";
  } else if(e.key == 'E' || e.key == 'e') {
    document.querySelector(".key:nth-child(3)").style.backgroundColor = "white";
  } else if(e.key == 'R' || e.key == 'r') {
    document.querySelector(".key:nth-child(4)").style.backgroundColor = "white";
  }
});

