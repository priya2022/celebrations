import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import Router from './Router';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import saveReducer from './components/Features/Save';
import userReducer from './components/Features/User'
import ListingReducer from './components/Features/List'
import challengeReducer from './components/Features/challenges'
import FeatureReducer from './components/Features/PublicSlice'

const store = configureStore({
    reducer:{
        listing:ListingReducer,
        save:saveReducer,
        user:userReducer,
        challenge:challengeReducer,
        feature:FeatureReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <Router />
    </Provider>
   

);

