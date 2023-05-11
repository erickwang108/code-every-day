import lengthOfLongestSubstring from '../lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  it('should equal', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it('should equal', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
});
