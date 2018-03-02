import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class AppContentUser extends React.Component{
  componentWillMount(){
    if(!this.props.loginState){
      this.props.history.push({
        pathname: '/'
      })
    }
  }
  render(){
    return (
      <div>个人中心</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    loginState: state.user.loginState
  }
}

export default withRouter(connect(mapStateToProps)(AppContentUser));