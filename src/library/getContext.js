import React from 'react'

export const getContext = contextTypes => Component => {
	class GetContext extends React.Component {
		render() {
			return <Component { ...this.props } { ...this.context } />
		}
	}

	GetContext.contextTypes = contextTypes;

	return GetContext;
};