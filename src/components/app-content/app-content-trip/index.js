import React from 'react';
import { Card } from 'antd';
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
              cover={<img alt="example" style={{height: '171px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
              cover={<img alt="example" style={{height: '171px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
              cover={<img alt="example" style={{height: '171px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
              cover={<img alt="example" style={{height: '171px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
              cover={<img alt="example" style={{height: '171px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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