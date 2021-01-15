import db from '../../db.json';

export const getOffersAndFilter = (
  automaticOnly: boolean,
  mustHaveGPS: boolean,
  moreThan2Bags: boolean,
  numberOfSeats: number,
  minAge: number,
  orderBy: string
) => {
  const { offers } = db;
  const filtered = offers.filter((offer) => {
    let result = true;
    if (automaticOnly) {
      result = result && offer.carGroupInfo.automatic;
    }
    if (mustHaveGPS) {
      result = result && offer.carGroupInfo.navigationSystem;
    }
    if (moreThan2Bags) {
      result =
        result &&
        (offer.carGroupInfo.baggage.bags > 2 ||
          offer.carGroupInfo.baggage.suitcases > 2);
    }
    result =
      result &&
      offer.carGroupInfo.maxPassengers >= numberOfSeats
      && offer.carGroupInfo.driverRequirements.minAge >= minAge;

    return result;
  });

  let sorted = filtered;

  if (orderBy === 'popularity') {
    sorted = filtered.sort(
      (offerA, offerB) =>
        offerB.sortIndexes.popularity - offerA.sortIndexes.popularity
    );
  } else if (orderBy === 'expensive') {
    sorted = filtered.sort(
      (offerA, offerB) =>
        offerB.prices.dayPrice.amount.value - offerA.prices.dayPrice.amount.value
    );
  } else if (orderBy === 'cheapest') {
    sorted = filtered.sort(
      (offerA, offerB) =>
        offerA.prices.dayPrice.amount.value - offerB.prices.dayPrice.amount.value 
    );
  }

  return sorted;
}; 
