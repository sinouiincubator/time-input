import React from 'react';
import createTheme from 'sinoui-components/styles/theme';
import createPalette from 'sinoui-components/styles/palette';
import styled, { ThemeProvider } from 'styled-components';
import Paper from 'sinoui-components/Paper';
import TimeInput from '../../src/TimeInput';

const darkTheme = createTheme({
  palette: createPalette({
    type: 'dark',
  }),
});

const Wrapper = styled(Paper)`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export default function DarkThemeTimeInput() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <TimeInput />
      </Wrapper>
    </ThemeProvider>
  );
}
