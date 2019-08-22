import React from 'react';
import {hot} from 'react-hot-loader/root';
import {compose} from 'redux';
import {connect} from 'react-redux';

const Component = () => <div>Hello World!</div>;

export const App = compose(
	hot,
	connect(state => state)
)(Component);
