import React from 'react';
import { Card, Icon } from 'antd';
import './index.css';
const { Meta } = Card;

export class AppContentTrip extends React.Component{
  render(){
    return (
      <div className="app-content-trip">
        <div className="app-content-trip-title"><span>精选船宿</span></div>
        <ul className="app-content-trip-area">
          <li className="app-content-trip-area-each">泰国</li>
          <li className="app-content-trip-area-each">马尔代夫</li>
          <li className="app-content-trip-area-each">印尼</li>
          <li className="app-content-trip-area-each">埃及</li>
          <li className="app-content-trip-area-each">亚洲</li>
          <li className="app-content-trip-area-each">太平洋</li>
          <li className="app-content-trip-area-each">美洲</li>
        </ul>
        <ul className="app-content-trip-display">
          <li className="app-content-trip-display-each">
            <Card
              hoverable
              style={{ width: 274 }}
              cover={<img alt="example" style={{height: '171px'}} src="https://img.innfins.com/20160724/579396520f615.jpg!c544x340" />}
            >
              <Meta
                title={
                  <span className="app-content-trip-display-each-title">
                    <span className="app-content-trip-display-each-title-shipName">
                      ScubaSpa Ying
                    </span>
                    <span className="app-content-trip-display-each-title-price">
                      ￥15000
                    </span>
                  </span>
                }
                description={
                  <span>
                    <Icon type="environment-o"/>
                    <span className="app-content-trip-display-each-description-areaName">
                      马尔代夫
                    </span>
                  </span>
                }
              />
            </Card>
          </li>
          <li className="app-content-trip-display-each">
            <Card
              hoverable
              style={{ width: 274 }}
              cover={<img alt="example" style={{height: '171px'}} src="https://img10-cdn.innfins.com/20160727/57983478582de.jpg!c544x340" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </li>
          <li className="app-content-trip-display-each">
            <Card
              hoverable
              style={{ width: 274 }}
              cover={<img alt="example" style={{height: '171px'}} src="https://img10-cdn.innfins.com/20170113/5878d85cb19da1.png!c544x340" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </li>
          <li className="app-content-trip-display-each">
            <Card
              hoverable
              style={{ width: 274 }}
              cover={<img alt="example" style={{height: '171px'}} src="https://img.innfins.com/20180123/5a66fc873ac2d1.jpg!c544x340" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </li>
          <li className="app-content-trip-display-each">
            <Card
              hoverable
              style={{ width: 274 }}
              cover={<img alt="example" style={{height: '171px'}} src="https://img10-cdn.innfins.com/20160922/57e397c255ec8.jpeg!c544x340" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </li>
        </ul>
      </div>
    )
  }
}

export default AppContentTrip;