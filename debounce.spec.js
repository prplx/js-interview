import { jest } from '@jest/globals';
import { debounce } from './debounce';
import { sleep } from './index';

describe('debounce', () => {
  const fn = jest.fn();
  const debounced = debounce(fn, 100);

  afterEach(fn.mockReset);

  it('should work as expected in case 1', async done => {
    for (let i = 0; i < 0; i++) {
      debounced();
    }
    debounced();
    await sleep(100);
    expect(fn).toBeCalledTimes(1);
    done();
  });

  it('should work as expected in case 2', async done => {
    for (let i = 0; i < 5; i++) {
      debounced();
      await sleep(100);
    }
    expect(fn).toBeCalledTimes(5);
    done();
  });
});
