import React from 'react'
import NoRoutesView from '../components/NoRoutesView'

export const getRoute = (target,routeConfig) => {
	const route = routeConfig.routes.find((element) => {
		return (element.routeName === target)
	})
	if (typeof route !== 'undefined') {
		return route
	} else {
		return {
			routeName: "none",
			component: NoRoutesView,
			props: {}
		}
	}
}