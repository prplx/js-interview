import { curry } from './curry';

describe('curry', () => {
  it('should work as expected', () => {
    const fn = (a, b, c, d) => a + b + c + d;
    expect(typeof curry(fn)(1)).toBe('function');
    expect(typeof curry(fn)(1, 2)).toBe('function');
    expect(typeof curry(fn)(1, 2, 3)).toBe('function');
    expect(typeof curry(fn)(1, 2, 3, 4)).toBe('number');
    expect(curry(fn)(1, 2, 3, 4)).toBe(10);
  });
});
