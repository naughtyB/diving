import React from 'react';
import { Table, Icon, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { doGetUserPerson, doChangeUserPersonModalVisible, doChangeUserPersonSelectedRowKeys } from '../../../../redux/action/user';
import AppContentUserPersonChange from './app-content-user-person-change/index.js';
import AppContentUserPersonAction from './app-content-user-person-action/index.js';
import './index.css';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '联系方式',
  dataIndex: 'mobileNumber',
  key: 'mobileNumber',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <AppContentUserPersonAction record={record}/>
  ),
}];



export class AppContentUserPerson extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(selectedRowKeys){
    this.props.onChangeUserPersonSelectedRowKeys(selectedRowKeys);
  }
  handleAdd(){
    this.props.onChangeUserPersonModalVisible(true, 'add');
  }
  componentWillMount(){
    this.props.onGetUserPerson();
  }
  render(){
    const {isGettingUserPerson, isGettingUserPersonSuccessful, person, beCanSelected, personSelectedRowKeys } = this.props;
    if(!isGettingUserPerson && isGettingUserPersonSuccessful){
      const data = person.map((item, index) => {
        return {
          ...item,
          key: item['_id']
        }
      })
      const rowSelection = beCanSelected ? {
        selectedRowKeys: personSelectedRowKeys,
        onChange: this.handleSelectChange
      } : null;
      return (
        <Spin spinning={this.props.isDeletingUserPerson}>
          <div>
            <div className="app-content-user-person-add-frame">
              <Button type="primary" className="app-content-user-person-add-button" onClick={this.handleAdd}>添加</Button>
            </div>
            <Table className="app-content-user-person-table" rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} locale={{emptyText: '暂无人员，请先添加'}}></Table>
            <AppContentUserPersonChange/>
          </div>
        </Spin>
      )
    }
    else if(isGettingUserPerson){
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
    isGettingUserPerson: state.user.isGettingUserPerson,
    isGettingUserPersonSuccessful: state.user.isGettingUserPersonSuccessful,
    person: state.user.person,
    isDeletingUserPerson: state.user.isDeletingUserPerson,
    personSelectedRowKeys: state.user.personSelectedRowKeys
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserPerson: () => dispatch(doGetUserPerson()),
    onChangeUserPersonModalVisible: (personModalVisible, personModalType) => dispatch(doChangeUserPersonModalVisible(personModalVisible, personModalType)),
    onChangeUserPersonSelectedRowKeys: (personSelectedRowKeys) => dispatch(doChangeUserPersonSelectedRowKeys(personSelectedRowKeys))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserPerson);