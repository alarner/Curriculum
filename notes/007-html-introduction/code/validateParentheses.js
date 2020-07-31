function validateParentheses(parens) {
  if (parens.length === 0) {
    return false;
  }
  const openParens = ["[", "{", "("];
  const closeParens = ["]", "}", ")"];
  const matchingParens = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    const currentCharacter = parens.charAt(i);
    if (openParens.includes(currentCharacter)) {
      stack.push(currentCharacter);
    } else if (closeParens.includes(currentCharacter)) {
      const lastOpenParen = stack.pop();
      if (matchingParens[lastOpenParen] !== currentCharacter) {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(validateParentheses("]"), false);
console.log(validateParentheses("["), false);
console.log(validateParentheses("[]"), true);
console.log(validateParentheses("{[]}"), true);
console.log(validateParentheses("([)]"), false);
console.log(validateParentheses("{[(){()}]}"), true);
