import styled, { css } from 'styled-components';
import { InputWrapper } from 'sinoui-components/TextInput';

const focusRules = css`
  & .sinoui-time-input__actions,
  &.sinoui-time-input-contains-value .sinoui-time-input__clear-action {
    visibility: visible;
  }
`;

const TimeInputWrapper = styled(InputWrapper)`
  display: inline-flex;
  flex-direction: row;
  font-size: 1rem;
  font-family: monospace;
  align-items: center;
  height: 32px;

  color: ${(props) => props.theme.palette.text.primary};

  .sinoui-time-input-text-content {
    padding-left: 2px;
    padding-right: 2px;
  }

  .sinoui-time-input__number-input {
    display: inline-block;
    padding: 2px;
    line-height: 1.5em;
    cursor: default;
    caret-color: transparent;
    outline: transparent;
    border: none;
    background: transparent;
    width: 1.2em;
    color: inherit;
    transition: background-color 0.3s;
    font-size: inherit;
  }

  .sinoui-time-input__number-input:focus {
    background-color: #b5d5ff;
  }

  .sinoui-time-input__clear-action {
    visibility: hidden;

    color: ${(props) =>
      props.theme.palette.type === 'light'
        ? props.theme.palette.primary[500]
        : 'white'};
    font-weight: 700;
    height: 1rem;
    width: 1rem;
  }

  .sinoui-time-input__actions {
    visibility: hidden;

    width: 20px;
    height: 30px;
    background-color: ${(props) =>
      props.theme.palette.type === 'light' ? '#f5f5f5' : 'white'};
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .sinoui-time-input__actions > * {
    transition: background-color 0.3s;
  }

  ${(props) => props.focused && focusRules};

  .sinoui-time-input__actions-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &:hover .sinoui-time-input__actions,
  &.sinoui-time-input-contains-value:hover .sinoui-time-input__clear-action {
    visibility: visible;
  }

  .sinoui-time-input__actions > *:hover {
    background-color: #e5e2e2;
  }
`;

export default TimeInputWrapper;
