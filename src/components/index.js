import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter} from "react-router-dom";
import AppContent from './app-content/index.js';
import AppHeader from './app-header/index.js';
import AppHeaderUser from './app-header/app-header-user/index.js';
import './index.css';

const { Header, Content } = Layout;

class AppLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header ss='gg' style={{backgroundColor: 'white', height: 'auto', boxShadow: '0 2px 8px #f0f1f2', position: 'relative', zIndex: '10'}}>
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

export default AppLayout;