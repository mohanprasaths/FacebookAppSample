import React from 'react'

var LoginPage = React.createClass({
	render : function(){
	return(
		<div>
		ss
		{this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }

		</div>)
	}
})

export default LoginPage;