import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/tailwind.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// client-side rendering
//  --> firebase database
//  --> react-loading skeleton
//  --> tailwind
// Folder Structure

// src
//  --> components
//  --> constants
//  --> context
//  --> helpers
//  --> lib (firebase)
// --> services(firebase functions)
// --> styles
