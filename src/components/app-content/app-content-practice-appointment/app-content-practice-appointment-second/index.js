import React from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import AppContentUserPerson from '../../app-content-user/app-content-user-person/index.js';
import { doChangePracticeAppointmentStep } from '../../../../redux/action/practice';
import './index.css';

export class AppContentPracticeAppointmentSecond extends React.Component{
  constructor(props){
    super(props);
    this.handleLast = this.handleLast.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handleLast(){
    this.props.onChangePracticeAppointmentStep(0);
  }
  handleNext(){
    const { personSelectedRowKeys, person, onChangePracticeAppointmentStep } = this.props;
    if(person.length === 0){
      message.info('请先添加练习人员')
    }
    else{
      if(personSelectedRowKeys.length === 0){
        message.info('请选择练习人员')
      }
      else{
        onChangePracticeAppointmentStep(2);
      }
    }
  }
  render(){
    return (
      <div>
        <div className="app-content-practice-appointment-secondSteps-content">
          <AppContentUserPerson beCanSelected={true}/>
        </div>
        <div className="app-content-practice-appointment-secondSteps-action">
          <Button type="primary" className="app-content-practice-appointment-secondSteps-action-last" onClick={this.handleLast}>上一步</Button>
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
    onChangePracticeAppointmentStep: (step) => dispatch(doChangePracticeAppointmentStep(step))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AppContentPracticeAppointmentSecond);