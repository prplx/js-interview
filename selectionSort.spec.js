import { selectionSort } from './selectionSort';

const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));
const sortedArr = arr.sort((a, b) => a - b);

describe('selectionSort', () => {
  it('should work as expected', () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(selectionSort(arr)).toEqual(sortedArr);
  });
});
