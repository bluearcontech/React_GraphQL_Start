import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import 'react-hot-loader/patch';
import { syncHistoryWithStore, push } from 'react-router-redux';
import createStore from './store'
import createRoutes from './routes'

const initialState = {};
const store = createStore(initialState);
let routes = createRoutes(store)
const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
const client = new ApolloClient({
	networkInterface
});
//When page refresh store could not save original state.
//To get original store state dispatch loginUser action with sessionId

ReactDOM.render(
	<ApolloProvider store={store} client={client}>
		{routes}
	</ApolloProvider>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept('./reducers', () => {
		ReactDOM.render(
			<ApolloProvider store={store} client={client}>
				{routes}
			</ApolloProvider>,
			document.getElementById('app')
		)
	})
}


