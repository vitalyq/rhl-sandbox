import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from './App';

const store = createStore((state = {}) => state);
const root = document.createElement('div');

document.body.appendChild(root);
ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), root);
