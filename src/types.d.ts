import { Reducer } from 'redux';

declare namespace Sixt {
  export interface FullState {
    offers: OffersState;
  }
  export interface EmptyState {
    offers: unknown;
  }
  export interface Action {
    type: string;
    payload: FullState;
  }
  export interface AllReducersTypes {
    offers: OffersState | undefined | Reducer<unknown, any>;
  }
  export interface OffersState {
    listOfOffers: any[];
    automaticOnly: boolean;
    mustHaveGPS: boolean;
    moreThan2Bags: boolean;
    numberOfSeats: number;
    minAge: number;
    orderBy: string;
  }
  export interface Filters {
    automaticOnly?: boolean;
    mustHaveGPS?: boolean;
    moreThan2Bags?: boolean;
    numberOfSeats?: number;
    minAge?: number;
    orderBy?: string;
  }
}

export default Sixt;
