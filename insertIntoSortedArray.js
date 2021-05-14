const findIndex = (arr, val) => {
  let low = 0,
    high = arr.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

export const insert = (arr, n) => {
  const idx = findIndex(arr, n);
  arr.splice(idx, 0, n);
  return arr;
};
