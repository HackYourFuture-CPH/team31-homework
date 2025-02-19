let width = 5
let depth =11
let height =8
let volumeInMeters = width * depth * height;

let gardenSizeInM2 = 70
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let askingPrice = 1000000;

if (housePrice > askingPrice) {
  console.log (housePrice)
  console.log("cheap");
} else {
    console.log (housePrice)
  console.log("expensive");
}
// the test was made for julias house

