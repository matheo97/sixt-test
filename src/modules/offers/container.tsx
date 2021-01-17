import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { Typography } from '../../atoms';
import Sixt from '../../types';
import sixtLogo from '../../images/sixt-logo.png';
import { SortAscendingOutlined, FilterOutlined } from '@ant-design/icons';
import {
  CardSection,
  Container,
  ContentContainer,
  FilterSection,
  Header,
  SubHeader,
} from './container.styles';
import Modal from '../../atoms/modal/container';
import { Filters } from '../../components';
import { Card, Pagination } from 'antd';
import Meta from 'antd/lib/card/Meta';

const Offers = () => {
  const {
    automaticOnly,
    mustHaveGPS,
    moreThan2Bags,
    numberOfSeats,
    minAge,
    orderBy,
    listOfOffers,
    total,
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
        orderBy,
        1
      )
    );
  }, []);

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const onChangePagination = (page: number, pageSize: number) => {
    dispatch(
      actions.offers.getOffers(
        automaticOnly,
        mustHaveGPS,
        moreThan2Bags,
        numberOfSeats,
        minAge,
        orderBy,
        page
      )
    );
  };

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
            {total} Offers
          </Typography>
          <div className='filters'>
            <FilterOutlined
              onClick={() => setShowFiltersModal(true)}
              style={{ fontSize: '1.4rem' }}
            />
            <SortAscendingOutlined
              style={{
                fontSize: '1.4rem',
                marginLeft: '.5rem',
                cursor: 'pointer',
              }}
              onClick={() => setShowFiltersModal(true)}
            />
          </div>
        </div>
      </SubHeader>
      <ContentContainer>
        <FilterSection>
          <div className='content'>
            <Filters
              setShowFiltersModal={setShowFiltersModal}
              insideModal={false}
            />
          </div>
        </FilterSection>
        <CardSection>
          <div className='offers'>
            {listOfOffers.map((offer) => (
              <Card
                hoverable
                style={{ width: 240, height: 240, margin: 10 }}
                cover={
                  <img
                    alt='car image'
                    width={'220px'}
                    height={'151px'}
                    src={offer.image}
                  />
                }
              >
                <Meta
                  title={offer.name}
                  description={`$ ${offer.price} per day`}
                />
              </Card>
            ))}
          </div>
          <Pagination
            defaultPageSize={9}
            total={total}
            onChange={onChangePagination}
            className='pagination'
          />
        </CardSection>
      </ContentContainer>
      {showFiltersModal && (
        <Modal
          show={showFiltersModal}
          onClose={() => setShowFiltersModal(false)}
        >
          <Filters
            setShowFiltersModal={setShowFiltersModal}
            insideModal={true}
          />
        </Modal>
      )}
    </Container>
  );
};

export default Offers;
