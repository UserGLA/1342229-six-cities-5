import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlacesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {placesCount} = this.props;
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found"> {placesCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
        </div>
      </section>
    );
  }
}

PlacesList.propTypes = {
  placesCount: PropTypes.number.isRequired,
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
};

export default PlacesList;
