import { isPrime } from './isPrime';

describe('isPrime', () => {
  it('should work as expected', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(20)).toBe(false);
    expect(isPrime(31)).toBe(true);
  });
});
