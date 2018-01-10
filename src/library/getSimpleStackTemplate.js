// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getSimpleStackTemplate = ( Template ) => {
	return class extends Component {
		static contextTypes = {
			simpleStackNavigation: PropTypes.object,
		}

		render() {
			return <Template
				{ ...this.props }
				simpleStackNavigation={this.context.simpleStackNavigation}
			/>
		}
	}
};

export default getSimpleStackTemplate