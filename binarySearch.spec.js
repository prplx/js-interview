import { expect } from '@jest/globals';
import { binarySearch, binarySearchRecursive } from './binarySearch.js';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

describe('binarySearch', () => {
  describe('imperative', () => {
    it('should work as expected', () => {
      expect(binarySearch(arr, 9)).toBe(-1);
      expect(binarySearch(arr, 1)).toBe(0);
      expect(binarySearch(arr, 5)).toBe(4);
      expect(binarySearch(arr, 8)).toBe(arr.length - 1);
    });
  });
  describe('recursive', () => {
    it('should work as expected', () => {
      expect(binarySearchRecursive(arr, 9)).toBe(-1);
      expect(binarySearchRecursive(arr, 1)).toBe(0);
      expect(binarySearchRecursive(arr, 5)).toBe(4);
      expect(binarySearchRecursive(arr, 8)).toBe(arr.length - 1);
    });
  });
});
