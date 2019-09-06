import { parseNumStr } from './time-format-number';

/**
 * 获取下一个时间值
 *
 * @param value 原始值
 * @param max 最大值
 * @param key 新的个位数
 */
function getNextTimeValue(value: string, max: number, key: string) {
  if (Number.isNaN(parseNumStr(value))) {
    return parseInt(key, 10);
  }
  const currentValue =
    parseNumStr(value) === max || parseNumStr(value.substr(1)) * 10 > max
      ? key
      : `${value.substring(1)}${key}`;
  return Math.min(max, parseNumStr(currentValue));
}

export default getNextTimeValue;
