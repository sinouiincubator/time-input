import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'sinoui-components/styles';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-test-renderer';
import TimeInput from './TimeInput';

afterEach(cleanup);

it('展现空的时间', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  expect(hour).toHaveValue('--');
  expect(minute).toHaveValue('--');
});

it('展现有效时间', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  expect(hour).toHaveValue('01');
  expect(minute).toHaveValue('12');
});

it('展现不同的时间', () => {
  const { getAllByTestId, rerender } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  act(() => {
    rerender(
      <ThemeProvider theme={defaultTheme}>
        <TimeInput value="13:13" />
      </ThemeProvider>,
    );
  });

  expect(hour).toHaveValue('13');
  expect(minute).toHaveValue('13');
});

it('输入无效时间不会触发onChange事件', () => {
  const handleChange = jest.fn();
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value={undefined} onChange={handleChange} />
    </ThemeProvider>,
  );

  const [hour] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(hour, {
      key: '1',
    });
  });

  expect(handleChange).not.toBeCalled();
});

it('输入有效时间触发onChange事件', () => {
  const handleChange = jest.fn();
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" onChange={handleChange} />
    </ThemeProvider>,
  );

  const [hour] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(hour, {
      key: '1',
    });
  });

  expect(handleChange).toBeCalledWith('11:12');
});

it('点击清空按钮，清空值', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" onChange={handleChange} />
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('timeInputClearAction'));
  });

  expect(handleChange).toBeCalledWith('');
});

it('无焦点元素时，点击向上按钮，小时数加一', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" onChange={handleChange} />
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('timeInputUpAction'));
  });

  expect(handleChange).toBeCalledWith('02:12');
});

it('分钟输入框获取到焦点，点击向上按钮，分钟加一', () => {
  const handleChange = jest.fn();
  const { getByTestId, getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" onChange={handleChange} />
    </ThemeProvider>,
  );

  const [, minute] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.focus(minute);
  });

  act(() => {
    fireEvent.click(getByTestId('timeInputUpAction'));
  });

  expect(handleChange).toBeCalledWith('01:13');
});

it('点击向下按钮，减一', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="01:12" onChange={handleChange} />
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('timeInputDownAction'));
  });

  expect(handleChange).toBeCalledWith('00:12');
});

it('小时输入框输入有效值后，自动跳转到分钟输入框', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="19:12" />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(hour, {
      key: '9',
    });
  });

  expect(minute).toHaveFocus();
});

it('在小时输入框中按向右的箭头，自动跳转到分钟输入框', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="19:12" />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(hour, {
      key: 'ArrowRight',
    });
  });

  expect(minute).toHaveFocus();
});

it('在分钟输入框中按向左的箭头，自动跳转到小时输入框', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="19:12" />
    </ThemeProvider>,
  );

  const [hour, minute] = getAllByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(minute, {
      key: 'ArrowLeft',
    });
  });

  expect(hour).toHaveFocus();
});

it('只读展示', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="19:12" readOnly />
    </ThemeProvider>,
  );

  expect(getByTestId('timeInput')).toHaveTextContent('19:12');
});

it('不可用', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TimeInput value="19:12" disabled />
    </ThemeProvider>,
  );

  expect(getByTestId('timeInput')).toHaveTextContent('19:12');
});
