import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <PlaceCard
          key={offer.id}
          offer={offer}
        />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.bool,
    photos: PropTypes.string.isRequired,
    name: PropTypes. string.isRequired,
    raiting: PropTypes.number,
    featureEntire: PropTypes.string.isRequired,
    featureBadrooms: PropTypes.number.isRequired,
    featureAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    propertyInside: PropTypes.array.isRequired,
    hostUserImg: PropTypes.string,
    hostUserName: PropTypes.string.isRequired,
    propertyDescription: PropTypes.string
  })).isRequired
};

export default OffersList;
