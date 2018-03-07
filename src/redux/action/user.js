import fetch from 'isomorphic-fetch';
import Promise from 'promise-polyfill';
import Cookies from 'js-cookie'; 
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}



//改变登录框的显示
export const CHANGE_USER_MODAL_VISIBLE = 'CHANGE_USER_MODAL_VISIBLE';

//改变用户登录资料
export const CHANGE_USER_LOGIN_FIELDS = 'CHANGE_USER_LOGIN_FIELDS';

//用户提交登录申请
export const SUBMIT_LOGIN_REQUEST_POST = 'SUBMIT_LOGIN_REQUEST_POST';

export const SUBMIT_LOGIN_RECEIVE_SUCCESS_POST = 'SUBMIT_LOGIN_RECEIVE_SUCCESS_POST';

export const SUBMIT_LOGIN_RECEIVE_ERROR_POST = 'SUBMIT_LOGIN_RECEIVE_ERROR_POST';

//改变用户登录状态
export const CHANGE_LOGINSTATE = 'CHANGE_LOGINSTATE';

//改变用户注册资料
export const CHANGE_USER_REGISTER_FIELDS = 'CHANGE_USER_REGISTER_FIELDS';

//用户提交注册申请
export const SUBMIT_REGISTER_REQUEST_POST = 'SUBMIT_REGISTER_REQUEST_POST';

export const SUBMIT_REGISTER_RECEIVE_SUCCESS_POST = 'SUBMIT_REGISTER_RECEIVE_SUCCESS_POST';

export const SUBMIT_REGISTER_RECEIVE_ERROR_POST = 'SUBMIT_REGISTER_RECEIVE_ERROR_POST';

//改变用户找回密码资料
export const CHANGE_USER_RESET_PASSWORD_FIELDS = 'CHANGE_USER_RESET_PASSWORD_FIELDS';

//用户提交修改密码申请
export const SUBMIT_RESET_PASSWORD_REQUEST_POST = 'SUBMIT_RESET_PASSWORD_REQUEST_POST';

export const SUBMIT_RESET_PASSWORD_RECEIVE_SUCCESS_POST = 'SUBMIT_RESET_PASSWORD_RECEIVE_SUCCESS_POST';

export const SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST = 'SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST';

//改变用户资料
export const CHANGE_USER_DATA_FIELDS = 'CHANGE_USER_DATA_FIELDS';

//用户提交修改用户资料申请
export const SUBMIT_USER_DATA_REQUEST_POST = 'SUBMIT_USER_DATA_REQUEST_POST';

export const SUBMIT_USER_DATA_RECEIVE_SUCCESS_POST = 'SUBMIT_USER_DATA_RECEIVE_SUCCESS_POST';

export const SUBMIT_USER_DATA_RECEIVE_OTHER_ERROR_POST = 'SUBMIT_USER_DATA_RECEIVE_OTHER_ERROR_POST';

export const SUBMIT_USER_DATA_RECEIVE_LOGIN_ERROR_POST = 'SUBMIT_USER_DATA_RECEIVE_LOGIN_ERROR_POST';

//获取用户数据
export const GET_USER_DATA_FIELDS_REQUEST_POST = 'GET_USER_DATA_FIELDS_REQUEST_POST';

export const GET_USER_DATA_FIELDS_RECEIVE_SUCCESS_POST = 'GET_USER_DATA_FIELDS_RECEIVE_SUCCESS_POST';

export const GET_USER_DATA_FIELDS_RECEIVE_LOGIN_ERROR_POST = 'GET_USER_DATA_FIELDS_RECEIVE_LOGIN_ERROR_POST';

export const GET_USER_DATA_FIELDS_RECEIVE_OTHER_ERROR_POST = 'GET_USER_DATA_FIELDS_RECEIVE_OTHER_ERROR_POST';



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
      dispatch(doChangeLoginState(true));
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

export const doChangeUserRegisterFileds = (registerFieldsChanged) => {
  return {
    type: CHANGE_USER_REGISTER_FIELDS,
    registerFieldsChanged
  }
}

export const doSubmitRegisterRequestPost = () => {
  return {
    type:SUBMIT_REGISTER_REQUEST_POST
  }
}

export const doSubmitRegisterReceiveSuccessPost = () => {
  return {
    type:SUBMIT_REGISTER_RECEIVE_SUCCESS_POST
  }
}

