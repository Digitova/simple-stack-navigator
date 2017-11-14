import React from 'react'
import * as actions from '../actions/SimpleStackNavigatorActions'

export default function SimpleStack(dispatch){
	this.dispatch = dispatch

	this.goBack = (props) => {
		this.dispatch(actions.goBack(props))
	}

	this.navigate = (routeName,props={}) => {
		this.dispatch(actions.navigate(routeName,props,true))
	}

	this.reset = (routeName,props={}) => {
		this.dispatch(actions.resetStack(routeName,props))
	}

	this.wipeBackStack = () => {
		this.dispatch(actions.wipeBackStack())
	}
}
