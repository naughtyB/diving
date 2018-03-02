import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_HOMEPAGE_DATA_REQUEST_POST = 'GET_HOMEPAGE_DATA_REQUEST_POST';

export const GET_HOMEPAGE_DATA_RECEIVE_SUCCESS_POST = 'GET_HOMEPAGE_DATA_RECEIVE_SUCCESS_POST';

export const GET_HOMEPAGE_DATA_RECEIVE_ERROR_POST = 'GET_HOMEPAGE_DATA_RECEIVE_ERROR_POST';

export const doGetHomepageDataRequestPost = () => {
  return {
    type: GET_HOMEPAGE_DATA_REQUEST_POST
  }
}

export const doGetHomepageDataReceiveSuccessPost = (homepageData) => {
  return {
    type: GET_HOMEPAGE_DATA_RECEIVE_SUCCESS_POST,
    homepageData
  }
}

export const doGetHomepageDataReceiveErrorPost = () => {
  return {
    type: GET_HOMEPAGE_DATA_RECEIVE_ERROR_POST
  }
}

export const doGetHomepageData = (message) => (dispatch) => {
  dispatch(doGetHomepageDataRequestPost());
  fetch('/server/homepage/data',{
    method: 'get',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    }  
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.error){
      dispatch(doGetHomepageDataReceiveErrorPost());
      message.error("发生错误，请重新刷新")
    }
    else{
      dispatch(doGetHomepageDataReceiveSuccessPost(res.homepageData))
    }
  })
}