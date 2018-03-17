import React from 'react';
import { Button } from 'antd';
import AppContentUserPerson from '../../app-content-user/app-content-user-person/index.js';
import './index.css';

export class AppContentPracticeAppointmentSecond extends React.Component{
  render(){
    return (
      <div>
        <div className="app-content-practice-appointment-secondSteps-content">
          <AppContentUserPerson/>
        </div>
        <div className="app-content-practice-appointment-secondSteps-action">
          <Button type="primary" style={{marginRight: '15px'}}>上一步</Button>
          <Button type="primary">下一步</Button>
        </div>
      </div>
    )
  }
}

export default AppContentPracticeAppointmentSecond;