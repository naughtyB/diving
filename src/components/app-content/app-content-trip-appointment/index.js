import React from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Icon } from 'antd';
import './index.css';
const Step = Steps.Step;

const steps = [{
  title: '选择行程时间',
  content: '1'
}, {
  title: '添加行程参与人员',
  content: '2'
},{
  title: '确认信息并预约',
  content: '3'
}]

export class AppContentTripAppointment extends React.Component{
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
      <div className="app-content-trip-appointment">
        <Button type="primary" className="app-content-trip-appointment-backward">
            <Icon type="left"/>返回行程信息
        </Button>
        <Steps current={0}>
          {steps.map(item => <Step key={item.title} title={item.title}/>)}
        </Steps>
        {steps[0]['content']}
      </div>
    );
  }
}




export default AppContentTripAppointment;