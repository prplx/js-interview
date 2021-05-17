import { jest } from '@jest/globals';
import { EventEmitter } from './eventEmitter';

describe('eventEmitter', () => {
  const mock = jest.fn();
  let em;

  beforeEach(() => {
    em = new EventEmitter();
    mock.mockClear();
  });

  it('should work as expected in case of a single event emitting', () => {
    em.on('test', () => mock('test'));
    em.emit('test');
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith('test');
  });
  it('should work in case of double event emitting', () => {
    em.on('test2', () => mock('test2'));
    em.emit('test');
    expect(mock).toBeCalledTimes(0);
    em.emit('test2');
    em.emit('test2');
    expect(mock).toBeCalledTimes(2);
    expect(mock.mock.calls).toEqual([['test2'], ['test2']]);
  });
  it('shoud work in case of once', () => {
    em.once('test3', () => mock('test3'));
    em.emit('test3');
    em.emit('test3');
    expect(mock).toBeCalledTimes(1);
  });
  it('should remove listeners in case of off', () => {
    const cb = () => mock('test4');
    em.on('test4', cb);
    em.emit('test4');
    em.off('test4', cb);
    em.emit('test4');
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith('test4');
  });
});
