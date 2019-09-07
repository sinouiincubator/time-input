# @sinouiincubator/time-input

用于输入时间的键盘友好的 React 组件。

查看[文档](https://sinouiincubator.github.io/time-input/)。

## 特性

- UI 与 Chrome 的 `<input type="time" />` 一致。
- 支持 IE 11+ 和现代浏览器。
- 键盘友好
  - 可以输入时间
  - 上、下方向键调整时间
  - 左、右和 tab 键在小时和分钟输入框之间切换
  - 删除（Delete）、回格（Backspace）键清除时间
- 支持清除、上调、下调时间的按钮
- 100% 测试覆盖率
- 支持自定义样式
- 易于与[Formik](https://jaredpalmer.com/formik/)、[@sinoui/rx-form-state](https://sinoui.github.io/sinoui-forms-library/)等表单库集成

## 安装

```shell
yarn add @sinouiincubator/time-input
```

## 使用

```tsx
import React, { useState } from 'react';
import TimeInput from '@sinouiincubator/time-input';

function Demo() {
  const [value, setValue] = useState('');

  return <TimeInput value={value} onChange={setValue} />;
}
```

更多内容查看[文档](https://sinouiincubator.github.io/time-input/)。
