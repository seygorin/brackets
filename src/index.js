module.exports = function check(str, bracketsConfig) {

  const stack = [];
  const openingBrackets = bracketsConfig.map(pair => pair[0]);
  const closingBrackets = bracketsConfig.map(pair => pair[1]);

  for (const bracket of str) {
    if (openingBrackets.includes(bracket)) {
      if (closingBrackets.includes(bracket) && stack[stack.length - 1] === bracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (closingBrackets.includes(bracket)) {
      const openingBracket = openingBrackets[closingBrackets.indexOf(bracket)];
      if (stack[stack.length - 1] === openingBracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }
  }

  return stack.length === 0;
}
