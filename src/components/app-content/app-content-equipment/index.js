import React from 'react';
import { Menu, Card } from 'antd';
import './index.css';
const { Meta } = Card;

export class AppContentEquipment extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app-content-equipment">
        <div className="app-content-equipment-menu">
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1" className="app-content-equipment-menu-each">
              浮浅套装
            </Menu.Item>
            <Menu.Item key="2" className="app-content-equipment-menu-each">
              深浅套装
            </Menu.Item>
            <Menu.Item key="3" className="app-content-equipment-menu-each">
              潜水镜
            </Menu.Item>
            <Menu.Item key="4" className="app-content-equipment-menu-each">
              呼吸管
            </Menu.Item>
            <Menu.Item key="5" className="app-content-equipment-menu-each">
              脚蹼
            </Menu.Item>
          </Menu>
        </div>
        <div className="app-content-equipment-introduce">
          <ul className="app-content-equipment-introduce-display">
            <li className="app-content-equipment-introduce-display-each">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" className="app-content-equipment-introduce-display-each-img" src="/image/equipment/20180325151941.png" />}
              >
                <Meta
                  title={
                    <div className="app-content-equipment-introduce-display-each-name">
                      防晒浮潜服YONSUB韩款成人儿童潜水游泳长袖连体显瘦男女水母衣
                    </div>
                  }
                  description={
                    <div className="app-content-equipment-introduce-display-each-content">
                      <span className="app-content-equipment-introduce-display-each-content-price">￥500</span>
                      <span className="app-content-equipment-introduce-display-each-content-postage">运费：￥12</span>
                    </div>
                  }
                />
              </Card>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AppContentEquipment;