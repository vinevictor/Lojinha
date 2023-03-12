let select = document.querySelector("select[id='colum']");
let grid = document.querySelector("section[class='gridBox']");

addEventListener("change", (e) => {
  let colum = select[select.selectedIndex].value;
  switch (colum) {
    case "5":
      grid.style.gridTemplateColumns = "15vw 15vw 15vw 15vw 15vw";
      break;
    case "3":
      grid.style.gridTemplateColumns = "15vw 15vw 15vw ";
      break;
    case "2":
      grid.style.gridTemplateColumns = "15vw 15vw";
  }
});
