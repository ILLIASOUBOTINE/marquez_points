const container = document.querySelector(".container");
const allInp = document.querySelectorAll("input");
const btnControl = document.querySelector(".btn_control");

console.dir(container);

btnControl.addEventListener("click", (e) => {
  console.log(counterElem(allInp));
  container.lastChild.remove();
  creteElem(container, "p").innerText = `Vous avez:  ${counterElem(
    allInp
  )} sur ${document.querySelectorAll(".question").length}points`;

   addClass(allInp, "green");

});

function counterElem(arr) {
  let countre = 0;
  for (let item of arr) {
    if (item.checked && item.value === "true") {
      countre++;
    }
  }
  return countre;
}

function creteElem(parent, elem) {
  let newElem = document.createElement(elem);
  parent.append(newElem);
  return newElem;
}

function addClass(arr, myClass) {
 
  for (let item of arr) {
    if (item.value === "true") {
      item.parentElement.classList.add(myClass);
    }
  }
  
}