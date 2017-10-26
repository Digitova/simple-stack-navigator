import React, {Component} from 'react'
import {connect} from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

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
				<CSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					<TemplateWithContext {...route.props} />
				</CSSTransitionGroup>
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