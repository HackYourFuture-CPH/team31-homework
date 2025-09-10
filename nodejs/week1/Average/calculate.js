import _ from "lodash";

export function avg(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("No Numbers Provided.");
  }

  if (numbers.some(isNaN)) {
    throw new Error("Input Must Contain Numbers.");
  }

  return _.mean(numbers);
}
