import { Router, Route, IndexRoute, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history';
import App from '../components/App'
import createStore from '../store'

export default (store) => {
	const history = createBrowserHistory();
	const routes =
		<Router history={history}>
			<Route exact path="/" component={App} />
		</Router>

	return routes
}