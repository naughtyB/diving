import { Card, Icon, Spin, message } from 'antd';
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Description from './description.js';
import { doGetPracticeData, doChangePracticeDisplayIndex, doChangePracticeAppointmentStep, doChangePracticeAppointmentFirstFields } from '../../../redux/action/practice.js';
import './index.css';
const { Meta } = Card;

export class AppContentPractice extends React.Component{
  constructor(props){
    super(props);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }
  componentWillMount(){
    this.props.onGetPracticeData(message);
  }
  handleDetail(displayIndex){
    if(this.props.displayIndex == displayIndex){
      this.props.onChangePracticeDisplayIndex(-1);
    }
    else{
      this.props.onChangePracticeDisplayIndex(displayIndex);
    }
  }
  handleOrder(item){
    this.props.history.push({
      pathname: '/practice/appointment'
    });
    this.props.onChangePracticeAppointmentStep(0);
    const date = new Date();
    date.setTime(date.getTime() + 86400000);
    this.props.onChangePracticeAppointmentFirstFields({
      gymnasium: {
        value: item.name
      }
    })
  }
  render(){
    const data = this.props.practiceData;
    const isGettingData = this.props.isGettingData;
    if(data.length){
      const CardArray = data.map((item, index, array) => {
        return (
          <Card
            key={index}
            hoverable={true}
            className="app-content-practice-card"
            cover={<img alt={item.name} src={item.imgUrl} />}
            actions={[<Icon type="appointment" onClick={()=>this.handleOrder(item)}/>, <Icon type="detail" onClick={()=>this.handleDetail(index)}/>]}
          >
            <Meta
              description={<Description style={{maxHeight: index == this.props.displayIndex ? '400px' : '53px' }} data={
                [{
                  title : item.name,
                  content : item.price
                }, ...item.detail]
              }/>}
              className="app-content-practice-card-meta"
            />
          </Card>    
        )
      })
      return (
        <Spin spinning={isGettingData} style={{height: '500px'}}>
          <div className="app-content-practice">
            <div className="app-content-practice-left">
              {CardArray.filter((item, index) => {
                return index%2 == 0;
              })}
            </div>
            <div className="app-content-practice-right">
              {CardArray.filter((item,index) => {
                return index%2 == 1;
              })}
            </div>
          </div>
        </Spin>
      )
    }
    else{
      return (
        <Spin spinning={isGettingData} style={{height: '500px'}}>
          <div className="app-content-practice"></div>
        </Spin>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingData: state.practice.isGettingData,
    practiceData: state.practice.data,
    displayIndex: state.practice.displayIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPracticeData: (message) => dispatch(doGetPracticeData(message)),
    onChangePracticeDisplayIndex: (displayIndex) => dispatch(doChangePracticeDisplayIndex(displayIndex)),
    onChangePracticeAppointmentStep: (step) => dispatch(doChangePracticeAppointmentStep(step)),
    onChangePracticeAppointmentFirstFields: (fieldsChanged) => dispatch(doChangePracticeAppointmentFirstFields(fieldsChanged))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentPractice);