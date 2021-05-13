import { quickSort } from './quickSort';

const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));
const sortedArr = arr.sort((a, b) => a - b);

describe('quickSort', () => {
  it('should work as expected', () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quickSort(arr)).toEqual(sortedArr);
  });
});
