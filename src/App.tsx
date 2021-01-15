import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from './components/atoms/typography';
import { GlobalStyle } from './config/globalStyle';
import { theme } from './config/theme';
import Sixt from './types';
import actions from './actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const App = (): JSX.Element => {
  const {
    automaticOnly,
    mustHaveGPS,
    moreThan2Bags,
    numberOfSeats,
    minAge,
    orderBy,
  } = useSelector((state: Sixt.FullState) => state.offers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.offers.getOffers(
        automaticOnly,
        mustHaveGPS,
        moreThan2Bags,
        numberOfSeats,
        minAge,
        orderBy
      )
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Typography appearance='title' as='h1'>
          Sixt
        </Typography>
        <Typography appearance='text'>Sixt Test for Mateo Salazar. </Typography>
      </Container>
    </ThemeProvider>
  );
};
