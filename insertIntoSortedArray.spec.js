import { insert } from './insertIntoSortedArray';

describe('insertIntoSortedArray', () => {
  it('should work as expected', () => {
    expect(insert([], 5)).toEqual([5]);
    expect(insert([1, 3, 4], 2)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 1, 1, 2, 2, 3, 3, 3], 2)).toEqual([
      1, 1, 1, 2, 2, 2, 3, 3, 3,
    ]);
  });
});
