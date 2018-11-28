import React from 'react';
import ReactDOM from 'react-dom';
import './style/style';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

import { reduxFirestore , getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, 
     compose (
          applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
          reduxFirestore(fbConfig),
          reactReduxFirebase(fbConfig, {attachAuthIsReady: true , useFirestoreForProfile: true, userProfile: 'users'})
     )
);

store.firebaseAuthIsReady.then(() => {
     ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
})


