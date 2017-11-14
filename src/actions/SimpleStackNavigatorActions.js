export const SIMPLE_STACK_PUSH_VIEW = 'SIMPLE_STACK_PUSH_VIEW'
export const SIMPLE_STACK_POP_VIEW = 'SIMPLE_STACK_POP_VIEW'
export const SIMPLE_STACK_RESET_STACK = 'SIMPLE_STACK_RESET_STACK'
export const SIMPLE_STACK_EMPTY_STACK = 'SIMPLE_STACK_EMPTY_STACK'
export const SIMPLE_STACK_WIPE_BACK_STACK = 'SIMPLE_STACK_WIPE_BACK_STACK'
export const SIMPLE_STACK_SET_GO_BACK_PROPS = 'SIMPLE_STACK_SET_GO_BACK_PROPS'

export function navigate(routeName, props = {}, simpleStackCall = false){
	return dispatch => {
		if(simpleStackCall){
			return dispatch(pushView(routeName,props))
		}
		dispatch(setGoBackProps())
		return dispatch(resetStack(routeName,props))
	}
}

export function goBack(props = {}){
	return dispatch => {
		dispatch(setGoBackProps(props))
		return dispatch(popView())
	}
}


export function pushView(routeName,props = {}) {
	return {
		type: SIMPLE_STACK_PUSH_VIEW,
		routeName,
		props
	}
}

export function popView(){
	return {
		type: SIMPLE_STACK_POP_VIEW,
	}
}

export function resetStack(routeName,props = {}){
	return {
		type: SIMPLE_STACK_RESET_STACK,
		routeName,
		props
	}
}

export function emptyStack(){
	return {
		type: SIMPLE_STACK_EMPTY_STACK,
	}
}

export function wipeBackStack(){
	return {
		type: SIMPLE_STACK_WIPE_BACK_STACK,
	}
}

export function setGoBackProps(props){
	return {
		type: SIMPLE_STACK_SET_GO_BACK_PROPS,
		props
	}
}