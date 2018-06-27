import * as React from 'react'
import {connect} from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import SimpleStackProvider from './SimpleStackProvider'
import SimpleStack from '../objects/SimpleStack'
import { getRoute } from '../library/getRoute'
import getSimpleStackTemplate from '../library/getSimpleStackTemplate'

class SimpleStackNavigator extends React.Component {

	constructor(props){
		super(props)

		this.defaultPosition = 'absolute'

		this.state = {
			position: this.defaultPosition
		}

		this.simpleStackNavigation = new SimpleStack(this.props.dispatch)

		this.routeLibrary = props.routeConfig.routes.map((route,key) => {
			return {
				routeName: route.routeName,
				component: getSimpleStackTemplate(route.component),
				props: route.props
			}
		})
	}

	render() {

		return (
			<div>
				{this.injectStyles()}
				<SimpleStackProvider simpleStackNavigation={this.simpleStackNavigation} >
					<TransitionGroup>
						{ this.getItemsWithTransitions() }
					</TransitionGroup>
				</SimpleStackProvider>
			</div>
		)
	}

	getItemsWithTransitions = () => {
		const { simpleStack } = this.props

		return simpleStack.map((screen, key) => {
			const route = getRoute(screen.routeName,{ routes: this.routeLibrary } )
			const screenProps = screen.props
			const Template = route.component

			const isTopMostRoute = simpleStack.length === key + 1
			let className = 'stack-first'
			let positionStyle = {position: this.defaultPosition}

			if (!isTopMostRoute) {
				className = 'stack-under-first'
				positionStyle = {position: 'fixed'}
			}

			return (
				<CSSTransition
					key={key}
					classNames="simple-stack-item"
					timeout={{ enter: 500, exit: 500 }}
				>
					<div className={`simple-stack-template-wrapper ${className}`} style={positionStyle} >
						<Template {...screenProps} {...route.props} />
					</div>
				</CSSTransition>
			)
		})
	}

	injectStyles() {
		return (
			<style dangerouslySetInnerHTML={{__html:`
				.simple-stack-template-wrapper {
					background-color: #fff;
					position: absolute;
					top: 50px;
					bottom: 0;
					left: 0;
					right:0;
				}

				.simple-stack-item-enter {
					transform: translate3d(100%, 0, 0);
				}

				.simple-stack-item-enter.simple-stack-item-enter-active {
					transform: translate3d(0, 0, 0);
					transition: all 600ms;
				}

				.simple-stack-item-exit {
					transform: translate3d(100%, 0, 0);
					transition: all 600ms;
				}

				.simple-stack-item-exit-done {
					display: none
				}

				.simple-stack-item-exit.simple-stack-item-exit-active {
					transform: translate3d(100%, 0, 0);
				}

				.stack-first {
					opacity: 1;
				}

				.stack-under-first {
					transition: opacity 1000ms;
					opacity: 0;
				}
			`}} />
		)
	}

}

const mapStateToProps = ({ simpleStack }, { routeConfig }) => {
	return {
		simpleStack,
		routeConfig
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleStackNavigator)
