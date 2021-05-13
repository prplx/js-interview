import { expect } from '@jest/globals';
import { bubbleSort } from './bubbleSort';

const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));
const sortedArr = arr.sort((a, b) => a - b);

describe('bubbleSort', () => {
  it('should work as expected', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });
});
