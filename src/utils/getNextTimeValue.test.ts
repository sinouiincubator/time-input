import getNextTimeValue from './getNextTimeValue';

it('空值时，直接返回key', () => {
  expect(getNextTimeValue('--', 23, '9')).toBe(9);
});

it('个位数时，进位后的数不超过max，则返回进位数', () => {
  expect(getNextTimeValue('01', 23, '9')).toBe(19);
});

it('个位数时，进位后的数不超过max，则返回max', () => {
  expect(getNextTimeValue('02', 23, '9')).toBe(23);
});

it('双位数时，进位数不超过max，则返回进位数', () => {
  expect(getNextTimeValue('12', 23, '2')).toBe(22);
});

it('双位数时，进位数超过了max，则返回max', () => {
  expect(getNextTimeValue('12', 23, '9')).toBe(23);
});
