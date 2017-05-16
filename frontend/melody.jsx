import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as Action from './actions/session_actions';
import configureStore from './store/store';

window.requestSignin = Action.requestSignin;
window.requestSignup = Action.requestSignup;
window.requestSignout = Action.requestSignout;

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
