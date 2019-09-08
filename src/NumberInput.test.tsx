import { render, cleanup, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import NumberInput from './NumberInput';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('展现时间值', () => {
  const { getByTestId } = render(
    <NumberInput value="12" onChange={jest.fn()} max={23} />,
  );

  expect(getByTestId('timeNumberInput')).toHaveValue('12');
  expect(getByTestId('timeNumberInput')).toHaveClass(
    'sinoui-time-input__number-input',
  );
});

it('ref引用input dom', () => {
  const ref = React.createRef<HTMLInputElement>();
  const { getByTestId } = render(
    <NumberInput value="12" onChange={jest.fn()} max={23} ref={ref} />,
  );

  expect(ref.current).toBe(getByTestId('timeNumberInput'));
});

it('输入数字，值会变更', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="--" onChange={onChange} max={23} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '1',
    });
  });

  expect(onChange).toBeCalledWith('01');
});

it('空值情况下，输入两位数字后，可进入下一个输入框', () => {
  const handleInputEnd = jest.fn();

  function Demo() {
    const [value, setValue] = useState('--');

    return (
      <NumberInput
        value={value}
        onChange={setValue}
        max={23}
        onInputEnd={handleInputEnd}
      />
    );
  }

  const { getByTestId } = render(<Demo />);

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '0',
    });
  });

  act(() => {
    fireEvent.keyDown(input, {
      key: '1',
    });
  });

  expect(handleInputEnd).toBeCalled();
});

it('输入框获取到焦点，输入两位数字后，课进入下一个输入框', () => {
  const handleInputEnd = jest.fn();

  function Demo() {
    const [value, setValue] = useState('12');

    return (
      <NumberInput
        value={value}
        onChange={setValue}
        max={23}
        onInputEnd={handleInputEnd}
      />
    );
  }

  const { getByTestId } = render(<Demo />);

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '2',
    });
  });

  act(() => {
    fireEvent.keyDown(input, {
      key: '1',
    });
  });

  expect(handleInputEnd).toBeCalled();
});

it('输入的数字超过最大值，可进入下一个输入框', () => {
  const handleInputEnd = jest.fn();

  function Demo() {
    const [value, setValue] = useState('02');

    return (
      <NumberInput
        value={value}
        onChange={setValue}
        max={23}
        onInputEnd={handleInputEnd}
      />
    );
  }

  const { getByTestId } = render(<Demo />);

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '3',
    });
  });

  expect(handleInputEnd).toBeCalled();
});

it('输入的数字，如果再输入任意一位数字就会超过最大值，则可进入下一个输入框', () => {
  const handleInputEnd = jest.fn();

  function Demo() {
    const [value, setValue] = useState('00');

    return (
      <NumberInput
        value={value}
        onChange={setValue}
        max={23}
        onInputEnd={handleInputEnd}
      />
    );
  }

  const { getByTestId } = render(<Demo />);

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '3',
    });
  });

  expect(handleInputEnd).toBeCalled();
});

it('值为空时，输入一位数字，失去焦点，之后再输入两位数字（不违反以上规则的两位数字）才可进入下一个输入框', () => {
  const handleInputEnd = jest.fn();

  function Demo() {
    const [value, setValue] = useState('--');

    return (
      <NumberInput
        value={value}
        onChange={setValue}
        max={23}
        onInputEnd={handleInputEnd}
      />
    );
  }

  const { getByTestId } = render(<Demo />);

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: '1',
    });
  });

  act(() => {
    fireEvent.blur(input);
  });

  act(() => {
    fireEvent.keyDown(input, {
      key: '2',
    });
  });

  expect(handleInputEnd).not.toBeCalled();

  act(() => {
    fireEvent.keyDown(input, {
      key: '3',
    });
  });

  expect(handleInputEnd).toBeCalled();
});

it('按向下键值减一', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="--" onChange={onChange} max={23} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: 'ArrowDown',
    });
  });

  expect(onChange).toBeCalledWith('00');
});

it('按向上键值加一', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="12" onChange={onChange} max={23} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: 'ArrowUp',
    });
  });

  expect(onChange).toBeCalledWith('13');
});

it('按回格键（ Backspace ）值清空', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="12" onChange={onChange} max={23} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: 'Backspace',
    });
  });

  expect(onChange).toBeCalledWith('--');
});

it('按删除键（ Delete ）值清空', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="12" onChange={onChange} max={23} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.keyDown(input, {
      key: 'Delete',
    });
  });

  expect(onChange).toBeCalledWith('--');
});

it('触发失去焦点事件', () => {
  const onChange = jest.fn();
  const handleBlur = jest.fn();
  const { getByTestId } = render(
    <NumberInput value="12" onChange={onChange} max={23} onBlur={handleBlur} />,
  );

  const input = getByTestId('timeNumberInput');

  act(() => {
    fireEvent.blur(input);
  });

  expect(handleBlur).toBeCalled();
});
