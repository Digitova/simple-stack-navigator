import * as types from '../actions/SimpleStackNavigatorActions'

const initialState = []

export const simpleStack = (state = initialState, action) => {
	switch (action.type) {
		case types.SIMPLE_STACK_PUSH_VIEW:
			return pushView(state, action)
		case types.SIMPLE_STACK_POP_VIEW:
			return popView(state, action)
		case types.SIMPLE_STACK_RESET_STACK:
			return resetStack(state,action)
		case types.SIMPLE_STACK_EMPTY_STACK:
			return emptyStack(state,action)
		case types.SIMPLE_STACK_WIPE_BACK_STACK:
			return wipeBackStack(state,action)
		default:
			return state
	}
}

const pushView = (state, action) => {
	return [
		...state,
		{
			routeName: action.routeName,
			props: action.props
		}
	]
}

const popView = (state, action) => {
	return state.slice(0, state.length-1)
}

const resetStack = (state, action) => {
	const stack = emptyStack(state, action)
	return pushView(stack, action)
}

const emptyStack = (state, action) => {
	return []
}

const wipeBackStack = (state, action) => {
	return state.slice(state.length-1, state.length)
}