import React from 'react';
	import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {getLoginInfo} from '../actions/actions.js'


var App = React.createClass({
pushToMainQuestions : function(){
  this.props.getInfo();
},
   render() {
      return (
      <div>
          <div className="row" > 
            Guess you have passed test???		
          </div>
         <div className="row">
          <FacebookLogin
          appId="595404190654746"
          autoLoad={true}
           fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          textButton="Play" 
          callback={pushToMainQuestions}/>
         </div>
         </div>
      );
   }
}
)
const mapStateToProps = (state) => {
  return {
  basic : state.basic.loginInfo,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
  getInfo : ()=>{ dispatch(getLoginInfo()) }

  }
}

const MyLogin = connect(mapStateToProps, mapDispatchToProps)(App);

export default MyLogin;