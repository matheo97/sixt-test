import { GET_OFFERS, UPDATE_FILTERS } from '../constants/actions';
import { getOffersAndFilter } from '../db/db';
import Sixt from '../types';

const getOffers = (
  automaticOnly: boolean,
  mustHaveGPS: boolean,
  moreThan2Bags: boolean,
  numberOfSeats: number,
  minAge: number,
  orderBy: string,
  page: number,
) => {
  const offers = getOffersAndFilter(
    automaticOnly,
    mustHaveGPS,
    moreThan2Bags,
    numberOfSeats,
    minAge,
    orderBy,
    page
  );
  return {
    type: GET_OFFERS,
    payload: {
      ...offers,
    },
  };
};

const updateFilters = (
  filters: Sixt.Filters
) => {
  const offers = getOffersAndFilter(
    filters.automaticOnly,
    filters.mustHaveGPS,
    filters.moreThan2Bags,
    filters.numberOfSeats,
    filters.minAge,
    filters.orderBy,
    1
  );
  return {
    type: UPDATE_FILTERS,
    payload: {
      ...filters,
      ...offers,
    },
  };
};

export default {
  getOffers,
  updateFilters,
};
