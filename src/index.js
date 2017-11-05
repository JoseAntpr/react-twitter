import React, { Component } from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import App from './components/App'
const config = require('./config.js')


firebase.initializeApp({
    apiKey: config.firebaseConfig.apiKey,
    authDomain: config.firebaseConfig.authDomain,
    databaseURL: config.firebaseConfig.databaseURL,
    projectId: config.firebaseConfig.projectId,
    storageBucket: config.firebaseConfig.storageBucket,
    messagingSenderId: config.firebaseConfig.messagingSenderId
});





render(<App />, document.getElementById('root'))