import { GET_OFFERS, UPDATE_FILTERS } from '../constants/actions';
import { getOffersAndFilter } from '../db/db';
import Sixt from '../types';

const getOffers = (
  automaticOnly: boolean,
  mustHaveGPS: boolean,
  moreThan2Bags: boolean,
  numberOfSeats: number,
  minAge: number,
  orderBy: string
) => {
  const offers = getOffersAndFilter(
    automaticOnly,
    mustHaveGPS,
    moreThan2Bags,
    numberOfSeats,
    minAge,
    orderBy
  );
  return {
    type: GET_OFFERS,
    payload: {
      listOfOffers: offers,
    },
  };
};

const updateFilters = (
  filters: Sixt.Filters
) => {
  return {
    type: UPDATE_FILTERS,
    payload: {
      ...filters
    },
  };
};

export default {
  getOffers,
  updateFilters,
};
