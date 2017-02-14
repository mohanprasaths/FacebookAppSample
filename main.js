import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ContentPage from './components/ContentPage.jsx'
import QuestionsPage from './components/QuestionsPage.jsx';
import AppMainPage from './components/AppMainPage.jsx';
import NotFound from './components/NotFound.jsx';
import LoginPage from './components/LoginPage.jsx';
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import myApp from './reducers/reducers'
import {Provider } from 'react-redux'
import configureStore from './configureStore'
import {createStore} from 'redux'
let store = configureStore();


ReactDOM.render(
	<Provider store={store} >
	<Router history = {browserHistory}>
	<Route path = "/" component = {AppMainPage}>		
	  <IndexRoute component = {ContentPage}/>
	  <Route path = "/questions" component = {QuestionsPage} />
	  <Route path="/answers" component={QuestionsPage}/>
	  <Route path="*" component={NotFound}/>
	  	  <Route path="login" component={LoginPage}/>
	  </Route>
	  <Route path="/logins" component={LoginPage}/>

	</Router>
	</Provider>
	, document.getElementById('app'));