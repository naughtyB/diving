import React from 'react';
import { Menu } from 'antd';
import './index.css';

export class AppContentCourse extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app-content-course">
        <div className="app-content-course-menu">
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1" className="app-content-course-menu-each">
              高痒课程
            </Menu.Item>
            <Menu.Item key="2" className="app-content-course-menu-each">
              沉船课程
            </Menu.Item>
            <Menu.Item key="3" className="app-content-course-menu-each">
              水下摄影课程
            </Menu.Item>
            <Menu.Item key="4" className="app-content-course-menu-each">
              侧挂课程
            </Menu.Item>
            <Menu.Item key="5" className="app-content-course-menu-each">
              深潜课程
            </Menu.Item>
          </Menu>
        </div>
        <div className="app-content-course-introduce">
          <h3><span style={{fontSize:'30px'}}>Ant Design of React</span></h3><p></p><p><span style={{color:'#314659'}}><strong>这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。</strong></span></p><p></p>
        </div>
      </div>
    )
  }
}

export default AppContentCourse;