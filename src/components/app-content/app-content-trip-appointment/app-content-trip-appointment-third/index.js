import React from 'react';
import { Alert, Button, message } from 'antd';
import { connect } from 'react-redux';
import { doChangeTripAppointmentStep } from '../../../../redux/action/trip';
import { doCreateTripAppointmentOrder } from '../../../../redux/action/user';
import { withRouter } from 'react-router-dom';
import './index.css';

export class AppContentTripAppointmentThird extends React.Component{
  constructor(props){
    super(props);
    this.handleLast = this.handleLast.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLast(){
    this.props.onChangeTripAppointmentStep(1);
  }
  handleSubmit(){
    let { onCreateTripAppointmentOrder, tripAppointmentFirstFields, person, personSelectedRowKeys } = this.props;
    let successCallback = () => {
      message.info('预定行程成功');
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
    onCreateTripAppointmentOrder(JSON.stringify({
      person: person.filter((item, index) => {
        return personSelectedRowKeys.includes(item['_id'])
      }).map((item, index) => {
        return {name: item.name, mobileNumber: item.mobileNumber}
      }),
      tripTime: {month: tripAppointmentFirstFields['tripMonth']['value'].format('YYYY-MM'), date: tripAppointmentFirstFields['tripDate']['value']},
      tripId: this.props.tripData.filter((item, index) => {
        return item.name === tripAppointmentFirstFields['tripName']['value']
      })[0]['_id']
    }), successCallback, otherErrCallback, loginErrCallback)
  }
  render(){
    return (
      <div>
        <div className="app-content-trip-appointment-thirdSteps-content">
          <Alert message="目前尚未支持付款系统，只需按下完成按钮即可" type="success"/>
        </div>
        <div className="app-content-trip-appointment-thirdSteps-action">
          <Button type="primary" onClick={this.handleLast} className="app-content-trip-appointment-thirdSteps-action-last">上一步</Button>
          <Button type="primary" onClick={this.handleSubmit} loading={this.props.isCreatingTripOrder}>完成</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personSelectedRowKeys: state.user.personSelectedRowKeys,
    person: state.user.person,
    tripAppointmentFirstFields: state.trip.tripAppointmentFirstFields,
    tripData: state.trip.tripData,
    isCreatingTripOrder: state.user.isCreatingTripOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTripAppointmentStep: (step) => dispatch(doChangeTripAppointmentStep(step)),
    onCreateTripAppointmentOrder: (orderData, successCallback, otherErrCallback, loginErrCallback) => dispatch(doCreateTripAppointmentOrder(orderData, successCallback, otherErrCallback, loginErrCallback))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContentTripAppointmentThird));