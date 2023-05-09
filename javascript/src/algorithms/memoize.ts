/**
 * @param {Function} fn
 */
export default function memoize(fn) {
  const cache = {};
  return function (...args) {
    const ck = JSON.stringify(args);
    if (cache.hasOwnProperty(ck)) {
      return cache[ck];
    }
    const result = fn(...args);
    cache[ck] = result;
    return result;
  };
}
