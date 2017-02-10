import {LOGIN,MYPROFILE} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'https://graph.facebook.com/v2.8'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export function getLoginInfo(){
	// var status = FB.getLoginStatus(function(res){return res})
	var string = '{"status":"connected","authResponse":{"accessToken":"EAAIdhFdIIRoBAIg6FCKxAlSdepZBinZAF3xtx8VZBb9cXprGhgumh35x1ZCILMYqcuGn1vYFfcgwneQOIe9hvddukbOzJuAxYhFAlhHDKGDvH0ZA1h8nxpz4b5TD0d6zv0hS1ovYdsIO9huC7gnCpiLPQDZATP9Eh5pku0HdZBIoHZBS3lpxRMkpOb5RehPP3pQZD","userID":"1252367561518258","expiresIn":4165,"signedRequest":"38Ez9zuAFTEdeNAUcRcau9771AHZc9_FyNyf_epyLYg.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUNLMHFSVHBnX3pVNWJaSXVyb2VmNXlvRm0tYkZXT1dhOEV3UGdCSTdueFJsaGViOUwwWUtXbjZiMHdWbFpCejJLN3A2RVJqeVRNTUZVamN5OHhNeDZIU0tlNjhkSTQ2M2RKbnE0VmwwT2ZHS1h0X21lLXJXMVNzck5UREp0R0xWV29rWFVycno1MVBDNjR6S2pMMXFzeUNmSlVZRkQteENzOXdVV3dKemtVZUFEVXBUR3hGdk14R3hoX2VtQ2lDTXZBVWkyTlVZZjFDenJ2eUJmTnN0STRjTDFyNWxOQThsVFIxMHQtOGxNSnE4bVd4OXhTVDlGZGlYR3RJQmxhYWo5MXNHTUhXM1BXYnJHQXB3bFVwMU1UNnhPaDVETFRQb1VzaFduX1NWUVR6dUxiWDB2SGpNYi01TFFuMVZsRFpSaEl4dGZFdXhuVEFwdTd5VVRWVl92SyIsImlzc3VlZF9hdCI6MTQ4NjcwNTgzNSwidXNlcl9pZCI6IjEyNTIzNjc1NjE1MTgyNTgifQ"}}'
	var status = JSON.parse(string)
	if(status.status=="connected"){
		browserHistory.push('/questions');
		var logininfo={
		type:LOGIN,
		data : status
	}

	return dispatch => {
	  // Reducers may handle this to set a flag like isFetching
	  dispatch(LOGINUSER(logininfo))

	  // Perform the actual API call
	  return fetch(URL+'/me?oauth_token='+logininfo.data.authResponse.accessToken,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(
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