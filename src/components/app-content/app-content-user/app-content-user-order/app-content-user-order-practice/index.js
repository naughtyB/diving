import React from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Tag, Spin } from 'antd';
import { doGetUserOrder } from '../../../../../redux/action/user.js';
import './index.css';

export class AppContentUserOrderPractice extends React.Component{
  componentWillMount(){
    this.props.onGetUserOrder();
  }
  componentWillUpdate(nextProps){
    let key = this.props.activeKey;
    let newKey = nextProps.activeKey;
    if(key !== newKey && newKey === 'practice'){
      this.props.onGetUserOrder();
    }
  }
  render(){
    let { isGettingUserPracticeOrder, isGettingUserPracticeOrderSuccessful, practiceOrder } = this.props;
    if(!isGettingUserPracticeOrder && isGettingUserPracticeOrderSuccessful){
      if(practiceOrder.length > 0){
        return (
          <List
            itemLayout="horizontal"
            className="app-content-user-order-practice"
            dataSource={this.props.practiceOrder}
            renderItem={item => (
              <List.Item actions={[<a>申请退款</a>]}>
                <List.Item.Meta
                  className="app-content-user-order-practice-list-meta"
                  avatar={<Avatar className="app-content-user-order-practice-list-avatar" src={item.practice.imgUrl} />}
                  title={
                    <div>
                      <a href="#">{item.practice.name}</a>
                      <span className="app-content-user-order-practice-list-orderId">订单号: {item['_id']}</span>
                    </div>
                  }
                  description={
                    <ul className="app-content-user-order-practice-list-description">
                      <li>预定日期: {item.practiceTime.date}</li>
                      <li>预定时间: {item.practiceTime.time}</li>
                      <li>参加的人员: {item.person.map((item, index) => {
                        return <Tag key={index} color='blue'>{item.name}</Tag>
                      })}</li>
                    </ul>
                  }
                />
                <div style={{color: '#1890ff'}}>{item.status}</div>
              </List.Item>
            )}
          />
        )
      }
      else{
        return (
          <div>暂无数据</div>
        )
      }
    }
    else if(isGettingUserPracticeOrder){
      return (
        <Spin spinning={true}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
    else{
      return (
        <div>网络连接发生错误  请重新刷新</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingUserPracticeOrder: state.user.isGettingUserPracticeOrder,
    isGettingUserPracticeOrderSuccessful: state.user.isGettingUserPracticeOrderSuccessful,
    practiceOrder: state.user.practiceOrder,
    activeKey: state.user.orderActiveKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserOrder: () => dispatch(doGetUserOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentUserOrderPractice);