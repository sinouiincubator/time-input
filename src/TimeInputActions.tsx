import React from 'react';
import BaseButton from 'sinoui-components/BaseButton';
import { MdClear, MdExpandLess, MdExpandMore } from 'react-icons/md';

/**
 * 时间输入框中的动作按钮
 */
function TimeInputActions({
  handleClear,
  handleUp,
  handleDown,
}: {
  handleClear: () => void;
  handleUp: () => void;
  handleDown: () => void;
}) {
  return (
    <div className="sinoui-time-input__actions-container">
      <BaseButton
        data-testid="timeInputClearAction"
        className="sinoui-time-input__clear-action"
        onClick={handleClear}
      >
        <MdClear />
      </BaseButton>
      <div className="sinoui-time-input__actions">
        <BaseButton
          className="sinoui-time-input__up-action"
          onClick={handleUp}
          data-testid="timeInputUpAction"
        >
          <MdExpandLess />
        </BaseButton>
        <BaseButton
          className="sinoui-time-input__down-action"
          onClick={handleDown}
          data-testid="timeInputDownAction"
        >
          <MdExpandMore />
        </BaseButton>
      </div>
    </div>
  );
}

export default React.memo(TimeInputActions);
