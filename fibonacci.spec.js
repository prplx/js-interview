import { fib } from './fibonacci';

describe('fibonacci', () => {
  it('should work as expected', () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(5)).toBe(5);
    expect(fib(8)).toBe(21);
    expect(fib(10)).toBe(55);
  });
});
