import flatArray from '../flatArray';

describe('flatArray', () => {
  it('should get correct array', () => {
    const nums = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    expect(flatArray(nums, 0)).toMatchObject(nums);
  });

  it('should get correct array', () => {
    const nums = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    expect(flatArray(nums, 1)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
  });

  it('should get correct array', () => {
    const nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ];
    expect(flatArray(nums, 2)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});
