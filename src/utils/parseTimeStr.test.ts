import parseTimeStr from './parseTimeStr';

it('解析时间字符串', () => {
  expect(parseTimeStr('01:00')).toEqual(['01', '00']);
});
