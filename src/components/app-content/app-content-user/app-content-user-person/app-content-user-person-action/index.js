import React from 'react';
import { Divider, Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserPersonModalVisible, doDeleteUserPerson, doChangeUserPersonSelectedRowKeys } from '../../../../../redux/action/user';
import './index.css';

export class AppContentUserPersonAction extends React.Component{
  constructor(props){
    super(props);
    this.handleModify = this.handleModify.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.onDeleteUserPerson(this.props.record['_id'], ()=>{
      message.info('删除成功');
      let key = this.props.record['_id'].key;
      this.props.onChangeUserPersonSelectedRowKeys(this.props.personSelectedRowKeys.filter((item, index) => {
        return item !== key;
      }))
    },()=>{
      message.info('删除失败')
    })
  }
  handleModify(){
    const { record, onChangeUserPersonModalVisible } = this.props;
    onChangeUserPersonModalVisible(true, 'modify', record.name, record.mobileNumber, record['_id'])
  }
  render(){
    return (
      <span>
        <span className="app-content-user-person-table-column-action-modify" onClick={this.handleModify}>修改</span>
        <Divider type="vertical" />
        <Popconfirm title='确定要删除吗' okText="确定" cancelText="取消" onConfirm={this.handleDelete}>
          <span className="app-content-user-person-table-column-action-delete">删除</span>
        </Popconfirm>
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingUserPerson: state.user.isGettingUserPerson,
    isGettingUserPersonSuccessful: state.user.isGettingUserPersonSuccessful,
    person: state.user.person,
    personSelectedRowKeys: state.user.personSelectedRowKeys
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserPersonModalVisible: (personModalVisible, personModalType, name, mobileNumber, currentPersonId) => dispatch(doChangeUserPersonModalVisible(personModalVisible, personModalType, name, mobileNumber, currentPersonId)),
    onDeleteUserPerson: (personId, successCallback, errCallback) => dispatch(doDeleteUserPerson(personId, successCallback, errCallback)),
    onChangeUserPersonSelectedRowKeys: (personSelectedRowKeys) => dispatch(doChangeUserPersonSelectedRowKeys(personSelectedRowKeys))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserPersonAction);
