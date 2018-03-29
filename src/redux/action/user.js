import fetch from 'isomorphic-fetch';
import Promise from 'promise-polyfill';
import Cookies from 'js-cookie'; 
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}



//改变登录框的显示
export const CHANGE_USER_LOGIN_MODAL_VISIBLE = 'CHANGE_USER_LOGIN_MODAL_VISIBLE';

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

//获取用户人员列表
export const GET_USER_PERSON_REQUEST_POST = 'GET_USER_PERSON_REQUEST_POST';

export const GET_USER_PERSON_RECEIVE_SUCCESS_POST = 'GET_USER_PERSON_RECEIVE_SUCCESS_POST';

export const GET_USER_PERSON_RECEIVE_OTHER_ERROR_POST = 'GET_USER_PERSON_RECEIVE_OTHER_ERROR_POST';

export const GET_USER_PERSON_RECEIVE_LOGIN_ERROR_POST = 'GET_USER_PERSON_RECEIVE_LOGIN_ERROR_POST';

export const CHANGE_USER_PERSON_SELECTED_ROW_KEYS = 'CHANGE_USER_PERSON_SELECTED_ROW_KEYS';

//改变添加用户人员弹出框的显示
export const CHANGE_USER_PERSON_MODAL_VISIBLE = 'CHANGE_USER_PERSON_MODAL_VISIBLE';

//改变用户人员弹出框信息
export const CHANGE_USER_PERSON_MODAL_FIELDS = 'CHANGE_USER_PERSON_MODAL_FIELDS'; 

//用户添加修改人员
export const SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST = 'SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST'; 

export const SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_SUCCESS_POST = 'SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_SUCCESS_POST';

export const SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST = 'SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST';

export const SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST = 'SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST';

//删除人员
export const DELETE_USER_PERSON_REQUEST_POST = 'DELETE_USER_PERSON_REQUEST_POST';

export const DELETE_USER_PERSON_RECEIVE_SUCCESS_POST = 'DELETE_USER_PERSON_RECEIVE_SUCCESS_POST';

export const DELETE_USER_PERSON_RECEIVE_OTHER_ERROR_POST = 'DELETE_USER_PERSON_RECEIVE_OTHER_ERROR_POST';

export const DELETE_USER_PERSON_RECEIVE_LOGIN_ERROR_POST = 'DELETE_USER_PERSON_RECEIVE_LOGIN_ERROR_POST';


//获取用户收货信息列表

export const GET_USER_DELIVERY_REQUEST_POST = 'GET_USER_DELIVERY_REQUEST_POST';

export const GET_USER_DELIVERY_RECEIVE_SUCCESS_POST = 'GET_USER_DELIVERY_RECEIVE_SUCCESS_POST';

export const GET_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST = 'GET_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST';

export const GET_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST = 'GET_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST';

export const CHANGE_USER_DELIVERY_SELECTED_ROW_KEYS = 'CHANGE_USER_DELIVERY_SELECTED_ROW_KEYS';

//改变添加用户收货弹出框的显示
export const CHANGE_USER_DELIVERY_MODAL_VISIBLE = 'CHANGE_USER_DELIVERY_MODAL_VISIBLE';

//改变用户收货弹出框信息
export const CHANGE_USER_DELIVERY_MODAL_FIELDS = 'CHANGE_USER_DELIVERY_MODAL_FIELDS'; 

//用户添加修改收货地址
export const SUBMIT_USER_DELIVERY_MODAL_FIELDS_REQUEST_POST = 'SUBMIT_USER_DELIVERY_MODAL_FIELDS_REQUEST_POST'; 

export const SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_SUCCESS_POST = 'SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_SUCCESS_POST';

export const SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST = 'SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST';

export const SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST = 'SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST';

//删除人员
export const DELETE_USER_DELIVERY_REQUEST_POST = 'DELETE_USER_DELIVERY_REQUEST_POST';

export const DELETE_USER_DELIVERY_RECEIVE_SUCCESS_POST = 'DELETE_USER_DELIVERY_RECEIVE_SUCCESS_POST';

export const DELETE_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST = 'DELETE_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST';

export const DELETE_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST = 'DELETE_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST';

//创建练习订单
export const CREATE_PRACTICE_APPOINTMENT_ORDER_REQUEST_POST = 'CREATE_PRACTICE_APPOINTMENT_ORDER_REQUEST_POST';

export const CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST = 'CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST';

export const CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST = 'CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST';

export const CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST = 'CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST';

//改变用户订单页面的activeKey
export const CHANGE_USER_ORDER_ACTIVE_KEY = 'CHANGE_USER_ORDER_ACTIVE_KEY';

