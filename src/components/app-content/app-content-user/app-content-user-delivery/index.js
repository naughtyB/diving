import React from 'react';
import { Table, Icon, Button, Spin } from 'antd';
import { doGetUserDelivery, doChangeUserDeliveryModalVisible, doChangeUserDeliverySelectedRowKeys } from '../../../../redux/action/user';
import AppContentUserDeliveryChange from './app-content-user-delivery-change/index.js';
import AppContentUserDeliveryAction from './app-content-user-delivery-action/index.js';
import { connect } from 'react-redux';
import './index.css';

const columns = [{
  title: '收货人',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '联系方式',
  dataIndex: 'mobileNumber',
  key: 'mobileNumber',
}, {
  title: '收货地址',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <AppContentUserDeliveryAction record={record}/>
  ),
}];


export class AppContentUserDelivery extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(selectedRowKeys){
    this.props.onChangeUserDeliverySelectedRowKeys(selectedRowKeys);
  }
  handleAdd(){
    this.props.onChangeUserDeliveryModalVisible(true, 'add');
  }
  componentWillMount(){
    this.props.onGetUserDelivery();
  }
  render(){
    const {isGettingUserDelivery, isGettingUserDeliverySuccessful, delivery, beCanSelected, deliverySelectedRowKeys} = this.props;
    if(!isGettingUserDelivery && isGettingUserDeliverySuccessful){
      const data = delivery.map((item, index) => {
        return {
          ...item,
          key: item['_id']
        }
      });
      const rowSelection = beCanSelected ? {
        selectedRowKeys: deliverySelectedRowKeys,
        onChange: this.handleSelectChange,
        type: 'radio'
      } : null;
      return (
        <Spin spinning={false}>
          <div>
            <div className="app-content-user-delivery-add-frame">
              <Button type="primary" className="app-content-user-delivery-add-button" onClick={this.handleAdd}>添加</Button>
            </div>
            <Table columns={columns} rowSelection={rowSelection} dataSource={data} pagination={false} locale={{emptyText: '暂无收货信息，请先添加'}}></Table>
            <AppContentUserDeliveryChange/>
          </div>
        </Spin>
      )
    }
    else if(isGettingUserDelivery){
      return (
        <Spin spinning={true}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
    else{
      return (
        <div>网络连接失败  请重新刷新</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingUserDelivery: state.user.isGettingUserDelivery,
    isGettingUserDeliverySuccessful: state.user.isGettingUserDeliverySuccessful,
    delivery: state.user.delivery,
    deliverySelectedRowKeys: state.user.deliverySelectedRowKeys
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserDelivery: () => dispatch(doGetUserDelivery()),
    onChangeUserDeliveryModalVisible: (deliveryModalVisible, deliveryModalType) => dispatch(doChangeUserDeliveryModalVisible(deliveryModalVisible, deliveryModalType)),
    onChangeUserDeliverySelectedRowKeys: (deliverySelectedRowKeys) => dispatch(doChangeUserDeliverySelectedRowKeys(deliverySelectedRowKeys))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserDelivery);