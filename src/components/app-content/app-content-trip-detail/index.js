import React from 'react';
import AppContentTripDetailTitle from './app-content-trip-detail-title/index.js';
import AppContentTripDetailImage from './app-content-trip-detail-image/index.js';
import AppContentTripDetailDetail from './app-content-trip-detail-detail/index.js';
import AppContentTripDetailLine from './app-content-trip-detail-line/index.js';
import AppContentTripDetailFeature from './app-content-trip-detail-feature/index.js';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { doGetTripDetailData } from '../../../redux/action/tripDetail';
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
  componentWillMount(){
    let hash = this.props.location.hash;
    let tripId = hash && transformHash(hash)['tripId'];
    if(tripId){
      this.props.onGetTripDetailData(tripId);
    }
    else{
      this.props.history.push({
        pathanem: '/'
      })
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
    onGetTripDetailData: (tripId) => dispatch(doGetTripDetailData(tripId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentTripDetail);