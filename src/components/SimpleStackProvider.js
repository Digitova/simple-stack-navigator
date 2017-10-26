import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

export default class SimpleStackProvider extends Component {
	static propTypes = {
		simpleStackNavigation: PropTypes.object,
	}

	// you must specify what you’re adding to the context
	static childContextTypes = {
		simpleStackNavigation: PropTypes.object,
	}

	getChildContext() {
		return {
			simpleStackNavigation: this.props.simpleStackNavigation
		};
	}

	render() {
		return Children.only(this.props.children)
	}
}
