import React from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Icon } from 'antd';
import AppContentTripAppointmentFirst from './app-content-trip-appointment-first/index.js';
import AppContentTripAppointmentSecond from './app-content-trip-appointment-second/index.js';
import AppContentTripAppointmentThird from './app-content-trip-appointment-third/index.js';
import './index.css';
const Step = Steps.Step;

const steps = [{
  title: '选择练习地点和时段',
  content: <AppContentTripAppointmentFirst/>
}, {
  title: '添加练习人员',
  content: <AppContentTripAppointmentSecond/>
}, {
  title: '付款',
  content: <AppContentTripAppointmentThird/>
}]

export class AppContentTripAppointment extends React.Component{
  constructor(props){
    super(props);
    this.handleBackWard = this.handleBackWard.bind(this);
  }
  handleBackWard(){
    this.props.history.push({
      pathname: '/trip'
    })
  }
  render() {
    return (
      <div className="app-content-trip-appointment">
        <Button type="primary" className="app-content-trip-appointment-backward" onClick={this.handleBackWard}>
            <Icon type="left"/>潜水行程列表
        </Button>
        <Steps current={this.props.tripAppointmentStep}>
          {steps.map(item => <Step key={item.title} title={item.title}/>)}
        </Steps>
        {steps[this.props.tripAppointmentStep]['content']}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tripAppointmentStep: state.trip.tripAppointmentStep
  }
}



export default connect(mapStateToProps)(AppContentTripAppointment);