// 1. 식당명 클릭시 이벤트
const resNameInput = document.querySelector(".res-name-hidden");

document.getElementById("resName").addEventListener("click", () => {
  resNameInput.style.display = "block";
  const resName = document.querySelector("#resName");
  resName.style.display = "none";
});

// 2. 

resNameInput.addEventListener("blur", (e) => {
  e.target.style.display = "none";
  const resName = document.querySelector("#resName");
  resName.style.display = "block";
})

document.getElementById("updateBtn").addEventListener("click", () => {
  const bHidden = document.querySelector(".b-hidden");
  bHidden.style.display = "block";
  const normalContainer = document.querySelector(".normal-container");
  normalContainer.style.display = "none";

  const menu = document.querySelectorAll(".menu");

  for(let i=0; i<menu.length; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("menu-check");
    menu[i].prepend(input);
  }

});

document.getElementById("exitBtn").addEventListener("click", () => {
  const bHidden = document.querySelector(".b-hidden");
  bHidden.style.display = "none";
  const normalContainer = document.querySelector(".normal-container");
  normalContainer.style.display = "block";

  menuCheck = document.querySelectorAll(".menu-check");
  
  for(let i=0; i<menuCheck.length; i++) {
    menuCheck[i].remove();
  }
});