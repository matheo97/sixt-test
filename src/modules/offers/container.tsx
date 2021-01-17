import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { Typography } from '../../components/atoms/typography';
import Sixt from '../../types';
import sixtLogo from '../../images/sixt-logo.png';

import {
  CardSection,
  Container,
  ContentContainer,
  FilterSection,
  Header,
  SubHeader,
} from './container.styles';

const Offers = () => {
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
    <Container>
      <Header>
        <div className='content'>
          <img src={sixtLogo} alt='logo' />
        </div>
      </Header>
      <SubHeader>
        <div className='content'>
          <Typography appearance='title' as='h1'>
            17 Offers
          </Typography>
          <div className='filters'>
            <Typography appearance='title' as='h1'>
              Order
            </Typography>
            <Typography appearance='title' as='h1'>
              Filter
            </Typography>
          </div>
        </div>
      </SubHeader>
      <ContentContainer>
        <FilterSection />
        <CardSection />
      </ContentContainer>
    </Container>
  );
};

export default Offers;
