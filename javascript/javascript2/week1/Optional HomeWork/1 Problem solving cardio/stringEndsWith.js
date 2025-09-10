function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abc", "bc")); // True
console.log(solution("abc", "d")); // False
console.log(solution("abcde", "cde")); // True
console.log(solution("abcde", "abc")); // False
