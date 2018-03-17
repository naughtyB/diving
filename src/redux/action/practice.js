import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_PRACTICE_DATA_REQUEST_POST = 'GET_PRACTICE_DATA_REQUEST_POST';

export const GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST = 'GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST';

export const GET_PRACTICE_DATA_RECEIVE_ERROR_POST = 'GET_PRACTICE_DATA_RECEIVE_ERROR_POST';

export const CHANGE_PRACTICE_DISPLAY_INDEX = 'CHANGE_PRACTICE_DISPLAY_INDEX';

export const CHANGE_PRACTICE_APPOINTMENT_FIRST_DIELDS = 'CHANGE_PRACTICE_APPOINTMENT_FIRST_DIELDS';

export const CHANGE_PRACTICE_APPOINTMENT_STEP = 'CHANGE_PRACTICE_APPOINTMENT_STEP';

export const doGetPracticeDataRequestPost = () => {
  return {
    type: GET_PRACTICE_DATA_REQUEST_POST
  }
}

export const doGetPracticeDataReceiveSuccessPost = (practiceData) => {
  return {
    type: GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST,
    practiceData
  }
}

export const doGetPracticeDataReceiveErrorPost = () => {
  return {
    type: GET_PRACTICE_DATA_RECEIVE_ERROR_POST
  }
}

export const doGetPracticeData = (message) => (dispatch) => {
  dispatch(doGetPracticeDataRequestPost());
  fetch('/server/practice/data',{
    method: 'get',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    }  
  }).then(res => {
    return res.json()
  }).then(res => {
    console.log(res)
    if(res.error){
      dispatch(doGetPracticeDataReceiveErrorPost());
      message.error("发生错误，请重新刷新")
    }
    else{
      dispatch(doGetPracticeDataReceiveSuccessPost(res.practiceData))
    }
  })
}

export const doChangePracticeDisplayIndex = (displayIndex) => {
  return {
    type: CHANGE_PRACTICE_DISPLAY_INDEX,
    displayIndex
  }
}

export const doChangePracticeAppointmentFirstFields = (practiceAppointmentFirstFieldsChanged) => {
  return {
    type: CHANGE_PRACTICE_APPOINTMENT_FIRST_DIELDS,
    practiceAppointmentFirstFieldsChanged
  }
}

export const doChangePracticeAppointmentStep = (practiceAppointmentStep) => {
  return {
    type: CHANGE_PRACTICE_APPOINTMENT_STEP,
    practiceAppointmentStep
  }
}