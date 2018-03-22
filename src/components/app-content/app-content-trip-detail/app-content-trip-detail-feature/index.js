import React from 'react';
import './index.css';


export class AppContentTripDetailFeature extends React.Component{
  render(){
    const { tripLine } = this.props.tripDetailData;
    let tripArrA = [tripLine.facilities, tripLine.amusement, tripLine.diet, tripLine.equipmentLeasing, tripLine.qualification];
    let name = ['设施', '娱乐活动', '饮食', '装备租赁', '技术指标'];
    return (
      <div className="app-content-trip-detail-feature">
        <div className="app-content-trip-detail-feature-title">设施 &amp; 服务</div>
        <ul className="app-content-trip-detail-feature-panel">
          {
            tripArrA.map((item, index) => {
              return (
                <li className="app-content-trip-detail-feature-each" key={index}>
                  <div className="app-content-trip-detail-feature-each-name">{name[index]}</div>
                  <ul className="app-content-trip-detail-feature-each-content">
                    {index < 3 ? item.map((item, index) => {
                      return (
                        <li key={index} className="app-content-trip-detail-feature-each-content-each">{item}</li>
                      )
                    }) : item.map((item, index) => {
                      return (
                        <li className="app-content-trip-detail-feature-each-content-each">
                          <span className="app-content-trip-detail-feature-each-content-each-name">{item.name}</span>
                          <span className="app-content-trip-detail-feature-each-content-each-value">{item.value}</span>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default AppContentTripDetailFeature;