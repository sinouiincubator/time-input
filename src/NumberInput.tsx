import React, { useRef } from 'react';
import { parseNumStr, add, formatNumValue } from './utils/time-format-number';
import {
  KEY_TAB,
  NUMBER_REGEXP,
  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
  KEY_BACKSPACE,
  KEY_DELETE,
  EMPTY_VALUE,
} from './constants';
import getNextTimeValue from './utils/getNextTimeValue';

interface Props {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onInputEnd?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  max: number;
  ref?: React.Ref<HTMLInputElement>;
}

/**
 * 两位数字输入框
 */
const NumberInput: React.SFC<Props> = React.forwardRef(
  (
    {
      value,
      onChange,
      onKeyDown,
      onInputEnd,
      onFocus,
      onBlur,
      max,
      ...rest
    }: Props,
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    const keyIndexRef = useRef<number>(0);

    /**
     * 在文本内容上加上指定数字
     *
     * @param num 数字
     */
    const addNumToText = (num: number) => {
      onChange(add(value, max, num));
    };

    /**
     * 触发输入结束事件
     */
    function fireInputEndEvent() {
      keyIndexRef.current = 0;
      if (onInputEnd) {
        onInputEnd();
      }
    }

    /**
     * 处理键盘事件
     */
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      const { key } = event;

      if (key !== KEY_TAB) {
        event.stopPropagation();
        event.preventDefault();
      }

      if (NUMBER_REGEXP.test(key)) {
        const nextValue = getNextTimeValue(value, max, key);

        if ((nextValue < 10 && nextValue * 10 > max) || nextValue >= max) {
          fireInputEndEvent();
        } else if (Number.isNaN(parseNumStr(value))) {
          keyIndexRef.current = 1;
        } else if (keyIndexRef.current === 1) {
          fireInputEndEvent();
        } else {
          keyIndexRef.current = 1;
        }

        onChange(formatNumValue(nextValue));
      } else if (key === KEY_ARROW_UP) {
        addNumToText(1);
      } else if (key === KEY_ARROW_DOWN) {
        addNumToText(-1);
      } else if (key === KEY_BACKSPACE || key === KEY_DELETE) {
        onChange(EMPTY_VALUE);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      keyIndexRef.current = 0;
      if (onBlur) {
        onBlur(event);
      }
    }

    return (
      <input
        data-testid="timeNumberInput"
        className="sinoui-time-input__number-input"
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={onFocus}
        ref={ref}
        value={value}
        readOnly
        {...rest}
      />
    );
  },
);

export default NumberInput;
