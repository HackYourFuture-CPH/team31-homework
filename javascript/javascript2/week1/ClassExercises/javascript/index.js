// console.log("elo");

// const listItem1 = document.getElementById("list-item-1");
// const listItem2 = document.getElementById("list-item-2");
// const ul = document.querySelector("ul");

// const listItem3 = document.createElement("li");
// listItem3.setAttribute("id", "list-item-3");
// listItem3.innerText = "Yo";
// listItem3.style.fontWeight = "bold";
// listItem3.style.color = "red";
// ul.appendChild(listItem3);

// const listItem0 = document.createElement("li");
// listItem0.setAttribute("id", "list-item-0");
// listItem0.innerHTML = "I am the oldest";
// ul.insertBefore(listItem0, listItem1);

// const favoriteDishes = ["mousaka", "chicken", "ash", "pizza"];

// const ul = document.createElement("ul");
// favoriteDishes.forEach(function (item) {
//   const li = document.createElement("li");
//   li.innerText = item;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// const box = document.querySelector(".box");
// const formInBox = box.querySelector("form");
// const message = document.querySelector("#text");

// formInBox.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const firstNameInput = formInBox.querySelector("#firstName");
//   const firstName = firstNameInput.value;
//   const lastNameInput = formInBox.querySelector("#lastName");
//   const lastName = lastNameInput.value;
//   message.innerText = `Hello ${firstName} ${lastName}`;
// });

// const box1 = document.querySelector(".box");
// box.addEventListener("click", function () {
//   box.style.backgroundColor = getRandomColor();
// });

// document.body.addEventListener("keydown", function (event) {
//   if (event.key === "a") {
//     console.log("I pressed A");
//   }
// });
// function getRandomColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const button = document.querySelector("#main-button");
button.addEventListener("click", function () {
  document.getElementById("main-button").innerText = "Button Clicked";
});

document.addEventListener("click", darkMode);
const colorMode = document.getElementById("body");
function darkMode() {
  if (colorMode === "grey") {
    colorMode.style.backgroundColor === "white";
  } else {
    document.getElementById("body").style.backgroundColor = "grey";
  }
}
