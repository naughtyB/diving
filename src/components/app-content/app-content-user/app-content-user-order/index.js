import React from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import AppContentUserOrderPractice from './app-content-user-order-practice/index.js';
import { doChangeUserOrderActiveKey } from '../../../../redux/action/user.js';
const TabPane = Tabs.TabPane;

let transformHash = (hash) => {
  let hashData={};
  hash.slice(1).split("&").forEach((item,index)=>{
      let arr=item.split("=");
      hashData[arr[0]]=decodeURIComponent(arr[1]);
  });
  return hashData;
};

let keyArr = ['practice', 'trip', 'equipment'];

export class AppContentUserOrder extends React.Component{
  constructor(props){
    super(props);
    this.handleActiveKeyChange = this.handleActiveKeyChange.bind(this);
  }
  handleActiveKeyChange(activeKey){
    this.props.history.push({
      pathname: '/user/userOrder',
      hash: 'activeKey=' + encodeURIComponent(activeKey)
    })
  }
  componentWillMount(){
    let hash = this.props.location.hash;
    let key = hash && transformHash(hash)['activeKey'];
    keyArr.includes(key) ? this.props.onChangeUserOrderActiveKey(key) : this.props.history.push({
      pathname: '/user/userOrder',
      hash: 'activeKey=' + encodeURIComponent('practice')
    });
  }
  componentWillUpdate(nextProps){
    let hash = this.props.location.hash;
    let newHash = nextProps.location.hash;
    if(hash !== newHash){
      this.props.onChangeUserOrderActiveKey(transformHash(newHash)['activeKey'])
    }
  }
  render(){
    return (
      <Tabs onChange={(activeKey) => {this.handleActiveKeyChange(activeKey)}} activeKey={this.props.activeKey}>
        <TabPane tab="潜水练习" key="practice">
          <AppContentUserOrderPractice/>
        </TabPane>
        <TabPane tab="潜水行程" key="trip">Content of Tab Pane 2</TabPane>
        <TabPane tab="潜水装备" key="equipment">Content of Tab Pane 3</TabPane>
      </Tabs>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeKey: state.user.orderActiveKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserOrderActiveKey: (orderActiveKey) => dispatch(doChangeUserOrderActiveKey(orderActiveKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserOrder);