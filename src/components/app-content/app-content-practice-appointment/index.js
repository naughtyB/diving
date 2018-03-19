import React from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message } from 'antd';
import AppContentPracticeAppointmentFirst from './app-content-practice-appointment-first/index.js';
import AppContentPracticeAppointmentSecond from './app-content-practice-appointment-second/index.js';
import AppContentPracticeAppointmentThird from './app-content-practice-appointment-third/index.js';
import './index.css';
const Step = Steps.Step;

const steps = [{
  title: '选择练习地点和时段',
  content: <AppContentPracticeAppointmentFirst/>
}, {
  title: '添加练习人员',
  content: <AppContentPracticeAppointmentSecond/>
}, {
  title: '付款',
  content: <AppContentPracticeAppointmentThird/>
}]

export class AppContentPracticeAppointment extends React.Component{
  render() {
    return (
      <div className="app-content-practice-appointment">
        <Steps current={this.props.practiceAppointmentStep}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        {steps[this.props.practiceAppointmentStep]['content']}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    practiceAppointmentStep: state.practice.practiceAppointmentStep
  }
}



export default connect(mapStateToProps)(AppContentPracticeAppointment);