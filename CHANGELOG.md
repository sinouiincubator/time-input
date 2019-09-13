# CHANGELOG

## v0.2.0 (2019.9.13)

- improve: 补充 NumberInput 完整的单元测试
- improve: 在 NumberInput 组件中更直接的实现 “跳转规则 5”
- breakchange: sinoui-components 0.1.30 -> 0.2.0.alpah.2
- breakchange: styled-components 3.4.10 -> 4.0.0+
- breakchange: 将 `sinoui-components` 和 `styled-components` 的依赖从 `dependencies` 迁移到 `peerDependencies` 中。

“跳转规则 5” 是指小时输入框中输入的数字超过 23 后会自动跳转到分钟输入框，之后回到小时输入框，应输入有效小时后才能自动跳转到分钟输入框。

## v0.1.0 (2019.9.7)

- feat: UI 与 Chrome 的 `<input type="time" />` 一致。
- feat: 支持 IE 11+ 和现代浏览器。
- feat: 键盘友好
  - 可以输入时间
  - 上、下方向键调整时间
  - 左、右和 tab 键在小时和分钟输入框之间切换
  - 删除（Delete）、回格（Backspace）键清除时间
- feat: 支持清除、上调、下调时间的按钮
- feat: 支持自定义样式
- feat: 易于与[Formik](https://jaredpalmer.com/formik/)、[@sinoui/rx-form-state](https://sinoui.github.io/sinoui-forms-library/)等表单库集成
