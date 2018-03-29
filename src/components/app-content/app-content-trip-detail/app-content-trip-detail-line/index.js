import React from 'react';
import { Timeline, Icon } from 'antd';
import './index.css';

export class AppContentTripDetailLine extends React.Component{
  render(){
    const { tripLine } = this.props.tripDetailData;
    return (
      <div className="app-content-trip-detail-line">
        <div className="app-content-trip-detail-line-title">
          <Icon className="app-content-trip-detail-line-title-icon" type="line"/>
          <span className="app-content-trip-detail-line-title-content">路线</span>
        </div>
        <div className="app-content-trip-detail-line-content">
          <div className="app-content-trip-detail-line-content-name-panel">
            <span className="app-content-trip-detail-line-content-name">{tripLine.name}</span>
            <span className="app-content-trip-detail-line-content-totalTime">{tripLine.totalTime}</span>
          </div>
        </div>
        <div className="app-content-trip-detail-line-info">
          <div className="app-content-trip-detail-line-info-icon">
            <img className="app-content-trip-detail-line-info-icon-image" src="http://localhost:8000/public/image/tripDetail/icon/default-Itinerary.png" alt=""/>
          </div>
          <ul className="app-content-trip-detail-line-info-introduction">
            <li className="app-content-trip-detail-line-info-introduction-embark">
              <span className="app-content-trip-detail-line-info-introduction-name">登船</span>
              <span className="app-content-trip-detail-line-info-introduction-area">{tripLine.embark}</span>
            </li>
            <li className="app-content-trip-detail-line-info-introduction-disembark">
              <span className="app-content-trip-detail-line-info-introduction-name">离船</span>
              <span className="app-content-trip-detail-line-info-introduction-area">{tripLine.disembark}</span>
            </li>
            <li className="app-content-trip-detail-line-info-introduction-dives">
              <span className="app-content-trip-detail-line-info-introduction-name">潜水次数</span>
              <span className="app-content-trip-detail-line-info-introduction-area">{tripLine.dives}</span>
            </li>
          </ul>
        </div>
        <div className="app-content-trip-detail-line-desc" dangerouslySetInnerHTML={{__html: tripLine.Des}}></div>
        <div className="app-content-trip-detail-line-route">
          <Timeline>
            {
              tripLine.Route.map((item, index) => {
                return (
                  <Timeline.Item color="blue" key={index}>
                    <p className="app-content-trip-detail-line-route-name" dangerouslySetInnerHTML={{__html: item.title}}></p>
                    <ul className="app-content-trip-detaul-line-route-content-panel">
                      {item.process.sort((a, b) => {
                        return Number(a) - Number(b);
                      }).map((item, index) => {
                        return (
                          <li key={index} className="app-content-trip-detaul-line-route-content">{item.do}</li>
                        )
                      })}
                    </ul>
                  </Timeline.Item>
                )
              })
            }
            <Timeline.Item color="blue">
              <p className="app-content-trip-detail-line-route-name">结束</p>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    )
  }
}

export default AppContentTripDetailLine;