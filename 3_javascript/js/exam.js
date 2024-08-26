const btn = document.querySelector("#btn");
const box = document.querySelector("#box3");

btn.addEventListener("click", function() {
  const width = Number(document.querySelector("#width").value);
  const height = Number(document.querySelector("#height").value);
  const size = Number(document.querySelector("#size").value);
  const str = document.querySelector("#str");
  const bold = document.getElementsByName("bold");
  const color = document.querySelector("#color").value;
  const bgColor = document.querySelector("#bgColor").value;
  const colAlign = document.getElementsByName("colAlign");
  const rowAlign = document.getElementsByName("rowAlign");

  box.style.width = width+"px";
  box.style.height = height+"px";
  box.style.fontSize = size+"px";
  box.style.color = color;
  box.style.backgroundColor = bgColor;

  if(bold[0].checked == true) 
    box.style.fontWeight = "normal";
  else 
    box.style.fontWeight = "bold";  
    console.log(colAlign);
  

  for(let i = 0; i < colAlign.length; i++) {
    if(colAlign[i].checked == true) {
      if(i==0) {
        box.style.display = "flex";
        box.style.justifyContent = "flex-start";
      }      
      else if(i==1) {
        box.style.display = "flex";
        box.style.justifyContent = "center";
      }
      else {
        box.style.display = "flex";
        box.style.justifyContent = "flex-end";
      }
    }
  }

  for(let i = 0; i < rowAlign.length; i++) {
    if(rowAlign[i].checked == true) {
      if(i==0) {
        box.style.display = "flex";
        box.style.alignItems = "flex-start";
      }      
      else if(i==1) {
        box.style.display = "flex";
        box.style.alignItems = "center";
      }
      else {
        box.style.display = "flex";
        box.style.alignItems = "flex-end";
      }
    }
  }

  box.innerText = str.value;
});