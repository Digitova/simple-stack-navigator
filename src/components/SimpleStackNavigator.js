import React, {Component} from 'react'
import {connect} from 'react-redux'

import { getRoute } from '../library/getRoute'
import { navigate } from '../actions/SimpleStackNavigatorActions'


class SimpleStackNavigator extends Component {

	constructor(){
		super()
	}

	render() {
		const { route } = this.props
		const Template = route.component

		return <Template {...this.props} {...route.props} context='simple-stack-navigator' />
	}
}

const mapStateToProps = ({ simpleStack }, { routeConfig }) => {
	const key = simpleStack[simpleStack.length - 1]
		console.log(simpleStack)
	return {
		route: getRoute(key,routeConfig)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		navigate: (routeName) => dispatch(navigate(routeName))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleStackNavigator)