import React from 'react';
import { Divider, Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserDeliveryModalVisible, doDeleteUserDelivery } from '../../../../../redux/action/user';
import './index.css';

export class AppContentUserDeliveryAction extends React.Component{
  constructor(props){
    super(props);
    this.handleModify = this.handleModify.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    console.log(this.props.record);
    this.props.onDeleteUserDelivery(this.props.record['_id'], ()=>{
      message.info('删除成功')
    },()=>{
      message.info('删除失败')
    })
  }
  handleModify(){
    const { record, onChangeUserDeliveryModalVisible } = this.props;
    onChangeUserDeliveryModalVisible(true, 'modify', record.name, record.mobileNumber, record.address, record['_id'])
  }
  render(){
    return (
      <span>
        <span className="app-content-user-delivery-table-column-action-modify" onClick={this.handleModify}>修改</span>
        <Divider type="vertical" />
        <Popconfirm title='确定要删除吗' okText="确定" cancelText="取消" onConfirm={this.handleDelete}>
          <span className="app-content-user-delivery-table-column-action-delete">删除</span>
        </Popconfirm>
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingUserDelivery: state.user.isGettingUserDelivery,
    isGettingUserDeliverySuccessful: state.user.isGettingUserDeliverySuccessful,
    delivert: state.user.delivery
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserDeliveryModalVisible: (deliveryModalVisible, deliveryModalType, name, mobileNumber, address, currentDeliveryId) => dispatch(doChangeUserDeliveryModalVisible(deliveryModalVisible, deliveryModalType, name, mobileNumber, address, currentDeliveryId)),
    onDeleteUserDelivery: (deliveryId, successCallback, errCallback) => dispatch(doDeleteUserDelivery(deliveryId, successCallback, errCallback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserDeliveryAction);