import React from 'react';
import './index.css';

export class AppContentTripDetailImage extends React.Component{
  render(){
    const { tripDetailData } = this.props;
    return (
      <div className="app-content-trip-detail-image">
        <div className="app-content-trip-detail-image-left">
          <img className="app-content-trip-detail-image-left-image" src={tripDetailData.imgUrl} alt=""/>
        </div>
        <div className="app-content-trip-detail-image-right">
          {tripDetailData.imgs.filter((item, index) => {
            return index < 4;
          }).map((item, index) => {
            return (
              <div key={index} className="app-content-trip-detail-image-right-frame">
                <img className="app-content-trip-detail-image-right-frame-image" src={item} alt=""/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AppContentTripDetailImage;