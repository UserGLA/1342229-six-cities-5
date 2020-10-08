import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Property from "../property/property";

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Property />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
