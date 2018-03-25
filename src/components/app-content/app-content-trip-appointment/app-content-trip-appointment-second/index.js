import React from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import AppContentUserPerson from '../../app-content-user/app-content-user-person/index.js';
import { doChangeTripAppointmentStep } from '../../../../redux/action/trip';
import './index.css';

export class AppContentTripAppointmentSecond extends React.Component{
  constructor(props){
    super(props);
    this.handleLast = this.handleLast.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handleLast(){
    this.props.onChangeTripAppointmentStep(0);
  }
  handleNext(){
    const { personSelectedRowKeys, person, onChangeTripAppointmentStep } = this.props;
    if(person.length === 0){
      message.info('请先添加练习人员')
    }
    else{
      if(personSelectedRowKeys.length === 0){
        message.info('请选择练习人员')
      }
      else{
        onChangeTripAppointmentStep(2);
      }
    }
  }
  render(){
    return (
      <div>
        <div className="app-content-trip-appointment-secondSteps-content">
          <AppContentUserPerson beCanSelected={true}/>
        </div>
        <div className="app-content-trip-appointment-secondSteps-action">
          <Button type="primary" className="app-content-trip-appointment-secondSteps-action-last" onClick={this.handleLast}>上一步</Button>
          <Button type="primary" onClick={this.handleNext}>下一步</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.user.person,
    personSelectedRowKeys: state.user.personSelectedRowKeys
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTripAppointmentStep: (step) => dispatch(doChangeTripAppointmentStep(step))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AppContentTripAppointmentSecond);