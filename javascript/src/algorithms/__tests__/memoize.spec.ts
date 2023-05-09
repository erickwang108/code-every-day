import memoize from '../memoize';

describe('memoize', () => {
  it('sum func', () => {
    let callCount = 0;
    const memoizedFn = memoize(function (a, b) {
      callCount += 1;
      return a + b;
    });
    const res1 = memoizedFn(2, 3);
    const res2 = memoizedFn(2, 3);
    expect(callCount).toEqual(1);
    expect(res1).toEqual(5);
    expect(res2).toEqual(5);
  });

  it('factorial func', () => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    const memoFactorial = memoize(factorial);
    const res1 = memoFactorial(2); // 返回 2。
    const res2 = memoFactorial(3); // 返回 6。
    const res3 = memoFactorial(2); // 返回 2
    const res4 = memoFactorial(3); // 返回 6

    expect(res1).toEqual(2);
    expect(res2).toEqual(6);
    expect(res3).toEqual(2);
    expect(res4).toEqual(6);
  });
});
