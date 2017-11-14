import { combineReducers } from 'redux'
import * as SimpleStackNavigatorReducer from './SimpleStackNavigatorReducer'
import * as GoBackPropsReducer from './GoBackPropsReducer'

export default Object.assign(
	GoBackPropsReducer,
	SimpleStackNavigatorReducer
)
