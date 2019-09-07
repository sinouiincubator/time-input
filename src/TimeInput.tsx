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
   * 时间输入框值。例如 ''、 01:12、 13:12。只支持 24 小时制时间格式，不支持 12 小时制时间格式。
   */
  value?: string;
  /**
   * 添加值变更事件监听器
   */
  onChange?: (value: string) => void;
  /**
   * 指定输入框的类名
   */
  className?: string;
  /**
   * 指定输入框的css样式
   */
  style?: React.CSSProperties;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 不可用
   */
  disabled?: boolean;

  /**
   * 指定时间输入框是否检验错误，如果是，则输入框显示验证错误 UI 。默认为 false 。
   */
  error?: boolean;

  /**
   * 添加聚焦事件监听器
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 添加失去焦点事件监听器
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 表单项名称
   */
  name?: string;

  /**
   * DOM 元素 id
   */
  id?: string;
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
  error,
  onFocus,
  onBlur,
  id,
  name,
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
      if (active() === 'hour') {
        changeTime(add(timeRef.current[0], 23, num), timeRef.current[1]);
        focusHour();
      } else {
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

  // 处理聚焦事件
  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    clearTimeout(delayTimerIdRef.current);

    const { target } = event;

    if (target === hourElementRef.current) {
      isMinuteActiveRef.current = false;
    }

    if (target === minuteElementRef.current) {
      isMinuteActiveRef.current = true;
    }

    if (!isFocusing) {
      setIsFocusing(true);
      if (onFocus) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onFocus(event as any);
      }
    }
  };

  // 处理失去焦点事件
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    clearTimeout(delayTimerIdRef.current);

    if (onBlur) {
      event.persist();
    }

    // 因点击三个操作按钮（清除、上、下）会出现blur和focus事件，所以需要延迟处理blur，以判断是否是此种情况失去的焦点
    delayTimerIdRef.current = setTimeout(() => {
      setIsFocusing(false);
      isMinuteActiveRef.current = false;
      if (onBlur) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onBlur(event as any);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, 100) as any;
  };

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
        error={error}
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      error={error}
    >
      <NumberInput
        value={hour}
        onChange={(newHour) => changeTime(newHour, minute)}
        max={23}
        onInputEnd={handleHourInputEnd}
        onKeyDown={handleHourInputKeyDown}
        ref={hourElementRef}
        name={name}
        id={id}
      />
      <span>:</span>
      <NumberInput
        value={minute}
        max={59}
        ref={minuteElementRef}
        onChange={(newMinute) => changeTime(hour, newMinute)}
        onKeyDown={handleMinuteInputKeyDown}
        name={name}
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
