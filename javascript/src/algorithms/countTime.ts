// ?5:00 -> 2
// ?0:0? -> 100
// ??:?? -> 1440
export default function countTime(time: string) {
  if (time.length !== 5) {
    return 0;
  }

  const [hour, minute] = time.split(':');
  return cal(hour) * cal(minute, 60);
}

export function cal(time: string, max = 24): number {
  if (!time.includes('?')) {
    return 1;
  }

  let tmp = time;
  let total = 0;

  for (let i = 0; i <= 9; i++) {
    tmp = time.replace('?', i + '');

    if (tmp.includes('?')) {
      total += cal(tmp, max);
    } else {
      if (parseInt(tmp, 10) < max) {
        total++;
      }
    }
  }

  return total > 0 ? total : 0;
}
