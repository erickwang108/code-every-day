import arraySnail from '../arraySnail';

describe('arraySnail', () => {
  it('should get correct array', () => {
    const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
    expect(arraySnail(nums, 5, 4)).toMatchObject([
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ]);
  });

  it('should get correct array', () => {
    const nums = [1, 3];
    expect(arraySnail(nums, 2, 2)).toMatchObject([]);
  });

  it('should get correct array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    expect(arraySnail(nums, 6, 3)).toMatchObject([]);
  });
});
