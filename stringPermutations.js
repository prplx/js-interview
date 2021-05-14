export function stringPermutations(str) {
  if (!str || typeof str !== 'string') {
    return 'Wrong argument type';
  } else if (str.length === 1) {
    return str;
  }
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.indexOf(char) !== i) continue;
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let permutation of stringPermutations(remainingChars)) {
      result.push(char + permutation);
    }
  }
  return result;
}
