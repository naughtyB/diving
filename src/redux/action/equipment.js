import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_EQUIPMENT_DATA_REQUEST_POST = 'GET_EQUIPMENT_DATA_REQUEST_POST';

export const GET_EQUIPMENT_DATA_RECEIVE_SUCCESS_POST = 'GET_EQUIPMENT_DATA_RECEIVE_SUCCESS_POST';

export const GET_EQUIPMENT_DATA_RECEIVE_ERROR_POST = 'GET_EQUIPMENT_DATA_RECEIVE_ERROR_POST';

export const CHANGE_EQUIPMENT_SELECTED_KEYS = 'CHANGE_EQUIPMENT_SELECTED_KEYS';

export const GET_EQUIPMENT_DETAIL_DATA_REQUEST_POST = 'GET_EQUIPMENT_DETAIL_DATA_REQUEST_POST';

export const GET_EQUIPMENT_DETAIL_DATA_RECEIVE_SUCCESS_POST = 'GET_EQUIPMENT_DETAIL_DATA_RECEIVE_SUCCESS_POST';

export const GET_EQUIPMENT_DETAIL_DATA_RECEIVE_ERROR_POST = 'GET_EQUIPMENT_DETAIL_DATA_RECEIVE_ERROR_POST';

export const CHANGE_IMG_DISPLAY_INDEX = 'CHANGE_IMG_DISPLAY_INDEX';

export const CHANGE_EQUIPMENT_APPOINTMENT_FIELDS = 'CHANGE_EQUIPMENT_APPOINTMENT_FIELDS'; 

export const CHANGE_EQUIPMENT_APPOINTMENT_MODAL_VISIBLE = 'CHANGE_EQUIPMENT_APPOINTMENT_MODAL_VISIBLE';

export const doGetEquipmentDataRequestPost = () => {
  return {
    type: GET_EQUIPMENT_DATA_REQUEST_POST
  }
}

export const doGetEquipmentDataReceiveSuccessPost = (equipmentData) => {
  return {
    type: GET_EQUIPMENT_DATA_RECEIVE_SUCCESS_POST,
    equipmentData
  }
}

export const doGetEquipmentDataReceiveErrorPost = () => {
  return {
    type: GET_EQUIPMENT_DATA_RECEIVE_ERROR_POST
  }
}

export const doGetEquipmentData = (equipmentType) => (dispatch) => {
  dispatch(doGetEquipmentDataRequestPost());
  return fetch('/server/equipment/getEquipmentData', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'type=' + encodeURIComponent(equipmentType)
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doGetEquipmentDataReceiveSuccessPost(res.equipmentData))
    }
    else{
      dispatch(doGetEquipmentDataReceiveErrorPost())
    }
  })
}

export const doChangeEquipmentSelectedKeys = (selectedKeys) => {
  return {
    type: CHANGE_EQUIPMENT_SELECTED_KEYS,
    selectedKeys
  }
}

export const doGetEquipmentDetailDataRequestPost = () => {
  return {
    type: GET_EQUIPMENT_DETAIL_DATA_REQUEST_POST
  }
}

export const doGetEquipmentDetailDataReceiveSuccessPost = (equipmentDetailData) => {
  return {
    type: GET_EQUIPMENT_DETAIL_DATA_RECEIVE_SUCCESS_POST,
    equipmentDetailData
  }
}

export const doGetEquipmentDetailDataReceiveErrorPost = () => {
  return {
    type: GET_EQUIPMENT_DETAIL_DATA_RECEIVE_ERROR_POST
  }
}

export const doGetEquipmentDetailData = (equipmentId) => (dispatch) => {
  dispatch(doGetEquipmentDetailDataRequestPost());
  return fetch('/server/equipment/getEquipmentDetailData', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'equipmentId=' + encodeURIComponent(equipmentId)
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.isSuccessful){
      dispatch(doGetEquipmentDetailDataReceiveSuccessPost(res.equipmentDetailData))
    }
    else{
      dispatch(doGetEquipmentDetailDataReceiveErrorPost())
    }
  })
}

export const doChangeImgDisplayIndex = (displayIndex) => {
  return {
    type: CHANGE_IMG_DISPLAY_INDEX,
    displayIndex
  }
}

export const doChangeEquipmentAppointmentFields = (equipmentAppointmentFields) => {
  return {
    type: CHANGE_EQUIPMENT_APPOINTMENT_FIELDS,
    equipmentAppointmentFields
  }
}

export const doChangeEquipmentAppointmentModalVisible = (equipmentAppointmentModalVisible) => {
  return {
    type: CHANGE_EQUIPMENT_APPOINTMENT_MODAL_VISIBLE,
    equipmentAppointmentModalVisible
  }
}