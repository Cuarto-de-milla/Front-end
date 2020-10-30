import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthComponent = ({
	component: Component,
	path,
	exact,
	logged,
	authorized,
}) => {
	if (logged && authorized) {
		return (
			<Route component={Component} path={path} exact={exact} />
		);
	}

	return <Redirect to='/' />;
};

const NoAuthComponent = ({
	component: Component,
	path,
	exact,
	authorized,
	logged,
}) => {
	if (logged && authorized) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<Route component={Component} path={path} exact={exact} />
	);
};

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export const AuthenticatedRoute = AuthComponent;

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export const UnauthenticatedRoute = NoAuthComponent;
