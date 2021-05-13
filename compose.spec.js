import { compose } from './compose';

describe('compose', () => {
  const users = [
    { name: 'Jeff', age: 14 },
    { name: 'Jack', age: 18 },
    { name: 'Milady', age: 22 },
  ];
  const filter = cb => arr => arr.filter(cb);
  const map = cb => arr => arr.map(cb);

  it('should work as expected in case 1', () => {
    const composed = compose(
      map(u => u.name),
      filter(u => u.age > 14)
    );
    expect(composed(users)).toEqual(['Jack', 'Milady']);
  });

  it('should work as expected in case 2', () => {
    const composed = compose(
      filter(n => n.startsWith('J')),
      map(u => u.name)
    );
    expect(composed(users)).toEqual(['Jeff', 'Jack']);
  });
});
