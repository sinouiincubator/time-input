import { EMPTY_VALUE } from '../constants';
import { parseNumStr, formatNumValue } from './time-format-number';

function toNumValue(str: string) {
  return formatNumValue(!Number.isNaN(parseNumStr(str)) ? parseNumStr(str) : 0);
}

export default function parseTimeStr(value?: string): [string, string] {
  if (value) {
    const [first, last] = value.split(':');
    return [toNumValue(first), toNumValue(last)];
  }
  return [EMPTY_VALUE, EMPTY_VALUE];
}
