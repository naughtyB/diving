import React from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Icon } from 'antd';
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
  constructor(props){
    super(props);
    this.handleBackWard = this.handleBackWard.bind(this);
  }
  handleBackWard(){
    this.props.history.push({
      pathname: '/practice'
    })
  }
  render() {
    return (
      <div className="app-content-practice-appointment">
        <Button type="primary" className="app-content-practice-appointment-backward" onClick={this.handleBackWard}>
            <Icon type="left"/>潜水练习列表
        </Button>
        <Steps current={this.props.practiceAppointmentStep}>
          {steps.map(item => <Step key={item.title} title={item.title}/>)}
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