import React from 'react';
import ReactDOM from 'react-dom';
import * as Action from './actions/session_actions';
import configureStore from './store/store';

window.requestSignin = Action.requestSignin;
window.requestSignup = Action.requestSignup;
window.requestSignout = Action.requestSignout;

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Melody</h1>, root);
});
