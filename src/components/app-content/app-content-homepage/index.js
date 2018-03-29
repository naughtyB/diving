import React from 'react';
import { message, Spin } from 'antd';
import { connect } from 'react-redux';
import AppContentHomePageBanner from './app-content-homepage-banner/index.js';
import { doGetHomepageData } from '../../../redux/action/homepage.js';

export class AppContentHomepage extends React.Component{
  componentWillMount(){
    this.props.onGetHomepageData(message);
  }
  render(){
    const {banner} = this.props.homepageData;
    return (
      [
        <Spin key="banner" spinning={this.props.isGettingData} style={{height: '100%'}}>
          <AppContentHomePageBanner banner={banner}/>
        </Spin>
      ]
    )
  }
}

const mapStateToProps = (state) => {
  return {
    homepageData: state.homepage.data,
    isGettingData: state.homepage.isGettingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetHomepageData: (message) => dispatch(doGetHomepageData(message))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(AppContentHomepage);