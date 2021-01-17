import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './config/globalStyle';
import { theme } from './config/theme';
import Offers from './modules/offers/container';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Offers />
    </ThemeProvider>
  );
};
