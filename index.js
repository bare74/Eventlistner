//Kalle på en funksjon u html

// let btn = document.querySelector("button");
// function renderMsg() {
//   alert("Du trykket på en knapp");
// }
// function changeColor() {
//   btn.style.backgroundColor = "blue";
// }

// let btn = document.querySelector("#click-btn");

// function renderMsg() {
//   alert("Du trykket");
// }

// function changeColor() {
//   btn.style.backgroundColor = "blue";
// }
// btn.onclick = changeColor;
// btn.onclick = renderMsg;

// let btn = document.getElementById("click-btn");

// btn.addEventListener("click", renderMsg);
// btn.addEventListener("click", changeColor)

// function renderMsg() {
//   alert("Du trykket på en knapp");
//   console.log("ALERT");
// }
// function changeColor() {
//   btn.style.backgroundColor = "blue";
//   console.log("endre farge");
// }

// let newBtn = document.createElement("button");
// document.body.append(newBtn);
// newBtn.innerText = "Ny knapp";

// newBtn.addEventListener("click", removeMsg)

// function removeMsg(){
//     btn.removeEventListener("click", renderMsg)

// console.log("Slettet alert melding fra BTN");
// }

//parameter

// let btn = document.getElementById("click-btn");

// btn.addEventListener("click", function () {
//   makeRecipe("sukker", "saltstenger", "tomat");
// });

// function makeRecipe(sweet, salt, vegetable) {
//   let recipe = `Noe søtt: ${sweet}, Noe salt: ${salt}, Grønnskaker : ${vegetable}`;

//   alert(recipe);
// }

// let ul = document.createElement("ul")
// ul.style.backgroundColor= "green";
// let li = document.createElement("li");
// li.innerText="Listeobjekt"
// li.style.backgroundColor = "lightblue";

// ul.addEventListener("click", showUlMsg,);
// li.addEventListener("click", showliMsg,);

// function showUlMsg(){
//     console.log("Dette er UL sin melding");
// }
// function showliMsg(){
//     console.log("Dette er IL sin melding");
// }

// ul.append(li);

// document.body.append(ul)

//OPPGAVER

// let newBtn = document.createElement("button");

// document.body.append(newBtn);
// newBtn.innerText = "Trykk her";

// newBtn.addEventListener("click", changeColor);

// function changeColor() {
//   newBtn.style.backgroundColor = "lightgreen";
//   newBtn.style.fontSize = "20px"
// }

// var img = document.createElement("img");
// img.src = "butterfly.jpg";
// img.style.width = "300px";

// var block = document.getElementById("x");
// block.appendChild(img);

// let div = document.createElement("div");
// let p = document.createElement("p");

// img.addEventListener("mouseover", bubbleText);

// function bubbleText() {
//   div.style.backgroundColor = "green";
//   div.style.width = "180px";

//   p.innerText = "Dette er en sommer fugel";
//   div.append(p);
//   document.body.append(div);
//   console.log("TT");
// }

// img.addEventListener("mouseout", removebubbleText);

// function removebubbleText() {
//   img.removeEventListener("mouseover", bubbleText);
//   div.style.visibility = "hidden";

//   console.log("Slettet");
// }

// var ul = document.getElementById("key-touch");

// document.addEventListener("keydown", (keyboard) => {
//   const key = keyboard.key;
//   console.log("Du trykket på knappen:", key);

//   ul.innerHTML += `<li> Du trykket på knappen: ${key}</li>`;
// });

let arrowUp = document.createElement("button");
document.body.append(arrowUp);
arrowUp.innerText = "˄";
arrowUp.style.padding = "20px";

let arrowDown = document.createElement("button");
document.body.append(arrowDown);
arrowDown.innerText = "˅";
arrowDown.style.padding = "20px";

let arrowLeft = document.createElement("button");
document.body.append(arrowLeft);
arrowLeft.innerText = "<";
arrowLeft.style.padding = "20px";

let arrowRight = document.createElement("button");
document.body.append(arrowRight);
arrowRight.innerText = ">";
arrowRight.style.padding = "20px";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    arrowUp.style.backgroundColor = "green";
  } else if (e.key === "ArrowDown") {
    arrowDown.style.backgroundColor = "green";
  } else if (e.key === "ArrowLeft") {
    arrowLeft.style.backgroundColor = "green";
  } else if (e.key === "ArrowRight") {
    arrowRight.style.backgroundColor = "green";
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp") {
    arrowUp.style.backgroundColor = "unset";
  } else if (e.key === "ArrowDown") {
    arrowDown.style.backgroundColor = "unset";
  } else if (e.key === "ArrowLeft") {
    arrowLeft.style.backgroundColor = "unset";
  } else if (e.key === "ArrowRight") {
    arrowRight.style.backgroundColor = "unset";
  }
});