export const doSubmitRegisterReceiveErrorPost = (errorType, error) => {
  return {
    type:SUBMIT_REGISTER_RECEIVE_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitRegister = (mobileNumber, password, username, captcha) => (dispatch) => {
  dispatch(doSubmitRegisterRequestPost());
  fetch('/server/user/register',{
    method: 'post',
    headers: {
      'content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'mobileNumber=' + encodeURIComponent(mobileNumber) + '&password=' + encodeURIComponent(password) + '&username=' + encodeURIComponent(username) + '&captcha=' + encodeURIComponent(captcha)
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doSubmitRegisterReceiveSuccessPost());
      dispatch(doChangeLoginState(true));
      Cookies.set('mobileNumber', res.userData['mobileNumber']);
      Cookies.set('userId',res.userData['_id']);
    }
    else{
      dispatch(doSubmitRegisterReceiveErrorPost(res.errorType, res.error))
    }
  })
}

export const doChangeUserResetPasswordFields = (resetPasswordFieldsChanged) => {
  return {
    type: CHANGE_USER_RESET_PASSWORD_FIELDS,
    resetPasswordFieldsChanged
  }
}

export const doSubmitResetPasswordRequestPost = () => {
  return {
    type: SUBMIT_RESET_PASSWORD_REQUEST_POST
  }
}

export const doSubmitResetPasswordReceiveSuccessPost = () => {
  return {
    type: SUBMIT_RESET_PASSWORD_RECEIVE_SUCCESS_POST
  }
}

export const doSubmitResetPasswordReceiveErrorPost = (errorType, error) => {
  return {
    type: SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitResetPassword = (mobileNumber, password, captcha) => (dispatch) =>{
  dispatch(doSubmitResetPasswordRequestPost());
  fetch('/server/user/resetPassword',{
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'mobileNumber=' + encodeURIComponent(mobileNumber) + '&password=' + encodeURIComponent(password) + '&captcha=' + encodeURIComponent(captcha)
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doSubmitResetPasswordReceiveSuccessPost());
      dispatch(doChangeLoginState(true));
      Cookies.set('mobileNumber', res.userData['mobileNumber']);
      Cookies.set('userId',res.userData['_id']);
    }
    else{
      dispatch(doSubmitResetPasswordReceiveErrorPost(res.errorType, res.error));
    }
  })
}

export const doChangeUserDataFields = (userDataFieldsChanged) => {
  return {
    type: CHANGE_USER_DATA_FIELDS,
    userDataFieldsChanged
  }
}

export const doSubmitUserDataRequestPost = () => {
  return {
    type: SUBMIT_USER_DATA_REQUEST_POST
  }
}

export const doSubmitUserDataReceiveSuccessPost = (userDataFields) => {
  return {
    type: SUBMIT_USER_DATA_RECEIVE_SUCCESS_POST,
    userDataFields
  }
}

export const doSubmitUserDataReceiveOtherErrorPost = (errorType, error) => {
  return {
    type: SUBMIT_USER_DATA_RECEIVE_OTHER_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitUserDataReceiveLoginErrorPost = () => {
  return {
    type: SUBMIT_USER_DATA_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doSubmitUserData = (username, sex, successCallback) => (dispatch) => {
  dispatch(doSubmitUserDataRequestPost());
  fetch('/server/user/changeUserData', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: 'username=' + username + '&sex=' + sex,
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(!res.loginState){
      dispatch(doSubmitUserDataReceiveLoginErrorPost())
    }
    else{
      if(res.isSuccessful){
        dispatch(doSubmitUserDataReceiveSuccessPost(res.userDataFields));
        successCallback && successCallback();
      }
      else{
        dispatch(doSubmitUserDataReceiveOtherErrorPost(res.errorType, res.error))
      }
    }
  })
}

export const doGetUserDataFieldsRequestPost = () => {
  return {
    type: GET_USER_DATA_FIELDS_REQUEST_POST
  }
}

export const doGetUserDataFieldsReceiveSuccessPost = (userDataFields) => {
  return {
    type: GET_USER_DATA_FIELDS_RECEIVE_SUCCESS_POST,
    userDataFields
  }
}

export const doGetUserDataFieldsReceiveOtherErrorPost = () =>{
  return {
    type: GET_USER_DATA_FIELDS_RECEIVE_OTHER_ERROR_POST
  }
}

export const doGetUserDataFieldsReceiveLoginErrorPost = () => {
  return {
    type:GET_USER_DATA_FIELDS_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doGetUserDataFields = (errCallback) => (dispatch) => {
  dispatch(doGetUserDataFieldsRequestPost());
  fetch('/server/user/getUserDataFields',{
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.loginState){
      dispatch(doGetUserDataFieldsReceiveSuccessPost(res.userDataFields));
    }
    else if(res.err){
      dispatch(doGetUserDataFieldsReceiveOtherErrorPost());
    }
    else{
      dispatch(doGetUserDataFieldsReceiveLoginErrorPost());
      errCallback && errCallback();
    }
  })
}