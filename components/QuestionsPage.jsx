import React from 'react'
import {connect} from 'react-redux';
import {getLoginInfo,getUserInfo} from '../actions/actions.js'
var _ = require('lodash');

var QuestionPage = React.createClass({
componentDidMount:function(){
},
	render : function(){
	return(
		<div>
		{_.get(this.props,'basic.profileInfo.name',"User")}
		</div>
		)
	}
})

const mapStateToProps = (state) => {
  return {
  basic : state.basic,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
  getInfo : ()=>{ dispatch(getLoginInfo()) },
  getUserInfo : ()=>{ dispatch(getUserInfo()) }

  }
}



const MyQuestionPage = connect(mapStateToProps, mapDispatchToProps)(QuestionPage);

export default MyQuestionPage;