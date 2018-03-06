import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import AppContent from './app-content/index.js';
import AppHeader from './app-header/index.js';
import AppHeaderUser from './app-header/app-header-user/index.js';
import { doChangeLoginState } from '../redux/action/user';
import Cookies from 'js-cookie';
import './index.css';

const { Header, Content } = Layout;



class AppLayout extends Component {
  componentWillMount(){
    let userId = Cookies.get('userId');
    let mobileNumber = Cookies.get('mobileNumber');
    if(userId && mobileNumber){
      fetch('/server/user/autoLogin',{
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'mobileNumber=' + encodeURIComponent(mobileNumber) + '&userId=' + encodeURIComponent(userId)
      }).then(res => {
        return res.json();
      }).then(res => {
        if(res.isCorrect){
          this.props.onChangeLoginState(true);
        }
      })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header style={{backgroundColor: 'white', height: 'auto', boxShadow: '0 2px 8px #f0f1f2', position: 'relative', zIndex: '10'}}>
            <AppHeader/>
          </Header>
          <Content>
            <AppContent/>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLoginState: (loginState) => dispatch(doChangeLoginState(loginState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);