import React from 'react'
import SimpleStackProvider from '../components/SimpleStackProvider'

export const connectSimple = Component => {
	class GetContext extends React.Component {
		render() {
			return <Component { ...this.props } { ...this.context } />
		}
	}

	GetContext.contextTypes = SimpleStackProvider.childContextTypes;

	return GetContext;
};