import {
  GET_EQUIPMENT_DATA_REQUEST_POST,
  GET_EQUIPMENT_DATA_RECEIVE_SUCCESS_POST,
  GET_EQUIPMENT_DATA_RECEIVE_ERROR_POST,
  CHANGE_EQUIPMENT_SELECTED_KEYS,
  GET_EQUIPMENT_DETAIL_DATA_REQUEST_POST,
  GET_EQUIPMENT_DETAIL_DATA_RECEIVE_SUCCESS_POST,
  GET_EQUIPMENT_DETAIL_DATA_RECEIVE_ERROR_POST,
  CHANGE_IMG_DISPLAY_INDEX,
  CHANGE_EQUIPMENT_APPOINTMENT_FIELDS,
  CHANGE_EQUIPMENT_APPOINTMENT_MODAL_VISIBLE
} from '../action/equipment';

const initialEquipment = {
  equipmentData: [],
  isGettingEquipmentData: false,
  selectedKeys: ['浮潜套装'],
  equipmentDetailData: null,
  isGettingEquipmentDetailData: false,
  imgDisplayIndex: 0,
  equipmentAppointmentModalVisible: false,
  equipmentAppointmentFields: {
    equipmentColor: {
      value: ''
    },
    equipmentSize: {
      value: ''
    },
    equipmentNum: {
      value: 1
    }
  }
}

export const equipment = (state = initialEquipment, action) => {
  switch(action.type){
    case GET_EQUIPMENT_DATA_REQUEST_POST:
      return {...state, isGettingEquipmentData: true};
    case GET_EQUIPMENT_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingEquipmentData: false, equipmentData: action.equipmentData};
    case GET_EQUIPMENT_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingEquipmentData: false};
    case CHANGE_EQUIPMENT_SELECTED_KEYS:
      return {...state, selectedKeys: action.selectedKeys};
    case GET_EQUIPMENT_DETAIL_DATA_REQUEST_POST:
      return {...state, isGettingEquipmentDetailData: true};
    case GET_EQUIPMENT_DETAIL_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingEquipmentDetailData: false, equipmentDetailData: action.equipmentDetailData, imgDisplayIndex: 0, equipmentAppointmentFields: initialEquipment.equipmentAppointmentFields};
    case GET_EQUIPMENT_DETAIL_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingEquipmentDetailData: false};
    case CHANGE_IMG_DISPLAY_INDEX:
      return {...state, imgDisplayIndex: action.displayIndex}
    case CHANGE_EQUIPMENT_APPOINTMENT_FIELDS:
      return {...state, equipmentAppointmentFields: {...state.equipmentAppointmentFields, ...action.equipmentAppointmentFields}};
    case CHANGE_EQUIPMENT_APPOINTMENT_MODAL_VISIBLE:
      return {...state, equipmentAppointmentModalVisible: action.equipmentAppointmentModalVisible};
    default:
      return state;
  }
}

export default equipment;