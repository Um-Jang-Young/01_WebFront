const resName = document.querySelector("#resName");
const resNameInput = document.querySelector("#resNameInput");

const updateBtn = document.querySelector("#updateBtn");
const exitBtn = document.querySelector("exitBtn");
const addMenu = document.querySelector("#addMenu");

const normalContainer = document.querySelector(".normal-container");
const editContainer = document.querySelector(".edit-container");

const newEl = (tag, attr, cls) => {
  const el = document.createElement(tag);

  for(let key in attr) {
    el.setAttribute(key, attr[key]);
  }
  for(let className of cls) {
    el.classList.add(className);
  }
  return el;
}

const createMenuContent = () => {
  const check = newEl("input", {type:"checkbox"}, ["menu-check"]);

  const menuNameInput = newEl("input", {type:"text", placeholer:"메뉴명"}, ["menu-name-input"]);

  const menuPriceInput = newEl("input", {type:"text", placeholder:"가격"}, ["menu-price-input"]);

  return {"check" : check, "menuNameInput" : menuNameInput, "menuPriceInput" : menuPriceInput};
}

resName.addEventListener("click", e => {
  e.target.classList.toggle("res-name-hidden");
  resNameInput.classList.toggle("res-name-hidden");

  let beforeName = e.target.textContent;
  if(beforeName == "식당명을 입력하세요") beforeName = "";

  resNameInput.value = beforeName;

  resNameInput.focus();
});

resNameInput.addEventListener("blur", e => {
  resName.textContent = e.target.value;

  if(e.target.value.trim().length == 0) resName.textContent = "식당명을 입력하세요";
  
  e.target.classList.toggle("res-name-hidden");
  resName.classList.toggle("res-name-hidden");

});

updateBtn.addEventListener("click", e => {
  normalContainer.classList.toggle("b-hidden");
  editContainer.classList.toggle("b-hidden");

  const menuList = document.querySelectorAll(".menu");
  menuList.forEach(menu => {
    const menuName = menu.children[0].textContent;
    let menuPrice = menu.children[1].textContent;

    menuPrice = menuPrice.substring(0, menuPrice.length-1);

    const menuContent = createMenuContent();

    menuContent.menuNameInput.value = menuName == "미입력" ? "" : menuName;
    menuContent.menuPriceInput.value = menuPrice == 0 ? "" : menuPrice;

    menu.innerHTML = "";

    for(let key in menuContent) {
      menu.append(menuContent[key]);
    }
  });
});

exitBtn.addEventListener("click", e => {
  normalContainer.classList.toggle("b-hidden");
  editContainer.classList.toggle("b-hidden");

  const MenuList = document.querySelectorAll(".menu");
  menuList.forEach(menu => {
    const menuNameInput = menu.children[1].value;
    const menuPriceInput= menu.children[2].value;

    const menuName = newEl("span", {}, ["menu-name"]);
    menuName.textContent = menuNameInput.trim().length == 0 ? "미입력" : menuNameInput;

    const menuPrice = newEl("span", {}, ["menu-price"]);
    menuPrice.textContent = (menuPriceInput.trim().length == 0 ? "0" : menuNameInput) + "원";

    menu.innerHTML = "";
    menu.append(menuName, menuPrice);
  });
});

addMenu.addEventListener("click", e => {

  if(document.querySelectorAll(".menu").length >= 15) {
    alert("더 이상 메뉴를 추가할 수 없습니다.");
    return;
  }

  const li = newEl("li", {}, ["menu"]);
});