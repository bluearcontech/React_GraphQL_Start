import React from 'react';

import LandingPage from './LandingPage';
import DashboardPageContainer from '../containers/DashboardPageContainer';

export default (props) => {
  return props.authenticated ? <DashboardPageContainer /> : <LandingPage />
}
