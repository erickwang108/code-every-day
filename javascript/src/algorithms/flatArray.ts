export default function flatArray(nums: any[], deep = 0) {
  if (deep === 0) {
    return nums;
  }

  const res = flatArray(nums, deep - 1);
  return [].concat(...res);
}
