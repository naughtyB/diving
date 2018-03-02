import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AppHeaderUser from './app-header-user/index.js';
import { doChangeUserModalVisible } from '../../redux/action/userModal.js';

class AppHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedKeys: ['homepage']
    }
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }
  componentDidUpdate(preProps){
    const pathname = this.props.location.pathname;
    if(pathname !== preProps.location.pathname){
      this.setState(() => {
        if(pathname === '/'){
          return {
            selectedKeys: ['homepage']
          }
        }
        return {
          selectedKeys: [pathname.match(/(\/)([a-z0-9A-Z]+)(\/)?/)[2]]
        }
      })
    }
  }
  componentDidMount(){
    this.setState(() => {
      const pathname = this.props.location.pathname;
      if(pathname === '/'){
        return {
          selectedKeys: ['homepage']
        }
      }
      return {
        selectedKeys: [pathname.match(/(\/)([a-z0-9A-Z]+)(\/)?/)[2]]
      }
    })
  }
  handleMenuSelect({item, key, selectedKeys}){
    if(key !== 'login'){
      if(selectedKeys[0] === key){
        this.setState(() => {
          return {
            selectedKeys: [key]
          }
        })
        this.props.history.push({
          pathname: '/' + (key === 'homepage' ? '' : key)
        })
      }
    }
    else{
      this.props.onChangeUserModalVisible(true);
    }
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="logo" style={{width: '206px'}}>
          <a style={{display: 'inline-block', height: '80px', lineHeight: '80px'}}>
            <img 
              src="/diving.png" 
              alt="logo"
              style={{width: '30px', verticalAlign: 'middle'}}
            />
            <span style={{marginLeft: '10px', fontSize: '20px', verticalAlign: 'middle'}}>LET'S DIVING</span>
          </a>
        </div>      
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Menu
            mode="horizontal"
            style={{height: '80px'}}
            onSelect={this.handleMenuSelect}
            selectedKeys={this.state.selectedKeys}
          >
            <Menu.Item key="homepage" style={{height: '80px', lineHeight: '80px'}}>
              首页
            </Menu.Item>
            <Menu.Item key="course" style={{height: '80px', lineHeight: '80px'}}>
              潜水课程
            </Menu.Item>
            <Menu.Item key="practice" style={{height: '80px', lineHeight: '80px'}}>
              潜水练习
            </Menu.Item>
            <Menu.Item key="trip" style={{height: '80px', lineHeight: '80px'}}>
              潜水行程
            </Menu.Item>
            <Menu.Item key="equipment" style={{height: '80px', lineHeight: '80px'}}>
              潜水装备
            </Menu.Item>
            <Menu.Item key="news" style={{height: '80px', lineHeight: '80px'}}>
              潜水资讯
            </Menu.Item>
            <Menu.Item key="login" style={{height: '80px', lineHeight: '80px'}}>
              登录
            </Menu.Item>
          </Menu>
          <AppHeaderUser/>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserModalVisible: (modalVisible) => dispatch(doChangeUserModalVisible(modalVisible))
  }
}

// export default withRouter(({history, location, match})=>{ 
//   return <AppHeader history={history} location={location}/>
// })
export default withRouter(connect(() => {},mapDispatchToProps)(AppHeader))

