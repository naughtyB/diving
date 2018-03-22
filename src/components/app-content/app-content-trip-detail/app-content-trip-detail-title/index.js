import React from 'react';
import './index.css';

export class AppContentTripDetailTitle extends React.Component{
  render(){
    const { tripDetailData } = this.props;
    return (
      <div className="app-content-trip-detail-title">
        <div className="app-content-trip-detail-title-name">{tripDetailData.name}</div>
        <div className="app-content-trip-detail-title-area">{tripDetailData.areaName}</div>
        <div className="app-content-trip-detail-title-priceDetail">
          <span className="app-content-trip-detail-title-priceDetail-float">
            <span className="app-content-trip-detail-title-priceDetail-price">{tripDetailData.price}</span>
            <span className="app-content-trip-detail-title-priceDetail-other">/人</span>
          </span>
        </div>
      </div>
    )
  }
}

export default AppContentTripDetailTitle;