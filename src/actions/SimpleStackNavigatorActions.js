export const SIMPLE_STACK_PUSH_VIEW = 'SIMPLE_STACK_PUSH_VIEW'
export const SIMPLE_STACK_POP_VIEW = 'SIMPLE_STACK_POP_VIEW'
export const SIMPLE_STACK_RESET_STACK = 'SIMPLE_STACK_RESET_STACK'
export const SIMPLE_STACK_EMPTY_STACK = 'SIMPLE_STACK_EMPTY_STACK'

export function navigate(routeName, context = 'external-call'){
	return dispatch => {
		if(context === 'simple-stack-navigator'){
			return dispatch(pushView(routeName))
		}
		return dispatch(resetStack(routeName))
	}
}

export function goBack(){
	return dispatch => {
		return dispatch(popView())
	}
}


export function pushView(routeName) {
	return {
		type: SIMPLE_STACK_PUSH_VIEW,
		routeName
	}
}

export function popView(){
	return {
		type: SIMPLE_STACK_POP_VIEW,
	}
}

export function resetStack(routeName){
	return {
		type: SIMPLE_STACK_RESET_STACK,
		routeName
	}
}

export function emptyStack(){
	return {
		type: SIMPLE_STACK_EMPTY_STACK,
	}
}
