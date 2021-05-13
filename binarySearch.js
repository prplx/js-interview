export function binarySearch(arr, val) {
  const defaultValue = -1;
  if (!arr || !val || !Array.isArray(arr)) return defaultValue;
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return defaultValue;
}

export function binarySearchRecursive(
  arr,
  val,
  left = 0,
  right = arr.length - 1
) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] < val) {
    return binarySearchRecursive(arr, val, middle + 1, right);
  } else {
    return binarySearchRecursive(arr, val, 0, middle - 1);
  }
}
