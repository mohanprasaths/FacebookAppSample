import {LOGIN,MYPROFILE} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'https://graph.facebook.com/v2.8'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export function getLoginInfo(){
	// var status = FB.getLoginStatus(function(res){return res})
	var string = '{"status":"connected","authResponse":{"accessToken":"EAAIdhFdIIRoBAEkNjNvgtm4CJDmHMaghSnVdNUzFLDlX4WZBAuYshFJyEUtFoT13xIXxx770dakA9mW2ZA8KZB4737MLcyJB0OxUs1ZCueYFrofxF3eZAhOKDZBOZB8AxR8YNqaWtpYgFGIZA4xR4U8Jjz8ciGtTE2vZCZCZBP5gY9JFLRye46sGZAthITACGy8OPR8ZD","userID":"1252367561518258","expiresIn":5509,"signedRequest":"X_lSTtAJl9xlaKrLXqG7CJXsMOOhRZgUun0nEJulS3s.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUNVcjM1czhrM0hPTTlXSl9xNXROSXhkU0tWLWNhRVB2eHd2Wm5QOE1DYUJFcmx5WVNCT2NzWTQ3ZWh3RXRoUzAyWXZ6UWlLQ0g0SlRpNDZZRUE3QTRkZFZYdmJwd1JNM1J4WGZXbHFNLWFYdUVqczVfVWZwLU03dVp6ZU9yTzVkZ0RoV0NOdWRkcEI4OWx6S0ZGenMzd25hbTBIY3U5XzVxRFFCYnAtYnB5enBMT05lM19wMlN0ZzFPeGdZeHRfTEp3OGY5SDliOExlemgwRWxsTXJoTElwS25KRy1aLXE1MGZXdm1GWkR4MW9mcDlQazhhVHZmMEk4WVZPaGlIcS1BS044U2FyUnJRcmhWa1hIc1lpc0tneHQzazg2TTdOZ0hDVHdERjlENVJQQzFKTW9sNjZxNVFibXZZUkpBcDVfck9lRXZzaHNnbExjQjBlR181M05XcyIsImlzc3VlZF9hdCI6MTQ4NzA3ODg5MSwidXNlcl9pZCI6IjEyNTIzNjc1NjE1MTgyNTgifQ"}}'
	var status = JSON.parse(string)
	if(status.status=="connected"){
		console.log("found")
		browserHistory.push('/questions');
		var logininfo={
		type:LOGIN,
		data : status
	}

	return dispatch => {
	  // Reducers may handle this to set a flag like isFetching
	  dispatch(LOGINUSER(logininfo))

	  // Perform the actual API call
	  return fetch(URL+'/me?fields=picture{url,width,is_silhouette,height},education{school{name}},work{employer{name}},devices,cover{source},name&oauth_token='+logininfo.data.authResponse.accessToken,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(
	    response => {
	      // Reducers may handle this to show the data and reset isFetching
	      
	      return response.json()
	    },
	    error => {
	      // Reducers may handle this to reset isFetching
	      dispatch({ type: 'GET_USER_FAILURE', id,  error })
	      // Rethrow so returned Promise is rejected
	      throw error
	    }
	  ).then((response)=>{console.log(response);dispatch(PROFILE(response))})
	}

	return null;
}
}
export function getUserInfo(){
	console.log("fine")
}

export function PROFILE(data){
	return {
		type : MYPROFILE,
		data : data
	}
}

export function LOGINUSER(data){
	return data
}

export function FBLOGIN(){
	return dispatch=>{FB.getLoginStatus(function(res){console.log("cool");dispatch(getUserInfo(res))},function(res){console.log("found")})}
}