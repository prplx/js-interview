// Iterative
export function isPalindromeIt(str) {
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left].charCodeAt(0) === 32) {
      left++;
      continue;
    } else if (str[right].charCodeAt(0) === 32) {
      right--;
      continue;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}

// Recursive
export function isPalindromeRec(str) {
  if (str.length < 2) return true;
  if (str[0].charCodeAt(0) === 32) {
    return isPalindromeRec(str.slice(1));
  } else if (str[str.length - 1].charCodeAt(0) === 32) {
    return isPalindromeRec(str.slice(0, -1));
  } else if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
    return isPalindromeRec(str.slice(1, -1));
  } else {
    return false;
  }
}
