import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Spin } from 'antd';
import { doGetTripData, doChangeTripKey } from '../../../redux/action/trip';
import './index.css';
const { Meta } = Card;

export class AppContentTrip extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleMouseEnter(tripKey){
    this.props.onChangeTripKey(tripKey)
  }
  handleClick(tripId){
    this.props.history.push({
      pathname: '/trip/detail',
      hash: 'tripId=' + encodeURIComponent(tripId) 
    })
  }
  componentWillMount(){
    this.props.onGetTripData();
  }
  render(){
    const { isGettingTripData, tripData, tripKey } = this.props;
    if(tripData.length > 0){
      let data = []
      tripData.forEach((tripDataItem, index) => {
        let have = false;
        data.forEach((item, index) => {
          if(item.areaName === tripDataItem.areaName){
            item.value.push(tripDataItem)
            have = true;
          }
        })
        if(!have){
          data.push({
            areaName: tripDataItem.areaName,
            value: [tripDataItem]
          })
        }
      })
      return (
        <Spin spinning={isGettingTripData}>
          <div className="app-content-trip">
            <div className="app-content-trip-title"><span>精选船宿</span></div>
            <ul className="app-content-trip-area">
              {
                data.map((item, index) => {
                  return (
                    <li 
                      key={index}
                      className="app-content-trip-area-each" 
                      style={{color: tripKey === item.areaName ? 'rgb(73, 201, 245)' : 'rgb(177, 177, 177)'}}
                      onMouseEnter={()=>this.handleMouseEnter(item.areaName)}
                    >
                      {item.areaName}
                    </li>
                  )
                })
              }
            </ul>
            <ul className="app-content-trip-display">
              {
                data.filter((item, index) => {
                  return item.areaName === tripKey;
                })[0]['value'].map((item, index) => {
                  return (
                    <li key={index} className="app-content-trip-display-each" onClick={()=>this.handleClick(item['_id'])}>
                      <Card
                        hoverable
                        style={{ width: 274 }}
                        cover={<img alt="example" className="app-content-trip-each-img" src={item.imgUrl} alt=""/>}
                      >
                        <Meta
                          title={
                            <span className="app-content-trip-display-each-title">
                              <span className="app-content-trip-display-each-title-shipName">
                                {item.name}
                              </span>
                              <span className="app-content-trip-display-each-title-price">
                                {item.price}
                              </span>
                            </span>
                          }
                          description={
                            <span>
                              <Icon type="environment-o"/>
                              <span className="app-content-trip-display-each-description-areaName">
                                {item.areaName}
                              </span>
                            </span>
                          }
                        />
                      </Card>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Spin>
      )
    }
    else{
      return (
        <Spin spinning={isGettingTripData}>
          <div style={{height: '300px'}}>{isGettingTripData ? '' : '网络发生错误，请重新刷新'}</div>
        </Spin>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tripData: state.trip.tripData,
    isGettingTripData: state.trip.isGettingTripData,
    tripKey: state.trip.tripKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTripData: () => dispatch(doGetTripData()),
    onChangeTripKey: (tripKey) => dispatch(doChangeTripKey(tripKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentTrip);