import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import AppContentUserDeliveryChangeForm from './app-content-user-delivery-change-form/index';
import { doChangeUserDeliveryModalVisible } from '../../../../../redux/action/user';
import './index.css';

export class AppContentUserDeliveryChange extends React.Component{
  constructor(props){
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel(){
    this.props.onChangeUserDeliveryModalVisible(false);
  }
  render(){
    return (
      <Modal
        className="app-content-user-delivery-change"
        visible={this.props.deliveryModalVisible}
        maskClosable={false}
        footer={null}
        onCancel={this.handleCancel}
      >
        <AppContentUserDeliveryChangeForm/>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deliveryModalVisible: state.user.deliveryModalVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserDeliveryModalVisible: (deliveryModalVisible, deliveryModalType) => dispatch(doChangeUserDeliveryModalVisible(deliveryModalVisible, deliveryModalType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserDeliveryChange);