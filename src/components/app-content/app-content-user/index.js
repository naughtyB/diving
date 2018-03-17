import React from 'react';
import { Menu, Spin, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import AppContentUserData from './app-content-user-data/index.js';
import AppContentUserOrder from './app-content-user-order/index.js';
import AppContentUserPerson from './app-content-user-person/index.js';
import AppContentUserDelivery from './app-content-user-delivery/index.js';
import { doChangeLoginState } from '../../../redux/action/user';
import './index.css'

let timer = null;
let pathnames = ['/user/userData', '/user/userOrder', '/user/userPerson', '/user/userDelivery'];

export class AppContentUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedKeys: ['userData']
    };
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }
  handleMenuSelect({item, key, selectedKeys}){
    if(selectedKeys[0] === key){
      this.setState(() => {
        return {
          selectedKeys: [key]
        }
      });
      this.props.history.push({
        pathname: '/user/' + key 
      })
    }
  }
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
      else{
        this.setState(() => {
          return {
            selectedKeys: [this.props.location.pathname.replace(/\/user\/([\S\s]+)/, '$1')]
          }
        })
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
        this.setState(() => {
          return {
            selectedKeys: [this.props.location.pathname.replace(/\/user\/([\S\s]+)/, '$1')]
          }
        })
        clearTimeout(timer);
      }
    }
    if(nextProps.loginState && this.props.location.pathname !== nextProps.location.pathname && pathnames.includes(nextProps.location.pathname)){
      this.setState(() => {
        return {
          selectedKeys: [nextProps.location.pathname.replace(/\/user\/([\S\s]+)/, '$1')]
        }
      })
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
              selectedKeys={this.state.selectedKeys}
              mode="inline"
              onSelect={this.handleMenuSelect}
            >
              <Menu.Item key="userData" className="app-content-user-menu-each">
                个人信息
              </Menu.Item>
              <Menu.Item key="userOrder" className="app-content-user-menu-each">
                我的订单
              </Menu.Item>
              <Menu.Item key="userPerson" className="app-content-user-menu-each">
                潜水人员管理
              </Menu.Item>
              <Menu.Item key="userDelivery" className="app-content-user-menu-each">
                收货地址管理
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
            <Route
              exact path="/user/userOrder"
              render={({history,location})=>{
                return <AppContentUserOrder
                  history={history}
                  location={location}
                />
              }}
            />
            <Route
              exact path="/user/userPerson"
              render={({history,location})=>{
                return <AppContentUserPerson
                  history={history}
                  location={location}
                />
              }}
            />
            <Route
              exact path="/user/userDelivery"
              render={({history,location})=>{
                return <AppContentUserDelivery
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