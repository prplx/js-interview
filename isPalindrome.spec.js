import { isPalindromeRec, isPalindromeIt } from './isPalindrome';

describe('isPalindrome', () => {
  const string1 = 'racecar';
  const string2 = 'iTopiNonAvevanoNipoti';
  const string3 = 'Murder for a jar of red rum';
  const string4 = 'not a palindrome';

  describe('recursive', () => {
    it('should work as expected', () => {
      expect(isPalindromeRec(string1)).toBe(true);
      expect(isPalindromeRec(string2)).toBe(true);
      expect(isPalindromeRec(string3)).toBe(true);
      expect(isPalindromeRec(string4)).toBe(false);
    });
  });

  describe('iterative', () => {
    it('should work as expected', () => {
      expect(isPalindromeIt(string1)).toBe(true);
      expect(isPalindromeIt(string2)).toBe(true);
      expect(isPalindromeIt(string3)).toBe(true);
      expect(isPalindromeIt(string4)).toBe(false);
    });
  });
});
