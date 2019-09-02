const isMatch = require('./10.regular-expression-matching');

test('Regular Expression Matching', () => {
  expect(isMatch('aa', 'a')).toBe(false);
  expect(isMatch('aa', 'a*')).toBe(true);
  expect(isMatch('ab', '.*')).toBe(true);
  expect(isMatch('aab', 'c*a*b')).toBe(true);
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
});