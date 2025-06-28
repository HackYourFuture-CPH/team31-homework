console.log("=======1.3 JS Behavior Review=======");

const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = {
  name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
console.log("#1", a + a); // 20
console.log("#2", a + b); // 0
console.log("#3", a + c); // 10100
console.log("#4", a + d); // 10no
console.log("#5", a + e); // 10{object}
console.log("#6", a + e["name"]); // 10john
console.log("#7", a + e["age"]); // 10unidentified
console.log("#8", a + f); // 101,2,3
console.log("#9", a + f[1]); // 101
console.log("#10", a + h); // 11
