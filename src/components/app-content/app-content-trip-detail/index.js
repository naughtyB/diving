import React from 'react';
import AppContentTripDetailTitle from './app-content-trip-detail-title/index.js';
import AppContentTripDetailImage from './app-content-trip-detail-image/index.js';
import AppContentTripDetailDetail from './app-content-trip-detail-detail/index.js';
import AppContentTripDetailLine from './app-content-trip-detail-line/index.js';
import AppContentTripDetailFeature from './app-content-trip-detail-feature/index.js';
import { connect } from 'react-redux';
import { Spin, Affix, Icon } from 'antd';
import { doGetTripDetailData } from '../../../redux/action/tripDetail';
import { doChangeTripAppointmentStep, doChangeTripAppointmentFirstFields } from '../../../redux/action/trip';
import './index.css';

let transformHash = (hash) => {
  let hashData={};
  hash.slice(1).split("&").forEach((item,index)=>{
      let arr=item.split("=");
      hashData[arr[0]]=decodeURIComponent(arr[1]);
  });
  return hashData;
};


export class AppContentTripDetail extends React.Component{
  constructor(props){
    super(props);
    this.handleRollBack = this.handleRollBack.bind(this);
    this.handleAppointment = this.handleAppointment.bind(this);
  }
  handleRollBack(){
    this.props.history.push({
      pathname: '/trip'
    })
  }
  handleAppointment(tripName){
    this.props.history.push({
      pathname: '/trip/appointment'
    });
    this.props.onChangeTripAppointmentStep(0);
    const date = new Date();
    date.setTime(date.getTime() + 86400000);
    this.props.onChangeTripAppointmentFirstFields({
      tripName: {
        value: tripName
      }
    })
  }
  componentWillMount(){
    let hash = this.props.location.hash;
    let tripId = hash && transformHash(hash)['tripId'];
    if(tripId && tripId.length === 24){
      this.props.onGetTripDetailData(tripId, () => {
        this.props.history.push({
          pathname: '/trip'
        })
      });
    }
    else{
      this.props.history.push({
        pathname: '/trip'
      })
    }
  }
  componentWillUpdate(nextProps){
    let hash = this.props.location.hash;
    let nextHash = nextProps.location.hash;
    let tripId = hash && transformHash(hash)['tripId'];
    let nextTripId = nextHash && transformHash(nextHash)['tripId'];
    if(tripId && tripId !== nextTripId){
      if(nextTripId.length === 24){
        this.props.onGetTripDetailData(nextTripId, () => {
          this.props.history.push({
            pathname: '/trip'
          })
        });
      }
      else{
        this.props.history.push({
          pathname: '/trip'
        })
      }
    }
  }
  render(){
    const { tripDetailData, isGettingTripDetailData, isGettingTripDetailDataSuccessful } = this.props;
    if(!isGettingTripDetailData && isGettingTripDetailDataSuccessful){
      if(tripDetailData['_id']){
        return (
          <div className="app-content-trip-detail">
            <AppContentTripDetailTitle tripDetailData={tripDetailData}/>
            <AppContentTripDetailImage tripDetailData={tripDetailData}/>
            <AppContentTripDetailDetail tripDetailData={tripDetailData}/>
            <AppContentTripDetailLine tripDetailData={tripDetailData}/>
            <AppContentTripDetailFeature tripDetailData={tripDetailData}/>
            <Affix offsetBottom={110} style={{position: 'absolute', right: '-120px'}}>
              <div className="app-content-trip-detail-affix-rollback" onClick={this.handleRollBack}>
                <Icon type="rollback" className="app-content-trip-detail-affix-icon"/>
                <span className="app-content-trip-detail-affix-content">返回</span>
              </div>
            </Affix>
            <Affix offsetBottom={40} style={{position: 'absolute', right: '-120px'}}>
              <div className="app-content-trip-detail-affix-appointment" onClick={()=>this.handleAppointment(tripDetailData['name'])}>
                <Icon type="appointment" className="app-content-trip-detail-affix-icon"/>
                <span className="app-content-trip-detail-affix-content">预定</span>
              </div>
            </Affix>
          </div>
        )
      }
      else{
        return (
          <div>404</div>
        )
      }
    }
    else if(isGettingTripDetailData){
      return (
        <Spin spinning={true}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
    else{
      return (
        <div>请重新刷新</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tripDetailData: state.tripDetail.tripDetailData,
    isGettingTripDetailData: state.tripDetail.isGettingTripDetailData,
    isGettingTripDetailDataSuccessful: state.tripDetail.isGettingTripDetailDataSuccessful
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTripDetailData: (tripId, errCallback) => dispatch(doGetTripDetailData(tripId, errCallback)),
    onChangeTripAppointmentStep: (step) => dispatch(doChangeTripAppointmentStep(step)),
    onChangeTripAppointmentFirstFields: (fields) => dispatch(doChangeTripAppointmentFirstFields(fields))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentTripDetail);