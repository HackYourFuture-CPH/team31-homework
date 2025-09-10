const spiritAnimals = [
  "Flying Dragon",
  "Crying Monkey",
  "Dancing Panther",
  "Whispering Owl",
  "Shifting Fox",
  "Roaring Lion",
  "Sleeping Bear",
  "Glowing Butterfly",
  "Howling Wolf",
  "Singing Dolphin",
];
const inputDiv = document.getElementById("inputContainer");
const nameInput = document.getElementById("name");
const spiritAnimalElement = document.getElementById("spiritAnimal");
const mainDiv = document.querySelector(".main-div");

function findSpiritAnimal() {
  const name = nameInput.value;
  if (!name) {
    spiritAnimalElement.innerText = "Please Enter Name";
  } else {
    const index = Math.floor(Math.random() * 10);
    const spiritName = spiritAnimals[index];
    spiritAnimalElement.innerText = `Hi ${name}, Your Spirit Animal is\n "${spiritName}"`;
  }
}

const messageForUser = document.createElement("p");
messageForUser.innerText =
  "Please Select Which Way You Want To Create Spirit Animal Name";
mainDiv.appendChild(messageForUser);

const radioContainer = document.createElement("div");
radioContainer.setAttribute("id", "radioContainer");

const radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.setAttribute("id", "click");
radio1.setAttribute("name", "action");
radio1.setAttribute("value", "click");

const label1 = document.createElement("label");
label1.setAttribute("for", "click");
label1.textContent = "Create with Click";

const radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
radio2.setAttribute("id", "mouseover");
radio2.setAttribute("name", "action");
radio2.setAttribute("value", "mouseover");

const label2 = document.createElement("label");
label2.setAttribute("for", "mouseover");
label2.textContent = "Create with MouseOver";

radioContainer.appendChild(radio1);
radioContainer.appendChild(label1);
radioContainer.appendChild(document.createElement("br"));
radioContainer.appendChild(radio2);
radioContainer.appendChild(label2);

mainDiv.appendChild(radioContainer);

let currentAction = document.querySelectorAll('input[name="action"]');

currentAction.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      const actionToTake = radio.value;
      handleAction(actionToTake);
    }
  });
});

function handleAction(action) {
  const existingButton = document.getElementById("spiritAnimalButton");
  if (action === "click") {
    nameInput.onmouseover = null;
    if (!existingButton) {
      const button1 = document.createElement("button");
      button1.setAttribute("id", "spiritAnimalButton");
      button1.innerText = "CLICK ME";
      inputDiv.appendChild(button1);
      spiritAnimalElement.innerText = "Click to generate your spirit animal!";
      button1.onclick = function () {
        findSpiritAnimal();
      };
    }
  } else if (action === "mouseover") {
    if (existingButton) {
      existingButton.remove();
    }
    spiritAnimalElement.innerText = "Hover to generate your spirit animal!";
    nameInput.onmouseover = function () {
      findSpiritAnimal();
    };
  }
}
