// Recursive
export function flatRec(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatRec(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Iterative
export function flatIt(arr) {
  const queue = [...arr];
  const result = [];
  while (queue.length) {
    const current = queue.shift();
    if (Array.isArray(current)) {
      queue.unshift(...current);
    } else {
      result.push(current);
    }
  }
  return result;
}
