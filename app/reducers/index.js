import { combineReducers } from 'redux';
import authReducer from './authReducer';
const initialState = null

const reducerAction = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const reducers = combineReducers({
	reducerAction,
	authReducer
})

export default reducers