import React, {Component} from 'react'
import {connect} from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import SimpleStackProvider from './SimpleStackProvider'
import SimpleStack from '../objects/SimpleStack'
import { getRoute } from '../library/getRoute'
import { connectSimple } from '../library/connectSimple'

function injectStyles() {
	return {__html: "<style>" +
			".example-enter { transform: translate3d(100%, 0, 0); }"+
			".example-enter.example-enter-active { transform: translate3d(0, 0, 0); transition: all 600ms; }"+
			".example-leave { transform: translate3d(100%, 0, 0); transition: all 600ms; }"+
			".example-leave.example-leave-active { transform: translate3d(100%, 0, 0);  }"+
			"</style>"
	}
}

class SimpleStackNavigator extends Component {

	constructor(props){
		super(props)

		this.simpleStackNavigation = new SimpleStack(this.props.dispatch)
	}


	render() {
		const { stack, screens, routeConfig } = this.props
		const items = stack.map((screen,key)=>{
			const route = getRoute(screen.routeName,routeConfig)
			const screenProps = screen.props
			const Template = route.component
			const TemplateWithContext = connectSimple(Template)
			return (
				<div style={{ backgroundColor: '#fff', position: 'absolute', top: '50px', bottom: '0', left: '0', right:'0' }} key={key}>
					<TemplateWithContext {...route.props} {...screenProps} />
				</div>
			)
		})

		return (
			<div>
				<div dangerouslySetInnerHTML={injectStyles()} />
				<SimpleStackProvider simpleStackNavigation={this.simpleStackNavigation} >

					<CSSTransitionGroup
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						{ items }
					</CSSTransitionGroup>
				</SimpleStackProvider>
			</div>
		)
	}
}

const mapStateToProps = ({ simpleStack }, { routeConfig }) => {
	const key = simpleStack[simpleStack.length - 1]
		console.log(simpleStack)
	return {
		stack: simpleStack,
		screens: [simpleStack[simpleStack.length - 1]],
		routeConfig: routeConfig
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleStackNavigator)