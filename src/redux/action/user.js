import fetch from 'isomorphic-fetch';
import Promise from 'promise-polyfill';
import Cookies from 'js-cookie'; 
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const CHANGE_USER_MODAL_VISIBLE = 'CHANGE_USER_MODAL_VISIBLE';

export const CHANGE_USER_LOGIN_FIELDS = 'CHANGE_USER_LOGIN_FIELDS';

export const SUBMIT_LOGIN_REQUEST_POST = 'SUBMIT_LOGIN_REQUEST_POST';

export const SUBMIT_LOGIN_RECEIVE_SUCCESS_POST = 'SUBMIT_LOGIN_RECEIVE_SUCCESS_POST';

export const SUBMIT_LOGIN_RECEIVE_ERROR_POST = 'SUBMIT_LOGIN_RECEIVE_ERROR_POST';

export const CHANGE_LOGINSTATE = 'CHANGE_LOGINSTATE';

export const doChangeUserModalVisible = (modalVisible) => {
  return {
    type: CHANGE_USER_MODAL_VISIBLE,
    modalVisible
  }
}

export const doChangeUserLoginFields = (loginFieldsChanged) => {
  return {
    type: CHANGE_USER_LOGIN_FIELDS,
    loginFieldsChanged
  }
}

export const doSubmitLoginRequestPost = () => {
  return {
    type: SUBMIT_LOGIN_REQUEST_POST
  }
}

export const doSubmitLoginReceiveSuccessPost = () => {
  return {
    type: SUBMIT_LOGIN_RECEIVE_SUCCESS_POST
  }
}

export const doSubmitLoginReceiveErrorPost = (errorType, error) => {
  return {
    type: SUBMIT_LOGIN_RECEIVE_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitLogin = (mobileNumber, password) => (dispatch) => {
  dispatch(doSubmitLoginRequestPost());
  fetch('/server/user/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:'mobileNumber=' + encodeURIComponent(mobileNumber) + '&password=' + encodeURIComponent(password)
  }).then(res => {
    return res.json();
  }).then(res => {
    if(!res.isCorrect){
      dispatch(doSubmitLoginReceiveErrorPost(res.errorType, res.error));
    }
    else{
      dispatch(doSubmitLoginReceiveSuccessPost());
      Cookies.set('mobileNumber', res.userData['mobileNumber']);
      Cookies.set('userId',res.userData['_id']);
    }
  })
}

export const doChangeLoginState = (loginState) => {
  return {
    type: CHANGE_LOGINSTATE,
    loginState
  }
}