//获取用户练习订单
export const GET_USER_ORDER_REQUEST_POST = 'GET_USER_ORDER_REQUEST_POST';

export const GET_USER_ORDER_RECEIVE_SUCCESS_POST = 'GET_USER_ORDER_RECEIVE_SUCCESS_POST';

export const GET_USER_ORDER_RECEIVE_OTHER_ERROR_POST = 'GET_USER_ORDER_RECEIVE_OTHER_ERROR_POST';

export const GET_USER_ORDER_RECEIVE_LOGIN_ERROR_POST = 'GET_USER_ORDER_RECEIVE_LOGIN_ERROR_POST';

//创建行程订单
export const CREATE_TRIP_APPOINTMENT_ORDER_REQUEST_POST = 'CREATE_TRIP_APPOINTMENT_ORDER_REQUEST_POST';

export const CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST = 'CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST';

export const CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST = 'CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST';

export const CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST = 'CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST';

//创建装备订单
export const CREATE_EQUIPMENT_APPOINTMENT_ORDER_REQUEST_POST = 'CREATE_EQUIPMENT_APPOINTMENT_ORDER_REQUEST_POST';

export const CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST = 'CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST';

export const CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST = 'CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST';

export const CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST = 'CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST';


export const doChangeUserLoginModalVisible = (loginModalVisible) => {
  return {
    type: CHANGE_USER_LOGIN_MODAL_VISIBLE,
    loginModalVisible
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
  return fetch('/server/user/login',{
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
  return fetch('/server/user/register',{
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
  return fetch('/server/user/resetPassword',{
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
  return fetch('/server/user/changeUserData', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: 'username=' + encodeURIComponent(username) + '&sex=' + encodeURIComponent(sex),
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

export const doGetUserDataFields = () => (dispatch) => {
  dispatch(doGetUserDataFieldsRequestPost());
  return fetch('/server/user/getUserDataFields',{
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
    }
  })
}

export const doGetUserPersonRequestPost = () => {
  return {
    type: GET_USER_PERSON_REQUEST_POST
  }
}

export const doGetUserPersonReceiveSuccessPost = (person) => {
  return {
    type: GET_USER_PERSON_RECEIVE_SUCCESS_POST,
    person
  }
}

export const doGetUserPersonReceiveOtherErrorPost = () => {
  return {
    type: GET_USER_PERSON_RECEIVE_OTHER_ERROR_POST
  }
}

export const doGetUserPersonReceiveLoginErrorPost = () => {
  return {
    type: GET_USER_PERSON_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doGetUserPerson = () => (dispatch) => {
  dispatch(doGetUserPersonRequestPost());
  return fetch('/server/user/getUserPerson', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.loginState){
      dispatch(doGetUserPersonReceiveSuccessPost(res.person));
    }
    else if(res.err){
      dispatch(doGetUserPersonReceiveOtherErrorPost());
    }
    else{
      dispatch(doGetUserPersonReceiveLoginErrorPost());
    }
  })
}

export const doChangeUserPersonSelectedRowKeys = (personSelectedRowKeys) => {
  return {
    type: CHANGE_USER_PERSON_SELECTED_ROW_KEYS,
    personSelectedRowKeys
  }
}

export const doChangeUserPersonModalVisible = (personModalVisible, personModalType, name, mobileNumber, currentPersonId) => {
  return {
    type: CHANGE_USER_PERSON_MODAL_VISIBLE,
    personModalVisible,
    personModalType,
    name,
    mobileNumber,
    currentPersonId
  }
}

export const doChangeUserPersonModalFields = (personModalFieldsChanged) => {
  return {
    type: CHANGE_USER_PERSON_MODAL_FIELDS,
    personModalFieldsChanged
  }
}

export const doSubmitUserPersonModalFieldsRequestPost = () => {
  return {
    type: SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST
  }
}

export const doSubmitUserPersonModalFieldsReceiveSuccessPost = (person) => {
  return {
    type: SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_SUCCESS_POST,
    person
  }
}

export const doSubmitUserPersonModalFieldsReceiveLoginErrorPost = () => {
  return {
    type: SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doSubmitUserPersonModalFieldsReceiveOtherErrorPost = (errorType, error) => {
  return {
    type: SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitUserPersonModalFields = (submitType, name, mobileNumber, personId) => (dispatch) => {
  dispatch(doSubmitUserPersonModalFieldsRequestPost());
  if(submitType === 'add'){
    return fetch('/server/user/addUserPerson', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: 'name=' + encodeURIComponent(name) + '&mobileNumber=' + encodeURIComponent(mobileNumber),
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doSubmitUserPersonModalFieldsReceiveSuccessPost(res.person));
    }
    else{
      if(res.error){
        dispatch(doSubmitUserPersonModalFieldsReceiveOtherErrorPost(res.errorType, res.error))
      }
      else{
        dispatch(doSubmitUserPersonModalFieldsReceiveLoginErrorPost());
      }
    }
  })
  }
  else if(submitType === 'modify'){
    return fetch('/server/user/modifyUserPerson', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + encodeURIComponent(name) + '&mobileNumber=' + encodeURIComponent(mobileNumber) + '&personId=' + personId,
      credentials: 'include'
    }).then(res => {
      return res.json();
    }).then(res => {
      if(res.isSuccessful){
        dispatch(doSubmitUserPersonModalFieldsReceiveSuccessPost(res.person));
      }
      else{
        if(res.error){
          dispatch(doSubmitUserPersonModalFieldsReceiveOtherErrorPost(res.errorType, res.error))
        }
        else{
          dispatch(doSubmitUserPersonModalFieldsReceiveLoginErrorPost());
        }
      }
    })
  }
}

export const doDeleteUserPersonRequestPost = () => {
  return {
    type: DELETE_USER_PERSON_REQUEST_POST
  }
}

export const doDeleteUserPersonReceiveSuccessPost = (person) => {
  return {
    type: DELETE_USER_PERSON_RECEIVE_SUCCESS_POST,
    person
  }
}

export const doDeleteUserPersonReceiveOtherErrorPost = () => {
  return {
    type: DELETE_USER_PERSON_RECEIVE_OTHER_ERROR_POST
  }
}

export const doDeleteUserPersonReceiveLoginErrorPost = () => {
  return {
    type: DELETE_USER_PERSON_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doDeleteUserPerson = (personId, successCallback, errCallback) => (dispatch) => {
  dispatch(doDeleteUserPersonRequestPost());
  return fetch('/server/user/deleteUserPerson', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'personId=' + encodeURIComponent(personId),
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doDeleteUserPersonReceiveSuccessPost(res.person));
      successCallback && successCallback();
    }
    else if(res.error){
      dispatch(doDeleteUserPersonReceiveOtherErrorPost());
      errCallback && errCallback();
    }
    else{
      dispatch(doDeleteUserPersonReceiveLoginErrorPost());
    }
  })
}

export const doGetUserDeliveryRequestPost = () => {
  return {
    type: GET_USER_DELIVERY_REQUEST_POST
  }
}

export const doGetUserDeliveryReceiveSuccessPost = (delivery) => {
  return {
    type: GET_USER_DELIVERY_RECEIVE_SUCCESS_POST,
    delivery
  }
}

export const doGetUserDeliveryReceiveOtherErrorPost = () => {
  return {
    type: GET_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST
  }
}

export const doGetUserDeliveryReceiveLoginErrorPost = () => {
  return {
    type: GET_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doGetUserDelivery = () => (dispatch) => {
  dispatch(doGetUserDeliveryRequestPost());
  return fetch('/server/user/getUserDelivery', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.loginState){
      dispatch(doGetUserDeliveryReceiveSuccessPost(res.delivery));
    }
    else if(res.err){
      dispatch(doGetUserDeliveryReceiveOtherErrorPost());
    }
    else{
      dispatch(doGetUserDeliveryReceiveLoginErrorPost());
    }
  })
}

export const doChangeUserDeliverySelectedRowKeys = (deliverySelectedRowKeys) => {
  return {
    type: CHANGE_USER_DELIVERY_SELECTED_ROW_KEYS,
    deliverySelectedRowKeys
  }
}


export const doChangeUserDeliveryModalVisible = (deliveryModalVisible, deliveryModalType, name, mobileNumber, address, currentDeliveryId) => {
  return {
    type: CHANGE_USER_DELIVERY_MODAL_VISIBLE,
    deliveryModalVisible,
    deliveryModalType,
    name,
    mobileNumber,
    address,
    currentDeliveryId
  }
}

export const doChangeUserDeliveryModalFields = (deliveryModalFieldsChanged) => {
  return {
    type: CHANGE_USER_DELIVERY_MODAL_FIELDS,
    deliveryModalFieldsChanged
  }
}

export const doSubmitUserDeliveryModalFieldsRequestPost = () => {
  return {
    type: SUBMIT_USER_DELIVERY_MODAL_FIELDS_REQUEST_POST
  }
}

export const doSubmitUserDeliveryModalFieldsReceiveSuccessPost = (delivery) => {
  return {
    type: SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_SUCCESS_POST,
    delivery
  }
}

export const doSubmitUserDeliveryModalFieldsReceiveLoginErrorPost = () => {
  return {
    type: SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doSubmitUserDeliveryModalFieldsReceiveOtherErrorPost = (errorType, error) => {
  return {
    type: SUBMIT_USER_DELIVERY_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST,
    errorType,
    error
  }
}

export const doSubmitUserDeliveryModalFields = (submitType, name, mobileNumber, address, deliveryId) => (dispatch) => {
  dispatch(doSubmitUserDeliveryModalFieldsRequestPost());
  if(submitType === 'add'){
    return fetch('/server/user/addUserDelivery', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: 'name=' + encodeURIComponent(name) + '&mobileNumber=' + encodeURIComponent(mobileNumber) + '&address=' + encodeURIComponent(address),
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doSubmitUserDeliveryModalFieldsReceiveSuccessPost(res.delivery));
    }
    else{
      if(res.error){
        dispatch(doSubmitUserDeliveryModalFieldsReceiveOtherErrorPost(res.errorType, res.error))
      }
      else{
        dispatch(doSubmitUserDeliveryModalFieldsReceiveLoginErrorPost());
      }
    }
  })
  }
  else if(submitType === 'modify'){
    return fetch('/server/user/modifyUserDelivery', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + encodeURIComponent(name) + '&mobileNumber=' + encodeURIComponent(mobileNumber) + '&deliveryId=' + deliveryId + '&address=' + encodeURIComponent(address),
      credentials: 'include'
    }).then(res => {
      return res.json();
    }).then(res => {
      if(res.isSuccessful){
        dispatch(doSubmitUserDeliveryModalFieldsReceiveSuccessPost(res.delivery));
      }
      else{
        if(res.error){
          dispatch(doSubmitUserDeliveryModalFieldsReceiveOtherErrorPost(res.errorType, res.error))
        }
        else{
          dispatch(doSubmitUserDeliveryModalFieldsReceiveLoginErrorPost());
        }
      }
    })
  }
}

export const doDeleteUserDeliveryRequestPost = () => {
  return {
    type: DELETE_USER_DELIVERY_REQUEST_POST
  }
}

export const doDeleteUserDeliveryReceiveSuccessPost = (delivery) => {
  return {
    type: DELETE_USER_DELIVERY_RECEIVE_SUCCESS_POST,
    delivery
  }
}

export const doDeleteUserDeliveryReceiveOtherErrorPost = () => {
  return {
    type: DELETE_USER_DELIVERY_RECEIVE_OTHER_ERROR_POST
  }
}

export const doDeleteUserDeliveryReceiveLoginErrorPost = () => {
  return {
    type: DELETE_USER_DELIVERY_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doDeleteUserDelivery = (deliveryId, successCallback, errCallback) => (dispatch) => {
  dispatch(doDeleteUserDeliveryRequestPost());
  return fetch('/server/user/deleteUserDelivery', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'deliveryId=' + encodeURIComponent(deliveryId),
    credentials: 'include'
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doDeleteUserDeliveryReceiveSuccessPost(res.delivery));
      successCallback && successCallback();
    }
    else if(res.error){
      dispatch(doDeleteUserDeliveryReceiveOtherErrorPost());
      errCallback && errCallback();
    }
    else{
      dispatch(doDeleteUserDeliveryReceiveLoginErrorPost());
    }
  })
}

export const doCreatePracticeAppointmentOrderReuqestPost = () => {
  return {
    type: CREATE_PRACTICE_APPOINTMENT_ORDER_REQUEST_POST
  }
}

export const doCreatePracticeAppointmentOrderReceiveSuccessPost = () => {
  return {
    type: CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST
  }
}

export const doCreatePracticeAppointmentOrderReceiveOtherErrorPost = () => {
  return {
    type: CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST
  }
}

export const doCreatePracticeAppointmentOrderReceiveLoginErrorPost = () => {
  return {
    type: CREATE_PRACTICE_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doCreatePracticeAppointmentOrder = (orderData, successCallback, otherErrCallback, loginErrCallback) => (dispatch) => {
  dispatch(doCreatePracticeAppointmentOrderReuqestPost());
  return fetch('/server/practiceAppointment/createOrder', {
    method: 'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: orderData,
    credentials: 'include'
  }).then((res) => {
    return res.json();
  }).then((res) => {
    if(res.isSuccessful){
      dispatch(doCreatePracticeAppointmentOrderReceiveSuccessPost());
      successCallback && successCallback();
    }
    else if(res.error){
      dispatch(doCreatePracticeAppointmentOrderReceiveOtherErrorPost());
      otherErrCallback && otherErrCallback();
    }
    else{
      dispatch(doCreatePracticeAppointmentOrderReceiveLoginErrorPost());
      loginErrCallback && loginErrCallback();
    }
  })
}

export const doChangeUserOrderActiveKey = (orderActiveKey) => {
  return {
    type: CHANGE_USER_ORDER_ACTIVE_KEY,
    orderActiveKey
  }
}

export const doGetUserOrderRequestPost = () => {
  return {
    type: GET_USER_ORDER_REQUEST_POST
  }
}

export const doGetUserOrderReceiveSuccessPost = (practiceOrder) => {
  return {
    type: GET_USER_ORDER_RECEIVE_SUCCESS_POST,
    practiceOrder: practiceOrder.sort((a, b) => {
      return Number(b.createTime) - Number(a.createTime)
    })
  }
}

export const doGetUserOrderReceiveOtherErrorPost = () => {
  return {
    type: GET_USER_ORDER_RECEIVE_OTHER_ERROR_POST
  }
}

export const doGetUserOrderReceiveLoginErrorPost = () => {
  return {
    type: GET_USER_ORDER_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doGetUserOrder = () => (dispatch) => {
  dispatch(doGetUserOrderRequestPost());
  return fetch('/server/user/getUserPracticeOrder', {
    method: 'get',
    credentials: 'include',
    headers: {
      'content-type' : 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doGetUserOrderReceiveSuccessPost(res.practiceOrder))
    }
    else if(res.err){
      dispatch(doGetUserOrderReceiveOtherErrorPost());
    }
    else{
      dispatch(doGetUserOrderReceiveLoginErrorPost());
    }
  })
}

export const doCreateTripAppointmentOrderReuqestPost = () => {
  return {
    type: CREATE_TRIP_APPOINTMENT_ORDER_REQUEST_POST
  }
}

export const doCreateTripAppointmentOrderReceiveSuccessPost = () => {
  return {
    type: CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST
  }
}

export const doCreateTripAppointmentOrderReceiveOtherErrorPost = () => {
  return {
    type: CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST
  }
}

export const doCreateTripAppointmentOrderReceiveLoginErrorPost = () => {
  return {
    type: CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doCreateTripAppointmentOrder = (orderData, successCallback, otherErrCallback, loginErrCallback) => (dispatch) => {
  dispatch(doCreateTripAppointmentOrderReuqestPost());
  return fetch('/server/tripAppointment/createOrder', {
    method: 'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: orderData,
    credentials: 'include'
  }).then((res) => {
    return res.json();
  }).then((res) => {
    if(res.isSuccessful){
      dispatch(doCreateTripAppointmentOrderReceiveSuccessPost());
      successCallback && successCallback();
    }
    else if(res.error){
      dispatch(doCreateTripAppointmentOrderReceiveOtherErrorPost());
      otherErrCallback && otherErrCallback();
    }
    else{
      dispatch(doCreateTripAppointmentOrderReceiveLoginErrorPost());
      loginErrCallback && loginErrCallback();
    }
  })
}

export const doCreateEquipmentAppointmentOrderReuqestPost = () => {
  return {
    type: CREATE_EQUIPMENT_APPOINTMENT_ORDER_REQUEST_POST
  }
}

export const doCreateEquipmentAppointmentOrderReceiveSuccessPost = () => {
  return {
    type: CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST
  }
}

export const doCreateEquipmentAppointmentOrderReceiveOtherErrorPost = () => {
  return {
    type: CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST
  }
}

export const doCreateEquipmentAppointmentOrderReceiveLoginErrorPost = () => {
  return {
    type: CREATE_EQUIPMENT_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST
  }
}

export const doCreateEquipmentAppointmentOrder = (orderData, successCallback, otherErrCallback, loginErrCallback) => (dispatch) => {
  dispatch(doCreateEquipmentAppointmentOrderReuqestPost());
  return fetch('/server/equipment/createOrder', {
    method: 'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: orderData,
    credentials: 'include'
  }).then((res) => {
    return res.json();
  }).then((res) => {
    if(res.isSuccessful){
      dispatch(doCreateEquipmentAppointmentOrderReceiveSuccessPost());
      successCallback && successCallback();
    }
    else if(res.error){
      dispatch(doCreateEquipmentAppointmentOrderReceiveOtherErrorPost());
      otherErrCallback && otherErrCallback();
    }
    else{
      dispatch(doCreateEquipmentAppointmentOrderReceiveLoginErrorPost());
      loginErrCallback && loginErrCallback();
    }
  })
}