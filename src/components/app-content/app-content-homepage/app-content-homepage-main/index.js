import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

const OverPack = ScrollAnim.OverPack;

export class AppContentHomePageMain extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app-content-homepage-main">
        <OverPack replay>
          <QueueAnim key="1" delay={300} type={['left','right']} className="app-content-homepage-main-bubbleAnim">
            <div key="course" className="app-content-homepage-main-bubble app-content-homepage-main-bubble-course">
              <div className="app-content-homepage-main-bubble-mask">
                <Link 
                  className="app-content-homepage-main-bubble-url" 
                  to={{
                    pathname: '/course'
                  }}
                >
                  潜水课程
                </Link>
              </div>
              <Icon type="course" className="app-content-homepage-main-bubble-icon"/>
            </div>          
            <div key="trip" className="app-content-homepage-main-bubble app-content-homepage-main-bubble-trip">
              <div className="app-content-homepage-main-bubble-mask">
                <Link 
                  className="app-content-homepage-main-bubble-url" 
                  to={{
                    pathname: '/trip'
                  }}
                >
                  潜水行程
                </Link>
              </div>
              <Icon type="trip" className="app-content-homepage-main-bubble-icon"/>
            </div>    
            <div key="practice" className="app-content-homepage-main-bubble app-content-homepage-main-bubble-practice">
              <div className="app-content-homepage-main-bubble-mask">
                <Link 
                  className="app-content-homepage-main-bubble-url" 
                  to={{
                    pathname: '/practice'
                  }}
                >
                  潜水练习
                </Link>
              </div>
              <Icon type="practice" className="app-content-homepage-main-bubble-icon"/>
            </div>  
            <div key="equipment" className="app-content-homepage-main-bubble app-content-homepage-main-bubble-equipment">
              <div className="app-content-homepage-main-bubble-mask">
                <Link 
                  className="app-content-homepage-main-bubble-url" 
                  to={{
                    pathname: '/equipment'
                  }}
                >
                  潜水装备
                </Link>
              </div>
              <Icon type="equipment" className="app-content-homepage-main-bubble-icon"/>
            </div>                        
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

export default AppContentHomePageMain;