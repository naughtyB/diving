import React from 'react';
import { Menu, Spin } from 'antd';
import { doGetCourseData } from '../../../redux/action/course.js';
import { connect } from 'react-redux';
import './index.css';

export class AppContentCourse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedKeys: ['0']
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillMount(){
    this.props.onGetCourseData()
  }
  handleSelect({item, key, selectedKeys}){
    if(this.state.selectedKeys[0] !== selectedKeys[0]){
      this.setState({
        selectedKeys: [selectedKeys[0]]
      })
    }
  }
  render(){
    let { isGettingCourseData, courseData } = this.props;
    if(courseData.length > 0){
      return (
        <Spin spinning={isGettingCourseData}>
          <div className="app-content-course">
            <div className="app-content-course-menu">
              <Menu
                onSelect={this.handleSelect}
                style={{ width: 256 }}
                selectedKeys={this.state.selectedKeys}
                mode="inline"
              >
                {courseData.map((item, index) => {
                  return (
                    <Menu.Item key={index} className="app-content-course-menu-each">
                      {item.name}
                    </Menu.Item>
                  )
                })}
              </Menu>
            </div>
            <div className="app-content-course-introduce" dangerouslySetInnerHTML={{__html: courseData[this.state.selectedKeys[0]]['detail']}}></div>
          </div>
        </Spin>
      )
    }
    else{
      return (
        <Spin spinning={isGettingCourseData}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingCourseData: state.course.isGettingCourseData,
    courseData: state.course.courseData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCourseData: () => dispatch(doGetCourseData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentCourse);