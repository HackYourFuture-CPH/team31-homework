console.log("=======0.5 Loops=======");

function numbers(a) {
  for (let i = 0; i < 10; i++) {
    let result = a + i;
    console.log(result);
  }
}

numbers(5);

function numbersNegative(b) {
  for (i = 0; i < 10; i++) {
    let results = b - i;
    console.log(results);
  }
}

numbersNegative(10);

function evenNumbers(c) {
  for (let i = 0; i < 10; i++) {
    if (c % 2 === 0) {
      cResults = c - i * 2;
      console.log(cResults);
    }
  }
}

evenNumbers(20);

const names = ["john", "jane", "joe"];
function namesPrint() {
  for (i = 0; i < names.length; i++) {
    namePrint = names[i];
    console.log(namePrint);
  }
}

namesPrint();
