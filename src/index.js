import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Firebase from './firebase_configuration';
import App from './App'
import Firebase from './component/Firebase/FIREBASE'
import Firebasecontext from './component/Firebase/FirebaseContext';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signUp'
import Firebase, {ContextFirebase}  from './components/Firebase/index'
ReactDOM.render(
  <ContextFirebase.Provider value={new Firebase()}>
    <App />
   </ContextFirebase.Provider>
   ,document.getElementById('root')
);
reportWebVitals();
