import React from 'react';
import './index.css';

export class AppContentTripDetailDetail extends React.Component{
  render(){
    const { tripDetailData } = this.props;
    return (
      <div className="app-content-trip-detail-detail">
        <ul className="app-content-trip-detail-detail-feature">
          {
            tripDetailData.wifi ? (
              <li className="app-content-trip-detail-detail-feature-wifi app-content-trip-detail-detail-feature-each">
                <i className="app-content-trip-detail-detail-feature-ico"/>
                <span className="app-content-trip-detail-detail-feature-name">Wifi</span>
              </li>
            ) : ''
          }
          {
            tripDetailData.nitrox ? (
              <li className="app-content-trip-detail-detail-feature-nitrox app-content-trip-detail-detail-feature-each">
                <i className="app-content-trip-detail-detail-feature-ico"/>
                <span className="app-content-trip-detail-detail-feature-name">高氧</span>
              </li>
            ) : ''
          }
          {
            tripDetailData.ac ? (
              <li className="app-content-trip-detail-detail-feature-ac app-content-trip-detail-detail-feature-each">
                <i className="app-content-trip-detail-detail-feature-ico"/>
                <span className="app-content-trip-detail-detail-feature-name">空调</span>
              </li>
            ) : ''
          }
          {
            tripDetailData.luxury ? (
              <li className="app-content-trip-detail-detail-feature-luxury app-content-trip-detail-detail-feature-each">
                <i className="app-content-trip-detail-detail-feature-ico"/>
                <span className="app-content-trip-detail-detail-feature-name">豪华型</span>
              </li>
            ) : ''
          }
          <li className="app-content-trip-detail-detail-feature-size app-content-trip-detail-detail-feature-each">
            <i className="app-content-trip-detail-detail-feature-ico"/>
            <span className="app-content-trip-detail-detail-feature-name">{tripDetailData.size}</span>
          </li>
          <li className="app-content-trip-detail-detail-feature-guest app-content-trip-detail-detail-feature-each">
            <i className="app-content-trip-detail-detail-feature-ico"/>
            <span className="app-content-trip-detail-detail-feature-name">{tripDetailData.guest}</span>
          </li>
        </ul>
        <div className="app-content-trip-detail-detail-about">
          <div className="app-content-trip-detail-detail-about-title">简介</div>
          <div className="app-content-trip-detail-detail-about-content">
            {tripDetailData.about}
          </div>
        </div>
      </div>
    )
  }
}

export default AppContentTripDetailDetail;