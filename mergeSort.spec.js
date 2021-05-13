import { mergeSort } from './mergeSort';

const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));
const sortedArr = arr.sort((a, b) => a - b);

describe('mergeSort', () => {
  it('should work as expected', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(mergeSort(arr)).toEqual(sortedArr);
  });
});
