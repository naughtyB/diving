import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import AppContentUserPersonChangeForm from './app-content-user-person-change-form/index';
import { doChangeUserPersonModalVisible } from '../../../../../redux/action/user';
import './index.css';

export class AppContentUserPersonChange extends React.Component{
  constructor(props){
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel(){
    this.props.onChangeUserPersonModalVisible(false);
  }
  render(){
    return (
      <Modal
        className="app-content-user-person-change"
        visible={this.props.personModalVisible}
        maskClosable={false}
        footer={null}
        onCancel={this.handleCancel}
      >
        <AppContentUserPersonChangeForm/>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personModalVisible: state.user.personModalVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserPersonModalVisible: (personModalVisible, personModalType) => dispatch(doChangeUserPersonModalVisible(personModalVisible, personModalType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserPersonChange);