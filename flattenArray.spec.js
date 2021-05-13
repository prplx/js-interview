import { flatIt, flatRec } from './flattenArray';

describe('flatten array', () => {
  const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]], 13, 14, 15];
  const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  describe('iterative', () => {
    it('should work as expected', () => {
      expect(flatIt(array)).toEqual(flatArray);
    });
  });

  describe('recursive', () => {
    it('should work as expected', () => {
      expect(flatRec(array)).toEqual(flatArray);
    });
  });
});
