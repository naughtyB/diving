import React from 'react';
import { Alert, Button, message } from 'antd';
import { connect } from 'react-redux';
import { doChangePracticeAppointmentStep } from '../../../../redux/action/practice';
import { doCreatePracticeAppointmentOrder } from '../../../../redux/action/user';
import { withRouter } from 'react-router-dom';
import './index.css';

export class AppContentPracticeAppointmentThird extends React.Component{
  constructor(props){
    super(props);
    this.handleLast = this.handleLast.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLast(){
    this.props.onChangePracticeAppointmentStep(1);
  }
  handleSubmit(){
    let { onCreatePracticeAppointmentOrder, practiceAppointmentFirstFields, person, personSelectedRowKeys } = this.props;
    let successCallback = () => {
      message.info('预定练习成功');
      this.props.history.push({
        pathname: '/user/userOrder'
      })
    }
    let otherErrCallback = () => {
      message.info('创建订单失败  请重新提交')
    }
    let loginErrCallback = () => {
      message.info('尚未登录  请先登录')
    }
    onCreatePracticeAppointmentOrder(JSON.stringify({
      person: person.filter((item, index) => {
        return personSelectedRowKeys.includes(item['_id'])
      }).map((item, index) => {
        return {name: item.name, mobileNumber: item.mobileNumber}
      }),
      practiceTime: {date: practiceAppointmentFirstFields['practiceDate']['value'].format('YYYY-MM-DD'), time: practiceAppointmentFirstFields['practiceTime']['value']},
      practiceId: this.props.practiceData.filter((item, index) => {
        return item.name === practiceAppointmentFirstFields['gymnasium']['value']
      })[0]['_id']
    }), successCallback, otherErrCallback, loginErrCallback)
  }
  render(){
    return (
      <div>
        <div className="app-content-practice-appointment-thirdSteps-content">
          <Alert message="目前尚未支持付款系统，只需按下完成按钮即可" type="success"/>
        </div>
        <div className="app-content-practice-appointment-thirdSteps-action">
          <Button type="primary" onClick={this.handleLast} className="app-content-practice-appointment-thirdSteps-action-last">上一步</Button>
          <Button type="primary" onClick={this.handleSubmit} loading={this.props.isCreatingPracticeOrder}>完成</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personSelectedRowKeys: state.user.personSelectedRowKeys,
    person: state.user.person,
    practiceAppointmentFirstFields: state.practice.practiceAppointmentFirstFields,
    practiceData: state.practice.data,
    isCreatingPracticeOrder: state.user.isCreatingPracticeOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePracticeAppointmentStep: (step) => dispatch(doChangePracticeAppointmentStep(step)),
    onCreatePracticeAppointmentOrder: (orderData, successCallback, otherErrCallback, loginErrCallback) => dispatch(doCreatePracticeAppointmentOrder(orderData, successCallback, otherErrCallback, loginErrCallback))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContentPracticeAppointmentThird));