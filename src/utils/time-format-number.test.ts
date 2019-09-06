import { parseNumStr, formatNumValue, add } from './time-format-number';

it('格式化数字', () => {
  expect(parseNumStr('01')).toBe(1);
  expect(parseNumStr('12')).toBe(12);
  expect(parseNumStr('--')).toBeNaN();
});

it('格式化时间数字', () => {
  expect(formatNumValue(12)).toBe('12');
  expect(formatNumValue(1)).toBe('01');
});

it('"01" + 1 = "02"', () => {
  expect(add('01', 23, 1)).toBe('02');
});

it('"12" + 1 = "13"', () => {
  expect(add('12', 23, 1)).toBe('13');
});

// eslint-disable-next-line no-template-curly-in-string
it('"12" + 12 > max => "00"', () => {
  expect(add('12', 23, 12)).toBe('00');
});

it('"12" - 3 = "09"', () => {
  expect(add('12', 23, -3)).toBe('09');
});

// eslint-disable-next-line no-template-curly-in-string
it('"12" - 13 = "${max}"', () => {
  expect(add('12', 23, -13)).toBe('23');
});
