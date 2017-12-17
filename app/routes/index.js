import { Router, Route, IndexRoute, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history';
import createStore from '../store'
import RequireAuth from '../containers/RequireAuth';
import App from '../components/App';
import NoMatch from '../components/NoMatch';
import SignUpPage from '../components/SignUpPage';
import SignInPage from '../components/SignInPage';
import HomePageContainer from '../containers/HomePageContainer';
import DashboardPageContainer from '../containers/DashboardPageContainer';
import Navbar from '../containers/NavbarContainer';
export default (store) => {
	const history = createBrowserHistory();
	const routes =
		<Router history={history}>
			<div>
				<Navbar />
				<Route exact path="/" component={HomePageContainer} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/signin" component={SignInPage} />
				<Route path="/dashboard" component={RequireAuth(DashboardPageContainer)} />
				{/*<Route component={NoMatch} />*/}
			</div>
		</Router>

	return routes
}