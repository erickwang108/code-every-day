import smallestRepunitDivByK from '../smallestRepunitDivByK';

describe('smallestRepunitDivByK', () => {
  it('should get 1', () => {
    expect(smallestRepunitDivByK(1)).toEqual(1);
  });

  it('not exist', () => {
    expect(smallestRepunitDivByK(2)).toEqual(-1);
  });

  it('should get 3', () => {
    expect(smallestRepunitDivByK(3)).toEqual(3);
  });
});
