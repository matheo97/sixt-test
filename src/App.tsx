import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './config/globalStyle';
import { theme } from './config/theme';
import Offers from './modules/offers/container';
import 'antd/dist/antd.less';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Offers />
    </ThemeProvider>
  );
};
