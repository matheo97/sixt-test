import * as actions from '../../constants/actions';
import initState from './initialState';
import Sixt from '../../types';

interface Payload {
  listOfOffers: [];
  filters: {
    automaticOnly?: boolean;
    mustHaveGPS?: boolean;
    moreThan2Bags?: boolean;
    numberOfSeats?: number;
    minAge?: number;
    orderBy?: string;
  }
}

const offersReducer = (
  state: Sixt.OffersState = initState,
  { type, payload }: { type: string; payload: Payload }
) => {
  switch (type) {
    case actions.GET_OFFERS:
      return {
        ...state,
        listOfOffers: [
          ...payload.listOfOffers,
        ]
      };
    case actions.UPDATE_FILTERS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default offersReducer;
