import React from 'react';
import { Modal, Tabs } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserLoginModalVisible } from '../../../redux/action/user.js';
import AppHeaderUserLogin from './app-header-user-login/index.js';
import AppHeaderUserRegister from './app-header-user-register/index.js';
import AppHeaderUserResetPassword from './app-header-user-resetPassword/index.js';
import './index.css'
const TabPane = Tabs.TabPane;

export class AppHeaderUser extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal 
        className="app-header-user"
        visible={this.props.loginModalVisible}
        onCancel={() => {this.props.onChangeUserLoginModalVisible(false)}}
        maskClosable={false}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="帐号登录" key="1">
            <div className="app-header-user-frame">
              <AppHeaderUserLogin/>
            </div>
          </TabPane>
          <TabPane tab="注册新账号" key="2">
            <div className="app-header-user-frame">
              <AppHeaderUserRegister/>
            </div>
          </TabPane>
          <TabPane tab="修改密码" key="3">
            <div className="app-header-user-frame">
              <AppHeaderUserResetPassword/>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginModalVisible: state.user.loginModalVisible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserLoginModalVisible: (modalVisible) => dispatch(doChangeUserLoginModalVisible(modalVisible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderUser);