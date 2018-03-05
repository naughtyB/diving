import React from 'react';
import { Menu, Spin, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import AppContentUserData from './app-content-user-data/index.js';
import { doChangeLoginState } from '../../../redux/action/user';
import './index.css'

let timer = null;
let pathnames = ['/user/userData']
export class AppContentUser extends React.Component{
  componentWillMount(){
    if(pathnames.includes(this.props.location.pathname)){
      if(!this.props.loginState){
        timer = setTimeout(() => {
          this.props.history.push({
            pathname: '/'
          })
          message.info('请先进行登录');
        },5000)
      }
    }
    else{
      this.props.history.push({
        pathname: '/'
      })
    }
  }
  componentWillUpdate(nextProps){
    if(this.props.loginState !== nextProps.loginState){
      if(!nextProps.loginState){
        this.props.history.push({
          pathname: '/'
        });
        message.info('请先进行登录');
      }
      else{
        clearTimeout(timer);
      }
    }
  }
  componentWillUnmount(){
    clearTimeout(timer);
  }
  render(){
    if(this.props.loginState){
      return (
        <div className="app-content-user">
          <div className="app-content-user-menu">
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['userData']}
              mode="inline"
            >
              <Menu.Item key="userData" className="app-content-user-menu-each">
                个人信息
              </Menu.Item>
              <Menu.Item key="userOrder" className="app-content-user-menu-each">
                我的订单
              </Menu.Item>
            </Menu>
          </div>
          <div className="app-content-user-introduce">
            <Route
              exact path="/user/userData"
              render={({history,location})=>{
                return <AppContentUserData
                  history={history}
                  location={location}
                />
              }}
            />
          </div>
        </div>
      )
    }
    else{
      return (
        <Spin spinning={true}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    loginState: state.user.loginState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLoginState: (loginState) => dispatch(doChangeLoginState(loginState))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContentUser));