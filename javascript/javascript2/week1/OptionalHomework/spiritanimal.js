console.log("==============Spirit animal name generator==============");

// optionalhomework.netlify.app;  deployed for checking

const animals = [
  "Blue-Moon Wolf",
  "Elder Capybara",
  "Golden Phoenix",
  "Shadow Panther",
  "Crimson Hawk",
  "Silver Fox",
  "Jade Turtle",
  "Thunder Eagle",
  "Mystic Owl",
  "Ember Lion",
  "Frost Bear",
  "Sapphire Dolphin",
  "Iron Stag",
  "Whispering Raven",
  "Amber Tiger",
  "Obsidian Serpent",
  "Crystal Butterfly",
  "Storm Wolf",
  "Lunar Hare",
  "Solar Falcon",
  "Ocean Orca",
  "Mossy Moose",
  "Blazing Cheetah",
  "Arctic Fox",
  "Golden Cobra",
  "Enchanted Elk",
  "Dusk Coyote",
  "Flame Macaw",
  "Mountain Gorilla",
  "Rainbow Peacock",
  "Night Heron",
  "Spirit Deer",
  "Wind Horse",
  "Ember Wolf",
  "Crimson Crane",
  "Starfish Seer",
  "Mystic Moth",
  "Thunderbird",
  "Jungle Jaguar",
  "Frostfire Lynx",
  "Sable Antelope",
  "Moonlit Manatee",
  "Sunburst Salamander",
  "Ethereal Unicorn",
  "Shadowed Sparrow",
  "Glowing Gecko",
  "Tidal Narwhal",
  "Ancient Armadillo",
  "Celestial Cat",
  "Verdant Viper",
];

function createSpiritAnimal(animal) {
  return animal[Math.floor(Math.random() * animal.length)];
}

const section = document.querySelector(".spirit-animal");
const formSection = section.querySelector("form");
const message = document.querySelector("#text");

formSection.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = formSection.querySelector("#name");
  const name = nameInput.value;

  message.innerText = `Hello ${name}, your Spirit Animal is: ${createSpiritAnimal(animals)}`;

  let newAnimalButton = document.getElementById("newAnimal");

  if (!newAnimalButton) {
    newAnimalButton = document.createElement("input");
    newAnimalButton.type = "submit";
    newAnimalButton.id = "newAnimal";
    newAnimalButton.value = "Get Another Animal";
    formSection.appendChild(newAnimalButton);
  }

  newAnimalButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = `Hello ${name}, your new Spirit Animal is: ${createSpiritAnimal(animals)}`;
  });
});
