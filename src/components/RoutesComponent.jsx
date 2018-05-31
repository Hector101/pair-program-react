import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticateComponent from './AuthenticateComponent';
import LandingPageComponent from './LandingPageComponent';
import DashboardComponent from './DashboardComponent';
import LoginSignupComponent from './LoginSignupComponent';

class RoutesComponent extends React.Component {
  render () {
    return (
      <Fragment>
        <Switch>
          <AuthenticateComponent
            path='/dashboard'
            component={DashboardComponent}
          />
          <Route exact path='/auth' component={LoginSignupComponent} />
          <Route exact path='/' component={LandingPageComponent} />
          <Route path='*' component={LandingPageComponent} />
        </Switch>
      </Fragment>
    );
  }
};

export default RoutesComponent;
