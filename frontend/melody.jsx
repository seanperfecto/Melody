import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import * as Actions from './actions/song_actions';
import * as API from './util/song_api_util';

window.fetchSongs = Actions.fetchSongs;
window.fetchSong = Actions.fetchSong;
window.updateSong = Actions.updateSong;
window.createSong = Actions.createSong;
window.deleteSong = Actions.deleteSong;
window.fetchZong = API.fetchSong;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
  store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});
