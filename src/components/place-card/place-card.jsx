import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class PlaceCard extends PureComponent {
  constructor() {
    super();
  }
  render() {

    const {offer} = this.props;
    const isPremium = offer.mark ? `place-card__mark` : `place-card__mark visually-hidden`;

    return (
      <article className="cities__place-card place-card">
        <div className={isPremium}>
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.photos} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;{offer.priceText}</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
          </h2>
          <p className="place-card__type">{offer.featureEntire}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired
};

export default PlaceCard;
