/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'sinoui-components/styles';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import { action } from '@storybook/addon-actions';
import TimeInput from '../src/TimeInput';

function TimeInputDemo2() {
  const [value, setValue] = useState('');

  function handleChange(newValue: string) {
    action('change')(newValue);
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value={value} onChange={handleChange} />
    </ThemeProvider>
  );
}

storiesOf('time-input', module)
  .add('基本用法', () => (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <div>原生</div>
        <input type="time" />
        <div>time input</div>
        <TimeInput />
      </div>
    </ThemeProvider>
  ))
  .add('监听值变化', () => <TimeInputDemo2 />)
  .add('只读', () => (
    <ThemeProvider theme={defaultTheme}>
      <TimeInput readOnly value="01:12" />
    </ThemeProvider>
  ))
  .add('焦点事件', () => (
    <ThemeProvider theme={defaultTheme}>
      <TimeInput onFocus={action('focus')} onBlur={action('blur')} />
    </ThemeProvider>
  ));
