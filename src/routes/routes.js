import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';
import Main from '../layouts/Main/main';

import TracksMunster from '../views/tracks-munster/tracks-munster';

const Routes = () => {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/tracks"
        />
        <RouteWithLayout
          component={TracksMunster}
          exact
          layout={Main}
          path="/tracks"
        />
        {/* <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="/not-found"
        />
        <Redirect to="/not-found" /> */}
      </Switch>
    );
  };
  
  export default Routes;