import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
import './sass/App.scss';

firebase.initializeApp({
  apiKey: "AIzaSyApu4L5M6f-w2S6yiVFHCQ_4K3XQMgcLE4",
  authDomain: "gasprice-85c9b.firebaseapp.com",
  databaseURL: "https://gasprice-85c9b.firebaseio.com",
  projectId: "gasprice-85c9b",
  storageBucket: "gasprice-85c9b.appspot.com",
  messagingSenderId: "74314683986",
  appId: "1:74314683986:web:3b58f23975df5a5dad318b",
  measurementId: "G-1GSN2L7134"
});

ReactDOM.render(<App />, document.getElementById('app'));
