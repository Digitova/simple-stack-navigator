import React from 'react'
import * as actions from '../actions/SimpleStackNavigatorActions'

export default function SimpleStack(dispatch){
	this.dispatch = dispatch

	this.goBack = () => {
		this.dispatch(actions.goBack())
	}

	this.navigate = (routeName) => {
		this.dispatch(actions.navigate(routeName,true))
	}

	this.reset = (routeName) => {
		this.dispatch(actions.resetStack(routeName))
	}
}
