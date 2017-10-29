import React from 'react'
import * as actions from '../actions/SimpleStackNavigatorActions'

export default function SimpleStack(dispatch){
	this.dispatch = dispatch

	this.goBack = () => {
		this.dispatch(actions.goBack())
	}

	this.navigate = (routeName,props={}) => {
		this.dispatch(actions.navigate(routeName,props,true))
	}

	this.reset = (routeName,props={}) => {
		this.dispatch(actions.resetStack(routeName,props))
	}
}
