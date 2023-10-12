const numberContain = document.getElementsByClassName("number-cont");
const button = document.getElementsByClassName("button");
const myNumbers = document.querySelectorAll(".my-h5");
let EstractNumber = [];
myUl = document.getElementById("my-ul");

function randomNumber() {
  let randomN = Math.floor(Math.floor(Math.random() * 77 + 1));
  while (EstractNumber.includes(randomN)) {
    randomN = randomNumber();
  }
  return randomN;
}

const footer = document.querySelector("footer");
let playerTab = document.createElement("div");
for (i = 0; i < 27; i++) {
  let numPlayerTab = document.createElement("div");
  numPlayerTab.classList.add("small-num");
  let h6Player = document.createElement("h6");
  h6Player.innerHTML = randomNumber();
  numPlayerTab.appendChild(h6Player);
  h6Player.classList.add("my-h6");
  playerTab.appendChild(numPlayerTab);
}
let allTheh6 = document.querySelectorAll(".my-h6");
console.log(allTheh6);
let divPlayerTab = document.querySelectorAll(".small-num");
playerTab.classList.add("player-tab");
footer.appendChild(playerTab);

button[0].addEventListener("click", function () {
  if (EstractNumber.length < myNumbers.length) {
    let newNumber = randomNumber();

    for (i = 0; i < myNumbers.length; i++) {
      if (newNumber === parseInt(myNumbers[i].textContent)) {
        numberContain[i].classList.add("colors-random-numbers");
      }
    }
    for (i = 0; i < allTheh6.length; i++) {
      if (newNumber === parseInt(allTheh6[i].textContent)) {
        divPlayerTab[i].classList.add("table-color");
      }
    }
    myLi = document.createElement("li");
    myLi.innerHTML = newNumber;
    myUl.appendChild(myLi);

    EstractNumber.push(newNumber);
  } else {
    alert("Tutti i numeri sono estratti");
  }
});
