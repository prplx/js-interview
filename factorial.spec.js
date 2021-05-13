import { factorial } from './factorial';

describe('factorial', () => {
  it('should work as expected', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
    expect(factorial(20)).toBe(2432902008176640000);
  });
});
