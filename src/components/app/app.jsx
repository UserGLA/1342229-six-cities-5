import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

import MainPage from "../pages/main/main-page";
import FavoritesPage from "../pages/favorites/favorites-page";
import SignInPage from "../pages/sign-in/sign-in-page";
import RoomPage from "../pages/room/room-page";

const App = (props) => {
  const {placesCount} = props;
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            placesCount={placesCount}
            offers={offers}/>
        </Route>
        <Route exact path="/login" component = {SignInPage}/>
        <Route exact path="/favorites" component = {FavoritesPage}/>
        <Route exact path="/offer/:id" component = {RoomPage}/>
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
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

export default App;
