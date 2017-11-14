import * as types from '../actions/SimpleStackNavigatorActions'

export const simpleStackGoBackProps = (state = {}, action) => {
	console.log("here!!!!")
	if (action.type === types.SIMPLE_STACK_SET_GO_BACK_PROPS) {
		return Object.assign({},state,action.props)
	} else {
		return state
	}
}
