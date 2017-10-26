import React, {Component} from 'react'
import {connect} from 'react-redux'

import SimpleStackProvider from './SimpleStackProvider'
import SimpleStack from '../objects/SimpleStack'
import { getRoute } from '../library/getRoute'
import { getContext } from '../library/getContext'

class SimpleStackNavigator extends Component {

	constructor(props){
		super(props)

		this.simpleStackNavigation = new SimpleStack(this.props.dispatch)
	}

	render() {
		const { route } = this.props
		const Template = route.component
		const TemplateWithContext = getContext(SimpleStackProvider.childContextTypes)(Template)

		return (
			<SimpleStackProvider simpleStackNavigation={this.simpleStackNavigation} >
				<TemplateWithContext {...route.props} />
			</SimpleStackProvider>
		)
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
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleStackNavigator)