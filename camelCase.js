function solution(string) {
  let result = "";

  for (const char of string) {
    
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += " " + char;
    } else {
      result += char;
    }
  }

  return result;
}
