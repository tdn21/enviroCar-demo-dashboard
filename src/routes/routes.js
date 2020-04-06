import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';
import Main from '../layouts/Main/main';
import Minimal from '../layouts/Minimal/minmal';

import TracksMunster from '../views/tracks-munster/tracks-munster';
import NotFound from '../views/not-found/NotFound';

const Routes = () => {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/munster/tracks"
        />
        <RouteWithLayout
          component={TracksMunster}
          exact
          layout={Main}
          path="/munster/tracks"
        />
        <RouteWithLayout
          component={NotFound}
          exact
          layout={Minimal}
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  };
  
  export default Routes;