import React from 'react';
import { Modal, Tabs } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserModalVisible } from '../../../redux/action/user.js';
import AppHeaderUserLogin from './app-header-user-login/index.js';
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
        visible={this.props.modalVisible}
        onCancel={() => {this.props.onChangeUserModalVisible(false)}}
        maskClosable={false}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="帐号登录" key="1">
            <div className="app-header-user-frame">
              <AppHeaderUserLogin/>
            </div>
          </TabPane>
          <TabPane tab="注册新账号" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="修改密码" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalVisible: state.user.modalVisible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserModalVisible: (modalVisible) => dispatch(doChangeUserModalVisible(modalVisible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderUser);