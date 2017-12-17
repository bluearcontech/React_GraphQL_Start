import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import reducers from '../reducers'

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};  // Create the header object if needed.
		}

		// Get the authentication token from local storage if it exists
		req.options.headers.token = token ? token : null;
		next();
	}
}]);

export const client = new ApolloClient({
	networkInterface
});

export default (initial_state = {}) => {

	const store = createStore(
		combineReducers({
			apollo: client.reducer(),
			form: formReducer,
			auth: reducers,
		}),
		initial_state,
		composeWithDevTools(
			applyMiddleware(
				thunk
			)
		)
	)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers') // eslint-disable-line global-require
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
