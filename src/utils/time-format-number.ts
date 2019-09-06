/**
 * 解析时间数字字符串
 *
 * @param str
 */
export function parseNumStr(str: string) {
  if (str === '0') {
    return 0;
  }

  return parseInt(str.replace(/^0/, ''), 10);
}

/**
 * 格式化时间数字
 *
 * @param num 数字
 */
export function formatNumValue(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 * 在value上增加num
 *
 * @param value 原始值
 * @param max 最大值
 * @param num 新增的数字
 */
export function add(value: string, max: number, num: number) {
  const prevValue = parseNumStr(value);

  if (Number.isNaN(prevValue)) {
    return '00';
  }
  const currentValue = prevValue + num;
  if (currentValue < 0) {
    return formatNumValue(max);
  }
  if (currentValue > max) {
    return formatNumValue(0);
  }
  return formatNumValue(currentValue);
}
