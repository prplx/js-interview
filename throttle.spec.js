import { jest } from '@jest/globals';
import { throttle } from './throttle';
import { sleep } from './index';

const fn = jest.fn();
const throttled = throttle(fn, 100);

describe('throttle', () => {
  afterEach(fn.mockReset);

  it('should work as expected in case 1', done => {
    for (let i = 0; i < 3; i++) {
      throttled();
    }
    expect(fn).toHaveBeenCalledTimes(1);
    done();
  });

  it('should work as expected in case 2', async done => {
    for (let i = 0; i < 3; i++) {
      await sleep(100);
      throttled();
    }
    expect(fn).toHaveBeenCalledTimes(3);
    done();
  });
});
