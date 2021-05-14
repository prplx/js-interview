import { stringPermutations } from './stringPermutations';

describe('stringPermutations', () => {
  it('should work as expected', () => {
    expect(stringPermutations()).toBe('Wrong argument type');
    expect(stringPermutations('a')).toBe('a');
    expect(stringPermutations('ab')).toEqual(['ab', 'ba']);
    expect(stringPermutations('abc')).toEqual([
      'abc',
      'acb',
      'bac',
      'bca',
      'cab',
      'cba',
    ]);
    expect(stringPermutations('aba')).toEqual(['aba', 'aab', 'baa']);
  });
});
