const chBtn = document.querySelector("#changeButton");

chBtn.addEventListener("click", function() {
  const colorInput = document.querySelectorAll(".color-input");
  const divBox = document.querySelectorAll(".box");

  for(let i = 0; i < colorInput.length; i++) {
    divBox[i].style.backgroundColor = colorInput[i].value;
  }
});