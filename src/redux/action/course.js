import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_COURSE_DATA_REQUEST_POST = 'GET_COURSE_DATA_REQUEST_POST';

export const GET_COURSE_DATA_RECEIVE_SUCCESS_POST = 'GET_COURSE_DATA_RECEIVE_SUCCESS_POST';

export const GET_COURSE_DATA_RECEIVE_ERROR_POST = 'GET_COURSE_DATA_RECEIVE_ERROR_POST';

export const doGetCourseDataRequestPost = () => {
  return {
    type: GET_COURSE_DATA_REQUEST_POST
  }
}

export const doGetCourseDataReceiveSuccessPost = (courseData) => {
  return {
    type: GET_COURSE_DATA_RECEIVE_SUCCESS_POST,
    courseData
  }
}

export const doGetCourseDataReceiveErrorPost = (courseData) => {
  return {
    type: GET_COURSE_DATA_RECEIVE_ERROR_POST,
    courseData
  }
}

export const doGetCourseData = () => (dispatch) => {
  dispatch(doGetCourseDataRequestPost());
  return fetch('/server/course/getCourseData', {
    method: 'get',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return res.json();
  }).then(res => {
    if(!res.isSuccessful){
      dispatch(doGetCourseDataReceiveErrorPost(undefined))
    }
    else{
      dispatch(doGetCourseDataReceiveSuccessPost(res.courseData));
    }
  })
}