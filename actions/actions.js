import {LOGIN} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'https://graph.facebook.com/v2.8'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export getLoginInfo(){
	// var status = FB.getLoginStatus(function(res){return res})
	var string = '{"status":"connected","authResponse":{"accessToken":"EAAIdhFdIIRoBADZCYGU7AJpzNMaPCyH2h3MN7DR3HTKmwoFZBZCia0JbaeKdfCnzubW0ad1oDxVyWdmQqtBfExcpl9Ye8XfO4tyycCZCajBuiZABQwBe5PfxsXZBalWB76cypd5EmwI8iayZCwKq1lamiKpWEIPmh08u6SHvnJXjB7O9sHxmMrvXeAOBryrUJoZD","userID":"1252367561518258","expiresIn":5589,"signedRequest":"gFy8JhnAy9pxGj63-whPyk5dWigoiji-FAIab0edoA0.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUM0RjJyek9GbEFJVEo2MlhZZy1sMlczdjlYdURuRzF2Vk1aUHJoTkpBLUVndmZ5cnhlcXhUVy1WX1BvQ2IxaEVIRXVzS2c4RGRXQ2dsNm1yby1qdFNyY19zaFpiMjZBN2xIX3VaeHVNZWlheGEwUWttR0lhWGxqOXl4TUhCbHBZT3RJX1VuWUx0U1BTdmtiZG0zYW1VdXpoMk5tYXV3NlJ2T3c5UVpyMWFZS2ZPemMtTUR4c1NqMFFMMWVnN3ZTS3lPcUJra0JON0t1SE5jRTVpZ2plNHNOeHlNUFJWWllDTi1iMmcwQkctV3ZIUGx4cHd6blFmTjFKZlNfTTJqMjg1ZzhCS0Q5RF9IOThueUVIVkpBbzVvYUtBY201U2FnTmFYQlRkMTVDenBmaGt4N1cxcXN2R285dUdTdTdVb29YUGJUYWxaTDl2SHZWRGZOSmdUNEVIZiIsImlzc3VlZF9hdCI6MTQ4NjYzMjQxMSwidXNlcl9pZCI6IjEyNTIzNjc1NjE1MTgyNTgifQ"}}'
	var status = JSON.parse(string)
	return {
		type:LOGIN,
		data : status
	}
}