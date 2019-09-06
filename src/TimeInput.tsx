import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import NumberInput from './NumberInput';
import parseTimeStr from './utils/parseTimeStr';
import { EMPTY_VALUE, KEY_ARROW_RIGHT, KEY_ARROW_LEFT } from './constants';
import { add } from './utils/time-format-number';
import TimeInputWrapper from './TimeInputWrapper';
import TimeInputActions from './TimeInputActions';

export interface Props {
  /**
   * 时间输入框值。例如 ''、 01:12、 13:12。
   */
  value?: string;
  /**
   * 添加值变更事件监听器
   */
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 不可用
   */
  disabled?: boolean;
}

/**
 * 时间输入框组件
 */
function TimeInput({
  value,
  onChange,
  className,
  style,
  readOnly,
  disabled,
}: Props) {
  const [hour, setHourState] = useState(() => parseTimeStr(value)[0]);
  const [minute, setMinuteState] = useState(() => parseTimeStr(value)[1]);
  const [isFocusing, setIsFocusing] = useState(false);
  const hourElementRef = useRef<HTMLInputElement>(null);
  const minuteElementRef = useRef<HTMLInputElement>(null);
  const isMinuteActiveRef = useRef<boolean>(false);
  const delayTimerIdRef = useRef<number>(-1);
  const timeRef = useRef<[string, string]>([hour, minute]);

  useEffect(() => {
    // 同步变化的value属性
    const [newHour, newMinute] = parseTimeStr(value);
    setHourState(newHour);
    setMinuteState(newMinute);
    timeRef.current = [newHour, newMinute];
  }, [value]);

  // 获取到活跃态输入框
  function active() {
    return isMinuteActiveRef.current ? 'minute' : 'hour';
  }

  // 聚焦小时输入框
  const focusHour = useCallback(() => {
    if (hourElementRef.current) {
      hourElementRef.current.focus();
    }
  }, []);

  // 聚焦分钟输入框
  const focusMinute = useCallback(() => {
    if (minuteElementRef.current) {
      minuteElementRef.current.focus();
    }
  }, []);

  // 变更时间值
  const changeTime = useCallback(
    (newHour: string, newMinute: string) => {
      const isValidTime = newHour !== EMPTY_VALUE && newMinute !== EMPTY_VALUE;
      const isEmptyTime = newHour === EMPTY_VALUE && newMinute === EMPTY_VALUE;

      setHourState(newHour);
      setMinuteState(newMinute);
      timeRef.current = [newHour, newMinute];

      if ((isValidTime || isEmptyTime) && onChange) {
        onChange(isEmptyTime ? '' : `${newHour}:${newMinute}`);
      }
    },
    [onChange],
  );

  // 处理小时输入框的输入结束事件
  const handleHourInputEnd = () => {
    focusMinute();
  };

  // 处理小时输入框的键盘事件
  const handleHourInputKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const { key } = event;

    if (key === KEY_ARROW_RIGHT) {
      focusMinute();
    }
  };

  // 处理分钟输入框的键盘事件
  const handleMinuteInputKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const { key } = event;

    if (key === KEY_ARROW_LEFT) {
      focusHour();
    }
  };

  // 清空值
  const handleClear = useCallback(() => {
    focusHour();
    changeTime(EMPTY_VALUE, EMPTY_VALUE);
  }, [focusHour, changeTime]);

  // 处理步进值变化（适合处理加一、减一这样的操作）
  const handleStepChange = useCallback(
    (num: number) => {
      clearTimeout(delayTimerIdRef.current);
      if (active() === 'hour') {
        changeTime(add(timeRef.current[0], 23, num), timeRef.current[1]);
        focusHour();
      } else if (active() === 'minute') {
        changeTime(timeRef.current[0], add(timeRef.current[1], 59, num));
        focusMinute();
      }
    },
    [changeTime, focusHour, focusMinute],
  );

  const handleUp = useCallback(() => {
    handleStepChange(1);
  }, [handleStepChange]);

  const handleDown = useCallback(() => {
    handleStepChange(-1);
  }, [handleStepChange]);

  if (readOnly || disabled) {
    return (
      <TimeInputWrapper
        className={classNames('sinoui-time-input', className, {
          'sinoui-time-input-contains-value':
            hour !== EMPTY_VALUE || minute !== EMPTY_VALUE,
        })}
        disabled={disabled}
        readOnly={readOnly}
        data-testid="timeInput"
      >
        <div className="sinoui-time-input-text-content">
          {hour}:{minute}
        </div>
      </TimeInputWrapper>
    );
  }

  return (
    <TimeInputWrapper
      data-testid="timeInput"
      className={classNames('sinoui-time-input', className, {
        'sinoui-time-input-contains-value':
          hour !== EMPTY_VALUE || minute !== EMPTY_VALUE,
      })}
      style={style}
      focused={isFocusing}
      onFocus={() => {
        setIsFocusing(true);
      }}
      onBlur={() => setIsFocusing(false)}
    >
      <NumberInput
        value={hour}
        onChange={(newHour) => changeTime(newHour, minute)}
        max={23}
        onInputEnd={handleHourInputEnd}
        onKeyDown={handleHourInputKeyDown}
        ref={hourElementRef}
        onFocus={() => {
          isMinuteActiveRef.current = false;
          clearTimeout(delayTimerIdRef.current);
        }}
      />
      <span>:</span>
      <NumberInput
        value={minute}
        max={59}
        ref={minuteElementRef}
        onChange={(newMinute) => changeTime(hour, newMinute)}
        onKeyDown={handleMinuteInputKeyDown}
        onFocus={() => {
          isMinuteActiveRef.current = true;
          clearTimeout(delayTimerIdRef.current);
        }}
        onBlur={() => {
          clearTimeout(delayTimerIdRef.current);
          // 延迟设置时间失去焦点状态，有可能是因为点击上下箭头按钮导致的失去焦点
          delayTimerIdRef.current = (setTimeout(() => {
            isMinuteActiveRef.current = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }, 500) as any) as number;
        }}
      />
      <TimeInputActions
        handleClear={handleClear}
        handleUp={handleUp}
        handleDown={handleDown}
      />
    </TimeInputWrapper>
  );
}

export default TimeInput;
