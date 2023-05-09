/*
nums = [
  19 17 16 15
  10  1 14  4
   3  2 12 20
   7  5 18 11
   9  8  6 13
];
 */

export default function arraySnail(nums: number[], rowsCount: number, colsCount: number) {
  if (rowsCount <= 0 || colsCount <= 0 || rowsCount * colsCount !== nums.length) {
    return [];
  }

  let col = 0;
  const tmpArr = [];
  let isDown = true;
  for (;;) {
    const arr = nums.slice(col * rowsCount, (1 + col) * rowsCount);
    tmpArr.push(isDown ? arr : arr.reverse());
    isDown = !isDown;
    if (++col >= colsCount) {
      break;
    }
  }

  const arr: Array<number[]> = [];
  for (let i = 0; i < rowsCount; i++) {
    const list = [];
    for (let j = 0; j < colsCount; j++) {
      list.push(tmpArr[j][i]);
    }
    arr.push(list);
  }

  return arr;
}
